'use client';
import { useState } from "react";
import { MARKER_OPTIONS } from "./markingData";

// ─── Интерактив №1: выбор маркера ─────────────────────────────────────────────
export default function MarkerChoiceInteractive({ onResolved }) {
  const [selectedId, setSelectedId] = useState(null);
  const [resolved, setResolved] = useState(false);

  const handleSelect = (opt) => {
    if (resolved) return;
    setSelectedId(opt.id);
    if (opt.correct) {
      setResolved(true);
      setTimeout(() => onResolved(opt.id), 1200);
    }
  };

  const selectedOpt = MARKER_OPTIONS.find(o => o.id === selectedId);

  return (
    <div className="bg-white rounded-2xl border-2 border-blue-200 p-5 shadow-sm">
      <div className="flex items-start gap-3 mb-4">
        <div className="text-3xl">💧</div>
        <div>
          <h3 className="font-bold text-slate-800 text-sm mb-1">Интерактив: борьба с конденсатом</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Пробы будут транспортироваться в сумке-холодильнике с хладоэлементами. Из-за разницы температур
            на поверхности бутылей неизбежно выступит конденсат (влага). Какой инструмент вы выберете для
            маркировки этикеток?
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {MARKER_OPTIONS.map(opt => {
          const isSelected = selectedId === opt.id;
          const showWrong = isSelected && !opt.correct;
          const showCorrect = isSelected && opt.correct;
          return (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt)}
              disabled={resolved}
              className={`flex items-center gap-3 p-3 rounded-xl border-2 text-left transition-all
                ${showCorrect ? 'bg-emerald-50 border-emerald-400' :
                  showWrong ? 'bg-red-50 border-red-300' :
                  'bg-slate-50 border-slate-200 hover:border-blue-300 hover:bg-blue-50'}
                ${resolved && !isSelected ? 'opacity-40' : ''}`}>
              <span className="text-2xl shrink-0">{opt.icon}</span>
              <span className="text-xs font-semibold text-slate-700">{opt.label}</span>
              {showCorrect && <span className="ml-auto text-emerald-500 text-lg shrink-0">✓</span>}
              {showWrong && <span className="ml-auto text-red-500 text-lg shrink-0">✗</span>}
            </button>
          );
        })}
      </div>

      {selectedOpt && (
        <div className={`mt-4 p-3 rounded-xl text-xs leading-relaxed font-medium
          ${selectedOpt.correct ? 'bg-emerald-50 border border-emerald-200 text-emerald-700' : 'bg-red-50 border border-red-200 text-red-700'}`}>
          {selectedOpt.feedback}
        </div>
      )}
    </div>
  );
}