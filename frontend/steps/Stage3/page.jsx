// app/stage3/page.jsx
'use client';
import React, { useState } from 'react';
import Step1_Marking from './step1';
import Step2_Cooling from './step2';

export default function Stage3({ onComplete }) {
  const [currentStep, setCurrentStep] = useState('3.1'); // '3.1' | '3.2'
  const [step1Passed, setStep1Passed] = useState(false);

  const handleStep1Complete = (result) => {
    if (result.passed) {
      setStep1Passed(true);
      // Optional: Auto-transition after success
      setTimeout(() => {
        setCurrentStep('3.2');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 2000);
    }
  };

  const handleFullReset = () => {
    setCurrentStep('3.1');
    setStep1Passed(false);
  };

  // Navigation Logic
  const goToStep = (step) => {
    if (step === '3.2' && !step1Passed) {
      alert("Сначала необходимо успешно пройти Шаг 3.1 (Маркировка)");
      return;
    }
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen flex flex-col items-center gap-6 p-6 bg-slate-50">
      {/* Header Container */}
      <div className="w-full max-w-4xl bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-lg font-black text-slate-900 uppercase tracking-tight">
            ЭТАП 3. Подготовка и документирование
          </h1>
          <p className="text-slate-500 text-xs font-bold mt-0.5 uppercase">
            {currentStep === '3.1' 
              ? 'Текущий этап: Маркировка и шифрование' 
              : 'Текущий этап: Консервация и охлаждение'}
          </p>
        </div>
        
        {/* INTERACTIVE BREADCRUMBS */}
        <div className="flex flex-wrap gap-2">
        <button
          onClick={() => goToStep('3.1')}
          className={`px-4 py-2 rounded-t-lg font-bold border-b-4 transition-all
            ${
              currentStep === '3.1'
                ? 'bg-white text-purple-700 border-purple-600 shadow-sm'
                : 'bg-slate-200 text-slate-400 border-transparent hover:bg-slate-300'
            }`}
        >
          3.1 Маркировка
        </button>

        <button
          onClick={() => goToStep('3.2')}
          disabled={!step1Passed}
          className={`px-4 py-2 rounded-t-lg font-bold border-b-4 transition-all
            ${
              currentStep === '3.2'
                ? 'bg-white text-purple-700 border-purple-600 shadow-sm'
                : step1Passed
                  ? 'bg-slate-200 text-slate-400 border-transparent hover:bg-slate-300'
                  : 'bg-slate-100 text-slate-300 border-transparent cursor-not-allowed'
            }`}
        >
          {step1Passed ? '3.2 Консервация и охлаждение' : '🔒 3.2 Консервация'}
        </button>
      </div>
      </div>

      {/* Conditional Rendering */}
      <div className="w-full max-w-4xl animate-in fade-in duration-500">
        {currentStep === '3.1' ? (
          <Step1_Marking onComplete={handleStep1Complete} />
        ) : (
          <Step2_Cooling onFinalReset={handleFullReset} onComplete={onComplete}/>
        )}
      </div>
    </main>
  );
}