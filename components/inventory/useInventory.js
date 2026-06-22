// components/inventory/useInventory.js
'use client';
import { useState, useCallback, useEffect } from 'react';
import { ICON_MAP, getItemDef } from './itemRegistry';

const TOTAL_SLOTS = 36; // 9 hotbar + 27 основной инвентарь

/**
 * useInventory — вся логика данных Minecraft-инвентаря в одном месте:
 *  - слоты (hotbar + основной инвентарь)
 *  - экипировка (голова / руки)
 *  - перемещение предметов: клик-выделить→клик-переместить, а также drag-and-drop
 *  - открытие/закрытие модалки инвентаря (E / У / Esc)
 *  - переключение активной ячейки hotbar (← / →), когда модалка закрыта
 *
 * Используется на уровне родителя (Step1_SitePrep), а не внутри самой
 * модалки — потому что hotbar нужно показывать ещё и вне модалки
 * (в левой панели), а значит состояние должно быть видно обоим местам.
 *
 * @param {Array<{id:string, name?:string}>} initialItems — стартовый набор предметов
 */
export function useInventory(initialItems = [], shouldInitialize = false) {
  const buildInitialSlots = useCallback(() => {
    const slots = new Array(TOTAL_SLOTS).fill(null);
    initialItems.forEach((item, i) => {
      if (i < TOTAL_SLOTS) slots[i] = item;
    });
    return slots;
  }, [initialItems]);

  const [slots, setSlots]                   = useState(() => (shouldInitialize ? buildInitialSlots() : new Array(TOTAL_SLOTS).fill(null)));
  const [selectedSlot, setSelectedSlot]     = useState(null); // number | 'helmet' | 'gloves' | null
  const [equippedHelmet, setEquippedHelmet] = useState(false);
  const [equippedGloves, setEquippedGloves] = useState(null); // null | 'sterile' | 'yellow'
  const [hotbarActive, setHotbarActive]     = useState(0);
  const [isHoldingActive, setIsHoldingActive] = useState(true);
  const [isOpen, setIsOpen]                 = useState(false);
  const [draggedSlot, setDraggedSlot]       = useState(null); // number | 'helmet' | 'gloves' | null — что сейчас тащат

  const [hasInitialized, setHasInitialized] = useState(shouldInitialize);

  useEffect(() => {
    if (hasInitialized || !shouldInitialize) return;
    setSlots(buildInitialSlots());
    setEquippedHelmet(false);
    setEquippedGloves(null);
    setSelectedSlot(null);
    setHasInitialized(true);
  }, [buildInitialSlots, hasInitialized, shouldInitialize]);

  // ── Получить «виртуальный» предмет, лежащий в слоте экипировки ──
  const getEquipItem = useCallback((slotName) => {
    if (slotName === 'helmet') return equippedHelmet ? { id: 'safety_goggles' } : null;
    if (slotName === 'gloves') {
      if (equippedGloves === 'sterile') return { id: 'sterile_gloves' };
      if (equippedGloves === 'yellow')  return { id: 'regular_gloves' };
      return null;
    }
    return null;
  }, [equippedHelmet, equippedGloves]);

  // Получить предмет, лежащий в любом слоте — инвентарном или экипировочном
  const getSlotItem = useCallback((slot) => {
    const isEquip = slot === 'helmet' || slot === 'gloves';
    return isEquip ? getEquipItem(slot) : slots[slot];
  }, [slots, getEquipItem]);

  // Положить предмет в первую свободную ячейку инвентаря
  const returnToInventory = useCallback((item) => {
    if (!item) return;
    setSlots(prev => {
      const next = [...prev];
      const empty = next.findIndex(s => s === null);
      if (empty !== -1) next[empty] = item;
      return next;
    });
  }, []);

  /**
   * moveItem — переместить предмет из source в target.
   * Это «ядро» перемещения, не привязанное к способу взаимодействия:
   * используется и кликом (handleSlotClick), и drag-and-drop (handleDrop).
   *
   * source/target: число (0-35) или 'helmet'/'gloves'.
   */
  const moveItem = useCallback((source, target) => {
    if (source === null || source === undefined) return;
    if (source === target) return;

    const isEquipSource = source === 'helmet' || source === 'gloves';
    const isEquipTarget = target === 'helmet' || target === 'gloves';

    const sourceItem = isEquipSource ? getEquipItem(source) : slots[source];
    const targetItem = isEquipTarget ? getEquipItem(target) : slots[target];

    if (!sourceItem) return;

    // ── Случай A: инвентарь → экипировка ──
    if (!isEquipSource && isEquipTarget) {
      const def = getItemDef(sourceItem);
      if (def?.slot && def.slot === target) {
        setSlots(prev => { const n = [...prev]; n[source] = targetItem; return n; });
        if (target === 'helmet') setEquippedHelmet(true);
        if (target === 'gloves') setEquippedGloves(ICON_MAP[sourceItem.id]?.value || null);
      }
      // несовместимый слот — отмена, предмет остаётся на месте
      return;
    }

    // ── Случай B: экипировка → инвентарь ──
    if (isEquipSource && !isEquipTarget) {
      const displaced = slots[target];
      setSlots(prev => { const n = [...prev]; n[target] = sourceItem; return n; });
      if (source === 'helmet') setEquippedHelmet(false);
      if (source === 'gloves') setEquippedGloves(null);
      if (displaced) returnToInventory(displaced);
      return;
    }

    // ── Случай C: экипировка → экипировка ──
    if (isEquipSource && isEquipTarget) {
      const sourceDef = getItemDef(sourceItem);
      const targetDef = targetItem ? getItemDef(targetItem) : null;

      if (!sourceDef?.slot || sourceDef.slot !== target) return;

      if (target === 'helmet') setEquippedHelmet(true);
      if (target === 'gloves') setEquippedGloves(ICON_MAP[sourceItem.id]?.value || null);

      if (targetItem && targetDef?.slot === source) {
        if (source === 'helmet') setEquippedHelmet(true);
        if (source === 'gloves') setEquippedGloves(ICON_MAP[targetItem.id]?.value || null);
      } else {
        if (source === 'helmet') setEquippedHelmet(false);
        if (source === 'gloves') setEquippedGloves(null);
        if (targetItem) returnToInventory(targetItem);
      }
      return;
    }

    // ── Случай D: инвентарь → инвентарь (простой обмен) ──
    setSlots(prev => {
      const n = [...prev];
      n[source] = targetItem;
      n[target] = sourceItem;
      return n;
    });
  }, [slots, getEquipItem, returnToInventory]);

  /**
   * handleSlotClick — режим "выделить → переместить" по клику.
   * Первый клик по непустому слоту выделяет его, второй клик (по другому
   * слоту) вызывает moveItem. Повторный клик по тому же слоту снимает выделение.
   */
  const handleSlotClick = useCallback((target) => {
    if (selectedSlot === null) {
      if (getSlotItem(target)) setSelectedSlot(target);
      return;
    }
    if (selectedSlot === target) { setSelectedSlot(null); return; }

    moveItem(selectedSlot, target);
    setSelectedSlot(null);
  }, [selectedSlot, getSlotItem, moveItem]);

  /**
   * Drag-and-drop хендлеры — используют тот же moveItem, что и клики.
   * onDragStart запоминает источник, onDrop вызывает перемещение в цель.
   */
  const handleDragStart = useCallback((source) => {
    if (!getSlotItem(source)) return;
    setDraggedSlot(source);
    setSelectedSlot(null); // drag и click-выделение не должны смешиваться
  }, [getSlotItem]);

  const handleDrop = useCallback((target) => {
    if (draggedSlot === null) return;
    moveItem(draggedSlot, target);
    setDraggedSlot(null);
  }, [draggedSlot, moveItem]);

  const handleDragEnd = useCallback(() => {
    setDraggedSlot(null);
  }, []);

  // ── Открытие/закрытие модалки ──
  const openInventory  = useCallback(() => setIsOpen(true), []);
  const closeInventory = useCallback(() => { setIsOpen(false); setSelectedSlot(null); setDraggedSlot(null); }, []);
  const toggleInventory = useCallback(() => {
    setIsOpen(o => !o);
    setSelectedSlot(null);
    setDraggedSlot(null);
  }, []);

  const resetInventory = useCallback(() => {
    setSlots(buildInitialSlots());
    setEquippedHelmet(false);
    setEquippedGloves(null);
    setSelectedSlot(null);
    setDraggedSlot(null);
    setHotbarActive(0);
    setHasInitialized(initialItems.length > 0);
  }, [buildInitialSlots, initialItems.length]);

  const moveHotbarActive = useCallback((direction) => {
    setHotbarActive(a => (a + direction + 9) % 9);
    setIsHoldingActive(true);
  }, []);

  // ── Горячие клавиши: E / У открывают-закрывают, Esc закрывает, ←→ листают hotbar ──
  useEffect(() => {
    const onKey = (e) => {
      const key = e.key.toLowerCase();
      if (key === 'e' || key === 'у') { e.preventDefault(); toggleInventory(); return; }
      if (e.key === 'Escape' && isOpen) { closeInventory(); return; }
      if (!isOpen) {
        if (e.key === 'ArrowRight') moveHotbarActive(1);
        if (e.key === 'ArrowLeft')  moveHotbarActive(-1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, toggleInventory, closeInventory, moveHotbarActive]);

  const activeItem    = isHoldingActive ? slots[hotbarActive] : null;
  const activeItemDef = activeItem ? getItemDef(activeItem) : null;

const selectHotbarSlot = useCallback((index) => {
  if (hotbarActive === index) {
    // Повторный клик по активному слоту убирает предмет из руки (очищает курсор)
    setIsHoldingActive(prev => !prev);
  } else {
    // Клик по другому слоту активирует его и поднимает предмет в руку
    setHotbarActive(index);
    setIsHoldingActive(true);
  }
}, [hotbarActive]);

  return {
    // данные
    slots,
    selectedSlot,
    draggedSlot,
    equippedHelmet,
    equippedGloves,
    hotbarActive,
    isHoldingActive,
    activeItem,
    activeItemDef,
    isOpen,
    // действия — клик
    handleSlotClick,
    // действия — drag and drop
    handleDragStart,
    handleDrop,
    handleDragEnd,
    // hotbar / модалка
    setHotbarActive: selectHotbarSlot,
    moveHotbarActive,
    openInventory,
    closeInventory,
    toggleInventory,
  };
}
