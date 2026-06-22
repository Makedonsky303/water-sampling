// components/inventory/FollowCursor.jsx
'use client';
import React, { useState, useEffect } from 'react';

/**
 * Компонент, заставляющий иконку активного предмета следовать за курсором.
 * @param {object} activeItemDef - Определение активного предмета (содержит activeItemDef.icon)
 * @param {boolean} replaceCursor - Если true, иконка встает ровно под курсор. 
 *                                  Если false, иконка приклеивается рядом (эффект «прицепа»).
 */
export function FollowCursor({ activeItemDef, replaceCursor = false }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    // Показываем/скрываем иконку при входе и выходе курсора из окна браузера
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Если предмет не выбран или мышь вне экрана — ничего не рендерим
  if (!activeItemDef || !isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        left: coords.x,
        top: coords.y,
        // pointer-events: none жизненно необходим, чтобы клики проходили сквозь иконку на кран
        pointerEvents: 'none', 
        zIndex: 99999,
        fontSize: '28px',
        userSelect: 'none',
        // Смещение относительно острия курсора
        transform: replaceCursor 
          ? 'translate(-50%, -50%)' // Прямо под острием
          : 'translate(14px, 14px)', // Рядом, как прицеп
      }}
    >
      {activeItemDef.icon}
    </div>
  );
}