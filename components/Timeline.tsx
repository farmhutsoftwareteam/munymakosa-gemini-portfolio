import React from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS } from '../constants';
import { Star, Trophy } from 'lucide-react';

export const Timeline: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-retro-black relative overflow-hidden">
       {/* Decorative Background Element */}
       <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 w-96 h-96 border-[20px] border-retro-green/5 rounded-full pointer-events-none"></div>

      <div className="container mx-auto">
        <div className="flex items-center gap-4 mb-16 justify-center">
          <Trophy className="text-retro-purple w-8 h-8" />
          <h2 className="font-pixel text-2xl md:text-3xl text-white text-center">ACHIEVEMENTS UNLOCKED</h2>
          <Trophy className="text-retro-purple w-8 h-8" />
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-retro-green/20 transform md:-translate-x-1/2"></div>

          {ACHIEVEMENTS.map((achievement, index) => (
            <motion.div 
              key={achievement.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Connector Node */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-retro-black border-2 border-retro-green rounded-full transform -translate-x-[5px] md:-translate-x-1/2 mt-6 z-10"></div>

              {/* Content Side */}
              <div className="ml-12 md:ml-0 md:w-1/2 px-4">
                <div className={`bg-retro-gray/30 border border-retro-green/30 p-4 hover:border-retro-green hover:bg-retro-gray/50 transition-colors ${index % 2 === 0 ? 'text-left md:text-left' : 'text-left md:text-right'}`}>
                   <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                     <span className="font-pixel text-xs text-retro-purple">{achievement.year}</span>
                     <div className="flex items-center gap-1 text-yellow-400 font-terminal text-sm">
                       <Star size={12} fill="currentColor" /> +{achievement.xp} XP
                     </div>
                   </div>
                   <h3 className="font-pixel text-sm md:text-base text-white mb-2">{achievement.title}</h3>
                   <p className="font-terminal text-gray-400">{achievement.description}</p>
                </div>
              </div>
              
              {/* Empty Side for Layout Balance */}
              <div className="hidden md:block md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};