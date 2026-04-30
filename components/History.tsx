
import React from 'react';
import { SpriteIteration } from '../types';
import { downloadImage, generateSmartFilename } from '../utils/imageProcessing';

interface HistoryProps {
  iterations: SpriteIteration[];
  currentIndex: number;
  onSelect: (index: number) => void;
}

const History: React.FC<HistoryProps> = ({ iterations, currentIndex, onSelect }) => {
  const handleDownload = () => {
    if (currentIndex >= 0 && iterations[currentIndex]) {
      const iter = iterations[currentIndex];
      const filename = generateSmartFilename(iter);
      downloadImage(iter.imageUrl, filename);
    }
  };

  return (
    <div className="h-full flex flex-col gap-4">
      <div className="flex items-center justify-between pb-2 border-b-2 border-[#1e1e1e]">
        <h2 className="text-xl text-[#e0e0e0] font-pixel mc-text-shadow uppercase">History</h2>
        <span className="text-lg font-pixel text-[#d4d4d4]">{iterations.length}</span>
      </div>
      
      {iterations.length > 0 && (
         <div className="bg-[#3b3b3b] border-2 border-[#000] p-2 text-center shadow-[inset_2px_2px_0px_#555,inset_-2px_-2px_0px_#222]">
            <p className="text-xs text-[#e0e0e0] font-bold font-pixel">Select item to Branch or Remix</p>
         </div>
      )}

      <div className="flex-1 space-y-2 pr-1 custom-scrollbar" role="list">
        {iterations.length === 0 ? (
          <div className="h-full flex items-center justify-center">
            <p className="text-xl font-pixel text-[#9ca3af] rotate-90 whitespace-nowrap uppercase">No Data</p>
          </div>
        ) : (
          iterations.map((iter, idx) => {
            const isSelected = currentIndex === idx;
            return (
              <button
                key={iter.id}
                onClick={() => onSelect(idx)}
                className={`w-full group relative flex items-center gap-3 p-2 border-2 text-left transition-all
                  ${isSelected ? 'bg-[#333] border-[#fff] shadow-[inset_0_0_0_2px_#3c8527]' : 'bg-[#222] border-[#000] hover:bg-[#2a2a2a]'}
                `}
                aria-selected={isSelected}
                role="listitem"
              >
                {/* Branch Line Visual (simple vertical line) */}
                {idx < iterations.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-[-16px] w-[2px] bg-[#333] -z-10" aria-hidden="true"></div>
                )}

                <div className={`w-12 h-12 bg-[#111] border-2 border-[#444] pixelated flex items-center justify-center flex-shrink-0`} aria-hidden="true">
                  <img src={iter.imageUrl} className="w-full h-full object-contain" alt="" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1">
                     <div className="flex items-center gap-2">
                        <span className={`text-lg font-pixel leading-none truncate ${isSelected ? 'text-[#ffff55]' : 'text-[#d4d4d4]'}`}>
                          V.{iter.version}
                        </span>
                        {iter.parentVersion && (
                            <span className="text-[10px] text-[#9ca3af] font-bold font-pixel">
                                from V.{iter.parentVersion}
                            </span>
                        )}
                     </div>
                     {isSelected && <span className="text-xs bg-[#3c8527] text-white px-1 font-bold flex-shrink-0 uppercase font-pixel">Active</span>}
                  </div>
                  <p className={`text-xs truncate font-bold font-pixel ${isSelected ? 'text-white' : 'text-[#9ca3af]'} ${iter.actionType ? 'text-[#aaffaa]' : ''}`}>
                    {iter.actionType || iter.prompt || 'Untitled'}
                  </p>
                </div>
              </button>
            );
          })
        )}
      </div>

      {iterations.length > 0 && (
        <button 
          className="mc-btn-gray w-full py-3 text-lg font-bold flex items-center justify-center gap-2 uppercase font-pixel"
          onClick={handleDownload}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
          Save PNG
        </button>
      )}
    </div>
  );
};

export default History;
