import React, { useState } from 'react';
import { PRODUCTS_DATA } from '../../utils/config';

// Import images
import fruitNutMilk from '../../assets/fruit_nut_milk.png';
import chocolateNutMilk from '../../assets/chocolate_nut_milk.png';
import pistaMilk from '../../assets/pista_milk.png';
import oreoMilk from '../../assets/oreo_milk.png';
import datesMilk from '../../assets/dates_milk.png';
import monkeyMascot from '../../assets/monkey.png';
import characterMascot from '../../assets/character.png';

// Import Layer images
import mashedBanana from '../../assets/mashed_banana.png';
import roastedAvil from '../../assets/roasted_avil.png';
import chilledMilk from '../../assets/chilled_milk.png';
import premiumNuts from '../../assets/premium_nuts.png';

export const ProductCatalog: React.FC = () => {
  const [activeShowcaseIndex, setActiveShowcaseIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<'supreme' | 'premium'>('supreme');

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

  const filteredProducts = PRODUCTS_DATA.filter(
    (product) => product.category === activeCategory
  );

  const ingredients = [
    {
      id: 'i1',
      title: 'Mashed Bananas',
      desc: 'Ripe local bananas mashed smoothly at the bottom, providing rich natural sweetness, vitamins, and base texture.',
      benefit: 'Rich in Potassium & Energy',
      color: 'border-brand-yellow/30 bg-brand-yellow/5',
      image: mashedBanana
    },
    {
      id: 'i2',
      title: 'Roasted Rice Flakes (Aval)',
      desc: 'Crispy roasted rice flakes layered to perfection. Our signature roasting method ensures they stay crunchy.',
      benefit: 'Signature Double Crunch',
      color: 'border-brand-cream/30 bg-brand-cream/5',
      image: roastedAvil
    },
    {
      id: 'i3',
      title: 'Chilled Creamy Milk',
      desc: 'Double-pasteurized, highly hygienic, and perfectly chilled fresh milk poured slowly to merge all layers.',
      benefit: 'Calcium & Creamy base',
      color: 'border-white/10 bg-white/[0.02]',
      image: chilledMilk
    },
    {
      id: 'i4',
      title: 'Premium Nuts & Toppings',
      desc: 'Roasted peanuts, almonds, pistachios, or cashews scattered on top, giving an extra crunch with every sip.',
      benefit: 'Wholesome Protein & Fats',
      color: 'border-brand-yellow-warm/30 bg-brand-yellow-warm/5',
      image: premiumNuts
    }
  ];

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

      {/* 2. Ingredients / Anatomy of Avil Milk Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow-warm font-display">
            WHAT'S INSIDE?
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
            Anatomy of Avil Milk
          </h2>
          <p className="text-sm text-brand-cream-dark/70 max-w-xl mx-auto mt-2">
            Every single cup of Mouzy Avil Milk is a balanced concoction of healthy, nutrient-rich local ingredients built layer by layer.
          </p>
          <div className="w-16 h-[3px] bg-brand-yellow-warm mx-auto rounded-full mt-4" />
        </div>

        {/* Grid Layout representing the layer build */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ingredients.map((item, index) => (
            <div 
              key={item.id} 
              className={`glass-card p-5 border rounded-2xl flex flex-col justify-between text-left transition-all duration-500 hover:scale-[1.02] ${item.color}`}
            >
              <div className="space-y-4">
                {/* Layer Index & Label */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-display px-3 py-1 rounded-full bg-brand-green text-white">
                    Layer 0{index + 1}
                  </span>
                  <span className="text-[10px] text-brand-yellow-warm font-bold font-display uppercase tracking-wider">
                    {item.benefit}
                  </span>
                </div>

                {/* Real Layer Image */}
                <div className="w-full h-36 rounded-xl overflow-hidden border border-white/10 bg-brand-green-deep">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-base font-bold text-white font-display">
                  {item.title}
                </h3>
                <p className="text-xs text-brand-cream-dark/60 leading-relaxed min-h-[50px]">
                  {item.desc}
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-brand-cream-dark/40 text-xs">
                <span>Mouzy Special</span>
                <i className="fas fa-check-circle text-brand-yellow-warm" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Full Menu Catalog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Menu Header */}
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow-warm font-display">
            OUR SPECIALITIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
            The Mouzy Menu
          </h2>
          <p className="text-sm text-brand-cream-dark/70 max-w-xl mx-auto mt-2">
            Choose from our premium rich nut blends or supreme ice cream fusions. Over 60+ customized combinations available at our outlets.
          </p>
          <div className="w-16 h-[3px] bg-brand-yellow-warm mx-auto rounded-full mt-4" />
        </div>

        {/* Categories Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-brand-green-deep/90 border border-white/10 p-1.5 rounded-full flex space-x-2">
            <button
              onClick={() => setActiveCategory('supreme')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 font-display ${
                activeCategory === 'supreme'
                  ? 'bg-brand-yellow text-brand-green-dark shadow-md shadow-brand-yellow/15'
                  : 'text-brand-cream-dark/60 hover:text-white'
              }`}
            >
              Supreme Flavours
            </button>
            <button
              onClick={() => setActiveCategory('premium')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 font-display ${
                activeCategory === 'premium'
                  ? 'bg-brand-yellow text-brand-green-dark shadow-md shadow-brand-yellow/15'
                  : 'text-brand-cream-dark/60 hover:text-white'
              }`}
            >
              Premium Flavours
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="glass-card p-6 flex flex-col items-center text-center transition-all duration-300 border border-white/5 hover:border-brand-yellow/20 group"
            >
              {/* Product Badge Graphic */}
              <div className="mb-4 w-32 h-44 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="max-w-full max-h-full object-contain drop-shadow-[0_15px_30px_rgba(3,17,6,0.4)]"
                  loading="lazy"
                />
              </div>

              {/* Title */}
              <h3 className="text-base font-bold font-display text-white mb-2">
                {product.name}
              </h3>

              {/* Description */}
              <p className="text-xs text-brand-cream-dark/60 leading-relaxed mb-6 flex-grow min-h-[50px]">
                {product.description || 'Our signature recipe layered with authentic crunchiness, banana chunks, and dry toppings.'}
              </p>

              {/* Card Footer detail */}
              <div className="w-full pt-4 border-t border-white/5 flex items-center justify-between text-xs text-brand-yellow-warm font-semibold">
                <span className="uppercase tracking-wider text-[10px] font-display text-brand-cream-dark/40">
                  {product.category}
                </span>
                <span className="flex items-center space-x-1">
                  <span>100% Veg</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block border border-white/10" />
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
