
import React, { useState, useEffect } from 'react';
import { AppState, EvolutionMode, SpriteIteration, SpriteParams } from './types';
import { generateSprite, refineSprite, suggestItemName, checkModelAvailability } from './services/geminiService';
import { pixelateImage, fileToBase64 } from './utils/imageProcessing';
import Sidebar from './components/Sidebar';
import Artboard from './components/Artboard';
import History from './components/History';
import Header from './components/Header';
import Hotbar from './components/Hotbar';
import KeyModal from './components/KeyModal';

// Add type definition for the AI Studio helper
declare global {
  interface AIStudio {
    hasSelectedApiKey: () => Promise<boolean>;
    openSelectKey: () => Promise<void>;
  }
  
  interface Window {
    aistudio?: AIStudio;
  }
}

const App: React.FC = () => {
  const [state, setState] = useState<AppState>(AppState.IDLE);
  const [iterations, setIterations] = useState<SpriteIteration[]>([]);
  const [nextVersion, setNextVersion] = useState<number>(1); // Version counter
  const [currentIterationIdx, setCurrentIterationIdx] = useState<number>(-1);
  const DEFAULT_PARAMS: SpriteParams = {
    material: 'adaptive',
    itemType: 'adaptive',
    complexity: 'adaptive',
    orientation: 'adaptive',
    outlineStyle: 'default',
    model: 'gemini-2.5-flash-image'
  };

  const [params, setParams] = useState<SpriteParams>(DEFAULT_PARAMS);
  const [prompt, setPrompt] = useState('');
  const [itemName, setItemName] = useState(''); 
  const [refImage, setRefImage] = useState<string | undefined>();
  const [error, setError] = useState<string | null>(null);
  const [availableModels, setAvailableModels] = useState<string[]>([]);
  const [isKeyModalOpen, setIsKeyModalOpen] = useState(false);

  const currentIteration = currentIterationIdx >= 0 ? iterations[currentIterationIdx] : null;

  // Silent check for API key and available models
  useEffect(() => {
    const checkKeyAndModels = async () => {
      try {
        if (window.aistudio) {
          await window.aistudio.hasSelectedApiKey();
        }
        // Check available models
        const models = await checkModelAvailability();
        setAvailableModels(models);
      } catch (e) {
        console.error("Failed to check API key or models", e);
      }
    };
    checkKeyAndModels();
  }, []);

  const handleSelectKey = async () => {
    if (window.aistudio) {
      try {
        await window.aistudio.openSelectKey();
        setError(null);
        if (state === AppState.ERROR) {
            setState(AppState.IDLE);
        }
      } catch (e) {
        console.error("Key selection failed/cancelled", e);
      }
    } else {
      setIsKeyModalOpen(true);
    }
  };

  const handleManualKeySave = async (manualKey: string) => {
    if (manualKey) {
      localStorage.setItem('GEMINI_API_KEY', manualKey);
      setError(null);
      setState(AppState.IDLE);
      setIsKeyModalOpen(false);
      // Re-check models with new key
      try {
        const models = await checkModelAvailability();
        setAvailableModels(models);
      } catch (e) {
        console.error("Failed to fetch models with manual key", e);
      }
    }
  };

  const parseError = (err: unknown): string => {
    if (err instanceof Error) {
      const msg = err.message;
      if (msg.includes('429') || msg.includes('RESOURCE_EXHAUSTED') || msg.includes('quota')) {
        return 'Rate limit exceeded. The free tier may be busy. Please try again in a moment, or consider adding your own API key in the settings.';
      }
      if (msg.includes('fetch')) {
         return 'Network error. Please check your connection and ensure your API key is valid.';
      }
      return msg;
    }
    const msg = String(err);
    if (msg.includes('429') || msg.includes('RESOURCE_EXHAUSTED') || msg.includes('quota')) {
      return 'QUOTA_EXHAUSTED';
    }
    if (msg.includes('403') || msg.includes('PERMISSION_DENIED') || msg.includes('permission')) {
      return 'PERMISSION_DENIED';
    }
    return msg;
  };

  // Unified Handler
  const handleAction = async (mode: EvolutionMode = 'remix') => {
    if (!prompt && !refImage && !currentIteration) return;

    setState(AppState.GENERATING);
    setError(null);

    try {
      let resultRaw = '';
      let finalPrompt = prompt;

      // Determine context name for the AI namer
      const contextName = currentIteration ? currentIteration.name : '';

      // --- 1. Start Name Generation (Parallel) ---
      // Only generate if the name is completely blank.
      // If the user (or previous iteration) set a name, keep it.
      const namePromise = (!itemName) 
        ? suggestItemName(
            prompt || params.itemType, 
            contextName, 
            currentIteration ? mode : 'new'
          )
        : Promise.resolve(itemName);

      if (currentIteration && mode === 'refine') {
         // --- TOUCH-UP (REFINE) MODE ---
         // "Fix pixels on this specific image"
         if (!prompt) {
             finalPrompt = "Enhance the details and shading.";
         }
         // Pass the original prompt (which describes the object) as context
         // This helps the AI understand WHAT the object is supposed to be, not just what it looks like now.
         const originalContext = currentIteration.prompt;
         resultRaw = await refineSprite(currentIteration.imageUrl, finalPrompt, originalContext, params.model);
      } else {
         // --- VARIANT (REMIX) / NEW MODE ---
         // "Make a new image based on this shape/idea"
         
         const sourceImage = currentIteration ? currentIteration.imageUrl : refImage;
         const isRevision = !!currentIteration; 
         
         // In the new flow, prompt is already pre-filled with the original prompt
         // if the user hasn't edited it, so we don't need to fallback to currentIteration.prompt here
         // unless it's empty for some reason.
         if (!finalPrompt && currentIteration) {
            finalPrompt = currentIteration.prompt;
         }

         resultRaw = await generateSprite(
            finalPrompt || params.itemType, 
            params, 
            sourceImage, // We pass the old image as a reference/structure guide
            isRevision
         );
      }

      // --- 2. Await Results ---
      const [pixelated, resolvedName] = await Promise.all([
          pixelateImage(resultRaw),
          namePromise
      ]);
      
      const newIteration: SpriteIteration = {
        id: Math.random().toString(36).substr(2, 9),
        imageUrl: pixelated,
        // For Variants, we save the full prompt the user used (e.g. "Gold Sword")
        // For Touch-ups, we might want to display the specific action, but store the underlying prompt of the parent for future remixes?
        // To keep it simple: The prompt field tracks what generated *this* image.
        prompt: finalPrompt || (currentIteration ? `Remix: ${currentIteration.params.material}` : params.itemType),
        name: resolvedName,
        version: nextVersion,
        parentVersion: currentIteration ? currentIteration.version : null,
        timestamp: Date.now(),
        params: { ...params, referenceImage: refImage }
      };

      setNextVersion(v => v + 1);
      setIterations(prev => [newIteration, ...prev]);
      setCurrentIterationIdx(0);
      setItemName(resolvedName); 
      setState(AppState.IDLE);
      // We do NOT clear the prompt here in Variant mode, so the user can make another tweak easily.
      // But for New mode, we usually clear it.
      if (!currentIteration) {
        setPrompt(''); 
      }
    } catch (err: unknown) {
      const parsed = parseError(err);
      setError(parsed);
      setState(AppState.ERROR);
    }
  };

  const handleQuickAction = async (instruction: string, label: string) => {
    if (!currentIteration) return;
    setState(AppState.GENERATING);
    try {
        let resultRaw = '';
        
        // INTERCEPT: Handle deterministic actions locally
        if (label === 'Maximize') {
            const { maximizeSprite } = await import('./utils/imageProcessing');
            resultRaw = await maximizeSprite(currentIteration.imageUrl);
        } else if (label === 'Symmetry') {
            const { enforceSymmetry } = await import('./utils/imageProcessing');
            resultRaw = await enforceSymmetry(currentIteration.imageUrl);
        } else if (label === 'Fix Outline') {
            const { regenerateOutline } = await import('./utils/imageProcessing');
            resultRaw = await regenerateOutline(currentIteration.imageUrl);
        } else {
            // Fallback to AI for "Simplify" or other creative tasks
            // Pass the original prompt as context if available
            const originalPrompt = currentIteration.prompt;
            resultRaw = await refineSprite(currentIteration.imageUrl, instruction, originalPrompt, params.model);
        }

        // We still run pixelateImage to ensure format consistency (though local fns return valid PNGs)
        const pixelated = await pixelateImage(resultRaw);
        
        const newIteration: SpriteIteration = {
            id: Math.random().toString(36).substr(2, 9),
            imageUrl: pixelated,
            prompt: instruction, // For quick actions, the prompt is the action itself
            name: currentIteration.name, // Quick actions preserve name
            version: nextVersion,
            parentVersion: currentIteration.version,
            actionType: label, // Store the friendly label
            timestamp: Date.now(),
            params: currentIteration.params
        };

        setNextVersion(v => v + 1);
        setIterations(prev => [newIteration, ...prev]);
        setCurrentIterationIdx(0);
        setState(AppState.IDLE);
    } catch (err: unknown) {
        const parsed = parseError(err);
        setError(parsed);
        setState(AppState.ERROR);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const base64 = await fileToBase64(e.target.files[0]);
      setRefImage(base64);
      // We don't necessarily clear current iteration index if we are in variant mode
      // But standard behavior for 'upload' is usually 'new project'.
      // However, if we are in 'Variant' mode, we WANT to stay on the iteration.
      // Sidebar handles the logic of showing the upload button.
      // If we are Editing, we just update the ref image state, we don't deselect the item.
      if (currentIterationIdx === -1) {
          // Only clear selection if we weren't already editing
          setCurrentIterationIdx(-1);
      }
    }
  };

  const handleClearSelection = () => {
    setCurrentIterationIdx(-1);
    setPrompt('');
    setItemName('');
    // Also clear ref image when completely resetting? Usually yes.
    setRefImage(undefined);
    // Reset params to default to prevent bleeding of previous settings
    setParams(DEFAULT_PARAMS);
  };

  return (
    <div className="h-screen flex flex-col bg-[#111111] selection:bg-[#3c8527]/50 overflow-hidden">
      <Header onChangeKey={handleSelectKey} />
      
      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        <div className="w-full lg:w-80 border-r-2 border-black p-6 space-y-8 overflow-y-auto custom-scrollbar bg-[#313233] shadow-[inset_-4px_0px_10px_rgba(0,0,0,0.5)] z-10">
          <Sidebar 
            params={params} 
            setParams={setParams} 
            prompt={prompt} 
            setPrompt={setPrompt}
            itemName={itemName}
            setItemName={setItemName}
            onGenerate={handleAction}
            loading={state === AppState.GENERATING}
            onFileChange={handleFileChange}
            refImage={refImage}
            clearRefImage={() => setRefImage(undefined)}
            selectedIteration={currentIteration}
            onClearSelection={handleClearSelection}
            availableModels={availableModels}
          />
        </div>

        <div className="flex-1 bg-[#212121] flex flex-col items-center relative overflow-y-auto custom-scrollbar shadow-[inset_0px_0px_20px_#000]">
          <div className="w-full flex-1 flex flex-col items-center justify-center p-2 lg:p-4 min-h-0">
            {error && (
              <div className="absolute top-4 left-4 right-4 bg-[#500] border-2 border-red-500 text-white px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 z-50 font-pixel shadow-[0_10px_20px_rgba(0,0,0,0.5)] animate-in slide-in-from-top-2">
                <div className="flex items-center gap-3">
                   <span className="text-2xl">⚠️</span>
                   <div>
                     <span className="font-bold text-xl block">
                        {error === 'QUOTA_EXHAUSTED' ? "QUOTA LIMIT REACHED" : 
                         error === 'PERMISSION_DENIED' ? "ACCESS DENIED" : "SYSTEM ERROR"}
                     </span>
                     <span className="text-sm opacity-90 leading-tight block mt-1">
                       {error === 'QUOTA_EXHAUSTED' 
                         ? "You hit the daily limit. Wait for it to reset, or switch to a paid API key." 
                         : error === 'PERMISSION_DENIED'
                         ? "Your API key does not have access to this model. Try switching keys."
                         : error}
                     </span>
                   </div>
                </div>
                {(error === 'QUOTA_EXHAUSTED' || error === 'PERMISSION_DENIED') && (
                  <button 
                    onClick={handleSelectKey}
                    className="mc-btn-gray px-4 py-2 text-black font-bold whitespace-nowrap hover:bg-white transition-colors"
                  >
                    SWITCH KEY
                  </button>
                )}
              </div>
            )}
            
            <Artboard 
              iteration={currentIteration} 
              loading={state === AppState.GENERATING}
              onQuickAction={handleQuickAction}
            />
          </div>

          <div className="w-full border-t-2 border-black bg-[#222] shrink-0">
            <Hotbar currentIteration={currentIteration} />
          </div>
        </div>

        <div className="w-full lg:w-72 border-l-2 border-black p-6 space-y-6 overflow-y-auto custom-scrollbar bg-[#313233] shadow-[inset_4px_0px_10px_rgba(0,0,0,0.5)] z-10">
          <History 
            iterations={iterations} 
            currentIndex={currentIterationIdx}
            onSelect={setCurrentIterationIdx}
          />
        </div>
      </main>

      <KeyModal 
        isOpen={isKeyModalOpen} 
        onClose={() => setIsKeyModalOpen(false)} 
        onSave={handleManualKeySave} 
      />
      
      <footer className="h-8 border-t-2 border-black px-4 flex items-center justify-between text-lg font-pixel text-[#888] bg-[#1a1a1a] shrink-0">
        <div className="flex gap-4">
          <span className="uppercase">{params.model?.replace('gemini-', '').replace('-image', '').replace('-preview', '') || '2.5-FLASH'}</span>
          <span>16×16 PNG</span>
        </div>
        <div>
          &copy; 2026 ITEMSPRITE FORGE
        </div>
      </footer>
    </div>
  );
};

export default App;
