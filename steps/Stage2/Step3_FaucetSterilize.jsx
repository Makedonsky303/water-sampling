// steps/Stage2/Step3_FaucetSterilize.jsx
'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FaucetSVG } from '../../components/FaucetSVG';
import MinecraftInventory from '../../components/inventory/MinecraftInventory';
import { useInventoryContext } from '../../components/inventory/InventoryContext';
import { getItemDef } from '../../components/inventory/itemRegistry';
import { FollowCursor } from '../../components/inventory/FollowCursor';

const REAL_TIMER_MS = 5000;

const STERILIZE_REQUIREMENTS = {
  metal:   { minSec: 20, maxSec: 30, label: '20–30 секунд' },
  plastic: { minSec: 15, maxSec: null, label: 'интенсивная обработка салфеткой' },
};

const COOLING_REQUIREMENT = { targetSec: 60, label: '1 минута' };

const hasItemInInventory = (slots, itemId) =>
  slots.some((item) => item?.id === itemId);

export default function Step3_FaucetSterilize({ logs, onComplete }) {
  const inv = useInventoryContext();

  const [faucetType, setFaucetType] = useState(null);
  const [currentFlow, setCurrentFlow] = useState(0);

  // selection → sterilize_ready → sterilizing → cooling_ready → cooling → done
  const [phase, setPhase] = useState('selection');
  const [burnerLit, setBurnerLit] = useState(false);
  const [isFlameOn, setIsFlameOn] = useState(false);
  const [isWipeApplied, setIsWipeActive] = useState(false);

  const [timerRunning, setTimerRunning] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [sterilizeDurationSet, setSterilizeDurationSet] = useState(null);
  const [coolingDurationSet, setCoolingDurationSet] = useState(null);
  const [warningMessage, setWarningMessage] = useState('');

  const intervalRef = useRef(null);
  const timerStartRef = useRef(null);
  const durationAtStartRef = useRef(0);
  const phaseRef = useRef(phase);
  const minFlowDuringCoolingRef = useRef(1);
  const currentFlowRef = useRef(currentFlow);

  useEffect(() => { currentFlowRef.current = currentFlow; }, [currentFlow]);
  useEffect(() => { phaseRef.current = phase; }, [phase]);

  useEffect(() => {
    if (inv.activeItemDef) {
      document.body.style.cursor = 'none';
    } else {
      document.body.style.cursor = 'auto';
    }
    return () => { document.body.style.cursor = 'auto'; };
  }, [inv.activeItemDef]);

  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const clampSeconds = (secs, min = 1, max = 99 * 60 + 59) =>
    Math.max(min, Math.min(max, secs));

  const resetTimerUi = useCallback((duration) => {
    setSecondsLeft(duration);
    setTotalDuration(duration);
    setTimerRunning(false);
    setWarningMessage('');
  }, []);

  const finishTimerPhase = useCallback(() => {
    const currentPhase = phaseRef.current;
    setTimerRunning(false);
    setIsFlameOn(false);
    setIsWipeActive(false);
    setSecondsLeft(0);

    if (currentPhase === 'sterilizing') {
      if (faucetType === 'metal') {
        setPhase('cooling_ready');
        resetTimerUi(COOLING_REQUIREMENT.targetSec);
      } else {
        setPhase('done');
      }
      return;
    }

    if (currentPhase === 'cooling') {
      setPhase('done');
    }
  }, [faucetType, resetTimerUi]);

  useEffect(() => {
    if (!timerRunning) {
      clearInterval(intervalRef.current);
      return;
    }

    timerStartRef.current = Date.now();
    const durationAtStart = durationAtStartRef.current;

    intervalRef.current = setInterval(() => {
      const flow = currentFlowRef.current;
      const currentPhase = phaseRef.current;

      if (currentPhase === 'sterilizing' && flow > 0.02) {
        setTimerRunning(false);
        setIsFlameOn(false);
        setIsWipeActive(false);
        setWarningMessage('⚠️ Вода не должна течь во время стерилизации! Закройте кран.');
        return;
      }

      if (currentPhase === 'cooling') {
        if (flow < 0.2) {
          setTimerRunning(false);
          setWarningMessage('⚠️ Откройте кран наполовину (слабой струей), чтобы охладить металл!');
          return;
        }
        if (flow > 0.7) {
          setTimerRunning(false);
          setWarningMessage('⚠️ Напор слишком сильный! Приоткройте кран наполовину.');
          return;
        }
        minFlowDuringCoolingRef.current = Math.min(minFlowDuringCoolingRef.current, flow);
      }

      setWarningMessage('');

      const elapsed = Date.now() - timerStartRef.current;
      const progress = Math.min(elapsed / REAL_TIMER_MS, 1);
      const remaining = Math.max(0, Math.ceil(durationAtStart * (1 - progress)));
      setSecondsLeft(remaining);

      if (progress >= 1) {
        clearInterval(intervalRef.current);
        finishTimerPhase();
      }
    }, 50);

    return () => clearInterval(intervalRef.current);
  }, [timerRunning, finishTimerPhase]);

  const handleSelectType = (type) => {
    setFaucetType(type);
    setPhase('sterilize_ready');
    setBurnerLit(false);
    setSterilizeDurationSet(null);
    setCoolingDurationSet(null);
    setWarningMessage('');
    resetTimerUi(type === 'metal' ? 25 : 20);
  };

  const handleLightBurner = () => {
    if (!hasItemInInventory(inv.slots, 'gas_burner')) {
      setWarningMessage('⚠️ Возьмите портативную горелку из инвентаря!');
      return;
    }
    if (inv.activeItem?.id !== 'gas_burner') {
      setWarningMessage('⚠️ Горелка должна быть в руке (выберите в hotbar).');
      return;
    }
    if (currentFlow > 0.02) {
      setWarningMessage('⚠️ Закройте кран перед включением горелки!');
      return;
    }
    setBurnerLit(true);
    setWarningMessage('');
  };

  const adjustSterilizeSeconds = (delta) => {
    if (timerRunning || phase !== 'sterilize_ready') return;
    const next = faucetType === 'metal'
      ? clampSeconds(secondsLeft + delta, 20, 30)
      : clampSeconds(secondsLeft + delta, 10, 60);
    resetTimerUi(next);
  };

  const adjustCoolingTime = (deltaMinutes) => {
    if (timerRunning || phase !== 'cooling_ready') return;
    const mins = Math.floor(secondsLeft / 60) + deltaMinutes;
    const secs = secondsLeft % 60;
    const total = clampSeconds(mins * 60 + secs, 30, 180);
    resetTimerUi(total);
  };

  const handleStartSterilization = () => {
    if (currentFlow > 0.02) {
      setWarningMessage('⚠️ Закройте кран перед стерилизацией!');
      return;
    }

    if (faucetType === 'metal') {
      if (!burnerLit) {
        setWarningMessage('⚠️ Сначала включите газовую горелку!');
        return;
      }
      if (secondsLeft < STERILIZE_REQUIREMENTS.metal.minSec || secondsLeft > STERILIZE_REQUIREMENTS.metal.maxSec) {
        setWarningMessage('⚠️ Задайте время обжига: 20–30 секунд.');
        return;
      }
      setIsFlameOn(true);
    } else {
      if (!hasItemInInventory(inv.slots, 'isop_wipes')) {
        setWarningMessage('⚠️ Возьмите спиртовую салфетку (70%) из инвентаря!');
        return;
      }
      if (inv.activeItem?.id !== 'isop_wipes') {
        setWarningMessage('⚠️ Салфетка должна быть в руке (выберите в hotbar).');
        return;
      }
      setIsWipeActive(true);
    }

    setWarningMessage('');
    durationAtStartRef.current = secondsLeft;
    setSterilizeDurationSet(secondsLeft);
    setTotalDuration(secondsLeft);
    setPhase('sterilizing');
    setTimerRunning(true);
  };

  const handleStartCooling = () => {
    if (currentFlow < 0.2 || currentFlow > 0.7) {
      setWarningMessage('⚠️ Приоткройте кран наполовину (слабой струей)!');
      return;
    }
    if (secondsLeft !== COOLING_REQUIREMENT.targetSec) {
      setWarningMessage(`⚠️ Задайте таймер на ${COOLING_REQUIREMENT.label} для охлаждения металла.`);
      return;
    }

    setWarningMessage('');
    durationAtStartRef.current = secondsLeft;
    minFlowDuringCoolingRef.current = currentFlow;
    setCoolingDurationSet(secondsLeft);
    setTotalDuration(secondsLeft);
    setPhase('cooling');
    setTimerRunning(true);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setTimerRunning(false);
    setIsFlameOn(false);
    setIsWipeActive(false);
    setBurnerLit(false);
    setFaucetType(null);
    setPhase('selection');
    setSecondsLeft(0);
    setTotalDuration(0);
    setSterilizeDurationSet(null);
    setCoolingDurationSet(null);
    setWarningMessage('');
  };

  const handleCompleteStep = () => {
    const errors = [];
    let scorePenalty = 0;

    if (phase !== 'done') {
      errors.push('Критическая ошибка: Технологический процесс стерилизации крана не был завершён.');
      scorePenalty += 40;
    }

    if (faucetType === 'metal' && sterilizeDurationSet != null) {
      const req = STERILIZE_REQUIREMENTS.metal;
      if (sterilizeDurationSet < req.minSec || sterilizeDurationSet > req.maxSec) {
        errors.push(`Неверное время обжига: нужно ${req.label}. Вы задали ${sterilizeDurationSet} с.`);
        scorePenalty += 15;
      }
      if (coolingDurationSet !== COOLING_REQUIREMENT.targetSec) {
        errors.push(`Неверное время охлаждения: нужно ${COOLING_REQUIREMENT.label} слабой струёй.`);
        scorePenalty += 15;
      }
    }

    onComplete({
      sterilizeErrors: errors,
      sterilizeScorePenalty: scorePenalty,
      faucetType,
      sterilizeSuccess: scorePenalty === 0,
    });
  };

  const canAdjustSterilize = phase === 'sterilize_ready' && !timerRunning;
  const canAdjustCooling = phase === 'cooling_ready' && !timerRunning;

  return (
    <div className="bg-white w-full max-w-6xl rounded-xl shadow-xl border border-slate-200 overflow-hidden mb-6 flex flex-col lg:flex-row animate-fade-in">

      {/* ЛЕВАЯ КОЛОНКА */}
      <div className="w-full lg:w-1/3 p-8 border-r border-slate-100 bg-slate-50 flex flex-col gap-6">
        <div className="space-y-4">
          <div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">ШАГ 2.3</span>
            <h2 className="text-2xl font-bold text-slate-800 mt-3">Стерилизация крана</h2>
            <p className="text-slate-500 text-xs mt-1">Обеззаразьте точку отбора перед взятием бактериологической пробы.</p>
          </div>
          <button onClick={inv.openInventory}
            className="w-full py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-md active:scale-95"
            style={{ background: 'linear-gradient(135deg,#1e3a5f,#1e40af)', color: 'white' }}>
            <span className="text-xl">🗃️</span>
            Открыть инвентарь
            <span className="ml-1 text-xs opacity-60 font-mono bg-white/10 px-1.5 py-0.5 rounded">E / У</span>
          </button>

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
                  {item ? (getItemDef(item)?.icon || '📦') : ''}
                </div>
              ))}
            </div>
            <div className="mt-1.5 text-center text-xs text-slate-400 min-h-[1rem]">{inv.activeItemDef?.label || ''}</div>
          </div>
        </div>

        {faucetType === null && (
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <span className="font-semibold text-slate-800 text-sm block">1. Из какого материала сделан кран?</span>
            <div className="grid grid-cols-2 gap-2">
              <button onClick={() => handleSelectType('metal')}
                className="p-3 text-xs rounded-lg border-2 text-center transition-all border-slate-200 text-slate-600 hover:border-amber-300">
                ⚙️ Металлический
              </button>
              <button onClick={() => handleSelectType('plastic')}
                className="p-3 text-xs rounded-lg border-2 text-center transition-all border-slate-200 text-slate-600 hover:border-sky-300">
                🧪 Пластиковый
              </button>
            </div>
          </div>
        )}

        {faucetType && (
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3 animate-fade-in">
            <div className="flex justify-between items-center border-b pb-2">
              <span className="font-bold text-xs text-slate-400">ПОРЯДОК ДЕЙСТВИЙ</span>
              <button onClick={handleReset} className="text-[10px] text-slate-400 hover:text-red-500 font-bold">Изменить кран 🔄</button>
            </div>

            {faucetType === 'metal' ? (
              <ol className="list-decimal pl-4 space-y-1.5 text-xs text-slate-600 leading-relaxed">
                <li>Закройте кран. Возьмите горелку из инвентаря и включите её.</li>
                <li>Обожгите край излива (носок крана) пламенем <strong>20–30 секунд</strong> до прекращения шипения влаги.</li>
                <li>Приоткройте кран наполовину и дайте воде течь <strong>1 минуту</strong>, чтобы охладить металл.</li>
              </ol>
            ) : (
              <ol className="list-decimal pl-4 space-y-1.5 text-xs text-slate-600 leading-relaxed">
                <li>Закройте кран. Возьмите спиртовую салфетку (70%) из инвентаря.</li>
                <li>Интенсивно обработайте носик крана изнутри и снаружи салфеткой.</li>
              </ol>
            )}
          </div>
        )}

        {faucetType && (
          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 text-xs">
            <p className="font-bold text-slate-800">Чек-лист:</p>
            <div className="space-y-1.5 font-medium">
              {faucetType === 'metal' && (
                <div className="flex items-center gap-2">
                  <span className={burnerLit ? 'text-emerald-500 font-bold' : 'text-slate-300'}>{burnerLit ? '✓' : '○'}</span>
                  <span className={burnerLit ? 'line-through text-slate-400' : 'text-slate-600'}>Газовая горелка включена</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <span className={phase !== 'selection' && phase !== 'sterilize_ready' && phase !== 'sterilizing' ? 'text-emerald-500 font-bold' : 'text-slate-300'}>
                  {phase !== 'selection' && phase !== 'sterilize_ready' && phase !== 'sterilizing' ? '✓' : '○'}
                </span>
                <span className={phase !== 'selection' && phase !== 'sterilize_ready' && phase !== 'sterilizing' ? 'line-through text-slate-400' : 'text-slate-600'}>
                  {faucetType === 'metal' ? 'Обжиг носка крана (20–30 с)' : 'Обработка салфеткой 70%'}
                </span>
              </div>
              {faucetType === 'metal' && (
                <div className="flex items-center gap-2">
                  <span className={phase === 'done' ? 'text-emerald-500 font-bold' : 'text-slate-300'}>{phase === 'done' ? '✓' : '○'}</span>
                  <span className={phase === 'done' ? 'line-through text-slate-400' : 'text-slate-600'}>
                    Охлаждение слабой струёй (1 мин)
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* ЦЕНТРАЛЬНАЯ КОЛОНКА */}
      <div className="w-full lg:w-1/3 p-6 bg-white flex flex-col items-center justify-center border-r border-slate-100 min-h-[450px] relative">
        <div className="w-full flex justify-between items-center mb-4 z-10">
          <span className="text-xs font-bold text-slate-400">КОНТРОЛЬ СМЕСИТЕЛЯ</span>
          <span className="text-[10px] font-mono text-slate-500 font-bold bg-slate-100 px-2 py-1 rounded">
            НАПОР: {Math.round(currentFlow * 100)}%
          </span>
        </div>

        <div className="w-full flex-1 flex items-center justify-center relative">
          <FaucetSVG
            aeratorRemoved={true}
            spotsLeft={0}
            isWiping={false}
            onRemoveAerator={() => {}}
            onWipeSpot={() => {}}
            glovesEquipped={true}
            blocked={phase === 'selection'}
            onFlowChange={(flow) => setCurrentFlow(flow)}
          />

          {burnerLit && !isFlameOn && phase !== 'cooling' && phase !== 'done' && faucetType === 'metal' && (
            <div className="absolute bottom-[200px] right-[100px] flex flex-col items-center pointer-events-none">
              <span className="text-lg">🔥</span>
              <span className="text-[9px] bg-orange-600 text-white font-bold px-2 py-0.5 rounded shadow mt-1">ГОРЕЛКА ВКЛ.</span>
            </div>
          )}

          {isFlameOn && (
            <div className="absolute bottom-[230px] right-[130px] flex flex-col items-center animate-pulse pointer-events-none">
              <div className="w-6 h-16 bg-blue-500 rounded-full blur-[2px] opacity-80 transform rotate-12" />
              <div className="w-4 h-10 bg-amber-400 rounded-full blur-[1px] -mt-10 opacity-90 transform rotate-12" />
              <span className="text-[10px] bg-red-600 text-white font-bold px-2 py-0.5 rounded shadow mt-2">ОБЖИГ...</span>
            </div>
          )}

          {isWipeApplied && (
            <div className="absolute bottom-[240px] right-[110px] bg-sky-100 border border-sky-300 text-sky-800 text-[10px] font-bold px-2.5 py-1 rounded-full shadow animate-bounce pointer-events-none">
              🧴 Обработка салфеткой...
            </div>
          )}
        </div>
      </div>

      <MinecraftInventory
        slots={inv.slots}
        selectedSlot={inv.selectedSlot}
        draggedSlot={inv.draggedSlot}
        equippedHelmet={inv.equippedHelmet}
        equippedGloves={inv.equippedGloves}
        onSlotClick={inv.handleSlotClick}
        onDragStart={inv.handleDragStart}
        onDrop={inv.handleDrop}
        onDragEnd={inv.handleDragEnd}
        isOpen={inv.isOpen}
        onClose={inv.closeInventory}
      />

      {/* ПРАВАЯ КОЛОНКА */}
      <div className="w-full lg:w-1/3 p-8 bg-slate-50 flex flex-col justify-between items-center">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 w-full text-center">Смартфон — таймер</h3>

        <div className="w-64 h-[350px] bg-slate-900 rounded-[36px] p-3 shadow-2xl border-4 border-slate-800 flex flex-col relative overflow-hidden my-auto">
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-slate-800 rounded-b-xl z-20" />

          <div className="bg-slate-950 flex-1 rounded-[28px] p-4 flex flex-col justify-between items-center text-center border border-slate-800">
            <div className="mt-6">
              <span className="text-[9px] font-mono text-slate-500 tracking-widest uppercase block">ТАЙМЕР СТЕРИЛИЗАЦИИ</span>
              <span className="text-xs font-semibold text-emerald-400 mt-1 block">
                {phase === 'selection' && 'Выберите материал крана'}
                {phase === 'sterilize_ready' && (faucetType === 'metal' ? '🔥 ПОДГОТОВКА К ОБЖИГУ' : '🧴 ПОДГОТОВКА К ОБРАБОТКЕ')}
                {phase === 'sterilizing' && (faucetType === 'metal' ? '🔥 ОБЖИГ НОСИКА' : '🧴 ОБРАБОТКА САЛФЕТКОЙ')}
                {phase === 'cooling_ready' && '💧 ГОТОВ К ОХЛАЖДЕНИЮ'}
                {phase === 'cooling' && '💧 ОХЛАЖДЕНИЕ МЕТАЛЛА'}
                {phase === 'done' && '✅ ПРОЦЕСС ЗАВЕРШЁН'}
              </span>
            </div>

            <div className="my-auto w-full">
              {canAdjustSterilize && faucetType === 'metal' ? (
                <div className="flex flex-col items-center gap-1">
                  <button type="button" onClick={() => adjustSterilizeSeconds(5)}
                    className="text-slate-400 hover:text-white text-xs px-3 py-0.5">▲</button>
                  <div className="text-5xl font-mono font-black text-white tracking-widest">
                    00:{secondsLeft.toString().padStart(2, '0')}
                  </div>
                  <button type="button" onClick={() => adjustSterilizeSeconds(-5)}
                    className="text-slate-400 hover:text-white text-xs px-3 py-0.5">▼</button>
                  <p className="text-[9px] text-slate-500 mt-1">диапазон 20–30 с</p>
                </div>
              ) : canAdjustCooling ? (
                <div className="flex items-center justify-center gap-3">
                  <div className="flex flex-col items-center gap-0.5">
                    <button type="button" onClick={() => adjustCoolingTime(1)}
                      className="text-slate-400 hover:text-white text-xs px-2 py-0.5">▲</button>
                    <span className="text-4xl font-mono font-black text-white w-14 text-center">
                      {Math.floor(secondsLeft / 60).toString().padStart(2, '0')}
                    </span>
                    <button type="button" onClick={() => adjustCoolingTime(-1)}
                      className="text-slate-400 hover:text-white text-xs px-2 py-0.5">▼</button>
                  </div>
                  <span className="text-4xl font-mono font-black text-slate-500">:</span>
                  <span className="text-4xl font-mono font-black text-white w-14 text-center">
                    {(secondsLeft % 60).toString().padStart(2, '0')}
                  </span>
                </div>
              ) : (
                <div className="text-5xl font-mono font-black text-white tracking-widest text-center">
                  {faucetType === 'metal' && (phase === 'sterilize_ready' || phase === 'sterilizing')
                    ? `00:${secondsLeft.toString().padStart(2, '0')}`
                    : formatTime(secondsLeft)}
                </div>
              )}
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-3 max-w-[140px] mx-auto">
                <div
                  className="bg-emerald-500 h-full transition-all duration-300"
                  style={{ width: `${totalDuration ? (secondsLeft / totalDuration) * 100 : 0}%` }}
                />
              </div>
            </div>

            <div className="w-full space-y-2 mb-2">
              {warningMessage && (
                <p className="text-[9px] font-bold text-rose-400 leading-tight bg-rose-950/40 p-2 rounded border border-rose-900/50">
                  {warningMessage}
                </p>
              )}

              {phase === 'sterilize_ready' && faucetType === 'metal' && !burnerLit && (
                <button
                  onClick={handleLightBurner}
                  className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-2.5 rounded-lg text-[10px] uppercase transition-all"
                >
                  🔥 Включить газовую горелку
                </button>
              )}

              {phase === 'sterilize_ready' && (
                <button
                  disabled={timerRunning || (faucetType === 'metal' && !burnerLit)}
                  onClick={handleStartSterilization}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 rounded-lg text-[10px] uppercase transition-all disabled:opacity-40"
                >
                  {faucetType === 'metal' ? '🔥 Начать обжиг' : '🧴 Обработать салфеткой'}
                </button>
              )}

              {phase === 'cooling_ready' && (
                <button
                  onClick={handleStartCooling}
                  className="w-full bg-sky-600 hover:bg-sky-500 text-white font-bold py-2.5 rounded-lg text-[10px] uppercase transition-all"
                >
                  💧 Начать охлаждение (1 мин)
                </button>
              )}

              {(phase === 'sterilizing' || phase === 'cooling') && timerRunning && (
                <div className="bg-slate-900 border border-slate-700 p-2 rounded-lg text-slate-400 font-bold text-[10px] tracking-wide animate-pulse">
                  ⏳ Идёт процесс...
                </div>
              )}

              {phase === 'done' && (
                <div className="bg-emerald-950/60 border border-emerald-800 p-2 rounded-lg text-emerald-400 font-bold text-[10px] tracking-wide">
                  ✓ СТЕРИЛИЗАЦИЯ ВЫПОЛНЕНА
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full mt-6">
          <button
            disabled={phase !== 'done'}
            onClick={handleCompleteStep}
            className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-4 rounded-xl shadow-md transition-all disabled:opacity-40"
          >
            Подтвердить стерилизацию →
          </button>
        </div>
      </div>

      <FollowCursor activeItemDef={inv.activeItemDef} replaceCursor={true} />
    </div>
  );
}
