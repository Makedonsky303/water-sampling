// steps/Stage2/Step1_SitePrep.jsx
'use client';
import React, { useState } from 'react';
import { FaucetSVG } from '../../components/FaucetSVG';
import MinecraftInventory from '../../components/inventory/MinecraftInventory';
import { useInventoryContext } from '../../components/inventory/InventoryContext';
import { Avatar } from '../../components/inventory/Avatar';
import { getItemDef, renderItemIcon } from '../../components/inventory/itemRegistry';

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Step1_SitePrep({ logs, onComplete }) {
  // Вся логика инвентаря (слоты, экипировка, открытие/закрытие, hotbar,
  // горячие клавиши E/У/Esc/←→) теперь живёт в глобальном контексте.
  const inv = useInventoryContext();

  const equippedHelmet = inv.equippedHelmet;
  const equippedGloves = inv.equippedGloves; // null | 'sterile' | 'yellow'

  // Faucet
  const [aeratorRemoved, setAeratorRemoved] = useState(false);
  const [spotsLeft, setSpotsLeft]           = useState(3);
  const [isWiping, setIsWiping]             = useState(false);
  const [warning, setWarning]               = useState('');

  // ── Faucet handlers ──
  const handleWipeSpot = () => {
    if (!equippedGloves) { setWarning('⚠️ Нельзя чистить кран голыми руками! Наденьте перчатки через инвентарь (E).'); return; }
    if (isWiping || spotsLeft === 0) return;
    setWarning('');
    setIsWiping(true);
    setTimeout(() => { setSpotsLeft(p => Math.max(0, p - 1)); setIsWiping(false); }, 500);
  };

  const handleCompletePrep = () => {
    if (!aeratorRemoved) { setWarning('Необходимо демонтировать аэратор (кликните по сеточке на кране).'); return; }
    if (spotsLeft > 0)   { setWarning('Очистите носик крана от всех видимых загрязнений.'); return; }
    const errors = [];
    let scorePenalty = 0;
    if (!equippedHelmet)                { errors.push('Нарушение ТБ: Вы работали без защитных очков.'); scorePenalty += 10; }
    if (!equippedGloves)                { errors.push('Нарушение стерильности: Вы работали голыми руками.'); scorePenalty += 20; }
    else if (equippedGloves === 'yellow'){ errors.push('Нарушение стерильности: Использованы хозяйственные перчатки вместо стерильных.'); scorePenalty += 15; }
    onComplete({ prepErrors: errors, prepScorePenalty: scorePenalty, gogglesEquipped: equippedHelmet, glovesEquipped: equippedGloves });
  };

  const checklist = [
    { done: equippedHelmet && !!equippedGloves, label: 'Надеть СИЗ (очки + перчатки)' },
    { done: aeratorRemoved,  label: 'Демонтировать аэратор (клик по ⚙)' },
    { done: spotsLeft === 0, label: 'Очистить носик крана от ржавчины' },
  ];

  return (
    <div className="relative w-full max-w-6xl mb-6">
      <style>{`
        @keyframes drip{0%{transform:translateY(0);opacity:.7}80%{transform:translateY(60px);opacity:.4}100%{transform:translateY(70px);opacity:0}}
        @keyframes fc_spin{to{transform:rotate(360deg)}}
        .step-card{background:white;border-radius:20px;border:1.5px solid #e2e8f0;box-shadow:0 4px 24px rgba(0,0,0,0.07);overflow:hidden}
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

        {/* ── LEFT: Снаряжение ── */}
        <div className="lg:col-span-3 step-card flex flex-col">
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

            <div className="rounded-2xl overflow-hidden flex flex-col items-center py-3 px-3"
              style={{ background: 'linear-gradient(180deg,#1e3a5f 0%,#0f172a 100%)', border: '1px solid #1e40af' }}>
              <div className="w-24 h-40">
                <Avatar gogglesOn={equippedHelmet} glovesType={equippedGloves} />
              </div>
            </div>

            <div className="space-y-2">
              {[
                { label: 'Голова', equipped: equippedHelmet, id: equippedHelmet ? 'safety_goggles' : null, okText: 'Очки надеты ✓', warn: false },
                {
                  label: 'Руки', equipped: !!equippedGloves,
                  id: equippedGloves === 'sterile' ? 'sterile_gloves' : equippedGloves === 'yellow' ? 'regular_gloves' : null,
                  okText: equippedGloves === 'sterile' ? 'Стерильные ✓' : 'Хозяйственные ⚠',
                  warn: equippedGloves === 'yellow',
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
                {inv.slots.slice(0, 9).map((item, i) => (
                  <div key={i}
                    className={`h-9 rounded-lg border-2 flex items-center justify-center text-base transition-all cursor-pointer
                      ${i === inv.hotbarActive
                        ? 'border-yellow-400 bg-slate-700 scale-110 shadow-lg shadow-yellow-400/20'
                        : 'border-slate-700 bg-slate-800'}`}
                    onClick={() => inv.setHotbarActive(i)}>
                    {renderItemIcon(item, 18)}
                  </div>
                ))}
              </div>
              <div className="mt-1.5 text-center text-xs text-slate-400 min-h-[1rem]">
                {inv.activeItemDef?.label || ''}
              </div>
            </div>
          </div>
        </div>

        {/* ── CENTER: Кран ── */}
        <div className="lg:col-span-6 step-card flex flex-col">
          <div className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 px-6 py-5">
            <h2 className="text-white font-bold text-lg">🚰 Кран на объекте — крупный план</h2>
            <p className="text-slate-400 text-xs mt-1">Снимите аэратор и протрите носик чистой салфеткой перед обжигом</p>
          </div>
          <div className="flex-1 flex flex-col items-center justify-between p-4 bg-gradient-to-b from-slate-50 to-white">
            <div className="w-full flex justify-between items-start mb-2">
              <div className={`text-xs font-bold px-3 py-1.5 rounded-full border
                ${aeratorRemoved ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-amber-50 text-amber-700 border-amber-200 animate-pulse'}`}>
                {aeratorRemoved ? '✓ Аэратор снят' : '⚙ Кликните по сеточке'}
              </div>
              <div className={`text-xs font-bold px-3 py-1.5 rounded-full border
                ${spotsLeft === 0 ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-orange-50 text-orange-700 border-orange-200'}`}>
                {spotsLeft === 0 ? '✓ Носик чистый' : `Загрязнений: ${spotsLeft}/3`}
              </div>
            </div>
            <div className="w-full flex-1 flex items-center justify-center min-h-[380px]">
              <FaucetSVG
                aeratorRemoved={aeratorRemoved}
            showAeratorRemovedBadge={true}
                spotsLeft={spotsLeft}
                isWiping={isWiping}
                onRemoveAerator={() => setAeratorRemoved(true)}
                onWipeSpot={handleWipeSpot}
                glovesEquipped={equippedGloves}
                blocked={true}
              />
            </div>
            <div className={`w-full flex items-center gap-4 rounded-2xl p-4 border-2 mt-2 transition-all
              ${spotsLeft === 0 ? 'bg-emerald-50 border-emerald-200' : equippedGloves ? 'bg-white border-slate-200 hover:border-amber-300' : 'bg-slate-50 border-slate-200 opacity-60'}`}>
              <div className="text-3xl select-none">🧻</div>
              <div className="flex-1">
                <p className="font-bold text-sm text-slate-800">{spotsLeft === 0 ? 'Носик очищен' : 'Чистая салфетка'}</p>
                <p className="text-xs text-slate-500">{spotsLeft === 0 ? 'Поверхность готова к обжигу горелкой' : 'Кликайте по пятнам ржавчины, чтобы удалить их'}</p>
              </div>
              {spotsLeft > 0 && (
                <button disabled={!equippedGloves || isWiping} onClick={handleWipeSpot}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs transition-all
                    ${!equippedGloves ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : isWiping ? 'bg-amber-200 text-amber-800 cursor-wait' : 'bg-amber-100 hover:bg-amber-200 text-amber-800 shadow-sm'}`}>
                  {isWiping ? '⏳ Протирка...' : `Протереть (${3 - spotsLeft}/3)`}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ── RIGHT: Чек-лист ── */}
        <div className="lg:col-span-3 step-card flex flex-col">
          <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 px-6 py-5">
            <h2 className="text-white font-bold text-lg">📋 Задачи</h2>
            <p className="text-emerald-300 text-xs mt-1">Чек-лист подготовки крана</p>
          </div>
          <div className="p-5 flex flex-col gap-4 flex-1">
            <div className="space-y-2">
              {checklist.map((item, i) => (
                <div key={i} className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all
                  ${item.done ? 'bg-emerald-50 border-emerald-200' : 'bg-slate-50 border-slate-200'}`}>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold border-2
                    ${item.done ? 'bg-emerald-500 border-emerald-500 text-white' : 'bg-white border-slate-300 text-slate-400'}`}>
                    {item.done ? '✓' : i + 1}
                  </div>
                  <p className={`text-xs font-semibold leading-snug ${item.done ? 'text-emerald-800 line-through decoration-emerald-400' : 'text-slate-600'}`}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="bg-slate-900 rounded-xl p-4 text-white text-xs space-y-2 border border-slate-700">
              <p className="font-bold text-slate-300 uppercase tracking-wider text-[10px]">Статус защиты</p>
              {[
                { icon: '🥽', label: 'Очки',    val: equippedHelmet ? 'Надеты' : 'Сняты', ok: equippedHelmet },
                { icon: '🧤', label: 'Перчатки', val: equippedGloves === 'sterile' ? 'Стерильные ✓' : equippedGloves === 'yellow' ? 'Хозяйственные ⚠' : 'Нет', ok: !!equippedGloves },
                { icon: '⚙️', label: 'Аэратор',  val: aeratorRemoved ? 'Снят ✓' : 'На месте', ok: aeratorRemoved },
                { icon: '🧹', label: 'Носик',    val: spotsLeft === 0 ? 'Чистый ✓' : `Грязь ${spotsLeft}/3`, ok: spotsLeft === 0 },
              ].map(r => (
                <div key={r.label} className="flex justify-between">
                  <span className="text-slate-400">{r.icon} {r.label}:</span>
                  <span className={`font-bold ${r.ok ? 'text-emerald-400' : 'text-red-400'}`}>{r.val}</span>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs text-blue-800">
              <p className="font-bold mb-1">📖 ГОСТ Р 59024‑2020</p>
              <p className="leading-relaxed text-blue-700">Снять аэратор, прочистить излив, продезинфицировать горелкой и дать воде слиться 5–10 мин.</p>
            </div>
            <div className="mt-auto">
              {warning && (
                <div className="mb-3 bg-red-50 border border-red-200 rounded-xl p-3">
                  <p className="text-red-600 text-xs font-bold text-center">{warning}</p>
                </div>
              )}
              <button onClick={handleCompletePrep}
                className="w-full bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-4 rounded-2xl shadow-lg transition-all transform hover:-translate-y-0.5 text-sm">
                Подтвердить подготовку →
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
