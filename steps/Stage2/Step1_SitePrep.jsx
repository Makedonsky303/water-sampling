// src/steps/Stage2/Step1_SitePrep.jsx
'use client';
import React, { useState } from 'react';

// ─── SVG Faucet Component ───────────────────────────────────────────────────
// Layout reference (viewBox 0 0 600 560):
//   Wall mount:   x=260 y=30  w=80 h=60
//   Vertical pipe: x=265 y=88  w=60 h=140
//   Handles:      y=92
//   Curved arm:   from x=325 y=158 → curves right → down to x=440 y=280
//   Spout tip:    x=440 y=280..360  (the vertical "nose")
//   Aerator:      cx=440 cy=360
//   Spots:        on spout tip cx≈440
//   Sink:         y=400..540, full width
function FaucetSVG({ aeratorRemoved, spotsLeft, isWiping, onRemoveAerator, onWipeSpot, glovesEquipped }) {
  const canInteract = !!glovesEquipped;

  // Spout tip vertical centre x=440, spans y=280..360. Spots distributed along it.
  const spots = [
    { id: 0, cx: 440, cy: 300, r: 7 },
    { id: 1, cx: 432, cy: 322, r: 6 },
    { id: 2, cx: 448, cy: 340, r: 5.5 },
  ];

  return (
    <svg
      viewBox="0 0 600 560"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-sm mx-auto select-none"
      style={{ filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.15))' }}
    >
      <defs>
        <linearGradient id="sinkGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#b0bec5" />
        </linearGradient>
        <linearGradient id="chromeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f1f5f9" />
          <stop offset="35%" stopColor="#e2e8f0" />
          <stop offset="65%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>
        <linearGradient id="chromeSide" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="40%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>
        <linearGradient id="spoutGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f1f5f9" />
          <stop offset="45%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>
        <linearGradient id="rustGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#92400e" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
        <radialGradient id="aeratorGrad" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#1e293b" />
        </radialGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="wipeGlow">
          <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="labelShadow" x="-20%" y="-40%" width="140%" height="180%">
          <feDropShadow dx="0" dy="1" stdDeviation="3" floodColor="#000" floodOpacity="0.5"/>
        </filter>
      </defs>

      {/* ── Sink basin ── */}
      <path d="M30 405 Q30 540 120 540 L480 540 Q570 540 570 405 L570 395 L30 395 Z"
        fill="url(#sinkGrad)" stroke="#94a3b8" strokeWidth="2.5"/>
      {/* Sink rim highlight */}
      <path d="M30 395 L570 395" stroke="#f1f5f9" strokeWidth="3" opacity="0.6"/>
      {/* Inner shadow */}
      <ellipse cx="300" cy="400" rx="260" ry="10" fill="#94a3b8" opacity="0.3"/>
      {/* Drain */}
      <ellipse cx="300" cy="520" rx="30" ry="10" fill="#94a3b8" stroke="#64748b" strokeWidth="2"/>
      <line x1="282" y1="520" x2="318" y2="520" stroke="#64748b" strokeWidth="2"/>
      <line x1="300" y1="510" x2="300" y2="530" stroke="#64748b" strokeWidth="2"/>

      {/* ── Wall mount / pipe base ── */}
      <rect x="260" y="28" width="80" height="62" rx="10" fill="url(#chromeGrad)" stroke="#94a3b8" strokeWidth="2"/>
      <rect x="272" y="34" width="10" height="50" rx="3" fill="white" opacity="0.4"/>

      {/* ── Vertical pipe ── */}
      <rect x="265" y="88" width="70" height="150" rx="6" fill="url(#chromeSide)" stroke="#94a3b8" strokeWidth="2"/>
      <rect x="275" y="88" width="12" height="150" rx="4" fill="white" opacity="0.3"/>

      {/* ── Handle left (HOT) ── */}
      <rect x="188" y="92" width="80" height="28" rx="14" fill="url(#chromeSide)" stroke="#94a3b8" strokeWidth="2"/>
      <circle cx="205" cy="106" r="13" fill="url(#chromeGrad)" stroke="#fca5a5" strokeWidth="1.5"/>
      <text x="205" y="111" textAnchor="middle" fontSize="11" fill="#ef4444" fontWeight="bold">H</text>

      {/* ── Handle right (COLD) ── */}
      <rect x="332" y="92" width="80" height="28" rx="14" fill="url(#chromeSide)" stroke="#94a3b8" strokeWidth="2"/>
      <circle cx="395" cy="106" r="13" fill="url(#chromeGrad)" stroke="#93c5fd" strokeWidth="1.5"/>
      <text x="395" y="111" textAnchor="middle" fontSize="11" fill="#3b82f6" fontWeight="bold">C</text>

      {/* ── Curved spout arm ── */}
      {/* Outer stroke (shadow) */}
      <path d="M335 158 Q440 158 440 258 L440 280"
        stroke="#64748b" strokeWidth="46" fill="none" strokeLinecap="round"/>
      {/* Main chrome */}
      <path d="M335 158 Q440 158 440 258 L440 280"
        stroke="url(#chromeSide)" strokeWidth="40" fill="none" strokeLinecap="round"/>
      {/* Inner lighter chrome */}
      <path d="M335 158 Q440 158 440 258 L440 280"
        stroke="url(#chromeGrad)" strokeWidth="32" fill="none" strokeLinecap="round"/>
      {/* Highlight */}
      <path d="M333 153 Q436 153 436 258 L436 280"
        stroke="white" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.25"/>

      {/* ── Spout tip (vertical nose) ── */}
      <rect x="422" y="272" width="36" height="88" rx="5"
        fill="url(#spoutGrad)" stroke="#94a3b8" strokeWidth="2"/>
      <rect x="427" y="272" width="8" height="88" rx="3" fill="white" opacity="0.22"/>

      {/* ── Rust/dirt spots — ON the spout tip ── */}
      {spots.map((spot) => {
        const visible = spot.id < spotsLeft;
        if (!visible) return null;
        return (
          <g key={spot.id}>
            <circle cx={spot.cx} cy={spot.cy} r={spot.r + 5}
              fill="url(#rustGrad)" opacity="0.12"/>
            <circle cx={spot.cx} cy={spot.cy} r={spot.r}
              fill="url(#rustGrad)" opacity="0.9"
              className={canInteract && !isWiping ? 'cursor-pointer' : 'cursor-default'}
              onClick={() => canInteract && onWipeSpot(spot.id)}
            />
            {canInteract && !isWiping && (
              <circle cx={spot.cx} cy={spot.cy} r={spot.r + 9}
                fill="transparent" stroke="#f59e0b" strokeWidth="2"
                strokeDasharray="4,3" opacity="0.8"
                className="cursor-pointer"
                onClick={() => onWipeSpot(spot.id)}
                style={{ transformOrigin: `${spot.cx}px ${spot.cy}px`, animation: 'spin 3s linear infinite' }}
              />
            )}
          </g>
        );
      })}

      {/* Wipe shimmer */}
      {isWiping && (
        <ellipse cx="440" cy="320" rx="28" ry="50"
          fill="#fef3c7" opacity="0.6" filter="url(#wipeGlow)"/>
      )}

      {/* ── Aerator (mesh tip) ── */}
      {!aeratorRemoved ? (
        <g onClick={onRemoveAerator} className="cursor-pointer"
          style={{ filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.4))' }}>
          {/* Aerator body */}
          <ellipse cx="440" cy="362" rx="22" ry="13" fill="url(#aeratorGrad)" stroke="#475569" strokeWidth="2.5"/>
          <ellipse cx="440" cy="358" rx="17" ry="9" fill="#64748b" opacity="0.45"/>
          {/* Mesh */}
          {[0,1,2,3,4].map(col => (
            <line key={`vc${col}`} x1={424 + col*5} y1="352" x2={424 + col*5} y2="370"
              stroke="#94a3b8" strokeWidth="1" opacity="0.55"/>
          ))}
          {[0,1,2].map(row => (
            <line key={`hr${row}`} x1="421" y1={354 + row*5} x2="459" y2={354 + row*5}
              stroke="#94a3b8" strokeWidth="1" opacity="0.55"/>
          ))}
          <ellipse cx="440" cy="362" rx="22" ry="13" fill="none" stroke="#e2e8f0" strokeWidth="1" opacity="0.3"/>

          {/* ── "нажми" label — prominent badge ── */}
          <rect x="310" y="349" width="108" height="28" rx="14"
            fill="#f59e0b" filter="url(#labelShadow)"/>
          <text x="364" y="368" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">
            нажми ⚙️
          </text>
          {/* Arrow pointing right to aerator */}
          <line x1="418" y1="363" x2="465" y2="363" stroke="#f59e0b" strokeWidth="0" opacity="0"/>
          <path d="M418 363 L408 358 L408 368 Z" fill="#f59e0b" opacity="0.9"/>
        </g>
      ) : (
        <g>
          {/* Open dark hole */}
          <ellipse cx="440" cy="362" rx="22" ry="10" fill="#1e293b" stroke="#475569" strokeWidth="2"/>
          <ellipse cx="440" cy="360" rx="16" ry="6" fill="#0f172a" opacity="0.9"/>
          {/* Removed badge */}
          <rect x="355" y="350" width="72" height="24" rx="12" fill="#dcfce7" stroke="#86efac" strokeWidth="1.5"/>
          <text x="391" y="366" textAnchor="middle" fontSize="12" fill="#166534" fontWeight="bold">Снят ✓</text>
          {/* Aerator in sink */}
          <ellipse cx="160" cy="510" rx="20" ry="11" fill="#64748b" stroke="#475569" strokeWidth="2" opacity="0.85"/>
          <text x="160" y="530" textAnchor="middle" fontSize="10" fill="#94a3b8" fontWeight="600">аэратор</text>
        </g>
      )}

      {/* ── Water drips when fully ready ── */}
      {spotsLeft === 0 && aeratorRemoved && (
        <>
          {[0,1,2].map(i => (
            <ellipse key={i}
              cx={436 + i * 5} cy={372 + i * 18}
              rx="3.5" ry="6"
              fill="#bae6fd" opacity="0.7"
              style={{ animation: `drip 1.5s ${i * 0.5}s ease-in infinite` }}
            />
          ))}
        </>
      )}
    </svg>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────
export default function Step1_SitePrep({ logs, onComplete }) {
  const hasGogglesInBag = logs.kitResults.some(item => item.id === "safety_goggles");
  const hasSterileGlovesInBag = logs.kitResults.some(item => item.id === "sterile_gloves");
  const hasYellowGlovesInBag = logs.kitResults.some(item => item.id === "regular_gloves");

  const [gogglesEquipped, setGogglesEquipped] = useState(false);
  const [glovesEquipped, setGlovesEquipped] = useState(null);

  const [aeratorRemoved, setAeratorRemoved] = useState(false);
  const [spotsLeft, setSpotsLeft] = useState(3);
  const [isWiping, setIsWiping] = useState(false);

  const [validationWarning, setValidationWarning] = useState("");

  const handleWipeSpot = () => {
    if (!glovesEquipped) {
      setValidationWarning("⚠️ Нельзя чистить кран голыми руками! Сначала наденьте перчатки.");
      return;
    }
    if (isWiping || spotsLeft === 0) return;
    setValidationWarning("");
    setIsWiping(true);
    setTimeout(() => {
      setSpotsLeft(prev => Math.max(0, prev - 1));
      setIsWiping(false);
    }, 500);
  };

  const handleRemoveAerator = () => {
    setAeratorRemoved(true);
  };

  const handleCompletePrep = () => {
    if (!aeratorRemoved) {
      setValidationWarning("Необходимо демонтировать аэратор (сеточку) с крана.");
      return;
    }
    if (spotsLeft > 0) {
      setValidationWarning("Очистите носик крана от всех видимых загрязнений.");
      return;
    }
    let errors = [];
    let scorePenalty = 0;
    if (!gogglesEquipped) { errors.push("Нарушение ТБ: Вы проводили работы на объекте без защитных очков."); scorePenalty += 10; }
    if (!glovesEquipped) { errors.push("Нарушение стерильности: Вы подготовили точку отбора голыми руками."); scorePenalty += 20; }
    else if (glovesEquipped === 'yellow') { errors.push("Нарушение стерильности: Вы использовали хозяйственные перчатки вместо стерильных."); scorePenalty += 15; }
    onComplete({ prepErrors: errors, prepScorePenalty: scorePenalty, gogglesEquipped, glovesEquipped });
  };

  const checklist = [
    { done: gogglesEquipped || !hasGogglesInBag ? (glovesEquipped !== null || !hasSterileGlovesInBag && !hasYellowGlovesInBag) : false, label: "Надеть СИЗ (очки + перчатки)", done: gogglesEquipped && glovesEquipped },
    { done: aeratorRemoved, label: "Демонтировать аэратор (клик по ⚙)" },
    { done: spotsLeft === 0, label: "Очистить носик крана от ржавчины" },
  ];

  return (
    <div className="w-full max-w-6xl mb-6">
      <style>{`
        @keyframes drip {
          0%   { transform: translateY(0); opacity: 0.7; }
          80%  { transform: translateY(60px); opacity: 0.4; }
          100% { transform: translateY(70px); opacity: 0; }
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse-soft {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        .step-card {
          background: white;
          border-radius: 20px;
          border: 1.5px solid #e2e8f0;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
          overflow: hidden;
        }
        .equip-btn {
          transition: all 0.2s cubic-bezier(.4,0,.2,1);
        }
        .equip-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 18px rgba(0,0,0,0.1); }
      `}</style>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

        {/* ── LEFT: Equipment panel ── */}
        <div className="lg:col-span-3 step-card flex flex-col">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 px-6 py-5">
            <h2 className="text-white font-bold text-lg tracking-tight">🎒 Снаряжение</h2>
            <p className="text-slate-400 text-xs mt-1">Наденьте защитную экипировку</p>
          </div>

          <div className="p-5 flex flex-col gap-3 flex-1">
            {/* Goggles */}
            {hasGogglesInBag ? (
              <button
                className={`equip-btn w-full p-4 rounded-2xl border-2 text-left transition-all
                  ${gogglesEquipped
                    ? 'bg-emerald-50 border-emerald-400 shadow-emerald-100 shadow-md'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300'}`}
                onClick={() => setGogglesEquipped(v => !v)}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl
                    ${gogglesEquipped ? 'bg-emerald-100' : 'bg-slate-100'}`}>
                    👓
                  </div>
                  <div>
                    <p className={`font-bold text-sm ${gogglesEquipped ? 'text-emerald-800' : 'text-slate-700'}`}>
                      Защитные очки
                    </p>
                    <p className={`text-xs ${gogglesEquipped ? 'text-emerald-600' : 'text-slate-400'}`}>
                      {gogglesEquipped ? '✓ Надеты' : 'В рюкзаке'}
                    </p>
                  </div>
                </div>
              </button>
            ) : (
              <div className="p-4 border-2 border-dashed border-red-200 rounded-2xl bg-red-50/50">
                <p className="text-xs text-red-500 font-semibold text-center">👓 Очки забыты<br/>в лаборатории</p>
              </div>
            )}

            {/* Separator */}
            <div className="text-xs text-slate-400 font-bold uppercase tracking-widest text-center">Перчатки</div>

            {hasSterileGlovesInBag && (
              <button
                className={`equip-btn w-full p-4 rounded-2xl border-2 text-left
                  ${glovesEquipped === 'sterile'
                    ? 'bg-emerald-50 border-emerald-400 shadow-emerald-100 shadow-md'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300'}`}
                onClick={() => setGlovesEquipped(g => g === 'sterile' ? null : 'sterile')}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl
                    ${glovesEquipped === 'sterile' ? 'bg-emerald-100' : 'bg-slate-100'}`}>
                    🧤
                  </div>
                  <div>
                    <p className={`font-bold text-sm ${glovesEquipped === 'sterile' ? 'text-emerald-800' : 'text-slate-700'}`}>
                      Стерильные латексные
                    </p>
                    <p className={`text-xs ${glovesEquipped === 'sterile' ? 'text-emerald-600' : 'text-slate-400'}`}>
                      {glovesEquipped === 'sterile' ? '✓ Надеты' : 'В рюкзаке'}
                    </p>
                  </div>
                </div>
              </button>
            )}

            {hasYellowGlovesInBag && (
              <button
                className={`equip-btn w-full p-4 rounded-2xl border-2 text-left
                  ${glovesEquipped === 'yellow'
                    ? 'bg-amber-50 border-amber-400 shadow-amber-100 shadow-md'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300'}`}
                onClick={() => setGlovesEquipped(g => g === 'yellow' ? null : 'yellow')}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl
                    ${glovesEquipped === 'yellow' ? 'bg-amber-100' : 'bg-slate-100'}`}>
                    🧹
                  </div>
                  <div>
                    <p className={`font-bold text-sm ${glovesEquipped === 'yellow' ? 'text-amber-800' : 'text-slate-700'}`}>
                      Хозяйственные
                    </p>
                    <p className={`text-xs ${glovesEquipped === 'yellow' ? 'text-amber-600' : 'text-slate-400'}`}>
                      {glovesEquipped === 'yellow' ? 'Надеты' : 'В рюкзаке'}
                    </p>
                  </div>
                </div>
              </button>
            )}

            {!hasSterileGlovesInBag && !hasYellowGlovesInBag && (
              <div className="p-4 border-2 border-dashed border-red-200 rounded-2xl bg-red-50/50">
                <p className="text-xs text-red-500 font-semibold text-center">⚠️ Перчатки не взяты!<br/>Придётся работать голыми руками.</p>
              </div>
            )}

            {/* Current status */}
            <div className="mt-auto pt-3 border-t border-slate-100">
              <div className={`rounded-xl p-3 text-xs font-semibold
                ${gogglesEquipped && glovesEquipped
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : 'bg-amber-50 text-amber-700 border border-amber-200'}`}>
                {gogglesEquipped && glovesEquipped
                  ? '✅ СИЗ полностью надеты'
                  : '⚠️ Наденьте защиту перед работой'}
              </div>
            </div>
          </div>
        </div>

        {/* ── CENTER: Faucet simulator ── */}
        <div className="lg:col-span-6 step-card flex flex-col">
          <div className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 px-6 py-5">
            <h2 className="text-white font-bold text-lg tracking-tight">🚰 Кран на объекте — крупный план</h2>
            <p className="text-slate-400 text-xs mt-1">Снимите аэратор и протрите носик ветошью перед обжигом</p>
          </div>

          <div className="flex-1 flex flex-col items-center justify-between p-4 bg-gradient-to-b from-slate-50 to-white relative">

            {/* Info overlay badges */}
            <div className="w-full flex justify-between items-start mb-2">
              <div className={`text-xs font-bold px-3 py-1.5 rounded-full border
                ${aeratorRemoved
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  : 'bg-amber-50 text-amber-700 border-amber-200 animate-pulse'}`}>
                {aeratorRemoved ? '✓ Аэратор снят' : '⚙ Кликните по сеточке'}
              </div>
              <div className={`text-xs font-bold px-3 py-1.5 rounded-full border
                ${spotsLeft === 0
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  : 'bg-orange-50 text-orange-700 border-orange-200'}`}>
                {spotsLeft === 0 ? '✓ Носик чистый' : `Загрязнений: ${spotsLeft}/3`}
              </div>
            </div>

            {/* SVG Faucet */}
            <div className="w-full flex-1 flex items-center justify-center min-h-[380px]">
              <FaucetSVG
                aeratorRemoved={aeratorRemoved}
                spotsLeft={spotsLeft}
                isWiping={isWiping}
                onRemoveAerator={handleRemoveAerator}
                onWipeSpot={handleWipeSpot}
                glovesEquipped={glovesEquipped}
              />
            </div>

            {/* Rag / wipe tool */}
            <div className={`w-full flex items-center gap-4 rounded-2xl p-4 border-2 mt-2 transition-all
              ${spotsLeft === 0
                ? 'bg-emerald-50 border-emerald-200'
                : glovesEquipped
                  ? 'bg-white border-slate-200 hover:border-amber-300'
                  : 'bg-slate-50 border-slate-200 opacity-60'}`}>
              <div className="text-3xl select-none">🧻</div>
              <div className="flex-1">
                <p className="font-bold text-sm text-slate-800">
                  {spotsLeft === 0 ? 'Носик очищен от ржавчины' : 'Сухая ветошь'}
                </p>
                <p className="text-xs text-slate-500">
                  {spotsLeft === 0
                    ? 'Поверхность готова к обжигу горелкой'
                    : 'Кликайте по пятнам ржавчины на кране, чтобы удалить их'}
                </p>
              </div>
              {spotsLeft > 0 && (
                <button
                  disabled={!glovesEquipped || isWiping}
                  onClick={handleWipeSpot}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs transition-all
                    ${!glovesEquipped
                      ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      : isWiping
                        ? 'bg-amber-200 text-amber-800 cursor-wait'
                        : 'bg-amber-100 hover:bg-amber-200 text-amber-800 shadow-sm'}`}
                >
                  {isWiping ? '⏳ Протирка...' : `Протереть (${3 - spotsLeft}/3)`}
                </button>
              )}
            </div>

          </div>
        </div>

        {/* ── RIGHT: Checklist + Complete ── */}
        <div className="lg:col-span-3 step-card flex flex-col">
          <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 px-6 py-5">
            <h2 className="text-white font-bold text-lg tracking-tight">📋 Задачи</h2>
            <p className="text-emerald-300 text-xs mt-1">Чек-лист подготовки крана</p>
          </div>

          <div className="p-5 flex flex-col gap-4 flex-1">

            {/* Checklist */}
            <div className="space-y-2">
              {checklist.map((item, i) => (
                <div key={i}
                  className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all
                    ${item.done
                      ? 'bg-emerald-50 border-emerald-200'
                      : 'bg-slate-50 border-slate-200'}`}>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold border-2
                    ${item.done
                      ? 'bg-emerald-500 border-emerald-500 text-white'
                      : 'bg-white border-slate-300 text-slate-400'}`}>
                    {item.done ? '✓' : i + 1}
                  </div>
                  <p className={`text-xs font-semibold leading-snug
                    ${item.done ? 'text-emerald-800 line-through decoration-emerald-400' : 'text-slate-600'}`}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Status summary */}
            <div className="bg-slate-900 rounded-xl p-4 text-white text-xs space-y-2 border border-slate-700">
              <p className="font-bold text-slate-300 uppercase tracking-wider text-[10px]">Статус защиты</p>
              <div className="flex justify-between">
                <span className="text-slate-400">👓 Очки:</span>
                <span className={gogglesEquipped ? 'text-emerald-400 font-bold' : 'text-red-400'}>
                  {gogglesEquipped ? 'Надеты' : 'Сняты'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">🧤 Перчатки:</span>
                <span className={glovesEquipped ? (glovesEquipped === 'sterile' ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold') : 'text-red-400'}>
                  {glovesEquipped === 'sterile' ? 'Стерильные ✓' : glovesEquipped === 'yellow' ? 'Хозяйственные ⚠' : 'Нет'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">⚙️ Аэратор:</span>
                <span className={aeratorRemoved ? 'text-emerald-400 font-bold' : 'text-red-400'}>
                  {aeratorRemoved ? 'Снят ✓' : 'На месте'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">🧹 Носик:</span>
                <span className={spotsLeft === 0 ? 'text-emerald-400 font-bold' : 'text-orange-400'}>
                  {spotsLeft === 0 ? 'Чистый ✓' : `Грязь ${spotsLeft}/3`}
                </span>
              </div>
            </div>

            {/* ГОСТ tip */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs text-blue-800">
              <p className="font-bold mb-1">📖 ГОСТ Р 59024‑2020</p>
              <p className="leading-relaxed text-blue-700">
                Перед отбором: снять аэратор, прочистить излив, продезинфицировать горелкой и дать воде слиться 5–10 мин.
              </p>
            </div>

            <div className="mt-auto">
              {validationWarning && (
                <div className="mb-3 bg-red-50 border border-red-200 rounded-xl p-3">
                  <p className="text-red-600 text-xs font-bold text-center">{validationWarning}</p>
                </div>
              )}
              <button
                onClick={handleCompletePrep}
                className="w-full bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-4 rounded-2xl shadow-lg transition-all transform hover:-translate-y-0.5 hover:shadow-xl text-sm"
              >
                Подтвердить подготовку →
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}