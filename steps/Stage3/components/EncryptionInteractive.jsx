// app/stage3/components/EncryptionInteractive.jsx
'use client';
import React from 'react';
import { ENCRYPTION_OPTIONS } from '../data/markingData';

export default function EncryptionInteractive({ selectedId, onChange }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
      <div className="flex items-start gap-3 mb-4">
        <div className="text-3xl">🔐</div>
        <div>
          <h3 className="font-bold text-slate-800 text-sm mb-1">
            Вопрос 2: Обезличивание и шифрование пробы
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Для обеспечения объективности анализа в крупных лабораториях часто используется принцип 
            "слепого" тестирования (шифрование). Как правильно нанести уникальный код пробы на тару для химии и бактериологии?
          </p>
        </div>
      </div>

      <div className="space-y-2">
        {ENCRYPTION_OPTIONS.map((opt) => {
          const isSelected = selectedId === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onChange(opt.id)}
              className={`w-full text-left p-3.5 rounded-xl border-2 transition-all flex items-start gap-3
                ${isSelected 
                  ? 'bg-blue-50 border-blue-500 text-blue-950' 
                  : 'bg-slate-50 border-slate-200 hover:border-slate-300'}`}
            >
              <div className={`w-4 h-4 rounded-full border shrink-0 mt-0.5 flex items-center justify-center
                ${isSelected ? 'border-blue-500 bg-blue-500' : 'border-slate-300 bg-white'}`}>
                {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
              </div>
              <span className="text-xs font-semibold leading-relaxed text-slate-700">{opt.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}