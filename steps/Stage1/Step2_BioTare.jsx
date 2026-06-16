// steps/Stage1/Step2_BioTare.jsx
'use client';
import React, { useState, useEffect } from 'react';
import { BIO_MATERIALS, BIO_CAPS, BIO_ADDITIVES } from '../../data/constants';

// Функция для перемешивания элементов
const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

export default function Step2_BioTare({savedData, onComplete }) {
  // Перемешиваем массивы только один раз при загрузке экрана
  const [shuffledMaterials, setShuffledMaterials] = useState(BIO_MATERIALS);
  const [shuffledCaps, setShuffledCaps] = useState(BIO_CAPS);
  const [shuffledAdditives, setShuffledAdditives] = useState(BIO_ADDITIVES);

  const [bioMat, setBioMat] = useState(null);
  const [bioCap, setBioCap] = useState(null);
  const [bioAdd, setBioAdd] = useState(null);
  const [bioVol, setBioVol] = useState(0.1);
  const [validationWarning, setValidationWarning] = useState("");
  const [bioCart, setBioCart] = useState(savedData.bioResults || []);

  useEffect(() => {
    setShuffledMaterials(shuffleArray(BIO_MATERIALS));
    setShuffledCaps(shuffleArray(BIO_CAPS));
    setShuffledAdditives(shuffleArray(BIO_ADDITIVES));
  }, []);

  const handleAddBio = () => {
    if (!bioMat || !bioCap || !bioAdd) { 
      setValidationWarning("Выберите материал, герметизацию и добавку."); 
      return; 
    }
    setValidationWarning("");
    setBioCart([...bioCart, {
      mat: BIO_MATERIALS.find(m => m.id === bioMat),
      cap: BIO_CAPS.find(c => c.id === bioCap),
      add: BIO_ADDITIVES.find(a => a.id === bioAdd),
      vol: bioVol
    }]);
  };

  const handleCompleteBio = () => {
    if (bioCart.length === 0) { 
      setValidationWarning("Добавьте хотя бы один вариант тары в список ответов."); 
      return; 
    }
    
    let score = 0; 
    let f1 = false; 
    let f2 = false; 
    let results = [];
    
    bioCart.forEach((item, idx) => {
      let errs = [];
      if (item.vol !== 0.5) errs.push(`Объем ${item.vol} л. (по ГОСТу требуется 0.5 л).`);
      if (!item.mat.isCorrect) errs.push(item.mat.error);
      if (!item.cap.isCorrect) errs.push(item.cap.error);
      if (!item.add.isCorrect) errs.push(item.add.error);

      if (errs.length === 0) {
        if (item.mat.id === 'glass_boro') f1 = true;
        if (item.mat.id === 'plastic_thermo') f2 = true;
        results.push({ id: idx + 1, name: item.mat.name, isPerfect: true, errs: [] });
      } else {
        results.push({ id: idx + 1, name: item.mat.name, isPerfect: false, errs });
      }
    });

    if (f1 || f2) score = (f1 && f2) ? 100 : 80;
    score -= (results.filter(r => !r.isPerfect).length * 15);
    
    onComplete({
      bioResults: bioCart,
      bioScore: Math.max(0, score),
      bioFound1: f1,
      bioFound2: f2
    });
  };

  const actBioMat = BIO_MATERIALS.find(m => m.id === bioMat);
  const actBioAdd = BIO_ADDITIVES.find(a => a.id === bioAdd);

  return (
    <div className="bg-white w-full max-w-6xl rounded-b-xl rounded-tr-xl shadow-xl border border-slate-200 flex flex-col xl:flex-row mb-6 overflow-hidden">
      
      {/* КОНСТРУКТОР БАКТЕРИОЛОГИИ */}
      <div className="w-full xl:w-2/3 p-8 border-r border-slate-100 bg-cyan-50/30 flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-bold text-cyan-900 mb-1">Конструктор (Бактериология)</h2>
          <p className="text-slate-500 text-sm">Внимание: для бактериологии критична стерильность и сохранение микроорганизмов во время транспортировки.</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <span className="font-semibold text-slate-800 mb-3 block">1. Материал флакона:</span>
          <div className="grid grid-cols-2 gap-3">
            {shuffledMaterials.map(m => (
              <button key={m.id} onClick={() => {setBioMat(m.id); setValidationWarning("");}}
                className={`p-3 text-sm rounded-lg border-2 text-left ${bioMat === m.id ? 'bg-cyan-50 border-cyan-500 text-cyan-900 font-bold' : 'border-slate-200 text-slate-600 hover:border-cyan-300'}`}
              >{m.name}</button>
            ))}
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <span className="font-semibold text-slate-800 mb-3 block">2. Герметизация:</span>
          <div className="flex gap-3">
            {shuffledCaps.map(c => (
              <button key={c.id} onClick={() => {setBioCap(c.id); setValidationWarning("");}}
                className={`flex-1 p-3 text-sm rounded-lg border-2 text-left ${bioCap === c.id ? 'bg-cyan-50 border-cyan-500 font-bold text-cyan-900' : 'border-slate-200 text-slate-600'}`}
              >{c.name}</button>
            ))}
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <span className="font-semibold text-slate-800 mb-3 block">3. Добавка внутрь флакона:</span>
          <div className="grid grid-cols-3 gap-3">
            {shuffledAdditives.map(a => (
              <button key={a.id} onClick={() => {setBioAdd(a.id); setValidationWarning("");}}
                className={`p-3 text-xs rounded-lg border-2 text-center flex flex-col items-center justify-center ${bioAdd === a.id ? 'bg-cyan-50 border-cyan-500 font-bold' : 'border-slate-200 text-slate-600'}`}
              >
                <span className="mb-1 text-cyan-900">{a.name}</span>
                <span className="text-[10px] text-state-400 text-cyan-900">({a.desc})</span>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1 w-full">
            <span className="font-semibold text-slate-800 block mb-2">4. Вместимость: <span className="text-cyan-600 ml-2">{bioVol.toFixed(1)} л</span></span>
            <input type="range" min="0.1" max="1.0" step="0.1" value={bioVol} onChange={(e) => setBioVol(parseFloat(e.target.value))} className="w-full h-3 bg-slate-200 rounded-lg cursor-pointer accent-cyan-600"/>
          </div>
          <button onClick={handleAddBio} className="w-full md:w-1/3 bg-cyan-100 hover:bg-cyan-200 text-cyan-800 font-bold py-4 rounded-xl">+ Добавить</button>
        </div>
      </div>

      {/* КОРЗИНА БАКТЕРИОЛОГИИ */}
      <div className="w-full xl:w-1/3 flex flex-col">
        <div className="p-8 bg-white border-b border-slate-100">
          <h2 className="text-lg font-bold text-slate-800 mb-4">🧫 Превью (Био)</h2>
          <div className="flex justify-center mb-4">
            <div className="relative w-20 h-32 border-4 border-slate-300 rounded-t-3xl rounded-b-xl bg-slate-50 flex flex-col justify-end overflow-hidden">
              {bioCap === 'silicone_foil' && <div className="absolute top-0 w-full h-6 bg-gray-300 border-b-2 border-gray-400 shadow-md z-10"></div>}
              {bioCap === 'screw_plastic' && <div className="absolute top-0 w-full h-4 bg-blue-500 z-10"></div>}
              {bioCap === 'cotton' && <div className="absolute top-0 w-full h-6 bg-yellow-50 opacity-80 border-b border-dashed border-yellow-200 z-10"></div>}
              
              <div className={`absolute top-0 w-full h-full ${actBioMat ? actBioMat.visual : 'bg-transparent'}`}></div>
              
              {actBioAdd && actBioAdd.id !== 'none' && (
                <div className={`w-full h-4 z-20 flex items-center justify-center border-t border-slate-200 ${actBioAdd.visual}`}>
                  <span className="text-[8px] font-bold opacity-60">{actBioAdd.id === 'thiosulfate' ? 'Na₂S₂O₃' : 'HNO₃'}</span>
                </div>
              )}

              <div className="absolute bottom-6 left-1 bg-white/90 px-1 rounded text-[10px] font-black z-20 border border-slate-300">{bioVol.toFixed(1)}L</div>
            </div>
          </div>
        </div>
        
        <div className="p-8 bg-slate-50 flex-1 flex flex-col">
          <h2 className="text-lg font-bold text-slate-800 mb-4 flex justify-between"><span>📋 Ваши ответы</span><span className="bg-cyan-600 text-white text-xs px-2 py-1 rounded-full">{bioCart.length}</span></h2>
          <div className="flex-1 space-y-2 mb-6">
            {bioCart.length === 0 ? (
               <div className="text-center text-slate-400 text-sm p-4 border-2 border-dashed border-slate-200 rounded-lg">Нет добавленных вариантов.</div>
            ) : (
              bioCart.map((item, idx) => (
                <div key={idx} className="bg-white p-3 rounded border border-slate-200 text-xs relative">
                  <b>Вар. {idx + 1}:</b> {item.mat.name}, {item.add.name}, {item.vol} л.
                  <button onClick={()=>setBioCart(bioCart.filter((_,i)=>i!==idx))} className="absolute top-2 right-2 text-red-500">✖</button>
                </div>
              ))
            )}
          </div>
          <div className="mt-auto">
            {validationWarning && <p className="text-red-500 text-xs font-bold mb-2 text-center">{validationWarning}</p>}
            <button onClick={handleCompleteBio} className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-4 rounded-xl shadow-md transition-all">Завершить Бактериологию→</button>
          </div>
        </div>
      </div>

    </div>
  );
}