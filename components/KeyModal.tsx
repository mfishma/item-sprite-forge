import React, { useState } from 'react';

interface KeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (key: string) => void;
}

const KeyModal: React.FC<KeyModalProps> = ({ isOpen, onClose, onSave }) => {
  const [keyInput, setKeyInput] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-[#2a2a2a] border-4 border-[#1a1a1a] shadow-[-10px_10px_0px_rgba(0,0,0,0.5)] w-full max-w-md p-6 relative">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-red-600 hover:bg-red-500 text-white font-pixel border-2 border-black active:scale-95 transition-transform"
        >
          X
        </button>

        <h2 className="text-2xl font-pixel text-white mb-4">API KEY REQUIRED</h2>
        
        <div className="space-y-4">
          <p className="text-zinc-300 text-sm leading-relaxed">
            To generate sprites, you need a free Gemini API Key. Get one from Google AI Studio and paste it below.
          </p>

          <a 
            href="https://aistudio.google.com/app/apikey" 
            target="_blank" 
            rel="noreferrer"
            className="block w-full text-center py-2 bg-[#4a4a4a] hover:bg-[#5a5a5a] text-[#55ffff] font-pixel border-2 border-black shadow-[ inset_-2px_-2px_0px_rgba(0,0,0,0.5),_inset_2px_2px_0px_rgba(255,255,255,0.2) ] active:scale-[0.98]"
          >
            GET API KEY
          </a>

          <div className="space-y-2">
            <label htmlFor="apiKey" className="font-pixel text-[#888] text-sm block uppercase">Enter Key</label>
            <input
              id="apiKey"
              type="password"
              value={keyInput}
              onChange={(e) => setKeyInput(e.target.value)}
              placeholder="AIzaSy..."
              className="w-full bg-[#1a1a1a] border-2 border-[#111] text-white p-3 font-mono focus:outline-none focus:border-[#55ffff]"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && keyInput.trim()) {
                  onSave(keyInput.trim());
                }
              }}
            />
            <div className="flex items-start gap-2 mt-2 px-1">
              <span className="text-[#55ffff] text-sm" role="img" aria-label="shield">🛡️</span>
              <p className="text-xs text-[#b3b3b3] leading-snug uppercase font-bold tracking-tight">
                <span className="text-[#ffff55]">SECURITY NOTICE:</span> Your key is securely saved <span className="text-white">ONLY</span> in your browser. It is <span className="text-[#aaffaa]">never transmitted to us</span> and cannot be seen outside of your browser session. It communicates directly with Google's API.
              </p>
            </div>
          </div>
          
          <button 
            onClick={() => onSave(keyInput.trim())}
            disabled={!keyInput.trim()}
            className="w-full mt-4 py-3 bg-[#55ff55] hover:bg-[#77ff77] disabled:bg-[#3a3a3a] disabled:text-[#666] text-black font-pixel font-bold text-lg border-2 border-black active:scale-[0.98] transition-transform"
          >
            SAVE KEY
          </button>
        </div>
      </div>
    </div>
  );
};

export default KeyModal;
