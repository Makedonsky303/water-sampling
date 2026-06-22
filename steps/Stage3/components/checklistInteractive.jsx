// app/stage3/components/ChecklistInteractive.jsx
'use client';
import React from 'react';
import { CHECKLIST_OPTIONS } from '../data/markingData';

export default function ChecklistInteractive({ checked = {}, onChange }) {
  const toggle = (id) => {
    onChange({ ...checked, [id]: !checked[id] });
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
      <div className="flex items-start gap-3 mb-4">
        <div className="text-3xl">📋</div>
        <div>
          <h3 className="font-bold text-slate-800 text-sm mb-1">Вопрос 4: Обязательные реквизиты этикетки</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Отметьте ВСЕ реквизиты, которые согласно стандартам Республики Казахстан обязаны присутствовать на каждой этикетке:
          </p>
        </div>
      </div>

      <div className="space-y-2">
        {CHECKLIST_OPTIONS.map(opt => {
          const isChecked = !!checked[opt.id];
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => toggle(opt.id)}
              className={`w-full flex items-center justify-between p-3 rounded-xl border-2 text-left transition-all
                ${isChecked ? 'bg-blue-50 border-blue-400 text-blue-950' : 'bg-slate-50 border-slate-200 hover:border-slate-300'}`}
            >
              <span className="text-xs font-semibold text-slate-700">{opt.label}</span>
              <div className={`w-5 h-5 rounded border flex items-center justify-center text-xs font-bold
                ${isChecked ? 'bg-blue-500 border-blue-600 text-white' : 'border-slate-300 bg-white'}`}>
                {isChecked && '✓'}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}