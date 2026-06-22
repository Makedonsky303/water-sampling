'use client';
import React, { useState, useEffect, useRef } from 'react';

// Сценарии транспортировки с разными условиями
const SCENARIOS = [
  {
    id: 'short',
    label: 'Маршрут A: Короткий (1.5 часа)',
    duration: 90, // минуты
    events: [
      { minute: 30, text: 'Едем по городу, пробок нет', alert: false },
      { minute: 60, text: 'Приближаемся к лаборатории', alert: false },
    ],
    tempCurve: [
      { minute: 0, temp: 3.5 },
      { minute: 45, temp: 4.2 },
      { minute: 90, temp: 5.1 },
    ],
    needsReport: false, // < 2 часов, не требует доклада
  },
  {
    id: 'medium',
    label: 'Маршрут B: Средний (4 часа)',
    duration: 240,
    events: [
      { minute: 60, text: 'Движемся по трассе', alert: false },
      { minute: 120, text: 'Половина пути пройдена', alert: false },
      { minute: 180, text: 'Приближаемся к городу', alert: false },
    ],
    tempCurve: [
      { minute: 0, temp: 3.5 },
      { minute: 120, temp: 5.8 },
      { minute: 240, temp: 7.2 },
    ],
    needsReport: false, // < 5 часов, ещё не критично
  },
  {
    id: 'long',
    label: 'Маршрут C: Длинный с затором (6.5 часов)',
    duration: 390,
    events: [
      { minute: 60, text: 'Движемся по трассе', alert: false },
      { minute: 180, text: '⚠️ Попали в затор! Стоим на месте', alert: true },
      { minute: 240, text: '⚠️ Затор продолжается, температура растёт', alert: true },
      { minute: 300, text: 'Затор рассосался, едем дальше', alert: false },
      { minute: 360, text: '⚠️ Температура достигла +9°C!', alert: true },
    ],
    tempCurve: [
      { minute: 0, temp: 3.5 },
      { minute: 180, temp: 6.5 },
      { minute: 240, temp: 8.1 },
      { minute: 300, temp: 9.2 },
      { minute: 390, temp: 9.8 },
    ],
    needsReport: true, // > 5 часов, требует доклада лаборатории
  },
];

export default function Step3_Transport({ onComplete }) {
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [isTransporting, setIsTransporting] = useState(false);
  const [currentMinute, setCurrentMinute] = useState(0);
  const [currentTemp, setCurrentTemp] = useState(3.5);
  const [eventLog, setEventLog] = useState([]);
  const [reportedToLab, setReportedToLab] = useState(false);
  const timerRef = useRef(null);

  // Интерполяция температуры по tempCurve
  const interpolateTemp = (minute, curve) => {
    for (let i = 0; i < curve.length - 1; i++) {
      const p1 = curve[i];
      const p2 = curve[i + 1];
      if (minute >= p1.minute && minute <= p2.minute) {
        const ratio = (minute - p1.minute) / (p2.minute - p1.minute);
        return p1.temp + ratio * (p2.temp - p1.temp);
      }
    }
    return curve[curve.length - 1].temp;
  };

  const startTransport = (scenario) => {
    setSelectedScenario(scenario);
    setIsTransporting(true);
    setCurrentMinute(0);
    setCurrentTemp(3.5);
    setEventLog([{ minute: 0, text: '🚗 Начинаем движение к лаборатории' }]);
    setReportedToLab(false);
  };

  useEffect(() => {
    if (!isTransporting || !selectedScenario) return;

    const processedMinutes = new Set(); // Отслеживаем обработанные минуты

    timerRef.current = setInterval(() => {
      setCurrentMinute((prev) => {
        const next = prev + 1;

        // Обновляем температуру
        const temp = interpolateTemp(next, selectedScenario.tempCurve);
        setCurrentTemp(temp);

        // Проверяем события (только если ещё не обработали эту минуту)
        if (!processedMinutes.has(next)) {
          const event = selectedScenario.events.find((e) => e.minute === next);
          if (event) {
            setEventLog((log) => [...log, { minute: next, text: event.text, alert: event.alert }]);
            processedMinutes.add(next);
          }
        }

        // Завершение маршрута
        if (next >= selectedScenario.duration) {
          setIsTransporting(false);
          if (!processedMinutes.has(next)) {
            setEventLog((log) => [...log, { minute: next, text: '🏁 Прибыли в лабораторию' }]);
            processedMinutes.add(next);
          }
          clearInterval(timerRef.current);
        }

        return next;
      });
    }, 100); // 100 мс = 1 "минута" симуляции (ускорено)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTransporting, selectedScenario]);

  const handleComplete = () => {
    const errors = [];
    let scorePenalty = 0;

    // Проверка: если маршрут > 5 часов, нужен доклад
    if (selectedScenario.needsReport && !reportedToLab) {
      errors.push(
        'Транспортировка заняла более 5 часов, но лаборатория не была предупреждена. Нарушение СП 1.3.3118-13.'
      );
      scorePenalty += 25;
    }

    // Примечание: температура зависит от выбранного маршрута, студент на неё не влияет,
    // поэтому штраф не начисляется

    onComplete({
      transportErrors: errors,
      transportScorePenalty: scorePenalty,
      transportData: {
        scenario: selectedScenario.id,
        duration: currentMinute,
        finalTemp: currentTemp,
        reportedToLab,
      },
    });
  };

  const progressPercent = selectedScenario
    ? Math.min(100, (currentMinute / selectedScenario.duration) * 100)
    : 0;

  return (
    <div className="relative w-full max-w-6xl mb-6">
      <style>{`
        @keyframes drive { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(4px); } }
        .driving { animation: drive 0.3s infinite; }
      `}</style>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

        {/* ── LEFT: Выбор маршрута ── */}
        {!isTransporting && !selectedScenario && (
          <div className="lg:col-span-12 bg-white rounded-2xl border border-slate-200 shadow-lg flex flex-col overflow-hidden">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 px-6 py-5">
              <h2 className="text-white font-bold text-lg">🚗 Выбор маршрута</h2>
              <p className="text-slate-400 text-xs mt-1">Выберите условия транспортировки</p>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {SCENARIOS.map((scenario) => (
                <div
                  key={scenario.id}
                  className="p-5 rounded-xl border-2 border-slate-200 hover:border-blue-400 cursor-pointer transition-all hover:shadow-lg"
                  onClick={() => startTransport(scenario)}
                >
                  <h3 className="font-bold text-base text-slate-800 mb-2">{scenario.label}</h3>
                  <p className="text-xs text-slate-600 mb-3">
                    Продолжительность: <span className="font-bold">{scenario.duration} мин</span>
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {scenario.needsReport
                      ? '⚠️ Требуется доклад лаборатории (>5 часов)'
                      : '✓ Доклад не требуется'}
                  </p>
                  <button className="mt-4 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-sm transition-colors">
                    Выбрать маршрут →
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Процесс транспортировки ── */}
        {selectedScenario && (
          <>
            {/* LEFT: Визуализация */}
            <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 shadow-lg flex flex-col overflow-hidden">
              <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 px-6 py-5">
                <h2 className="text-white font-bold text-lg">🚗 Транспортировка</h2>
                <p className="text-slate-300 text-xs mt-1">{selectedScenario.label}</p>
              </div>
              <div className="p-6 flex-1 flex flex-col gap-4 bg-gradient-to-b from-slate-50 to-white">
                {/* Прогресс */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-slate-700">Прогресс маршрута</span>
                    <span className="text-xs font-mono text-slate-600">
                      {currentMinute} / {selectedScenario.duration} мин
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>

                {/* Автомобиль */}
                <div className="relative bg-slate-100 rounded-xl p-8 border border-slate-200 flex items-center justify-center">
                  <div className={`text-6xl ${isTransporting ? 'driving' : ''}`}>🚙</div>
                </div>

                {/* Показатели */}
                <div className="grid grid-cols-2 gap-3">
                  <div className={`p-4 rounded-xl border-2 ${
                    currentTemp <= 5
                      ? 'bg-emerald-50 border-emerald-300'
                      : currentTemp <= 8
                      ? 'bg-amber-50 border-amber-300'
                      : 'bg-red-50 border-red-300'
                  }`}>
                    <div className="text-xs text-slate-600 mb-1">Температура</div>
                    <div className={`text-2xl font-bold ${
                      currentTemp <= 5
                        ? 'text-emerald-600'
                        : currentTemp <= 8
                        ? 'text-amber-600'
                        : 'text-red-600'
                    }`}>
                      {currentTemp.toFixed(1)}°C
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 border-2 border-blue-300 rounded-xl">
                    <div className="text-xs text-slate-600 mb-1">Время в пути</div>
                    <div className="text-2xl font-bold text-blue-600">
                      {Math.floor(currentMinute / 60)}ч {currentMinute % 60}м
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: События и действия */}
            <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 shadow-lg flex flex-col overflow-hidden">
              <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 px-6 py-5">
                <h2 className="text-white font-bold text-lg">📋 Журнал событий</h2>
                <p className="text-emerald-300 text-xs mt-1">Следите за условиями</p>
              </div>
              <div className="p-5 flex-1 flex flex-col gap-4">
                <div className="flex-1 bg-slate-50 rounded-xl p-4 border border-slate-200 overflow-y-auto max-h-64">
                  <div className="space-y-2">
                    {eventLog.map((event, i) => (
                      <div
                        key={i}
                        className={`p-3 rounded-lg text-xs ${
                          event.alert
                            ? 'bg-red-100 border border-red-300 text-red-800 font-semibold'
                            : 'bg-white border border-slate-200 text-slate-700'
                        }`}
                      >
                        <span className="font-mono text-[10px] text-slate-500">
                          [{Math.floor(event.minute / 60)}:{String(event.minute % 60).padStart(2, '0')}]
                        </span>{' '}
                        {event.text}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Доклад лаборатории */}
                {selectedScenario.needsReport && (
                  <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-4">
                    <p className="text-xs font-bold text-amber-800 mb-2">
                      ⚠️ Маршрут долгий (&gt;5 часов)
                    </p>
                    <p className="text-xs text-amber-700 mb-3 leading-relaxed">
                      Согласно СП 1.3.3118-13, при транспортировке более 5 часов необходимо сообщить в лабораторию.
                    </p>
                    <button
                      onClick={() => setReportedToLab(true)}
                      disabled={reportedToLab}
                      className={`w-full py-2 rounded-lg font-bold text-sm transition-colors ${
                        reportedToLab
                          ? 'bg-emerald-100 text-emerald-700 cursor-not-allowed'
                          : 'bg-amber-500 hover:bg-amber-600 text-white'
                      }`}
                    >
                      {reportedToLab ? '✓ Лаборатория уведомлена' : '📞 Сообщить в лабораторию'}
                    </button>
                  </div>
                )}

                {!isTransporting && (
                  <button
                    onClick={handleComplete}
                    className="w-full bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-4 rounded-2xl shadow-lg transition-all transform hover:-translate-y-0.5 text-sm"
                  >
                    Завершить транспортировку →
                  </button>
                )}
              </div>
            </div>
          </>
        )}

      </div>
    </div>
  );
}
