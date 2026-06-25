// components/inventory/InventorySidebar.jsx
'use client';

import React from 'react';
import { useInventoryContext } from './InventoryContext';
import { getItemDef } from './itemRegistry';
import { Avatar } from './Avatar';
import MinecraftInventory from './MinecraftInventory';
import { renderItemIcon } from './itemRegistry';

export default function InventorySidebar() {
  const inventory = useInventoryContext();

  const helmetItem = inventory.equippedHelmet
    ? { id: 'safety_goggles' }
    : null;

  const glovesItem =
    inventory.equippedGloves === 'sterile'
      ? { id: 'sterile_gloves' }
      : inventory.equippedGloves === 'yellow'
      ? { id: 'regular_gloves' }
      : null;

  return (
    <aside className="w-75 shrink-0 top-3 ml-15">
            <MinecraftInventory
              slots={inventory.slots}
              selectedSlot={inventory.selectedSlot}
              draggedSlot={inventory.draggedSlot}
              equippedHelmet={inventory.equippedHelmet}
              equippedGloves={inventory.equippedGloves}
              onSlotClick={inventory.handleSlotClick}
              onDragStart={inventory.handleDragStart}
              onDrop={inventory.handleDrop}
              onDragEnd={inventory.handleDragEnd}
              isOpen={inventory.isOpen}
              onClose={inventory.closeInventory}
            />
            <div className="lg:col-span-3 step-card flex flex-col">
                      <div className="bg-gradient-to-br from-slate-800 to-slate-900 px-6 py-5 ">
                        <h2 className="text-white font-bold text-lg">🎒 Снаряжение</h2>
                        <p className="text-slate-400 text-xs mt-1">Нажмите E / У чтобы открыть инвентарь</p>
                      </div>
                      <div className="p-5 flex flex-col gap-4 flex-1">
                        <button onClick={inventory.openInventory}
                          className="w-full py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-md active:scale-95"
                          style={{ background: 'linear-gradient(135deg,#1e3a5f,#1e40af)', color: 'white' }}>
                          <span className="text-xl">🗃️</span>
                          Открыть инвентарь
                          <span className="ml-1 text-xs opacity-60 font-mono bg-white/10 px-1.5 py-0.5 rounded">E / У</span>
                        </button>
            
                        <div className="rounded-2xl overflow-hidden flex flex-col items-center py-3 px-3"
                          style={{ background: 'linear-gradient(180deg,#1e3a5f 0%,#0f172a 100%)', border: '1px solid #1e40af' }}>
                          <div className="w-24 h-40">
                            <Avatar gogglesOn={inventory.equippedHelmet} glovesType={inventory.equippedGloves} />
                          </div>
                        </div>
            
                        <div className="space-y-2">
                          {[
                            { label: 'Голова', equipped: inventory.equippedHelmet, id: inventory.equippedHelmet ? 'safety_goggles' : null, okText: 'Очки надеты ✓', warn: false },
                            {
                              label: 'Руки', equipped: !!inventory.equippedGloves,
                              id: inventory.equippedGloves === 'sterile' ? 'sterile_gloves' : inventory.equippedGloves === 'yellow' ? 'regular_gloves' : null,
                              okText: inventory.equippedGloves === 'sterile' ? 'Стерильные ✓' : 'Хозяйственные ⚠',
                              warn: inventory.equippedGloves === 'yellow',
                            },
                          ].map(row => (
                            <div key={row.label}
                              className={`flex items-center gap-3 p-3 rounded-xl border transition-all
                                ${row.equipped ? (row.warn ? 'bg-amber-50 border-amber-300' : 'bg-emerald-50 border-emerald-300') : 'bg-slate-50 border-slate-200'}`}>
                              <div className="text-2xl w-8 text-center">
                                {row.id ? (getItemDef({ id: row.id })?.icon || '?') : '—'}
                              </div>
                              <div>
                                <p className="text-xs font-bold text-slate-600">{row.label}</p>
                                <p className={`text-xs ${row.equipped ? (row.warn ? 'text-amber-600 font-semibold' : 'text-emerald-600 font-semibold') : 'text-slate-400'}`}>
                                  {row.equipped ? row.okText : 'Пусто'}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
            
                        {/* Hotbar вне модалки — это просто переключатель «активного» предмета
                            (как горячая клавиша 1-9 в Minecraft), переключение ←/→ или клик.
                            Сам drag-and-drop и click-to-move для перемещения предметов
                            между слотами работают внутри открытого инвентаря (модалка ниже). */}
                        <div>
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1.5">
                            В руке — <span className="text-slate-300 font-mono">← →</span>
                          </p>
                          <div className="grid grid-cols-9 gap-1 p-2 rounded-xl bg-slate-900">
                            {inventory.slots.slice(0, 9).map((item, i) => (
                              <div key={i}
                                className={`h-9 rounded-lg border-2 flex items-center justify-center text-base transition-all cursor-pointer
                                  ${i === inventory.hotbarActive
                                    ? 'border-yellow-400 bg-slate-700 scale-110 shadow-lg shadow-yellow-400/20'
                                    : 'border-slate-700 bg-slate-800'}`}
                                onClick={() => inventory.setHotbarActive(i)}>
                                {renderItemIcon(item, 18)}
                              </div>
                            ))}
                          </div>
                          <div className="mt-1.5 text-center text-xs text-slate-400 min-h-[1rem]">
                            {inventory.activeItemDef?.label || ''}
                          </div>
                        </div>
                      </div>
                    </div>
            </aside>
  );
}