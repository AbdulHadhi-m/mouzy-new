import React, { useState } from 'react';
import { PRODUCTS_DATA } from '../../utils/config';

// Import Layer images
import mashedBanana from '../../assets/mashed_banana.png';
import roastedAvil from '../../assets/roasted_avil.png';
import chilledMilk from '../../assets/chilled_milk.png';
import premiumNuts from '../../assets/premium_nuts.png';

export const ProductCatalog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'supreme' | 'premium'>('supreme');

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
      className="py-24 bg-gradient-to-b from-brand-green-black to-brand-green-deep text-white"
      aria-labelledby="menu-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Ingredients / What's Inside Section */}
        <div className="mb-28">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow-warm font-display">
              WHAT'S INSIDE?
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display">
              Anatomy of Avil Milk
            </h2>
            <p className="text-sm text-brand-cream-dark/60 max-w-xl mx-auto mt-2">
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
                
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-brand-cream-dark/30 text-xs">
                  <span>Mouzy Special</span>
                  <i className="fas fa-check-circle text-brand-yellow-warm" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Menu/Catalog Header */}
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow-warm font-display">
            OUR SPECIALITIES
          </span>
          <h2 id="menu-heading" className="text-3xl sm:text-5xl font-extrabold font-display">
            The Mouzy Menu
          </h2>
          <p className="text-sm text-brand-cream-dark/60 max-w-xl mx-auto mt-2">
            Choose from our premium rich nut blends or supreme ice cream fusions. Over 60+ customized combinations available at our outlets.
          </p>
          <div className="w-16 h-[3px] bg-brand-yellow-warm mx-auto rounded-full mt-4" />
        </div>

        {/* Categories Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-brand-green-deep/80 border border-white/5 p-1.5 rounded-full flex space-x-2">
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
                <span className="uppercase tracking-wider text-[10px] font-display text-brand-cream-dark/30">
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
