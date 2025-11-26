import React from 'react';

export const RetroOverlay: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden h-screen w-screen">
      {/* Scanlines */}
      <div className="scanlines absolute inset-0 opacity-10"></div>
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)]"></div>
      
      {/* CRT Flicker - static, no animation */}
      <div className="absolute inset-0 bg-white opacity-[0.02] pointer-events-none"></div>
    </div>
  );
};