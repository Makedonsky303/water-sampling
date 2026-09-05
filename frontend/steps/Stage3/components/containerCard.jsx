'use client';
import React from 'react';

export default function ContainerCard({
  container,
  labelData,
  onOpenForm,
  disabled,
}) {
  const isLabeled = !!labelData;
  const isLarge = container.size === 'large';

  return (
    <div
  className={`flex flex-col items-center gap-3 p-4 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300
    ${disabled ? 'bg-slate-100 opacity-60 grayscale' : 'bg-white hover:shadow-lg hover:-translate-y-1'}
  `}
>
  {/* Внутренний контейнер */}
  <div className="relative flex flex-col items-center justify-end">
    
    {/* Иконка контейнера */}
    <div
      className={`flex items-center justify-center ${
        isLarge ? 'w-32 h-40' : 'w-32 h-40'
      }`}
    >
      <div className="text-6xl select-none">{container.emoji}</div>
    </div>

    {/* КНОПКА — теперь всегда в одной позиции */}
    <button
      type="button"
      disabled={disabled}
      onClick={() => !disabled && onOpenForm()}
      className={`mt-2 rounded-md border-2 flex flex-col items-center justify-center text-[10px] leading-tight p-1 transition-all duration-300
        ${disabled
          ? 'bg-slate-200 border-slate-300 text-slate-400 cursor-not-allowed'
          : isLabeled
          ? 'bg-emerald-50 border-emerald-400 text-emerald-800 hover:scale-105 cursor-pointer'
          : 'bg-amber-50/90 border-dashed border-amber-400 text-amber-600 animate-pulse hover:scale-105 cursor-pointer'
        }
      `}
      style={{
        width: '64px',
        height: '44px',
      }}
    >
      {disabled ? (
        <span className="font-bold text-[8px] text-center">
          ✏️ Возьмите<br />маркер
        </span>
      ) : isLabeled ? (
        <>
          <span className="font-bold truncate w-full text-center">
            Код: {labelData.sampleCode}
          </span>
          <span className="truncate w-full text-center opacity-70">
            {labelData.time}
          </span>
        </>
      ) : (
        <span className="font-bold text-[9px]">
          Заполнить 📝
        </span>
      )}
    </button>
  </div>

  <p className="font-bold text-xs text-slate-800 text-center">
    {container.name}
  </p>

  {disabled && (
    <p className="text-[10px] text-amber-600 font-semibold text-center">
      Требуется перманентный маркер
    </p>
  )}
</div>
  );
}