import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        {...props}
        className={`block w-full px-4 py-3 rounded-xl border-2 bg-white/50 backdrop-blur-sm
          transition-colors duration-200 ease-in-out
          ${error ? 'border-red-300 focus:border-red-500' : 'border-indigo-100 focus:border-indigo-500'}
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500/20 ${className}`}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}