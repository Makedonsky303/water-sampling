// components/inventory/itemRegistry.js
// ── Единственный источник правды по иконкам/лейблам/слотам/стекам предметов ──
// Если предмет нужно добавить в инвентарь — добавляйте его сюда, и только сюда.
//
// maxStack — сколько штук одного предмета может лежать в одной ячейке
// (как в Minecraft). По умолчанию (если не указано) — 1, то есть предмет
// уникален и не стекуется (горелка, очки, ключи и т.п.).

import { GasBurnerIcon } from './icons/GasBurnerIcon';
import { WipeIcon } from './icons/WipeIcon';

export const ICON_MAP = {
  ethyl_wipes:         { Icon: WipeIcon, label: 'Салфетки этиловые',                       slot: null, maxStack: 10 },
  isop_wipes:          { Icon: WipeIcon, label: 'Салфетки изопропиловые',                   slot: null, maxStack: 10 },
  antibact_wipes:      { Icon: WipeIcon, label: 'Салфетки гигиенические',                   slot: null, maxStack: 10 },
  gas_burner:          { Icon: GasBurnerIcon, label: 'Портативная горелка',                  slot: null, maxStack: 1 },
  lighter_only:        { icon: '🪔', label: 'Бытовая зажигалка',                        slot: null, maxStack: 1 },
  sterile_gloves:      { icon: '🧤', label: 'Перчатки стерильные',  slot: 'gloves', value: 'sterile', bg: 'bg-emerald-50', border: 'border-emerald-300', maxStack: 10 },
  regular_gloves:      { icon: '🫳', label: 'Перчатки хозяйственные', slot: 'gloves', value: 'yellow', bg: 'bg-amber-50',   border: 'border-amber-300',   maxStack: 10 },
  used_gloves:         { icon: '🗑️', label: 'Использованные перчатки', slot: null, bg: 'bg-slate-100', border: 'border-slate-300', maxStack: 10 },
  waterproof_marker:   { icon: '🖊️', label: 'Маркер перманентный',                      slot: null, maxStack: 1 },
  regular_pencil:      { icon: '✏️', label: 'Карандаш графитовый',                      slot: null, maxStack: 1 },
  safety_goggles:      { icon: '🥽', label: 'Очки защитные',         slot: 'helmet',                  bg: 'bg-blue-50',    border: 'border-blue-300',    maxStack: 1 },
  aerator_key_special: { icon: '🔧', label: 'Специальный ключ для скрытых аэраторов',   slot: null, maxStack: 1 },
  adjustable_wrench:   { icon: '🔧', label: 'Разводной шведский ключ',                  slot: null, maxStack: 1 },
  pliers:              { icon: '🔧', label: 'Пассатижи монтажные (плоскогубцы)',        slot: null, maxStack: 1 },
  ice_eutectic:        { icon: '🧊', label: 'Эвтектический хладоэлемент',               slot: null, maxStack: 10 },
  ice_gel:             { icon: '🫙', label: 'Гелевый хладоэлемент',                     slot: null, maxStack: 10 },
  ice_silicone:        { icon: '💧', label: 'Силиконовый хладоэлемент',                 slot: null, maxStack: 10 },
  // тара для химии/бактериологии — динамические id, обрабатываются через префикс в getItemDef()
};

const DEFAULT_MAX_STACK = 1;
const TARE_MAX_STACK = 10;

/**
 * Получить визуальные данные предмета (иконка, лейбл, слот экипировки, maxStack).
 * Поддерживает динамические id тары (chem_tare_*, bio_tare_*), которые
 * генерируются на лету при сборке инвентаря из логов.
 */
export function getItemDef(item) {
  if (!item) return null;
  if (ICON_MAP[item.id]) {
    const def = ICON_MAP[item.id];
    return { maxStack: DEFAULT_MAX_STACK, ...def };
  }
  if (item.id?.startsWith('chem_tare_')) {
    return { icon: '🧪', label: item.name, slot: null, bg: 'bg-blue-50', border: 'border-blue-200', maxStack: TARE_MAX_STACK };
  }
  if (item.id?.startsWith('bio_tare_')) {
    return { icon: '🧫', label: item.name, slot: null, bg: 'bg-cyan-50', border: 'border-cyan-200', maxStack: TARE_MAX_STACK };
  }
  return { icon: '📦', label: item.name || item.id, slot: null, maxStack: DEFAULT_MAX_STACK };
}

/** Сколько максимум предметов с данным id можно сложить в одну ячейку. */
export function getMaxStack(id) {
  return getItemDef({ id })?.maxStack ?? DEFAULT_MAX_STACK;
}

/**
 * Удобный рендерер иконки предмета.
 * Принимает либо сырой item {id}, либо уже полученный getItemDef() результат.
 */
export function renderItemIcon(itemOrDef, size = 20) {
  let def = itemOrDef;
  if (itemOrDef && itemOrDef.id && !itemOrDef.Icon && !itemOrDef.icon) {
    def = getItemDef(itemOrDef);
  }
  if (!def) return null;

  const isGasBurner = !!(def.label && def.label.toLowerCase().includes('горелка'));
  const isWipe = !!(def.label && def.label.toLowerCase().includes('салфетк'));
  let effectiveSize = size;
  if (isGasBurner) effectiveSize = size * 1.8;
  else if (isWipe) effectiveSize = size * 1.5;

  if (def.Icon) {
    const IconComp = def.Icon;
    const extra = isGasBurner ? { inventory: true } : {};
    return <IconComp size={effectiveSize} {...extra} />;
  }
  return def.icon || '📦';
}
