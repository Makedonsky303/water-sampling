// app/stage3/step2.jsx
'use client';
import React, { useState, useCallback } from 'react';
import { POSITION_OPTIONS, FREEZE_OPTIONS, TEMPERATURE_OPTIONS } from './data/markingData';
import CoolingSim from './components/CoolingSim';
import QuizSection from './components/QuizSection';

export default function Step2_Cooling({ onFinalReset, onComplete }) {
  const [positionId, setPositionId] = useState(null);
  const [freezeId, setFreezeId] = useState(null);
  const [tempId, setTempId] = useState(null);
  
  const [isBagValid, setIsBagValid] = useState(false);
  const [isBagClosed, setIsBagClosed] = useState(false);
  const [quizResult, setQuizResult] = useState(null);

  const isReadyToSubmit = positionId && freezeId && tempId && isBagClosed;

  const handleSubmit = () => {
    const score = [
      POSITION_OPTIONS.find(o => o.id === positionId)?.correct,
      FREEZE_OPTIONS.find(o => o.id === freezeId)?.correct,
      TEMPERATURE_OPTIONS.find(o => o.id === tempId)?.correct
    ].filter(Boolean).length;

    setQuizResult({ score, total: 3, passed: score === 3 });
  };

  return (
    <div className="w-full max-w-4xl space-y-6">
      
      {/* 1. Practical Simulator */}
      <CoolingSim 
        onStatusChange={useCallback((val) => setIsBagValid(val), [])} 
        isBagClosed={isBagClosed}
        onBagClose={() => setIsBagClosed(true)}
      />

      {/* 2. Theory Quizzes */}
      <QuizSection 
        title="Интерактив №1. Пространственное положение"
        description="В каком положении необходимо разместить тару?"
        options={POSITION_OPTIONS}
        selectedId={positionId}
        onChange={setPositionId}
        result={quizResult}
      />

      <QuizSection 
        title="Интерактив №2. Защита от замораживания"
        description="Как правильно разместить бак-пробу относительно льда?"
        options={FREEZE_OPTIONS}
        selectedId={freezeId}
        onChange={setFreezeId}
        result={quizResult}
      />

      <QuizSection 
        title="Интерактив №3. Температурный коридор"
        description="Оптимальная температура согласно ГОСТ Р 59024-2020?"
        options={TEMPERATURE_OPTIONS}
        selectedId={tempId}
        onChange={setTempId}
        result={quizResult}
      />

      {/* 3. Action Button */}
      {!quizResult ? (
        <button
          onClick={handleSubmit}
          disabled={!isReadyToSubmit}
          className={`w-full py-4 rounded-xl font-bold text-sm shadow-md transition-all
            ${isReadyToSubmit ? 'bg-slate-950 text-white' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
        >
          {!isBagClosed ? 'Сначала соберите и закройте термосумку' : 'Проверить результаты'}
        </button>
      ) : (
        <div className={`p-6 rounded-2xl border-2 animate-fade-in ${quizResult.passed ? 'bg-emerald-900 border-emerald-500 text-white' : 'bg-red-50 border-red-300'}`}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold uppercase tracking-tight">
              {quizResult.passed ? '🎉 Кейс завершен!' : '❌ Требуется работа над ошибками'}
            </h2>
            <span className="text-xs font-mono">Баллы: {quizResult.score} / {quizResult.total}</span>
          </div>
          
          {quizResult.passed && (
            <p className="text-xs text-emerald-100 leading-relaxed mb-4">
              Поздравляем! Процедура выполнена верно. Температурный режим соблюден, пробы зашифрованы и готовы к транспортировке.
            </p>
          )}

                {quizResult.passed ? (
        <div className="space-y-3">
          <button
            onClick={() => onComplete?.()}
            className="w-full py-3 rounded-xl font-bold text-xs uppercase bg-blue-600 text-white"
          >
            Перейти к отчету
          </button>

          <button
            onClick={onFinalReset}
            className="w-full py-3 rounded-xl font-bold text-xs uppercase bg-white text-emerald-900"
          >
            Пройти заново
          </button>
        </div>
      ) : (
        <button
          onClick={onFinalReset}
          className="w-full py-3 rounded-xl font-bold text-xs uppercase bg-red-600 text-white"
        >
          Попробовать еще раз
        </button>
      )}
        </div>
      )}
    </div>
  );
}