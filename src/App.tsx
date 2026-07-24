import React, { useState } from 'react';
import { Preloader } from './components/Navigation/Preloader';
import { Navbar } from './components/Navigation/Navbar';
import { HeroSlider } from './features/hero/HeroSlider';
import { AboutSection } from './features/about/AboutSection';
import { ProductsBanner } from './features/products/ProductsBanner';
import { OutletLocator } from './features/outlets/OutletLocator';
import { FranchiseBanner } from './features/franchise/FranchiseBanner';
import { ContactPage } from './features/contact/ContactPage';
import { Footer } from './components/Navigation/Footer';
import { Modal } from './components/Modal';
import { Input } from './components/Input';
import type { FranchiseSubmission } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'contact'>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<FranchiseSubmission>({
    name: '',
    mobile: '',
    email: '',
    city: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNavigateHome = (href?: string) => {
    setCurrentPage('home');
    if (href) {
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Reset submission state on close
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        mobile: '',
        email: '',
        city: '',
        message: ''
      });
    }, 400);
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden w-full max-w-full">
      {/* 1. Preloader Screen */}
      <Preloader />

      {/* 2. Fixed Glass Header */}
      <Navbar 
        onContactClick={handleContactClick} 
        onNavigateHome={handleNavigateHome}
        currentPage={currentPage}
      />

      {/* Main Sections Composition */}
      <main className="flex-grow">
        {currentPage === 'contact' ? (
          <ContactPage onNavigateHome={() => handleNavigateHome('#home')} />
        ) : (
          <>
            {/* 3. Hero Feature */}
            <HeroSlider />

            {/* 4. About Us Feature */}
            <AboutSection />

            {/* 5. Products Scooter Scroll Transition Banner */}
            <ProductsBanner />

            {/* 6. Outlets Locator Feature */}
            <OutletLocator />

            {/* 8. Franchise Call-To-Action Banner Feature */}
            <FranchiseBanner onApplyClick={() => setIsModalOpen(true)} />
          </>
        )}
      </main>

      {/* 9. Footing Column layout */}
      <Footer />

      {/* 10. Franchise Partnership Form Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        title={isSubmitted ? "Submission Successful" : "Application of Mouzy Franchise"}
      >
        {isSubmitted ? (
          <div className="text-center py-6 space-y-6">
            {/* Visual Success Mark */}
            <div className="w-16 h-16 bg-[#106829] border-2 border-[#106829] rounded-[20px_8px_20px_8px] flex items-center justify-center mx-auto text-[#FFF200] text-3xl animate-bounce shadow-lg">
              <i className="fas fa-check" />
            </div>
            
            <p className="text-sm text-[#083c16] leading-relaxed max-w-sm mx-auto font-medium">
              Your details have been submitted successfully. Our franchise development manager will contact you shortly. Kindly call us directly for immediate enquiries.
            </p>
            
            <div className="bg-white border-2 border-[#106829]/30 p-4 rounded-[1.5rem_0.75rem_1.5rem_0.75rem] text-xs space-y-2 text-center shadow-sm">
              <p className="font-semibold text-[#106829] uppercase tracking-wider">Direct Enquiry Hotline:</p>
              <a href="tel:+918078155047" className="text-base font-black text-[#083c16] hover:text-[#106829] transition-colors inline-flex items-center gap-2">
                <i className="fas fa-phone-alt text-[#106829]" />
                <span>+91 80781 55047</span>
              </a>
            </div>

            <button
              onClick={handleCloseModal}
              className="w-full py-3.5 bg-[#106829] hover:bg-[#1b8a3e] text-[#FFF200] font-display font-black text-base uppercase tracking-wider rounded-[1.5rem_0.5rem_1.5rem_0.5rem] transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg flex items-center justify-center gap-2"
            >
              <span>Done</span>
              <i className="fas fa-check-circle" />
            </button>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-3">
            
            <Input 
              label="Full Name" 
              id="name"
              type="text" 
              required 
              icon="fas fa-user"
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={handleInputChange}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <Input 
                label="Mobile Phone" 
                id="mobile"
                type="tel" 
                required 
                icon="fas fa-phone-alt"
                placeholder="e.g. +91 98765 43210"
                value={formData.mobile}
                onChange={handleInputChange}
              />
              <Input 
                label="Email Address" 
                id="email"
                type="email" 
                required 
                icon="fas fa-envelope"
                placeholder="e.g. name@example.com"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <Input 
              label="Interested Cities / Location" 
              id="city"
              type="text" 
              required 
              icon="fas fa-map-marker-alt"
              placeholder="e.g. Calicut, Dubai, Palakkad"
              value={formData.city}
              onChange={handleInputChange}
            />

            <Input 
              label="Additional Message (Optional)" 
              id="message"
              textarea={true}
              rows={3}
              icon="fas fa-comment-dots"
              placeholder="Tell us about your background or retail space if any..."
              value={formData.message}
              onChange={handleInputChange}
            />

            {/* Unshaped Submit Button */}
            <div className="pt-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#106829] hover:bg-[#1b8a3e] text-[#FFF200] font-display font-black text-base uppercase tracking-wider rounded-[2rem_0.75rem_2.25rem_0.85rem] border-2 border-[#106829] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-[0_10px_25px_rgba(16,104,41,0.25)] hover:shadow-[0_15px_35px_rgba(16,104,41,0.4)] disabled:opacity-50 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center space-x-2">
                    <i className="fas fa-spinner animate-spin" />
                    <span>Submitting Request...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center space-x-2">
                    <span>Send Message</span>
                    <i className="fas fa-paper-plane text-xs" />
                  </span>
                )}
              </button>
            </div>

          </form>
        )}
      </Modal>
    </div>
  );
};

export default App;
