// steps/Stage3/Step3/components/SignatureWidget.jsx
'use client';
import React, { useState } from 'react';

export default function SignatureWidget({ onSigned }) {
  const [idCode, setIdCode] = useState('');
  const [state, setState] = useState('idle'); // idle | signing | done
  const [error, setError] = useState('');

  const handleSign = () => {
    if (!idCode.trim()) {
      setError('Введите личный ID-код исполнителя.');
      return;
    }
    if (idCode.trim().length < 4) {
      setError('ID-код должен содержать не менее 4 символов.');
      return;
    }
    setError('');
    setState('signing');
    setTimeout(() => {
      setState('done');
      onSigned?.(idCode.trim());
    }, 1500);
  };

  if (state === 'done') {
    return (
      <div className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-emerald-50 border-2 border-emerald-400">
        <div className="text-5xl">🟢</div>
        <div className="text-center">
          <p className="font-black text-emerald-800 text-lg">АКТ УТВЕРЖДЁН</p>
          <p className="text-xs text-emerald-600 mt-1">
            Документ подписан ЭЦП · Заблокирован от изменений · Отправлен в базу лаборатории
          </p>
        </div>
        <div className="bg-white rounded-xl border border-emerald-300 px-4 py-2 font-mono text-xs text-slate-600 text-center">
          <span className="text-slate-400">ID исполнителя: </span>
          <span className="font-bold text-slate-800">{'*'.repeat(idCode.length - 2) + idCode.slice(-2)}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 p-4 rounded-2xl bg-violet-50 border-2 border-violet-200">
      <div className="flex items-center gap-2">
        <span className="text-2xl">🔏</span>
        <div>
          <p className="font-bold text-slate-800 text-sm">Цифровая подпись (ЭЦП)</p>
          <p className="text-xs text-slate-500">Введите личный ID-код исполнителя для утверждения Акта</p>
        </div>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={idCode}
          onChange={e => { setIdCode(e.target.value); setError(''); }}
          placeholder="Введите ID-код..."
          disabled={state === 'signing'}
          className="flex-1 px-3 py-2.5 sm:py-2 rounded-lg border-2 border-violet-300 text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-400"
        />
        <button
          onClick={handleSign}
          disabled={state === 'signing'}
          className={`shrink-0 px-4 py-2 rounded-lg text-sm font-bold transition-all
            ${state === 'signing'
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
              : 'bg-violet-700 hover:bg-violet-800 text-white shadow-sm'}`}>
          {state === 'signing' ? '...' : 'Подписать'}
        </button>
      </div>

      {error && <p className="text-red-600 text-xs font-semibold">{error}</p>}
      {state === 'signing' && (
        <p className="text-violet-600 text-xs font-semibold animate-pulse">🔐 Применяется ЭЦП...</p>
      )}
    </div>
  );
}