'use client';
import React, { useState } from 'react';
import { CLIMATE_OPTIONS } from '../data/actData';

export default function ClimateInteractive({ onResolved }) {
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (opt) => {
    setSelectedId(opt.id);
    onResolved?.({
      question: 'climate',
      selected: opt.id,
      selectedLabel: opt.label,
      correct: opt.correct,
      feedback: opt.feedback,   
      text: opt.feedback  
    });
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-cyan-200 p-5 shadow-sm">
      <div className="flex items-start gap-3 mb-4">
        <div className="text-3xl">🌤️</div>
        <div>
          <h3 className="font-bold text-slate-800 text-sm mb-1">
            Вопрос 3: учёт климатических условий
          </h3>
          <p className="text-xs text-slate-600">
            Зачем фиксировать климат при отборе проб?
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {CLIMATE_OPTIONS.map(opt => {
          const isSelected = selectedId === opt.id;

          return (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt)}
              className={`p-3 rounded-xl border-2 text-left transition-all
                ${isSelected
                  ? 'bg-cyan-50 border-cyan-400'
                  : 'bg-slate-50 border-slate-200 hover:border-cyan-300'}`}
            >
              <span className="text-xs font-semibold">{opt.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}