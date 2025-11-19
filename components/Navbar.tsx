import React from 'react';
import { Terminal } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4 pointer-events-none">
      <div className="container mx-auto flex justify-between items-center">
        <div className="pointer-events-auto bg-retro-black/80 backdrop-blur px-4 py-2 border border-retro-green/50 flex items-center gap-2">
          <Terminal className="text-retro-green w-4 h-4" />
          <span className="font-pixel text-xs text-white">MUNYA.DEV</span>
        </div>

        <div className="hidden md:flex gap-4 pointer-events-auto">
           {['About', 'Projects', 'Contact'].map((item) => (
             <button 
               key={item}
               onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
               className="font-pixel text-[10px] text-retro-green hover:text-white bg-retro-black/80 px-3 py-2 border border-transparent hover:border-retro-green transition-all"
             >
               {item.toUpperCase()}
             </button>
           ))}
        </div>
      </div>
    </nav>
  );
};