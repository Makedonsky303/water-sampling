'use client';
import React, { useState } from 'react';
import { NORM_OPTIONS } from '../data/actData';

export default function NormVerifyInteractive({ onResolved }) {
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (opt) => {
    setSelectedId(opt.id);

    onResolved?.({
      question: 'norm',
      selected: opt.id,
      selectedLabel: opt.label,
      correct: opt.correct,
      feedback: opt.feedback,   
      text: opt.feedback  
    });
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-amber-200 p-5 shadow-sm">
      
      <div className="flex items-start gap-3 mb-4">
        <div className="text-3xl">⚖️</div>
        <div>
          <h3 className="font-bold text-slate-800 text-sm mb-1">
            Вопрос 1: верификация нормативной базы
          </h3>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {NORM_OPTIONS.map(opt => {
          const isSelected = selectedId === opt.id;

          return (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt)}
              className={`flex items-start gap-3 p-3 rounded-xl border-2 text-left transition-all
                ${isSelected
                  ? 'bg-amber-50 border-amber-400'
                  : 'bg-slate-50 border-slate-200 hover:border-amber-300 hover:bg-amber-50'}`}
            >
              <span className="text-xs font-semibold text-slate-700 flex-1">
                {opt.label}
              </span>
            </button>
          );
        })}
      </div>

    </div>
  );
}