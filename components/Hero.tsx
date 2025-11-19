import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { INTRO_TEXT } from '../constants';
import { RetroButton } from './RetroUI';
import { ChevronRight, Play, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    if (textIndex >= INTRO_TEXT.length) {
      setTimeout(() => setIsBooting(false), 500);
      return;
    }

    const currentString = INTRO_TEXT[textIndex];
    if (charIndex < currentString.length) {
      const timeout = setTimeout(() => {
        setCharIndex(prev => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setTextIndex(prev => prev + 1);
        setCharIndex(0);
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 pt-20 overflow-hidden">
      {/* Background Grid - Parallax simulation */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(#1a4d10 1px, transparent 1px), linear-gradient(90deg, #1a4d10 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      <div className="container mx-auto z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Terminal Text */}
        <div className="font-terminal space-y-6">
          <div className="h-32 md:h-24 text-retro-green/70 text-sm md:text-base leading-relaxed">
            {INTRO_TEXT.map((line, idx) => (
              <div key={idx} className={`${idx > textIndex ? 'hidden' : 'block'}`}>
                 <span className="text-retro-purple mr-2">{'>'}</span>
                 {idx === textIndex ? line.substring(0, charIndex) : line}
                 {idx === textIndex && <span className="animate-cursor-blink inline-block w-2 h-4 bg-retro-green ml-1 align-middle"></span>}
              </div>
            ))}
          </div>

          {!isBooting && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-pixel text-3xl md:text-5xl lg:text-6xl leading-tight text-white mb-4">
                MUNYARADZI <br />
                <span className="text-retro-green">MAKOSA</span>
              </h1>
              
              <h2 className="font-terminal text-xl md:text-2xl text-retro-cyan mb-6 border-b border-retro-green/30 pb-4 inline-block">
                Serial App Dev · Indie Founder · AI Builder
              </h2>
              
              <p className="text-gray-400 text-lg max-w-lg mb-8">
                I build apps, AI tools & products that ship fast and actually get used. 
                From <span className="text-retro-green">Rural Zim</span> to the <span className="text-retro-purple">Global Stage</span>.
              </p>

              <div className="flex flex-wrap gap-4">
                <RetroButton onClick={scrollToProjects}>
                  <Play className="w-4 h-4" /> Play Showreel
                </RetroButton>
                <RetroButton variant="secondary" onClick={scrollToContact}>
                  <Terminal className="w-4 h-4" /> Hire / Contact
                </RetroButton>
              </div>
            </motion.div>
          )}
        </div>

        {/* Right: Avatar / Graphic */}
        <div className="relative hidden lg:flex justify-center items-center">
           {!isBooting && (
             <motion.div
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ type: 'spring', bounce: 0.5 }}
               className="relative w-80 h-80"
             >
               {/* Pixel Art Representation using CSS Gradients/Shadows or placeholder */}
               <div className="w-64 h-64 mx-auto bg-retro-green/20 border-4 border-retro-green relative overflow-hidden shadow-[8px_8px_0px_0px_#1a4d10]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-pixel text-6xl text-retro-green animate-pulse">M</span>
                  </div>
                  {/* Glitch effects lines */}
                  <div className="absolute top-10 left-0 w-full h-1 bg-retro-green/50 animate-pulse"></div>
                  <div className="absolute bottom-20 left-0 w-full h-2 bg-retro-purple/50 animate-pulse delay-75"></div>
               </div>
               
               {/* Floating Stats Box */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 4 }}
                 className="absolute -right-4 top-0 bg-retro-black border border-retro-green p-2 shadow-[4px_4px_0px_0px_#39ff14]"
               >
                 <div className="font-pixel text-[10px] text-retro-green">STATUS: ONLINE</div>
                 <div className="font-pixel text-[10px] text-retro-purple">LVL: 99</div>
               </motion.div>
             </motion.div>
           )}
        </div>
      </div>
      
      {/* Scroll Indicator */}
      {!isBooting && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-retro-green flex flex-col items-center gap-2"
        >
          <span className="font-pixel text-[10px]">INSERT COIN TO SCROLL</span>
          <ChevronRight className="rotate-90 w-6 h-6 animate-bounce" />
        </motion.div>
      )}
    </section>
  );
};