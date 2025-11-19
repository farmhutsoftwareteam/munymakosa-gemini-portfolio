import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

export const TechStack: React.FC = () => {
  // Helper to generate grid items
  const items = [
    { name: "React Native", buff: "+50 Speed", type: "Weapon" },
    { name: "Expo", buff: "No Config", type: "Tool" },
    { name: "Supabase", buff: "Instant Backend", type: "Magic" },
    { name: "Next.js", buff: "SEO Boost", type: "Weapon" },
    { name: "TypeScript", buff: "Type Safety", type: "Armor" },
    { name: "Tailwind", buff: "+20 Style", type: "Armor" },
    { name: "Node.js", buff: "Server Side", type: "Core" },
    { name: "Postgres", buff: "Data Store", type: "Storage" },
    { name: "OpenAI", buff: "Intelligence", type: "Summon" },
    { name: "Figma", buff: "Design Blueprint", type: "Map" },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-12">
           <div className="w-8 h-8 bg-retro-green flex items-center justify-center">
            <span className="font-pixel text-retro-black text-lg">I</span>
          </div>
          <h2 className="font-pixel text-2xl md:text-3xl text-white">INVENTORY / LOADOUT</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: idx * 0.05 }}
              className="bg-retro-black border-2 border-retro-gray p-4 flex flex-col items-center justify-center text-center hover:border-retro-green hover:bg-retro-green/10 transition-all cursor-help group aspect-square"
            >
              <div className="font-pixel text-[10px] text-retro-purple mb-2">{item.type}</div>
              <div className="font-terminal text-xl text-white group-hover:text-retro-green mb-2">{item.name}</div>
              <div className="font-pixel text-[8px] text-retro-cyan">{item.buff}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};