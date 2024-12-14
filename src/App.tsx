import React from 'react';
import OnboardingForm from './components/OnboardingForm';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Header />
        <OnboardingForm />
      </div>
    </div>
  );
}

export default App;