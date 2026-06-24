// components/inventory/InvSlot.jsx
'use client';
import React, { useState } from 'react';
import { getItemDef, renderItemIcon } from './itemRegistry';

/**
 * Одна ячейка инвентаря/экипировки.
 *
 * Поддерживает два способа перемещения предметов одновременно:
 *  1. Клик: onClick → click-to-move логика в useInventory (handleSlotClick)
 *  2. Drag-and-drop: нативный HTML5 DnD → onDragStart/onDrop в useInventory
 *
 * Props:
 *  - slotId: number | 'helmet' | 'gloves' — идентификатор этого слота,
 *      нужен для drag-and-drop хендлеров (onDragStart/onDrop получают его)
 *  - isDragging: bool — это именно тот слот, который сейчас тащат (приглушаем)
 *  - onDragStart, onDrop, onDragEnd: (slotId) => void
 */
export function InvSlot({
  item,
  isSelected,
  isEquipSlot,
  onClick,
  size = 'md',
  slotId,
  isDragging,
  onDragStart,
  onDrop,
  onDragEnd,
}) {
  const [isDragOver, setIsDragOver] = useState(false);

  const sz = size === 'lg' ? 'w-16 h-16 text-3xl' : size === 'sm' ? 'w-9 h-9 text-lg' : 'w-12 h-12 text-2xl';
  const def = item ? getItemDef(item) : null;

  const handleDragStart = (e) => {
    if (!item) { e.preventDefault(); return; }
    e.dataTransfer.effectAllowed = 'move';
    // Firefox требует setData, иначе drag не запускается
    e.dataTransfer.setData('text/plain', String(slotId));
    onDragStart?.(slotId);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // обязательно, иначе onDrop не сработает
    setIsDragOver(true);
  };

  const handleDragLeave = () => setIsDragOver(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    onDrop?.(slotId);
  };

  const handleDragEnd = () => {
    setIsDragOver(false);
    onDragEnd?.();
  };

  return (
    <button
      onClick={onClick}
      draggable={!!item}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onDragEnd={handleDragEnd}
      className={[
        sz,
        'rounded-xl border-2 flex items-center justify-center transition-all duration-100 select-none',
        item
          ? `${def?.bg || 'bg-slate-700'} ${def?.border || 'border-slate-500'} hover:brightness-110`
          : isEquipSlot
            ? 'bg-slate-800/60 border-slate-600 hover:border-slate-400'
            : 'bg-slate-800/40 border-slate-700 hover:border-slate-500',
        isSelected ? 'ring-2 ring-yellow-400 ring-offset-2 ring-offset-slate-900 scale-110 shadow-lg shadow-yellow-400/20' : '',
        isDragging ? 'opacity-30' : '',
        isDragOver ? 'ring-2 ring-sky-400 ring-offset-2 ring-offset-slate-900 scale-105' : '',
        item ? 'cursor-grab active:cursor-grabbing' : '',
      ].join(' ')}
      title={def?.label || ''}
    >
      {item ? renderItemIcon(item, size === 'lg' ? 28 : size === 'sm' ? 16 : 20) : ''}
    </button>
  );
}
