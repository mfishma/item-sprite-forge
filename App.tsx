import React, { useState, useEffect } from 'react';
import { AppState, EvolutionMode, SpriteIteration, SpriteParams } from './types';
import { generateSprite, refineSprite, suggestItemName, checkModelAvailability } from './services/geminiService';
import { pixelateImage, fileToBase64 } from './utils/imageProcessing';
import Sidebar from './components/Sidebar';
import Artboard from './components/Artboard';
import History from './components/History';
import Header from './components/Header';
import Hotbar from './components/Hotbar';

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
    model: 'gemini-3.1-flash-image'
  };

  const [params, setParams] = useState<SpriteParams>(DEFAULT_PARAMS);
  const [prompt, setPrompt] = useState('');
  const [itemName, setItemName] = useState(''); 
  const [refImage, setRefImage] = useState<string | undefined>();
  const [error, setError] = useState<string | null>(null);
  const [availableModels, setAvailableModels] = useState<string[]>([]);

  const currentIteration = currentIterationIdx >= 0 ? iterations[currentIterationIdx] : null;

  // Check models on mount
  useEffect(() => {
    const fetchModels = async () => {
      try {
        const models = await checkModelAvailability();
        setAvailableModels(models);
      } catch (e) {
        console.error("Failed to check models", e);
      }
    };
    fetchModels();
  }, []);

  const parseError = (err: unknown): string => {
    if (err instanceof Error) {
      const msg = err.message;
      if (msg.includes('429') || msg.includes('RESOURCE_EXHAUSTED') || msg.includes('quota') || msg.includes('limit: 0')) {
        return 'Quota Notice (Limit 0): Gemini image generation requires Pay-As-You-Go billing on your Google Cloud project. Check "Simulate No API Key" to use offline generation.';
      }
      if (msg.includes('fetch')) {
        return 'Network connection error connecting to server.';
      }
      return msg;
    }
    return String(err);
  };

  // Unified Handler
  const handleAction = async (mode: EvolutionMode = 'remix') => {
    if (!prompt && !refImage && !currentIteration) return;

    setState(AppState.GENERATING);
    setError(null);

    try {
      let resultRaw = '';
      let finalPrompt = prompt;

      const contextName = currentIteration ? currentIteration.name : '';

      // --- 1. Start Name Generation (Parallel) ---
      const namePromise = (!itemName) 
        ? suggestItemName(
            prompt || params.itemType, 
            contextName, 
            currentIteration ? mode : 'new',
            params.simulateNoKey
          )
        : Promise.resolve(itemName);

      if (currentIteration && mode === 'refine') {
         if (!prompt) {
           finalPrompt = "Enhance the details and shading.";
         }
         const originalContext = currentIteration.prompt;
         resultRaw = await refineSprite(currentIteration.imageUrl, finalPrompt, originalContext, params.model, params.simulateNoKey);
      } else {
         const structureImage = currentIteration ? currentIteration.imageUrl : undefined;
         const paletteImage = refImage; 
         const isRevision = !!currentIteration; 
         
         if (!finalPrompt && currentIteration) {
           finalPrompt = currentIteration.prompt;
         }

         resultRaw = await generateSprite(
           finalPrompt || params.itemType, 
           params, 
           structureImage,
           paletteImage,
           isRevision
         );
      }

      // --- 2. Downsample & Quantize with Intelligent Outline & Color Protection ---
      const [pixelated, resolvedName] = await Promise.all([
        pixelateImage(resultRaw, 16, params.outlineStyle),
        namePromise
      ]);
      
      const newIteration: SpriteIteration = {
        id: Math.random().toString(36).substr(2, 9),
        imageUrl: pixelated,
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
      const resultRaw = await refineSprite(
        currentIteration.imageUrl, 
        instruction, 
        currentIteration.prompt,
        params.model,
        params.simulateNoKey
      );

      const pixelated = await pixelateImage(resultRaw, 16, params.outlineStyle);

      const newIteration: SpriteIteration = {
        id: Math.random().toString(36).substr(2, 9),
        imageUrl: pixelated,
        prompt: `${currentIteration.prompt} (${label})`,
        name: currentIteration.name,
        version: nextVersion,
        parentVersion: currentIteration.version,
        actionType: label,
        timestamp: Date.now(),
        params: { ...currentIteration.params }
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
      if (currentIterationIdx === -1) {
        setCurrentIterationIdx(-1);
      }
    }
  };

  const handleReset = () => {
    setCurrentIterationIdx(-1);
    setPrompt('');
    setItemName('');
    setRefImage(undefined);
    setParams(DEFAULT_PARAMS);
    setError(null);
  };

  return (
    <div className="h-screen flex flex-col bg-[#111111] selection:bg-[#3c8527]/50 overflow-hidden">
      <Header />
      
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
            onReset={handleReset}
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
                       GENERATION ERROR
                     </span>
                     <span className="text-sm opacity-90 leading-tight block mt-1">
                       {error}
                     </span>
                   </div>
                </div>
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
      
      <footer className="h-8 border-t-2 border-black px-4 flex items-center justify-between text-lg font-pixel text-[#888] bg-[#1a1a1a] shrink-0">
        <div className="flex gap-4">
          <span className="uppercase text-[#52d334] font-bold">
            {params.model?.replace('gemini-', '').replace('-image', '') || '3.1-FLASH'}
          </span>
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
