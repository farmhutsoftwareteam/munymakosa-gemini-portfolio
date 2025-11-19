import React, { useState, useEffect } from 'react';
import { RetroOverlay } from './components/RetroOverlay';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';
import { TechStack } from './components/TechStack';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';

const App: React.FC = () => {
  // Easter Egg: Konami Code
  const [hardcoreMode, setHardcoreMode] = useState(false);
  const [konami, setKonami] = useState<string[]>([]);
  const code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKonami(prev => {
        const newSeq = [...prev, e.key];
        if (newSeq.length > code.length) newSeq.shift();
        
        if (JSON.stringify(newSeq) === JSON.stringify(code)) {
          setHardcoreMode(p => !p);
          return [];
        }
        return newSeq;
      });
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className={`min-h-screen bg-retro-black text-retro-green selection:bg-retro-green selection:text-retro-black ${hardcoreMode ? 'invert hue-rotate-180' : ''}`}>
      <RetroOverlay />
      <Navbar />
      
      <Hero />
      <About />
      <Projects />
      <Timeline />
      <TechStack />
      
      {/* Side Quest / Content Creator Teaser */}
      <section className="py-10 bg-retro-green/5 border-y border-retro-green/20">
        <div className="container mx-auto text-center px-6">
           <div className="font-pixel text-xs text-retro-purple mb-2">SIDE QUESTS</div>
           <p className="font-terminal text-xl text-white max-w-2xl mx-auto leading-relaxed">
             "When I'm not building apps, I'm capturing the world with <span className="text-retro-green">Drone Photography</span>, mixing <span className="text-retro-green">Afro-House</span> sets, or clutching in COD."
           </p>
        </div>
      </section>

      <Contact />
    </main>
  );
};

export default App;