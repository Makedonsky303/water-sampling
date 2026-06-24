'use client';
import React, { useState, useEffect } from 'react';

/**
 * Портативная газовая горелка (на цанговый баллон).
 * Поддерживает состояние "горит" (lit) и прогресс нагрева пламени (flameProgress 0→1).
 * При зажатой ЛКМ в руке: пламя появляется и постепенно переходит из оранжевого в синее.
 */
export function GasBurnerIcon({ 
  className = '', 
  size = 24, 
  lit = false, 
  flameProgress = 0,
  inventory = false,
  ...props 
}) {
  const s = size;
  const [flicker, setFlicker] = useState(0);

  // Анимация мерцания пламени (только когда горит)
  useEffect(() => {
    if (!lit) {
      setFlicker(0);
      return;
    }

    let rafId;
    let t = 0;
    const animate = () => {
      t += 0.09;
      // Несколько синусов для естественного живого мерцания
      const f = 
        Math.sin(t) * 0.55 +
        Math.sin(t * 2.4) * 0.35 +
        Math.sin(t * 5.1) * 0.25;
      setFlicker(f);
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, [lit]);

  // Интерполяция цвета оранжевый → синий
  const p = Math.max(0, Math.min(1, flameProgress || 0));

  const outerColor = interpolateColor('#ff5722', '#1e3a8a', p);
  const midColor   = interpolateColor('#ff9800', '#3b82f6', p);
  const coreColor  = interpolateColor('#ffeb3b', '#bae6fd', p);
  const innerCore  = interpolateColor('#fff59d', '#e0f2fe', p);

  // Параметры пламени
  const flameBaseLength = 12 + p * 11;
  const flameHeight = 8 + p * 3.5 + Math.abs(flicker) * 2.8;
  const flameWobble = flicker * 1.9;
  const flameIntensity = 0.7 + p * 0.22;

  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 110 38"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Центрируем устройство (в инвентаре больше) */}
      <g transform={`translate(5 3) scale(${inventory ? 2.5 : 1.25})`}>
      {/* Основной баллон (газовый картридж) */}
      <rect
        x="3"
        y="9"
        width="10"
        height="17"
        rx="2"
        fill="#64748b"
        stroke="#334155"
        strokeWidth="1.5"
      />
      {/* Блик на баллоне */}
      <rect
        x="4.5"
        y="10.5"
        width="3"
        height="14"
        rx="1"
        fill="#94a3b8"
        opacity="0.5"
      />

      {/* Верхняя часть баллона / горловина */}
      <rect
        x="5"
        y="6"
        width="6"
        height="4"
        rx="1"
        fill="#475569"
        stroke="#1e293b"
        strokeWidth="1"
      />

      {/* Регулятор / клапан */}
      <rect
        x="6.5"
        y="3"
        width="3"
        height="4"
        rx="0.5"
        fill="#1e293b"
      />

      {/* Красный регулировочный винт / ручка */}
      <circle cx="8" cy="2.5" r="2" fill="#dc2626" stroke="#7f1d1d" strokeWidth="0.8" />
      <circle cx="8" cy="2.5" r="0.8" fill="#fee2e2" opacity="0.6" />

      {/* Металлическая трубка горелки (длинный ствол) */}
      <g>
        <rect
          x="12.5"
          y="13"
          width="14"
          height="3.5"
          rx="1.2"
          fill="#475569"
          stroke="#1e293b"
          strokeWidth="1"
        />
        <rect
          x="13"
          y="13.6"
          width="12.5"
          height="1.2"
          rx="0.4"
          fill="#94a3b8"
          opacity="0.6"
        />
      </g>

      {/* Насадка горелки (burner head) */}
      <rect
        x="25"
        y="11.5"
        width="5.5"
        height="6.5"
        rx="1.5"
        fill="#334155"
        stroke="#1e293b"
        strokeWidth="1.2"
      />

      {/* Отверстия для пламени (сетка горелки) */}
      <g fill="#1e293b">
        <circle cx="26.3" cy="13" r="0.7" />
        <circle cx="28.5" cy="13" r="0.7" />
        <circle cx="26.3" cy="15.5" r="0.7" />
        <circle cx="28.5" cy="15.5" r="0.7" />
      </g>

      {/* Защитный ободок */}
      <rect
        x="23.5"
        y="12.8"
        width="2"
        height="3.8"
        rx="0.5"
        fill="#1e293b"
      />

      {/* Переходник трубки и баллона */}
      <rect
        x="11.8"
        y="12"
        width="1.5"
        height="5.5"
        rx="0.3"
        fill="#334155"
        stroke="#1e293b"
        strokeWidth="0.5"
      />
      </g>

      {/* ==================== АНИМИРОВАННОЕ ПЛАМЯ (большое и длинное) ==================== */}
      {lit && (
        <g transform={`translate(42 20)`}>
          {/* Самый внешний ореол (мягкий, широкий) */}
          <ellipse
            cx={flameBaseLength * 0.92 + 4}
            cy={flameWobble * 0.2}
            rx={flameBaseLength + 6 + Math.abs(flicker) * 2}
            ry={flameHeight * 1.38}
            fill={outerColor}
            opacity={0.30 * flameIntensity}
          />

          {/* Большой внешний слой */}
          <ellipse
            cx={flameBaseLength * 0.85 + 2}
            cy={flameWobble * 0.35}
            rx={flameBaseLength + 3 + Math.abs(flicker) * 1.5}
            ry={flameHeight * 1.18}
            fill={outerColor}
            opacity={0.42 * flameIntensity}
          />

          {/* Основной средний слой (главный объём) */}
          <ellipse
            cx={flameBaseLength * 0.72}
            cy={flameWobble * 0.25}
            rx={flameBaseLength + 1 + flicker * 1.0}
            ry={flameHeight * 1.0}
            fill={midColor}
            opacity={0.82 * flameIntensity}
          />

          {/* Яркое тело пламени */}
          <ellipse
            cx={flameBaseLength * 0.62}
            cy={flameWobble * 0.1}
            rx={flameBaseLength + flicker * 0.7}
            ry={flameHeight * 0.82}
            fill={midColor}
            opacity={0.95 * flameIntensity}
          />

          {/* Горячее ядро */}
          <ellipse
            cx={flameBaseLength * 0.55}
            cy={flameWobble * 0.05}
            rx={flameBaseLength * 0.55 + flicker * 0.6}
            ry={flameHeight * 0.55}
            fill={coreColor}
            opacity={0.97}
          />

          {/* Внутреннее горячее ядро (самая горячая часть) */}
          <ellipse
            cx={flameBaseLength * 0.40}
            cy={-flameWobble * 0.15}
            rx={flameBaseLength * 0.32}
            ry={flameHeight * 0.30}
            fill={innerCore}
            opacity={0.9 + p * 0.08}
          />

          {/* Длинные боковые языки пламени */}
          <ellipse
            cx={flameBaseLength * 0.66 + 1}
            cy={-flameHeight * 0.4 + flameWobble * 1.0}
            rx={flameBaseLength * 0.52}
            ry={flameHeight * 0.40}
            fill={midColor}
            opacity={0.60 * flameIntensity}
          />
          <ellipse
            cx={flameBaseLength * 0.70}
            cy={flameHeight * 0.36 - flameWobble * 0.85}
            rx={flameBaseLength * 0.48}
            ry={flameHeight * 0.39}
            fill={midColor}
            opacity={0.55 * flameIntensity}
          />

          {/* Дальние языки / кончик для длины */}
          <ellipse
            cx={flameBaseLength * 1.02 + 3}
            cy={flameWobble * 0.05}
            rx={flameBaseLength * 0.38}
            ry={flameHeight * 0.45}
            fill={outerColor}
            opacity={0.42 * flameIntensity}
          />
        </g>
      )}
    </svg>
  );
}

// Простая линейная интерполяция цвета hex
function interpolateColor(color1, color2, factor) {
  const f = Math.max(0, Math.min(1, factor));
  const c1 = hexToRgb(color1);
  const c2 = hexToRgb(color2);

  const r = Math.round(c1.r + (c2.r - c1.r) * f);
  const g = Math.round(c1.g + (c2.g - c1.g) * f);
  const b = Math.round(c1.b + (c2.b - c1.b) * f);

  return rgbToHex(r, g, b);
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 255, g: 128, b: 0 };
}

function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
}
