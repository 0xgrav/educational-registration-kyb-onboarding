import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Header() {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl shadow-sm mb-4">
        <GraduationCap className="w-8 h-8 text-indigo-600" />
      </div>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2">
        Educational Institution Registration
      </h1>
      <p className="text-gray-600 max-w-md mx-auto">
        Join our network of educational institutions and expand your reach globally
      </p>
    </div>
  );
}