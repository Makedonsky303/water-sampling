// components/inventory/InvSlot.jsx
'use client';
import React, { useState } from 'react';
import { getItemDef, renderItemIcon } from './itemRegistry';

/**
 * Одна ячейка инвентаря/экипировки.
 *
 * Поддерживает:
 *  1. Левый клик: onClick → click-to-move всего стека (handleSlotClick)
 *  2. Правый клик: onContextMenu → перенос ровно 1 штуки (handleSlotRightClick),
 *     как в Minecraft
 *  3. Drag-and-drop: нативный HTML5 DnD → onDragStart/onDrop.
 *     Удерживайте Alt при отпускании, чтобы перетащить только 1 штуку.
 *
 * Если у предмета item.qty > 1, в правом нижнем углу рисуется бейдж
 * с количеством.
 *
 * Props:
 *  - slotId: number | 'helmet' | 'gloves'
 *  - isDragging: bool — это именно тот слот, который сейчас тащат
 *  - onClick, onRightClick: (slotId) => void
 *  - onDragStart: (slotId) => void
 *  - onDrop: (slotId, isAltKey) => void
 *  - onDragEnd: () => void
 */
export function InvSlot({
  item,
  isSelected,
  isEquipSlot,
  onClick,
  onRightClick,
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
  const qty = item?.qty ?? 1;

  const handleContextMenu = (e) => {
    e.preventDefault(); // подавляем системное контекстное меню браузера
    onRightClick?.(slotId);
  };

  const handleDragStart = (e) => {
    if (!item) { e.preventDefault(); return; }
    e.dataTransfer.effectAllowed = 'move';
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
    onDrop?.(slotId, e.altKey);
  };

  const handleDragEnd = () => {
    setIsDragOver(false);
    onDragEnd?.();
  };

  return (
    <button
      onClick={onClick}
      onContextMenu={handleContextMenu}
      draggable={!!item}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onDragEnd={handleDragEnd}
      className={[
        sz,
        'relative rounded-xl border-2 flex items-center justify-center transition-all duration-100 select-none',
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
      title={def ? `${def.label}${qty > 1 ? ` ×${qty}` : ''}` : ''}
    >
      {item ? renderItemIcon(item, size === 'lg' ? 28 : size === 'sm' ? 16 : 20) : ''}
      {item && qty > 1 && (
        <span 
          className="absolute bottom-0.5 right-0.5 text-[10px] leading-none font-black text-white px-1 py-0.5 rounded"
          style={{ 
            background: 'rgba(0, 0, 0, 0.7)',
            textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000' 
          }}
        >
          {qty}
        </span>
      )}
    </button>
  );
}
