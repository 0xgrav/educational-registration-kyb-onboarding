import React from 'react';
import { Check } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  onStepClick?: (step: number) => void;
}

const steps = [
  { title: 'Basic', description: 'Details' },
  { title: 'Contact', description: 'Info' },
  { title: 'Address', description: 'Location' },
  { title: 'Legal', description: 'Docs' },
];

export default function StepIndicator({ currentStep, totalSteps, onStepClick }: StepIndicatorProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between max-w-2xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <button
              onClick={() => onStepClick?.(index)}
              disabled={index > currentStep}
              className={`flex flex-col items-center ${index <= currentStep ? 'cursor-pointer' : 'cursor-not-allowed'}`}
            >
              <div className="flex flex-col items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300
                    ${
                      index < currentStep
                        ? 'bg-gradient-to-r from-indigo-600 to-blue-600 shadow-lg shadow-indigo-500/30'
                        : index === currentStep
                        ? 'border-2 border-indigo-600 text-indigo-600'
                        : 'border-2 border-gray-300 text-gray-300'
                    }`}
                >
                  {index < currentStep ? (
                    <Check className="w-6 h-6 text-white" />
                  ) : (
                    <span className="text-sm font-medium">{index + 1}</span>
                  )}
                </div>
                <div className="text-center mt-1">
                  <p className={`text-xs font-medium ${index <= currentStep ? 'text-gray-900' : 'text-gray-400'}`}>
                    {step.title}
                  </p>
                  <p className={`text-[10px] ${index <= currentStep ? 'text-gray-500' : 'text-gray-300'}`}>
                    {step.description}
                  </p>
                </div>
              </div>
            </button>
            {index < totalSteps - 1 && (
              <div
                className={`w-12 h-0.5 mx-1 transition-all duration-300 ${
                  index < currentStep ? 'bg-gradient-to-r from-indigo-600 to-blue-600' : 'bg-gray-300'
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}