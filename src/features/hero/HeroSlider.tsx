import React, { useState, useEffect, useRef } from 'react';

// Import real PNG centerpiece images
import fruitNutMilk from '../../assets/fruit_nut_milk.png';
import chocolateNutMilk from '../../assets/chocolate_nut_milk.png';
import pistaMilk from '../../assets/pista_milk.png';

export const HeroSlider: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const autoPlayRef = useRef<(() => void) | null>(null);

  const slides = [
    {
      image: fruitNutMilk,
      bgText: 'KADAKKI',
    },
    {
      image: pistaMilk,
      bgText: 'PISTACHIO',
    },
    {
      image: chocolateNutMilk,
      bgText: 'CHOCOLATE',
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
    const interval = setInterval(play, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-green"
      aria-label="Welcome Slider"
      style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, #168637 0%, #0d5421 100%)'
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
                alt="Mouzy Avil Milk Flavour" 
                className="w-full h-auto object-contain drop-shadow-[0_30px_60px_rgba(3,17,6,0.6)] animate-fade-in"
              />
            );
          })}
        </div>

        {/* 3. Floating Ingredients scattered around the centered cup */}
        
        {/* Cashew (Left Middle) */}
        <div className="absolute left-[8%] sm:left-[15%] top-1/2 -translate-y-1/2 z-30 w-12 sm:w-16 h-12 sm:h-16 animate-float-nut-1">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <path d="M 10 50 Q 30 10 70 30 Q 90 40 80 60 Q 70 80 40 60 Q 20 50 10 50 Z" fill="#ebcfb2" stroke="#ad7d4f" strokeWidth="2" />
            <path d="M 30 45 Q 50 30 70 42" stroke="#fff" strokeWidth="2" fill="none" opacity="0.4" />
          </svg>
        </div>

        {/* Almond (Right Middle) */}
        <div className="absolute right-[8%] sm:right-[15%] top-1/3 z-30 w-11 sm:w-14 h-11 sm:h-14 animate-float-nut-2">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md" transform="rotate(35)">
            <path d="M 25 50 C 25 30, 45 10, 50 10 C 55 10, 75 30, 75 50 C 75 70, 55 90, 50 90 C 45 90, 25 70, 25 50 Z" fill="#b98555" stroke="#8c582f" strokeWidth="2" />
            <path d="M 33 50 Q 50 20 50 12" stroke="#ffe5ce" strokeWidth="2" fill="none" opacity="0.5" />
          </svg>
        </div>

        {/* Organic Leaf (Bottom Left) */}
        <div className="absolute left-[12%] sm:left-[22%] bottom-[15%] z-30 w-12 sm:w-14 h-8 sm:h-10 animate-float-leaf">
          <svg viewBox="0 0 120 80" className="w-full h-full drop-shadow-md" transform="rotate(25)">
            <path d="M 10 40 Q 60 5 110 40 Q 60 75 10 40 Z" fill="#388e3c" stroke="#1b5e20" strokeWidth="2" />
            <path d="M 10 40 L 105 40" stroke="#81c784" strokeWidth="2" fill="none" />
            <path d="M 40 40 L 30 25 M 60 40 L 50 20 M 80 40 L 70 22" stroke="#81c784" strokeWidth="1.5" fill="none" />
            <path d="M 40 40 L 50 55 M 60 40 L 70 60 M 80 40 L 90 58" stroke="#81c784" strokeWidth="1.5" fill="none" />
          </svg>
        </div>

        {/* Organic Leaf (Bottom Right) */}
        <div className="absolute right-[12%] sm:right-[22%] bottom-[12%] z-30 w-12 sm:w-15 h-8 sm:h-10 animate-float-leaf">
          <svg viewBox="0 0 120 80" className="w-full h-full drop-shadow-md" transform="rotate(-15)">
            <path d="M 10 40 Q 60 5 110 40 Q 60 75 10 40 Z" fill="#388e3c" stroke="#1b5e20" strokeWidth="2" />
            <path d="M 10 40 L 105 40" stroke="#81c784" strokeWidth="2" fill="none" />
            <path d="M 40 40 L 30 25 M 60 40 L 50 20 M 80 40 L 70 22" stroke="#81c784" strokeWidth="1.5" fill="none" />
            <path d="M 40 40 L 50 55 M 60 40 L 70 60 M 80 40 L 90 58" stroke="#81c784" strokeWidth="1.5" fill="none" />
          </svg>
        </div>

        {/* Peanut Flake (Top Left) */}
        <div className="absolute left-[16%] sm:left-[26%] top-[12%] z-30 w-8 sm:w-10 h-8 sm:h-10 animate-float-nut-2">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md" transform="rotate(-40)">
            <ellipse cx="50" cy="50" rx="35" ry="18" fill="#e4af7b" stroke="#aa794d" strokeWidth="2" />
            <circle cx="50" cy="50" r="3" fill="#aa794d" />
          </svg>
        </div>

        {/* Peanut Flake (Top Right) */}
        <div className="absolute right-[16%] sm:right-[26%] top-[10%] z-30 w-8 sm:w-10 h-8 sm:h-10 animate-float-nut-1">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md" transform="rotate(45)">
            <ellipse cx="50" cy="50" rx="35" ry="18" fill="#e4af7b" stroke="#aa794d" strokeWidth="2" />
            <circle cx="50" cy="50" r="3" fill="#aa794d" />
          </svg>
        </div>

      </div>

      {/* 4. Swiper Pagination Dots centered at the absolute bottom of hero */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex items-center justify-center">
        <div className="flex space-x-3.5 bg-black/10 backdrop-blur-sm px-4 py-2.5 rounded-full">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-500 outline-none focus:outline-none ${
                index === activeSlide ? 'w-10 bg-white shadow-md' : 'w-2.5 bg-white/35 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

    </section>
  );
};
