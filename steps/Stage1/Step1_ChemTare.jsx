// src/steps/Stage1/Step1_ChemTare.jsx
'use client';
import React, { useState, useEffect } from 'react';
import { CHEM_MATERIALS, CHEM_COLORS, CHEM_CAPS } from '../../data/constants';

// Функция для перемешивания элементов
const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

export default function Step1_ChemTare({ onComplete }) {
  // Перемешиваем массивы только один раз при загрузке экрана
  const [shuffledMaterials, setShuffledMaterials] = useState(CHEM_MATERIALS);
  const [shuffledColors, setShuffledColors] = useState(CHEM_COLORS);
  const [shuffledCaps, setShuffledCaps] = useState(CHEM_CAPS);

  const [chemMat, setChemMat] = useState(null);
  const [chemCol, setChemCol] = useState(null);
  const [chemCap, setChemCap] = useState(null);
  const [chemVol, setChemVol] = useState(0.5);
  const [chemCart, setChemCart] = useState([]);
  const [validationWarning, setValidationWarning] = useState("");

  useEffect(() => {
    setShuffledMaterials(shuffleArray(CHEM_MATERIALS));
    setShuffledColors(shuffleArray(CHEM_COLORS));
    setShuffledCaps(shuffleArray(CHEM_CAPS));
  }, []);

  const handleAddChem = () => {
    if (!chemMat || !chemCol || !chemCap) { 
      setValidationWarning("Выберите материал, цвет и крышку для добавления."); 
      return; 
    }
    setValidationWarning("");
    setChemCart([...chemCart, {
      mat: CHEM_MATERIALS.find(m => m.id === chemMat),
      col: CHEM_COLORS.find(c => c.id === chemCol),
      cap: CHEM_CAPS.find(c => c.id === chemCap),
      vol: chemVol
    }]);
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

      if (errs.length === 0) {
        if (item.mat.id === 'hdpe') f1 = true;
        if (item.mat.id === 'pp') f2 = true;
        results.push({ id: idx + 1, name: item.mat.name, isPerfect: true, errs: [] });
      } else {
        results.push({ id: idx + 1, name: item.mat.name, isPerfect: false, errs });
      }
    });

    if (f1 || f2) score = (f1 && f2) ? 100 : 80;
    score -= (results.filter(r => !r.isPerfect).length * 15);
    
    onComplete({
      chemResults: results,
      chemScore: Math.max(0, score),
      chemFound1: f1,
      chemFound2: f2
    });
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
            {shuffledMaterials.map(m => (
              <button key={m.id} onClick={() => {setChemMat(m.id); setValidationWarning("");}}
                className={`p-3 text-sm rounded-lg border-2 text-left ${chemMat === m.id ? 'bg-blue-50 border-blue-500 text-blue-900 font-bold' : 'border-slate-200 text-slate-600 hover:border-blue-300'}`}
              >{m.name}</button>
            ))}
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <span className="font-semibold text-slate-800 mb-3 block">2. Цвет тары:</span>
          <div className="grid grid-cols-3 gap-3">
            {shuffledColors.map(c => (
              <button key={c.id} onClick={() => {setChemCol(c.id); setValidationWarning("");}}
                className={`p-3 text-sm rounded-lg border-2 text-center flex flex-col items-center ${chemCol === c.id ? 'bg-blue-50 border-blue-500 font-bold' : 'border-slate-200 text-slate-600'}`}
              ><div className={`w-8 h-8 rounded-full border border-slate-300 mb-2 ${c.visual}`}></div>{c.name}</button>
            ))}
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <span className="font-semibold text-slate-800 mb-3 block">3. Крышка:</span>
          <div className="flex gap-3">
            {shuffledCaps.map(c => (
              <button key={c.id} onClick={() => {setChemCap(c.id); setValidationWarning("");}}
                className={`flex-1 p-3 text-sm rounded-lg border-2 text-left ${chemCap === c.id ? 'bg-blue-50 border-blue-500 font-bold' : 'border-slate-200 text-slate-600'}`}
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
          <h2 className="text-lg font-bold text-slate-800 mb-4 flex justify-between"><span>📋 Ваши ответы</span><span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">{chemCart.length}</span></h2>
          <div className="flex-1 space-y-2 mb-6">
            {chemCart.length === 0 ? (
               <div className="text-center text-slate-400 text-sm p-4 border-2 border-dashed border-slate-200 rounded-lg">Нет добавленных вариантов.</div>
            ) : (
              chemCart.map((item, idx) => (
                <div key={idx} className="bg-white p-3 rounded border border-slate-200 text-xs relative">
                  <b>Вар. {idx + 1}:</b> {item.mat.name}, {item.col.name}, {item.vol} л.
                  <button onClick={() => setChemCart(chemCart.filter((_,i) => i !== idx))} className="absolute top-2 right-2 text-red-500">✖</button>
                </div>
              ))
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