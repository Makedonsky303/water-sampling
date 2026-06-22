// app/stage3/components/ContainerCard.jsx
'use client';
import React from 'react';

export default function ContainerCard({ container, labelData, onOpenForm }) {
  const isLabeled = !!labelData;
  const isLarge = container.size === 'large';

  return (
    <div className="flex flex-col items-center gap-3 p-4 rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className={`relative flex items-center justify-center ${isLarge ? 'w-32 h-40' : 'w-24 h-32'}`}>
        <div className="text-6xl select-none">{container.emoji}</div>
        <button
          type="button"
          onClick={onOpenForm}
          className={`absolute rounded-md border-2 flex flex-col items-center justify-center text-[10px] leading-tight p-1 cursor-pointer transition-all duration-300
            ${isLabeled ? 'bg-emerald-50 border-emerald-400 text-emerald-800' : 'bg-amber-50/90 border-dashed border-amber-400 text-amber-600 animate-pulse'}`}
          style={{ width: isLarge ? '68px' : '58px', height: isLarge ? '46px' : '40px', bottom: isLarge ? '36px' : '28px' }}
        >
          {isLabeled ? (
            <>
              <span className="font-bold truncate w-full text-center">Код: {labelData.sampleCode}</span>
              <span className="truncate w-full text-center opacity-70">{labelData.time}</span>
            </>
          ) : (
            <span className="font-bold text-[9px]">Заполнить 📝</span>
          )}
        </button>
      </div>
      <p className="font-bold text-xs text-slate-800 text-center">{container.name}</p>
    </div>
  );
}