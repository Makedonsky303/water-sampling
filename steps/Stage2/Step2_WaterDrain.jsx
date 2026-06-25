'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FaucetSVG } from '../../components/FaucetSVG';
import MinecraftInventory from '../../components/inventory/MinecraftInventory';
import { useInventoryContext } from '../../components/inventory/InventoryContext';
import { getItemDef, renderItemIcon } from '../../components/inventory/itemRegistry';
import { FollowCursor } from '../../components/inventory/FollowCursor';

const REAL_TIMER_MS = 5000;

const DRAIN_REQUIREMENTS = {
  chem: { minSec: 120, maxSec: 180, label: '2–3 минуты' },
  bio:  { minSec: 600, maxSec: null, label: 'не менее 10 минут на максимальном напоре' },
};

export default function Step2_WaterDrain({ logs, onComplete }) {
  const inv = useInventoryContext();
  const [analysisGoal, setAnalysisGoal] = useState(null); // 'leaching' (металлы) или 'network' (качество в сети)
  const [analysisType, setAnalysisType] = useState(null); // 'chem' или 'bio'
  
  const [currentFlow, setCurrentFlow] = useState(0);
  
  const [timerRunning, setTimerRunning] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [drainComplete, setDrainComplete] = useState(false);
  const [drainDurationSet, setDrainDurationSet] = useState(null);
  const [warningMessage, setWarningWarning] = useState("");

  const intervalRef = useRef(null);
  const timerStartRef = useRef(null);
  const durationAtStartRef = useRef(0);
  const minFlowDuringDrainRef = useRef(1);

  const currentFlowRef = useRef(currentFlow);

  useEffect(() => {
    currentFlowRef.current = currentFlow;
  }, [currentFlow]);

  useEffect(() => {
    if (inv.activeItemDef) {
      document.body.style.cursor = 'none';
    } else {
      document.body.style.cursor = 'auto';
    }
    return () => { document.body.style.cursor = 'auto'; };
  }, [inv.activeItemDef]);

  const clampDuration = (secs) => Math.max(1, Math.min(99 * 60 + 59, secs));

  const setDurationParts = useCallback((minutes, seconds) => {
    const total = clampDuration(minutes * 60 + seconds);
    setSecondsLeft(total);
    setTotalDuration(total);
    setTimerRunning(false);
    setDrainComplete(false);
    setDrainDurationSet(null);
    setWarningWarning("");
  }, []);

  useEffect(() => {
    if (analysisType) {
      setDrainDurationSet(null);
      const defaultDuration = analysisType === 'bio' ? 600 : 180;
      setDurationParts(Math.floor(defaultDuration / 60), defaultDuration % 60);
    }
  }, [analysisType, setDurationParts]);

  useEffect(() => {
    if (!timerRunning) {
      clearInterval(intervalRef.current);
      return;
    }

    timerStartRef.current = Date.now();
    const durationAtStart = durationAtStartRef.current;

    intervalRef.current = setInterval(() => {
      const flow = currentFlowRef.current;
      const type = analysisType;

      if (flow < 0.1) {
        setTimerRunning(false);
        setWarningWarning("⚠️ Вода перекрыта! Слив приостановлен.");
        return;
      }

      if (type === 'bio' && flow < 0.8) {
        setTimerRunning(false);
        setWarningWarning("⚠️ Напор снижен! Для бактериологии сливайте на максимальном напоре.");
        return;
      }

      minFlowDuringDrainRef.current = Math.min(minFlowDuringDrainRef.current, flow);
      setWarningWarning("");

      const elapsed = Date.now() - timerStartRef.current;
      const progress = Math.min(elapsed / REAL_TIMER_MS, 1);
      const remaining = Math.max(0, Math.ceil(durationAtStart * (1 - progress)));

      setSecondsLeft(remaining);

      if (progress >= 1) {
        clearInterval(intervalRef.current);
        setTimerRunning(false);
        setSecondsLeft(0);
        setDrainComplete(true);
      }
    }, 50);

    return () => clearInterval(intervalRef.current);
  }, [timerRunning, analysisType]);

  const adjustMinutes = (delta) => {
    if (timerRunning || drainComplete) return;
    const mins = Math.floor(secondsLeft / 60);
    const secs = secondsLeft % 60;
    setDurationParts(mins + delta, secs);
  };

  const adjustSeconds = (delta) => {
    if (timerRunning || drainComplete) return;
    const mins = Math.floor(secondsLeft / 60);
    const secs = secondsLeft % 60;
    let nextSecs = secs + delta;
    let nextMins = mins;
    if (nextSecs >= 60) { nextMins += 1; nextSecs = 0; }
    if (nextSecs < 0) { nextMins -= 1; nextSecs = 59; }
    setDurationParts(nextMins, nextSecs);
  };

  const handleStartTimer = () => {
    if (currentFlow < 0.1) {
      setWarningWarning("⚠️ Сначала откройте кран смесителя!");
      return;
    }
    if (analysisType === 'bio' && currentFlow < 0.8) {
      setWarningWarning("⚠️ Откройте кран на максимум! Бактериологический слив требует полного напора.");
      return;
    }
    setWarningWarning("");
    durationAtStartRef.current = secondsLeft;
    minFlowDuringDrainRef.current = currentFlow;
    setDrainDurationSet(secondsLeft);
    setTotalDuration(secondsLeft);
    setTimerRunning(true);
  };

  const handlePauseTimer = () => {
    setTimerRunning(false);
  };

  const handleResetTimer = () => {
    setTimerRunning(false);
    setSecondsLeft(totalDuration);
    setDrainComplete(false);
    setDrainDurationSet(null);
    setWarningWarning("");
  };

  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const validateDrainTime = (type, durationSec, minFlow) => {
    const errs = [];
    let penalty = 0;
    const req = DRAIN_REQUIREMENTS[type];
    if (!req || durationSec == null) return { errs, penalty };

    if (durationSec < req.minSec) {
      errs.push(`Неверное время слива: для ${type === 'chem' ? 'химического' : 'бактериологического'} анализа нужно ${req.label}. Вы задали ${formatTime(durationSec)}.`);
      penalty += type === 'bio' ? 25 : 15;
    } else if (req.maxSec && durationSec > req.maxSec) {
      errs.push(`Слишком долгий слив: для химического анализа достаточно ${req.label}. Вы задали ${formatTime(durationSec)}.`);
      penalty += 10;
    }

    if (type === 'bio' && minFlow < 0.8) {
      errs.push('Нарушение регламента: бактериологический слив должен выполняться на максимальном напоре (кран открыт полностью).');
      penalty += 15;
    }

    return { errs, penalty };
  };

  const handleCompleteStep = () => {
    let scorePenalty = 0;
    let errors = [];

    if (analysisGoal === 'leaching') {
      // Сценарий А: Контроль вымывания металлов
      if (currentFlow > 0.05 && !drainComplete) {
        // Отлично: пользователь приоткрыл кран и сразу набрал первую застойную струю
        if (currentFlow > 0.6) {
          errors.push("Нарушение отбора: При оценке вымывания металлов первую струю нужно отбирать при слабом или умеренном напоре, чтобы не смыть налет со стенок труб.");
          scorePenalty += 15;
        }
      } else if (drainComplete) {
        errors.push("Критическая ошибка: Вы выполнили предварительный слив при оценке вымывания металлов! Вся застойная вода с вымытыми металлами ушла в канализацию, анализ будет ложным.");
        scorePenalty += 40;
      } else {
        errors.push("Ошибка: Вы не открыли кран для отбора первой застойной струи.");
        scorePenalty += 20;
      }
    } else {
      // Сценарий Б: Оценка качества воды в сети (нужен слив)
      if (!drainComplete) {
        errors.push("Критическая ошибка: Вы не выполнили или не завершили предварительный слив воды! В бутыль попадет застоявшаяся вода из труб квартиры, а не чистая вода из городской сети.");
        scorePenalty += 40;
      } else {
        const { errs, penalty } = validateDrainTime(
          analysisType,
          drainDurationSet,
          minFlowDuringDrainRef.current
        );
        errors.push(...errs);
        scorePenalty += penalty;
      }
    }

    onComplete({
      drainErrors: errors,
      drainScorePenalty: scorePenalty,
      drainGoal: analysisGoal,
      drainType: analysisType,
      drainDurationSet,
      drainSuccess: scorePenalty === 0
    });
  };

  return (
    <div className="bg-white w-full max-w-6xl rounded-xl shadow-xl border border-slate-200 overflow-hidden mb-6 flex flex-col lg:flex-row animate-fade-in">
      
      {/* ЛЕВАЯ КОЛОНКА: ВЫБОР ЦЕЛИ И ИНСТРУКЦИЯ */}
      <div className="w-full lg:w-1/3 p-8 border-r border-slate-100 bg-slate-50 flex flex-col gap-6">
        <div className="space-y-4">
          <div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">ШАГ 2.2</span>
            <h2 className="text-2xl font-bold text-slate-800 mt-3">Слив и застойный фактор</h2>
            <p className="text-slate-500 text-xs mt-1">Определите цель вашего исследования и подготовьте воду к отбору проб.</p>
          </div>
          <button onClick={inv.openInventory}
            className="w-full py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-md active:scale-95"
            style={{ background: 'linear-gradient(135deg,#1e3a5f,#1e40af)', color: 'white' }}>
            <span className="text-xl">🗃️</span>
            Открыть инвентарь
            <span className="ml-1 text-xs opacity-60 font-mono bg-white/10 px-1.5 py-0.5 rounded">E / У</span>
          </button>

          {/* Hotbar quick access */}
          <div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1.5">В руке — <span className="text-slate-300 font-mono">← →</span></p>
            <div className="grid grid-cols-9 gap-1 p-2 rounded-xl bg-slate-900">
              {inv.slots.slice(0, 9).map((item, i) => (
                <div key={i}
                  className={`h-9 rounded-lg border-2 flex items-center justify-center text-base transition-all cursor-pointer
                    ${i === inv.hotbarActive
                      ? 'border-yellow-400 bg-slate-700 scale-110 shadow-lg shadow-yellow-400/20'
                      : 'border-slate-700 bg-slate-800'}`}
                  onClick={() => inv.setHotbarActive(i)}>
                  {renderItemIcon(item, 18)}
                </div>
              ))}
            </div>
            <div className="mt-1.5 text-center text-xs text-slate-400 min-h-[1rem]">{inv.activeItemDef?.label || ''}</div>
          </div>
        </div>

        {/* Выбор цели */}
        <div className="space-y-3">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block">1. Выберите цель анализа:</label>
          
          <button 
            onClick={() => { setAnalysisGoal('leaching'); setAnalysisType(null); }}
            className={`w-full p-4 rounded-xl border text-left transition-all flex items-start gap-3
              ${analysisGoal === 'leaching' ? 'bg-amber-50 border-amber-400 shadow-md scale-[1.01]' : 'bg-white border-slate-200 hover:border-amber-200'}`}
          >
            <span className="text-2xl">🧱</span>
            <div>
              <p className="font-bold text-sm text-slate-800">Вымывание металлов из труб</p>
              <p className="text-[10px] text-slate-500 mt-0.5">Оцениваем, выделяют ли трубы свинец, медь или цинк в воду. Нужна ПЕРВАЯ («застойная») струя.</p>
            </div>
          </button>

          <button 
            onClick={() => { setAnalysisGoal('network'); }}
            className={`w-full p-4 rounded-xl border text-left transition-all flex items-start gap-3
              ${analysisGoal === 'network' ? 'bg-sky-50 border-blue-400 shadow-md scale-[1.01]' : 'bg-white border-slate-200 hover:border-blue-200'}`}
          >
            <span className="text-2xl">🌍</span>
            <div>
              <p className="font-bold text-sm text-slate-800">Качество воды в городской сети</p>
              <p className="text-[10px] text-slate-500 mt-0.5">Оцениваем воду, поступающую с водоканала. Застойную воду из труб квартиры нужно полностью СЛИТЬ.</p>
            </div>
          </button>
        </div>

        {/* Выбор типа анализа */}
        {analysisGoal === 'network' && (
          <div className="space-y-2 animate-fade-in">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block">2. Выберите тип проводимого анализа:</label>
            <div className="grid grid-cols-2 gap-2">
              <button 
                onClick={() => setAnalysisType('chem')}
                className={`py-3 rounded-lg border font-bold text-xs transition-all
                  ${analysisType === 'chem' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-600 border-slate-200'}`}
              >
                🧪 Химический
              </button>
              <button 
                onClick={() => setAnalysisType('bio')}
                className={`py-3 rounded-lg border font-bold text-xs transition-all
                  ${analysisType === 'bio' ? 'bg-cyan-600 text-white border-cyan-600' : 'bg-white text-slate-600 border-slate-200'}`}
              >
                🧫 Бактериологический
              </button>
            </div>
            {analysisType && (
              <p className="text-[10px] text-slate-500 leading-relaxed">
                {analysisType === 'chem'
                  ? 'Откройте кран, задайте таймер на 2–3 минуты и запустите слив.'
                  : 'Откройте кран полностью, задайте таймер не менее 10 минут и запустите слив.'}
              </p>
            )}
          </div>
        )}

      </div>

      {/* ЦЕНТРАЛЬНАЯ КОЛОНКА: СМЕСИТЕЛЬ */}
      <div className="w-full lg:w-1/3 p-6 bg-white flex flex-col items-center justify-center border-r border-slate-100 min-h-[450px]">
        <div className="w-full flex justify-between items-center mb-4">
          <span className="text-xs font-bold text-slate-400">ИНТЕРАКТИВНЫЙ СМЕСИТЕЛЬ</span>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          </div>
        </div>

        <div className="w-full flex-1 flex items-center justify-center">
          <FaucetSVG 
            aeratorRemoved={true}
            showAeratorRemovedBadge={false} 
            spotsLeft={0} 
            isWiping={false}
            onRemoveAerator={()=>{}}
            onWipeSpot={()=>{}} 
            glovesEquipped={true}
            blocked={!analysisGoal} 
            onFlowChange={(flow) => setCurrentFlow(flow)}
          />
        </div>
      </div>

      <MinecraftInventory
        slots={inv.slots}
        selectedSlot={inv.selectedSlot}
        draggedSlot={inv.draggedSlot}
        equippedHelmet={inv.equippedHelmet}
        equippedGloves={inv.equippedGloves}
        onSlotClick={inv.handleSlotClick}
        onSlotRightClick={inv.handleSlotRightClick}
        onDragStart={inv.handleDragStart}
        onDrop={inv.handleDrop}
        onDragEnd={inv.handleDragEnd}
        isOpen={inv.isOpen}
        onClose={inv.closeInventory}
      />

      {/* ПРАВАЯ КОЛОНКА: СМАРТФОН С ТАЙМЕРОМ */}
      <div className="w-full lg:w-1/3 p-8 bg-slate-50 flex flex-col justify-between items-center">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 w-full">3. Контроль времени (Смартфон)</h3>

        {/* Смартфон */}
        <div className="w-64 h-[350px] bg-slate-900 rounded-[36px] p-3 shadow-2xl border-4 border-slate-800 flex flex-col relative overflow-hidden my-auto">
          {/* Динамик */}
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-slate-800 rounded-b-xl z-20"></div>
          
          <div className="bg-slate-950 flex-1 rounded-[28px] p-4 flex flex-col justify-between items-center text-center border border-slate-800">
            <div className="mt-6">
              <span className="text-[9px] font-mono text-slate-500 tracking-widest uppercase block">ТАЙМЕР СЛИВА</span>
              <span className="text-xs font-semibold text-sky-400 mt-1 block">
                {analysisType === 'chem' && "🧪 ХИМИЧЕСКИЙ АНАЛИЗ"}
                {analysisType === 'bio' && "🧫 БАКТЕРИОЛОГИЯ"}
                {!analysisType && "ОЖИДАНИЕ ВЫБОРА"}
              </span>
            </div>

            {/* Циферблат с настройкой времени */}
            <div className="my-auto w-full">
              {!timerRunning && !drainComplete && analysisType ? (
                <div className="flex items-center justify-center gap-3">
                  <div className="flex flex-col items-center gap-0.5">
                    <button type="button" onClick={() => adjustMinutes(1)}
                      className="text-slate-400 hover:text-white text-xs px-2 py-0.5 transition-colors">▲</button>
                    <span className="text-4xl font-mono font-black text-white w-14 text-center">
                      {Math.floor(secondsLeft / 60).toString().padStart(2, '0')}
                    </span>
                    <button type="button" onClick={() => adjustMinutes(-1)}
                      className="text-slate-400 hover:text-white text-xs px-2 py-0.5 transition-colors">▼</button>
                  </div>
                  <span className="text-4xl font-mono font-black text-slate-500">:</span>
                  <div className="flex flex-col items-center gap-0.5">
                    <button type="button" onClick={() => adjustSeconds(15)}
                      className="text-slate-400 hover:text-white text-xs px-2 py-0.5 transition-colors">▲</button>
                    <span className="text-4xl font-mono font-black text-white w-14 text-center">
                      {(secondsLeft % 60).toString().padStart(2, '0')}
                    </span>
                    <button type="button" onClick={() => adjustSeconds(-15)}
                      className="text-slate-400 hover:text-white text-xs px-2 py-0.5 transition-colors">▼</button>
                  </div>
                </div>
              ) : (
                <div className="text-5xl font-mono font-black text-white tracking-widest text-center">
                  {formatTime(secondsLeft)}
                </div>
              )}
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-3 max-w-[140px] mx-auto">
                <div 
                  className="bg-sky-500 h-full transition-all duration-300"
                  style={{ width: `${totalDuration ? (secondsLeft / totalDuration) * 100 : 0}%` }}
                ></div>
              </div>
            </div>

            {/* Управление */}
            <div className="w-full space-y-2 mb-2">
              {warningMessage && (
                <p className="text-[9px] font-bold text-rose-400 leading-tight bg-rose-950/40 p-2 rounded border border-rose-900/50 animate-bounce">
                  {warningMessage}
                </p>
              )}

              {drainComplete ? (
                <div className="bg-emerald-950/60 border border-emerald-800 p-2 rounded-lg text-emerald-400 font-bold text-[10px] tracking-wide">
                  ✓ СЛИВ ВОДЫ ЗАВЕРШЕН
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  <button 
                    disabled={!analysisType || timerRunning}
                    onClick={handleStartTimer}
                    className="bg-sky-600 hover:bg-sky-500 text-white font-bold py-2 rounded-lg text-[10px] uppercase transition-all disabled:opacity-40"
                  >
                    Старт
                  </button>
                  <button 
                    disabled={!timerRunning}
                    onClick={handlePauseTimer}
                    className="bg-amber-600 hover:bg-amber-500 text-white font-bold py-2 rounded-lg text-[10px] uppercase transition-all disabled:opacity-40"
                  >
                    Пауза
                  </button>
                </div>
              )}
              
              <button 
                disabled={!analysisType || secondsLeft === totalDuration}
                onClick={handleResetTimer}
                className="w-full text-slate-500 hover:text-slate-300 font-bold text-[9px] uppercase tracking-wider transition-all"
              >
                Сбросить таймер
              </button>
            </div>
          </div>
        </div>

        {/* Кнопка отправки шага */}
        <div className="w-full mt-6">
          <button 
            disabled={!analysisGoal}
            onClick={handleCompleteStep}
            className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-4 rounded-xl shadow-md transition-all disabled:opacity-40"
          >
            {analysisGoal === 'leaching' ? 'Отобрать первую струю →' : 'Завершить этап слива →'}
          </button>
        </div>
      </div>

      <FollowCursor activeItemDef={inv.activeItemDef} activeItem={inv.activeItem} replaceCursor={true} />
    </div>
  );
}