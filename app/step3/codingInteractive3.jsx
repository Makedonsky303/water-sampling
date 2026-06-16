// steps/Stage3/components/CodingInteractive.jsx
'use client';
import React, { useState } from 'react';
import { CODING_OPTIONS } from './markingData';

export default function CodingInteractive3({ onResolved }) {
  const [selected, setSelected] = useState(null);
  const [isError, setIsError] = useState(false);

  const handleSelect = (option) => {
    setSelected(option);
    if (option.correct) {
      setIsError(false);
      setTimeout(() => onResolved(option), 1000);
    } else {
      setIsError(true);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl border-2 border-indigo-100 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">🔐</span>
        <h3 className="font-bold text-slate-800">Обезличивание и шифрование</h3>
      </div>
      <p className="text-sm text-slate-600 mb-4">
        Как правильно нанести уникальный код пробы для обеспечения "слепого" тестирования?
      </p>
      
      <div className="grid gap-3">
        {CODING_OPTIONS.map((opt) => (
          <button
            key={opt.id}
            onClick={() => handleSelect(opt)}
            className={`p-4 text-left text-sm rounded-xl border-2 transition-all ${
              selected?.id === opt.id 
                ? (opt.correct ? 'border-emerald-500 bg-emerald-50' : 'border-red-500 bg-red-50')
                : 'border-slate-100 hover:border-indigo-300 bg-slate-50'
            }`}
          >
            <div className="font-semibold">{opt.label}</div>
            {selected?.id === opt.id && (
              <p className={`mt-2 text-xs ${opt.correct ? 'text-emerald-700' : 'text-red-700'}`}>
                {opt.feedback}
              </p>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}