import React, { useState, useEffect } from 'react';
import logoImg from '../../assets/logo.png';

interface NavbarProps {
  onContactClick: () => void;
  onNavigateHome: (href?: string) => void;
  currentPage: 'home' | 'contact';
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick, onNavigateHome, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight - 100;
      setIsScrolled(window.scrollY > heroHeight || currentPage === 'contact');
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Products', href: '#items' },
    { label: 'Outlets', href: '#outlets' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    onNavigateHome(href);
  };

  const isScrolledHeader = isScrolled || currentPage === 'contact';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolledHeader 
          ? 'bg-[#fef200] shadow-md border-b border-black/5 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Left */}
          <button 
            onClick={() => onNavigateHome('#home')} 
            className="flex items-center focus:outline-none animate-fade-in outline-none border-none cursor-pointer" 
            aria-label="Mouzy Home"
          >
            <img 
              src={logoImg} 
              alt="Mouzy Logo" 
              className="h-16 sm:h-20 w-auto object-contain py-1" 
            />
          </button>

          {/* Centered Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-10 absolute left-1/2 -translate-x-1/2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm font-extrabold tracking-wide transition-all duration-300 relative group ${
                  isScrolledHeader 
                    ? 'text-brand-green-dark hover:text-brand-green' 
                    : 'text-white hover:text-brand-yellow-warm'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-[-4px] left-0 w-0 h-[2.5px] transition-all duration-300 group-hover:w-full ${
                  isScrolledHeader ? 'bg-brand-green-dark' : 'bg-brand-yellow-warm'
                }`} />
              </a>
            ))}
          </nav>

          {/* Contact CTA Button (Right) */}
          <div className="hidden lg:block">
            <button 
              onClick={onContactClick}
              className={`px-7 py-2.5 rounded-full font-bold text-sm transition-all duration-300 active:scale-95 outline-none focus:outline-none shadow-md ${
                isScrolledHeader
                  ? 'bg-brand-green text-white hover:bg-brand-green-dark'
                  : 'bg-brand-yellow text-brand-green-dark hover:bg-white'
              }`}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolledHeader ? 'text-brand-green-dark' : 'text-white'
            }`}
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
          className="fixed inset-0 z-50 lg:hidden bg-gradient-to-b from-[#082914] via-[#0d3b1d] to-[#051a0c] text-white flex flex-col justify-between p-6 animate-fade-in overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          {/* Top Bar inside Drawer */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onNavigateHome('#home');
              }}
              className="flex items-center focus:outline-none"
            >
              <img src={logoImg} alt="Mouzy Logo" className="h-14 w-auto object-contain" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FFF200] hover:text-[#082914] text-white flex items-center justify-center transition-all duration-300 border border-white/20 text-lg"
              aria-label="Close mobile menu"
            >
              <i className="fas fa-times" />
            </button>
          </div>

          {/* Navigation Links List */}
          <div className="flex flex-col space-y-4 py-8">
            {navLinks.map((link) => {
              let iconClass = "fas fa-home";
              if (link.label === "About Us") iconClass = "fas fa-leaf";
              if (link.label === "Products") iconClass = "fas fa-glass-martini-alt";
              if (link.label === "Outlets") iconClass = "fas fa-store";

              return (
                <button
                  key={link.label}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onNavigateHome(link.href);
                  }}
                  className="flex items-center space-x-4 p-4 rounded-[1.25rem_0.5rem_1.25rem_0.5rem] bg-white/5 hover:bg-white/15 border border-white/10 transition-all text-left group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FFF200] text-[#082914] flex items-center justify-center font-bold text-sm shrink-0 group-hover:scale-110 transition-transform">
                    <i className={iconClass} />
                  </div>
                  <span className="text-xl font-black font-display tracking-wider uppercase text-white group-hover:text-[#FFF200] transition-colors">
                    {link.label}
                  </span>
                </button>
              );
            })}

            {/* Contact Us CTA Button */}
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onContactClick();
              }}
              className="mt-2 w-full py-4 bg-[#FFF200] hover:bg-white text-[#082914] font-display font-black text-base uppercase tracking-wider rounded-[2rem_0.75rem_2.25rem_0.85rem] border-2 border-[#FFF200] transition-all shadow-lg flex items-center justify-center space-x-2"
            >
              <span>Contact Us</span>
              <i className="fas fa-paper-plane text-sm" />
            </button>
          </div>

          {/* Drawer Footer Info */}
          <div className="pt-6 border-t border-white/10 space-y-4 text-center">
            <a 
              href="tel:+919539577700" 
              className="inline-flex items-center space-x-2 text-xs font-bold text-gray-300 hover:text-[#FFF200] transition-colors"
            >
              <i className="fas fa-phone-alt text-[#FFF200]" />
              <span>Franchise Hotline: +91 95395 77700</span>
            </a>

            <div className="flex items-center justify-center space-x-4 pt-1">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#FFF200] hover:text-[#082914] flex items-center justify-center transition-all text-sm"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#FFF200] hover:text-[#082914] flex items-center justify-center transition-all text-sm"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>

        </div>
      )}
    </header>
  );
};
