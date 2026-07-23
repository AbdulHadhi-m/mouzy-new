import React, { useState } from 'react';
import { Preloader } from './components/Navigation/Preloader';
import { Navbar } from './components/Navigation/Navbar';
import { HeroSlider } from './features/hero/HeroSlider';
import { AboutSection } from './features/about/AboutSection';
import { ProductsBanner } from './features/products/ProductsBanner';
import { OutletLocator } from './features/outlets/OutletLocator';
import { FranchiseBanner } from './features/franchise/FranchiseBanner';
import { Footer } from './components/Navigation/Footer';
import { Modal } from './components/Modal';
import { Input } from './components/Input';
import { Button } from './components/Button';
import type { FranchiseSubmission } from './types';

const App: React.FC = () => {
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
      <Navbar onFranchiseClick={() => setIsModalOpen(true)} />

      {/* Main Sections Composition */}
      <main className="flex-grow">
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
      </main>

      {/* 9. Footing Column layout */}
      <Footer />

      {/* 10. Franchise Partnership Form Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        title={isSubmitted ? "Submission Successful" : "Let's have a Partnership"}
      >
        {isSubmitted ? (
          <div className="text-center py-6 space-y-6">
            {/* Visual Success Mark */}
            <div className="w-16 h-16 bg-brand-yellow/10 border-2 border-brand-yellow-warm rounded-full flex items-center justify-center mx-auto text-brand-yellow-warm text-2xl animate-float">
              <i className="fas fa-check" />
            </div>
            
            <p className="text-sm text-brand-cream-dark/85 leading-relaxed max-w-sm mx-auto">
              Your details have been submitted successfully. Our franchise development manager will contact you shortly. Kindly call us directly for immediate enquiries.
            </p>
            
            <div className="bg-brand-green-deep/30 border border-white/5 p-4 rounded-xl text-xs space-y-2">
              <p className="font-semibold text-white">Direct Enquiry Hotline:</p>
              <a href="tel:+918078155047" className="text-sm font-bold text-brand-yellow-warm hover:underline">
                +91 80781 55047
              </a>
            </div>

            <Button variant="accent" size="md" onClick={handleCloseModal} className="w-full">
              OK
            </Button>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-4">
            
            <Input 
              label="Full Name" 
              id="name"
              type="text" 
              required 
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={handleInputChange}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input 
                label="Mobile Phone" 
                id="mobile"
                type="tel" 
                required 
                placeholder="e.g. +91 98765 43210"
                value={formData.mobile}
                onChange={handleInputChange}
              />
              <Input 
                label="Email Address" 
                id="email"
                type="email" 
                required 
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
              placeholder="e.g. Calicut, Dubai, Palakkad"
              value={formData.city}
              onChange={handleInputChange}
            />

            <Input 
              label="Additional Message (Optional)" 
              id="message"
              textarea={true}
              placeholder="Tell us about your background or retail space if any..."
              value={formData.message}
              onChange={handleInputChange}
            />

            {/* Submit Action */}
            <div className="pt-4">
              <Button 
                type="submit" 
                variant="accent" 
                size="lg" 
                fullWidth={true} 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center space-x-2">
                    <i className="fas fa-spinner animate-spin" />
                    <span>Submitting Request...</span>
                  </span>
                ) : (
                  <span>Send Message</span>
                )}
              </Button>
            </div>

          </form>
        )}
      </Modal>
    </div>
  );
};

export default App;
