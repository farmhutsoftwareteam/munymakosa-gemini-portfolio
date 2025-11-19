import React from 'react';
import { RetroButton } from './RetroUI';
import { SOCIALS } from '../constants';
import { Github, Linkedin, Twitter, Youtube, Mail, Coffee } from 'lucide-react';

export const Contact: React.FC = () => {
  const getIcon = (name: string) => {
    switch(name) {
      case 'GitHub': return <Github size={20} />;
      case 'LinkedIn': return <Linkedin size={20} />;
      case 'Twitter': return <Twitter size={20} />;
      case 'YouTube': return <Youtube size={20} />;
      default: return <ExternalLink size={20} />;
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-t from-retro-green/10 to-retro-black border-t-4 border-retro-green">
      <div className="container mx-auto text-center max-w-2xl">
        <div className="animate-bounce mb-6 inline-block text-retro-green">
          <Coffee size={40} />
        </div>
        
        <h2 className="font-pixel text-3xl md:text-4xl text-white mb-6">START CO-OP MODE?</h2>
        
        <p className="font-terminal text-xl text-gray-300 mb-10">
          Want to build your next app, AI tool, or marketplace? 
          I love working with founders and teams who want to ship fast.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
          <a href="mailto:munya@example.com" className="w-full md:w-auto">
            <RetroButton className="w-full md:w-auto flex justify-center">
               <Mail className="mr-2 w-4 h-4" /> START PROJECT
            </RetroButton>
          </a>
          <span className="font-pixel text-xs text-gray-500">OR</span>
           {/* Social Icons */}
           <div className="flex gap-4">
            {SOCIALS.map(social => (
              <a 
                key={social.platform} 
                href={social.url} 
                target="_blank" 
                rel="noreferrer"
                className="p-3 bg-retro-gray border border-retro-green/50 text-retro-green hover:bg-retro-green hover:text-retro-black transition-colors"
                aria-label={social.platform}
              >
                {getIcon(social.platform)}
              </a>
            ))}
          </div>
        </div>

        <div className="font-pixel text-[10px] text-gray-600 mt-20">
          © {new Date().getFullYear()} MUNYARADZI MAKOSA. ALL RIGHTS RESERVED.
          <br />
          MADE WITH REACT + TAILWIND + PIXELS
        </div>
      </div>
    </section>
  );
};
// Import fix
import { ExternalLink } from 'lucide-react';