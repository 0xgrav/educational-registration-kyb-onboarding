import React, { useState } from 'react';
import { FormData } from '../types';
import StepIndicator from './StepIndicator';
import BasicInformation from './steps/BasicInformation';
import ContactDetails from './steps/ContactDetails';
import AddressInformation from './steps/AddressInformation';
import LegalInformation from './steps/LegalInformation';
import Success from './steps/Success';
import Button from './ui/Button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const INITIAL_DATA: FormData = {
  institutionName: '',
  institutionType: 'university',
  yearEstablished: new Date().getFullYear(),
  email: '',
  phone: '',
  website: '',
  street: '',
  city: '',
  state: '',
  country: '',
  postalCode: '',
  registrationNumber: '',
  taxId: '',
  accreditationDetails: '',
};

export default function OnboardingForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setFormData(prev => ({ ...prev, ...fields }));
  }

  const steps = [
    <BasicInformation key="basic" {...{ data: formData, updateFields }} />,
    <ContactDetails key="contact" {...{ data: formData, updateFields }} />,
    <AddressInformation key="address" {...{ data: formData, updateFields }} />,
    <LegalInformation key="legal" {...{ data: formData, updateFields }} />,
    <Success key="success" data={formData} />,
  ];

  function next() {
    setCurrentStep(c => Math.min(c + 1, steps.length - 1));
  }

  function back() {
    setCurrentStep(c => Math.max(c - 1, 0));
  }

  function goToStep(step: number) {
    if (step <= currentStep) {
      setCurrentStep(step);
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (currentStep === steps.length - 1) {
      console.log('Form submitted:', formData);
      return;
    }
    next();
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-indigo-50 p-6 sm:p-8">
        <StepIndicator 
          currentStep={currentStep} 
          totalSteps={steps.length - 1} 
          onStepClick={goToStep}
        />
        
        <form onSubmit={onSubmit} className="space-y-8">
          <div className="transition-all duration-300 ease-in-out">
            {steps[currentStep]}
          </div>
          
          <div className="flex justify-between pt-6">
            {currentStep !== 0 && (
              <Button
                type="button"
                variant="secondary"
                onClick={back}
                icon={ArrowLeft}
                iconPosition="left"
              >
                Back
              </Button>
            )}
            
            {currentStep !== steps.length - 1 && (
              <Button
                type="submit"
                className={`${currentStep === 0 ? 'w-full' : 'ml-auto'}`}
                icon={ArrowRight}
              >
                {currentStep === steps.length - 2 ? 'Complete Registration' : 'Next Step'}
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}