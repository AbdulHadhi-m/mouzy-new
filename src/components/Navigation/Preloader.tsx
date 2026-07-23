import React, { useEffect, useState } from 'react';
import loadingIM from '../../assets/loadingIM.png';

export const Preloader: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    // Phase 1: trigger fade-out after 1800ms
    const fadeTimer = setTimeout(() => {
      setVisible(false);
    }, 1800);

    // Phase 2: completely unmount after 2300ms
    const unmountTimer = setTimeout(() => {
      setMounted(false);
    }, 2300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#fefce8] transition-opacity duration-500 overflow-hidden ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden="true"
    >
      {/* 1. Backdrop MOUZY Animated Text Fill Loading Effect */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0">
        <div className="relative font-black uppercase tracking-widest font-obelix leading-[1.4] text-[12vw] sm:text-[9vw] flex items-center justify-center py-8">
          {/* Base faint background text */}
          <span className="text-brand-green/10 select-none leading-[1.4] py-8">
            MOUZY
          </span>

          {/* Liquid gradient fill overlay text with clip-path (full 100% letter height coverage) */}
          <span 
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-brand-green via-emerald-500 to-brand-yellow bg-clip-text text-transparent drop-shadow-[0_4px_25px_rgba(16,104,41,0.35)] select-none font-obelix leading-[1.4] text-[12vw] sm:text-[9vw] tracking-widest uppercase py-8 animate-mouzy-clip-fill"
            aria-hidden="true"
          >
            MOUZY
          </span>
        </div>
      </div>

      {/* 2. Main Center Loading Image Container */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center max-w-lg w-full">
        
        {/* Animated Skateboarding Monkey Image Container (Increased Size) */}
        <div className="relative w-72 sm:w-96 h-72 sm:h-96 flex items-center justify-center">
          
          {/* Skateboarding shadow aura */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-5 bg-black/20 rounded-full blur-md animate-skate-shadow-slow z-0" />

          {/* Skateboarding Monkey Action Image (Slow Motion) */}
          <img
            src={loadingIM}
            alt="Mouzy Skateboarding Loading"
            className="w-full h-full object-contain relative z-10 drop-shadow-[0_25px_45px_rgba(16,104,41,0.25)] animate-skate-slow"
          />
        </div>

      </div>
    </div>
  );
};


