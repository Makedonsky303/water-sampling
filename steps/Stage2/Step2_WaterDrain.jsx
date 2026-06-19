'use client';
import React, { useState, useEffect, useRef } from 'react';
import { FaucetSVG } from '../../components/FaucetSVG';

export default function Step2_WaterDrain({ logs, onComplete }) {
  const [analysisGoal, setAnalysisGoal] = useState(null); // 'leaching' (металлы) или 'network' (качество в сети)
  const [analysisType, setAnalysisType] = useState(null); // 'chem' или 'bio'
  
  const [currentFlow, setCurrentFlow] = useState(0); // Напор воды (от 0 до 1), получаемый из FaucetSVG
  
  // Состояния таймера
  const [timerRunning, setTimerRunning] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [drainComplete, setDrainComplete] = useState(false);
  const [warningMessage, setWarningWarning] = useState("");

  const intervalRef = useRef(null);

  // Храним актуальные значения в refs, чтобы частые рендеры (движение ручки) не сбивали таймер
  const currentFlowRef = useRef(currentFlow);
  const analysisTypeRef = useRef(analysisType);

  useEffect(() => {
    currentFlowRef.current = currentFlow;
  }, [currentFlow]);

  useEffect(() => {
    analysisTypeRef.current = analysisType;
  }, [analysisType]);

  // Настройки времени в симулируемых секундах:
  // Химия: 3 минуты = 180 секунд (пройдет за 7.5 секунд реального времени при 24х)
  // Биология: 10 минут = 600 секунд (пройдет за 25 секунд реального времени при 24х)
  const TIMERS = {
    chem: 180,
    bio: 600
  };

  // Инициализация таймера при выборе типа анализа
  useEffect(() => {
    if (analysisType) {
      const duration = TIMERS[analysisType];
      setSecondsLeft(duration);
      setTotalDuration(duration);
      setTimerRunning(false);
      setDrainComplete(false);
      setWarningWarning("");
    }
  }, [analysisType]);

  // Логика работы ускоренного таймера
  useEffect(() => {
    if (timerRunning) {
      const tickRate = 1000 / 24; // 24-кратное ускорение (41.67 мс на 1 симулируемую секунду)

      intervalRef.current = setInterval(() => {
        const flow = currentFlowRef.current;
        const type = analysisTypeRef.current;

        // Проверяем условия во время работы таймера
        if (flow < 0.1) {
          setTimerRunning(false);
          setWarningWarning("⚠️ Вода перекрыта! Слив приостановлен.");
          return;
        }

        // Для биологического анализа ГОСТ требует максимального напора (> 80%)
        if (type === 'bio' && flow < 0.8) {
          setTimerRunning(false);
          setWarningWarning("⚠️ Напор снижен! Для бактериологии требуется максимальный напор (>80%).");
          return;
        }

        setWarningWarning(""); // Сбрасываем предупреждения, если все ок

        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setTimerRunning(false);
            setDrainComplete(true);
            return 0;
          }
          return prev - 1;
        });
      }, tickRate);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [timerRunning]); // Зависит только от статуса активности таймера

  const handleStartTimer = () => {
    if (currentFlow < 0.1) {
      setWarningWarning("⚠️ Сначала откройте кран смесителя!");
      return;
    }
    if (analysisType === 'bio' && currentFlow < 0.8) {
      setWarningWarning("⚠️ Откройте кран сильнее! Нужен максимальный напор.");
      return;
    }
    setWarningWarning("");
    setTimerRunning(true);
  };

  const handlePauseTimer = () => {
    setTimerRunning(false);
  };

  const handleResetTimer = () => {
    setTimerRunning(false);
    setSecondsLeft(totalDuration);
    setDrainComplete(false);
    setWarningWarning("");
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
        // Слив завершен. Проверим, какой напор держался
        if (analysisType === 'bio' && currentFlow < 0.8) {
          errors.push("Нарушение ГОСТ: Предварительный слив для бактериологии должен выполняться строго на максимальном напоре.");
          scorePenalty += 15;
        }
      }
    }

    onComplete({
      drainErrors: errors,
      drainScorePenalty: scorePenalty,
      drainGoal: analysisGoal,
      drainType: analysisType,
      drainSuccess: scorePenalty === 0
    });
  };

  // Расчет времени для красивого вывода на экран смартфона
  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white w-full max-w-6xl rounded-xl shadow-xl border border-slate-200 overflow-hidden mb-6 flex flex-col lg:flex-row animate-fade-in">
      
      {/* ЛЕВАЯ КОЛОНКА: ВЫБОР ЦЕЛИ И ИНСТРУКЦИЯ */}
      <div className="w-full lg:w-1/3 p-8 border-r border-slate-100 bg-slate-50 flex flex-col gap-6">
        <div>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">ШАГ 2.2</span>
          <h2 className="text-2xl font-bold text-slate-800 mt-3">Слив и застойный фактор</h2>
          <p className="text-slate-500 text-xs mt-1">Определите цель вашего исследования и подготовьте воду к отбору проб.</p>
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
          </div>
        )}

        {/* Справка ГОСТ */}
        <div className="mt-auto bg-white border border-slate-200 rounded-xl p-4 text-xs">
          <p className="font-bold text-slate-800 mb-1">📖 Справка ГОСТ:</p>
          {analysisGoal === 'leaching' && (
            <p className="text-slate-600 leading-relaxed">
              Предварительный слив НЕ требуется. Кран приоткрывается на небольшую мощность, и первая струя воды (стоявшая в трубах не менее 6 часов) сразу отбирается в химическую тару.
            </p>
          )}
          {analysisGoal === 'network' && !analysisType && (
            <p className="text-slate-400 italic">Выберите тип анализа выше, чтобы прочитать регламент слива.</p>
          )}
          {analysisGoal === 'network' && analysisType === 'chem' && (
            <p className="text-slate-600 leading-relaxed">
              Для химии сливайте воду 2–3 минуты для установления равновесия системы. Напор может быть умеренным. Нажмите «Старт» на смартфоне справа.
            </p>
          )}
          {analysisGoal === 'network' && analysisType === 'bio' && (
            <p className="text-slate-600 leading-relaxed">
              Для бактериологии сливайте воду не менее 10 минут на максимальном напоре (&gt;80%). Если напор упадет, таймер автоматически остановится.
            </p>
          )}
          {!analysisGoal && (
            <p className="text-slate-400 italic">Выберите цель исследования, чтобы начать.</p>
          )}
        </div>
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

      {/* ПРАВАЯ КОЛОНКА: СМАРТФОН С ТАЙМЕРОМ */}
      <div className="w-full lg:w-1/3 p-8 bg-slate-50 flex flex-col justify-between items-center">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 w-full">3. Контроль времени (Смартфон)</h3>

        {/* Смартфон */}
        <div className="w-64 h-[350px] bg-slate-900 rounded-[36px] p-3 shadow-2xl border-4 border-slate-800 flex flex-col relative overflow-hidden my-auto">
          {/* Динамик */}
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-slate-800 rounded-b-xl z-20"></div>
          
          <div className="bg-slate-950 flex-1 rounded-[28px] p-4 flex flex-col justify-between items-center text-center border border-slate-800">
            <div className="mt-6">
              <span className="text-[9px] font-mono text-slate-500 tracking-widest uppercase block">ТАЙМЕР СЛИВА (ускорен x24)</span>
              <span className="text-xs font-semibold text-sky-400 mt-1 block">
                {analysisType === 'chem' && "🧪 ХИМИЧЕСКИЙ АНАЛИЗ"}
                {analysisType === 'bio' && "🧫 БАКТЕРИОЛОГИЯ"}
                {!analysisType && "ОЖИДАНИЕ ВЫБОРА"}
              </span>
            </div>

            {/* Циферблат */}
            <div className="my-auto">
              <div className="text-5xl font-mono font-black text-white tracking-widest">
                {formatTime(secondsLeft)}
              </div>
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

    </div>
  );
}