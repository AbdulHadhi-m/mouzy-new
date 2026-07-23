import React, { useState, useEffect, useRef } from 'react';

// Import centerpiece images from src/assets/CUPS/
import cup1 from '../../assets/CUPS/CUP1.png';
import cup2 from '../../assets/CUPS/CUP2.png';
import cup3 from '../../assets/CUPS/CUP3.png';
import cup4 from '../../assets/CUPS/CUP4.png';

export const HeroSlider: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const autoPlayRef = useRef<(() => void) | null>(null);

  const slides = [
    {
      id: 'strawberry',
      image: cup1,
      bgText: 'STRAWBERRY',
      title: 'Fresh Strawberry Avil Milk',
    },
    {
      id: 'mango',
      image: cup2,
      bgText: 'MANGO',
      title: 'Juicy Mango Avil Milk',
    },
    {
      id: 'chocolate',
      image: cup3,
      bgText: 'CHOCOLATE',
      title: 'Chocolate Nut Crunch',
    },
    {
      id: 'pista',
      image: cup4,
      bgText: 'PISTACHIO',
      title: 'Pistachio Supreme Avil',
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      if (autoPlayRef.current) autoPlayRef.current();
    };
    const interval = setInterval(play, 4500);
    return () => clearInterval(interval);
  }, []);

  const currentFlavor = slides[activeSlide].id;

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#2F9745]"
      aria-label="Welcome Slider"
      style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, #38aa4e 0%, #2F9745 50%, #247b37 100%)'
      }}
    >
      
      {/* 1. Giant backdrop typography (Centered behind the cup) */}
      <div 
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-10"
      >
        <span 
          className="text-white text-[14vw] sm:text-[11vw] font-black uppercase tracking-widest font-obelix leading-none transition-all duration-700 transform scale-100"
        >
          {slides[activeSlide].bgText}
        </span>
      </div>

      {/* 2. Main centerpiece container (Centered) */}
      <div className="relative z-20 flex items-center justify-center w-full max-w-4xl px-4 sm:px-6 h-[400px] sm:h-[500px]">
        
        {/* Dynamic Centerpiece Image */}
        <div className="relative z-20 w-44 sm:w-60 md:w-72 lg:w-80 h-auto animate-float">
          {slides.map((slide, index) => {
            if (index !== activeSlide) return null;
            return (
              <img 
                key={index} 
                src={slide.image} 
                alt={slide.title} 
                className="w-full h-auto object-contain drop-shadow-[0_30px_60px_rgba(3,17,6,0.6)] animate-fade-in"
              />
            );
          })}
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 3. MATCHING FLAVOR FLOATING BACKGROUND ICONS (Dynamic per slide) */}
        {/* ------------------------------------------------------------- */}
        
        {/* --- STRAWBERRY ICONS (Slide 1) --- */}
        {currentFlavor === 'strawberry' && (
          <div className="absolute inset-0 pointer-events-none z-30 animate-fade-in">
            {/* Strawberry 1 (Top Left) */}
            <div className="absolute left-[8%] sm:left-[15%] top-1/4 z-30 w-12 sm:w-16 h-12 sm:h-16 animate-float-nut-1">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                <path d="M 50 15 C 30 15 15 35 15 55 C 15 80 50 95 50 95 C 50 95 85 80 85 55 C 85 35 70 15 50 15 Z" fill="#EF4444" stroke="#DC2626" strokeWidth="2" />
                {/* Green Calyx Cap */}
                <path d="M 50 15 L 35 5 L 45 18 L 50 2 L 55 18 L 65 5 Z" fill="#22C55E" />
                {/* Yellow Seeds */}
                <circle cx="35" cy="40" r="2.5" fill="#FACC15" />
                <circle cx="50" cy="45" r="2.5" fill="#FACC15" />
                <circle cx="65" cy="40" r="2.5" fill="#FACC15" />
                <circle cx="42" cy="65" r="2.5" fill="#FACC15" />
                <circle cx="58" cy="65" r="2.5" fill="#FACC15" />
                <circle cx="50" cy="80" r="2" fill="#FACC15" />
              </svg>
            </div>

            {/* Strawberry Slice 2 (Right Middle) */}
            <div className="absolute right-[8%] sm:right-[15%] top-1/3 z-30 w-12 sm:w-16 h-12 sm:h-16 animate-float-nut-2 transform rotate-45">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                <path d="M 50 10 C 25 10 10 35 10 55 C 10 80 50 95 50 95 C 50 95 90 80 90 55 C 90 35 75 10 50 10 Z" fill="#F87171" stroke="#EF4444" strokeWidth="2" />
                <path d="M 50 25 C 35 25 25 40 25 55 C 25 70 50 82 50 82 C 50 82 75 70 75 55 C 75 40 65 25 50 25 Z" fill="#FEE2E2" />
                {/* Seeds Ring */}
                <circle cx="40" cy="45" r="2" fill="#DC2626" />
                <circle cx="60" cy="45" r="2" fill="#DC2626" />
                <circle cx="50" cy="60" r="2" fill="#DC2626" />
              </svg>
            </div>

            {/* Floating Berry 3 (Bottom Left) */}
            <div className="absolute left-[12%] sm:left-[22%] bottom-[15%] z-30 w-10 sm:w-14 h-10 sm:h-14 animate-float-leaf">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md" transform="rotate(-25)">
                <path d="M 50 15 C 30 15 15 35 15 55 C 15 80 50 95 50 95 C 50 95 85 80 85 55 C 85 35 70 15 50 15 Z" fill="#DC2626" />
                <path d="M 50 15 L 40 5 L 47 18 L 50 2 L 53 18 L 60 5 Z" fill="#4ADE80" />
                <circle cx="40" cy="45" r="2" fill="#FDE047" />
                <circle cx="60" cy="45" r="2" fill="#FDE047" />
              </svg>
            </div>

            {/* Floating Strawberry Leaf 4 (Top Right) */}
            <div className="absolute right-[16%] sm:right-[26%] top-[10%] z-30 w-10 sm:w-12 h-8 sm:h-10 animate-float-nut-1">
              <svg viewBox="0 0 120 80" className="w-full h-full drop-shadow-md" transform="rotate(30)">
                <path d="M 10 40 Q 60 5 110 40 Q 60 75 10 40 Z" fill="#16A34A" stroke="#15803D" strokeWidth="2" />
                <path d="M 10 40 L 105 40" stroke="#86EFAC" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>
        )}

        {/* --- MANGO ICONS (Slide 2) --- */}
        {currentFlavor === 'mango' && (
          <div className="absolute inset-0 pointer-events-none z-30 animate-fade-in">
            {/* Whole Mango 1 (Top Left) */}
            <div className="absolute left-[8%] sm:left-[15%] top-1/4 z-30 w-14 sm:w-18 h-14 sm:h-18 animate-float-nut-1">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                <path d="M 50 10 C 25 10 10 30 15 60 C 20 85 55 95 70 85 C 85 70 90 40 75 20 C 65 10 55 10 50 10 Z" fill="url(#mangoGrad)" stroke="#D97706" strokeWidth="2" />
                {/* Stem & Leaf */}
                <path d="M 50 10 Q 45 0 35 2" stroke="#78350F" strokeWidth="3" fill="none" />
                <path d="M 45 8 C 30 -5 15 10 35 12 Z" fill="#16A34A" />
                <defs>
                  <linearGradient id="mangoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#EF4444" />
                    <stop offset="40%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#FACC15" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Mango Slice 2 (Right Middle) */}
            <div className="absolute right-[8%] sm:right-[15%] top-1/3 z-30 w-12 sm:w-16 h-12 sm:h-16 animate-float-nut-2 transform rotate-30">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                <path d="M 20 20 Q 80 10 90 70 Q 50 90 20 20 Z" fill="#F59E0B" stroke="#D97706" strokeWidth="2" />
                <path d="M 25 25 Q 75 18 83 65" fill="none" stroke="#FEF08A" strokeWidth="3" opacity="0.6" />
              </svg>
            </div>

            {/* Mango Cube Segment 3 (Bottom Left) */}
            <div className="absolute left-[12%] sm:left-[22%] bottom-[15%] z-30 w-10 sm:w-14 h-10 sm:h-14 animate-float-leaf">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md" transform="rotate(-15)">
                <rect x="20" y="20" width="60" height="60" rx="12" fill="#FBBF24" stroke="#D97706" strokeWidth="2" />
                <line x1="20" y1="50" x2="80" y2="50" stroke="#D97706" strokeWidth="2" />
                <line x1="50" y1="20" x2="50" y2="80" stroke="#D97706" strokeWidth="2" />
              </svg>
            </div>

            {/* Floating Mango Leaf 4 (Top Right) */}
            <div className="absolute right-[16%] sm:right-[26%] top-[10%] z-30 w-10 sm:w-14 h-8 sm:h-10 animate-float-nut-1">
              <svg viewBox="0 0 120 80" className="w-full h-full drop-shadow-md" transform="rotate(40)">
                <path d="M 10 40 C 40 10 90 10 115 40 C 90 70 40 70 10 40 Z" fill="#15803D" stroke="#166534" strokeWidth="2" />
                <path d="M 10 40 L 110 40" stroke="#86EFAC" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>
        )}

        {/* --- CHOCOLATE ICONS (Slide 3) --- */}
        {currentFlavor === 'chocolate' && (
          <div className="absolute inset-0 pointer-events-none z-30 animate-fade-in">
            {/* Chocolate Bar 1 (Top Left) */}
            <div className="absolute left-[8%] sm:left-[15%] top-1/4 z-30 w-14 sm:w-18 h-12 sm:h-16 animate-float-nut-1 transform -rotate-12">
              <svg viewBox="0 0 120 90" className="w-full h-full drop-shadow-lg">
                {/* Chocolate Grid Bar */}
                <rect x="10" y="10" width="100" height="70" rx="6" fill="#451A03" stroke="#270B02" strokeWidth="2.5" />
                {/* Segments */}
                <rect x="16" y="16" width="26" height="26" rx="3" fill="#5C2406" stroke="#270B02" strokeWidth="1.5" />
                <rect x="47" y="16" width="26" height="26" rx="3" fill="#5C2406" stroke="#270B02" strokeWidth="1.5" />
                <rect x="78" y="16" width="26" height="26" rx="3" fill="#5C2406" stroke="#270B02" strokeWidth="1.5" />
                <rect x="16" y="47" width="26" height="26" rx="3" fill="#5C2406" stroke="#270B02" strokeWidth="1.5" />
                <rect x="47" y="47" width="26" height="26" rx="3" fill="#5C2406" stroke="#270B02" strokeWidth="1.5" />
                <rect x="78" y="47" width="26" height="26" rx="3" fill="#5C2406" stroke="#270B02" strokeWidth="1.5" />
                {/* Foil Wrapping Wrapper Edge */}
                <path d="M 10 50 L 30 80 L 110 80 L 110 50 Z" fill="#E5E7EB" opacity="0.85" />
              </svg>
            </div>

            {/* Cocoa Bean 2 (Right Middle) */}
            <div className="absolute right-[8%] sm:right-[15%] top-1/3 z-30 w-12 sm:w-16 h-12 sm:h-16 animate-float-nut-2 transform rotate-35">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                <ellipse cx="50" cy="50" rx="40" ry="24" fill="#78350F" stroke="#451A03" strokeWidth="2.5" />
                <path d="M 15 50 Q 50 35 85 50" stroke="#B45309" strokeWidth="3" fill="none" />
                <path d="M 20 38 Q 50 25 80 38" stroke="#D97706" strokeWidth="1.5" fill="none" opacity="0.6" />
              </svg>
            </div>

            {/* Chocolate Chips 3 (Bottom Left) */}
            <div className="absolute left-[12%] sm:left-[22%] bottom-[15%] z-30 w-10 sm:w-12 h-10 sm:h-12 animate-float-leaf">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                <path d="M 50 15 C 30 45 20 80 50 85 C 80 80 70 45 50 15 Z" fill="#361304" stroke="#1C0902" strokeWidth="2" />
              </svg>
            </div>

            {/* Chocolate Chunk 4 (Top Right) */}
            <div className="absolute right-[16%] sm:right-[26%] top-[10%] z-30 w-9 sm:w-11 h-9 sm:h-11 animate-float-nut-1 transform rotate-20">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                <polygon points="20,20 80,15 90,75 30,85" fill="#5C2406" stroke="#270B02" strokeWidth="2" />
                <polygon points="20,20 50,18 55,78 30,85" fill="#78350F" />
              </svg>
            </div>
          </div>
        )}

        {/* --- PISTA ICONS (Slide 4) --- */}
        {currentFlavor === 'pista' && (
          <div className="absolute inset-0 pointer-events-none z-30 animate-fade-in">
            {/* Whole Shelled Pistachio (Left Top) */}
            <div className="absolute left-[8%] sm:left-[15%] top-1/4 z-30 w-11 sm:w-14 h-11 sm:h-14 animate-float-nut-1 transform -rotate-15">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                <ellipse cx="50" cy="50" rx="36" ry="24" fill="#84CC16" stroke="#4ADE80" strokeWidth="2" />
                <path d="M 20 50 Q 50 35 80 50" stroke="#BEF264" strokeWidth="2.5" fill="none" />
              </svg>
            </div>

            {/* Whole Shelled Pistachio 2 (Right Middle) */}
            <div className="absolute right-[8%] sm:right-[15%] top-1/3 z-30 w-12 sm:w-16 h-12 sm:h-16 animate-float-nut-2 transform rotate-35">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                <ellipse cx="50" cy="50" rx="36" ry="24" fill="#65A30D" stroke="#3F6212" strokeWidth="2" />
                <path d="M 20 50 Q 50 35 80 50" stroke="#84CC16" strokeWidth="3" fill="none" />
                <path d="M 30 38 Q 50 28 70 38" stroke="#BEF264" strokeWidth="1.5" fill="none" opacity="0.7" />
              </svg>
            </div>

            {/* Pistachio Shell Half 3 (Bottom Left) */}
            <div className="absolute left-[12%] sm:left-[22%] bottom-[15%] z-30 w-10 sm:w-13 h-10 sm:h-13 animate-float-leaf">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md" transform="rotate(45)">
                <path d="M 20 50 C 20 20 50 10 80 50 C 60 45 40 45 20 50 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
              </svg>
            </div>

            {/* Floating Pistachio Kernel 4 (Top Right) */}
            <div className="absolute right-[16%] sm:right-[26%] top-[10%] z-30 w-9 sm:w-12 h-9 sm:h-12 animate-float-nut-1 transform -rotate-15">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                <ellipse cx="50" cy="50" rx="30" ry="20" fill="#4ADE80" stroke="#16A34A" strokeWidth="2" />
                <path d="M 25 50 Q 50 40 75 50" stroke="#86EFAC" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>
        )}

      </div>

      {/* 4. Swiper Pagination Dots centered at the absolute bottom of hero */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex items-center justify-center">
        <div className="flex space-x-3 bg-black/20 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-500 outline-none focus:outline-none ${
                index === activeSlide ? 'w-10 bg-white shadow-md' : 'w-2.5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

    </section>
  );
};
