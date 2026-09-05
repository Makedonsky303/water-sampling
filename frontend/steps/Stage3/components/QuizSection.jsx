// app/stage3/components/QuizSection.jsx
'use client';
import React from 'react';

export default function QuizSection({ title, description, options, selectedId, onChange, result }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
      <h3 className="font-bold text-slate-800 text-sm mb-1">{title}</h3>
      <p className="text-xs text-slate-600 mb-3">{description}</p>
      <div className="space-y-2">
        {options.map(opt => {
          const isSelected = selectedId === opt.id;
          const isCorrect = opt.correct;
          
          // Only show colors if the parent has submitted the results
          let classes = "bg-slate-50 border-slate-200 hover:bg-slate-100";
          if (result && isSelected) {
            classes = isCorrect ? "bg-emerald-50 border-emerald-500 text-emerald-900" : "bg-red-50 border-red-500 text-red-900";
          } else if (isSelected) {
            classes = "bg-blue-50 border-blue-500 text-blue-900";
          }

          return (
            <button
              key={opt.id}
              onClick={() => !result && onChange(opt.id)}
              className={`w-full text-left p-3 text-xs rounded-xl border transition-all font-medium ${classes}`}
            >
              {opt.label}
              {result && isSelected && <p className="text-[10px] mt-1 font-bold">{opt.feedback}</p>}
            </button>
          );
        })}
      </div>
    </div>
  );
}