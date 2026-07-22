import React from 'react';
import logoImg from '../../assets/logo.png';

export const Footer: React.FC = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#181818] text-white pt-20 pb-8 relative z-0 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          
          {/* Logo & Tagline Column */}
          <div className="flex flex-col items-start space-y-4">
            <img 
              src={logoImg} 
              alt="Mouzy Logo" 
              className="h-24 sm:h-32 w-auto object-contain" 
            />
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm font-medium">
              Freshly made Avil milk, instantly served with love. From Kerala to the world.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-base font-extrabold font-display text-white tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => handleLinkClick(e, '#home')}
                  className="hover:text-brand-yellow-warm transition-colors duration-300 font-semibold"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleLinkClick(e, '#about')}
                  className="hover:text-brand-yellow-warm transition-colors duration-300 font-semibold"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#items" 
                  onClick={(e) => handleLinkClick(e, '#items')}
                  className="hover:text-brand-yellow-warm transition-colors duration-300 font-semibold"
                >
                  Products
                </a>
              </li>
              <li>
                <a 
                  href="#outlets" 
                  onClick={(e) => handleLinkClick(e, '#outlets')}
                  className="hover:text-brand-yellow-warm transition-colors duration-300 font-semibold"
                >
                  Outlets
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleLinkClick(e, '#franchise')}
                  className="hover:text-brand-yellow-warm transition-colors duration-300 font-semibold"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-base font-extrabold font-display text-white tracking-wider uppercase">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              {/* Phone Line 1 */}
              <li className="flex items-center space-x-3.5">
                <i className="fas fa-phone-alt text-white text-base" />
                <a 
                  href="tel:+919037600831" 
                  className="hover:text-brand-yellow-warm transition-colors duration-300 font-semibold"
                >
                  +91 9037 600 831
                </a>
              </li>
              {/* Phone Line 2 */}
              <li className="flex items-center space-x-3.5">
                <i className="fas fa-phone-alt text-white text-base" />
                <a 
                  href="tel:+917034004000" 
                  className="hover:text-brand-yellow-warm transition-colors duration-300 font-semibold"
                >
                  +91 7034 004 000
                </a>
              </li>
              {/* Email */}
              <li className="flex items-center space-x-3.5">
                <i className="fas fa-envelope text-white text-base" />
                <a 
                  href="mailto:info@mouzy.in" 
                  className="hover:text-brand-yellow-warm transition-colors duration-300 font-semibold"
                >
                  info@mouzy.in
                </a>
              </li>
              {/* Social icons */}
              <li className="flex items-center space-x-4 pt-2">
                <a 
                  href="https://www.facebook.com/mouzy.in" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-yellow hover:text-brand-green-dark flex items-center justify-center transition-all duration-300"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f text-sm" />
                </a>
                <a 
                  href="https://www.instagram.com/mouzy.in" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-yellow hover:text-brand-green-dark flex items-center justify-center transition-all duration-300"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram text-sm" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-white/5 my-12" />

        {/* Copyright Row */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Mouzy. All rights reserved.</p>
          <p>
            Powered by{' '}
            <a 
              href="https://mouzy.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-brand-yellow-warm transition-colors"
            >
              CCinfotech
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};
