import React from 'react';

// Import real storefront and standing mascot images
import realStorefront from '../../assets/real_storefront.png';
import character from '../../assets/character.png';

export const AboutSection: React.FC = () => {
  const handleScrollToProducts = () => {
    const target = document.querySelector('#items');
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="about" 
      className="py-20 sm:py-28 bg-[#fdfcfa] text-brand-green-dark relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Banavil-style store image container in custom organic blob + standing mascot character */}
          <div className="lg:col-span-6 flex justify-center relative select-none">
            <div className="relative w-72 sm:w-[420px] h-[320px] sm:h-[420px] flex items-center justify-center">
              
              {/* Organic fluid blob shape containing the storefront image */}
              <div 
                className="w-full h-full border-4 border-brand-green overflow-hidden shadow-2xl relative"
                style={{
                  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                }}
              >
                <img 
                  src={realStorefront} 
                  alt="Mouzy Real Storefront Outlet" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-brand-green/10 mix-blend-multiply pointer-events-none" />
              </div>

              {/* Overlapping Thumbs-up Mascot character in foreground (Banavil about-us-character) */}
              <div className="absolute bottom-[-25px] right-[-25px] sm:right-[-45px] z-20 w-44 sm:w-64 h-auto animate-float">
                <img 
                  src={character} 
                  alt="Mouzy Thumbs-up Mascot" 
                  className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)] hover:scale-105 transition-transform duration-300"
                />
              </div>

            </div>
          </div>

          {/* Right Column: About Us Texts with Banavil-style Kaushan Script title */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 text-left">
            {/* Kaushan Script Cursive Heading */}
            <h2 
              id="about-heading" 
              className="text-4xl sm:text-6xl text-brand-green font-accent font-extrabold tracking-wide capitalize drop-shadow-sm"
            >
              About Us
            </h2>

            {/* Official Mouzy content copy from mouzy.in */}
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-semibold">
              Our dream of <strong className="text-brand-green font-bold">MOUZY</strong> has come true through a lot of future travels and the tastes we have experienced. Our goal was to provide more than 60 different Avilmilks in the best possible way.
            </p>
            
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Mouzy officially launched in Perinthalmanna on <strong className="text-gray-900">March 2020</strong> (carrying the legacy of "Shimla Juice Shop" established since 1985). The project has opened several branches in a short span of time and has been able to provide employment to many more.
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              We strive to make this brand a favorite with fresh and quality products, instant making, and excellent service. The biggest feature of Avilmilk in Mouzy is that all the making is done fresh only after the customer has ordered it. In most other shops everything is set and processed. It cannot give the original taste of Avil milk.
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Our goal is to have more outlets inside and outside Kerala and thereby employ more people.
            </p>

            {/* Banavil style button */}
            <div className="pt-4">
              <button 
                onClick={handleScrollToProducts}
                className="bg-[#1e73be] hover:bg-[#155d9b] text-white font-display font-bold text-sm px-9 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 outline-none focus:outline-none"
              >
                Know More
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
