import React, { useState, useEffect } from 'react';
import { OUTLETS_DATA } from '../../utils/config';
import logoImg from '../../assets/logo.png';

export const OutletLocator: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(3);

  // Dynamic responsive items per page
  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setItemsPerPage(1); // 1 card on mobile phone
      } else if (width < 1024) {
        setItemsPerPage(2); // 2 cards on tablet
      } else {
        setItemsPerPage(3); // 3 cards on desktop
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(OUTLETS_DATA.length / itemsPerPage) || 1;

  // Auto slide effect
  useEffect(() => {
    if (totalPages <= 1) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalPages);
    }, 4500);
    return () => clearInterval(interval);
  }, [totalPages]);

  // Reset activeSlide if out of bounds on resize
  useEffect(() => {
    if (activeSlide >= totalPages) {
      setActiveSlide(0);
    }
  }, [totalPages, activeSlide]);

  // Get current visible outlets slice for active slide page
  const visibleOutlets = OUTLETS_DATA.slice(
    activeSlide * itemsPerPage,
    activeSlide * itemsPerPage + itemsPerPage
  );

  return (
    <section 
      id="outlets" 
      className="py-20 sm:py-28 bg-[#FEFAD3] text-brand-green-dark relative overflow-hidden"
      aria-labelledby="outlets-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banavil-style Cursive Heading */}
        <div className="text-center mb-14">
          <h2 
            id="outlets-heading" 
            className="text-5xl sm:text-6xl text-brand-green font-accent font-extrabold tracking-wide capitalize drop-shadow-sm"
          >
            Our Outlets
          </h2>
        </div>

        {/* Banavil Outlets Slider / Cards Container */}
        <div className="relative px-2 sm:px-4">
          
          {/* Cards Grid / Slide View */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
            {visibleOutlets.map((outlet) => {
              const cityName = outlet.name.replace(/^Mouzy\s+/i, '');

              return (
                <div 
                  key={outlet.id}
                  className="bg-white shadow-md hover:shadow-xl border border-gray-100/80 rounded-[28px] p-5 sm:p-6 flex flex-col justify-between text-center transition-all duration-300 hover:-translate-y-1 group animate-fade-in"
                >
                  <div>
                    {/* Banavil-style soft cream top photo/watermark frame */}
                    <div className="w-full h-52 sm:h-56 rounded-2xl bg-[#fffdf0] border border-[#f4eed4] flex items-center justify-center p-3 overflow-hidden relative group-hover:bg-[#fff9df] transition-colors duration-300">
                      <img 
                        src={outlet.image} 
                        alt={outlet.name} 
                        className="w-full h-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500" 
                        loading="lazy"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = logoImg;
                          (e.currentTarget as HTMLImageElement).className = "w-28 h-auto object-contain opacity-40";
                        }}
                      />
                    </div>

                    {/* Bold City Name (Banavil Style) */}
                    <h3 className="text-lg font-black text-brand-green-dark font-display uppercase tracking-widest mt-6 text-center">
                      {cityName}
                    </h3>

                    {/* Address Line (Banavil Style) */}
                    <p className="text-xs sm:text-sm text-gray-600 text-center font-medium leading-relaxed mt-2 px-2 min-h-[44px]">
                      {outlet.address}
                    </p>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="pt-5 mt-4 border-t border-gray-100 flex items-center justify-between gap-3 text-xs">
                    <a 
                      href={`tel:${outlet.phone.replace(/\s+/g, '')}`}
                      className="flex items-center space-x-2 font-bold text-gray-700 hover:text-brand-green transition-colors duration-300"
                    >
                      <div className="w-7 h-7 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
                        <i className="fas fa-phone-alt text-xs" />
                      </div>
                      <span>{outlet.phone}</span>
                    </a>
                    
                    <a 
                      href={outlet.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-brand-green/10 hover:bg-brand-green hover:text-white text-brand-green font-display font-bold text-[11px] uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-300 flex items-center space-x-1.5"
                    >
                      <i className="fas fa-map-marker-alt" />
                      <span>Map</span>
                    </a>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Banavil-style Carousel Pagination Dots centered at bottom */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-2.5 mt-14">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 outline-none ${
                  idx === activeSlide
                    ? 'w-8 bg-brand-green'
                    : 'w-2.5 bg-brand-green/30 hover:bg-brand-green/60'
                }`}
                aria-label={`Go to outlet slide page ${idx + 1}`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
