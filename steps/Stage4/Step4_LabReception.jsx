'use client';
import React, { useState } from 'react';

export default function Step4_LabReception({ transportData, onComplete }) {
  const [visualObservations, setVisualObservations] = useState({
    tempReading: null, // студент вводит то, что видит на термометре
    bottlesIntact: null, // флаконы целые?
    sealIntact: null, // герметичность сохранена?
    labelReadable: null, // этикетки читаемы?
  });

  const [reportFilled, setReportFilled] = useState(false);

  // Рандомное состояние (генерируется один раз при монтировании)
  // Шанс повреждения зависит от времени в пути
  const [actualState] = useState(() => {
    const duration = transportData?.duration || 90; // минуты

    // Базовый шанс повреждения увеличивается с временем
    const damageChanceMultiplier = Math.min(duration / 90, 3); // макс 3x при длинном маршруте

    const bottlesOk = Math.random() > (0.1 * damageChanceMultiplier); // 10-30% шанс повреждения
    const sealOk = Math.random() > (0.15 * damageChanceMultiplier); // 15-45% шанс нарушения
    const labelsOk = Math.random() > (0.05 * damageChanceMultiplier); // 5-15% шанс размытия

    return {
      temp: transportData?.finalTemp || 5.5,
      bottlesOk,
      sealOk,
      labelsOk,
    };
  });

  const handleTempInput = (value) => {
    setVisualObservations((prev) => ({ ...prev, tempReading: parseFloat(value) || null }));
  };

  const handleCheckboxChange = (field, value) => {
    setVisualObservations((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmitReport = () => {
    setReportFilled(true);
  };

  const checkReception = () => {
    const errors = [];
    let scorePenalty = 0;

    // Проверка: правильно ли считана температура
    if (!visualObservations.tempReading) {
      errors.push('Температура не зафиксирована в акте приёмки.');
      scorePenalty += 15;
    } else if (Math.abs(visualObservations.tempReading - actualState.temp) > 0.5) {
      errors.push(
        `Температура зафиксирована неверно (указано ${visualObservations.tempReading}°C, фактически ${actualState.temp.toFixed(
          1
        )}°C).`
      );
      scorePenalty += 10;
    }

    // Проверка: визуальный осмотр флаконов
    if (visualObservations.bottlesIntact === null) {
      errors.push('Не проверена целостность флаконов.');
      scorePenalty += 15;
    } else if (visualObservations.bottlesIntact === false && actualState.bottlesOk) {
      errors.push('Флаконы отмечены как повреждённые, хотя они целы. Ошибка осмотра.');
      scorePenalty += 10;
    }

    // Проверка: герметичность
    if (visualObservations.sealIntact === null) {
      errors.push('Не проверена герметичность упаковки.');
      scorePenalty += 15;
    } else if (visualObservations.sealIntact === false && actualState.sealOk) {
      errors.push('Герметичность отмечена как нарушенная, хотя она сохранена. Ошибка осмотра.');
      scorePenalty += 10;
    }

    // Проверка: этикетки
    if (visualObservations.labelReadable === null) {
      errors.push('Не проверена читаемость этикеток.');
      scorePenalty += 10;
    }

    // Проверка: заполнен ли акт приёмки
    if (!reportFilled) {
      errors.push('Акт приёмки не заполнен. Образцы не могут быть переданы в лабораторию.');
      scorePenalty += 20;
    }

    // Критичная температура
    if (actualState.temp > 10) {
      errors.push('Температура превысила +10°C. Образцы должны быть отклонены.');
      scorePenalty += 30;
    }

    onComplete({
      receptionErrors: errors,
      receptionScorePenalty: scorePenalty,
      receptionData: visualObservations,
    });
  };

  return (
    <div className="relative w-full max-w-6xl mb-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

        {/* ── LEFT: Визуальное состояние ── */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-lg flex flex-col overflow-hidden">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 px-6 py-5">
            <h2 className="text-white font-bold text-lg">🔍 Визуальный осмотр</h2>
            <p className="text-slate-400 text-xs mt-1">
              Осмотрите образцы и зафиксируйте состояние
            </p>
          </div>
          <div className="p-5 flex-1 space-y-4">
            {/* Термометр */}
            <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-4">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🌡️</div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-800 mb-1">Показания термометра</p>
                  <div className="bg-white border-2 border-slate-300 rounded-lg p-3 mb-3 text-center">
                    <div className={`text-3xl font-mono font-bold ${
                      actualState.temp <= 5
                        ? 'text-emerald-600'
                        : actualState.temp <= 8
                        ? 'text-amber-600'
                        : 'text-red-600'
                    }`}>
                      {actualState.temp.toFixed(1)}°C
                    </div>
                  </div>
                  <div className="text-xs text-slate-700 mb-2">Введите показания в акт приёмки:</div>
                  <input
                    type="number"
                    step="0.1"
                    placeholder="Например: 5.5"
                    onChange={(e) => handleTempInput(e.target.value)}
                    className="w-full px-3 py-2 border-2 border-slate-300 rounded-lg text-sm font-mono focus:border-blue-500 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Флаконы */}
            <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-4">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-800 mb-3">Состояние флаконов</p>
                  <div className="bg-white border-2 border-slate-300 rounded-lg p-4 mb-3">
                    <svg viewBox="0 0 200 120" className="w-full h-auto">
                      {/* Хим. флакон */}
                      <g>
                        <rect x="30" y="40" width="30" height="60" fill="#e0f2fe" stroke="#0369a1" strokeWidth="2" rx="3"/>
                        <rect x="35" y="35" width="20" height="8" fill="#0369a1" rx="2"/>
                        <text x="45" y="75" textAnchor="middle" fill="#0369a1" fontSize="20">🧪</text>
                        {!actualState.bottlesOk && (
                          <>
                            {/* Трещина */}
                            <path d="M 45 45 L 50 60 L 45 75 L 48 90" stroke="#ef4444" strokeWidth="2" fill="none"/>
                            <circle cx="47" cy="85" r="3" fill="#ef4444"/>
                          </>
                        )}
                      </g>

                      {/* Бак. флакон */}
                      <g>
                        <rect x="140" y="40" width="30" height="60" fill="#dbeafe" stroke="#0369a1" strokeWidth="2" rx="3"/>
                        <rect x="145" y="35" width="20" height="8" fill="#0369a1" rx="2"/>
                        <text x="155" y="75" textAnchor="middle" fill="#0369a1" fontSize="20">🦠</text>
                        {!actualState.bottlesOk && (
                          <>
                            {/* Трещина */}
                            <path d="M 155 50 L 150 65 L 155 80" stroke="#ef4444" strokeWidth="2" fill="none"/>
                            <circle cx="152" cy="70" r="2" fill="#ef4444"/>
                          </>
                        )}
                      </g>
                    </svg>
                  </div>
                  <div className="text-xs text-slate-700 mb-2">Ваша оценка:</div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="bottles"
                        onChange={() => handleCheckboxChange('bottlesIntact', true)}
                        className="w-4 h-4"
                      />
                      <span className="text-xs text-slate-700">Целые, без повреждений</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="bottles"
                        onChange={() => handleCheckboxChange('bottlesIntact', false)}
                        className="w-4 h-4"
                      />
                      <span className="text-xs text-slate-700">Повреждены / треснуты</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Герметичность */}
            <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-4">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-800 mb-3">Герметичность упаковки</p>
                  <div className="bg-white border-2 border-slate-300 rounded-lg p-4 mb-3">
                    <svg viewBox="0 0 200 100" className="w-full h-auto">
                      {/* Сумка */}
                      <rect x="40" y="30" width="120" height="60" fill="#e0f2fe" stroke="#0369a1" strokeWidth="3" rx="6"/>

                      {/* Молния */}
                      <line x1="50" y1="60" x2="150" y2="60" stroke={actualState.sealOk ? '#10b981' : '#cbd5e1'} strokeWidth="3"/>

                      {/* Фиксаторы */}
                      <rect x="60" y="45" width="15" height="8" fill={actualState.sealOk ? '#10b981' : '#ef4444'} stroke="#1e293b" strokeWidth="1.5" rx="2"/>
                      <rect x="125" y="45" width="15" height="8" fill={actualState.sealOk ? '#10b981' : '#ef4444'} stroke="#1e293b" strokeWidth="1.5" rx="2"/>

                      {!actualState.sealOk && (
                        <>
                          {/* Разрыв молнии */}
                          <path d="M 95 60 L 105 60" stroke="none"/>
                          <circle cx="100" cy="60" r="4" fill="#ef4444"/>
                          {/* Индикатор нарушения */}
                          <text x="100" y="80" textAnchor="middle" fill="#ef4444" fontSize="16">⚠️</text>
                        </>
                      )}

                      {actualState.sealOk && (
                        <text x="100" y="80" textAnchor="middle" fill="#10b981" fontSize="16">✓</text>
                      )}
                    </svg>
                  </div>
                  <div className="text-xs text-slate-700 mb-2">Ваша оценка:</div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="seal"
                        onChange={() => handleCheckboxChange('sealIntact', true)}
                        className="w-4 h-4"
                      />
                      <span className="text-xs text-slate-700">Герметична</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="seal"
                        onChange={() => handleCheckboxChange('sealIntact', false)}
                        className="w-4 h-4"
                      />
                      <span className="text-xs text-slate-700">Нарушена</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Этикетки */}
            <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-4">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-800 mb-3">Читаемость этикеток</p>
                  <div className="bg-white border-2 border-slate-300 rounded-lg p-4 mb-3">
                    <svg viewBox="0 0 200 80" className="w-full h-auto">
                      {/* Этикетка на флаконе */}
                      <rect x="50" y="20" width="100" height="40" fill="#fff" stroke="#64748b" strokeWidth="2" rx="3"/>

                      {actualState.labelsOk ? (
                        <>
                          {/* Читаемый текст */}
                          <text x="100" y="32" textAnchor="middle" fill="#1e293b" fontSize="8" fontWeight="bold">
                            ПРОБА ВОДЫ
                          </text>
                          <text x="100" y="42" textAnchor="middle" fill="#64748b" fontSize="6">
                            Дата: 22.06.2026
                          </text>
                          <text x="100" y="50" textAnchor="middle" fill="#64748b" fontSize="6">
                            №: 12345
                          </text>
                        </>
                      ) : (
                        <>
                          {/* Размытый/повреждённый текст */}
                          <rect x="60" y="25" width="80" height="4" fill="#cbd5e1" opacity="0.5" rx="1"/>
                          <rect x="65" y="33" width="70" height="3" fill="#cbd5e1" opacity="0.4" rx="1"/>
                          <rect x="70" y="40" width="60" height="3" fill="#cbd5e1" opacity="0.3" rx="1"/>
                          <rect x="60" y="48" width="50" height="3" fill="#cbd5e1" opacity="0.3" rx="1"/>
                          {/* Пятно/повреждение */}
                          <ellipse cx="120" cy="45" rx="15" ry="10" fill="#94a3b8" opacity="0.4"/>
                        </>
                      )}
                    </svg>
                  </div>
                  <div className="text-xs text-slate-700 mb-2">Ваша оценка:</div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="labels"
                        onChange={() => handleCheckboxChange('labelReadable', true)}
                        className="w-4 h-4"
                      />
                      <span className="text-xs text-slate-700">Читаемы</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="labels"
                        onChange={() => handleCheckboxChange('labelReadable', false)}
                        className="w-4 h-4"
                      />
                      <span className="text-xs text-slate-700">Повреждены/нечитаемы</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Акт приёмки ── */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-lg flex flex-col overflow-hidden">
          <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 px-6 py-5">
            <h2 className="text-white font-bold text-lg">📋 Акт приёмки образцов</h2>
            <p className="text-emerald-300 text-xs mt-1">Заполните форму на основе осмотра</p>
          </div>
          <div className="p-5 flex-1 flex flex-col gap-4">
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-3 flex-1">
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                <div className="text-slate-600">Дата приёмки:</div>
                <div className="font-bold text-slate-800">
                  {new Date().toLocaleDateString('ru-RU')}
                </div>

                <div className="text-slate-600">Время:</div>
                <div className="font-bold text-slate-800">
                  {new Date().toLocaleTimeString('ru-RU', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </div>

                <div className="text-slate-600">Температура при приёмке:</div>
                <div
                  className={`font-bold font-mono ${
                    visualObservations.tempReading
                      ? 'text-blue-600'
                      : 'text-slate-400'
                  }`}
                >
                  {visualObservations.tempReading
                    ? `${visualObservations.tempReading}°C`
                    : 'Не указана'}
                </div>

                <div className="text-slate-600">Флаконы:</div>
                <div
                  className={`font-bold ${
                    visualObservations.bottlesIntact === null
                      ? 'text-slate-400'
                      : visualObservations.bottlesIntact
                      ? 'text-emerald-600'
                      : 'text-red-600'
                  }`}
                >
                  {visualObservations.bottlesIntact === null
                    ? 'Не проверено'
                    : visualObservations.bottlesIntact
                    ? 'Целые ✓'
                    : 'Повреждены ✗'}
                </div>

                <div className="text-slate-600">Герметичность:</div>
                <div
                  className={`font-bold ${
                    visualObservations.sealIntact === null
                      ? 'text-slate-400'
                      : visualObservations.sealIntact
                      ? 'text-emerald-600'
                      : 'text-red-600'
                  }`}
                >
                  {visualObservations.sealIntact === null
                    ? 'Не проверено'
                    : visualObservations.sealIntact
                    ? 'Сохранена ✓'
                    : 'Нарушена ✗'}
                </div>

                <div className="text-slate-600">Этикетки:</div>
                <div
                  className={`font-bold ${
                    visualObservations.labelReadable === null
                      ? 'text-slate-400'
                      : visualObservations.labelReadable
                      ? 'text-emerald-600'
                      : 'text-red-600'
                  }`}
                >
                  {visualObservations.labelReadable === null
                    ? 'Не проверено'
                    : visualObservations.labelReadable
                    ? 'Читаемы ✓'
                    : 'Повреждены ✗'}
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs text-blue-800">
              <p className="font-bold mb-1">📖 ГОСТ Р 59024‑2020</p>
              <p className="leading-relaxed text-blue-700">
                При приёмке образцов необходимо зафиксировать температуру, проверить целостность
                флаконов, герметичность упаковки и читаемость этикеток.
              </p>
            </div>

            <button
              onClick={handleSubmitReport}
              disabled={reportFilled}
              className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${
                reportFilled
                  ? 'bg-emerald-100 text-emerald-700 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {reportFilled ? '✓ Акт заполнен' : 'Заполнить акт приёмки'}
            </button>

            {reportFilled && (
              <button
                onClick={checkReception}
                className="w-full bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-4 rounded-2xl shadow-lg transition-all transform hover:-translate-y-0.5 text-sm"
              >
                Завершить приёмку →
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
