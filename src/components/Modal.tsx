import React, { useEffect, useRef } from 'react';

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
      
      // Focus the modal itself or first interactive element
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop overlay */}
      <div 
        className="absolute inset-0 bg-brand-green-black/85 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Content container */}
      <div 
        ref={modalRef}
        tabIndex={-1}
        className="relative w-full max-w-lg glass-panel rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl focus:outline-none animate-slide-up"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors duration-300 w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/5 text-xl"
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Title */}
        <div className="text-center mb-6">
          <h2 id="modal-title" className="text-2xl font-bold font-display uppercase tracking-wide">
            {title}
          </h2>
        </div>

        {/* Inner Content */}
        <div>{children}</div>
      </div>
    </div>
  );
};
