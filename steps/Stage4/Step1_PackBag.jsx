'use client';
import React, { useState } from 'react';
import MinecraftInventory from '../../components/inventory/MinecraftInventory';
import { useInventoryContext } from '../../components/inventory/InventoryContext';
import { InvSlot } from '../../components/inventory/InvSlot';
import { getItemDef } from '../../components/inventory/itemRegistry';

export default function Step1_PackBag({ onComplete }) {
  const inv = useInventoryContext();

  const [placed, setPlaced] = useState({});
  const [draggedFromHotbar, setDraggedFromHotbar] = useState(null);
  const [dragOverZone, setDragOverZone] = useState(null);

  const hotbar = inv.slots.slice(0, 9);

  const handleDragStartFromHotbar = (slotIndex) => {
    const item = hotbar[slotIndex];
    if (!item) return;
    const def = getItemDef(item);
    const isUnlimited = def?.unlimited || false;
    setDraggedFromHotbar({ item, slotIndex, isUnlimited });
    inv.handleDragStart(slotIndex);
  };

  const handleDragOver = (e, zoneId) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverZone(zoneId);
  };

  const handleDragLeave = () => {
    setDragOverZone(null);
  };

  const handleDrop = (e, zoneId) => {
    e.preventDefault();
    setDragOverZone(null);
    if (!draggedFromHotbar) return;

    const { item, slotIndex, isUnlimited } = draggedFromHotbar;

    if (placed[zoneId]) {
      inv.handleDragEnd();
      setDraggedFromHotbar(null);
      return;
    }

    const newPlaced = { ...placed };
    if (!isUnlimited) {
      Object.keys(newPlaced).forEach((key) => {
        if (newPlaced[key]?.sourceSlot === slotIndex) {
          delete newPlaced[key];
        }
      });
    }

    newPlaced[zoneId] = { ...item, sourceSlot: slotIndex, isUnlimited };
    setPlaced(newPlaced);

    if (!isUnlimited) {
      inv.removeFromSlot(slotIndex);
    }

    inv.handleDragEnd();
    setDraggedFromHotbar(null);
  };

  const handleZoneClick = (zoneId) => {
    const item = placed[zoneId];
    if (!item) return;
    const def = getItemDef(item);
    const newPlaced = { ...placed };
    delete newPlaced[zoneId];
    setPlaced(newPlaced);
    if (!def?.unlimited && item.sourceSlot !== undefined) {
      inv.returnItemToSlot(item.sourceSlot, { id: item.id, name: item.name });
    }
  };

  const checkPacking = () => {
    const errors = [];
    let scorePenalty = 0;

    const hasIceLeft = placed.leftWall && ['🧊', '🫙', '💧'].includes(getItemDef(placed.leftWall)?.icon);
    const hasIceRight = placed.rightWall && ['🧊', '🫙', '💧'].includes(getItemDef(placed.rightWall)?.icon);
    const hasIceBottom = placed.bottomCenter && ['🧊', '🫙', '💧'].includes(getItemDef(placed.bottomCenter)?.icon);
    const iceCount = [hasIceLeft, hasIceRight, hasIceBottom].filter(Boolean).length;

    if (iceCount < 2) {
      errors.push('Недостаточно хладоэлементов. Нарушение температурного режима.');
      scorePenalty += 20;
    }

    const hasDividerLeft = placed.leftDivider && getItemDef(placed.leftDivider)?.icon === '📦';
    const hasDividerRight = placed.rightDivider && getItemDef(placed.rightDivider)?.icon === '📦';
    const hasDividerBottom = getItemDef(placed.bottomDivider)?.icon === '📦';

    if (!hasDividerLeft) {
      errors.push('Левая изолирующая перегородка отсутствует.');
      scorePenalty += 10;
    }
    if (!hasDividerRight) {
      errors.push('Правая изолирующая перегородка отсутствует.');
      scorePenalty += 10;
    }
    if (!hasDividerBottom) {
      errors.push('Нижняя перегородка отсутствует.');
      scorePenalty += 10;
    }

    const isSample = (item) => {
      if (!item) return false;
      return (
        item.id?.startsWith('chem_tare_') ||
        item.id?.startsWith('bio_tare_')
      );
    };

    const hasLeftSample = isSample(placed.leftSample);
    const hasRightSample = isSample(placed.rightSample);

    onComplete({
      packingErrors: errors,
      packingScorePenalty: scorePenalty,
      packingData: placed,
    });
  };

  return (
  <div className="relative w-full max-w-7xl mb-6">
    <style>{`
      .bag-zone { transition: all 0.2s; }
      .bag-zone:hover { background: rgba(59, 130, 246, 0.1); }
    `}</style>

    <MinecraftInventory
      slots={inv.slots}
      selectedSlot={inv.selectedSlot}
      draggedSlot={inv.draggedSlot}
      equippedHelmet={inv.equippedHelmet}
      equippedGloves={inv.equippedGloves}
      onSlotClick={inv.handleSlotClick}
      onDragStart={inv.handleDragStart}
      onDrop={inv.handleDrop}
      onDragEnd={inv.handleDragEnd}
      isOpen={inv.isOpen}
      onClose={inv.closeInventory}
    />

    {/* ДВЕ КОЛОНКИ: хотбар (4/12) и сумка (8/12) */}
    <div className="grid grid-cols-12 gap-4 w-full">
      {/* ——— Хотбар ——— */}
      <div className="col-span-4 bg-white rounded-2xl border border-slate-200 shadow-lg flex flex-col overflow-hidden">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 px-6 py-5">
          <h2 className="text-white font-bold text-lg">🎒 Снаряжение</h2>
          <p className="text-slate-400 text-xs mt-1">Нажмите Tab чтобы открыть инвентарь</p>
        </div>
        <div className="p-5 flex flex-col gap-4 flex-1">
          <button
            onClick={inv.openInventory}
            className="w-full py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-md active:scale-95"
            style={{ background: 'linear-gradient(135deg,#1e3a5f,#1e40af)', color: 'white' }}
          >
            <span className="text-xl">🗃️</span>
            Открыть инвентарь
            <span className="ml-1 text-xs opacity-60 font-mono bg-white/10 px-1.5 py-0.5 rounded">Tab</span>
          </button>

          <div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1.5">
              Быстрый доступ
            </p>
            <div className="grid grid-cols-9 gap-4 p-3 rounded-xl bg-slate-900">
              {hotbar.map((item, i) => {
                const def = item ? getItemDef(item) : null;
                return (
                  <div key={i} className="relative">
                    <InvSlot
                      item={item}
                      slotId={i}
                      isSelected={i === inv.hotbarActive}
                      isDragging={draggedFromHotbar?.slotIndex === i}
                      onClick={() => inv.setHotbarActive(i)}
                      onDragStart={() => handleDragStartFromHotbar(i)}
                      onDrop={() => {}}
                      onDragEnd={() => { inv.handleDragEnd(); setDraggedFromHotbar(null); }}
                      size="sm"
                    />
                    {def?.unlimited && (
                      <div className="absolute -top-1 -right-1 bg-emerald-500 text-white text-[8px] font-bold rounded-full w-3 h-3 flex items-center justify-center">
                        ∞
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="mt-1.5 text-center text-xs text-slate-400 min-h-[1rem]">
              {inv.activeItemDef?.label || ''}
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-xs">
            <p className="font-bold text-blue-800 mb-1">💡 Подсказка:</p>
            <p className="text-blue-700">
              Перетаскивайте предметы из быстрого доступа в сумку. ∞ = неограниченно
            </p>
          </div>
        </div>
      </div>

      {/* ——— Сумка-холодильник (расширена до 8 колонок) ——— */}
      <div className="col-span-8 bg-white rounded-2xl border border-slate-200 shadow-lg flex flex-col overflow-hidden">
        <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 px-6 py-5 flex justify-between items-center">
          <div>
            <h2 className="text-white font-bold text-lg">🧊 Термосумка (вид сверху)</h2>
            <p className="text-slate-300 text-xs mt-1">Разместите предметы правильно</p>
          </div>
          {/* Кнопка завершения — теперь здесь */}
          <button
            onClick={checkPacking}
            className="bg-white hover:bg-slate-100 text-blue-800 font-bold py-2 px-4 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 text-sm"
          >
            Завершить укладку →
          </button>
        </div>
        <div className="p-6 flex-1 flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
          <div className="relative w-full max-w-2xl">
            <svg viewBox="0 0 400 300" className="w-full h-auto">
              {/* Контур сумки */}
              <rect x="40" y="40" width="320" height="220" fill="#e0f2fe" stroke="#0369a1" strokeWidth="3" rx="8"/>
              <text x="200" y="25" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="bold">
                Термосумка
              </text>

              {/* Левая стенка */}
              <g
                onDragOver={(e) => handleDragOver(e, 'leftWall')}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, 'leftWall')}
                onClick={() => handleZoneClick('leftWall')}
                style={{ cursor: 'pointer' }}
              >
                <rect x="50" y="60" width="60" height="100"
                  fill={placed.leftWall ? '#bfdbfe' : dragOverZone === 'leftWall' ? '#dbeafe' : '#fff'}
                  stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" className="bag-zone"/>
                {placed.leftWall && (
                  <>
                    <text x="80" y="105" textAnchor="middle" fill="#1e40af" fontSize="28">
                      {getItemDef(placed.leftWall)?.icon}
                    </text>
                    <text x="80" y="125" textAnchor="middle" fill="#64748b" fontSize="8" fontWeight="bold">
                      Клик — убрать
                    </text>
                  </>
                )}
              </g>

              {/* Левая перегородка */}
              <g
                onDragOver={(e) => handleDragOver(e, 'leftDivider')}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, 'leftDivider')}
                onClick={() => handleZoneClick('leftDivider')}
                style={{ cursor: 'pointer' }}
              >
                <rect x="115" y="60" width="12" height="100"
                  fill={placed.leftDivider ? '#bfdbfe' : dragOverZone === 'leftDivider' ? '#dbeafe' : '#f1f5f9'}
                  stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" className="bag-zone"/>
                {placed.leftDivider && (
                  <text x="121" y="110" textAnchor="middle" fill="#1e40af" fontSize="18">
                    {getItemDef(placed.leftDivider)?.icon}
                  </text>
                )}
              </g>

              {/* Левый образец */}
              <g
                onDragOver={(e) => handleDragOver(e, 'leftSample')}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, 'leftSample')}
                onClick={() => handleZoneClick('leftSample')}
                style={{ cursor: 'pointer' }}
              >
                <rect x="132" y="60" width="55" height="100"
                  fill={placed.leftSample ? '#bfdbfe' : dragOverZone === 'leftSample' ? '#dbeafe' : '#fff'}
                  stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" className="bag-zone"/>
                {placed.leftSample && (
                  <>
                    <text x="159.5" y="105" textAnchor="middle" fill="#1e40af" fontSize="28">
                      {getItemDef(placed.leftSample)?.icon}
                    </text>
                    <text x="159.5" y="125" textAnchor="middle" fill="#64748b" fontSize="8" fontWeight="bold">
                      Клик — убрать
                    </text>
                  </>
                )}
              </g>

              {/* Правый образец */}
              <g
                onDragOver={(e) => handleDragOver(e, 'rightSample')}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, 'rightSample')}
                onClick={() => handleZoneClick('rightSample')}
                style={{ cursor: 'pointer' }}
              >
                <rect x="213" y="60" width="55" height="100"
                  fill={placed.rightSample ? '#bfdbfe' : dragOverZone === 'rightSample' ? '#dbeafe' : '#fff'}
                  stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" className="bag-zone"/>
                {placed.rightSample && (
                  <>
                    <text x="240.5" y="105" textAnchor="middle" fill="#1e40af" fontSize="28">
                      {getItemDef(placed.rightSample)?.icon}
                    </text>
                    <text x="240.5" y="125" textAnchor="middle" fill="#64748b" fontSize="8" fontWeight="bold">
                      Клик — убрать
                    </text>
                  </>
                )}
              </g>

              {/* Правая перегородка */}
              <g
                onDragOver={(e) => handleDragOver(e, 'rightDivider')}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, 'rightDivider')}
                onClick={() => handleZoneClick('rightDivider')}
                style={{ cursor: 'pointer' }}
              >
                <rect x="273" y="60" width="12" height="100"
                  fill={placed.rightDivider ? '#bfdbfe' : dragOverZone === 'rightDivider' ? '#dbeafe' : '#f1f5f9'}
                  stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" className="bag-zone"/>
                {placed.rightDivider && (
                  <text x="279" y="110" textAnchor="middle" fill="#1e40af" fontSize="18">
                    {getItemDef(placed.rightDivider)?.icon}
                  </text>
                )}
              </g>

              {/* Правая стенка */}
              <g
                onDragOver={(e) => handleDragOver(e, 'rightWall')}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, 'rightWall')}
                onClick={() => handleZoneClick('rightWall')}
                style={{ cursor: 'pointer' }}
              >
                <rect x="290" y="60" width="60" height="100"
                  fill={placed.rightWall ? '#bfdbfe' : dragOverZone === 'rightWall' ? '#dbeafe' : '#fff'}
                  stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" className="bag-zone"/>
                {placed.rightWall && (
                  <>
                    <text x="320" y="105" textAnchor="middle" fill="#1e40af" fontSize="28">
                      {getItemDef(placed.rightWall)?.icon}
                    </text>
                    <text x="320" y="125" textAnchor="middle" fill="#64748b" fontSize="8" fontWeight="bold">
                      Клик — убрать
                    </text>
                  </>
                )}
              </g>

              {/* Нижняя перегородка */}
              <g
                onDragOver={(e) => handleDragOver(e, 'bottomDivider')}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, 'bottomDivider')}
                onClick={() => handleZoneClick('bottomDivider')}
                style={{ cursor: 'pointer' }}
              >
                <rect x="110" y="170" width="180" height="12"
                  fill={placed.bottomDivider ? '#bfdbfe' : dragOverZone === 'bottomDivider' ? '#dbeafe' : '#f1f5f9'}
                  stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" className="bag-zone"/>
                {placed.bottomDivider && (
                  <text x="200" y="181" textAnchor="middle" fill="#1e40af" fontSize="12">
                    {getItemDef(placed.bottomDivider)?.icon}
                  </text>
                )}
              </g>

              {/* Дно */}
              <g
                onDragOver={(e) => handleDragOver(e, 'bottomCenter')}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, 'bottomCenter')}
                onClick={() => handleZoneClick('bottomCenter')}
                style={{ cursor: 'pointer' }}
              >
                <rect x="100" y="190" width="200" height="50"
                  fill={placed.bottomCenter ? '#bfdbfe' : dragOverZone === 'bottomCenter' ? '#dbeafe' : '#f8fafc'}
                  stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" className="bag-zone"/>
                {placed.bottomCenter && (
                  <text x="200" y="220" textAnchor="middle" fill="#1e40af" fontSize="28">
                    {getItemDef(placed.bottomCenter)?.icon}
                  </text>
                )}
              </g>

              {/* Подписи зон */}
              <text x="80" y="52" textAnchor="middle" fill="#64748b" fontSize="9">🧊 Лёд</text>
              <text x="121" y="52" textAnchor="middle" fill="#64748b" fontSize="9">⚡</text>
              <text x="159.5" y="52" textAnchor="middle" fill="#64748b" fontSize="9">Образец</text>
              <text x="240.5" y="52" textAnchor="middle" fill="#64748b" fontSize="9">Образец</text>
              <text x="279" y="52" textAnchor="middle" fill="#64748b" fontSize="9">⚡</text>
              <text x="320" y="52" textAnchor="middle" fill="#64748b" fontSize="9">🧊 Лёд</text>
              <text x="80" y="255" textAnchor="middle" fill="#64748b" fontSize="9">Дно</text>
              <text x="320" y="255" textAnchor="middle" fill="#64748b" fontSize="9">Дно</text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}