
import React, { useState, useEffect } from 'react';
import { EvolutionMode, SpriteIteration, SpriteParams } from '../types';

interface SidebarProps {
  params: SpriteParams;
  setParams: (p: SpriteParams) => void;
  prompt: string;
  setPrompt: (s: string) => void;
  itemName: string;
  setItemName: (s: string) => void;
  onGenerate: (mode?: EvolutionMode) => void;
  loading: boolean;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  refImage?: string;
  clearRefImage: () => void;
  selectedIteration: SpriteIteration | null;
  onClearSelection: () => void;
  availableModels: string[];
}

const RANDOM_PROMPTS = [
  "A rusted iron battleaxe with a broken handle",
  "A glowing ender-infused amulet with purple sparks",
  "A golden chalice overflowing with red potion",
  "A jagged obsidian dagger with a leather grip",
  "A mystical blue scroll tied with a silver ribbon",
  "A raw emerald ore chunk with stone debris",
  "A flaming magma sword with a dark netherite hilt"
];

const Sidebar: React.FC<SidebarProps> = ({ 
  params, setParams, prompt, setPrompt, itemName, setItemName, onGenerate, loading, 
  onFileChange, refImage, clearRefImage, selectedIteration, onClearSelection, availableModels
}) => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [evolutionMode, setEvolutionMode] = useState<EvolutionMode>('remix');

  // Check if 3.1 is available
  const hasHighQualityModel = availableModels.includes('gemini-3.1-flash-image-preview');

  // WORKFLOW LOGIC:
  // When switching to 'Variant' (Remix), we pre-fill the prompt with the original prompt
  // so the user can just edit "Iron" to "Gold" without losing context.
  // When switching to 'Touch-Up' (Refine), we clear it for specific instructions.
  useEffect(() => {
    if (selectedIteration) {
      if (evolutionMode === 'remix') {
        // Pre-fill with the prompt that created this item to prevent "Telephone Game" quality loss
        setPrompt(selectedIteration.prompt);
        setItemName(selectedIteration.name || '');
      } else {
        // Clear for specific polish instructions
        setPrompt(''); 
        setItemName(selectedIteration.name || '');
      }
    } else {
      // New project mode
      setItemName('');
    }
  }, [selectedIteration, evolutionMode, setPrompt, setItemName]);

  const handleRandomize = () => {
    const random = RANDOM_PROMPTS[Math.floor(Math.random() * RANDOM_PROMPTS.length)];
    setPrompt(random);
  };

  return (
    <div className="space-y-6">
      
      {/* CONTEXT HEADER */}
      <div className="flex items-center justify-between pb-2 border-b-2 border-[#1e1e1e]">
        <h2 className="text-xl text-[#e0e0e0] font-pixel mc-text-shadow uppercase">
          {selectedIteration ? 'Context: Editing' : 'Context: New Project'}
        </h2>
        {selectedIteration && (
           <button 
             onClick={onClearSelection}
             className="text-xs text-[#ff5555] hover:text-[#ffaaaa] font-bold uppercase font-pixel"
             aria-label="Reset context to new project"
           >
             [ Reset ]
           </button>
        )}
      </div>

      {/* SELECTED CONTEXT PREVIEW */}
      {selectedIteration && (
        <div className="mc-panel p-2 flex gap-4 items-start" role="region" aria-labelledby="editing-sprite-heading">
          <div className="w-16 h-16 bg-[#111] border-2 border-[#555] flex-shrink-0 pixelated overflow-hidden relative" aria-hidden="true">
            <img src={selectedIteration.imageUrl} className="w-full h-full object-contain" alt="" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 id="editing-sprite-heading" className="text-lg text-[#ffff55] font-pixel leading-none mb-1">Editing Sprite</h3>
            <p className="text-xs text-[#d4d4d4] leading-tight font-pixel">
              Branching from V.{selectedIteration.version}.
            </p>
          </div>
        </div>
      )}

      {/* EVOLUTION MODE SELECTOR */}
      {selectedIteration && (
        <div className="grid grid-cols-2 gap-2" role="group" aria-label="Evolution Mode">
          <button
            onClick={() => setEvolutionMode('remix')}
            className={`mc-btn-dark py-3 text-lg uppercase flex flex-col items-center leading-none gap-1 ${evolutionMode === 'remix' ? 'active' : ''}`}
            aria-pressed={evolutionMode === 'remix'}
          >
            <span>Variant</span>
            <span className="text-xs opacity-60 normal-case font-pixel">New Version</span>
          </button>
          <button
            onClick={() => setEvolutionMode('refine')}
            className={`mc-btn-dark py-3 text-lg uppercase flex flex-col items-center leading-none gap-1 ${evolutionMode === 'refine' ? 'active' : ''}`}
            aria-pressed={evolutionMode === 'refine'}
          >
            <span>Touch-Up</span>
            <span className="text-xs opacity-60 normal-case font-pixel">Fix Pixels</span>
          </button>
        </div>
      )}

      {selectedIteration && (
        <p className="text-xs text-[#a1a1aa] font-bold px-1" aria-live="polite">
          {evolutionMode === 'remix' 
            ? "Create a new item based on this shape. (e.g. Change 'Iron' to 'Gold')"
            : "Keep this exact item but fix artifacts. (e.g. 'Remove the noise')"}
        </p>
      )}

      {/* MAIN INPUTS */}
      <section className="space-y-4" aria-label="Main Generation Inputs">
        <div>
            <div className="flex justify-between items-baseline mb-2">
                <label htmlFor="prompt-input" className="text-lg text-[#e0e0e0] font-pixel mc-text-shadow uppercase">
                    {selectedIteration 
                        ? (evolutionMode === 'remix' ? 'Concept' : 'Fix Instruction')
                        : 'Concept Description'}
                </label>
                {!selectedIteration && !prompt && (
                    <button 
                        onClick={handleRandomize}
                        className="text-xs text-[#52d334] hover:underline uppercase font-bold tracking-wider font-pixel"
                    >
                        [ Surprise Me ]
                    </button>
                )}
            </div>
            <textarea 
            id="prompt-input"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={selectedIteration 
                ? (evolutionMode === 'remix' ? "Modify the original prompt..." : "e.g. 'Make the outline darker' or 'Remove the stray gray pixels'...") 
                : "e.g. 'A mysterious golden locket with a glowing center'..."}
            className="w-full mc-input p-3 text-lg min-h-[100px] resize-none focus:text-white placeholder-zinc-500 font-pixel leading-tight"
            />
        </div>
        
        {/* ITEM NAME INPUT */}
        <div>
            <div className="flex justify-between items-end mb-1">
                <label htmlFor="item-name-input" className="text-sm font-bold text-[#d4d4d4] uppercase font-pixel">Item Name (Optional)</label>
            </div>
            <input 
                id="item-name-input"
                type="text" 
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder={selectedIteration ? (selectedIteration.name || "Auto-generated") : "Auto-generated"}
                className="w-full mc-input p-2 text-lg text-[#ffff55] placeholder-zinc-500 font-pixel"
            />
        </div>
      </section>

      {/* ADVANCED PARAMETERS (Only for New or Variant) */}
      {(!selectedIteration || evolutionMode === 'remix') && (
        <section className="mc-panel p-1" aria-labelledby="fine-tune-heading">
          <button 
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="w-full px-3 py-2 flex items-center justify-between hover:bg-[#ffffff10] transition-colors"
            aria-expanded={showAdvanced}
            aria-controls="advanced-settings-panel"
          >
            <div className="flex items-center gap-2">
              <span id="fine-tune-heading" className="text-lg font-pixel text-[#e0e0e0] uppercase">Fine-Tune Settings</span>
            </div>
            <span className="text-xs font-bold text-[#cccccc]" aria-hidden="true">{showAdvanced ? '[-]' : '[+]'}</span>
          </button>

          {showAdvanced && (
            <div id="advanced-settings-panel" className="p-3 border-t-2 border-[#1e1e1e] space-y-4 bg-[#252526]">
              {/* Material & Type */}
              <div className="space-y-2">
                <span className="text-sm font-bold text-[#d4d4d4] uppercase block font-pixel">Material & Type</span>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label htmlFor="material-select" className="sr-only">Material</label>
                    <select 
                        id="material-select"
                        value={params.material}
                        onChange={(e) => setParams({...params, material: e.target.value})}
                        className="mc-input p-2 text-lg w-full font-pixel"
                    >
                        <option value="adaptive">Auto-Material</option>
                        <option>Gold</option><option>Iron</option><option>Copper</option>
                        <option>Diamond</option><option>Emerald</option><option>Parchment</option>
                        <option>Leather</option><option>Netherite</option><option>Wooden</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="type-select" className="sr-only">Item Type</label>
                    <select 
                        id="type-select"
                        value={params.itemType}
                        onChange={(e) => setParams({...params, itemType: e.target.value})}
                        className="mc-input p-2 text-lg w-full font-pixel"
                    >
                        <option value="adaptive">Auto-Type</option>
                        <option value="weapon">Weapon</option>
                        <option>Currency</option><option>Jewelry</option>
                        <option>Scroll</option><option>Music Disc</option><option>Tool</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Complexity & Orientation */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="complexity-select" className="text-sm font-bold text-[#d4d4d4] uppercase font-pixel">Complexity</label>
                  <select 
                    id="complexity-select"
                    value={params.complexity}
                    onChange={(e) => setParams({...params, complexity: e.target.value as any})}
                    className="mc-input p-2 text-lg font-pixel"
                  >
                    <option value="adaptive">Auto</option>
                    <option value="simple">Simple</option>
                    <option value="detailed">Detailed</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="orientation-select" className="text-sm font-bold text-[#d4d4d4] uppercase font-pixel">View</label>
                  <select 
                    id="orientation-select"
                    value={params.orientation}
                    onChange={(e) => setParams({...params, orientation: e.target.value as any})}
                    className="mc-input p-2 text-lg font-pixel"
                  >
                    <option value="adaptive">Auto</option>
                    <option value="diagonal">Diagonal</option>
                    <option value="frontal">Frontal</option>
                    <option value="vertical">Vertical</option>
                  </select>
                </div>
              </div>

              {/* Outline Style & Model */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="outline-select" className="text-sm font-bold text-[#d4d4d4] uppercase font-pixel">Outline Style</label>
                  <select 
                    id="outline-select"
                    value={params.outlineStyle}
                    onChange={(e) => setParams({...params, outlineStyle: e.target.value as any})}
                    className="mc-input p-2 text-lg w-full font-pixel"
                  >
                    <option value="adaptive">Auto (AI Best Fit)</option>
                    <option value="default">Jappa Style (Standard)</option>
                    <option value="bold">High Contrast (Solid Black)</option>
                    <option value="none">Borderless (Painterly)</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="model-select" className="text-sm font-bold text-[#d4d4d4] uppercase font-pixel">AI Model</label>
                  <select 
                    id="model-select"
                    value={params.model || 'gemini-2.5-flash-image'}
                    onChange={(e) => setParams({...params, model: e.target.value as any})}
                    className="mc-input p-2 text-lg w-full font-pixel"
                  >
                    <option value="gemini-2.5-flash-image">Gemini 2.5 (Fast/Free)</option>
                    <option value="gemini-3.1-flash-image-preview" disabled={!hasHighQualityModel}>
                      {hasHighQualityModel ? 'Gemini 3.1 (High Quality)' : 'Gemini 3.1 (Locked - Key Required)'}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </section>
      )}

      {/* REF IMAGE - Available in New Project OR Variant Mode */}
      {(!selectedIteration || evolutionMode === 'remix') && (
        <section className="space-y-2" aria-labelledby="palette-source-heading">
          <h2 id="palette-source-heading" className="text-lg text-[#e0e0e0] font-pixel block uppercase">Palette Source</h2>
          <div className="relative">
            {refImage ? (
              <div className="relative group mc-panel aspect-video bg-[#111] flex items-center justify-center overflow-hidden">
                <img src={refImage} className="w-full h-full object-contain pixelated" alt="Uploaded reference" />
                <button 
                  onClick={clearRefImage}
                  className="absolute top-2 right-2 mc-btn-dark px-2 text-red-500 shadow-md"
                  aria-label="Remove reference image"
                >
                  ×
                </button>
              </div>
            ) : (
              <label className="relative flex flex-col items-center justify-center w-full h-24 mc-input border-2 border-dashed border-[#555] cursor-pointer hover:bg-[#111] transition-all focus-within:ring-2 focus-within:ring-white focus-within:border-white">
                <div className="flex flex-col items-center justify-center pt-2 pb-2">
                  <span className="text-2xl text-[#b3b3b3] mb-1" aria-hidden="true">+</span>
                  <p className="text-xs font-bold text-[#b3b3b3] uppercase font-pixel">Upload Reference</p>
                </div>
                <input 
                    type="file" 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                    accept="image/*" 
                    onChange={onFileChange} 
                    aria-label="Upload Reference Image"
                />
              </label>
            )}
          </div>
        </section>
      )}

      {/* Main Action Button */}
      <div className="pt-4 pb-8">
        <button 
          disabled={loading || (!prompt && !refImage && !selectedIteration)}
          onClick={() => onGenerate(selectedIteration ? evolutionMode : undefined)}
          className={`w-full py-4 text-xl tracking-widest uppercase
            ${(selectedIteration && evolutionMode === 'refine') ? 'mc-btn-dark text-[#52d334]' : 'mc-btn-green'}
          `}
        >
          {loading ? 'Forging...' : (
            selectedIteration 
              ? (evolutionMode === 'remix' ? 'Forge Variant' : 'Apply Fixes') 
              : 'Manifest Sprite'
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
