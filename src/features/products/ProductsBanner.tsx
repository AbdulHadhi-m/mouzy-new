import React, { useEffect, useState, useRef } from 'react';
import monkey from '../../assets/monkey.png';

export const ProductsBanner: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Calculate progress from 0 (section entering from bottom) to 1 (section leaving top)
            const totalDistance = windowHeight + rect.height;
            const currentPosition = windowHeight - rect.top;
            const progress = Math.min(Math.max(currentPosition / totalDistance, 0), 1);

            setScrollProgress(progress);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial position trigger

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate dynamic translations based on scroll progress
  // Mascot moves from right to left as user scrolls down
  const mascotX = (0.5 - scrollProgress) * 350; // Range: +175px (right) to -175px (left)
  const mascotY = Math.sin(scrollProgress * Math.PI * 4) * 8; // Gentle riding vibration
  const mascotTilt = Math.sin(scrollProgress * Math.PI * 2) * 3; // Slight tilt
  
  // Parallax background movements
  const bgCityX = (scrollProgress - 0.5) * -60;
  const bgTreesX = (scrollProgress - 0.5) * -120;

  return (
    <section 
      ref={sectionRef}
      id="products-banner"
      className="relative bg-brand-green py-20 sm:py-28 px-4 overflow-hidden flex flex-col justify-between"
      style={{
        backgroundImage: 'radial-gradient(circle at 50% 40%, #168637 0%, #083c16 100%)'
      }}
      aria-label="Products Introduction"
    >
      {/* 1. Vector City Skyline Background Silhouette (Parallax Layer 1) */}
      <div 
        className="absolute inset-x-0 bottom-12 z-0 opacity-15 pointer-events-none transition-transform duration-100 ease-out flex justify-center"
        style={{ transform: `translateX(${bgCityX}px)` }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 300" 
          className="w-full h-auto min-w-[1100px]"
          preserveAspectRatio="none"
        >
          {/* City Buildings */}
          <path 
            d="M0 300 L0 180 L40 180 L40 140 L90 140 L90 300 L120 300 L120 100 L170 100 L170 190 L210 190 L210 120 L270 120 L270 300 L310 300 L310 80 L370 80 L370 150 L410 150 L410 300 L460 300 L460 60 L530 60 L530 190 L570 190 L570 300 L610 300 L610 110 L670 110 L670 300 L710 300 L710 90 L780 90 L780 200 L830 200 L830 130 L890 130 L890 300 L940 300 L940 70 L1010 70 L1010 210 L1050 210 L1050 160 L1100 160 L1100 300 L1140 300 L1140 110 L1200 110 L1200 300 Z" 
            fill="#05220c" 
          />
        </svg>
      </div>

      {/* 2. Vector Trees Background Silhouette (Parallax Layer 2) */}
      <div 
        className="absolute inset-x-0 bottom-8 z-0 opacity-25 pointer-events-none transition-transform duration-75 ease-out flex justify-around"
        style={{ transform: `translateX(${bgTreesX}px)` }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1400 180" 
          className="w-full h-auto min-w-[1200px]"
          preserveAspectRatio="none"
        >
          {/* Rounded Trees & Pines */}
          <path d="M 50 180 Q 80 80 110 180 M 180 180 L 210 60 L 240 180 M 350 180 Q 390 40 430 180 M 520 180 L 550 70 L 580 180 M 700 180 Q 740 50 780 180 M 890 180 L 920 60 L 950 180 M 1080 180 Q 1120 40 1160 180 M 1280 180 L 1310 70 L 1340 180 Z" fill="#083c16" stroke="#1b8a3e" strokeWidth="2" />
        </svg>
      </div>

      {/* 3. Main Content Container */}
      <div className="max-w-7xl mx-auto w-full z-10 relative my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Description Capsule Bubble */}
          <div className="lg:col-span-7 flex justify-center lg:justify-start">
            <div 
              className="bg-brand-green-deep/90 border border-white/10 p-8 sm:p-12 text-center lg:text-left rounded-[40px] max-w-xl shadow-2xl relative backdrop-blur-md transition-transform duration-300 hover:scale-[1.01]"
              style={{
                borderRadius: '50px 30px 50px 30px'
              }}
            >
              {/* Decorative Accent Leaf */}
              <div className="absolute -top-5 left-1/2 lg:left-10 -translate-x-1/2 lg:translate-x-0 bg-brand-yellow text-brand-green-dark px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-md">
                Mouzy Heritage
              </div>

              {/* Cursive Yellow Title */}
              <h3 className="text-4xl sm:text-5xl font-bold font-palpiyo text-brand-yellow mb-4 tracking-wider leading-relaxed pt-2">
                Our Products
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-brand-cream-dark/95 leading-relaxed font-medium">
                Explore our signature Avil milk flavors — a fusion of tradition and innovation. From the humble beginnings of our first store in Perinthalmanna, we have come a long way, spreading the love for Avil all over Kerala.
              </p>
            </div>
          </div>

          {/* Right Column: Scroll-Animated Scooter Mascot */}
          <div className="lg:col-span-5 flex justify-center items-center relative min-h-[300px] sm:min-h-[360px]">
            <div 
              className="w-64 sm:w-80 md:w-96 h-auto relative z-20 transition-transform duration-75 ease-out"
              style={{
                transform: `translateX(${mascotX}px) translateY(${mascotY}px) rotate(${mascotTilt}deg)`
              }}
            >
              {/* Shadow underneath scooter */}
              <div 
                className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-black/40 rounded-full blur-md z-0"
              />
              
              {/* Mascot Image */}
              <img 
                src={monkey} 
                alt="Mouzy mascot riding scooter on scroll" 
                className="w-full h-auto object-contain relative z-10 drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>

        </div>
      </div>

      {/* 4. Asphalt Road & Dashed Centerline Strip */}
      <div className="w-full relative z-10 mt-12">
        {/* Road Surface */}
        <div className="h-6 w-full bg-[#051c09] border-t-2 border-brand-green-light/40 relative overflow-hidden flex items-center shadow-inner">
          {/* Moving Dashed Center Lane */}
          <div 
            className="w-[200%] h-1 border-t-2 border-dashed border-brand-yellow/70 transition-transform duration-75 ease-out"
            style={{
              transform: `translateX(${(scrollProgress * -200) % 60}px)`
            }}
          />
        </div>
      </div>

    </section>
  );
};

