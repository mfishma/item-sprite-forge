
import React from 'react';
import { SpriteIteration } from '../types';

interface HotbarProps {
  currentIteration: SpriteIteration | null;
}

const Hotbar: React.FC<HotbarProps> = ({ currentIteration }) => {
  const Slot = ({ children, isSelected = false }: { children?: React.ReactNode, isSelected?: boolean }) => (
    <div className={`
      relative w-12 h-12 flex items-center justify-center
      bg-[#8b8b8b] border-2 border-black
      ${isSelected ? 'ring-4 ring-white z-10 scale-110 shadow-xl' : ''}
    `}
    style={{
      boxShadow: 'inset -2px -2px 0px #ffffff, inset 2px 2px 0px #373737'
    }}
    aria-hidden={!isSelected}
    >
      {children}
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-2 md:gap-4 py-3 md:py-6 w-full" role="region" aria-labelledby="hotbar-heading">
      <h2 id="hotbar-heading" className="text-lg font-pixel uppercase text-zinc-400 tracking-widest">
        In-Game Hotbar Preview
      </h2>
      
      <div className="flex items-center bg-[#c6c6c6] p-1 border-2 border-black shadow-2xl">
        <Slot></Slot>
        <Slot></Slot>
        <Slot></Slot>
        
        {/* THE GENERATED SPRITE SLOT */}
        <Slot isSelected={true}>
          {currentIteration ? (
            <img 
              src={currentIteration.imageUrl} 
              className="w-8 h-8 pixelated drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]" 
              alt="Preview in hotbar" 
            />
          ) : (
            <div className="w-6 h-6 border-2 border-dashed border-zinc-400 opacity-20"></div>
          )}
        </Slot>

        <Slot></Slot>
        <Slot></Slot>
        <Slot></Slot>
        <Slot></Slot>
        <Slot></Slot>
      </div>
    </div>
  );
};

export default Hotbar;
