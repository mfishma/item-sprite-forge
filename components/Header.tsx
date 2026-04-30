
import React from 'react';

interface HeaderProps {
  onChangeKey: () => void;
}

const Header: React.FC<HeaderProps> = ({ onChangeKey }) => {
  return (
    <header className="py-3 md:py-4 bg-[#212121] border-b-2 border-black px-6 flex items-center justify-between shrink-0 shadow-lg relative z-20">
      <div className="flex items-center gap-4">
        {/* Minecraft Icon Box */}
        <div className="w-10 h-10 bg-[#585858] border-2 border-black flex items-center justify-center relative shadow-[inset_2px_2px_0px_rgba(255,255,255,0.2),inset_-2px_-2px_0px_rgba(0,0,0,0.5)]" aria-hidden="true">
           <div className="w-5 h-5 bg-[#3c8527]"></div>
        </div>
        
        <div className="flex flex-col justify-center py-1">
          <h1 className="text-lg md:text-xl text-[#ffffff] mc-text-shadow font-pixel tracking-tight leading-normal uppercase">
            ItemSprite Forge
          </h1>
          <p className="text-[10px] text-[#d4d4d4] font-bold uppercase tracking-wider font-pixel">
            Vanilla Asset Director <span className="text-[#ffff55]">v1.1</span>
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <button 
          onClick={onChangeKey} 
          className="mc-btn-dark px-3 py-2 text-sm md:text-lg flex items-center gap-2 text-[#d4d4d4] hover:text-white transition-colors uppercase"
          title="Change API Key"
          aria-label="Change API Key"
        >
          <span className="hidden md:inline">Key</span>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 010 2 1 1 0 100-2 2 2 0 010-2z" clipRule="evenodd" /></svg>
        </button>

        <a href="https://github.com/mfishma/item-sprite-forge#readme" target="_blank" rel="noopener noreferrer" className="mc-btn-dark px-4 py-2 text-lg hidden sm:block uppercase text-center flex-col justify-center no-underline hover:text-white text-[#d4d4d4]">
          View README
        </a>
        <button className="mc-btn-gray px-4 py-2 text-lg font-bold uppercase">
          Export Pack
        </button>
      </div>
    </header>
  );
};

export default Header;
