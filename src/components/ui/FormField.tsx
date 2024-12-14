import React, { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from 'react';

interface BaseFieldProps {
  label: string;
  error?: string;
}

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement>, BaseFieldProps {}
interface TextAreaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, BaseFieldProps {}
interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement>, BaseFieldProps {
  options: { value: string; label: string }[];
}

const baseFieldStyles = `
  block w-full px-4 py-3.5 rounded-xl text-gray-900
  border-2 bg-white/50 backdrop-blur-sm
  transition-all duration-200
  placeholder:text-gray-400
  focus:outline-none focus:ring-2 focus:ring-offset-1
`;

const getFieldStyles = (error?: string) => `
  ${baseFieldStyles}
  ${error 
    ? 'border-red-200 focus:border-red-500 focus:ring-red-500/20' 
    : 'border-indigo-100/50 focus:border-indigo-500 focus:ring-indigo-500/20'}
`;

export function InputField({ label, error, className = '', ...props }: InputFieldProps) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        {...props}
        className={`${getFieldStyles(error)} ${className}`}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}

export function TextAreaField({ label, error, className = '', ...props }: TextAreaFieldProps) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        {...props}
        className={`${getFieldStyles(error)} ${className}`}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}

export function SelectField({ label, options, error, className = '', ...props }: SelectFieldProps) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        {...props}
        className={`${getFieldStyles(error)} ${className}`}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}