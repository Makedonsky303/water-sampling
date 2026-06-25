'use client';
import React, { useState, useMemo } from 'react';
import { CHEM_MATERIALS, CHEM_COLORS, CHEM_CAPS } from '../../data/constants';

export default function Step1_ChemTare({ savedData, onUpdate, onComplete }) {
  // Инициализируем корзину данными из savedData, чтобы она не пропадала при переключении шагов
  const [chemCart, setChemCart] = useState(savedData.chemCart || []);

  const [chemMat, setChemMat] = useState(null);
  const [chemCol, setChemCol] = useState(null);
  const [chemCap, setChemCap] = useState(null);
  const [chemVol, setChemVol] = useState(0.5);
  const [validationWarning, setValidationWarning] = useState("");

  const handleAddChem = () => {
    if (!chemMat || !chemCol || !chemCap) { 
      setValidationWarning("Выберите материал, цвет и крышку для добавления."); 
      return; 
    }
    setValidationWarning("");
    const newCart = [...chemCart, {
      mat: CHEM_MATERIALS.find(m => m.id === chemMat),
      col: CHEM_COLORS.find(c => c.id === chemCol),
      cap: CHEM_CAPS.find(c => c.id === chemCap),
      vol: chemVol
    }];
    setChemCart(newCart);
    if (typeof onUpdate === 'function') {
      onUpdate({ chemCart: newCart });
    }
  };

  const handleCompleteChem = () => {
    if (chemCart.length === 0) {
      setValidationWarning("Добавьте хотя бы один вариант тары в список ответов.");
      return;
    }
    let score = 0; 
    let f1 = false; 
    let f2 = false; 
    let results = [];

    chemCart.forEach((item, idx) => {
      let errs = [];
      if (item.vol !== 2.0) errs.push(`Объем ${item.vol} л. (нужно 2.0 л).`);
      if (!item.mat.isCorrect) errs.push(item.mat.error);
      if (!item.col.isCorrect) errs.push(item.col.error);
      if (!item.cap.isCorrect) errs.push(item.cap.error);

      // 🟢 УНИКАЛЬНЫЙ КЛЮЧ КОНФИГУРАЦИИ
      const configKey = `${item.mat.id}_${item.col.id}_${item.cap.id}_${item.vol}`;

      if (errs.length === 0) {
        if (item.mat.id === 'hdpe') f1 = true;
        if (item.mat.id === 'pp') f2 = true;
        results.push({ id: idx + 1, configKey, name: item.mat.name, vol: item.vol, isPerfect: true, errs: [] });
      } else {
        results.push({ id: idx + 1, configKey, name: item.mat.name, vol: item.vol, isPerfect: false, errs });
      }
    });

    if (f1 || f2) score = (f1 && f2) ? 100 : 80;
    // 🟢 Штрафуем за уникальные ошибочные конфигурации, а не за каждую банку
    const uniqueErrorKeys = new Set(results.filter(r => !r.isPerfect).map(r => r.configKey));
    score -= (uniqueErrorKeys.size * 15);

    onComplete({
      chemCart,
      chemResults: results,
      chemScore: Math.max(0, score),
      chemFound1: f1,
      chemFound2: f2
    });
  };

  // 🟢 Группировка корзины для отображения
  const groupedCart = useMemo(() => {
    const map = new Map();
    chemCart.forEach(item => {
      const key = `${item.mat.id}_${item.col.id}_${item.cap.id}_${item.vol}`;
      if (!map.has(key)) {
        map.set(key, { ...item, qty: 1 });
      } else {
        const existing = map.get(key);
        map.set(key, { ...existing, qty: existing.qty + 1 });
      }
    });
    return Array.from(map.values());
  }, [chemCart]);

  // Убрать ровно 1 банку из стека
  const handleRemoveOne = (key) => {
    let removed = false;
    const newCart = chemCart.filter(item => {
      const itemKey = `${item.mat.id}_${item.col.id}_${item.cap.id}_${item.vol}`;
      if (!removed && itemKey === key) {
        removed = true;
        return false;
      }
      return true;
    });
    setChemCart(newCart);
    if (typeof onUpdate === 'function') onUpdate({ chemCart: newCart });
  };

  // Убрать всю конфигурацию целиком
  const handleRemoveAll = (key) => {
    const newCart = chemCart.filter(item => {
      const itemKey = `${item.mat.id}_${item.col.id}_${item.cap.id}_${item.vol}`;
      return itemKey !== key;
    });
    setChemCart(newCart);
    if (typeof onUpdate === 'function') onUpdate({ chemCart: newCart });
  };

  const actChemMat = CHEM_MATERIALS.find(m => m.id === chemMat);
  const actChemCol = CHEM_COLORS.find(c => c.id === chemCol);

  return (
    <div className="bg-white w-full max-w-6xl rounded-b-xl rounded-tr-xl shadow-xl border border-slate-200 flex flex-col xl:flex-row mb-6 overflow-hidden">
      
      {/* КОНСТРУКТОР ХИМИИ */}
      <div className="w-full xl:w-2/3 p-8 border-r border-slate-100 bg-slate-50 flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-1">Конструктор (Химия)</h2>
          <p className="text-slate-500 text-sm">Соберите подходящую тару и добавьте её в список ответов.</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <span className="font-semibold text-slate-800 mb-3 block">1. Полимерный материал:</span>
          <div className="grid grid-cols-2 gap-3">
            {CHEM_MATERIALS.map(m => (
              <button key={m.id} onClick={() => {setChemMat(m.id); setValidationWarning("");}}
                className={`p-3 text-sm rounded-lg border-2 text-left ${chemMat === m.id ? 'bg-blue-50 border-blue-500 text-blue-900 font-bold' : 'border-slate-200 text-slate-600 hover:border-blue-300'}`}
              >{m.name}</button>
            ))}
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <span className="font-semibold text-slate-800 mb-3 block">2. Цвет тары:</span>
          <div className="grid grid-cols-3 gap-3">
            {CHEM_COLORS.map(c => (
              <button key={c.id} onClick={() => {setChemCol(c.id); setValidationWarning("");}}
                className={`p-3 text-sm rounded-lg border-2 text-center flex flex-col items-center ${chemCol === c.id ? 'bg-blue-50 border-blue-500 font-bold text-blue-900' : 'border-slate-200 text-slate-600'}`}
              ><div className={`w-8 h-8 rounded-full border border-slate-300 mb-2 ${c.visual}`}></div>{c.name}</button>
            ))}
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <span className="font-semibold text-slate-800 mb-3 block">3. Крышка:</span>
          <div className="flex gap-3">
            {CHEM_CAPS.map(c => (
              <button key={c.id} onClick={() => {setChemCap(c.id); setValidationWarning("");}}
                className={`flex-1 p-3 text-sm rounded-lg border-2 text-left ${chemCap === c.id ? 'bg-blue-50 border-blue-500 font-bold text-blue-900' : 'border-slate-200 text-slate-600'}`}
              >{c.name}</button>
            ))}
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1 w-full">
            <span className="font-semibold text-slate-800 block mb-2">4. Вместимость: <span className="text-blue-600 ml-2">{chemVol.toFixed(1)} л</span></span>
            <input type="range" min="0.5" max="5.0" step="0.5" value={chemVol} onChange={(e) => setChemVol(parseFloat(e.target.value))} className="w-full h-3 bg-slate-200 rounded-lg cursor-pointer accent-blue-600"/>
          </div>
          <button onClick={handleAddChem} className="w-full md:w-1/3 bg-blue-100 hover:bg-blue-200 text-blue-800 font-bold py-4 rounded-xl">+ Добавить</button>
        </div>
      </div>

      {/* КОРЗИНА И ПРЕВЬЮ */}
      <div className="w-full xl:w-1/3 flex flex-col">
        <div className="p-8 bg-white border-b border-slate-100">
          <h2 className="text-lg font-bold text-slate-800 mb-4">🔬 Превью (Химия)</h2>
          <div className="flex justify-center mb-4">
            <div className="relative w-24 h-36 border-4 border-slate-300 rounded-xl bg-slate-50 flex items-center justify-center overflow-hidden">
              <div className={`absolute -top-1 left-1/2 transform -translate-x-1/2 w-10 h-4 rounded-t-md z-10 ${chemCap === 'rubber' ? 'bg-slate-800' : 'bg-blue-400'}`}></div>
              <div className={`w-full h-full ${actChemCol ? actChemCol.visual : 'bg-transparent'}`}></div>
              <div className="absolute bottom-4 bg-white/90 px-2 rounded text-[10px] font-black">{chemVol.toFixed(1)}L</div>
            </div>
          </div>
        </div>

        <div className="p-8 bg-slate-50 flex-1 flex flex-col">
          <h2 className="text-lg font-bold text-slate-800 mb-4 flex justify-between">
            <span>📋 Ваши ответы</span>
            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">{chemCart.length}</span>
          </h2>
          <div className="flex-1 space-y-2 mb-6">
            {groupedCart.length === 0 ? (
              <div className="text-center text-slate-400 text-sm p-4 border-2 border-dashed border-slate-200 rounded-lg">Нет добавленных вариантов.</div>
            ) : (
              groupedCart.map((item, idx) => {
                const key = `${item.mat.id}_${item.col.id}_${item.cap.id}_${item.vol}`;
                return (
                  <div key={key} className="bg-white p-3 rounded border border-slate-200 text-xs relative">
                    <div className="flex justify-between items-start gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <b>Конфиг. {idx + 1}:</b> 
                          <span className="truncate">
                            {item.mat?.name ?? 'Неизвестно'}, {item.col?.name ?? 'Неизвестно'}, {item.vol} л.
                          </span>
                        </div>
                        {item.qty > 1 && (
                          <div className="mt-1 flex items-center gap-1">
                            <span className="text-[10px] font-mono bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-bold">
                              Количество: {item.qty} шт.
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-1 shrink-0 mt-0.5">
                        {item.qty > 1 && (
                          <button 
                            onClick={() => handleRemoveOne(key)}
                            title="Убрать одну банку"
                            className="text-slate-400 hover:text-slate-600 text-sm w-6 h-6 flex items-center justify-center rounded hover:bg-slate-100 border border-slate-200"
                          >
                            −
                          </button>
                        )}
                        <button 
                          onClick={() => handleRemoveAll(key)} 
                          title="Убрать всю конфигурацию"
                          className="text-red-400 hover:text-red-600 text-base w-6 h-6 flex items-center justify-center rounded hover:bg-red-50"
                        >
                          ✖
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <div className="mt-auto">
            {validationWarning && <p className="text-red-500 text-xs font-bold mb-2 text-center">{validationWarning}</p>}
            <button onClick={handleCompleteChem} className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-4 rounded-xl shadow-md transition-all">Завершить Химию →</button>
          </div>
        </div>
      </div>
    </div>
  );
}