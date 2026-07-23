import React, { useState } from 'react';

// Import images
import fruitNutMilk from '../../assets/fruit_nut_milk.png';
import chocolateNutMilk from '../../assets/chocolate_nut_milk.png';
import pistaMilk from '../../assets/pista_milk.png';
import oreoMilk from '../../assets/oreo_milk.png';
import datesMilk from '../../assets/dates_milk.png';
import monkeyMascot from '../../assets/monkey.png';
import characterMascot from '../../assets/character.png';

export const ProductCatalog: React.FC = () => {
  const [activeShowcaseIndex, setActiveShowcaseIndex] = useState(0);

  // Banavil-style sticky showcase items data
  const showcaseItems = [
    {
      id: 'showcase-1',
      title: 'Our Signature Avil Milk',
      description: 'Explore our signature Avil milk flavors — a fusion of tradition and innovation. Carrying the legacy since 1985, Mouzy brings over 60+ unique varieties crafted fresh for every order.',
      points: [
        'Crafted 100% fresh on order',
        'Over 60 unique signature varieties',
        'Made with authentic Kerala love & quality ingredients'
      ],
      image: fruitNutMilk,
      mascot: monkeyMascot,
      badge: 'Bestseller'
    },
    {
      id: 'showcase-2',
      title: 'Royal Dates & Nuts',
      description: 'A luxurious fusion of creamy banana, crunchy roasted avil, and exotic dry fruits & crushed dates — fit for royalty.',
      points: [
        'Loaded with almonds, cashews & dates',
        'Thick and highly indulgent texture',
        'Top-seller among supreme picks'
      ],
      image: datesMilk,
      mascot: characterMascot,
      badge: 'Supreme Pick'
    },
    {
      id: 'showcase-3',
      title: 'Oreo Nut Delight',
      description: 'The ultimate dark cocoa biscuit crumble merged with Kerala roasted avil and chilled milk base.',
      points: [
        'Real Oreo cookie chunks & cream',
        'Double crispiness with roasted rice flakes',
        'Kids & Teen favorite special'
      ],
      image: oreoMilk,
      mascot: monkeyMascot,
      badge: 'Trending'
    },
    {
      id: 'showcase-4',
      title: 'Pistachio Special',
      description: 'Aromatic green pistachio infusion mixed with rich chilled milk, banana puree, and roasted peanuts.',
      points: [
        'Rich pistachio aroma & flavor',
        'Natural nutty crunchiness',
        'Refreshing chilled summer treat'
      ],
      image: pistaMilk,
      mascot: characterMascot,
      badge: 'Popular'
    },
    {
      id: 'showcase-5',
      title: 'Chocolate Nut Crunch',
      description: 'Deep cocoa blend layered over ripe bananas, crisp roasted aval, and scattered peanuts.',
      points: [
        'Rich Dutch cocoa flavor',
        'Balanced natural banana sweetness',
        'Freshly whipped on order'
      ],
      image: chocolateNutMilk,
      mascot: monkeyMascot,
      badge: 'Classic'
    }
  ];

  const currentItem = showcaseItems[activeShowcaseIndex];

  return (
    <section 
      id="items" 
      className="py-16 sm:py-24 bg-[#041d0b] text-white overflow-hidden relative"
      aria-labelledby="menu-heading"
    >
      
      {/* 1. Banavil-Style Interactive Sticky Showcase Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        
        {/* Cursive Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-6xl text-brand-yellow font-accent font-extrabold tracking-wide drop-shadow-md">
            Our Products
          </h2>
          <p className="text-sm text-brand-cream-dark/80 max-w-lg mx-auto mt-2">
            Click through our signature highlights or scroll down to explore the complete Mouzy catalog.
          </p>
        </div>

        {/* Showcase Carousel Control Tabs */}
        <div className="flex justify-center flex-wrap gap-2.5 mb-10">
          {showcaseItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveShowcaseIndex(idx)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeShowcaseIndex === idx
                  ? 'bg-brand-yellow text-brand-green-dark shadow-lg scale-105'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              {item.title.split(' ')[0]} {item.title.split(' ')[1] || ''}
            </button>
          ))}
        </div>

        {/* Banavil sticky_content Card Layout */}
        <div className="bg-brand-green-deep/90 border border-brand-yellow/20 rounded-3xl p-6 sm:p-12 relative shadow-2xl overflow-hidden min-h-[460px] flex items-center">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full relative z-10">
            
            {/* Left Column: Mascot Character & Floating Product Cup (Banavil sticky_content_left) */}
            <div className="lg:col-span-5 flex justify-center items-center relative select-none">
              
              {/* Product Cup */}
              <div className="relative z-10 w-44 sm:w-60 h-auto animate-float">
                <img 
                  src={currentItem.image} 
                  alt={currentItem.title} 
                  className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.6)]"
                />
              </div>

              {/* Overlapping Character Mascot (Banavil delivery / character style) */}
              <div className="absolute -bottom-6 -left-4 sm:left-0 z-20 w-36 sm:w-48 h-auto">
                <img 
                  src={currentItem.mascot} 
                  alt="Mouzy Mascot" 
                  className="w-full h-auto object-contain drop-shadow-xl animate-float-nut-1"
                />
              </div>

              {/* Badge Tag */}
              <span className="absolute top-0 right-4 bg-brand-yellow text-brand-green-dark text-xs font-black uppercase px-4 py-1.5 rounded-full shadow-md">
                {currentItem.badge}
              </span>

            </div>

            {/* Right Column: Title in Kaushan Script, Description & Bullet points (Banavil sticky_content_right) */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-5 text-left">
              
              <h3 className="text-3xl sm:text-5xl font-accent font-extrabold text-brand-yellow leading-tight">
                {currentItem.title}
              </h3>

              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-medium">
                {currentItem.description}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-3 pt-2">
                {currentItem.points.map((pt, i) => (
                  <li key={i} className="flex items-center space-x-3 text-xs sm:text-sm text-brand-cream-dark">
                    <div className="w-6 h-6 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-yellow font-bold text-xs flex-shrink-0">
                      <i className="fas fa-check" />
                    </div>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <div className="pt-4 flex items-center space-x-4">
                <a
                  href="#contact"
                  className="bg-brand-yellow hover:bg-white text-brand-green-dark font-bold text-sm px-8 py-3 rounded-full shadow-md transition-all duration-300"
                >
                  Order at Store
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
