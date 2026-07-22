import React, { useState, useEffect } from 'react';
import logoImg from '../../assets/logo.png';

interface NavbarProps {
  onFranchiseClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onFranchiseClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Products', href: '#items' },
    { label: 'Outlets', href: '#outlets' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled 
          ? 'bg-brand-green/90 backdrop-blur-md shadow-lg border-b border-white/5 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Left */}
          <a href="#home" className="flex items-center focus:outline-none animate-fade-in" aria-label="Mouzy Home">
            <img 
              src={logoImg} 
              alt="Mouzy Logo" 
              className="h-20 sm:h-26 w-auto object-contain py-1" 
            />
          </a>

          {/* Centered Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-10 absolute left-1/2 -translate-x-1/2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-bold tracking-wide text-white hover:text-brand-yellow-warm transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-brand-yellow-warm transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Yellow Contact CTA Button (Right) */}
          <div className="hidden lg:block">
            <button 
              onClick={onFranchiseClick}
              className="bg-brand-yellow text-brand-green-dark px-7 py-2.5 rounded-full font-bold text-sm hover:bg-white hover:text-brand-green hover:shadow-lg transition-all duration-300 active:scale-95 outline-none focus:outline-none"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-brand-yellow-warm transition-colors duration-300"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle mobile navigation menu"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`} />
          </button>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 top-[64px] z-35 lg:hidden bg-brand-green-black/95 backdrop-blur-lg animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col items-center justify-center space-y-6 pt-12">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  const target = document.querySelector(link.href);
                  target?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xl font-bold font-display text-white/95 hover:text-brand-yellow-warm transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}

            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onFranchiseClick();
              }}
              className="mt-6 bg-brand-yellow text-brand-green-dark px-8 py-3 rounded-full font-bold text-base hover:bg-white transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
