// app/stage3/step2.jsx
'use client';
import React, { useState, useCallback } from 'react';
import {
  POSITION_OPTIONS,
  FREEZE_OPTIONS,
  TEMPERATURE_OPTIONS,
} from './data/markingData';
import CoolingSim from './components/CoolingSim';
import QuizSection from './components/QuizSection';

export default function Step2_Cooling({ onFinalReset, onComplete }) {
  const [positionId, setPositionId] = useState(null);
  const [freezeId, setFreezeId] = useState(null);
  const [tempId, setTempId] = useState(null);

  const [isBagValid, setIsBagValid] = useState(false);
  const [isBagClosed, setIsBagClosed] = useState(false);
  const [quizResult, setQuizResult] = useState(null);

  const isReadyToSubmit =
    positionId && freezeId && tempId && isBagClosed;

  const handleSubmit = () => {
    let score = 0;
    const report = [];

    // 1. Практическая часть
    if (isBagValid && isBagClosed) {
      score++;
      report.push({
        q: 'Сборка термосумки',
        success: true,
        text: 'Термосумка собрана правильно. Температурный режим соблюден.',
      });
    } else {
      report.push({
        q: 'Сборка термосумки',
        success: false,
        text: 'Термосумка собрана с нарушениями или не была закрыта.',
      });
    }

    // 2. Положение тары
    const positionOpt = POSITION_OPTIONS.find(
      o => o.id === positionId
    );

    if (positionOpt?.correct) {
      score++;
      report.push({
        q: 'Пространственное положение',
        success: true,
        text: 'Верно! Тара расположена правильно.',
      });
    } else {
      report.push({
        q: 'Пространственное положение',
        success: false,
        text: positionOpt?.feedback || 'Неверный ответ.',
      });
    }

    // 3. Защита от замораживания
    const freezeOpt = FREEZE_OPTIONS.find(
      o => o.id === freezeId
    );

    if (freezeOpt?.correct) {
      score++;
      report.push({
        q: 'Защита от замораживания',
        success: true,
        text: 'Верно! Использована правильная защита.',
      });
    } else {
      report.push({
        q: 'Защита от замораживания',
        success: false,
        text: freezeOpt?.feedback || 'Неверный ответ.',
      });
    }

    // 4. Температурный режим
    const tempOpt = TEMPERATURE_OPTIONS.find(
      o => o.id === tempId
    );

    if (tempOpt?.correct) {
      score++;
      report.push({
        q: 'Температурный режим',
        success: true,
        text: 'Температурный диапазон выбран верно.',
      });
    } else {
      report.push({
        q: 'Температурный режим',
        success: false,
        text: tempOpt?.feedback || 'Неверный ответ.',
      });
    }

    const totalQuestions = 4;
    const passed = score >= 4;

    const finalResult = {
      step: 2,
      score,
      total: totalQuestions,
      passed,
      report,
    };

    setQuizResult(finalResult);
    onComplete?.(finalResult);
  };

  return (
    <div className="w-full max-w-4xl space-y-6">
      <style>{`
        .step-card{background:white;border-radius:20px;border:1.5px solid #e2e8f0;box-shadow:0 4px 24px rgba(0,0,0,0.07);overflow:hidden}
      `}</style>
      {/* Практический симулятор */}
      <CoolingSim
        onStatusChange={useCallback(
          val => setIsBagValid(val),
          []
        )}
        isBagClosed={isBagClosed}
        onBagClose={() => setIsBagClosed(true)}
      />

      {/* Теория */}
      <QuizSection
        title="Вопрос 1: Пространственное положение"
        description="В каком положении необходимо разместить тару?"
        options={POSITION_OPTIONS}
        selectedId={positionId}
        onChange={setPositionId}
        result={quizResult}
      />

      <QuizSection
        title="Вопрос 2: Защита от замораживания"
        description="Как правильно разместить бак-пробу относительно льда?"
        options={FREEZE_OPTIONS}
        selectedId={freezeId}
        onChange={setFreezeId}
        result={quizResult}
      />

      <QuizSection
        title="Вопрос 3: Температурный коридор"
        description="Оптимальная температура согласно ГОСТ Р 59024-2020?"
        options={TEMPERATURE_OPTIONS}
        selectedId={tempId}
        onChange={setTempId}
        result={quizResult}
      />

      {!quizResult ? (
        <button
          onClick={handleSubmit}
          disabled={!isReadyToSubmit}
          className={`w-full py-4 rounded-xl font-bold text-sm shadow-md transition-all
            ${
              isReadyToSubmit
                ? 'bg-slate-950 text-white'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
        >
          {!isBagClosed
            ? 'Сначала соберите и закройте термосумку'
            : 'Продолжить'}
        </button>
      ) : (
        <div
          className={`p-6 rounded-2xl border-2 mt-4 space-y-4 shadow-sm
          ${
            quizResult.passed
              ? 'bg-emerald-50/60 border-emerald-300'
              : 'bg-red-50/60 border-red-300'
          }`}
        >
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-base text-slate-800">
              Результаты тестирования
            </h2>

            <span
              className={`px-3 py-1 rounded-full text-xs font-bold text-white
              ${
                quizResult.passed
                  ? 'bg-emerald-600'
                  : 'bg-red-600'
              }`}
            >
              {quizResult.passed
                ? 'Пройдено успешно'
                : 'Не сдано'}
            </span>
          </div>

          <p className="text-sm font-semibold text-slate-700">
            Итоговый результат: {quizResult.score} из {quizResult.total} баллов.
          </p>

          <div className="space-y-2 border-t pt-3">
            {quizResult.report.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-2 text-xs"
              >
                <span>{item.success ? '✅' : '❌'}</span>

                <div>
                  <strong>{item.q}:</strong>{' '}
                  <span
                    className={
                      item.success
                        ? 'text-slate-700'
                        : 'text-red-700 font-medium'
                    }
                  >
                    {item.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}