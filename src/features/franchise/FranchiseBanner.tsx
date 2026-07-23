import React from 'react';
import storeFranchise from '../../assets/store_franchise.png';
import mouzyMascot from '../../assets/mouzy_mascot.png';

interface FranchiseBannerProps {
  onApplyClick: () => void;
}

export const FranchiseBanner: React.FC<FranchiseBannerProps> = ({ onApplyClick }) => {
  return (
    <section 
      id="franchise" 
      className="relative bg-[#fef200] py-16 sm:py-20 px-4 overflow-visible z-10"
      aria-label="Franchise Partnership"
    >
      <div className="max-w-6xl mx-auto w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-visible">
          
          {/* Main Dark Green Banner Capsule */}
          <div className="lg:col-span-9 relative bg-[#05220c] rounded-[30px] p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden z-10 w-full text-left border border-white/5">
            
            {/* Storefront Drawing Background Watermark */}
            <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
              <img 
                src={storeFranchise} 
                alt="" 
                className="w-full h-full object-cover" 
              />
            </div>

            {/* Left Content text (Banavil style) */}
            <div className="relative z-10 space-y-1">
              <span className="text-xl sm:text-2xl font-extrabold font-display text-white block tracking-widest uppercase">
                BECOME A
              </span>
              <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-widest leading-none uppercase">
                <span className="text-brand-yellow">MOUZY</span> OWNER
              </h2>
            </div>

            {/* Right Action Button */}
            <div className="relative z-10 flex-shrink-0">
              <button 
                onClick={onApplyClick}
                className="bg-brand-yellow hover:bg-white text-brand-green-dark font-extrabold text-sm sm:text-base px-10 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 active:scale-95 uppercase tracking-wider outline-none focus:outline-none"
              >
                APPLY NOW
              </button>
            </div>

          </div>

          {/* Right Space placeholder (for mascot overlay rendering) */}
          <div className="lg:col-span-3 lg:block hidden" />

        </div>
      </div>

      {/* Mascot Sitting Dangling Legs Overlay (Absolute positioned relative to section) */}
      {/* It dangles its feet over the bottom edge of the yellow container into the footer */}
      <div className="absolute right-[5%] bottom-[-55px] sm:bottom-[-90px] w-48 sm:w-64 h-auto z-20 pointer-events-none">
        <img 
          src={mouzyMascot} 
          alt="Mouzy mascot sitting" 
          className="w-full h-auto object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.3)] animate-float"
        />
      </div>

    </section>
  );
};
