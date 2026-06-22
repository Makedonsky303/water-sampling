'use client';
import React, { useState } from 'react';
import Step1_PackBag from './Step1_PackBag';
import Step2_SealBag from './Step2_SealBag';
import Step3_Transport from './Step3_Transport';
import Step4_LabReception from './Step4_LabReception';

export default function Stage4Simulator({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [results, setResults] = useState({
    step1: null,
    step2: null,
    step3: null,
    step4: null,
  });

  const handleStepComplete = (stepNumber, data) => {
    setResults((prev) => ({ ...prev, [`step${stepNumber}`]: data }));

    if (stepNumber < 4) {
      setCurrentStep(stepNumber + 1);
    } else {
      // Все шаги завершены, показываем финальный отчёт
      setCurrentStep(5);
    }
  };

  const calculateTotalScore = () => {
    let totalPenalty = 0;

    if (results.step1) totalPenalty += results.step1.packingScorePenalty || 0;
    if (results.step2) totalPenalty += results.step2.sealingScorePenalty || 0;
    if (results.step3) totalPenalty += results.step3.transportScorePenalty || 0;
    if (results.step4) totalPenalty += results.step4.receptionScorePenalty || 0;

    return Math.max(0, 100 - totalPenalty);
  };

  const getAllErrors = () => {
    const allErrors = [];

    if (results.step1?.packingErrors) {
      allErrors.push({ step: 'Укладка', errors: results.step1.packingErrors });
    }
    if (results.step2?.sealingErrors) {
      allErrors.push({ step: 'Герметизация', errors: results.step2.sealingErrors });
    }
    if (results.step3?.transportErrors) {
      allErrors.push({ step: 'Транспортировка', errors: results.step3.transportErrors });
    }
    if (results.step4?.receptionErrors) {
      allErrors.push({ step: 'Приёмка', errors: results.step4.receptionErrors });
    }

    return allErrors;
  };

  const handleRestart = () => {
    setCurrentStep(1);
    setResults({
      step1: null,
      step2: null,
      step3: null,
      step4: null,
    });
  };

  const steps = [
    { num: 1, label: 'Укладка', completed: !!results.step1 },
    { num: 2, label: 'Герметизация', completed: !!results.step2 },
    { num: 3, label: 'Транспортировка', completed: !!results.step3 },
    { num: 4, label: 'Приёмка', completed: !!results.step4 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Этап 4: Транспортировка и сдача в лабораторию
          </h1>
          <p className="text-slate-600 text-sm">
            ГОСТ Р 59024‑2020 · Отбор проб воды для микробиологического анализа
          </p>
        </div>

        {/* Progress Bar */}
        {currentStep < 5 && (
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, idx) => (
                <React.Fragment key={step.num}>
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                        step.num === currentStep
                          ? 'bg-blue-600 text-white scale-110 shadow-lg'
                          : step.completed
                          ? 'bg-emerald-500 text-white'
                          : 'bg-slate-200 text-slate-500'
                      }`}
                    >
                      {step.completed ? '✓' : step.num}
                    </div>
                    <span className="text-xs font-semibold text-slate-700 mt-2">
                      {step.label}
                    </span>
                  </div>
                  {idx < steps.length - 1 && (
                    <div
                      className={`flex-1 h-1 mx-2 rounded transition-all ${
                        step.completed ? 'bg-emerald-500' : 'bg-slate-200'
                      }`}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* Step Content */}
        <div className="mb-6">
          {currentStep === 1 && (
            <Step1_PackBag onComplete={(data) => handleStepComplete(1, data)} />
          )}
          {currentStep === 2 && (
            <Step2_SealBag onComplete={(data) => handleStepComplete(2, data)} />
          )}
          {currentStep === 3 && (
            <Step3_Transport onComplete={(data) => handleStepComplete(3, data)} />
          )}
          {currentStep === 4 && (
            <Step4_LabReception
              transportData={results.step3?.transportData}
              onComplete={(data) => handleStepComplete(4, data)}
            />
          )}

          {/* Final Report */}
          {currentStep === 5 && (
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 px-8 py-6">
                <h2 className="text-white font-bold text-2xl mb-2">📊 Итоговый отчёт</h2>
                <p className="text-slate-300 text-sm">
                  Результаты прохождения этапа 4
                </p>
              </div>

              <div className="p-8 space-y-6">
                {/* Score */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-2">
                    {calculateTotalScore()}
                  </div>
                  <div className="text-sm text-slate-600">баллов из 100</div>
                  <div className="mt-4">
                    {calculateTotalScore() >= 90 && (
                      <span className="inline-block px-4 py-2 bg-emerald-500 text-white font-bold rounded-full text-sm">
                        Отлично ✓
                      </span>
                    )}
                    {calculateTotalScore() >= 70 && calculateTotalScore() < 90 && (
                      <span className="inline-block px-4 py-2 bg-blue-500 text-white font-bold rounded-full text-sm">
                        Хорошо
                      </span>
                    )}
                    {calculateTotalScore() >= 50 && calculateTotalScore() < 70 && (
                      <span className="inline-block px-4 py-2 bg-amber-500 text-white font-bold rounded-full text-sm">
                        Удовлетворительно
                      </span>
                    )}
                    {calculateTotalScore() < 50 && (
                      <span className="inline-block px-4 py-2 bg-red-500 text-white font-bold rounded-full text-sm">
                        Требуется повторение
                      </span>
                    )}
                  </div>
                </div>

                {/* Errors by Step */}
                {getAllErrors().length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-4">
                      Обнаруженные нарушения:
                    </h3>
                    <div className="space-y-4">
                      {getAllErrors().map((stepErrors, idx) => (
                        <div
                          key={idx}
                          className="bg-red-50 border border-red-200 rounded-xl p-4"
                        >
                          <div className="font-bold text-red-800 mb-2">
                            {stepErrors.step}
                          </div>
                          <ul className="space-y-1">
                            {stepErrors.errors.map((error, i) => (
                              <li key={i} className="text-sm text-red-700 leading-relaxed">
                                • {error}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {getAllErrors().length === 0 && (
                  <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6 text-center">
                    <div className="text-4xl mb-2">🎉</div>
                    <div className="text-lg font-bold text-emerald-800">
                      Все этапы выполнены без нарушений!
                    </div>
                    <div className="text-sm text-emerald-700 mt-2">
                      Вы успешно завершили транспортировку и приёмку образцов.
                    </div>
                  </div>
                )}

                {/* Step Scores */}
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-4">
                    Детализация по шагам:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { label: 'Укладка', penalty: results.step1?.packingScorePenalty || 0 },
                      { label: 'Герметизация', penalty: results.step2?.sealingScorePenalty || 0 },
                      { label: 'Транспортировка', penalty: results.step3?.transportScorePenalty || 0 },
                      { label: 'Приёмка', penalty: results.step4?.receptionScorePenalty || 0 },
                    ].map((step, idx) => {
                      const score = Math.max(0, 100 - step.penalty);
                      const bgColor = score >= 90 ? 'bg-emerald-50' : score >= 70 ? 'bg-blue-50' : score >= 50 ? 'bg-amber-50' : 'bg-red-50';
                      const borderColor = score >= 90 ? 'border-emerald-300' : score >= 70 ? 'border-blue-300' : score >= 50 ? 'border-amber-300' : 'border-red-300';
                      const textColor = score >= 90 ? 'text-emerald-600' : score >= 70 ? 'text-blue-600' : score >= 50 ? 'text-amber-600' : 'text-red-600';

                      return (
                        <div
                          key={idx}
                          className={`${bgColor} border-2 ${borderColor} rounded-xl p-4 flex justify-between items-center`}
                        >
                          <span className="text-sm font-semibold text-slate-700">
                            {step.label}
                          </span>
                          <span className={`text-lg font-bold ${textColor}`}>
                            {score}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Normative References */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="text-sm font-bold text-blue-900 mb-3">
                    📚 Нормативные документы:
                  </h3>
                  <ul className="space-y-2 text-xs text-blue-800">
                    <li>• ГОСТ Р 59024‑2020 — Отбор проб питьевой воды</li>
                    <li>• СП 1.3.3118-13 — Безопасность работы с микроорганизмами</li>
                    <li>
                      • МУК 4.2.1018-01 — Организация и проведение микробиологического мониторинга
                    </li>
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <button
                    onClick={handleRestart}
                    className="flex-1 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 rounded-2xl shadow-lg transition-all transform hover:-translate-y-0.5"
                  >
                    🔄 Пройти заново
                  </button>
                  {onComplete && (
                    <button
                      onClick={() => onComplete(results)}
                      className="flex-1 bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-4 rounded-2xl shadow-lg transition-all transform hover:-translate-y-0.5"
                    >
                      Завершить этап 4 →
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
