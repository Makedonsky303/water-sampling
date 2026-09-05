'use client';
import React, { useState, useEffect } from 'react';

/**
 * Качественный рисунок салфетки (влажная протирочная салфетка).
 * Используется для этиловых, изопропиловых и антибактериальных салфеток.
 * Поддерживает анимацию протирки (движение из стороны в сторону при wiping=true).
 */
export function WipeIcon({ className = '', size = 24, wiping = false, ...props }) {
  const s = size;
  const [offset, setOffset] = useState(0);

  // Анимация "протирки" — салфетка двигается влево-вправо
  useEffect(() => {
    if (!wiping) {
      setOffset(0);
      return;
    }

    let rafId;
    let t = 0;
    const animate = () => {
      t += 0.16;
      // Плавное синусоидальное движение из стороны в сторону
      const o = Math.sin(t) * 8;
      setOffset(o);
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, [wiping]);

  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 70 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Сдвигаемая группа для анимации протирки */}
      <g transform={`translate(${offset + 8} 0)`}>
        {/* Основная салфетка — мягкий прямоугольник со скруглением */}
        <rect
          x="5"
          y="5"
          width="36"
          height="24"
          rx="5"
          ry="5"
          fill="#e0f2fe"
          stroke="#475569"
          strokeWidth="2.5"
        />

        {/* Внутренний слой (влажная текстура) */}
        <rect
          x="7"
          y="7"
          width="32"
          height="20"
          rx="3"
          ry="3"
          fill="#bae6fd"
          opacity="0.65"
        />

        {/* Складки / текстура салфетки (горизонтальные линии) */}
        <line x1="9" y1="11" x2="39" y2="11" stroke="#64748b" strokeWidth="1.2" opacity="0.5" />
        <line x1="9" y1="15" x2="39" y2="15" stroke="#64748b" strokeWidth="1.2" opacity="0.45" />
        <line x1="9" y1="19" x2="39" y2="19" stroke="#64748b" strokeWidth="1.2" opacity="0.4" />
        <line x1="9" y1="23" x2="39" y2="23" stroke="#64748b" strokeWidth="1" opacity="0.35" />

        {/* Диагональная складка (реалистичность) */}
        <path
          d="M10 8 Q 22 14, 36 9"
          stroke="#64748b"
          strokeWidth="1.5"
          opacity="0.35"
          fill="none"
        />
        <path
          d="M8 26 Q 20 20, 38 27"
          stroke="#64748b"
          strokeWidth="1.2"
          opacity="0.3"
          fill="none"
        />

        {/* Блик от влаги (блестящая область) */}
        <ellipse
          cx="15"
          cy="12"
          rx="9"
          ry="5"
          fill="#f0f9ff"
          opacity="0.55"
        />

        {/* Ещё один блик для объёма */}
        <ellipse
          cx="28"
          cy="18"
          rx="6"
          ry="3.5"
          fill="#ffffff"
          opacity="0.35"
        />

        {/* Тонкая кромка / шов по краю */}
        <rect
          x="5"
          y="5"
          width="36"
          height="24"
          rx="5"
          ry="5"
          fill="none"
          stroke="#475569"
          strokeWidth="1"
          opacity="0.7"
        />

        {/* Небольшие "капли" или влажные пятна */}
        <circle cx="12" cy="21" r="1.8" fill="#67e8f9" opacity="0.4" />
        <circle cx="33" cy="10" r="1.4" fill="#67e8f9" opacity="0.35" />
      </g>
    </svg>
  );
}
