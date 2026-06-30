// components/inventory/useInventory.js
'use client';
import { useState, useCallback, useEffect } from 'react';
import { ICON_MAP, getItemDef, getMaxStack } from './itemRegistry';

const TOTAL_SLOTS = 36; // 9 hotbar + 27 основной инвентарь

/**
 * Нормализует предмет к виду { id, name, qty }. qty по умолчанию 1.
 * Все предметы в слотах хранятся именно в этом виде, чтобы стекинг
 * (как в Minecraft) был возможен для расходников (maxStack > 1).
 */
function withQty(item, qty = 1) {
  if (!item) return null;
  return { ...item, qty: Math.max(1, qty) };
}

/**
 * useInventory — вся логика данных Minecraft-инвентаря в одном месте:
 *  - слоты (hotbar + основной инвентарь), каждый предмет несёт qty
 *  - стекинг предметов до maxStack (см. itemRegistry.js)
 *  - экипировка (голова / руки) — экипировать можно только 1 шт.
 *  - перемещение: клик-выделить→клик-переместить, drag-and-drop,
 *    и Minecraft-style «правый клик» — взять/положить только 1 штуку
 *  - открытие/закрытие модалки инвентаря (Tab / Esc)
 *  - переключение активной ячейки hotbar (← / →), когда модалка закрыта
 *
 * ВАЖНО: этот хук должен вызываться ОДИН РАЗ — на верхнем уровне приложения,
 * внутри InventoryProvider. Отдельные шаги (Step1_PackBag и т.п.) должны
 * получать инвентарь через useInventoryContext(), а не вызывать
 * useInventory(...) самостоятельно — иначе у каждого шага появится свой,
 * никак не связанный с остальными, локальный инвентарь, и все предметы,
 * собранные на предыдущих этапах, будут "пропадать" при переходе.
 *
 * @param {Array<{id:string, name?:string}>} initialItems — стартовый набор предметов
 */
export function useInventory(initialItems = []) {
  const buildInitialSlots = useCallback(() => {
    const slots = new Array(TOTAL_SLOTS).fill(null);
    let cursor = 0;

    initialItems.forEach((rawItem) => {
      if (cursor >= TOTAL_SLOTS) return;
      const maxStack = getMaxStack(rawItem.id);
      let remaining = rawItem.qty ?? 1;

      // Если в той же сборке initialItems несколько раз встречается id
      // (например, студент дважды взял одну и ту же салфетку), пытаемся
      // сначала добавить в уже существующую неполную стопку.
      const existingIndex = slots.findIndex(s => s && s.id === rawItem.id && s.qty < maxStack);
      if (existingIndex !== -1 && remaining > 0) {
        const canAdd = Math.min(remaining, maxStack - slots[existingIndex].qty);
        slots[existingIndex] = { ...slots[existingIndex], qty: slots[existingIndex].qty + canAdd };
        remaining -= canAdd;
      }

      while (remaining > 0 && cursor < TOTAL_SLOTS) {
        const qtyForSlot = Math.min(remaining, maxStack);
        slots[cursor] = withQty({ id: rawItem.id, name: rawItem.name }, qtyForSlot);
        remaining -= qtyForSlot;
        cursor++;
      }
    });

    return slots;
  }, [initialItems]);

  const [slots, setSlots]                   = useState(buildInitialSlots);
  const [selectedSlot, setSelectedSlot]     = useState(null); // number | 'helmet' | 'gloves' | null
  const [equippedHelmet, setEquippedHelmet] = useState(false);
  const [equippedGloves, setEquippedGloves] = useState(null); // null | 'sterile' | 'yellow'
  const [hotbarActive, setHotbarActive]     = useState(0);
  const [isHoldingActive, setIsHoldingActive] = useState(true);
  const [isOpen, setIsOpen]                 = useState(false);
  const [draggedSlot, setDraggedSlot]       = useState(null); // number | 'helmet' | 'gloves' | null

  const initialItemsKey = JSON.stringify(initialItems);

  // Пересобрать инвентарь, если initialItems сменились
  useEffect(() => {
    setSlots(buildInitialSlots());
    setEquippedHelmet(false);
    setEquippedGloves(null);
    setSelectedSlot(null);
  }, [initialItemsKey]);

  // ── «Виртуальный» предмет, лежащий в слоте экипировки (всегда qty:1) ──
  const getEquipItem = useCallback((slotName) => {
    if (slotName === 'helmet') return equippedHelmet ? withQty({ id: 'safety_goggles' }) : null;
    if (slotName === 'gloves') {
      if (equippedGloves === 'sterile') return withQty({ id: 'sterile_gloves' });
      if (equippedGloves === 'yellow')  return withQty({ id: 'regular_gloves' });
      return null;
    }
    return null;
  }, [equippedHelmet, equippedGloves]);

  const getSlotItem = useCallback((slot) => {
    const isEquip = slot === 'helmet' || slot === 'gloves';
    return isEquip ? getEquipItem(slot) : slots[slot];
  }, [slots, getEquipItem]);

  // Положить предмет (с его qty) в первую свободную ячейку,
  // либо доложить в существующую неполную стопку того же id.
  const returnToInventory = useCallback((item) => {
    if (!item) return;
    setSlots(prev => {
      const next = [...prev];
      const maxStack = getMaxStack(item.id);
      let remaining = item.qty ?? 1;

      // Сначала пытаемся доложить в существующие неполные стопки
      for (let i = 0; i < next.length && remaining > 0; i++) {
        if (next[i] && next[i].id === item.id && next[i].qty < maxStack) {
          const canAdd = Math.min(remaining, maxStack - next[i].qty);
          next[i] = { ...next[i], qty: next[i].qty + canAdd };
          remaining -= canAdd;
        }
      }
      // Остаток — в свободные ячейки
      while (remaining > 0) {
        const emptyIdx = next.findIndex(s => s === null);
        if (emptyIdx === -1) break; // инвентарь полон — остаток теряется (как в Minecraft)
        const qtyForSlot = Math.min(remaining, maxStack);
        next[emptyIdx] = withQty({ id: item.id, name: item.name }, qtyForSlot);
        remaining -= qtyForSlot;
      }
      return next;
    });
  }, []);

  /**
   * moveItem — переместить весь предмет (со всем qty) из source в target.
   * Если в target лежит такой же id — стекуется до maxStack, остаток
   * остаётся в source. Если разные id — обычный обмен местами (swap).
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
        // Экипировать можно только 1 штуку; если в стеке было больше — остаток
        // остаётся в исходном слоте инвентаря.
        const remainder = sourceItem.qty > 1 ? { ...sourceItem, qty: sourceItem.qty - 1 } : targetItem;
        setSlots(prev => { const n = [...prev]; n[source] = remainder; return n; });
        if (target === 'helmet') setEquippedHelmet(true);
        if (target === 'gloves') setEquippedGloves(ICON_MAP[sourceItem.id]?.value || null);
        // Если в экип-слоте уже что-то было и остатка от стека нет — вернуть это в инвентарь
        if (sourceItem.qty <= 1 && targetItem) returnToInventory(targetItem);
      }
      return;
    }

    // ── Случай B: экипировка → инвентарь ──
    if (isEquipSource && !isEquipTarget) {
      const displaced = slots[target];
      if (displaced && displaced.id === sourceItem.id && displaced.qty < getMaxStack(displaced.id)) {
        // Стекуем с тем, что уже лежит в целевой ячейке
        const maxStack = getMaxStack(displaced.id);
        const canAdd = Math.min(sourceItem.qty, maxStack - displaced.qty);
        setSlots(prev => { const n = [...prev]; n[target] = { ...displaced, qty: displaced.qty + canAdd }; return n; });
      } else {
        setSlots(prev => { const n = [...prev]; n[target] = sourceItem; return n; });
        if (displaced) returnToInventory(displaced);
      }
      if (source === 'helmet') setEquippedHelmet(false);
      if (source === 'gloves') setEquippedGloves(null);
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

    // ── Случай D: инвентарь → инвентарь ──
    if (targetItem && targetItem.id === sourceItem.id) {
      // Стекуем одинаковые предметы
      const maxStack = getMaxStack(sourceItem.id);
      const total = sourceItem.qty + targetItem.qty;
      if (total <= maxStack) {
        setSlots(prev => {
          const n = [...prev];
          n[target] = { ...targetItem, qty: total };
          n[source] = null;
          return n;
        });
      } else {
        setSlots(prev => {
          const n = [...prev];
          n[target] = { ...targetItem, qty: maxStack };
          n[source] = { ...sourceItem, qty: total - maxStack };
          return n;
        });
      }
    } else {
      // Разные предметы (или target пуст) — обычный обмен
      setSlots(prev => {
        const n = [...prev];
        n[source] = targetItem;
        n[target] = sourceItem;
        return n;
      });
    }
  }, [slots, getEquipItem, returnToInventory]);

  /**
   * moveOne — Minecraft-style «правый клик»: переместить только 1 штуку
   * из стека source в target (а не весь стек). Используется для разделения
   * стопки расходников (например, переложить 1 перчатку из 5 в новую ячейку).
   */
  const moveOne = useCallback((source, target) => {
    if (source === null || source === undefined || source === target) return;

    const isEquipSource = source === 'helmet' || source === 'gloves';
    const isEquipTarget = target === 'helmet' || target === 'gloves';
    const sourceItem = isEquipSource ? getEquipItem(source) : slots[source];
    if (!sourceItem) return;

    // Экипировочные слоты всегда содержат максимум 1 шт — для них
    // «взять одну» равносильно обычному moveItem.
    if (isEquipSource || isEquipTarget) {
      moveItem(source, target);
      return;
    }

    const targetItem = slots[target];
    const maxStack = getMaxStack(sourceItem.id);

    // Целевая ячейка пуста или содержит тот же предмет с местом в стопке
    if (!targetItem) {
      setSlots(prev => {
        const n = [...prev];
        const newSourceQty = sourceItem.qty - 1;
        n[source] = newSourceQty > 0 ? { ...sourceItem, qty: newSourceQty } : null;
        n[target] = withQty({ id: sourceItem.id, name: sourceItem.name }, 1);
        return n;
      });
      return;
    }

    if (targetItem.id === sourceItem.id && targetItem.qty < maxStack) {
      setSlots(prev => {
        const n = [...prev];
        const newSourceQty = sourceItem.qty - 1;
        n[source] = newSourceQty > 0 ? { ...sourceItem, qty: newSourceQty } : null;
        n[target] = { ...targetItem, qty: targetItem.qty + 1 };
        return n;
      });
      return;
    }
    // Иначе (другой предмет в target и стопка полна) — ничего не делаем
  }, [slots, getEquipItem, moveItem]);

  /**
   * handleSlotClick — режим "выделить → переместить" по левому клику (весь стек).
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
moveHalf — переносит ровно половину стака (округление в большую сторону).
Аналог «правого клика по стеку» в Minecraft, когда предмет уже «в руке» (выделен).
*/
const moveHalf = useCallback((source, target) => {
  if (source === null || source === undefined || source === target) return;
  const isEquipSource = source === 'helmet' || source === 'gloves';
  const isEquipTarget = target === 'helmet' || target === 'gloves';

  // В слотах экипировки максимум 1 шт, поэтому половина — это просто 1
  if (isEquipSource || isEquipTarget) {
    moveOne(source, target);
    return;
  }

  const sourceItem = slots[source];
  if (!sourceItem) return;

  const targetItem = slots[target];
  const maxStack = getMaxStack(sourceItem.id);
  const halfQty = Math.ceil(sourceItem.qty / 2);

  // Если целевая ячейка пуста
  if (!targetItem) {
    setSlots(prev => {
      const n = [...prev];
      const newSourceQty = sourceItem.qty - halfQty;
      n[source] = newSourceQty > 0 ? { ...sourceItem, qty: newSourceQty } : null;
      n[target] = withQty({ id: sourceItem.id, name: sourceItem.name }, halfQty);
      return n;
    });
    return;
  }

  // Если в целевой ячейке тот же предмет и есть место
  if (targetItem.id === sourceItem.id && targetItem.qty < maxStack) {
    setSlots(prev => {
      const n = [...prev];
      const canAdd = Math.min(halfQty, maxStack - targetItem.qty);
      const newSourceQty = sourceItem.qty - canAdd;
      n[source] = newSourceQty > 0 ? { ...sourceItem, qty: newSourceQty } : null;
      n[target] = { ...targetItem, qty: targetItem.qty + canAdd };
      return n;
    });
    return;
  }
  
  // Если ячейка занята другим предметом или переполнена — ничего не делаем
}, [slots, moveOne]);

/**
handleSlotRightClick — универсальный обработчик правого клика.
1. Если идет Drag-and-drop (зажали ЛКМ) -> переносит 1 штуку.
2. Если предмет просто выделен (кликнули ЛКМ) -> переносит половину стака.
3. Если ничего не выбрано -> выделяет слот.
*/
const handleSlotRightClick = useCallback((target) => {
  // Сценарий А: Тащим предмет (Drag) + ПКМ = перенос 1 штуки
  if (draggedSlot !== null) {
    if (draggedSlot !== target) {
      moveOne(draggedSlot, target);
    }
    setDraggedSlot(null); // Завершаем режим перетаскивания
    setSelectedSlot(null);
    return;
  }

  // Сценарий Б: Предмет выделен (ЛКМ) + ПКМ = перенос половины стака
  if (selectedSlot !== null) {
    if (selectedSlot === target) { 
      setSelectedSlot(null); 
      return; 
    }
    moveHalf(selectedSlot, target);
    
    // Снимаем выделение, если в источнике ничего не осталось
    const sourceStillHasItem = getSlotItem(selectedSlot);
    setSelectedSlot(sourceStillHasItem ? selectedSlot : null);
    return;
  }

  // Сценарий В: Ничего не выбрано — просто выделяем слот
  if (getSlotItem(target)) {
    setSelectedSlot(target);
  }
}, [draggedSlot, selectedSlot, getSlotItem, moveOne, moveHalf]);

  /**
   * Drag-and-drop — левая кнопка мыши тащит весь стек (как moveItem).
   * Если хотите тащить только 1 штуку — зажмите Alt при отпускании
   * (см. handleDrop ниже, e.altKey).
   */
  const handleDragStart = useCallback((source) => {
    if (!getSlotItem(source)) return;
    setDraggedSlot(source);
    setSelectedSlot(null);
  }, [getSlotItem]);

  const handleDrop = useCallback((target, isAltKey = false) => {
    if (draggedSlot === null) return;
    if (isAltKey) {
      moveOne(draggedSlot, target);
    } else {
      moveItem(draggedSlot, target);
    }
    setDraggedSlot(null);
  }, [draggedSlot, moveItem, moveOne]);

  const handleDragEnd = useCallback(() => {
    setDraggedSlot(null);
  }, []);

  /**
   * removeFromSlot — безопасно убрать предмет из конкретного инвентарного
   * слота (например, когда предмет "вынесли" из инвентаря в зону термосумки
   * на Stage4). Использует setSlots, поэтому React корректно увидит изменение
   * — в отличие от прямой мутации/splice массива slots.
   */
  const removeFromSlot = useCallback((slotIndex) => {
    if (typeof slotIndex !== 'number') return;
    setSlots(prev => {
      const next = [...prev];
      next[slotIndex] = null;
      return next;
    });
  }, []);

  /**
   * returnItemToSlot — положить предмет обратно в конкретный слот инвентаря
   * (например, когда предмет вынули из зоны термосумки обратно в рюкзак).
   * Если переданный slotIndex уже занят — кладём в первую свободную ячейку,
   * чтобы не потерять и не перезаписать то, что туда успело попасть.
   */
  const returnItemToSlot = useCallback((slotIndex, item) => {
    if (!item) return;
    setSlots(prev => {
      const next = [...prev];
      if (typeof slotIndex === 'number' && next[slotIndex] === null) {
        next[slotIndex] = item;
        return next;
      }
      const empty = next.findIndex(s => s === null);
      if (empty !== -1) next[empty] = item;
      return next;
    });
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
  }, [buildInitialSlots]);

  // ── Управление активной ячейкой hotbar (клавиатура ←/→ или клик) ──
  const moveHotbarActive = useCallback((direction) => {
    setHotbarActive(a => (a + direction + 9) % 9);
    setIsHoldingActive(true);
  }, []);

  // ── Горячие клавиши: Tab открывают-закрывают, Esc закрывает, ←→ листают hotbar ──
  useEffect(() => {
    const onKey = (e) => {
      const key = e.key.toLowerCase();
      if (key === 'tab') { e.preventDefault(); toggleInventory(); return; }
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

  /**
   * degradeItem — заменить N штук предмета с одним id на предмет с другим id
   * (например, после использования стерильных перчаток на Шаге 2.4 —
   * первая пара становится «использованными перчатками»). Уменьшает qty
   * исходного предмета и добавляет такое же количество нового через
   * returnToInventory (что также сработает со стекингом).
   *
   * Если исходный предмет экипирован (sterile/yellow в gloves) — снимает
   * экипировку и заменяет на использованные перчатки в инвентаре.
   */
  const degradeItem = useCallback((fromId, toId, qty = 1) => {
    // Сначала проверяем — не надеты ли именно эти перчатки сейчас
    if (fromId === 'sterile_gloves' && equippedGloves === 'sterile') {
      setEquippedGloves(null);
      returnToInventory(withQty({ id: toId }, qty));
      return;
    }
    if (fromId === 'regular_gloves' && equippedGloves === 'yellow') {
      setEquippedGloves(null);
      returnToInventory(withQty({ id: toId }, qty));
      return;
    }

    setSlots(prev => {
      const next = [...prev];
      let remaining = qty;
      for (let i = 0; i < next.length && remaining > 0; i++) {
        if (next[i] && next[i].id === fromId) {
          const take = Math.min(remaining, next[i].qty);
          next[i] = next[i].qty - take > 0 ? { ...next[i], qty: next[i].qty - take } : null;
          remaining -= take;
        }
      }
      return next;
    });
    if (qty > 0) returnToInventory(withQty({ id: toId }, qty));
  }, [equippedGloves, returnToInventory]);

  /**
   * addItem — публичный метод для добавления одного предмета в инвентарь
   */
  const addItem = useCallback((item) => {
    if (!item) return;
    
    const maxStack = getMaxStack(item.id);
    let remaining = item.qty || 1;
    
    setSlots(prev => {
      const next = [...prev];
      
      // 1. Сначала пытаемся добавить в существующие стопки
      for (let i = 0; i < next.length && remaining > 0; i++) {
        if (next[i] && next[i].id === item.id && next[i].qty < maxStack) {
          const canAdd = Math.min(remaining, maxStack - next[i].qty);
          next[i] = { ...next[i], qty: next[i].qty + canAdd };
          remaining -= canAdd;
        }
      }
      
      // 2. Остаток кладем в пустые слоты
      while (remaining > 0) {
        const emptyIdx = next.findIndex(s => s === null);
        if (emptyIdx === -1) {
          console.warn('Инвентарь полон! Некоторые предметы не добавлены.');
          break;
        }
        const qtyForSlot = Math.min(remaining, maxStack);
        next[emptyIdx] = withQty({ id: item.id, name: item.name }, qtyForSlot);
        remaining -= qtyForSlot;
      }
      
      return next;
    });
  }, []);

  /**
   * addMultipleItems — публичный метод для добавления нескольких предметов
   * за один раз. Это гарантирует, что предметы не перезапишут друг друга.
   */
  const addMultipleItems = useCallback((items) => {
    if (!items || items.length === 0) return;
    
    setSlots(prev => {
      const next = [...prev];
      
      // Обрабатываем каждый предмет
      items.forEach(item => {
        const maxStack = getMaxStack(item.id);
        let remaining = item.qty || 1;
        
        // 1. Сначала ищем существующие стопки
        for (let i = 0; i < next.length && remaining > 0; i++) {
          if (next[i] && next[i].id === item.id && next[i].qty < maxStack) {
            const canAdd = Math.min(remaining, maxStack - next[i].qty);
            next[i] = { ...next[i], qty: next[i].qty + canAdd };
            remaining -= canAdd;
          }
        }
        
        // 2. Остаток в пустые слоты
        while (remaining > 0) {
          const emptyIdx = next.findIndex(s => s === null);
          if (emptyIdx === -1) {
            console.warn(`Инвентарь полон! Не добавлено ${remaining} шт. ${item.name}`);
            break;
          }
          const qtyForSlot = Math.min(remaining, maxStack);
          next[emptyIdx] = withQty({ id: item.id, name: item.name }, qtyForSlot);
          remaining -= qtyForSlot;
        }
      });
      
      return next;
    });
  }, []);

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
    // действия — клик (левый = весь стек, правый = по одной штуке)
    handleSlotClick,
    handleSlotRightClick,
    // действия — drag and drop
    handleDragStart,
    handleDrop,
    handleDragEnd,
    // точечные операции со слотами (используются на Stage4 для зон термосумки)
    removeFromSlot,
    returnItemToSlot,
    // утилита для других шагов: заменить N штук предмета на другой id
    degradeItem,
    // добавление предметов
    addItem,
    addMultipleItems,
    // hotbar / модалка
    setHotbarActive: selectHotbarSlot,
    moveHotbarActive,
    openInventory,
    closeInventory,
    toggleInventory,
    resetInventory,
  };
}