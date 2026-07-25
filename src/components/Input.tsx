import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  textarea?: boolean;
  rows?: number;
  icon?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  id,
  textarea = false,
  className = '',
  rows = 3,
  icon,
  ...props
}) => {
  const inputStyles = 'w-full px-4 py-3 bg-white border-2 border-[#106829]/30 rounded-[1.25rem_0.5rem_1.5rem_0.75rem] text-[#083c16] placeholder-gray-400 font-medium focus:border-[#106829] focus:ring-2 focus:ring-[#106829]/20 focus:bg-white transition-all duration-300 outline-none text-sm shadow-sm';

  return (
    <div className="mb-4 text-left">
      <label htmlFor={id} className="flex items-center gap-1.5 text-xs font-bold text-[#106829] mb-1.5 font-display tracking-wider uppercase">
        {icon && <i className={`${icon} text-[#106829] text-xs`} />}
        <span>{label}</span>
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
