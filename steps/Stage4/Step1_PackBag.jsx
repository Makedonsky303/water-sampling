'use client';
import React, { useState } from 'react';
import MinecraftInventory from '../../components/inventory/MinecraftInventory';
import { useInventoryContext } from '../../components/inventory/InventoryContext';
import { InvSlot } from '../../components/inventory/InvSlot';
import { getItemDef } from '../../components/inventory/itemRegistry';

export default function Step1_PackBag({ onComplete }) {
  // ВАЖНО: используем ОБЩИЙ инвентарь из контекста — тот же самый, что был
  // собран на Stage1/Stage2/Stage3. Никаких отдельных useInventory(...) здесь
  // больше нет — раньше это создавало второй, изолированный инвентарь,
  // из-за чего на Stage4 всё содержимое со Stage1-3 "пропадало".
  const inv = useInventoryContext();

  const [placed, setPlaced] = useState({});
  const [draggedFromHotbar, setDraggedFromHotbar] = useState(null);
  const [dragOverZone, setDragOverZone] = useState(null);

  // Hotbar — первые 9 слотов из ОБЩЕГО инвентаря (как на Stage2)
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

    // Если в зоне уже что-то лежит — не даём положить сверху,
    // студент должен сначала убрать предыдущий предмет
    if (placed[zoneId]) {
      inv.handleDragEnd();
      setDraggedFromHotbar(null);
      return;
    }

    // Если предмет НЕ безлимитный и уже лежит в какой-то другой зоне сумки —
    // убираем его оттуда (нельзя один экземпляр держать в двух зонах сразу)
    const newPlaced = { ...placed };
    if (!isUnlimited) {
      Object.keys(newPlaced).forEach((key) => {
        if (newPlaced[key]?.sourceSlot === slotIndex) {
          delete newPlaced[key];
        }
      });
    }

    // Размещаем предмет в зоне сумки — это ЛОКАЛЬНОЕ состояние шага,
    // инвентарь (inv.slots) трогаем отдельно ниже через API хука
    newPlaced[zoneId] = { ...item, sourceSlot: slotIndex, isUnlimited };
    setPlaced(newPlaced);

    // Если предмет не бесконечный — физически убираем его из общего
    // инвентаря через безопасный метод хука (без splice/мутаций)
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

    // Убираем предмет из зоны сумки
    const newPlaced = { ...placed };
    delete newPlaced[zoneId];
    setPlaced(newPlaced);

    // Возвращаем в общий инвентарь, если он не бесконечный расходник
    if (!def?.unlimited && item.sourceSlot !== undefined) {
      inv.returnItemToSlot(item.sourceSlot, { id: item.id, name: item.name });
    }
  };

  const checkPacking = () => {
    const errors = [];
    let scorePenalty = 0;

    // Проверка: хладоэлементы на дне или по бокам
    const hasIceLeft = placed.leftWall && ['🧊', '🫙', '💧'].includes(getItemDef(placed.leftWall)?.icon);
    const hasIceRight = placed.rightWall && ['🧊', '🫙', '💧'].includes(getItemDef(placed.rightWall)?.icon);
    const hasIceBottomLeft = placed.bottomLeft && ['🧊', '🫙', '💧'].includes(getItemDef(placed.bottomLeft)?.icon);
    const hasIceBottomRight = placed.bottomRight && ['🧊', '🫙', '💧'].includes(getItemDef(placed.bottomRight)?.icon);

    const iceCount = [hasIceLeft, hasIceRight, hasIceBottomLeft, hasIceBottomRight].filter(Boolean).length;

    if (iceCount < 2) {
      errors.push('Недостаточно хладоэлементов. Нарушение температурного режима.');
      scorePenalty += 20;
    }

    // Проверка: перегородки
    const hasDividerLeft = placed.leftDivider && getItemDef(placed.leftDivider)?.icon === '📋';
    const hasDividerRight = placed.rightDivider && getItemDef(placed.rightDivider)?.icon === '📋';

    if (!hasDividerLeft) {
      errors.push('Левая изолирующая перегородка отсутствует.');
      scorePenalty += 10;
    }

    if (!hasDividerRight) {
      errors.push('Правая изолирующая перегородка отсутствует.');
      scorePenalty += 10;
    }

    // Проверка: образцы в центральных зонах
    const hasLeftSample = placed.leftSample && (
      placed.leftSample.id?.startsWith('chem_tare_') ||
      placed.leftSample.id?.startsWith('bio_tare_')
    );
    const hasRightSample = placed.rightSample && (
      placed.rightSample.id?.startsWith('chem_tare_') ||
      placed.rightSample.id?.startsWith('bio_tare_')
    );

    if (!hasLeftSample) {
      errors.push('Левый образец не размещён.');
      scorePenalty += 15;
    }

    if (!hasRightSample) {
      errors.push('Правый образец не размещён.');
      scorePenalty += 15;
    }

    onComplete({
      packingErrors: errors,
      packingScorePenalty: scorePenalty,
      packingData: placed,
    });
  };

  return (
    <div className="relative w-full max-w-6xl mb-6">
      <style>{`
        .bag-zone { transition: all 0.2s; }
        .bag-zone:hover { background: rgba(59, 130, 246, 0.1); }
      `}</style>

      {/* Модальное окно полного инвентаря — тот же самый, что и на Stage1/Stage2 */}
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

        {/* ── LEFT: Hotbar (9 слотов) ── */}
        <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 shadow-lg flex flex-col overflow-hidden">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 px-6 py-5">
            <h2 className="text-white font-bold text-lg">🎒 Снаряжение</h2>
            <p className="text-slate-400 text-xs mt-1">Нажмите E / У чтобы открыть инвентарь</p>
          </div>
          <div className="p-5 flex flex-col gap-4 flex-1">
            <button onClick={inv.openInventory}
              className="w-full py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-md active:scale-95"
              style={{ background: 'linear-gradient(135deg,#1e3a5f,#1e40af)', color: 'white' }}>
              <span className="text-xl">🗃️</span>
              Открыть инвентарь
              <span className="ml-1 text-xs opacity-60 font-mono bg-white/10 px-1.5 py-0.5 rounded">E / У</span>
            </button>

            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1.5">
                Быстрый доступ
              </p>
              <div className="grid grid-cols-9 gap-1 p-2 rounded-xl bg-slate-900">
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

        {/* ── CENTER: Сумка-холодильник ── */}
        <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 shadow-lg flex flex-col overflow-hidden">
          <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 px-6 py-5">
            <h2 className="text-white font-bold text-lg">🧊 Термосумка (вид сверху)</h2>
            <p className="text-slate-300 text-xs mt-1">Разместите предметы правильно</p>
          </div>
          <div className="p-6 flex-1 flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
            <div className="relative w-full max-w-md">
              <svg viewBox="0 0 400 300" className="w-full h-auto">
                {/* Контур сумки */}
                <rect x="40" y="40" width="320" height="220" fill="#e0f2fe" stroke="#0369a1" strokeWidth="3" rx="8"/>
                <text x="200" y="25" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="bold">
                  Термосумка
                </text>

                {/* Дно слева */}
                <g
                  onDragOver={(e) => handleDragOver(e, 'bottomLeft')}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => handleDrop(e, 'bottomLeft')}
                  onClick={() => handleZoneClick('bottomLeft')}
                  style={{ cursor: 'pointer' }}
                >
                  <rect x="50" y="180" width="60" height="60"
                    fill={placed.bottomLeft ? '#bfdbfe' : dragOverZone === 'bottomLeft' ? '#dbeafe' : '#f8fafc'}
                    stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" className="bag-zone"/>
                  {placed.bottomLeft && (
                    <>
                      <text x="80" y="205" textAnchor="middle" fill="#1e40af" fontSize="28">
                        {getItemDef(placed.bottomLeft)?.icon}
                      </text>
                      <text x="80" y="225" textAnchor="middle" fill="#64748b" fontSize="8" fontWeight="bold">
                        Клик — убрать
                      </text>
                    </>
                  )}
                </g>

                {/* Дно справа */}
                <g
                  onDragOver={(e) => handleDragOver(e, 'bottomRight')}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => handleDrop(e, 'bottomRight')}
                  onClick={() => handleZoneClick('bottomRight')}
                  style={{ cursor: 'pointer' }}
                >
                  <rect x="290" y="180" width="60" height="60"
                    fill={placed.bottomRight ? '#bfdbfe' : dragOverZone === 'bottomRight' ? '#dbeafe' : '#f8fafc'}
                    stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" className="bag-zone"/>
                  {placed.bottomRight && (
                    <>
                      <text x="320" y="205" textAnchor="middle" fill="#1e40af" fontSize="28">
                        {getItemDef(placed.bottomRight)?.icon}
                      </text>
                      <text x="320" y="225" textAnchor="middle" fill="#64748b" fontSize="8" fontWeight="bold">
                        Клик — убрать
                      </text>
                    </>
                  )}
                </g>

                {/* Левая стенка */}
                <g
                  onDragOver={(e) => handleDragOver(e, 'leftWall')}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => handleDrop(e, 'leftWall')}
                  onClick={() => handleZoneClick('leftWall')}
                  style={{ cursor: 'pointer' }}
                >
                  <rect x="50" y="60" width="60" height="115"
                    fill={placed.leftWall ? '#bfdbfe' : dragOverZone === 'leftWall' ? '#dbeafe' : '#fff'}
                    stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" className="bag-zone"/>
                  {placed.leftWall && (
                    <>
                      <text x="80" y="115" textAnchor="middle" fill="#1e40af" fontSize="28">
                        {getItemDef(placed.leftWall)?.icon}
                      </text>
                      <text x="80" y="135" textAnchor="middle" fill="#64748b" fontSize="8" fontWeight="bold">
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
                  <rect x="115" y="60" width="12" height="180"
                    fill={placed.leftDivider ? '#bfdbfe' : dragOverZone === 'leftDivider' ? '#dbeafe' : '#f1f5f9'}
                    stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" className="bag-zone"/>
                  {placed.leftDivider && (
                    <text x="121" y="150" textAnchor="middle" fill="#1e40af" fontSize="18">
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
                  <rect x="132" y="60" width="55" height="180"
                    fill={placed.leftSample ? '#bfdbfe' : dragOverZone === 'leftSample' ? '#dbeafe' : '#fff'}
                    stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" className="bag-zone"/>
                  {placed.leftSample && (
                    <>
                      <text x="159.5" y="145" textAnchor="middle" fill="#1e40af" fontSize="28">
                        {getItemDef(placed.leftSample)?.icon}
                      </text>
                      <text x="159.5" y="168" textAnchor="middle" fill="#64748b" fontSize="8" fontWeight="bold">
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
                  <rect x="213" y="60" width="55" height="180"
                    fill={placed.rightSample ? '#bfdbfe' : dragOverZone === 'rightSample' ? '#dbeafe' : '#fff'}
                    stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" className="bag-zone"/>
                  {placed.rightSample && (
                    <>
                      <text x="240.5" y="145" textAnchor="middle" fill="#1e40af" fontSize="28">
                        {getItemDef(placed.rightSample)?.icon}
                      </text>
                      <text x="240.5" y="168" textAnchor="middle" fill="#64748b" fontSize="8" fontWeight="bold">
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
                  <rect x="273" y="60" width="12" height="180"
                    fill={placed.rightDivider ? '#bfdbfe' : dragOverZone === 'rightDivider' ? '#dbeafe' : '#f1f5f9'}
                    stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" className="bag-zone"/>
                  {placed.rightDivider && (
                    <text x="279" y="150" textAnchor="middle" fill="#1e40af" fontSize="18">
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
                  <rect x="290" y="60" width="60" height="115"
                    fill={placed.rightWall ? '#bfdbfe' : dragOverZone === 'rightWall' ? '#dbeafe' : '#fff'}
                    stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" className="bag-zone"/>
                  {placed.rightWall && (
                    <>
                      <text x="320" y="115" textAnchor="middle" fill="#1e40af" fontSize="28">
                        {getItemDef(placed.rightWall)?.icon}
                      </text>
                      <text x="320" y="135" textAnchor="middle" fill="#64748b" fontSize="8" fontWeight="bold">
                        Клик — убрать
                      </text>
                    </>
                  )}
                </g>

                {/* Метки зон */}
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

        {/* ── RIGHT: Инструкция ── */}
        <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 shadow-lg flex flex-col overflow-hidden">
          <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 px-6 py-5">
            <h2 className="text-white font-bold text-lg">📋 Требования</h2>
            <p className="text-emerald-300 text-xs mt-1">ГОСТ Р 59024‑2020</p>
          </div>
          <div className="p-5 flex-1 flex flex-col gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs text-blue-800">
              <p className="font-bold mb-2">⚠️ Важно:</p>
              <ul className="space-y-1 text-blue-700 leading-relaxed">
                <li>• Хладоэлементы по бокам/дну</li>
                <li>• Перегородка изолирует образцы</li>
                <li>• Флаконы в центральных зонах</li>
              </ul>
            </div>

            <div className="bg-slate-900 rounded-xl p-4 text-white text-xs space-y-2 border border-slate-700">
              <p className="font-bold text-slate-300 uppercase tracking-wider text-[10px]">Статус укладки</p>
              {[
                { zoneId: 'leftWall', label: 'Левая стенка' },
                { zoneId: 'leftDivider', label: 'Лев. перегородка' },
                { zoneId: 'leftSample', label: 'Лев. образец' },
                { zoneId: 'rightSample', label: 'Прав. образец' },
                { zoneId: 'rightDivider', label: 'Прав. перегородка' },
                { zoneId: 'rightWall', label: 'Правая стенка' },
                { zoneId: 'bottomLeft', label: 'Дно слева' },
                { zoneId: 'bottomRight', label: 'Дно справа' },
              ].map((zone) => {
                const item = placed[zone.zoneId];
                return (
                  <div key={zone.zoneId} className="flex justify-between items-center">
                    <span className="text-slate-400 text-[11px]">{zone.label}:</span>
                    <span className={`font-bold text-[11px] ${item ? 'text-emerald-400' : 'text-slate-600'}`}>
                      {item ? getItemDef(item)?.icon : '—'}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-auto">
              <button
                onClick={checkPacking}
                className="w-full bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-4 rounded-2xl shadow-lg transition-all transform hover:-translate-y-0.5 text-sm"
              >
                Завершить укладку →
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
