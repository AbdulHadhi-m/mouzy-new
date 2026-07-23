import React, { useEffect, useState } from 'react';
import mouzyMascot from '../../assets/mouzy_mascot.png';

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
      {/* 1. Backdrop typography (Decreased text size for clean fit) */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0">
        <span className="text-[12vw] sm:text-[9vw] font-black uppercase tracking-widest font-obelix leading-none text-brand-green/12 animate-pulse">
          MOUZY
        </span>
      </div>

      {/* 2. Main Mascot and Loader Container */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center max-w-lg w-full">
        
        {/* Animated Mascot Container with floating & bounce animation */}
        <div className="relative mb-6 w-48 sm:w-56 h-48 sm:h-56 flex items-center justify-center">
          
          {/* Subtle soft shadow & aura blur */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 sm:w-40 h-4 bg-black/15 rounded-full blur-md animate-pulse z-0" />

          {/* Mouzy Mascot Image */}
          <img
            src={mouzyMascot}
            alt="Mouzy Mascot"
            className="w-full h-full object-contain relative z-10 drop-shadow-[0_20px_35px_rgba(16,104,41,0.25)] animate-float"
          />
        </div>

        {/* Enhanced Progress Loading Bar */}
        <div className="relative w-52 sm:w-64 h-2 bg-brand-green/15 rounded-full overflow-hidden shadow-inner">
          <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-green via-emerald-500 to-brand-yellow rounded-full animate-loader-progress" />
        </div>

        {/* Slogan */}
        <p className="text-xs sm:text-sm tracking-[0.35em] text-brand-green font-extrabold uppercase mt-4 font-display drop-shadow-sm animate-pulse">
          FLAVOURING THE HUNGER
        </p>

      </div>
    </div>
  );
};

