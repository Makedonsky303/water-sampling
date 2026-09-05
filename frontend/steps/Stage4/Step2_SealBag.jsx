'use client';
import React, { useState, useRef, useEffect } from 'react';

export default function Step2_SealBag({ onComplete }) {
  const [zipperProgress, setZipperProgress] = useState(0);
  const [leftClipClosed, setLeftClipClosed] = useState(false);
  const [rightClipClosed, setRightClipClosed] = useState(false);
  const [isDraggingZipper, setIsDraggingZipper] = useState(false);
  const svgRef = useRef(null);

  // Путь молнии (прямая линия)
  const zipperPath = "M 80 170 L 320 170";
  const zipperLength = 240;

  const handleZipperInteraction = (clientX) => {
    if (!svgRef.current) return;
    const svg = svgRef.current;
    const rect = svg.getBoundingClientRect();
    const x = clientX - rect.left;
    const progress = Math.max(0, Math.min(1, (x - 80) / zipperLength));
    setZipperProgress(progress);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDraggingZipper(true);
    // НЕ вызываем handleZipperInteraction здесь - только при движении
  };

  const handleMouseMove = (e) => {
    if (!isDraggingZipper) return;
    handleZipperInteraction(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDraggingZipper(false);
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    setIsDraggingZipper(true);
    // НЕ вызываем handleZipperInteraction здесь - только при движении
  };

  const handleTouchMove = (e) => {
    if (!isDraggingZipper || !e.touches[0]) return;
    handleZipperInteraction(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDraggingZipper(false);
  };

  useEffect(() => {
    if (isDraggingZipper) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDraggingZipper]);

  const zipperX = 80 + zipperProgress * zipperLength;

  const checkSealing = () => {
    const errors = [];
    let scorePenalty = 0;

    if (zipperProgress < 0.98) {
      errors.push('Молния застёгнута не полностью. Нарушение герметичности.');
      scorePenalty += 20;
    }

    if (!leftClipClosed) {
      errors.push('Левый фиксатор не закрыт. Риск разгерметизации при транспортировке.');
      scorePenalty += 15;
    }

    if (!rightClipClosed) {
      errors.push('Правый фиксатор не закрыт. Риск разгерметизации при транспортировке.');
      scorePenalty += 15;
    }

    onComplete({
      sealingErrors: errors,
      sealingScorePenalty: scorePenalty,
      sealingData: { zipperProgress, leftClipClosed, rightClipClosed },
    });
  };

  return (
    <div className="relative w-full max-w-6xl mb-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

        {/* ── LEFT: Статус ── */}
        <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 shadow-lg flex flex-col overflow-hidden">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 px-6 py-5">
            <h2 className="text-white font-bold text-lg">✅ Статус герметизации</h2>
            <p className="text-slate-400 text-xs mt-1">Проверьте все элементы</p>
          </div>
          <div className="p-5 flex-1 space-y-4">
            <div className={`p-4 rounded-xl border-2 transition-all ${
              zipperProgress >= 0.98
                ? 'bg-emerald-50 border-emerald-300'
                : 'bg-red-50 border-red-300'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-slate-700">Молния</span>
                <span className={`text-xs font-bold ${
                  zipperProgress >= 0.98 ? 'text-emerald-600' : 'text-red-600'
                }`}>
                  {Math.round(zipperProgress * 100)}%
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-full transition-all ${
                    zipperProgress >= 0.98 ? 'bg-emerald-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${zipperProgress * 100}%` }}
                />
              </div>
            </div>

            <div className={`p-4 rounded-xl border-2 transition-all ${
              leftClipClosed
                ? 'bg-emerald-50 border-emerald-300'
                : 'bg-amber-50 border-amber-300'
            }`}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{leftClipClosed ? '🔒' : '🔓'}</span>
                <div>
                  <p className="font-bold text-sm text-slate-700">Левый фиксатор</p>
                  <p className={`text-xs font-semibold ${
                    leftClipClosed ? 'text-emerald-600' : 'text-amber-600'
                  }`}>
                    {leftClipClosed ? 'Закрыт ✓' : 'Открыт'}
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-4 rounded-xl border-2 transition-all ${
              rightClipClosed
                ? 'bg-emerald-50 border-emerald-300'
                : 'bg-amber-50 border-amber-300'
            }`}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{rightClipClosed ? '🔒' : '🔓'}</span>
                <div>
                  <p className="font-bold text-sm text-slate-700">Правый фиксатор</p>
                  <p className={`text-xs font-semibold ${
                    rightClipClosed ? 'text-emerald-600' : 'text-amber-600'
                  }`}>
                    {rightClipClosed ? 'Закрыт ✓' : 'Открыт'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs text-blue-800">
              <p className="font-bold mb-1">📖 ГОСТ Р 59024‑2020</p>
              <p className="leading-relaxed text-blue-700">
                Термосумка должна быть полностью герметизирована: молния застёгнута до конца,
                все фиксаторы защёлкнуты.
              </p>
            </div>
          </div>
        </div>

        {/* ── CENTER: Интерактивная сумка ── */}
        <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 shadow-lg flex flex-col overflow-hidden">
          <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 px-6 py-5">
            <h2 className="text-white font-bold text-lg">🧳 Герметизация термосумки</h2>
            <p className="text-slate-300 text-xs mt-1">
              Перетащите бегунок молнии до конца, затем закройте оба фиксатора
            </p>
          </div>
          <div className="p-6 flex-1 flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
            <div className="relative w-full max-w-lg">
              <svg
                ref={svgRef}
                viewBox="0 0 400 320"
                className="w-full h-auto"
                style={{ userSelect: 'none' }}
              >
                {/* Сумка - основной контур */}
                <defs>
                  <linearGradient id="bagGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#bfdbfe" />
                    <stop offset="100%" stopColor="#93c5fd" />
                  </linearGradient>
                  <filter id="shadow">
                    <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3"/>
                  </filter>
                </defs>

                {/* Контур сумки */}
                <rect x="30" y="80" width="340" height="200" fill="url(#bagGradient)"
                  stroke="#1e40af" strokeWidth="4" rx="16" filter="url(#shadow)"/>

                {/* Ручки сумки */}
                <path d="M 120 80 Q 120 50 150 50 Q 180 50 180 80"
                  fill="none" stroke="#1e40af" strokeWidth="6" strokeLinecap="round"/>
                <path d="M 220 80 Q 220 50 250 50 Q 280 50 280 80"
                  fill="none" stroke="#1e40af" strokeWidth="6" strokeLinecap="round"/>

                <text x="200" y="40" textAnchor="middle" fill="#1e293b" fontSize="16" fontWeight="bold">
                  Термосумка
                </text>

                {/* Молния - незастёгнутая часть (зубцы) */}
                {Array.from({ length: 24 }).map((_, i) => {
                  const x = 80 + (i * 10);
                  const isZipped = x < zipperX;
                  return (
                    <g key={i}>
                      <rect x={x} y="165" width="4" height="5"
                        fill={isZipped ? '#10b981' : '#94a3b8'} rx="1"/>
                      <rect x={x} y="175" width="4" height="5"
                        fill={isZipped ? '#10b981' : '#94a3b8'} rx="1"/>
                    </g>
                  );
                })}

                {/* Центральная линия молнии */}
                <line x1="80" y1="170" x2={zipperX} y2="170"
                  stroke="#059669" strokeWidth="3"/>
                <line x1={zipperX} y1="170" x2="320" y2="170"
                  stroke="#cbd5e1" strokeWidth="3" strokeDasharray="4,4"/>

                {/* Бегунок молнии (расширенная область захвата) */}
                <g
                  onMouseDown={handleMouseDown}
                  onTouchStart={handleTouchStart}
                  style={{ cursor: isDraggingZipper ? 'grabbing' : 'grab' }}
                >
                  {/* Невидимая расширенная зона захвата */}
                  <rect
                    x={zipperX - 25}
                    y="145"
                    width="50"
                    height="50"
                    fill="transparent"
                  />

                  {/* Видимая собачка */}
                  <rect x={zipperX - 12} y="155" width="24" height="30"
                    fill={isDraggingZipper ? '#fbbf24' : '#f97316'}
                    stroke="#1e293b" strokeWidth="3" rx="4"/>
                  <circle cx={zipperX} cy="165" r="4" fill="#fff"/>
                  <circle cx={zipperX} cy="175" r="4" fill="#fff"/>
                  <rect x={zipperX - 4} y="182" width="8" height="8"
                    fill="#1e293b" rx="2"/>
                </g>

                {/* Подсказка */}
                {zipperProgress < 0.5 && (
                  <text x={zipperX} y="210" textAnchor="middle"
                    fill="#64748b" fontSize="12" fontWeight="bold">
                    ← Тащите вправо →
                  </text>
                )}

                {/* Левый фиксатор */}
                <g
                  onClick={() => setLeftClipClosed(!leftClipClosed)}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Корпус фиксатора */}
                  <rect x="85" y="110" width="50" height="28"
                    fill={leftClipClosed ? '#10b981' : '#ef4444'}
                    stroke="#1e293b" strokeWidth="3" rx="8"/>

                  {/* Защёлка */}
                  <rect x="95" y="115" width="12" height="18"
                    fill={leftClipClosed ? '#059669' : '#dc2626'}
                    stroke="#1e293b" strokeWidth="2" rx="3"/>
                  <rect x="113" y="115" width="12" height="18"
                    fill={leftClipClosed ? '#059669' : '#dc2626'}
                    stroke="#1e293b" strokeWidth="2" rx="3"/>

                  {/* Индикатор */}
                  <text x="110" y="127" textAnchor="middle" dominantBaseline="middle"
                    fill="#fff" fontSize="16" fontWeight="bold">
                    {leftClipClosed ? '✓' : '○'}
                  </text>

                  <text x="110" y="98" textAnchor="middle"
                    fill="#475569" fontSize="13" fontWeight="bold">
                    Левый
                  </text>
                </g>

                {/* Правый фиксатор */}
                <g
                  onClick={() => setRightClipClosed(!rightClipClosed)}
                  style={{ cursor: 'pointer' }}
                >
                  <rect x="265" y="110" width="50" height="28"
                    fill={rightClipClosed ? '#10b981' : '#ef4444'}
                    stroke="#1e293b" strokeWidth="3" rx="8"/>

                  <rect x="275" y="115" width="12" height="18"
                    fill={rightClipClosed ? '#059669' : '#dc2626'}
                    stroke="#1e293b" strokeWidth="2" rx="3"/>
                  <rect x="293" y="115" width="12" height="18"
                    fill={rightClipClosed ? '#059669' : '#dc2626'}
                    stroke="#1e293b" strokeWidth="2" rx="3"/>

                  <text x="290" y="127" textAnchor="middle" dominantBaseline="middle"
                    fill="#fff" fontSize="16" fontWeight="bold">
                    {rightClipClosed ? '✓' : '○'}
                  </text>

                  <text x="290" y="98" textAnchor="middle"
                    fill="#475569" fontSize="13" fontWeight="bold">
                    Правый
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Чек-лист ── */}
        <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 shadow-lg flex flex-col overflow-hidden">
          <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 px-6 py-5">
            <h2 className="text-white font-bold text-lg">📋 Чек-лист</h2>
            <p className="text-emerald-300 text-xs mt-1">Порядок действий</p>
          </div>
          <div className="p-5 flex-1 flex flex-col gap-4">
            <div className="space-y-2">
              {[
                { done: zipperProgress >= 0.98, label: 'Застегнуть молнию до конца' },
                { done: leftClipClosed, label: 'Закрыть левый фиксатор' },
                { done: rightClipClosed, label: 'Закрыть правый фиксатор' },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all ${
                    item.done
                      ? 'bg-emerald-50 border-emerald-200'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold border-2 ${
                      item.done
                        ? 'bg-emerald-500 border-emerald-500 text-white'
                        : 'bg-white border-slate-300 text-slate-400'
                    }`}
                  >
                    {item.done ? '✓' : i + 1}
                  </div>
                  <p
                    className={`text-xs font-semibold leading-snug ${
                      item.done
                        ? 'text-emerald-800 line-through decoration-emerald-400'
                        : 'text-slate-600'
                    }`}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-auto">
              <button
                onClick={checkSealing}
                className="w-full bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-4 rounded-2xl shadow-lg transition-all transform hover:-translate-y-0.5 text-sm"
              >
                Подтвердить герметизацию →
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
