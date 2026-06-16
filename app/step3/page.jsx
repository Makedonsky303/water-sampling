// steps/Stage3/page.jsx
'use client';
import React, { useState } from 'react';
import Step1_Marking from './Step1_Marking';

export default function step3() {
  const [result, setResult] = useState(null);

  const handleComplete = (payload) => {
    setResult(payload);
    console.log('Шаг 3.1 завершён:', payload);
  };

  return (
    <main className="min-h-screen flex flex-col items-center gap-6 p-6 bg-slate-50">
      <div className="w-full max-w-5xl">
        <h1 className="text-2xl font-bold text-slate-800 mb-1">
          ЭТАП 3. Подготовка к хранению и цифровое документирование
        </h1>
        <p className="text-slate-500 text-sm">Шаг 3.1 — Маркировка ёмкостей с пробами</p>
      </div>

      <Step1_Marking onComplete={handleComplete} />

      {result && (
        <div className="w-full max-w-5xl bg-white rounded-2xl border border-emerald-200 p-5 shadow-sm">
          <h2 className="font-bold text-emerald-700 text-sm mb-2">✅ Результат шага</h2>
          <pre className="text-xs bg-slate-900 text-emerald-300 rounded-xl p-4 overflow-x-auto">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </main>
  );
}