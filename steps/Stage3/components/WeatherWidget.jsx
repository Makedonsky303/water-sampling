// steps/Stage3/Step3/components/WeatherWidget.jsx
'use client';
import React, { useState } from 'react';
import { ACT_TEMPLATE } from '../data/actData';

export default function WeatherWidget({ onFixed }) {
  const [state, setState] = useState('idle'); // idle | loading | done

  const handleSync = () => {
    if (state !== 'idle') return;
    setState('loading');
    setTimeout(() => {
      setState('done');
      onFixed?.(ACT_TEMPLATE.weatherValue);
    }, 1800);
  };

  const { temp, humidity, condition } = ACT_TEMPLATE.weatherValue;

  return (
    <div className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all
      ${state === 'done' ? 'bg-cyan-50 border-cyan-300' : 'bg-slate-50 border-slate-200'}`}>
      <div className={`text-2xl ${state === 'loading' ? 'animate-spin' : ''}`}>
        {state === 'done' ? '⛅' : '🌐'}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-0.5">Климатические условия</p>
        {state === 'idle' && (
          <p className="text-xs text-amber-600 font-semibold">⚠ Не синхронизировано</p>
        )}
        {state === 'loading' && (
          <p className="text-xs text-blue-600 font-semibold animate-pulse">📶 Запрос к серверу погоды...</p>
        )}
        {state === 'done' && (
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs font-bold text-cyan-700">{temp}</span>
            <span className="text-xs text-slate-500">Влажность: <b>{humidity}</b></span>
            <span className="text-xs text-slate-500">{condition}</span>
          </div>
        )}
      </div>
      {state !== 'done' && (
        <button
          onClick={handleSync}
          disabled={state === 'loading'}
          className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold transition-all
            ${state === 'loading'
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
              : 'bg-cyan-600 hover:bg-cyan-700 text-white shadow-sm'}`}>
          {state === 'loading' ? 'Загрузка...' : 'Синхр. погоду'}
        </button>
      )}
      {state === 'done' && <span className="text-cyan-600 text-lg shrink-0">✓</span>}
    </div>
  );
}