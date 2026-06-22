// app/stage3/components/MarkerChoiceInteractive.jsx
'use client';
import React from 'react';
import { MARKER_OPTIONS } from '../data/markingData';

export default function MarkerChoiceInteractive({ selectedId, onChange }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
      <div className="flex items-start gap-3 mb-4">
        <div className="text-3xl">💧</div>
        <div>
          <h3 className="font-bold text-slate-800 text-sm mb-1">Вопрос 1: Борьба с конденсатом</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Пробы будут транспортироваться в сумке-холодильнике. Из-за разницы температур на поверхности выступит конденсат. Какой инструмент выберем?
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {MARKER_OPTIONS.map(opt => (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            className={`flex items-center gap-3 p-3 rounded-xl border-2 text-left transition-all
              ${selectedId === opt.id ? 'bg-blue-50 border-blue-500 text-blue-900' : 'bg-slate-50 border-slate-200 hover:border-slate-300'}`}
          >
            <span className="text-2xl shrink-0">{opt.icon}</span>
            <span className="text-xs font-semibold text-slate-700">{opt.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}