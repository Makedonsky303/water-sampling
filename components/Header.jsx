// src/components/Header.js
import React from 'react';

export default function Header({ currentStep }) {
  const isStage1 = currentStep >= 1 && currentStep <= 3;
  const isStage2 = currentStep === 4;
  const isReport = currentStep === 5;

  return (
    <div className="w-full max-w-6xl mb-6 animate-fade-in">

      {/* Этап-бейдж */}
      <div className="flex items-center gap-3 mb-2">
        {!isReport && (
          <span className={`text-xs font-bold px-3 py-1 rounded-full border
            ${isStage1
              ? 'bg-blue-50 text-blue-700 border-blue-200'
              : 'bg-emerald-50 text-emerald-700 border-emerald-200'}`}>
            {isStage1 ? 'ЭТАП 1 из 2' : 'ЭТАП 2 из 2'}
          </span>
        )}
        <h1 className="text-3xl font-bold text-slate-800 transition-all">
          {isStage1 && 'Предвыездная подготовка в лаборатории'}
          {isStage2 && 'Работа на объекте'}
          {isReport && 'Итоговые результаты симуляции'}
        </h1>
      </div>

      <p className="text-slate-500 text-sm mb-4">
        {isStage1 && 'Локация: Склад и химико-бактериологический отдел лаборатории'}
        {isStage2 && 'Локация: Объект (г. А., ул. Клочкова, 23, квартира заявителя)'}
        {isReport && 'Локация: Панель оценивания действий'}
      </p>

      {/* Вкладки — Этап 1 */}
      {isStage1 && (
        <div className="flex flex-wrap gap-2">
          {[
            { step: 1, label: '1. Тара (Химия)',        activeColor: 'text-blue-700 border-blue-600' },
            { step: 2, label: '2. Тара (Бактериология)', activeColor: 'text-cyan-700 border-cyan-600' },
            { step: 3, label: '3. Полевая сумка',        activeColor: 'text-slate-700 border-slate-600' },
          ].map(({ step, label, activeColor }) => (
            <div key={step}
              className={`px-4 py-2 rounded-t-lg font-bold border-b-4 transition-all
                ${currentStep === step
                  ? `bg-white ${activeColor} shadow-sm`
                  : 'bg-slate-200 text-slate-400 border-transparent'}`}>
              {label}
            </div>
          ))}
        </div>
      )}

      {/* Вкладки — Этап 2 */}
      {isStage2 && (
        <div className="flex flex-wrap gap-2">
          <div className="px-4 py-2 rounded-t-lg font-bold border-b-4 bg-white text-emerald-700 border-emerald-600 shadow-sm">
            1. Подготовка крана
          </div>
        </div>
      )}

      {/* Отчёт — без вкладок */}
      {isReport && (
        <div className="flex flex-wrap gap-2">
          <div className="px-4 py-2 rounded-t-lg font-bold border-b-4 bg-white text-purple-700 border-purple-600 shadow-sm">
            📊 Итоговый отчёт
          </div>
        </div>
      )}

    </div>
  );
}