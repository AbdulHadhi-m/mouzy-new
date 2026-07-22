import React, { useEffect, useState } from 'react';
import mouzyMascot from '../../assets/mouzy_mascot.png';

export const Preloader: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    // Phase 1: trigger fade-out after 1400ms
    const fadeTimer = setTimeout(() => {
      setVisible(false);
    }, 1400);

    // Phase 2: completely unmount after 1900ms (500ms fade transition)
    const unmountTimer = setTimeout(() => {
      setMounted(false);
    }, 1900);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#fcf8d6] transition-opacity duration-500 overflow-hidden ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden="true"
    >
      {/* 1. Giant backdrop typography centered behind mascot */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0">
        <span className="text-[20vw] sm:text-[16vw] font-black uppercase tracking-wider font-obelix leading-none text-brand-green/15 transform scale-105">
          MOUZY
        </span>
      </div>

      {/* 2. Main Mascot and Loader Container */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        {/* Animated Mascot */}
        <div className="relative mb-2 animate-float">
          <img
            src={mouzyMascot}
            alt="Mouzy Mascot"
            className="w-44 h-44 sm:w-56 sm:h-56 object-contain drop-shadow-[0_15px_30px_rgba(16,104,41,0.25)]"
          />
        </div>

        {/* Customized smooth progress loading bar */}
        <div className="relative w-48 sm:w-64 h-1.5 bg-brand-green/15 rounded-full overflow-hidden mt-2">
          <div className="absolute top-0 left-0 h-full bg-brand-green rounded-full animate-loader-progress" />
        </div>

        {/* Slogan */}
        <p className="text-xs sm:text-sm tracking-[0.3em] text-brand-green/75 uppercase mt-4 font-display font-bold">
          FLAVOURING THE HUNGER
        </p>
      </div>
    </div>
  );
};

