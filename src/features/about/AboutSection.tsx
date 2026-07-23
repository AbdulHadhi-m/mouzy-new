import React from 'react';

// Import about1.png and standing mascot image A2.png for About Us section
import about1Img from '../../assets/about1.png';
import a2Img from '../../assets/A2.png';

export const AboutSection: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-20 sm:py-28 bg-[#FFF200] text-brand-green-dark relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Store image in 5-lobed fluid organic blob + standing mascot character */}
          <div className="lg:col-span-6 flex justify-center relative select-none">
            <div className="relative w-72 sm:w-[450px] h-[320px] sm:h-[450px] flex items-center justify-center">
              
              {/* 5-Lobed Organic Fluid Blob SVG Container */}
              <svg viewBox="0 0 500 500" className="w-full h-full filter drop-shadow-2xl">
                <defs>
                  <clipPath id="about-5-lobe-blob">
                    <path d="M 250 30 C 295 30 315 90 365 75 C 415 60 445 115 455 170 C 465 225 425 275 435 335 C 445 395 390 445 330 445 C 270 445 255 395 195 415 C 135 435 85 405 65 350 C 45 295 80 245 60 185 C 40 125 90 70 150 70 C 205 70 205 30 250 30 Z" />
                  </clipPath>
                </defs>

                {/* Background Storefront Image masked by 5-lobed blob */}
                <image 
                  href={about1Img} 
                  width="500" 
                  height="500" 
                  preserveAspectRatio="xMidYMid slice" 
                  clipPath="url(#about-5-lobe-blob)" 
                />

                {/* Dark Green Outer Border Stroke */}
                <path 
                  d="M 250 30 C 295 30 315 90 365 75 C 415 60 445 115 455 170 C 465 225 425 275 435 335 C 445 395 390 445 330 445 C 270 445 255 395 195 415 C 135 435 85 405 65 350 C 45 295 80 245 60 185 C 40 125 90 70 150 70 C 205 70 205 30 250 30 Z" 
                  fill="none" 
                  stroke="#0B6E4F" 
                  strokeWidth="10" 
                />
              </svg>

              {/* Overlapping Mascot character A2 in foreground */}
              <div className="absolute bottom-[-25px] right-[-25px] sm:right-[-45px] z-20 w-44 sm:w-64 h-auto">
                <img 
                  src={a2Img} 
                  alt="Mouzy Mascot Character" 
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
              className="text-4xl sm:text-6xl text-brand-green-dark font-accent font-extrabold tracking-wide capitalize drop-shadow-sm"
            >
              About Us
            </h2>

            {/* Official Mouzy content copy from mouzy.in */}
            <p className="text-base sm:text-lg text-brand-green-dark leading-relaxed font-bold">
              Our dream of <strong className="text-brand-green-dark font-black underline decoration-brand-green/30 decoration-2">MOUZY</strong> has come true through a lot of future travels and the tastes we have experienced. Our goal was to provide more than 60 different Avilmilks in the best possible way.
            </p>
            
            <p className="text-sm sm:text-base text-brand-green-dark/95 leading-relaxed font-semibold">
              Mouzy officially launched in Perinthalmanna on <strong className="text-brand-green-black font-extrabold">March 2020</strong> (carrying the legacy of "Shimla Juice Shop" established since 1985). The project has opened several branches in a short span of time and has been able to provide employment to many more.
            </p>

            <p className="text-sm sm:text-base text-brand-green-dark/95 leading-relaxed font-semibold">
              We strive to make this brand a favorite with fresh and quality products, instant making, and excellent service. The biggest feature of Avilmilk in Mouzy is that all the making is done fresh only after the customer has ordered it. In most other shops everything is set and processed. It cannot give the original taste of Avil milk.
            </p>

            <p className="text-sm sm:text-base text-brand-green-dark/95 leading-relaxed font-semibold">
              Our goal is to have more outlets inside and outside Kerala and thereby employ more people.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
