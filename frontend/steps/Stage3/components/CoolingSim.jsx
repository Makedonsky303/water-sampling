// app/stage3/components/CoolingSim.jsx
'use client';
import React, { useState, useEffect } from 'react';

export default function CoolingSim({ onStatusChange, isBagClosed, onBagClose }) {
  const [hasShield, setHasShield] = useState(false);
  const [itemsInBag, setItemsInBag] = useState({ bottle: false, vial: false });
  const [vialOrientation, setVialOrientation] = useState('vert');
  const [bottleOrientation, setBottleOrientation] = useState('vert');
  const [bagTemp, setBagTemp] = useState(21);
  const [gameError, setGameError] = useState(null);

  useEffect(() => {
    if (isBagClosed) return;
    let targetTemp = 21 - 5; // Default cooling
    if (itemsInBag.bottle) targetTemp -= 2;
    if (itemsInBag.vial) {
      targetTemp = !hasShield ? -1 : 4;
    }
    setBagTemp(targetTemp);

    if (itemsInBag.vial && !hasShield) {
      setGameError('Стоп! Проба заморожена (Т = -1°C). Нужна термоперегородка!');
    } else {
      setGameError(null);
    }
  }, [itemsInBag, hasShield, isBagClosed]);

  // Inform parent if the bag is "Valid"
  const isValid = itemsInBag.bottle && itemsInBag.vial && hasShield && 
                  vialOrientation === 'vert' && bottleOrientation === 'vert' && !gameError;

  useEffect(() => {
    onStatusChange(isValid);
  }, [isValid, onStatusChange]);

  return (
    <div className="bg-slate-900 text-slate-100 rounded-2xl p-6 shadow-xl border border-slate-800 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-2">
        <div>
          <h3 className="text-sm font-black uppercase tracking-wider text-blue-400">Сумка-холодильник в разрезе</h3>
          <p className="text-[11px] text-slate-400">Разместите компоненты внутри контейнера</p>
        </div>
        <div className="bg-black border-2 border-slate-700 px-4 py-2 rounded-lg text-center min-w-[120px]">
          <span className="text-[10px] block font-mono text-slate-500 uppercase tracking-widest">Датчик Т</span>
          <span className={`text-2xl font-black font-mono ${bagTemp <= 0 ? 'text-red-500 animate-pulse' : 'text-emerald-400'}`}>
            {bagTemp > 0 ? `+${bagTemp}` : bagTemp} °C
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-800/50 rounded-xl p-4 space-y-3">
          <button 
            disabled={hasShield || isBagClosed}
            onClick={() => setHasShield(true)}
            className={`w-full p-3 rounded-xl border text-left text-xs font-bold transition-all ${hasShield ? 'opacity-30' : 'bg-slate-800 border-blue-500/40'}`}
          >
            📦 Термоперегородка
          </button>

          {/* Logic for Bottle and Vial similar to original but cleaned up */}
          <div className="p-3 bg-slate-800 rounded-xl border border-slate-700 text-xs space-y-2">
            <span className="font-bold block">🧴 Канистра 2.0л</span>
            {!itemsInBag.bottle ? (
              <button onClick={() => setItemsInBag(p => ({...p, bottle: true}))} disabled={isBagClosed} className="w-full py-1.5 bg-blue-600 rounded-lg">Добавить</button>
            ) : (
              <div className="flex gap-1">
                <button onClick={() => setBottleOrientation('vert')} className={`flex-1 py-1 rounded ${bottleOrientation === 'vert' ? 'bg-emerald-600' : 'bg-slate-700'}`}>Вертикально</button>
                <button onClick={() => setBottleOrientation('horiz')} className={`flex-1 py-1 rounded ${bottleOrientation === 'horiz' ? 'bg-amber-600' : 'bg-slate-700'}`}>На бок</button>
              </div>
            )}
          </div>

          <div className="p-3 bg-slate-800 rounded-xl border border-slate-700 text-xs space-y-2">
            <span className="font-bold block">🫙 Флакон 0.5л</span>
            {!itemsInBag.vial ? (
              <button onClick={() => setItemsInBag(p => ({...p, vial: true}))} disabled={isBagClosed || !!gameError} className="w-full py-1.5 bg-blue-600 rounded-lg">Добавить</button>
            ) : (
              <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                    <button onClick={() => setVialOrientation('vert')} className={`flex-1 py-1 rounded ${vialOrientation === 'vert' ? 'bg-emerald-600' : 'bg-slate-700'}`}>Вертикально</button>
                    <button onClick={() => setVialOrientation('horiz')} className={`flex-1 py-1 rounded ${vialOrientation === 'horiz' ? 'bg-amber-600' : 'bg-slate-700'}`}>На бок</button>
                </div>
                <button onClick={() => setItemsInBag(p => ({...p, vial: false}))} className="text-[9px] text-red-400">Удалить</button>
              </div>
            )}
          </div>
        </div>

        <div className="md:col-span-2 border-2 border-dashed border-slate-700 rounded-xl p-4 bg-slate-950 relative min-h-[200px] flex items-center justify-center gap-4">
          <div className="absolute left-0 top-0 bottom-0 w-4 bg-blue-800/30" />
          <div className="absolute right-0 top-0 bottom-0 w-4 bg-blue-800/30" />
          
          {itemsInBag.bottle && <div className={`p-3 rounded bg-slate-800 border ${bottleOrientation === 'horiz' ? 'rotate-90 border-amber-500' : 'border-slate-600'}`}>🧴</div>}
          {hasShield && <div className="w-2 h-20 bg-amber-700 rounded" />}
          {itemsInBag.vial && <div className={`p-3 rounded bg-slate-800 border ${vialOrientation === 'horiz' ? 'rotate-90 border-amber-500' : 'border-slate-600'}`}>🫙</div>}
          
          {gameError && <div className="absolute bottom-2 inset-x-2 bg-red-950 text-red-300 text-[10px] p-2 rounded text-center">{gameError}</div>}
        </div>
      </div>

      <div className="pt-2 border-t border-slate-800 flex justify-end">
        <button
          disabled={!isValid || isBagClosed}
          onClick={onBagClose}
          className={`px-6 py-2 rounded-xl font-bold text-xs ${isValid && !isBagClosed ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-500'}`}
        >
          {isBagClosed ? '🔒 Сумка закрыта' : 'Застегнуть термосумку'}
        </button>
      </div>
    </div>
  );
}