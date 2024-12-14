import React, { useEffect } from 'react';
import { CheckCircle, Sparkles } from 'lucide-react';
import { FormData } from '../../types';
import confetti from 'canvas-confetti';

export default function Success({ data }: { data: FormData }) {
  useEffect(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const confettiInterval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(confettiInterval);
        return;
      }

      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#4f46e5', '#2563eb', '#6366f1']
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#4f46e5', '#2563eb', '#6366f1']
      });
    }, 150);

    return () => clearInterval(confettiInterval);
  }, []);

  return (
    <div className="text-center py-8">
      <div className="flex justify-center mb-4">
        <div className="relative">
          <div className="absolute inset-0 animate-ping bg-indigo-400 rounded-full opacity-25"></div>
          <div className="relative rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 p-4 shadow-lg">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-bounce" />
        </div>
      </div>
      
      <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-4">
        Congratulations!
      </h2>
      
      <p className="text-gray-600 mb-8">
        {data.institutionName} has been successfully registered. We'll review your information
        and contact you at {data.email} with the next steps.
      </p>
      
      <div className="bg-gradient-to-br from-white to-indigo-50/50 rounded-2xl p-8 text-left shadow-xl">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Registration Summary</h3>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-1">
            <dt className="text-sm font-medium text-gray-500">Institution</dt>
            <dd className="text-base text-gray-900 font-medium">{data.institutionName}</dd>
          </div>
          <div className="space-y-1">
            <dt className="text-sm font-medium text-gray-500">Type</dt>
            <dd className="text-base text-gray-900 font-medium capitalize">{data.institutionType}</dd>
          </div>
          <div className="space-y-1">
            <dt className="text-sm font-medium text-gray-500">Contact</dt>
            <dd className="text-base text-gray-900 font-medium">{data.email}</dd>
          </div>
          <div className="space-y-1">
            <dt className="text-sm font-medium text-gray-500">Location</dt>
            <dd className="text-base text-gray-900 font-medium">{data.city}, {data.country}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}