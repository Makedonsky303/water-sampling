// components/inventory/MinecraftInventory.jsx
'use client';
import React from 'react';
import { getItemDef } from './itemRegistry';
import { Avatar } from './Avatar';
import { InvSlot } from './InvSlot';

/**
 * MinecraftInventory — «глупое» модальное окно инвентаря.
 *
 * Не владеет состоянием самостоятельно — все данные и функции приходят
 * из хука useInventory на уровне родителя (Step1_SitePrep), который
 * также рисует hotbar вне модалки. Компонент только рендерит сетку 3×9 +
 * hotbar + экипировку и проводит клики/drag-and-drop к переданным хендлерам.
 *
 * Props:
 *  - slots: Array<item|null>            — все 36 слотов (0-8 hotbar, 9-35 инвентарь)
 *  - selectedSlot: number | 'helmet' | 'gloves' | null  — выделено кликом
 *  - draggedSlot: number | 'helmet' | 'gloves' | null   — тащится сейчас (drag-and-drop)
 *  - equippedHelmet: boolean
 *  - equippedGloves: null | 'sterile' | 'yellow'
 *  - onSlotClick: (target) => void        — клик по слоту
 *  - onDragStart: (slotId) => void        — начало перетаскивания
 *  - onDrop: (slotId) => void             — предмет отпущен над этим слотом
 *  - onDragEnd: () => void                — перетаскивание завершено (в т.ч. отмена)
 *  - isOpen: bool
 *  - onClose: () => void
 */
export default function MinecraftInventory({
  slots,
  selectedSlot,
  draggedSlot,
  equippedHelmet,
  equippedGloves,
  onSlotClick,
  onDragStart,
  onDrop,
  onDragEnd,
  isOpen,
  onClose,
}) {
  if (!isOpen) return null;

  const hotbar = slots.slice(0, 9);
  const main   = slots.slice(9, 36);
  const helmetItem = equippedHelmet ? { id: 'safety_goggles' } : null;
  const glovesItem = equippedGloves === 'sterile' ? { id: 'sterile_gloves' }
    : equippedGloves === 'yellow' ? { id: 'regular_gloves' } : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 absolute"
      style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(6px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose?.(); }}
    >
      <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl"
        style={{ background: '#1a1f2e', border: '2px solid #374151' }}>

        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700">
          <div>
            <h2 className="text-white font-bold text-xl">🎒 Инвентарь</h2>
            <p className="text-slate-400 text-xs mt-0.5">
              Клик: выделите предмет → кликните в нужный слот. Или просто перетащите его мышью.
            </p>
          </div>
          <button onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-700 hover:bg-red-600 text-slate-300 hover:text-white font-bold text-lg flex items-center justify-center transition-all">
            ×
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto]">
          {/* ── Сетка инвентаря + hotbar ── */}
          <div className="p-6 space-y-5">
            <div>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Инвентарь</p>
              <div className="grid grid-cols-9 gap-1.5">
                {main.map((item, i) => {
                  const slotId = i + 9;
                  return (
                    <InvSlot key={i} item={item} slotId={slotId}
                      isSelected={selectedSlot === slotId}
                      isDragging={draggedSlot === slotId}
                      onClick={() => onSlotClick(slotId)}
                      onDragStart={onDragStart}
                      onDrop={onDrop}
                      onDragEnd={onDragEnd}
                    />
                  );
                })}
              </div>
            </div>
            <div>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Быстрый доступ</p>
              <div className="grid grid-cols-9 gap-1.5 p-2 rounded-xl" style={{ background: '#111827', border: '2px solid #374151' }}>
                {hotbar.map((item, i) => (
                  <InvSlot key={i} item={item} slotId={i}
                    isSelected={selectedSlot === i}
                    isDragging={draggedSlot === i}
                    onClick={() => onSlotClick(i)}
                    onDragStart={onDragStart}
                    onDrop={onDrop}
                    onDragEnd={onDragEnd}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ── Экипировка + аватар ── */}
          <div className="p-6 border-l border-slate-700 flex flex-col items-center gap-4 min-w-[260px]">
            <div className="w-full space-y-2">
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Экипировка</p>

              <div className="flex items-center gap-3 p-3 rounded-xl" style={{ background: '#111827', border: '1px solid #374151' }}>
                <InvSlot item={helmetItem} isEquipSlot slotId="helmet"
                  isSelected={selectedSlot === 'helmet'}
                  isDragging={draggedSlot === 'helmet'}
                  size="lg" onClick={() => onSlotClick('helmet')}
                  onDragStart={onDragStart}
                  onDrop={onDrop}
                  onDragEnd={onDragEnd}
                />
                <div>
                  <p className="text-slate-300 font-bold text-sm">Голова</p>
                  <p className="text-slate-500 text-xs">{helmetItem ? getItemDef(helmetItem)?.label : '—'}</p>
                  {helmetItem && <p className="text-emerald-400 text-xs font-bold">✓ Надеты</p>}
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl" style={{ background: '#111827', border: '1px solid #374151' }}>
                <InvSlot item={glovesItem} isEquipSlot slotId="gloves"
                  isSelected={selectedSlot === 'gloves'}
                  isDragging={draggedSlot === 'gloves'}
                  size="lg" onClick={() => onSlotClick('gloves')}
                  onDragStart={onDragStart}
                  onDrop={onDrop}
                  onDragEnd={onDragEnd}
                />
                <div>
                  <p className="text-slate-300 font-bold text-sm">Руки</p>
                  <p className="text-slate-500 text-xs">{glovesItem ? getItemDef(glovesItem)?.label : '—'}</p>
                  {glovesItem && (
                    <p className={`text-xs font-bold ${glovesItem.id === 'sterile_gloves' ? 'text-emerald-400' : 'text-amber-400'}`}>
                      {glovesItem.id === 'sterile_gloves' ? '✓ Стерильные' : '⚠ Хозяйственные'}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full rounded-xl overflow-hidden flex flex-col items-center"
              style={{ background: 'linear-gradient(180deg,#1e3a5f 0%,#0f172a 100%)', border: '1px solid #1e40af', minHeight: 210 }}>
              <div className="w-32 h-48 mt-2">
                <Avatar gogglesOn={!!equippedHelmet} glovesType={equippedGloves} />
              </div>
              <p className="text-slate-400 text-xs pb-3">Лаборант</p>
            </div>

            <p className="text-slate-600 text-xs text-center">
             <kbd className="px-1 py-0.5 rounded bg-slate-700 text-slate-300 font-mono text-[10px]">Tab</kbd> / <kbd className="px-1 py-0.5 rounded bg-slate-700 text-slate-300 font-mono text-[10px]">Esc</kbd> — закрыть
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
