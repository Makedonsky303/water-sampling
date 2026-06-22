// steps/Stage2/Step3_FaucetSterilize.jsx
'use client';
import React, { useState, useEffect, useRef } from 'react';
import { FaucetSVG } from '../../components/FaucetSVG';

export default function Step3_FaucetSterilize({ logs, onComplete }) {
  // 1. Свойства и тип крана
  const [faucetType, setFaucetType] = useState(null); // 'metal' (металлический) или 'plastic' (пластиковый)
  const [currentFlow, setCurrentFlow] = useState(0);  // Напор воды (0.0 - 1.0)

  // 2. Статусы фаз стерилизации
  // Допустимые фазы: 'selection', 'sterilizing', 'cooling_ready', 'cooling', 'done'
  const [phase, setPhase] = useState('selection');
  const [isFlameOn, setIsFlameOn] = useState(false);   // Симуляция пламени горелки
  const [isWipeApplied, setIsWipeActive] = useState(false); // Симуляция обработки салфеткой

  // 3. Таймеры и симуляция (ускорение x24)
  const [timerRunning, setTimerRunning] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [warningMessage, setWarningMessage] = useState("");

  const intervalRef = useRef(null);
  const currentFlowRef = useRef(currentFlow);

  useEffect(() => {
    currentFlowRef.current = currentFlow;
  }, [currentFlow]);

  // Длительность фаз в симулируемых секундах (x24 ускорение)
  const PHASES_TIMERS = {
    metal_sterilize: 30,
    plastic_sterilize: 20,
    cooling: 60
  };

  // Контроль логики таймера
  useEffect(() => {
    if (timerRunning) {
      const tickRate = 1000 / 24; // 24-кратное ускорение

      intervalRef.current = setInterval(() => {
        const flow = currentFlowRef.current;

        // Если идет фаза стерилизации (обжига или протирки) — вода должна быть полностью закрыта!
        if (phase === 'sterilizing' && flow > 0.02) {
          setTimerRunning(false);
          setIsFlameOn(false);
          setIsWipeActive(false);
          setWarningMessage("⚠️ Вода не должна течь во время стерилизации! Закройте кран.");
          return;
        }

        // Если идет фаза охлаждения — вода должна течь умеренно (наполовину, от 20% до 70%)
        if (phase === 'cooling') {
          if (flow < 0.2) {
            setTimerRunning(false);
            setWarningMessage("⚠️ Откройте воду наполовину, чтобы охладить кран после обжига!");
            return;
          }
          if (flow > 0.7) {
            setTimerRunning(false);
            setWarningMessage("⚠️ Напор слишком сильный! Приоткройте кран наполовину (слабой струей).");
            return;
          }
        }

        setWarningMessage("");

        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setTimerRunning(false);
            advancePhase();
            return 0;
          }
          return prev - 1;
        });
      }, tickRate);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [timerRunning, phase]);

  // Автоматический переход к следующей фазе после таймера
  const advancePhase = () => {
    if (phase === 'sterilizing') {
      setIsFlameOn(false);
      setIsWipeActive(false);
      setPhase('cooling_ready');
      setSecondsLeft(PHASES_TIMERS.cooling);
      setTotalDuration(PHASES_TIMERS.cooling);
    } else if (phase === 'cooling') {
      setPhase('done');
    }
  };

  // Выбор материала крана
  const handleSelectType = (type) => {
    setFaucetType(type);
    setPhase('sterilizing');
    setWarningMessage("");
    const duration = type === 'metal' ? PHASES_TIMERS.metal_sterilize : PHASES_TIMERS.plastic_sterilize;
    setSecondsLeft(duration);
    setTotalDuration(duration);
  };

  // Старт симуляции стерилизации
  const handleStartSterilization = () => {
    if (currentFlow > 0.02) {
      setWarningMessage("⚠️ Закройте кран перед началом дезинфекции!");
      return;
    }
    
    setWarningMessage("");
    if (faucetType === 'metal') {
      setIsFlameOn(true);
    } else {
      setIsWipeActive(true);
    }
    setTimerRunning(true);
  };

  // Старт симуляции охлаждения
  const handleStartCooling = () => {
    if (currentFlow < 0.2 || currentFlow > 0.7) {
      setWarningMessage("⚠️ Сначала приоткройте кран наполовину (слабой струей)!");
      return;
    }
    setWarningMessage("");
    setPhase('cooling');
    setTimerRunning(true);
  };

  const handleReset = () => {
    setTimerRunning(false);
    setIsFlameOn(false);
    setIsWipeActive(false);
    setFaucetType(null);
    setPhase('selection');
    setSecondsLeft(0);
    setTotalDuration(0);
    setWarningMessage("");
  };

  const handleCompleteStep = () => {
    let scorePenalty = 0;
    let errors = [];

    if (phase !== 'done') {
      errors.push("Критическая ошибка: Технологический процесс стерилизации крана не был завершен.");
      scorePenalty += 40;
    }

    onComplete({
      sterilizeErrors: errors,
      sterilizeScorePenalty: scorePenalty,
      faucetType: faucetType,
      sterilizeSuccess: scorePenalty === 0
    });
  };

  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white w-full max-w-6xl rounded-xl shadow-xl border border-slate-200 overflow-hidden mb-6 flex flex-col lg:flex-row animate-fade-in">
      
      {/* ЛЕВАЯ КОЛОНКА */}
      <div className="w-full lg:w-1/3 p-8 border-r border-slate-100 bg-slate-50 flex flex-col gap-6">
        <div>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">ШАГ 2.3</span>
          <h2 className="text-2xl font-bold text-slate-800 mt-3">Стерилизация крана</h2>
          <p className="text-slate-500 text-xs mt-1">Обеззаразьте точку отбора для предотвращения контаминации бактериологической пробы.</p>
        </div>

        {/* Выбор материала крана */}
        {faucetType === null && (
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <span className="font-semibold text-slate-800 text-sm block">1. Из какого материала сделан кран заявителя?</span>
            <div className="grid grid-cols-2 gap-2">
              <button onClick={() => handleSelectType('metal')}
                className="p-3 text-xs rounded-lg border-2 text-center transition-all border-slate-200 text-slate-600 hover:border-slate-300">
                ⚙️ Металл (латунь/сталь)
              </button>
              <button onClick={() => handleSelectType('plastic')}
                className="p-3 text-xs rounded-lg border-2 text-center transition-all border-slate-200 text-slate-600 hover:border-slate-300">
                🧪 Пластик / Декор
              </button>
            </div>
          </div>
        )}

        {/* Инструкции по стерилизации */}
        {faucetType && (
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3 animate-fade-in">
            <div className="flex justify-between items-center border-b pb-2">
              <span className="font-bold text-xs text-slate-400">Регламент ГОСТ</span>
              <button onClick={handleReset} className="text-[10px] text-slate-400 hover:text-red-500 font-bold">Изменить кран 🔄</button>
            </div>
            
            {faucetType === 'metal' ? (
              <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                <p>💡 **Для металлического крана** регламентирован обжиг открытым пламенем:</p>
                <ol className="list-decimal pl-4 space-y-1">
                  <li>Убедитесь, что вода полностью перекрыта.</li>
                  <li>Обжигайте носик крана пламенем горелки **20-30 секунд** до прекращения шипения влаги.</li>
                  <li>Приоткройте кран слабой струей на **1 минуту**, чтобы охладить металл.</li>
                </ol>
              </div>
            ) : (
              <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                <p>💡 **Для пластикового / декоративного крана** обжиг запрещен:</p>
                <ol className="list-decimal pl-4 space-y-1">
                  <li>Убедитесь, что вода полностью перекрыта.</li>
                  <li>Интенсивно обработайте носик крана спиртовой салфеткой (70%) в течение **20 секунд**.</li>
                  <li>Сливайте воду слабой струей **1 минуту**, чтобы смыть остатки спирта.</li>
                </ol>
              </div>
            )}
          </div>
        )}

        {/* Чек-лист */}
        {faucetType && (
          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 text-xs">
            <p className="font-bold text-slate-800">Чек-лист этапа:</p>
            <div className="space-y-1.5 font-medium">
              <div className="flex items-center gap-2">
                <span className={phase !== 'selection' && phase !== 'sterilizing' ? 'text-emerald-500 font-bold' : 'text-slate-300'}>
                  {phase !== 'selection' && phase !== 'sterilizing' ? '✓' : '○'}
                </span>
                <span className={phase !== 'selection' && phase !== 'sterilizing' ? 'line-through text-slate-400' : 'text-slate-600'}>
                  Стерилизация носика смесителя ({faucetType === 'metal' ? 'обжиг 30с' : 'салфетка 20с'})
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className={phase === 'done' ? 'text-emerald-500 font-bold' : 'text-slate-300'}>
                  {phase === 'done' ? '✓' : '○'}
                </span>
                <span className={phase === 'done' ? 'line-through text-slate-400' : 'text-slate-600'}>
                  Охлаждение и промывка крана слабой струей (1 минуту)
                </span>
              </div>
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
            onRemoveAerator={()=>{}}
            onWipeSpot={()=>{}} 
            glovesEquipped={true}
            blocked={phase === 'selection'} 
            onFlowChange={(flow) => setCurrentFlow(flow)}
          />

          {isFlameOn && (
            <div className="absolute bottom-[230px] right-[130px] flex flex-col items-center animate-pulse pointer-events-none">
              <div className="w-6 h-16 bg-blue-500 rounded-full blur-[2px] opacity-80 transform rotate-12"></div>
              <div className="w-4 h-10 bg-amber-400 rounded-full blur-[1px] -mt-10 opacity-90 transform rotate-12"></div>
              <span className="text-[10px] bg-red-600 text-white font-bold px-2 py-0.5 rounded shadow mt-2">ОБЖИГ...</span>
            </div>
          )}

          {isWipeApplied && (
            <div className="absolute bottom-[240px] right-[110px] bg-sky-100 border border-sky-300 text-sky-800 text-[10px] font-bold px-2.5 py-1 rounded-full shadow animate-bounce pointer-events-none">
              🧴 Протирка салфеткой...
            </div>
          )}
        </div>
      </div>

      {/* ПРАВАЯ КОЛОНКА */}
      <div className="w-full lg:w-1/3 p-8 bg-slate-50 flex flex-col justify-between items-center">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 w-full text-center">3. Смартфон (Ускорение x24)</h3>

        {/* Смартфон */}
        <div className="w-64 h-[350px] bg-slate-900 rounded-[36px] p-3 shadow-2xl border-4 border-slate-800 flex flex-col relative overflow-hidden my-auto">
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-slate-800 rounded-b-xl z-20"></div>
          
          <div className="bg-slate-950 flex-1 rounded-[28px] p-4 flex flex-col justify-between items-center text-center border border-slate-800">
            <div className="mt-6">
              <span className="text-[9px] font-mono text-slate-500 tracking-widest uppercase block">ТАЙМЕР ТЕХНОЛОГИИ</span>
              <span className="text-xs font-semibold text-emerald-400 mt-1 block">
                {phase === 'selection' && "Выберите материал крана"}
                {phase === 'sterilizing' && (faucetType === 'metal' ? "🔥 ОБЖИГ НОСИКА" : "🧴 ОБРАБОТКА САЛФЕТКОЙ")}
                {phase === 'cooling_ready' && "💧 ГОТОВ К ОХЛАЖДЕНИЮ"}
                {phase === 'cooling' && "💧 ОХЛАЖДЕНИЕ / ПРОМЫВКА"}
                {phase === 'done' && "✅ ПРОЦЕСС ЗАВЕРШЕН"}
              </span>
            </div>

            {/* Циферблат */}
            <div className="my-auto">
              <div className="text-5xl font-mono font-black text-white tracking-widest">
                {formatTime(secondsLeft)}
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-3 max-w-[140px] mx-auto">
                <div 
                  className="bg-emerald-500 h-full transition-all duration-300"
                  style={{ width: `${totalDuration ? (secondsLeft / totalDuration) * 100 : 0}%` }}
                ></div>
              </div>
            </div>

            {/* Блок управления */}
            <div className="w-full space-y-2 mb-2">
              {warningMessage && (
                <p className="text-[9px] font-bold text-rose-400 leading-tight bg-rose-950/40 p-2 rounded border border-rose-900/50 animate-bounce">
                  {warningMessage}
                </p>
              )}

              {phase === 'sterilizing' && (
                <button 
                  disabled={timerRunning}
                  onClick={handleStartSterilization}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 rounded-lg text-[10px] uppercase transition-all disabled:opacity-40"
                >
                  {faucetType === 'metal' ? '🔥 Начать обжиг' : '🧴 Протереть'}
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

              {(phase === 'cooling' || (phase === 'sterilizing' && timerRunning)) && (
                <div className="bg-slate-900 border border-slate-700 p-2 rounded-lg text-slate-400 font-bold text-[10px] tracking-wide animate-pulse">
                  ⏳ ИДЕТ СИМУЛЯЦИЯ ПРОЦЕССА...
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

        {/* Кнопка подтверждения */}
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

    </div>
  );
}