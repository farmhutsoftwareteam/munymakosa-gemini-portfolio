import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { RetroCard } from './RetroUI';
import { User, Cpu, Zap, Globe } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-retro-black/50">
      <div className="container mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-8 h-8 bg-retro-green flex items-center justify-center">
            <span className="font-pixel text-retro-black text-lg">2</span>
          </div>
          <h2 className="font-pixel text-2xl md:text-3xl text-white">PLAYER STATS</h2>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          {/* Bio Card */}
          <div className="md:col-span-5">
            <RetroCard title="BIO_DATA" className="h-full">
              <div className="space-y-4 font-terminal text-lg text-gray-300">
                <p>
                  <span className="text-retro-green font-bold">Origin:</span> Zimbabwe 🇿🇼
                </p>
                <p>
                  <span className="text-retro-green font-bold">Class:</span> Tech Entrepreneur / Builder
                </p>
                <p>
                  Founder of <span className="text-retro-cyan">Farmhut Africa</span>, an AI-powered marketplace connecting rural farmers to markets. Anzisha Prize Fellow with a passion for building tools that solve real problems.
                </p>
                <p>
                  Currently equipping <span className="text-retro-purple">AI Agents</span> and shipping apps with React Native & Supabase. Living and working globally.
                </p>
                
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Globe className="w-4 h-4 text-retro-green" /> Remote / CPT
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Zap className="w-4 h-4 text-retro-green" /> Fast Shipper
                  </div>
                </div>
              </div>
            </RetroCard>
          </div>

          {/* Skills / XP */}
          <div className="md:col-span-7">
             <RetroCard title="SKILL_TREE">
               <div className="space-y-6">
                 {SKILLS.map((skill, index) => (
                   <div key={skill.name} className="relative">
                     <div className="flex justify-between mb-1 font-terminal text-retro-green uppercase">
                       <span className="flex items-center gap-2">
                         {index % 2 === 0 ? <Cpu size={14}/> : <User size={14}/>} 
                         {skill.name}
                       </span>
                       <span>{skill.level}/100 XP</span>
                     </div>
                     {/* Bar Container */}
                     <div className="h-4 w-full bg-retro-gray border border-retro-green/30 relative">
                       {/* Fill */}
                       <motion.div 
                         initial={{ width: 0 }}
                         whileInView={{ width: `${skill.level}%` }}
                         viewport={{ once: true }}
                         transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                         className="h-full bg-retro-green relative"
                       >
                         {/* Pattern on bar */}
                         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] opacity-50"></div>
                       </motion.div>
                     </div>
                   </div>
                 ))}
               </div>
             </RetroCard>
          </div>
        </div>
      </div>
    </section>
  );
};