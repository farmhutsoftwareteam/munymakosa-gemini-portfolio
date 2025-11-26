import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INTRO_TEXT } from '../constants';
import { RetroButton } from './RetroUI';
import { ChevronRight, Play, Terminal } from 'lucide-react';

const bootSequenceVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

const lineVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
};

const mainContentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const Hero: React.FC = () => {
  const [isBooting, setIsBooting] = useState(true);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBootComplete = () => {
    setTimeout(() => setIsBooting(false), 500);
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 pt-20 overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#1a4d10 1px, transparent 1px), linear-gradient(90deg, #1a4d10 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Terminal Text / Main Content */}
        <div className="font-terminal space-y-6">
          <AnimatePresence mode="wait">
            {isBooting ? (
              <motion.div
                key="boot"
                variants={bootSequenceVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onAnimationComplete={handleBootComplete}
                className="h-32 md:h-24 text-retro-green/70 text-sm md:text-base leading-relaxed"
              >
                {INTRO_TEXT.map((line, idx) => (
                  <motion.div key={idx} variants={lineVariants}>
                    <span className="text-retro-purple mr-2">{'>'}</span>
                    {line}
                    {idx === INTRO_TEXT.length - 1 && (
                      <span className="inline-block w-2 h-4 bg-retro-green ml-1 align-middle animate-pulse" />
                    )}
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="main"
                variants={mainContentVariants}
                initial="hidden"
                animate="visible"
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
          </AnimatePresence>
        </div>

        {/* Right: Avatar / Graphic */}
        <div className="relative hidden lg:flex justify-center items-center">
          <AnimatePresence>
            {!isBooting && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', bounce: 0.5 }}
                className="relative w-80 h-80"
              >
                <div className="w-64 h-64 mx-auto bg-retro-green/20 border-4 border-retro-green relative overflow-hidden shadow-[8px_8px_0px_0px_#1a4d10]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-pixel text-6xl text-retro-green">M</span>
                  </div>
                </div>

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
          </AnimatePresence>
        </div>
      </div>

      {/* Scroll Indicator */}
      <AnimatePresence>
        {!isBooting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-retro-green flex flex-col items-center gap-2"
          >
            <span className="font-pixel text-[10px]">INSERT COIN TO SCROLL</span>
            <ChevronRight className="rotate-90 w-6 h-6 animate-bounce" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
