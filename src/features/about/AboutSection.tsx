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
      className="py-24 bg-[#fefcf0] text-brand-green-dark relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Column Left (Storefront facade in custom blob shape + standing thumbs-up mascot) */}
          <div className="lg:col-span-6 flex justify-center relative select-none">
            {/* Storefront blob container */}
            <div className="relative w-80 sm:w-[400px] h-[320px] sm:h-[400px] flex items-center justify-center">
              
              {/* Fluid mask blob shape containing the storefront image */}
              <div 
                className="w-full h-full border-4 border-brand-green overflow-hidden shadow-2xl relative"
                style={{
                  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                }}
              >
                <img 
                  src={realStorefront} 
                  alt="Mouzy Real Storefront" 
                  className="w-full h-full object-cover transform hover:scale-[1.05] transition-transform duration-700"
                />
                {/* Green tint overlay */}
                <div className="absolute inset-0 bg-brand-green/5 mix-blend-multiply pointer-events-none" />
              </div>

              {/* Overlapping Thumbs-up Mascot character in foreground */}
              <div className="absolute bottom-[-20px] right-[-20px] sm:right-[-40px] z-20 w-44 sm:w-60 h-auto animate-float">
                <img 
                  src={character} 
                  alt="Mouzy Thumbs-up Mascot" 
                  className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-300"
                />
              </div>

            </div>
          </div>

          {/* Column Right (About Us Texts and Cursive title) */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 text-left">
            {/* Cursive Green Title */}
            <h2 
              id="about-heading" 
              className="text-4xl sm:text-6xl text-brand-green font-palpiyo tracking-wide capitalize"
            >
              About Us
            </h2>

            {/* Content copy */}
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              Our dream of <strong>MOUZY</strong> has come true through a lot of future travels and the tastes we have experienced. Our goal was to provide more than 60 different Avilmilks in the best possible way.
            </p>
            
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Mouzy officially launched in Perinthalmanna on <strong>March 2020</strong> (carrying the legacy of "Shimla Juice Shop" since 1985). The project has opened several branches in a short span of time and has been able to provide employment to many more.
            </p>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              We strive to make this brand a favorite with fresh and quality products, instant making, and excellent service. The biggest feature of Avilmilk in Mouzy is that all the making is done fresh only after the customer has ordered it. In most other shops everything is set and processed. It cannot give the original taste of Avil milk.
            </p>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Our goal is to have more outlets inside and outside Kerala and thereby employ more people.
            </p>

            {/* Blue Action Button exactly like mockup */}
            <div className="pt-4">
              <button 
                onClick={handleScrollToProducts}
                className="bg-[#1e73be] hover:bg-[#155d9b] text-white font-display font-bold text-sm px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 active:scale-95 outline-none focus:outline-none"
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
