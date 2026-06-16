'use client';
import { useState } from "react";
import { CHECKLIST_OPTIONS } from "./markingData";


// ─── Интерактив №2: юридический состав этикетки (собери чек-лист) ────────────
export default function ChecklistInteractive({ onResolved }) {
  const [checked, setChecked] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const toggle = (id) => {
    if (isCorrect) return;
    setChecked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSubmit = () => {
    const wrong = CHECKLIST_OPTIONS.filter(opt => !!checked[opt.id] !== opt.required);
    setSubmitted(true);
    if (wrong.length === 0) {
      setIsCorrect(true);
      setTimeout(() => onResolved(), 1200);
    }
  };

  const getRowState = (opt) => {
    if (!submitted) return 'idle';
    const isChecked = !!checked[opt.id];
    if (isChecked === opt.required) return opt.required ? 'correct-checked' : 'correct-unchecked';
    return opt.required ? 'missed' : 'extra';
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-blue-200 p-5 shadow-sm">
      <div className="flex items-start gap-3 mb-4">
        <div className="text-3xl">📋</div>
        <div>
          <h3 className="font-bold text-slate-800 text-sm mb-1">Интерактив: юридический состав этикетки</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Перед вами пустой бланк этикетки для пробы. Согласно требованиям стандартов, отметьте галочками
            те данные, которые вы <span className="font-bold">обязаны нанести на этикетку в полевых условиях</span>,
            чтобы проба была идентифицирована лабораторией.
          </p>
        </div>
      </div>

      <div className="space-y-2">
        {CHECKLIST_OPTIONS.map(opt => {
          const state = getRowState(opt);
          const isChecked = !!checked[opt.id];

          const stateStyles = {
            idle: isChecked
              ? 'bg-blue-50 border-blue-300'
              : 'bg-slate-50 border-slate-200 hover:border-blue-300',
            'correct-checked':   'bg-emerald-50 border-emerald-400',
            'correct-unchecked': 'bg-slate-50 border-slate-200 opacity-60',
            missed: 'bg-red-50 border-red-300',
            extra:  'bg-red-50 border-red-300',
          };

          return (
            <button
              key={opt.id}
              onClick={() => toggle(opt.id)}
              disabled={isCorrect}
              className={`w-full flex items-start gap-3 p-3 rounded-xl border-2 text-left transition-all ${stateStyles[state]}`}>
              <div className={`mt-0.5 w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 text-xs font-bold
                ${isChecked ? 'bg-blue-500 border-blue-500 text-white' : 'bg-white border-slate-300'}`}>
                {isChecked ? '✓' : ''}
              </div>
              <span className="text-2xl shrink-0 leading-none">{opt.icon}</span>
              <div className="flex-1">
                <p className="text-xs font-semibold text-slate-700">{opt.label}</p>
                {submitted && (
                  <p className={`text-[11px] mt-1 leading-relaxed font-medium
                    ${state === 'correct-checked' ? 'text-emerald-600' :
                      state === 'correct-unchecked' ? 'text-slate-400' :
                      'text-red-600'}`}>
                    {state === 'missed' && '⚠ Вы не отметили этот обязательный пункт. '}
                    {state === 'extra' && '⚠ Этот пункт лишний на этикетке. '}
                    {opt.explain}
                  </p>
                )}
              </div>
              {submitted && (state === 'correct-checked' || state === 'correct-unchecked') && (
                <span className="text-emerald-500 text-lg shrink-0">✓</span>
              )}
              {submitted && (state === 'missed' || state === 'extra') && (
                <span className="text-red-500 text-lg shrink-0">✗</span>
              )}
            </button>
          );
        })}
      </div>

      {submitted && !isCorrect && (
        <div className="mt-4 p-3 rounded-xl text-xs leading-relaxed font-medium bg-red-50 border border-red-200 text-red-700">
          Чек-лист собран неверно. Проверьте отмеченные пункты выше и попробуйте снова — состав этикетки
          должен соответствовать требованиям стандартов РК.
        </div>
      )}

      {isCorrect && (
        <div className="mt-4 p-3 rounded-xl text-xs leading-relaxed font-medium bg-emerald-50 border border-emerald-200 text-emerald-700">
          ✓ Верно! Это полный и достаточный набор данных для идентификации пробы лабораторией — ничего лишнего,
          ничего не упущено.
        </div>
      )}

      {!isCorrect && (
        <button
          onClick={handleSubmit}
          className="mt-4 w-full font-bold py-3 rounded-xl text-sm text-white bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 shadow-md transition-all">
          Проверить чек-лист
        </button>
      )}
    </div>
  );
}