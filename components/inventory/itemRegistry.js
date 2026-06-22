// components/inventory/itemRegistry.js
// ── Единственный источник правды по иконкам/лейблам/слотам предметов ────────
// Если предмет нужно добавить в инвентарь — добавляйте его сюда, и только сюда.

export const ICON_MAP = {
  ethyl_wipes:         { icon: '🧼', label: 'Салфетки этиловые',                       slot: null },
  isop_wipes:          { icon: '🧴', label: 'Салфетки изопропиловые',                   slot: null },
  antibact_wipes:      { icon: '🪥', label: 'Салфетки гигиенические',                   slot: null },
  gas_burner:          { icon: '🔥', label: 'Портативная горелка',                      slot: null },
  lighter_only:        { icon: '🪔', label: 'Бытовая зажигалка',                        slot: null },
  sterile_gloves:      { icon: '🧤', label: 'Перчатки стерильные',  slot: 'gloves', value: 'sterile', bg: 'bg-emerald-50', border: 'border-emerald-300' },
  regular_gloves:      { icon: '🫳', label: 'Перчатки хозяйственные', slot: 'gloves', value: 'yellow', bg: 'bg-amber-50',   border: 'border-amber-300'   },
  waterproof_marker:   { icon: '🖊️', label: 'Маркер перманентный',                      slot: null },
  regular_pencil:      { icon: '✏️', label: 'Карандаш графитовый',                      slot: null },
  safety_goggles:      { icon: '🥽', label: 'Очки защитные',         slot: 'helmet',                  bg: 'bg-blue-50',    border: 'border-blue-300'    },
  aerator_key_special: { icon: '🔧', label: 'Специальный ключ для скрытых аэраторов',   slot: null },
  adjustable_wrench:   { icon: '🔧', label: 'Разводной шведский ключ',                  slot: null },
  pliers:              { icon: '🔧', label: 'Пассатижи монтажные (плоскогубцы)',        slot: null },
  ice_eutectic:        { icon: '🧊', label: 'Эвтектический хладоэлемент',               slot: null },
  ice_gel:             { icon: '🫙', label: 'Гелевый хладоэлемент',                     slot: null },
  ice_silicone:        { icon: '💧', label: 'Силиконовый хладоэлемент',                 slot: null },
  // тара для химии/бактериологии — динамические id, обрабатываются через префикс в getItemDef()
};

/**
 * Получить визуальные данные предмета (иконка, лейбл, слот экипировки).
 * Поддерживает динамические id тары (chem_tare_*, bio_tare_*), которые
 * генерируются на лету в Step1_SitePrep при сборке инвентаря из логов.
 */
export function getItemDef(item) {
  if (!item) return null;
  if (ICON_MAP[item.id]) return ICON_MAP[item.id];
  if (item.id?.startsWith('chem_tare_')) {
    return { icon: '🧪', label: item.name, slot: null, bg: 'bg-blue-50', border: 'border-blue-200' };
  }
  if (item.id?.startsWith('bio_tare_')) {
    return { icon: '🧫', label: item.name, slot: null, bg: 'bg-cyan-50', border: 'border-cyan-200' };
  }
  return { icon: '📦', label: item.name || item.id, slot: null };
}
