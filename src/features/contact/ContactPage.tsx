import React, { useState } from 'react';
import sitingMonkey from '../../assets/sitingMonkey.png';

interface ContactPageProps {
  onNavigateHome: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigateHome }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxeb4MpxG7TiSC2o9XjKTR4I966DnrkyjuWJOr74Ap-x56ZyIug5PkJe3AW9gr6uEPh_w/exec';

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const payload = new URLSearchParams();
      payload.append('firstName', formData.firstName);
      payload.append('lastName', formData.lastName);
      payload.append('email', formData.email);
      payload.append('mobile', formData.mobile);
      payload.append('message', formData.message);

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: payload.toString()
      });

      // Clear the form fields after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        message: ''
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
      setErrorMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FEFAD3] text-brand-green-dark">
      {/* 1. Page Header Hero Banner */}
      <section className="bg-gradient-to-r from-[#1c7832] via-[#2F9745] to-[#1e7531] text-white pt-36 pb-20 sm:pb-28 text-center relative overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FFF200]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-white/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-wider drop-shadow-md text-white">
            Contact Us
          </h1>

          {/* Small clean text breadcrumbs without border/box */}
          <div className="flex items-center justify-center space-x-2 text-xs font-bold text-white/90 mt-3">
            <button 
              onClick={onNavigateHome}
              className="hover:text-brand-yellow-warm transition-colors cursor-pointer outline-none focus:outline-none flex items-center gap-1"
            >
              <i className="fas fa-home text-[10px] text-brand-yellow-warm" />
              <span>Home</span>
            </button>
            <span className="text-white/50">/</span>
            <span className="text-brand-yellow-warm">Contact Us</span>
          </div>
        </div>

        {/* Custom organic wavy bottom transition SVG */}
        <div className="absolute -bottom-2 left-0 right-0 overflow-hidden leading-none pointer-events-none z-20">
          <svg className="relative block w-[102%] -left-[1%] h-12 sm:h-20 translate-y-1 scale-y-110" viewBox="0 0 1440 200" preserveAspectRatio="none">
            <path d="M0,45 C120,70 240,25 360,35 C520,45 640,85 780,80 C920,75 1040,25 1180,30 C1260,35 1360,55 1440,35 L1450,220 L-20,220 Z" fill="#FEFAD3" stroke="#FEFAD3" strokeWidth="2"></path>
          </svg>
        </div>
      </section>

      {/* 2. We'd ❤️ to Hear From You Section */}
      <section className="py-12 sm:py-20 bg-[#FEFAD3] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-[#083c16] leading-tight tracking-wide">
                Let's Connect & <br />
                Share The Joy
              </h2>

              <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed">
                At Mouzy, your satisfaction means everything to us. Whether you want to know more about our products, share your experience, or explore franchise opportunities — we're here to help.
              </p>

              <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed">
                Drop us a message, and our friendly team will get back to you as soon as possible. Let's stay connected and continue spreading the joy of Avil milk across the world.
              </p>
            </div>

            {/* Right Mascot Visual Column */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="absolute inset-0 bg-[#FFF200]/40 rounded-full blur-3xl transform scale-90 pointer-events-none" />
              
              <div className="relative w-64 sm:w-80 lg:w-96 animate-float z-10">
                <img 
                  src={sitingMonkey} 
                  alt="Mouzy Mascot" 
                  className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Get in Touch & Contact Form Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-[#38aa4e] via-[#2F9745] to-[#1e7531] text-white relative overflow-hidden">
        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#FFF200_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />
        
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFF200]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-white/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <div>
                <h3 className="text-3xl sm:text-4xl font-black font-display text-[#FFF200] tracking-wide mb-3 drop-shadow-sm">
                  Get in Touch
                </h3>
                <p className="text-sm sm:text-base text-white/90 font-medium leading-relaxed">
                  We're here to help you with anything related to Mouzy. Reach out today!
                </p>
              </div>

              {/* Customer Support Unshaped Cards */}
              <div className="space-y-4">
                <h4 className="text-xs font-extrabold text-[#FFF200] uppercase tracking-widest font-display">
                  CUSTOMER SUPPORT:
                </h4>

                <div className="space-y-3.5">
                  <a 
                    href="tel:+919539577700" 
                    className="flex items-center space-x-4 p-4 rounded-[1.25rem_0.5rem_1.25rem_0.5rem] bg-[#1c692d]/90 hover:bg-[#165624] border-2 border-white/20 hover:border-[#FFF200] transition-all duration-300 group shadow-md"
                  >
                    <div className="w-11 h-11 rounded-[14px_6px_14px_6px] bg-[#FFF200] text-[#082914] flex items-center justify-center font-black transition-transform group-hover:scale-110 shadow-sm shrink-0">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div>
                      <p className="text-xs text-white/80 font-medium">Franchisee Enquiry</p>
                      <p className="text-base font-black text-white group-hover:text-[#FFF200] transition-colors">+91 95395 77700</p>
                    </div>
                  </a>

                  <a 
                    href="tel:+918078155047" 
                    className="flex items-center space-x-4 p-4 rounded-[1.25rem_0.5rem_1.25rem_0.5rem] bg-[#1c692d]/90 hover:bg-[#165624] border-2 border-white/20 hover:border-[#FFF200] transition-all duration-300 group shadow-md"
                  >
                    <div className="w-11 h-11 rounded-[14px_6px_14px_6px] bg-[#FFF200] text-[#082914] flex items-center justify-center font-black transition-transform group-hover:scale-110 shadow-sm shrink-0">
                      <i className="fas fa-headset" />
                    </div>
                    <div>
                      <p className="text-xs text-white/80 font-medium">Office Support</p>
                      <p className="text-base font-black text-white group-hover:text-[#FFF200] transition-colors">+91 80781 55047</p>
                    </div>
                  </a>

                  <a 
                    href="mailto:info@mouzy.in" 
                    className="flex items-center space-x-4 p-4 rounded-[1.25rem_0.5rem_1.25rem_0.5rem] bg-[#1c692d]/90 hover:bg-[#165624] border-2 border-white/20 hover:border-[#FFF200] transition-all duration-300 group shadow-md"
                  >
                    <div className="w-11 h-11 rounded-[14px_6px_14px_6px] bg-[#FFF200] text-[#082914] flex items-center justify-center font-black transition-transform group-hover:scale-110 shadow-sm shrink-0">
                      <i className="fas fa-envelope" />
                    </div>
                    <div>
                      <p className="text-xs text-white/80 font-medium">Official Email</p>
                      <p className="text-base font-black text-white group-hover:text-[#FFF200] transition-colors">info@mouzy.in</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Head Office Unshaped Card */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-extrabold text-[#FFF200] uppercase tracking-widest font-display">
                  HEAD OFFICE:
                </h4>
                <div className="p-4 rounded-[1.25rem_0.5rem_1.25rem_0.5rem] bg-[#1c692d]/90 border-2 border-white/20 flex items-start space-x-3.5 shadow-md">
                  <div className="w-11 h-11 rounded-[14px_6px_14px_6px] bg-[#FFF200] text-[#082914] flex items-center justify-center font-black shrink-0 mt-0.5 shadow-sm">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <p className="text-sm text-white leading-relaxed font-semibold">
                    Al Rayan Building, Perinthalmanna, Malappuram, Kerala – 679322
                  </p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="pt-2">
                <h4 className="text-xs font-extrabold text-[#FFF200] uppercase tracking-widest font-display mb-3">
                  FOLLOW US:
                </h4>
                <div className="flex items-center space-x-3">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-12 h-12 rounded-[16px_6px_16px_6px] bg-[#1c692d] hover:bg-[#FFF200] hover:text-[#082914] border-2 border-white/20 flex items-center justify-center transition-all duration-300 text-xl shadow-sm"
                    aria-label="Facebook"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-12 h-12 rounded-[16px_6px_16px_6px] bg-[#1c692d] hover:bg-[#FFF200] hover:text-[#082914] border-2 border-white/20 flex items-center justify-center transition-all duration-300 text-xl shadow-sm"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Unshaped Organic Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-[#FEFAD3] text-[#083c16] rounded-[3rem_1.25rem_3.5rem_1.5rem] sm:rounded-[4rem_1.5rem_4.5rem_2rem] p-6 sm:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.5)] border-4 border-[#106829] relative overflow-hidden">
                
                {isSubmitted ? (
                  <div className="py-12 text-center space-y-6">
                    <div className="w-16 h-16 bg-[#106829] border-2 border-[#106829] rounded-[20px_8px_20px_8px] flex items-center justify-center mx-auto text-[#FFF200] text-3xl animate-bounce shadow-lg">
                      <i className="fas fa-check" />
                    </div>
                    <h4 className="text-3xl font-black font-display text-[#106829] uppercase">Thank You!</h4>
                    <p className="text-base text-gray-700 max-w-md mx-auto leading-relaxed font-semibold">
                      Your message has been submitted successfully. Our customer support team will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-8 py-4 bg-[#106829] text-[#FFF200] text-sm font-black font-display rounded-[1.5rem_0.5rem_1.5rem_0.5rem] hover:bg-[#1b8a3e] transition-all shadow-md active:scale-95 uppercase tracking-wider"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 text-left">
                    
                    {/* Header inside Form Card */}
                    <div className="border-b border-[#106829]/20 pb-4 mb-2">
                      <h4 className="text-xl sm:text-2xl font-black font-display text-[#106829] uppercase tracking-wide">
                        Send Us A Message
                      </h4>
                      <p className="text-xs font-semibold text-gray-600">Fill in the details below and we'll reply promptly.</p>
                    </div>

                    {errorMessage && (
                      <div className="p-3 bg-red-100 border border-red-400 text-red-700 text-xs font-bold rounded-xl flex items-center gap-2">
                        <i className="fas fa-exclamation-circle" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="block text-xs font-extrabold text-[#106829] mb-1.5 uppercase tracking-wider font-display">
                          First Name
                        </label>
                        <div className="relative">
                          <input 
                            type="text" 
                            name="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3.5 rounded-[1.25rem_0.5rem_1.25rem_0.5rem] bg-white border-2 border-[#106829]/30 focus:border-[#106829] focus:ring-2 focus:ring-[#106829]/20 outline-none text-sm font-bold text-[#083c16] placeholder-gray-400 transition-all shadow-sm"
                            placeholder="First Name"
                          />
                          <i className="fas fa-user absolute left-4 top-1/2 -translate-y-1/2 text-[#106829] text-xs" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-extrabold text-[#106829] mb-1.5 uppercase tracking-wider font-display">
                          Last Name
                        </label>
                        <div className="relative">
                          <input 
                            type="text" 
                            name="lastName"
                            required
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3.5 rounded-[1.25rem_0.5rem_1.25rem_0.5rem] bg-white border-2 border-[#106829]/30 focus:border-[#106829] focus:ring-2 focus:ring-[#106829]/20 outline-none text-sm font-bold text-[#083c16] placeholder-gray-400 transition-all shadow-sm"
                            placeholder="Last Name"
                          />
                          <i className="fas fa-user absolute left-4 top-1/2 -translate-y-1/2 text-[#106829] text-xs" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold text-[#106829] mb-1.5 uppercase tracking-wider font-display">
                        Email Address
                      </label>
                      <div className="relative">
                        <input 
                          type="email" 
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3.5 rounded-[1.25rem_0.5rem_1.25rem_0.5rem] bg-white border-2 border-[#106829]/30 focus:border-[#106829] focus:ring-2 focus:ring-[#106829]/20 outline-none text-sm font-bold text-[#083c16] placeholder-gray-400 transition-all shadow-sm"
                          placeholder="Email Address"
                        />
                        <i className="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-[#106829] text-xs" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold text-[#106829] mb-1.5 uppercase tracking-wider font-display">
                        Mobile Number
                      </label>
                      <div className="relative">
                        <input 
                          type="tel" 
                          name="mobile"
                          required
                          value={formData.mobile}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3.5 rounded-[1.25rem_0.5rem_1.25rem_0.5rem] bg-white border-2 border-[#106829]/30 focus:border-[#106829] focus:ring-2 focus:ring-[#106829]/20 outline-none text-sm font-bold text-[#083c16] placeholder-gray-400 transition-all shadow-sm"
                          placeholder="Mobile Number"
                        />
                        <i className="fas fa-phone-alt absolute left-4 top-1/2 -translate-y-1/2 text-[#106829] text-xs" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold text-[#106829] mb-1.5 uppercase tracking-wider font-display">
                        How can we help?
                      </label>
                      <div className="relative">
                        <textarea 
                          name="message"
                          rows={4}
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3.5 rounded-[1.5rem_0.75rem_1.5rem_0.75rem] bg-white border-2 border-[#106829]/30 focus:border-[#106829] focus:ring-2 focus:ring-[#106829]/20 outline-none text-sm font-bold text-[#083c16] placeholder-gray-400 transition-all resize-none shadow-sm"
                          placeholder="How can we help?"
                        />
                        <i className="fas fa-comment-dots absolute left-4 top-4 text-[#106829] text-xs" />
                      </div>
                    </div>

                    {/* Unshaped Action Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-[#106829] hover:bg-[#1b8a3e] text-[#FFF200] font-display font-black text-base uppercase tracking-wider rounded-[2rem_0.75rem_2.25rem_0.85rem] border-2 border-[#106829] transition-all duration-300 shadow-[0_10px_25px_rgba(16,104,41,0.3)] hover:shadow-[0_15px_35px_rgba(16,104,41,0.5)] disabled:opacity-50 flex items-center justify-center space-x-2 transform hover:-translate-y-0.5 active:translate-y-0"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center space-x-2">
                            <i className="fas fa-spinner animate-spin" />
                            <span>Submitting...</span>
                          </span>
                        ) : (
                          <span className="flex items-center justify-center space-x-2">
                            <span>Submit Message</span>
                            <i className="fas fa-paper-plane text-xs text-[#FFF200]" />
                          </span>
                        )}
                      </button>
                    </div>

                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
