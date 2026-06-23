// steps/Stage3/Step3/components/NormVerifyInteractive.jsx
'use client';
import React, { useState } from 'react';
import { NORM_OPTIONS, ACT_TEMPLATE } from '../data/actData';

export default function NormVerifyInteractive({ onResolved }) {
  const [selectedId, setSelectedId] = useState(null);
  const [resolved, setResolved] = useState(false);

  const handleSelect = (opt) => {
    if (resolved) return;
    setSelectedId(opt.id);
    if (opt.correct) {
      setResolved(true);
      setTimeout(() => onResolved(), 1200);
    }
  };

  const selectedOpt = NORM_OPTIONS.find(o => o.id === selectedId);

  return (
    <div className="bg-white rounded-2xl border-2 border-amber-200 p-5 shadow-sm">
      <div className="flex items-start gap-3 mb-4">
        <div className="text-3xl">⚖️</div>
        <div>
          <h3 className="font-bold text-slate-800 text-sm mb-1">Вопрос 1: верификация нормативной базы</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Вы заполняете графу «Метод отбора проб и нормативный документ». Система автоматически подставила
            шаблонную строку. Внимательно изучите её и выберите правильное действие.
          </p>
        </div>
      </div>

      {/* Подвох — шаблон с неверным ГОСТом */}
      <div className="bg-slate-900 rounded-xl p-4 mb-4 font-mono text-sm flex items-start gap-3">
        <span className="text-amber-400 shrink-0">📋</span>
        <div>
          <p className="text-slate-400 text-[10px] uppercase tracking-widest mb-1">Метод отбора (шаблон):</p>
          <p className="text-white">{ACT_TEMPLATE.method}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {NORM_OPTIONS.map(opt => {
          const isSelected = selectedId === opt.id;
          const showWrong = isSelected && !opt.correct;
          const showCorrect = isSelected && opt.correct;
          return (
            <button key={opt.id} onClick={() => handleSelect(opt)} disabled={resolved}
              className={`flex items-start gap-3 p-3 rounded-xl border-2 text-left transition-all
                ${showCorrect ? 'bg-emerald-50 border-emerald-400' :
                  showWrong   ? 'bg-red-50 border-red-300' :
                  'bg-slate-50 border-slate-200 hover:border-amber-300 hover:bg-amber-50'}
                ${resolved && !isSelected ? 'opacity-40' : ''}`}>
              <span className="text-xs font-semibold text-slate-700 flex-1">{opt.label}</span>
              {showCorrect && <span className="text-emerald-500 text-lg shrink-0">✓</span>}
              {showWrong   && <span className="text-red-500 text-lg shrink-0">✗</span>}
            </button>
          );
        })}
      </div>

      {selectedOpt && (
        <div className={`mt-4 p-3 rounded-xl text-xs leading-relaxed font-medium border
          ${selectedOpt.correct
            ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
            : 'bg-red-50 border-red-200 text-red-700'}`}>
          {selectedOpt.feedback}
        </div>
      )}
    </div>
  );
}