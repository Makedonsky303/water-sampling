// steps/Stage2/Step1_SitePrep.jsx
'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { FaucetSVG } from '../../components/FaucetSVG';

// ── Иконки всех предметов склада ─────────────────────────────────────────────
const ICON_MAP = {
  ethyl_wipes:      { icon: '🧼', label: 'Салфетки этиловые',         slot: null },
  isop_wipes:       { icon: '🧴', label: 'Салфетки изопропиловые',     slot: null },
  antibact_wipes:   { icon: '🪥', label: 'Салфетки гигиенические',     slot: null },
  gas_burner:       { icon: '🔥', label: 'Портативная горелка',         slot: null },
  lighter_only:     { icon: '🪔', label: 'Бытовая зажигалка',          slot: null },
  sterile_gloves:   { icon: '🧤', label: 'Перчатки стерильные',        slot: 'gloves', value: 'sterile', bg: 'bg-emerald-50', border: 'border-emerald-300' },
  regular_gloves:   { icon: '🫳', label: 'Перчатки хозяйственные',     slot: 'gloves', value: 'yellow',  bg: 'bg-amber-50',   border: 'border-amber-300'   },
  waterproof_marker:{ icon: '🖊️', label: 'Маркер перманентный',        slot: null },
  regular_pencil:   { icon: '✏️', label: 'Карандаш графитовый',        slot: null },
  safety_goggles:   { icon: '🥽', label: 'Очки защитные',              slot: 'helmet',                  bg: 'bg-blue-50',    border: 'border-blue-300'    },
  ice_eutectic:     { icon: '🧊', label: 'Эвтектический хладоэлемент', slot: null },
  ice_gel:          { icon: '🫙', label: 'Гелевый хладоэлемент',       slot: null },
  ice_silicone:     { icon: '💧', label: 'Силиконовый хладоэлемент',   slot: null },
  // тара — динамические id, обрабатываются через префикс
};

// Получить данные предмета (включая тары с динамическими id)
function getItemDef(item) {
  if (!item) return null;
  if (ICON_MAP[item.id]) return ICON_MAP[item.id];
  // Тара для химии / бактериологии
  if (item.id?.startsWith('chem_tare_')) return { icon: '🧪', label: item.name, slot: null, bg: 'bg-blue-50', border: 'border-blue-200' };
  if (item.id?.startsWith('bio_tare_'))  return { icon: '🧫', label: item.name, slot: null, bg: 'bg-cyan-50',  border: 'border-cyan-200'  };
  return { icon: '📦', label: item.name || item.id, slot: null };
}

// ─── SVG Avatar ──────────────────────────────────────────────────────────────
function Avatar({ gogglesOn, glovesType }) {
  const gloveColor  = glovesType === 'sterile' ? '#e2e8f0' : glovesType === 'yellow' ? '#fbbf24' : null;
  const gloveBorder = glovesType === 'sterile' ? '#94a3b8' : '#d97706';
  return (
    <svg viewBox="0 0 120 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="av_skin" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#fcd9b6"/><stop offset="100%" stopColor="#f5b88a"/></linearGradient>
        <linearGradient id="av_coat" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f8fafc"/><stop offset="100%" stopColor="#e2e8f0"/></linearGradient>
        <linearGradient id="av_hair" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#92400e"/><stop offset="100%" stopColor="#78350f"/></linearGradient>
      </defs>
      <rect x="22" y="90" width="76" height="90" rx="8" fill="url(#av_coat)" stroke="#cbd5e1" strokeWidth="1.5"/>
      <path d="M60 90 L45 110 L60 105 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1"/>
      <path d="M60 90 L75 110 L60 105 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1"/>
      <circle cx="60" cy="118" r="2.5" fill="#94a3b8"/>
      <circle cx="60" cy="130" r="2.5" fill="#94a3b8"/>
      <circle cx="60" cy="142" r="2.5" fill="#94a3b8"/>
      <rect x="30" y="110" width="18" height="14" rx="3" fill="none" stroke="#cbd5e1" strokeWidth="1.2"/>
      <rect x="4"  y="92" width="20" height="60" rx="8" fill="url(#av_coat)" stroke="#cbd5e1" strokeWidth="1.5"/>
      <rect x="96" y="92" width="20" height="60" rx="8" fill="url(#av_coat)" stroke="#cbd5e1" strokeWidth="1.5"/>
      {gloveColor ? (
        <>
          <ellipse cx="14"  cy="158" rx="10" ry="12" fill={gloveColor} stroke={gloveBorder} strokeWidth="1.5"/>
          {[0,1,2,3].map(i=><rect key={i} x={7+i*3.5}  y={152} width="2.5" height="8" rx="1.2" fill={glovesType==='sterile'?'#f1f5f9':'#fcd34d'} opacity="0.7"/>)}
          <ellipse cx="106" cy="158" rx="10" ry="12" fill={gloveColor} stroke={gloveBorder} strokeWidth="1.5"/>
          {[0,1,2,3].map(i=><rect key={i} x={99+i*3.5} y={152} width="2.5" height="8" rx="1.2" fill={glovesType==='sterile'?'#f1f5f9':'#fcd34d'} opacity="0.7"/>)}
        </>
      ) : (
        <>
          <ellipse cx="14"  cy="157" rx="9" ry="11" fill="url(#av_skin)" stroke="#f5b88a" strokeWidth="1"/>
          <ellipse cx="106" cy="157" rx="9" ry="11" fill="url(#av_skin)" stroke="#f5b88a" strokeWidth="1"/>
        </>
      )}
      <rect x="30" y="178" width="24" height="38" rx="5" fill="#1e3a5f" stroke="#1e40af" strokeWidth="1"/>
      <rect x="66" y="178" width="24" height="38" rx="5" fill="#1e3a5f" stroke="#1e40af" strokeWidth="1"/>
      <ellipse cx="42" cy="216" rx="14" ry="6" fill="#1e293b"/>
      <ellipse cx="78" cy="216" rx="14" ry="6" fill="#1e293b"/>
      <rect x="52" y="78" width="16" height="16" rx="4" fill="url(#av_skin)"/>
      <ellipse cx="60" cy="60" rx="26" ry="28" fill="url(#av_skin)" stroke="#f5b88a" strokeWidth="1"/>
      <path d="M34 52 Q36 28 60 26 Q84 28 86 52 Q80 38 60 36 Q40 38 34 52 Z" fill="url(#av_hair)"/>
      <ellipse cx="50" cy="58" rx="5" ry="5.5" fill="white" stroke="#cbd5e1" strokeWidth="0.5"/>
      <ellipse cx="70" cy="58" rx="5" ry="5.5" fill="white" stroke="#cbd5e1" strokeWidth="0.5"/>
      <circle cx="51" cy="59" r="3" fill="#1e293b"/>
      <circle cx="71" cy="59" r="3" fill="#1e293b"/>
      <circle cx="52.2" cy="57.5" r="1" fill="white"/>
      <circle cx="72.2" cy="57.5" r="1" fill="white"/>
      <ellipse cx="60" cy="66" rx="3" ry="2" fill="url(#av_skin)" stroke="#e8a070" strokeWidth="0.5"/>
      <path d="M53 72 Q60 77 67 72" stroke="#c07850" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <ellipse cx="34" cy="60" rx="5" ry="7" fill="url(#av_skin)" stroke="#f5b88a" strokeWidth="0.8"/>
      <ellipse cx="86" cy="60" rx="5" ry="7" fill="url(#av_skin)" stroke="#f5b88a" strokeWidth="0.8"/>
      {gogglesOn && (
        <g>
          <rect x="32" y="55" width="56" height="12" rx="6" fill="#1e3a5f" opacity="0.2"/>
          <rect x="36" y="53" width="20" height="14" rx="5" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1.8" opacity="0.85"/>
          <rect x="38" y="55" width="6"  height="5"  rx="2" fill="white" opacity="0.4"/>
          <rect x="64" y="53" width="20" height="14" rx="5" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1.8" opacity="0.85"/>
          <rect x="66" y="55" width="6"  height="5"  rx="2" fill="white" opacity="0.4"/>
          <rect x="56" y="57" width="8"  height="4"  rx="2" fill="#3b82f6" opacity="0.7"/>
        </g>
      )}
    </svg>
  );
}



// ─── Inventory Slot UI ────────────────────────────────────────────────────────
function InvSlot({ item, isSelected, isEquipSlot, onClick, size='md' }) {
  const sz = size==='lg' ? 'w-16 h-16 text-3xl' : size==='sm' ? 'w-9 h-9 text-lg' : 'w-12 h-12 text-2xl';
  const def = item ? getItemDef(item) : null;
  return (
    <button onClick={onClick}
      className={[
        sz,
        'rounded-xl border-2 flex items-center justify-center transition-all duration-100 select-none',
        item
          ? `${def?.bg||'bg-slate-700'} ${def?.border||'border-slate-500'} hover:brightness-110`
          : isEquipSlot
            ? 'bg-slate-800/60 border-slate-600 hover:border-slate-400'
            : 'bg-slate-800/40 border-slate-700 hover:border-slate-500',
        isSelected ? 'ring-2 ring-yellow-400 ring-offset-2 ring-offset-slate-900 scale-110 shadow-lg shadow-yellow-400/20' : '',
      ].join(' ')}
      title={def?.label || ''}>
      {item ? (def?.icon || '📦') : ''}
    </button>
  );
}

// ─── Minecraft Inventory Modal ────────────────────────────────────────────────
function MinecraftInventory({ slots, selectedSlot, equippedHelmet, equippedGloves, onSlotClick, onEquipSlotClick, onClose }) {
  const hotbar = slots.slice(0, 9);
  const main   = slots.slice(9, 36);
  const helmetItem = equippedHelmet ? { id:'safety_goggles' } : null;
  const glovesItem = equippedGloves === 'sterile' ? { id:'sterile_gloves' } : equippedGloves === 'yellow' ? { id:'regular_gloves' } : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background:'rgba(0,0,0,0.8)', backdropFilter:'blur(6px)' }}
      onClick={e => { if(e.target===e.currentTarget) onClose(); }}>
      <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl"
        style={{ background:'#1a1f2e', border:'2px solid #374151' }}>

        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700">
          <div>
            <h2 className="text-white font-bold text-xl">🎒 Инвентарь</h2>
            <p className="text-slate-400 text-xs mt-0.5">
              Выделите предмет (клик) → кликните в нужный слот для перемещения
            </p>
          </div>
          <button onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-700 hover:bg-red-600 text-slate-300 hover:text-white font-bold text-lg flex items-center justify-center transition-all">×</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto]">
          <div className="p-6 space-y-5">
            <div>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Инвентарь</p>
              <div className="grid grid-cols-9 gap-1.5">
                {main.map((item, i) => (
                  <InvSlot key={i} item={item} isSelected={selectedSlot===i+9} onClick={()=>onSlotClick(i+9)}/>
                ))}
              </div>
            </div>
            <div>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Быстрый доступ</p>
              <div className="grid grid-cols-9 gap-1.5 p-2 rounded-xl" style={{ background:'#111827', border:'2px solid #374151' }}>
                {hotbar.map((item, i) => (
                  <InvSlot key={i} item={item} isSelected={selectedSlot===i} onClick={()=>onSlotClick(i)}/>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 border-l border-slate-700 flex flex-col items-center gap-4 min-w-[260px]">
            <div className="w-full space-y-2">
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Экипировка</p>
              <div className="flex items-center gap-3 p-3 rounded-xl" style={{ background:'#111827', border:'1px solid #374151' }}>
                <InvSlot item={helmetItem} isEquipSlot isSelected={selectedSlot==='helmet'} size="lg" onClick={()=>onEquipSlotClick('helmet')}/>
                <div>
                  <p className="text-slate-300 font-bold text-sm">Голова</p>
                  <p className="text-slate-500 text-xs">{helmetItem ? getItemDef(helmetItem)?.label : '—'}</p>
                  {helmetItem && <p className="text-emerald-400 text-xs font-bold">✓ Надеты</p>}
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl" style={{ background:'#111827', border:'1px solid #374151' }}>
                <InvSlot item={glovesItem} isEquipSlot isSelected={selectedSlot==='gloves'} size="lg" onClick={()=>onEquipSlotClick('gloves')}/>
                <div>
                  <p className="text-slate-300 font-bold text-sm">Руки</p>
                  <p className="text-slate-500 text-xs">{glovesItem ? getItemDef(glovesItem)?.label : '—'}</p>
                  {glovesItem && (
                    <p className={`text-xs font-bold ${glovesItem.id==='sterile_gloves'?'text-emerald-400':'text-amber-400'}`}>
                      {glovesItem.id==='sterile_gloves'?'✓ Стерильные':'⚠ Хозяйственные'}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full rounded-xl overflow-hidden flex flex-col items-center"
              style={{ background:'linear-gradient(180deg,#1e3a5f 0%,#0f172a 100%)', border:'1px solid #1e40af', minHeight:210 }}>
              <div className="w-32 h-48 mt-2">
                <Avatar gogglesOn={!!equippedHelmet} glovesType={equippedGloves}/>
              </div>
              <p className="text-slate-400 text-xs pb-3">Лаборант</p>
            </div>

            <p className="text-slate-600 text-xs text-center">
              <kbd className="px-1 py-0.5 rounded bg-slate-700 text-slate-300 font-mono text-[10px]">E</kbd> / <kbd className="px-1 py-0.5 rounded bg-slate-700 text-slate-300 font-mono text-[10px]">У</kbd> / <kbd className="px-1 py-0.5 rounded bg-slate-700 text-slate-300 font-mono text-[10px]">Esc</kbd> — закрыть
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Step1_SitePrep({ logs, onComplete }) {

  // ── Build initial inventory from all 3 sources ──
  const buildInitialSlots = () => {
    const items = [];

    // 1. Field kit items (step 3)
    logs.kitResults.forEach(kitItem => {
      items.push({ id: kitItem.id, name: kitItem.name });
    });

    // 2. Chem tare items (step 1) — chemResults contains { id, name, isPerfect, errs }
    if (logs.chemResults?.length) {
      logs.chemResults.forEach((res, idx) => {
        const label = `Тара Хим. — ${res.name}`;
        items.push({ id: `chem_tare_${idx}`, name: label });
      });
    }

    // 3. Bio tare items (step 2)
    if (logs.bioResults?.length) {
      logs.bioResults.forEach((res, idx) => {
        const label = `Тара Био — ${res.name}`;
        items.push({ id: `bio_tare_${idx}`, name: label });
      });
    }

    // Fill hotbar (0-8) first, then main inventory (9-35)
    const slots = new Array(36).fill(null);
    items.forEach((item, i) => {
      if (i < 36) slots[i] = item;
    });
    return slots;
  };

  const [slots, setSlots]                   = useState(buildInitialSlots);
  const [hotbarActive, setHotbarActive]     = useState(0);
  const [selectedSlot, setSelectedSlot]     = useState(null); // number | 'helmet' | 'gloves' | null
  const [equippedHelmet, setEquippedHelmet] = useState(false);
  const [equippedGloves, setEquippedGloves] = useState(null);
  const [inventoryOpen, setInventoryOpen]   = useState(false);

  // Faucet
  const [aeratorRemoved, setAeratorRemoved] = useState(false);
  const [spotsLeft, setSpotsLeft]           = useState(3);
  const [isWiping, setIsWiping]             = useState(false);
  const [warning, setWarning]               = useState('');

  // ── Keyboard ──
  useEffect(() => {
    const onKey = (e) => {
      const key = e.key.toLowerCase();
      if (key === 'e' || key === 'у') { e.preventDefault(); setInventoryOpen(o=>!o); return; }
      if (e.key === 'Escape') { setInventoryOpen(false); setSelectedSlot(null); return; }
      if (!inventoryOpen) {
        if (e.key === 'ArrowRight') setHotbarActive(a=>(a+1)%9);
        if (e.key === 'ArrowLeft')  setHotbarActive(a=>(a+8)%9);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [inventoryOpen]);

  // ── Helpers ──
  const getEquipItem = useCallback((slotName) => {
    if (slotName === 'helmet') return equippedHelmet ? { id:'safety_goggles' } : null;
    if (slotName === 'gloves') return equippedGloves==='sterile' ? { id:'sterile_gloves' }
      : equippedGloves==='yellow' ? { id:'regular_gloves' } : null;
    return null;
  }, [equippedHelmet, equippedGloves]);

  // Put item back anywhere in inventory (hotbar first, then main)
  const returnToInventory = useCallback((item) => {
    if (!item) return;
    setSlots(prev => {
      const next = [...prev];
      const empty = next.findIndex(s => s === null);
      if (empty !== -1) next[empty] = item;
      return next;
    });
  }, []);

  // ── Unified slot click — clean two-step drag-by-click ──
  const handleSlotClick = useCallback((target) => {
    const isEquipTarget = target === 'helmet' || target === 'gloves';

    // STEP 1: nothing selected — try to select
    if (selectedSlot === null) {
      const hasItem = isEquipTarget ? !!getEquipItem(target) : !!slots[target];
      if (hasItem) setSelectedSlot(target);
      return;
    }

    // STEP 2: same slot — deselect
    if (selectedSlot === target) { setSelectedSlot(null); return; }

    const isEquipSource = selectedSlot === 'helmet' || selectedSlot === 'gloves';
    const sourceItem    = isEquipSource ? getEquipItem(selectedSlot) : slots[selectedSlot];
    const targetItem    = isEquipTarget ? getEquipItem(target) : slots[target];

    if (!sourceItem) { setSelectedSlot(null); return; }

    // ── Determine what goes where ──

    // Case A: moving FROM inventory TO equip slot
    if (!isEquipSource && isEquipTarget) {
      const def = getItemDef(sourceItem);
      if (def?.slot && def.slot === target) {
        // Compatible — equip it
        setSlots(prev => { const n=[...prev]; n[selectedSlot]=targetItem; return n; });
        if (target==='helmet') setEquippedHelmet(true);
        if (target==='gloves') setEquippedGloves(ICON_MAP[sourceItem.id]?.value || null);
        if (targetItem) {
          // displaced item goes back into the source slot (already done above)
        }
      } else {
        // Incompatible slot — bounce back, nothing moves
        // (sourceItem stays in inventory, nothing lost)
      }
      setSelectedSlot(null);
      return;
    }

    // Case B: moving FROM equip slot TO inventory
    if (isEquipSource && !isEquipTarget) {
      const displaced = slots[target]; // item currently in that inv slot (may be null)
      // Move sourceItem to inventory slot
      setSlots(prev => { const n=[...prev]; n[target]=sourceItem; return n; });
      // Clear equip slot
      if (selectedSlot==='helmet') setEquippedHelmet(false);
      if (selectedSlot==='gloves') setEquippedGloves(null);
      // If displaced, put back in equip slot? No — just return to inventory elsewhere
      if (displaced) returnToInventory(displaced);
      setSelectedSlot(null);
      return;
    }

    // Case C: equip → equip
    if (isEquipSource && isEquipTarget) {
      // Swap: put targetItem into source equip, sourceItem into target equip
      // But only if compatible
      const sourceDef = getItemDef(sourceItem);
      const targetDef = targetItem ? getItemDef(targetItem) : null;
      // Check sourceItem fits target
      if (!sourceDef?.slot || sourceDef.slot !== target) {
        // doesn't fit — cancel
        setSelectedSlot(null);
        return;
      }
      // Put sourceItem in target equip slot
      if (target==='helmet') setEquippedHelmet(true);
      if (target==='gloves') setEquippedGloves(ICON_MAP[sourceItem.id]?.value || null);
      // Put targetItem in source equip slot (may be null = unequip)
      if (targetItem && targetDef?.slot === selectedSlot) {
        if (selectedSlot==='helmet') setEquippedHelmet(true);
        if (selectedSlot==='gloves') setEquippedGloves(ICON_MAP[targetItem.id]?.value || null);
      } else {
        // targetItem doesn't fit source slot, return to inventory
        if (selectedSlot==='helmet') setEquippedHelmet(false);
        if (selectedSlot==='gloves') setEquippedGloves(null);
        if (targetItem) returnToInventory(targetItem);
      }
      setSelectedSlot(null);
      return;
    }

    // Case D: inventory → inventory (plain swap)
    setSlots(prev => {
      const n = [...prev];
      n[selectedSlot] = targetItem;
      n[target]       = sourceItem;
      return n;
    });
    setSelectedSlot(null);
  }, [selectedSlot, slots, getEquipItem, returnToInventory]);

  // ── Faucet ──
  const handleWipeSpot = () => {
    if (!equippedGloves) { setWarning('⚠️ Нельзя чистить кран голыми руками! Наденьте перчатки через инвентарь (E).'); return; }
    if (isWiping || spotsLeft===0) return;
    setWarning('');
    setIsWiping(true);
    setTimeout(()=>{ setSpotsLeft(p=>Math.max(0,p-1)); setIsWiping(false); }, 500);
  };

  const handleCompletePrep = () => {
    if (!aeratorRemoved) { setWarning('Необходимо демонтировать аэратор (кликните по сеточке на кране).'); return; }
    if (spotsLeft>0)     { setWarning('Очистите носик крана от всех видимых загрязнений.'); return; }
    const errors=[]; let scorePenalty=0;
    if (!equippedHelmet)               { errors.push('Нарушение ТБ: Вы работали без защитных очков.'); scorePenalty+=10; }
    if (!equippedGloves)               { errors.push('Нарушение стерильности: Вы работали голыми руками.'); scorePenalty+=20; }
    else if (equippedGloves==='yellow'){ errors.push('Нарушение стерильности: Использованы хозяйственные перчатки вместо стерильных.'); scorePenalty+=15; }
    onComplete({ prepErrors:errors, prepScorePenalty:scorePenalty, gogglesEquipped:equippedHelmet, glovesEquipped:equippedGloves });
  };

  const checklist = [
    { done: equippedHelmet && !!equippedGloves, label: 'Надеть СИЗ (очки + перчатки)' },
    { done: aeratorRemoved,  label: 'Демонтировать аэратор (клик по ⚙)' },
    { done: spotsLeft === 0, label: 'Очистить носик крана от ржавчины' },
  ];

  const activeItem    = slots[hotbarActive];
  const activeItemDef = activeItem ? getItemDef(activeItem) : null;

  return (
    <div className="relative w-full max-w-6xl mb-6">
      <style>{`
        @keyframes drip{0%{transform:translateY(0);opacity:.7}80%{transform:translateY(60px);opacity:.4}100%{transform:translateY(70px);opacity:0}}
        @keyframes fc_spin{to{transform:rotate(360deg)}}
        .step-card{background:white;border-radius:20px;border:1.5px solid #e2e8f0;box-shadow:0 4px 24px rgba(0,0,0,0.07);overflow:hidden}
      `}</style>

      {inventoryOpen && (
        <MinecraftInventory
          slots={slots}
          selectedSlot={selectedSlot}
          equippedHelmet={equippedHelmet}
          equippedGloves={equippedGloves}
          onSlotClick={handleSlotClick}
          onEquipSlotClick={handleSlotClick}
          onClose={()=>{ setInventoryOpen(false); setSelectedSlot(null); }}
        />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

        {/* LEFT */}
        <div className="lg:col-span-3 step-card flex flex-col">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 px-6 py-5">
            <h2 className="text-white font-bold text-lg">🎒 Снаряжение</h2>
            <p className="text-slate-400 text-xs mt-1">Нажмите E / У чтобы открыть инвентарь</p>
          </div>
          <div className="p-5 flex flex-col gap-4 flex-1">
            <button onClick={()=>setInventoryOpen(true)}
              className="w-full py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-md active:scale-95"
              style={{ background:'linear-gradient(135deg,#1e3a5f,#1e40af)', color:'white' }}>
              <span className="text-xl">🗃️</span>
              Открыть инвентарь
              <span className="ml-1 text-xs opacity-60 font-mono bg-white/10 px-1.5 py-0.5 rounded">E / У</span>
            </button>

            <div className="rounded-2xl overflow-hidden flex flex-col items-center py-3 px-3"
              style={{ background:'linear-gradient(180deg,#1e3a5f 0%,#0f172a 100%)', border:'1px solid #1e40af' }}>
              <div className="w-24 h-40">
                <Avatar gogglesOn={equippedHelmet} glovesType={equippedGloves}/>
              </div>
            </div>

            <div className="space-y-2">
              {[
                { label:'Голова', equipped: equippedHelmet, id: equippedHelmet ? 'safety_goggles' : null, okText:'Очки надеты ✓', warn:false },
                { label:'Руки',   equipped: !!equippedGloves,
                  id: equippedGloves==='sterile'?'sterile_gloves':equippedGloves==='yellow'?'regular_gloves':null,
                  okText: equippedGloves==='sterile'?'Стерильные ✓':'Хозяйственные ⚠',
                  warn: equippedGloves==='yellow' },
              ].map(row=>(
                <div key={row.label}
                  className={`flex items-center gap-3 p-3 rounded-xl border transition-all
                    ${row.equipped?(row.warn?'bg-amber-50 border-amber-300':'bg-emerald-50 border-emerald-300'):'bg-slate-50 border-slate-200'}`}>
                  <div className="text-2xl w-8 text-center">
                    {row.id ? (getItemDef({id:row.id})?.icon||'?') : '—'}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-600">{row.label}</p>
                    <p className={`text-xs ${row.equipped?(row.warn?'text-amber-600 font-semibold':'text-emerald-600 font-semibold'):'text-slate-400'}`}>
                      {row.equipped?row.okText:'Пусто'}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1.5">
                В руке — <span className="text-slate-300 font-mono">← →</span>
              </p>
              <div className="grid grid-cols-9 gap-1 p-2 rounded-xl bg-slate-900">
                {slots.slice(0,9).map((item,i)=>(
                  <div key={i}
                    className={`h-9 rounded-lg border-2 flex items-center justify-center text-base transition-all cursor-pointer
                      ${i===hotbarActive
                        ?'border-yellow-400 bg-slate-700 scale-110 shadow-lg shadow-yellow-400/20'
                        :'border-slate-700 bg-slate-800'}`}
                    onClick={()=>setHotbarActive(i)}>
                    {item?(getItemDef(item)?.icon||'📦'):''}
                  </div>
                ))}
              </div>
              <div className="mt-1.5 text-center text-xs text-slate-400 min-h-[1rem]">
                {activeItemDef?.label||''}
              </div>
            </div>
          </div>
        </div>

        {/* CENTER */}
        <div className="lg:col-span-6 step-card flex flex-col">
          <div className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 px-6 py-5">
            <h2 className="text-white font-bold text-lg">🚰 Кран на объекте — крупный план</h2>
            <p className="text-slate-400 text-xs mt-1">Снимите аэратор и протрите носик ветошью перед обжигом</p>
          </div>
          <div className="flex-1 flex flex-col items-center justify-between p-4 bg-gradient-to-b from-slate-50 to-white">
            <div className="w-full flex justify-between items-start mb-2">
              <div className={`text-xs font-bold px-3 py-1.5 rounded-full border
                ${aeratorRemoved?'bg-emerald-50 text-emerald-700 border-emerald-200':'bg-amber-50 text-amber-700 border-amber-200 animate-pulse'}`}>
                {aeratorRemoved?'✓ Аэратор снят':'⚙ Кликните по сеточке'}
              </div>
              <div className={`text-xs font-bold px-3 py-1.5 rounded-full border
                ${spotsLeft===0?'bg-emerald-50 text-emerald-700 border-emerald-200':'bg-orange-50 text-orange-700 border-orange-200'}`}>
                {spotsLeft===0?'✓ Носик чистый':`Загрязнений: ${spotsLeft}/3`}
              </div>
            </div>
            <div className="w-full flex-1 flex items-center justify-center min-h-[380px]">
              <FaucetSVG aeratorRemoved={aeratorRemoved} spotsLeft={spotsLeft} isWiping={isWiping}
                onRemoveAerator={()=>setAeratorRemoved(true)}
                onWipeSpot={handleWipeSpot} glovesEquipped={equippedGloves} blocked={true}/>
            </div>
            <div className={`w-full flex items-center gap-4 rounded-2xl p-4 border-2 mt-2 transition-all
              ${spotsLeft===0?'bg-emerald-50 border-emerald-200':equippedGloves?'bg-white border-slate-200 hover:border-amber-300':'bg-slate-50 border-slate-200 opacity-60'}`}>
              <div className="text-3xl select-none">🧻</div>
              <div className="flex-1">
                <p className="font-bold text-sm text-slate-800">{spotsLeft===0?'Носик очищен':'Сухая ветошь'}</p>
                <p className="text-xs text-slate-500">{spotsLeft===0?'Поверхность готова к обжигу горелкой':'Кликайте по пятнам ржавчины, чтобы удалить их'}</p>
              </div>
              {spotsLeft>0&&(
                <button disabled={!equippedGloves||isWiping} onClick={handleWipeSpot}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs transition-all
                    ${!equippedGloves?'bg-slate-100 text-slate-400 cursor-not-allowed':isWiping?'bg-amber-200 text-amber-800 cursor-wait':'bg-amber-100 hover:bg-amber-200 text-amber-800 shadow-sm'}`}>
                  {isWiping?'⏳ Протирка...':`Протереть (${3-spotsLeft}/3)`}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-3 step-card flex flex-col">
          <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 px-6 py-5">
            <h2 className="text-white font-bold text-lg">📋 Задачи</h2>
            <p className="text-emerald-300 text-xs mt-1">Чек-лист подготовки крана</p>
          </div>
          <div className="p-5 flex flex-col gap-4 flex-1">
            <div className="space-y-2">
              {checklist.map((item,i)=>(
                <div key={i} className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all
                  ${item.done?'bg-emerald-50 border-emerald-200':'bg-slate-50 border-slate-200'}`}>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold border-2
                    ${item.done?'bg-emerald-500 border-emerald-500 text-white':'bg-white border-slate-300 text-slate-400'}`}>
                    {item.done?'✓':i+1}
                  </div>
                  <p className={`text-xs font-semibold leading-snug ${item.done?'text-emerald-800 line-through decoration-emerald-400':'text-slate-600'}`}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="bg-slate-900 rounded-xl p-4 text-white text-xs space-y-2 border border-slate-700">
              <p className="font-bold text-slate-300 uppercase tracking-wider text-[10px]">Статус защиты</p>
              {[
                { icon:'🥽', label:'Очки',    val:equippedHelmet?'Надеты':'Сняты',                                               ok:equippedHelmet },
                { icon:'🧤', label:'Перчатки', val:equippedGloves==='sterile'?'Стерильные ✓':equippedGloves==='yellow'?'Хозяйственные ⚠':'Нет', ok:!!equippedGloves },
                { icon:'⚙️', label:'Аэратор',  val:aeratorRemoved?'Снят ✓':'На месте',                                          ok:aeratorRemoved },
                { icon:'🧹', label:'Носик',    val:spotsLeft===0?'Чистый ✓':`Грязь ${spotsLeft}/3`,                             ok:spotsLeft===0 },
              ].map(r=>(
                <div key={r.label} className="flex justify-between">
                  <span className="text-slate-400">{r.icon} {r.label}:</span>
                  <span className={`font-bold ${r.ok?'text-emerald-400':'text-red-400'}`}>{r.val}</span>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs text-blue-800">
              <p className="font-bold mb-1">📖 ГОСТ Р 59024‑2020</p>
              <p className="leading-relaxed text-blue-700">Снять аэратор, прочистить излив, продезинфицировать горелкой и дать воде слиться 5–10 мин.</p>
            </div>
            <div className="mt-auto">
              {warning&&(
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