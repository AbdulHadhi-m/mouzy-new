import React, { useEffect, useRef } from 'react';
import logoImg from '../assets/logo.png';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Esc key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      modalRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop overlay with blur */}
      <div 
        className="fixed inset-0 bg-[#04170a]/85 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Unshaped Random Organic Modal Container in #FEFAD3 */}
      <div 
        ref={modalRef}
        tabIndex={-1}
        className="relative w-full max-w-lg my-auto bg-[#FEFAD3] text-[#083c16] p-6 sm:p-8 border-4 border-[#106829] shadow-[0_25px_80px_rgba(16,104,41,0.35)] focus:outline-none animate-slide-up transition-all duration-300 rounded-[3rem_1.25rem_4rem_1.5rem] sm:rounded-[4.5rem_1.5rem_5.5rem_2rem] overflow-hidden"
      >
        {/* Decorative background subtle ambient glows */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#106829]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-[#FFF200]/40 rounded-full blur-2xl pointer-events-none" />

        {/* Unshaped Styled Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-[#106829] hover:bg-[#FFF200] hover:text-[#106829] transition-all duration-300 w-9 h-9 rounded-[14px_6px_14px_6px] flex items-center justify-center text-xl font-bold border border-[#106829]/30 z-30 shadow-md transform hover:scale-105 active:scale-95"
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Title Header with Logo & Typography */}
        <div className="text-center pt-2 mb-6 relative z-10">
          <img src={logoImg} alt="Mouzy" className="w-14 sm:w-16 h-auto mx-auto mb-2 drop-shadow-sm" />
          <h2 id="modal-title" className="text-xl sm:text-2xl font-black font-display uppercase tracking-wide text-[#106829] drop-shadow-sm leading-tight px-2">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#106829] to-transparent mx-auto mt-2 rounded-full" />
        </div>

        {/* Inner Content */}
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
};
