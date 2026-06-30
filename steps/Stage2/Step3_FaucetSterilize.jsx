// steps/Stage2/Step3_FaucetSterilize.jsx
'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FaucetSVG } from '../../components/FaucetSVG';
import MinecraftInventory from '../../components/inventory/MinecraftInventory';
import { useInventoryContext } from '../../components/inventory/InventoryContext';
import { getItemDef, renderItemIcon } from '../../components/inventory/itemRegistry';
import { FollowCursor } from '../../components/inventory/FollowCursor';

const REAL_TIMER_MS = 5000;

const STERILIZE_REQUIREMENTS = {
  metal:   { minSec: 20, maxSec: 30, label: '20–30 секунд' },
  plastic: { minSec: 15, maxSec: null, label: 'интенсивная обработка салфеткой' },
};

const COOLING_REQUIREMENT = { targetSec: 60, label: '1 минута' };

const hasItemInInventory = (slots, itemId) =>
  slots.some((item) => item?.id === itemId);

const wipeIds = ['ethyl_wipes', 'isop_wipes', 'antibact_wipes'];

export default function Step3_FaucetSterilize({ logs, onComplete }) {
  const inv = useInventoryContext();

  const [faucetType, setFaucetType] = useState(null);
  const [currentFlow, setCurrentFlow] = useState(0);

  // selection → sterilize_ready → sterilizing → cooling_ready → cooling → done
  const [phase, setPhase] = useState('selection');
  const [isFlameOn, setIsFlameOn] = useState(false);
  const [isWipeApplied, setIsWipeActive] = useState(false);

  const [timerRunning, setTimerRunning] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [sterilizeDurationSet, setSterilizeDurationSet] = useState(null);
  const [coolingDurationSet, setCoolingDurationSet] = useState(null);
  const [warningMessage, setWarningMessage] = useState('');

  // Новые состояния для ручного использования без кнопок
  const [isFlameActive, setIsFlameActive] = useState(false);
  const [isWipeWiping, setIsWipeWiping] = useState(false);
  const [burnSeconds, setBurnSeconds] = useState(0);
  const [hasUsedWipe, setHasUsedWipe] = useState(false);

  const [mouseOverFaucet, setMouseOverFaucet] = useState(false);
  const [burnCompleted, setBurnCompleted] = useState(false);

  // Сбрасывать анимацию при убирании предмета из руки в инвентарь
  useEffect(() => {
    if (!inv.activeItem) {
      setIsFlameActive(false);
      setIsWipeWiping(false);
    } else if (!wipeIds.includes(inv.activeItem.id)) {
      setIsWipeWiping(false);
    } else if (inv.activeItem.id !== 'gas_burner') {
      setIsFlameActive(false);
    }
  }, [inv.activeItem]);

  const intervalRef = useRef(null);
  const timerStartRef = useRef(null);
  const durationAtStartRef = useRef(0);
  const phaseRef = useRef(phase);
  const minFlowDuringCoolingRef = useRef(1);
  const currentFlowRef = useRef(currentFlow);

  useEffect(() => { currentFlowRef.current = currentFlow; }, [currentFlow]);
  useEffect(() => { phaseRef.current = phase; }, [phase]);

  // Автоматическая активация использования предметов и запуск таймера
  useEffect(() => {
    if (!faucetType || phase === 'done') return;

    if (faucetType === 'metal') {
      const canUseFlame = inv.activeItem?.id === 'gas_burner' && currentFlow < 0.02 && isFlameActive && mouseOverFaucet;
      setIsFlameOn(canUseFlame);

      if (canUseFlame) {
        if (phase === 'sterilize_ready') {
          setPhase('sterilizing');
          setTimerRunning(true);
          durationAtStartRef.current = 0;
          setBurnSeconds(0);
          setSterilizeDurationSet(0);
          setTotalDuration(25);
        }
      }
    }

    if (faucetType === 'plastic') {
      const canWipe = wipeIds.includes(inv.activeItem?.id || '') && isWipeWiping && mouseOverFaucet;
      setIsWipeActive(canWipe);
      if (canWipe) {
        setHasUsedWipe(true);
        if (phase === 'sterilize_ready') {
          setPhase('done'); // для пластика время не засекать
          setIsWipeActive(false);
        }
      }
    }
  }, [isFlameActive, isWipeWiping, inv.activeItem, currentFlow, faucetType, phase]);

  // Накопление времени обжига (только для металла, ускорено)
  useEffect(() => {
    if (phase !== 'sterilizing' || faucetType !== 'metal' || !isFlameOn) {
      return;
    }

    const accInterval = setInterval(() => {
      setBurnSeconds(prev => {
        const next = Math.min(30, prev + 0.25); // ~4x ускорение, 25с ~ за 6-7 реальных сек
        setSecondsLeft(Math.floor(next));
        if (next >= 20) {
          // достаточно для завершения
          setBurnCompleted(true);
          setSterilizeDurationSet(next);
          setTimerRunning(false);
          setIsFlameOn(false);
          setPhase('cooling_ready');
          resetTimerUi(COOLING_REQUIREMENT.targetSec);
          return next;
        }
        return next;
      });
    }, 50);

    return () => clearInterval(accInterval);
  }, [phase, faucetType, isFlameOn]);

  useEffect(() => {
    if (inv.activeItemDef) {
      document.body.style.cursor = 'none';
    } else {
      document.body.style.cursor = 'auto';
    }
    return () => { document.body.style.cursor = 'auto'; };
  }, [inv.activeItemDef]);

  // Слушаем зажатие ЛКМ для ручного использования предметов (горелка / салфетка)
  useEffect(() => {
    const handleDown = (e) => {
      if (e.button !== 0) return;
      // Only activate if over the faucet area (actions only at the crane)
      if (!mouseOverFaucet) return;
      if (inv.activeItem?.id === 'gas_burner') {
        setIsFlameActive(true);
      }
      if (wipeIds.includes(inv.activeItem?.id || '')) {
        setIsWipeWiping(true);
      }
    };
    const handleUp = () => {
      setIsFlameActive(false);
      setIsWipeWiping(false);
    };
    document.addEventListener('mousedown', handleDown);
    document.addEventListener('mouseup', handleUp);
    window.addEventListener('blur', handleUp);
    return () => {
      document.removeEventListener('mousedown', handleDown);
      document.removeEventListener('mouseup', handleUp);
      window.removeEventListener('blur', handleUp);
    };
  }, [inv.activeItem, mouseOverFaucet]);

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
        setSterilizeDurationSet(burnSeconds);
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
  }, [faucetType, resetTimerUi, burnSeconds]);

  // Авто-старт и возобновление охлаждения при правильном напоре
  useEffect(() => {
    const flowOk = currentFlow >= 0.35 && currentFlow <= 0.7;
    if (!flowOk || timerRunning) return;

    if (phase === 'cooling_ready') {
      setPhase('cooling');
      setTimerRunning(true);
      durationAtStartRef.current = COOLING_REQUIREMENT.targetSec;
      timerStartRef.current = Date.now();
      minFlowDuringCoolingRef.current = currentFlow;
      setCoolingDurationSet(COOLING_REQUIREMENT.targetSec);
      setTotalDuration(COOLING_REQUIREMENT.targetSec);
      setWarningMessage('');
    } else if (phase === 'cooling') {
      // Возобновить таймер после изменения напора (resume с текущего remaining)
      setTimerRunning(true);
      durationAtStartRef.current = secondsLeft > 0 ? secondsLeft : COOLING_REQUIREMENT.targetSec;
      timerStartRef.current = Date.now();
      setWarningMessage('');
    }
  }, [phase, currentFlow, timerRunning, secondsLeft]);

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

      if (currentPhase === 'sterilizing' && faucetType === 'metal') {
        // Для металла время накапливается отдельно в burn accumulator
        return;
      }

      if (currentPhase === 'cooling') {
        if (flow < 0.35) {
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
    setIsFlameOn(false);
    setIsWipeActive(false);
    setBurnSeconds(0);
    setBurnCompleted(false);
    setHasUsedWipe(false);
    setSterilizeDurationSet(null);
    setCoolingDurationSet(null);
    setWarningMessage('');
    // Для металла таймер накопительный, для пластика без таймера на протирку
    resetTimerUi(type === 'metal' ? 0 : 0);
  };

  // handleLightBurner удалён — теперь включается автоматически при зажатии ЛКМ с горелкой в руке

  // adjustSterilizeSeconds удалён — время теперь накапливается автоматически при использовании горелки

  // adjustCoolingTime удалён — таймер охлаждения запускается автоматически при правильном напоре


  // handleStartSterilization удалён — всё запускается автоматически при правильном использовании предмета в руке + ЛКМ


  // handleStartCooling удалён — охлаждение запускается автоматически при открытии крана наполовину (0.35–0.7)

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setTimerRunning(false);
    setIsFlameOn(false);
    setIsWipeActive(false);
    setIsFlameActive(false);
    setIsWipeWiping(false);
    setBurnSeconds(0);
    setBurnCompleted(false);
    setHasUsedWipe(false);
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

    if (faucetType === 'metal') {
      const burnTime = sterilizeDurationSet || burnSeconds;
      if (burnTime < 20 || burnTime > 30) {
        errors.push(`Недостаточное / неправильное время обжига: нужно 20–30 секунд тщательного воздействия пламенем. Было ${Math.floor(burnTime)} с.`);
        scorePenalty += 15;
      }
      if (coolingDurationSet !== COOLING_REQUIREMENT.targetSec) {
        errors.push(`Неверное время охлаждения: нужно ${COOLING_REQUIREMENT.label} слабой струёй.`);
        scorePenalty += 15;
      }
    }

    if (faucetType === 'plastic' && !hasUsedWipe) {
      errors.push('Не использовали салфетку для интенсивной обработки носика крана (изнутри и снаружи).');
      scorePenalty += 25;
    }

    onComplete({
      sterilizeErrors: errors,
      sterilizeScorePenalty: scorePenalty,
      faucetType,
      sterilizeSuccess: scorePenalty === 0,
    });
  };



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
            <span className="ml-1 text-xs opacity-60 font-mono bg-white/10 px-1.5 py-0.5 rounded">Tab</span>
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
                  {renderItemIcon(item, 18)}
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
                <li>Закройте кран. Возьмите портативную газовую горелку в руку (из инвентаря).</li>
                <li>Зажмите ЛКМ и поднесите пламя к краю излива (носок). Держите <strong>20–30 секунд</strong> до прекращения шипения.</li>
                <li>Приоткройте кран наполовину (0.35–0.7) — вода потечёт автоматически для охлаждения (1 мин).</li>
              </ol>
            ) : (
              <ol className="list-decimal pl-4 space-y-1.5 text-xs text-slate-600 leading-relaxed">
                <li>Закройте кран. Возьмите спиртовую салфетку (70%) в руку.</li>
                <li>Зажмите ЛКМ и интенсивно протрите носик крана изнутри и снаружи.</li>
              </ol>
            )}
          </div>
        )}

        {faucetType && (
          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 text-xs">
            <p className="font-bold text-slate-800">Чек-лист:</p>
            <div className="space-y-1.5 font-medium">
              <div className="flex items-center gap-2">
                <span className={(faucetType === 'metal' ? burnCompleted : (phase !== 'selection' && phase !== 'sterilize_ready' && phase !== 'sterilizing')) ? 'text-emerald-500 font-bold' : 'text-slate-300'}>
                  {(faucetType === 'metal' ? burnCompleted : (phase !== 'selection' && phase !== 'sterilize_ready' && phase !== 'sterilizing')) ? '✓' : '○'}
                </span>
                <span className={(faucetType === 'metal' ? burnCompleted : (phase !== 'selection' && phase !== 'sterilize_ready' && phase !== 'sterilizing')) ? 'line-through text-slate-400' : 'text-slate-600'}>
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

        <div 
          className="w-full flex-1 flex items-center justify-center relative"
          onMouseEnter={() => setMouseOverFaucet(true)}
          onMouseLeave={() => setMouseOverFaucet(false)}
        >
          <FaucetSVG
            aeratorRemoved={true}
            showAeratorRemovedBadge={false}
            spotsLeft={0}
            isWiping={isWipeWiping && mouseOverFaucet}
            onRemoveAerator={() => {}}
            onWipeSpot={() => {}}
            glovesEquipped={true}
            blocked={phase === 'selection'}
            onFlowChange={(flow) => setCurrentFlow(flow)}
          />

          {isWipeWiping && mouseOverFaucet && (
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
        onSlotRightClick={inv.handleSlotRightClick}
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
              <div className="text-5xl font-mono font-black text-white tracking-widest text-center">
                {faucetType === 'metal' && phase === 'sterilizing'
                  ? `00:${Math.floor(burnSeconds).toString().padStart(2, '0')}`
                  : formatTime(secondsLeft)}
              </div>
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

              {/* Кнопки убраны — всё делается вручную взятием предмета в руку и зажатием ЛКМ на кране */}

              {phase === 'cooling_ready' && (
                <div className="bg-sky-900/60 border border-sky-700 p-2 rounded-lg text-sky-300 font-bold text-[10px] tracking-wide">
                  Приоткройте кран наполовину (0.35–0.7) — охлаждение запустится автоматически
                </div>
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

      <FollowCursor 
        activeItemDef={inv.activeItemDef} 
        activeItem={inv.activeItem} 
        replaceCursor={true} 
        interacting={mouseOverFaucet} 
      />
    </div>
  );
}
