// steps/Stage3/Step3/components/GpsWidget.jsx
'use client';
import React, { useState } from 'react';
import { ACT_TEMPLATE } from '../data/actData';

export default function GpsWidget({ onFixed }) {
  const [state, setState] = useState('idle'); // idle | scanning | done

  const handleScan = () => {
    if (state !== 'idle') return;
    setState('scanning');
    setTimeout(() => {
      setState('done');
      onFixed?.(ACT_TEMPLATE.gpsValue);
    }, 2000);
  };

  return (
    <div className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all
      ${state === 'done' ? 'bg-emerald-50 border-emerald-300' : 'bg-slate-50 border-slate-200'}`}>
      <div className={`text-2xl ${state === 'scanning' ? 'animate-pulse' : ''}`}>
        {state === 'done' ? '🛰️' : '📡'}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-0.5">GPS-координаты</p>
        {state === 'idle' && (
          <p className="text-xs text-amber-600 font-semibold">⚠ Не определены — нажмите кнопку</p>
        )}
        {state === 'scanning' && (
          <p className="text-xs text-blue-600 font-semibold animate-pulse">🔍 Поиск спутников...</p>
        )}
        {state === 'done' && (
          <p className="text-xs text-emerald-700 font-mono font-bold">{ACT_TEMPLATE.gpsValue}</p>
        )}
      </div>
      {state !== 'done' && (
        <button
          onClick={handleScan}
          disabled={state === 'scanning'}
          className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold transition-all
            ${state === 'scanning'
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm'}`}>
          {state === 'scanning' ? 'Поиск...' : 'Определить GPS'}
        </button>
      )}
      {state === 'done' && <span className="text-emerald-500 text-lg shrink-0">✓</span>}
    </div>
  );
}