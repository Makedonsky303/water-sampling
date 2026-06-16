// steps/Stage3/components/LabelingAction.jsx
'use client';
import React, { useState } from 'react';
import { CONTAINERS } from '../markingConfig';

export default function LabelingAction({ labelData, onComplete }) {
  const [labelsPlacement, setLabelsPlacement] = useState({}); // { containerId: 'body' | 'foil' }
  const [alert, setAlert] = useState(null);

  const handlePlaceLabel = (containerId, zone) => {
    if (zone === 'foil') {
      setAlert({ id: containerId, text: "Внимание! Фольга — это временная защита. Наклейте на тело флакона." });
      return;
    }
    
    setAlert(null);
    setLabelsPlacement(prev => ({ ...prev, [containerId]: 'body' }));
  };

  const isAllDone = CONTAINERS.every(c => labelsPlacement[c.id] === 'body');

  return (
    <div className="space-y-6">
      <div className="bg-indigo-600 text-white p-4 rounded-xl flex items-center justify-between shadow-lg">
        <div>
          <p className="text-xs opacity-80 font-mono">ТЕКУЩАЯ ЭТИКЕТКА:</p>
          <p className="font-bold text-lg">{labelData.sampleCode} | {labelData.date}</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] uppercase tracking-widest">Перетащите или кликните на зону</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {CONTAINERS.map(container => (
          <div key={container.id} className="relative flex flex-col items-center bg-white p-8 rounded-3xl border-2 border-slate-100 shadow-sm">
            {/* Визуализация сосуда */}
            <div className="relative w-40 h-56 bg-slate-50 rounded-t-full rounded-b-xl border-x-4 border-b-4 border-slate-200 flex flex-col">
              
              {/* Зона ФОЛЬГИ */}
              {container.hasFoil && (
                <div 
                  onClick={() => handlePlaceLabel(container.id, 'foil')}
                  className={`h-1/4 w-full bg-slate-400/30 border-b-2 border-dashed border-slate-400 cursor-pointer hover:bg-red-400/20 transition-colors flex items-center justify-center`}
                >
                  {labelsPlacement[container.id] !== 'body' && <span className="text-[10px] text-slate-500 font-bold">ФОЛЬГА</span>}
                </div>
              )}

              {/* Зона ТЕЛА */}
              <div 
                onClick={() => handlePlaceLabel(container.id, 'body')}
                className="flex-1 w-full cursor-pointer hover:bg-emerald-400/10 flex items-center justify-center relative"
              >
                {labelsPlacement[container.id] === 'body' ? (
                  <div className="w-24 h-16 bg-white border-2 border-slate-800 shadow-md flex flex-col items-center justify-center text-[10px] font-bold p-1 animate-in fade-in zoom-in duration-300">
                    <div className="border-b w-full text-center pb-1 mb-1">{labelData.sampleCode}</div>
                    <div className="text-[8px]">{labelData.date}</div>
                    <div className="text-[7px] opacity-50 uppercase">Пров. заполнено</div>
                  </div>
                ) : (
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Место для этикетки</span>
                )}
              </div>
            </div>

            {/* Сообщения об ошибках для конкретного сосуда */}
            {alert?.id === container.id && (
              <div className="absolute top-2 bg-red-600 text-white text-[10px] px-3 py-2 rounded-full shadow-xl animate-bounce">
                {alert.text}
              </div>
            )}

            <p className="mt-4 font-black text-slate-700 uppercase tracking-wide">{container.name}</p>
          </div>
        ))}
      </div>

      <button
        disabled={!isAllDone}
        onClick={() => onComplete(labelsPlacement)}
        className={`w-full py-5 rounded-2xl font-black text-lg transition-all shadow-xl ${
          isAllDone 
          ? 'bg-slate-900 text-white hover:scale-[1.02] active:scale-95' 
          : 'bg-slate-200 text-slate-400 cursor-not-allowed'
        }`}
      >
        ПОДТВЕРДИТЬ МАРКИРОВКУ И ЗАВЕРШИТЬ →
      </button>
    </div>
  );
}