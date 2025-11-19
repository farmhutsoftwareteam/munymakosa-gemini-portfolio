import React from 'react';

interface RetroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const RetroButton: React.FC<RetroButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "font-pixel text-xs md:text-sm px-6 py-3 uppercase transition-all duration-100 transform active:scale-95 border-2 outline-none relative overflow-hidden group";
  
  const variants = {
    primary: "bg-retro-green text-retro-black border-retro-green hover:bg-retro-black hover:text-retro-green hover:shadow-[4px_4px_0px_0px_#39ff14]",
    secondary: "bg-transparent text-retro-green border-retro-green hover:bg-retro-green hover:text-retro-black hover:shadow-[4px_4px_0px_0px_#39ff14]"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
};

export const RetroCard: React.FC<{ children: React.ReactNode; className?: string; title?: string }> = ({ children, className = '', title }) => {
  return (
    <div className={`border-2 border-retro-green/50 bg-retro-black/80 backdrop-blur-sm relative p-6 group hover:border-retro-green hover:shadow-[4px_4px_0px_0px_rgba(57,255,20,0.5)] transition-all duration-300 ${className}`}>
      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-2 h-2 bg-retro-green" />
      <div className="absolute top-0 right-0 w-2 h-2 bg-retro-green" />
      <div className="absolute bottom-0 left-0 w-2 h-2 bg-retro-green" />
      <div className="absolute bottom-0 right-0 w-2 h-2 bg-retro-green" />
      
      {title && (
        <div className="absolute -top-3 left-4 bg-retro-black px-2 border border-retro-green/50 text-retro-green font-pixel text-[10px]">
          {title}
        </div>
      )}
      
      {children}
    </div>
  );
};

export const PixelBadge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-block border border-retro-green/30 bg-retro-green/10 px-2 py-1 text-xs font-terminal text-retro-green rounded-sm">
    {children}
  </span>
);