// components/inventory/Avatar.jsx
'use client';
import React from 'react';

// ─── SVG Avatar — лаборант, реагирует на надетые очки/перчатки ──────────────
export function Avatar({ gogglesOn, glovesType }) {
  const gloveColor  = glovesType === 'sterile' ? '#e2e8f0' : glovesType === 'yellow' ? '#fbbf24' : null;
  const gloveBorder = glovesType === 'sterile' ? '#94a3b8' : '#d97706';
  return (
    <svg viewBox="0 0 120 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="av_skin" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#fcd9b6"/><stop offset="100%" stopColor="#f5b88a"/></linearGradient>
        <linearGradient id="av_coat" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f8fafc"/><stop offset="100%" stopColor="#e2e8f0"/></linearGradient>
        <linearGradient id="av_hair" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#92400e"/><stop offset="100%" stopColor="#78350f"/></linearGradient>
      </defs>
      <rect x="22" y="90" width="76" height="90" rx="8" fill="url(#av_coat)" stroke="#cbd5e1" strokeWidth="1.5"/>
      <path d="M60 90 L45 110 L60 105 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1"/>
      <path d="M60 90 L75 110 L60 105 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1"/>
      <circle cx="60" cy="118" r="2.5" fill="#94a3b8"/>
      <circle cx="60" cy="130" r="2.5" fill="#94a3b8"/>
      <circle cx="60" cy="142" r="2.5" fill="#94a3b8"/>
      <rect x="30" y="110" width="18" height="14" rx="3" fill="none" stroke="#cbd5e1" strokeWidth="1.2"/>
      <rect x="4"  y="92" width="20" height="60" rx="8" fill="url(#av_coat)" stroke="#cbd5e1" strokeWidth="1.5"/>
      <rect x="96" y="92" width="20" height="60" rx="8" fill="url(#av_coat)" stroke="#cbd5e1" strokeWidth="1.5"/>
      {gloveColor ? (
        <>
          <ellipse cx="14"  cy="158" rx="10" ry="12" fill={gloveColor} stroke={gloveBorder} strokeWidth="1.5"/>
          {[0,1,2,3].map(i=><rect key={i} x={7+i*3.5}  y={152} width="2.5" height="8" rx="1.2" fill={glovesType==='sterile'?'#f1f5f9':'#fcd34d'} opacity="0.7"/>)}
          <ellipse cx="106" cy="158" rx="10" ry="12" fill={gloveColor} stroke={gloveBorder} strokeWidth="1.5"/>
          {[0,1,2,3].map(i=><rect key={i} x={99+i*3.5} y={152} width="2.5" height="8" rx="1.2" fill={glovesType==='sterile'?'#f1f5f9':'#fcd34d'} opacity="0.7"/>)}
        </>
      ) : (
        <>
          <ellipse cx="14"  cy="157" rx="9" ry="11" fill="url(#av_skin)" stroke="#f5b88a" strokeWidth="1"/>
          <ellipse cx="106" cy="157" rx="9" ry="11" fill="url(#av_skin)" stroke="#f5b88a" strokeWidth="1"/>
        </>
      )}
      <rect x="30" y="178" width="24" height="38" rx="5" fill="#1e3a5f" stroke="#1e40af" strokeWidth="1"/>
      <rect x="66" y="178" width="24" height="38" rx="5" fill="#1e3a5f" stroke="#1e40af" strokeWidth="1"/>
      <ellipse cx="42" cy="216" rx="14" ry="6" fill="#1e293b"/>
      <ellipse cx="78" cy="216" rx="14" ry="6" fill="#1e293b"/>
      <rect x="52" y="78" width="16" height="16" rx="4" fill="url(#av_skin)"/>
      <ellipse cx="60" cy="60" rx="26" ry="28" fill="url(#av_skin)" stroke="#f5b88a" strokeWidth="1"/>
      <path d="M34 52 Q36 28 60 26 Q84 28 86 52 Q80 38 60 36 Q40 38 34 52 Z" fill="url(#av_hair)"/>
      <ellipse cx="50" cy="58" rx="5" ry="5.5" fill="white" stroke="#cbd5e1" strokeWidth="0.5"/>
      <ellipse cx="70" cy="58" rx="5" ry="5.5" fill="white" stroke="#cbd5e1" strokeWidth="0.5"/>
      <circle cx="51" cy="59" r="3" fill="#1e293b"/>
      <circle cx="71" cy="59" r="3" fill="#1e293b"/>
      <circle cx="52.2" cy="57.5" r="1" fill="white"/>
      <circle cx="72.2" cy="57.5" r="1" fill="white"/>
      <ellipse cx="60" cy="66" rx="3" ry="2" fill="url(#av_skin)" stroke="#e8a070" strokeWidth="0.5"/>
      <path d="M53 72 Q60 77 67 72" stroke="#c07850" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <ellipse cx="34" cy="60" rx="5" ry="7" fill="url(#av_skin)" stroke="#f5b88a" strokeWidth="0.8"/>
      <ellipse cx="86" cy="60" rx="5" ry="7" fill="url(#av_skin)" stroke="#f5b88a" strokeWidth="0.8"/>
      {gogglesOn && (
        <g>
          <rect x="32" y="55" width="56" height="12" rx="6" fill="#1e3a5f" opacity="0.2"/>
          <rect x="36" y="53" width="20" height="14" rx="5" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1.8" opacity="0.85"/>
          <rect x="38" y="55" width="6"  height="5"  rx="2" fill="white" opacity="0.4"/>
          <rect x="64" y="53" width="20" height="14" rx="5" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1.8" opacity="0.85"/>
          <rect x="66" y="55" width="6"  height="5"  rx="2" fill="white" opacity="0.4"/>
          <rect x="56" y="57" width="8"  height="4"  rx="2" fill="#3b82f6" opacity="0.7"/>
        </g>
      )}
    </svg>
  );
}
