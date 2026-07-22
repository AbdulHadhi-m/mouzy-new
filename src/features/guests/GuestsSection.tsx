import React from 'react';

// Import guest images
import guestCouple from '../../assets/guest_couple.png';
import guestFamily from '../../assets/guest_family.png';
import guestFriends from '../../assets/guest_friends.png';

interface GuestReview {
  id: string;
  name: string;
  location: string;
  review: string;
  rating: number;
  image: string;
}

export const GuestsSection: React.FC = () => {
  const reviews: GuestReview[] = [
    {
      id: 'g1',
      name: 'Rahul K. P.',
      location: 'Perinthalmanna',
      review: 'I have been visiting Shimla juice shop since my childhood, and the way they branded Mouzy Avil Milk is incredible. The crunch of the roasted aval mixed with banana is still the absolute best in Kerala.',
      rating: 5,
      image: guestCouple
    },
    {
      id: 'g2',
      name: 'Amisha Shah',
      location: 'Calicut Beach',
      review: 'Tried the Mango Nut Avil Milk at Calicut and was blown away. Extremely thick, creamy, and satisfying. The roasted flakes do not get soggy instantly which makes it super crunchy!',
      rating: 5,
      image: guestFamily
    },
    {
      id: 'g3',
      name: 'Faisal Mohammed',
      location: 'Dubai Al Karama',
      review: 'Thrilled to find Mouzy in Dubai! The Royal Avil Milk tastes exactly like the original. Saffron cream flavor blended with banana and crunchiness brings back all the Perinthalmanna memories.',
      rating: 5,
      image: guestFriends
    }
  ];

  return (
    <section 
      id="guests" 
      className="py-24 bg-gradient-to-b from-brand-green-deep to-brand-green-black text-white relative overflow-hidden"
      aria-labelledby="guests-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow-warm font-display">
            SOCIAL PROOF
          </span>
          <h2 id="guests-heading" className="text-3xl sm:text-5xl font-extrabold font-display">
            What Our Guests Say
          </h2>
          <p className="text-sm text-brand-cream-dark/60 max-w-xl mx-auto mt-2">
            See the love and feedback shared by food lovers who visit our outlets across cities.
          </p>
          <div className="w-16 h-[3px] bg-brand-yellow-warm mx-auto rounded-full mt-4" />
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item) => (
            <div 
              key={item.id}
              className="glass-card p-8 flex flex-col justify-between border border-white/5 hover:border-brand-yellow-warm/20"
            >
              <div>
                {/* Rating stars */}
                <div className="flex space-x-1 text-brand-yellow-warm mb-6">
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <i key={idx} className="fas fa-star text-sm" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-brand-cream-dark/80 italic leading-relaxed mb-6 text-left font-medium">
                  "{item.review}"
                </p>
              </div>

              {/* Guest Profile Row */}
              <div className="flex items-center space-x-4 pt-6 border-t border-white/5 text-left">
                {/* Visual Avatar Photo */}
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover border border-white/10"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-sm font-bold text-white font-display">
                    {item.name}
                  </h4>
                  <span className="text-[10px] text-brand-cream-dark/45 uppercase tracking-wider font-semibold">
                    {item.location}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
