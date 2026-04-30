
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SpriteIteration } from '../types';
import { downloadImage, generateSmartFilename } from '../utils/imageProcessing';

interface ArtboardProps {
  iteration: SpriteIteration | null;
  loading: boolean;
  onQuickAction: (instruction: string, label: string) => void;
}

const Artboard: React.FC<ArtboardProps> = ({ iteration, loading, onQuickAction }) => {
  const [zoom, setZoom] = useState(1);
  const [showGrid, setShowGrid] = useState(false);
  const [copied, setCopied] = useState(false);

  // If we have nothing and aren't loading, show the empty state
  if (!iteration && !loading) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center space-y-6"
      >
        <div className="w-32 h-32 mx-auto border-4 border-[#333] border-dashed opacity-50 flex items-center justify-center" aria-hidden="true">
          <div className="w-16 h-16 bg-[#222]"></div>
        </div>
        <div className="space-y-1">
          <h2 className="text-2xl text-[#9ca3af] font-pixel uppercase">Forge is Cold</h2>
          <p className="text-sm text-[#9ca3af] font-bold max-w-[200px] mx-auto font-pixel">Configure parameters to begin.</p>
        </div>
      </motion.div>
    );
  }

  const handleDownload = () => {
    if (iteration) {
      const filename = generateSmartFilename(iteration);
      downloadImage(iteration.imageUrl, filename);
    }
  };

  const handleCopyPrompt = () => {
    const textToCopy = iteration?.actionType || iteration?.prompt;
    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Logic to determine what to show in the display box
  const displayText = iteration?.actionType || iteration?.prompt;
  const displayLabel = iteration?.actionType ? "Applied Action" : "Source Prompt";

  return (
    <div className="w-full flex flex-col items-center gap-3 md:gap-4 max-w-2xl px-2 md:px-4">
      {/* Sprite Viewer */}
      <div className="relative group" role="region" aria-label="Sprite Preview">
        <div className="mc-panel p-6 overflow-hidden bg-[#2a2a2a] border-4 border-black shadow-[inset_4px_4px_0px_#555,inset_-4px_-4px_0px_-#111]">
          <div className="relative">
             {/* Transparency Passthrough Container */}
            <div 
              className="w-48 h-48 xl:w-64 xl:h-64 border-2 border-[#111] bg-[#1a1a1a] pixelated overflow-hidden relative box-content shadow-[inset_4px_4px_0px_#000]"
              style={{
                transform: `scale(${zoom})`,
                transition: 'transform 0.1s steps(4)',
                willChange: 'transform'
              }}
            >
              {iteration && (
                <motion.img 
                  key={iteration.imageUrl}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: loading ? 0.3 : 1 }}
                  transition={{ duration: 0.2, ease: "linear" }}
                  src={iteration.imageUrl} 
                  className="absolute inset-0 w-full h-full pixelated z-10"
                  alt={`Generated sprite: ${iteration.name}`}
                />
              )}
              
              {/* Checkerboard Background */}
              <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                aria-hidden="true"
                style={{
                  backgroundImage: `repeating-conic-gradient(#555 0% 25%, #222 0% 50%)`,
                  backgroundSize: '16px 16px', 
                  backgroundPosition: '0 0'
                }}
              />

              {/* Loading Overlay */}
              <AnimatePresence>
                {loading && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[1px]"
                  >
                    <div className="flex gap-2 mb-3">
                      {[0, 1, 2].map(i => (
                        <motion.div
                          key={i}
                          animate={{ 
                            y: [0, 0, 0, -24, 0, 0, 0],
                            scaleX: [1, 1, 1.25, 0.85, 1.25, 1, 1],
                            scaleY: [1, 1, 0.75, 1.2, 0.75, 1, 1],
                            backgroundColor: ['#3c8527', '#3c8527', '#3c8527', '#52d334', '#3c8527', '#3c8527', '#3c8527']
                          }}
                          transition={{ 
                            duration: 1.5, 
                            repeat: Infinity, 
                            delay: i * 0.2,
                            times: [0, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
                            ease: ["linear", "easeInOut", "easeOut", "easeIn", "easeInOut", "linear"]
                          }}
                          className="w-4 h-4 border-2 border-black origin-bottom"
                        />
                      ))}
                    </div>
                    <p className="text-white text-lg font-pixel uppercase mc-text-shadow animate-pulse">
                      Rendering...
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Grid Overlay */}
            <div className={`absolute inset-0 pointer-events-none transition-opacity ${showGrid ? 'opacity-40' : 'opacity-0'}`}
              aria-hidden="true"
              style={{
                backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
                backgroundSize: '6.25% 6.25%',
                transform: `scale(${zoom})`,
                top: 0, left: 0, right: 0, bottom: 0
              }}
            />
          </div>
        </div>

        {/* Floating Controls */}
        <div className="absolute -right-12 md:-right-14 top-2 md:top-4 flex flex-col gap-2" role="toolbar" aria-label="View Controls">
           <button onClick={() => setZoom(prev => Math.min(prev + 0.5, 3))} className="mc-btn-dark p-2" title="Zoom In" aria-label="Zoom In">
             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
           </button>
           <button onClick={() => setZoom(prev => Math.max(prev - 0.5, 0.5))} className="mc-btn-dark p-2" title="Zoom Out" aria-label="Zoom Out">
             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
           </button>
           
           <button 
             onClick={() => setShowGrid(!showGrid)} 
             className={`p-2 ${showGrid ? 'mc-btn-green' : 'mc-btn-dark'}`} 
             title={showGrid ? "Hide Grid" : "Show Grid"}
             aria-label={showGrid ? "Hide Grid" : "Show Grid"}
             aria-pressed={showGrid}
           >
             {showGrid ? (
               <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M22 20.6L3.4 2 2 3.4 4 5.4V20c0 1.1.9 2 2 2h14.6l2 2 1.4-1.4zM4 20v-4h4v4H4zm4-6v-4h.6l4 4H8zm6 6v-.6l.6.6H14zm6-6h-.6l.6.6V14zM8 4l4 4V4H8zm6 0h4v4h-4V4zm6 0v4.6l2 2V4c0-1.1-.9-2-2-2h-6.6l-2 2H20z" />
               </svg>
             ) : (
               <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z" />
               </svg>
             )}
           </button>

           {iteration && !loading && (
             <button onClick={handleDownload} className="mc-btn-green p-2" title="Download 16x16 PNG" aria-label="Download Sprite as PNG">
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
             </button>
           )}
        </div>
      </div>

      {/* Prompt Display & Copy */}
      <AnimatePresence mode="wait">
        {!loading && iteration && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full max-w-[280px] sm:max-w-md bg-[#1a1a1a] border-2 border-[#333] p-2 flex items-center justify-between gap-2 shadow-[inset_2px_2px_0px_rgba(0,0,0,0.5)]"
          >
              <div className="min-w-0 flex-1 px-2">
                  <p className="text-xs text-[#9ca3af] font-bold uppercase tracking-wider mb-1 font-pixel">{displayLabel}</p>
                  <p className={`text-lg text-[#d4d4d4] font-pixel truncate ${iteration.actionType ? 'text-[#ffff55] font-bold' : ''}`} title={displayText}>
                      {displayText}
                  </p>
              </div>
              <button 
                  onClick={handleCopyPrompt}
                  className={`p-2 transition-all border-2 ${copied ? 'bg-[#3c8527] border-[#1e4812] text-white' : 'bg-[#333] border-[#111] text-[#9ca3af] hover:text-white hover:bg-[#444]'}`}
                  title="Copy Text"
                  aria-label="Copy prompt text to clipboard"
              >
                  {copied ? (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  ) : (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                  )}
              </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Art Director Tools */}
      <AnimatePresence>
        {!loading && iteration && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full space-y-2 md:space-y-3" 
            role="region" 
            aria-labelledby="instant-actions-heading"
          >
               <div className="flex items-center gap-3">
                  <div className="h-[2px] flex-1 bg-[#333] border-b border-[#555]"></div>
                  <h2 id="instant-actions-heading" className="text-xl font-pixel text-[#d4d4d4] uppercase">Instant Actions</h2>
                  <div className="h-[2px] flex-1 bg-[#333] border-b border-[#555]"></div>
               </div>
              
              <div className="flex gap-2 md:gap-4 justify-center flex-wrap">
                <button 
                  onClick={() => onQuickAction("Clean up noise. Reduce the total number of colors. Merge stray pixels into clusters. Do not increase detail level.", "Simplify")}
                  className="mc-btn-dark px-3 py-1 md:px-4 md:py-2 text-sm md:text-lg text-[#52d334] uppercase font-pixel"
                >
                  Simplify
                </button>
                <button 
                  onClick={() => onQuickAction("Enforce geometric symmetry on the silhouette. Ensure left and right sides match shape. Maintain top-left lighting.", "Symmetry")}
                  className="mc-btn-dark px-3 py-1 md:px-4 md:py-2 text-sm md:text-lg text-[#55ffff] uppercase font-pixel"
                  title="Mirrors the LEFT shape to the RIGHT, but preserves shading."
                >
                  Symmetry
                </button>
                <button 
                  onClick={() => onQuickAction("Increase the size of the item. Make it touch the edges of the 16x16 frame. Remove empty padding around the item.", "Maximize")}
                  className="mc-btn-dark px-3 py-1 md:px-4 md:py-2 text-sm md:text-lg text-[#ffaa00] uppercase font-pixel"
                >
                  Maximize
                </button>
                <button 
                  onClick={() => onQuickAction("Regenerate the outline using Jappa-style logic (darkened inner colors).", "Fix Outline")}
                  className="mc-btn-dark px-3 py-1 md:px-4 md:py-2 text-sm md:text-lg text-[#aaffaa] uppercase font-pixel"
                  title="Programmatically regenerates the border using inner colors."
                >
                  Fix Outline
                </button>
              </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Artboard;
