import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-3 md:py-4 bg-[#212121] border-b-2 border-black px-6 flex items-center justify-between shrink-0 shadow-lg relative z-20">
      <div className="flex items-center gap-4">
        <div className="flex flex-col justify-center py-1">
          <img 
            src="/logo.png" 
            alt="ItemSprite Forge" 
            className="h-8 md:h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <p className="text-[10px] text-[#d4d4d4] font-bold uppercase tracking-wider font-pixel mt-1">
            Vanilla Asset Director <span className="text-[#ffff55]">v1.2</span>
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <a 
          href="https://github.com/mfishma/item-sprite-forge#readme" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mc-btn-dark px-4 py-2 text-lg hidden sm:block uppercase text-center flex-col justify-center no-underline hover:text-white text-[#d4d4d4]"
        >
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
