import React, { useState } from 'react';
import { OUTLETS_DATA } from '../../utils/config';

export const OutletLocator: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredOutlets = OUTLETS_DATA.filter((outlet) =>
    outlet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    outlet.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section 
      id="outlets" 
      className="py-24 bg-[#fefcf0] text-brand-green-dark relative overflow-hidden"
      aria-labelledby="outlets-heading"
    >
      {/* Soft background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-yellow/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block with cursive title */}
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-green font-display">
            LOCATE US
          </span>
          <h2 
            id="outlets-heading" 
            className="text-4xl sm:text-6xl text-brand-green font-palpiyo tracking-wide capitalize"
          >
            Our Outlets
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto mt-2">
            Find the closest Mouzy outlet near you. Grab a cup of fresh, crunch-loaded traditional Avil Milk today!
          </p>
          <div className="w-16 h-[3px] bg-brand-green mx-auto rounded-full mt-4" />
        </div>

        {/* Live Search Box */}
        <div className="max-w-md mx-auto mb-16 px-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by city or district... (e.g. Dubai, Calicut)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-full text-brand-green-dark placeholder-gray-400 focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all duration-300 outline-none text-sm pr-12 shadow-md"
              aria-label="Filter outlets by name or location"
            />
            <div className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400">
              <i className="fas fa-search" />
            </div>
          </div>
        </div>

        {/* Outlets Grid / Carousel Cards */}
        {filteredOutlets.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredOutlets.map((outlet) => (
              <div 
                key={outlet.id}
                className="bg-white shadow-lg border border-gray-100 rounded-3xl p-4 flex flex-col justify-between text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  {/* Outlet Storefront Photo */}
                  <div className="w-full h-48 rounded-2xl overflow-hidden mb-4 border border-gray-100 bg-gray-50">
                    <img 
                      src={outlet.image} 
                      alt={outlet.name} 
                      className="w-full h-full object-cover transform hover:scale-[1.03] transition-transform duration-500" 
                      loading="lazy"
                    />
                  </div>

                  {/* Card Header (City Icon + Name in bold caps) */}
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green border border-brand-green/5">
                      <i className="fas fa-store text-sm" />
                    </div>
                    <h3 className="text-base font-extrabold text-brand-green-dark font-display uppercase tracking-wide">
                      {outlet.name.replace('Mouzy ', '')}
                    </h3>
                  </div>

                  {/* Address */}
                  <p className="text-xs text-gray-500 leading-relaxed mb-6 pl-1 min-h-[40px]">
                    {outlet.address}
                  </p>
                </div>

                {/* Contact and Map trigger actions */}
                <div className="pt-4 border-t border-gray-50 flex items-center justify-between gap-4">
                  <a 
                    href={`tel:${outlet.phone.replace(/\s+/g, '')}`}
                    className="flex items-center space-x-2 text-xs font-bold text-gray-600 hover:text-brand-green transition-colors duration-300"
                  >
                    <i className="fas fa-phone-alt text-brand-green" />
                    <span>{outlet.phone}</span>
                  </a>
                  
                  <a 
                    href={outlet.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-green/10 hover:bg-brand-green hover:text-white text-brand-green font-display font-bold text-[10px] uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-300 flex items-center space-x-1.5"
                  >
                    <i className="fas fa-map-marker-alt" />
                    <span>Directions</span>
                  </a>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <i className="fas fa-store-slash text-4xl text-gray-300 mb-3" />
            <p className="text-sm text-gray-500 font-medium">No outlets found matching "{searchQuery}"</p>
          </div>
        )}

        {/* Carousel indicator dots centered at the bottom */}
        <div className="flex items-center justify-center space-x-2.5 mt-16">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-green" />
          <span className="w-2.5 h-2.5 rounded-full bg-brand-green/30" />
          <span className="w-2.5 h-2.5 rounded-full bg-brand-green/30" />
          <span className="w-2.5 h-2.5 rounded-full bg-brand-green/30" />
          <span className="w-2.5 h-2.5 rounded-full bg-brand-green/30" />
          <span className="w-2.5 h-2.5 rounded-full bg-brand-green/30" />
        </div>

      </div>
    </section>
  );
};
