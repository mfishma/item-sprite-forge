
import React, { useState } from 'react';

interface KeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (key: string) => void;
}

const KeyModal: React.FC<KeyModalProps> = ({ isOpen, onClose, onSave }) => {
  const [key, setKey] = useState('');

  if (!isOpen) return null;

  return (
    <dialog 
      open 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 m-0 w-full h-full max-w-none max-h-none border-none"
    >
      <div className="w-full max-w-md mc-panel p-6 bg-[#313233] border-4 border-black shadow-[inset_4px_4px_0px_#555,inset_-4px_-4px_0px_#222]">
        <h2 id="modal-title" className="text-2xl font-pixel text-[#ffff55] mc-text-shadow uppercase mb-4 text-center">
          Authentication Required
        </h2>
        
        <div className="space-y-4 font-pixel">
          <p className="text-[#d4d4d4] text-lg leading-tight">
            To generate sprites on this site, you need a <span className="text-white">Gemini API Key</span>.
          </p>
          
          <div className="bg-[#111] p-3 border-2 border-[#555] rounded-sm">
            <p className="text-[#aaffaa] text-sm mb-2">
              PRO TIP: You can get a <span className="underline italic">FREE</span> key (up to 15 images/min) in seconds from Google:
            </p>
            <a 
              href="https://aistudio.google.com/app/apikey" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#55ffff] hover:underline break-all text-xs"
            >
              aistudio.google.com/app/apikey
            </a>
          </div>

          <div className="space-y-1">
            <label htmlFor="key-input" className="text-sm font-bold text-[#d4d4d4] uppercase">
              Enter API Key:
            </label>
            <input
              id="key-input"
              type="password"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              placeholder="AIzaSy..."
              className="w-full mc-input p-3 text-lg font-pixel placeholder:opacity-30"
              autoFocus
            />
            <div className="flex items-start gap-2 mt-2 px-1">
              <span className="text-[#55ffff] text-sm" role="img" aria-label="shield">🛡️</span>
              <p className="text-xs text-[#b3b3b3] leading-tight uppercase font-bold tracking-tighter">
                Your key is stored <span className="text-[#ffff55]">strictly locally</span> in your browser. 
                It is sent <span className="text-white">directly to Google</span> and never touches our servers.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <button 
              onClick={onClose}
              className="mc-btn-gray py-3 text-lg"
            >
              Cancel
            </button>
            <button 
              onClick={() => onSave(key)}
              disabled={!key.trim()}
              className="mc-btn-green py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Connect
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default KeyModal;
