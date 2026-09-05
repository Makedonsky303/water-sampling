'use client';
import React, { useState } from 'react';
import { SIGN_OPTIONS } from '../data/actData';

export default function SignatureInteractive({ onResolved }) {
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (opt) => {
    setSelectedId(opt.id);

    onResolved?.({
      question: 'sign',
      selected: opt.id,
      selectedLabel: opt.label,
      correct: opt.correct,
      feedback: opt.feedback,   
      text: opt.feedback          
    });
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-violet-200 p-5 shadow-sm">
      <div className="flex items-start gap-3 mb-4">
        <div className="text-3xl">✍️</div>
        <div>
          <h3 className="font-bold text-slate-800 text-sm mb-1">
            Вопрос 4: цифровая подпись и завершение акта
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Какое действие завершает оформление акта?
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {SIGN_OPTIONS.map(opt => {
          const isSelected = selectedId === opt.id;

          return (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt)}
              className={`p-3 rounded-xl border-2 text-left transition-all
                ${isSelected
                  ? 'bg-violet-50 border-violet-400'
                  : 'bg-slate-50 border-slate-200 hover:border-violet-300'}`}
            >
              <span className="text-xs font-semibold">{opt.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}