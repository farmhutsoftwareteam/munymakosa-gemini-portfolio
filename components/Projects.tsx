import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { RetroCard, PixelBadge } from './RetroUI';
import { ExternalLink, Sword } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-8 h-8 bg-retro-green flex items-center justify-center">
            <span className="font-pixel text-retro-black text-lg">3</span>
          </div>
          <h2 className="font-pixel text-2xl md:text-3xl text-white">LEVEL SELECT (PROJECTS)</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <RetroCard className="h-full flex flex-col justify-between group hover:bg-retro-green/5">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-pixel text-lg text-retro-green group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <span className="font-terminal text-xs text-retro-purple border border-retro-purple px-1">
                      LVL {index + 1}
                    </span>
                  </div>
                  
                  <p className="font-terminal text-lg text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4 bg-retro-black/50 p-3 border border-red-900/50 rounded">
                    <div className="flex items-center gap-2 text-red-400 font-pixel text-[10px] mb-1">
                      <Sword size={12} /> BOSS FIGHT
                    </div>
                    <p className="text-red-200 font-terminal text-sm">
                      Goal: {project.bossFight}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map(tech => (
                      <PixelBadge key={tech}>{tech}</PixelBadge>
                    ))}
                  </div>
                </div>

                <div>
                   <a 
                     href={project.link} 
                     target="_blank" 
                     rel="noreferrer"
                     className="inline-flex items-center gap-2 font-pixel text-xs text-retro-green hover:text-retro-cyan transition-colors uppercase border-b-2 border-transparent hover:border-retro-cyan pb-1"
                   >
                     Start Game <ExternalLink size={12} />
                   </a>
                </div>
              </RetroCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};