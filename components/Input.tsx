import React from 'react';

interface InputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  placeholder?: string;
  error?: string;
  multiline?: boolean;
  rows?: number;
}

export default function Input({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
  placeholder,
  error,
  multiline = false,
  rows = 4,
}: InputProps) {
  const baseInputStyles = `w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-gold transition-colors
    ${error ? 'border-red-500' : 'border-neutral-stone'}`;

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-primary-charcoal font-semibold mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {multiline ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          rows={rows}
          className={baseInputStyles}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className={baseInputStyles}
        />
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
