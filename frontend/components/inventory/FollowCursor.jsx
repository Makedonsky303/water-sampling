// components/inventory/FollowCursor.jsx
'use client';
import React, { useState, useEffect, useRef } from 'react';
import { renderItemIcon } from './itemRegistry';
import { GasBurnerIcon } from './icons/GasBurnerIcon';
import { WipeIcon } from './icons/WipeIcon';

/**
 * Компонент, заставляющий иконку активного предмета следовать за курсором.
 * @param {object} activeItemDef - Определение активного предмета (содержит activeItemDef.icon)
 * @param {boolean} replaceCursor - Если true, иконка встает ровно под курсор. 
 *                                  Если false, иконка приклеивается рядом (эффект «прицепа»).
 */
export function FollowCursor({ activeItemDef, activeItem, replaceCursor = false, interacting = true, onBurnerFlameProgress }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [mouseInside, setMouseInside] = useState(false);

  // Состояния действий
  const [isHolding, setIsHolding] = useState(false);     // для горелки (пламя)
  const [flameProgress, setFlameProgress] = useState(0);
  const [isWiping, setIsWiping] = useState(false);       // для салфетки (анимация протирки)

  const isBurner = activeItem?.id === 'gas_burner';
  const wipeIds = ['ethyl_wipes', 'isop_wipes', 'antibact_wipes'];
  const isWipe = activeItem && wipeIds.includes(activeItem.id);
  const isBioBottle = activeItem && activeItem.id && activeItem.id.startsWith('bio_tare_');

  const holdingRef = useRef(false);
  const startTimeRef = useRef(0);

  // Мгновенное появление предмета в руке (для всех предметов)
  // Принудительно включаем видимость, как только есть activeItemDef
  useEffect(() => {
    if (activeItemDef) {
      setMouseInside(true);
    } else {
      setMouseInside(false);
      setIsHolding(false);
      setIsWiping(false);
      setFlameProgress(0);
    }
  }, [activeItemDef]);

  // Отслеживание мыши (позиция + видимость)
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
      if (activeItemDef) setMouseInside(true); // мгновенное появление при движении
    };

    const handleMouseEnter = () => setMouseInside(true);
    const handleMouseLeave = () => setMouseInside(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [activeItemDef]);

  // Глобальные обработчики мыши для зажатия ЛКМ
  // Используется и для горелки (пламя), и для салфетки (протирка)
  useEffect(() => {
    if (!isBurner && !isWipe) {
      setIsHolding(false);
      setIsWiping(false);
      setFlameProgress(0);
      holdingRef.current = false;
      return;
    }

    const handleMouseDown = (e) => {
      if (e.button === 0) { // левая кнопка
        holdingRef.current = true;
        startTimeRef.current = Date.now();
        setIsHolding(true);
        if (isWipe) setIsWiping(true);
      }
    };

    const handleMouseUp = (e) => {
      if (e.button === 0) {
        holdingRef.current = false;
        setIsHolding(false);
        setIsWiping(false);
        setFlameProgress(0);
      }
    };

    const handleBlur = () => {
      holdingRef.current = false;
      setIsHolding(false);
      setIsWiping(false);
      setFlameProgress(0);
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('blur', handleBlur);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('blur', handleBlur);
    };
  }, [isBurner, isWipe]);

  // Анимация прогресса пламени горелки (оранжевый → синий) пока зажата мышь
  useEffect(() => {
    if (!isHolding || !isBurner) {
      setFlameProgress(0);
      if (onBurnerFlameProgress) onBurnerFlameProgress(0);
      return;
    }

    const RAMP_MS = 3800; // время перехода в синий цвет

    let rafId;
    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const progress = Math.min(1, elapsed / RAMP_MS);
      setFlameProgress(progress);
      if (onBurnerFlameProgress) onBurnerFlameProgress(progress);
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isHolding, isBurner]);

  // Показываем мгновенно, как только предмет взят в руку.
  // Прячем только когда мышь ушла за пределы окна.
  if (!activeItemDef || !mouseInside) return null;

  // Горелка — очень крупная + анимированное пламя при зажатии ЛКМ
  if (isBurner) {
    return (
      <div
        style={{
          position: 'fixed',
          left: coords.x,
          top: coords.y,
          pointerEvents: 'none',
          zIndex: 99999,
          userSelect: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: replaceCursor 
            ? 'translate(-50%, -50%)' 
            : 'translate(14px, 14px)',
        }}
      >
        <GasBurnerIcon 
          size={144} 
          lit={isHolding && interacting} 
          flameProgress={flameProgress} 
        />
      </div>
    );
  }

  // Салфетка — крупная, с анимацией движения при зажатии ЛКМ
  if (isWipe) {
    return (
      <div
        style={{
          position: 'fixed',
          left: coords.x,
          top: coords.y,
          pointerEvents: 'none',
          zIndex: 99999,
          userSelect: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: replaceCursor 
            ? 'translate(-50%, -50%)' 
            : 'translate(14px, 14px)',
        }}
      >
        <WipeIcon 
          size={80} 
          wiping={isWiping && interacting} 
        />
      </div>
    );
  }

  // Био-флакон — того же размера, что и размещённый под краном (w-40 h-70)
  if (isBioBottle) {
    const w = 40;
    const h = 70;
    return (
      <div
        style={{
          position: 'fixed',
          left: coords.x,
          top: coords.y,
          pointerEvents: 'none',
          zIndex: 99999,
          userSelect: 'none',
          transform: replaceCursor 
            ? 'translate(-50%, -40%)' 
            : 'translate(14px, 14px)',
        }}
      >
        <div
          style={{
            width: `${w}px`,
            height: `${h}px`,
            border: '2px solid #94a3b8',
            borderRadius: '16px 16px 8px 8px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* glass/reflection overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(148,163,184,0.08) 0%, transparent 30%, transparent 70%, rgba(15,23,42,0.06) 100%)',
            pointerEvents: 'none'
          }} />
          {/* subtle top rim / neck */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '14px',
            height: '4px',
            background: '#e2e8f0',
            borderBottom: '1px solid #94a3b8',
            borderRadius: '2px'
          }} />
          {/* label matching the placed bottle */}
          <div style={{
            position: 'absolute',
            bottom: '2px',
            right: '2px',
            fontSize: '4px',
            fontFamily: 'monospace',
            color: '#64748b',
            opacity: 0.5
          }}>
            0.5L
          </div>
        </div>
      </div>
    );
  }

  // Обычные предметы
  return (
    <div
      style={{
        position: 'fixed',
        left: coords.x,
        top: coords.y,
        pointerEvents: 'none', 
        zIndex: 99999,
        userSelect: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: replaceCursor 
          ? 'translate(-50%, -50%)' 
          : 'translate(14px, 14px)',
      }}
    >
      {renderItemIcon(activeItemDef, 36)}
    </div>
  );
}
