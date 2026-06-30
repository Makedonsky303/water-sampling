'use client';
import React, { useState } from 'react';
import { GEO_OPTIONS } from '../data/actData';

export default function GeoTimeInteractive({ onResolved }) {
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (opt) => {
    setSelectedId(opt.id);
    onResolved?.({
      question: 'geo',
      selected: opt.id,
      selectedLabel: opt.label,
      correct: opt.correct,
      feedback: opt.feedback,   
      text: opt.feedback  
    });
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-blue-200 p-5 shadow-sm">
      <div className='flex'>
        <div className="text-3xl mb-3">📡</div>
        <div className=''>
            <h3 className="font-bold text-slate-800 text-sm mb-1">
              Вопрос 2: фиксация геопозиции и времени
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Как правильно зафиксировать геолокацию и время отбора проб?
            </p>
          </div>
        </div>
      <div className="flex flex-col gap-2">
        {GEO_OPTIONS.map(opt => {
          const isSelected = selectedId === opt.id;

          return (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt)}
              className={`p-3 rounded-xl border-2 text-left transition-all
                ${isSelected
                  ? 'bg-blue-50 border-blue-400'
                  : 'bg-slate-50 border-slate-200 hover:border-blue-300'}`}
            >
              <span className="text-xs font-semibold">{opt.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

