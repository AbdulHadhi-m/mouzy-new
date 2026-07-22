import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'text';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-display font-semibold rounded-full transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none focus:outline-none';
  
  const variants = {
    primary: 'bg-brand-green text-white hover:bg-brand-green-light hover:shadow-lg hover:shadow-brand-green/20 border border-brand-green-light/10',
    secondary: 'bg-transparent text-white border border-white/20 hover:bg-white/5 hover:border-white/40',
    accent: 'bg-brand-yellow text-brand-green-dark hover:bg-brand-yellow-light hover:shadow-lg hover:shadow-brand-yellow/20',
    text: 'bg-transparent text-white hover:text-brand-yellow-warm p-0 hover:scale-100 active:scale-100',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base tracking-wide',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
