import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  textarea?: boolean;
  rows?: number;
}

export const Input: React.FC<InputProps> = ({
  label,
  id,
  textarea = false,
  className = '',
  rows = 4,
  ...props
}) => {
  const inputStyles = 'w-full px-4 py-3 bg-brand-green-deep/60 border border-white/10 rounded-xl text-white placeholder-white/40 focus:border-brand-yellow-warm/60 focus:bg-brand-green-deep/80 transition-all duration-300 outline-none text-sm';

  return (
    <div className="mb-4 text-left">
      <label htmlFor={id} className="block text-xs font-semibold text-brand-cream-dark mb-1 font-display tracking-wider uppercase">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          className={`${inputStyles} resize-none ${className}`}
          rows={rows}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={id}
          className={`${inputStyles} ${className}`}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </div>
  );
};
