// steps/Stage1/Step3_FieldKit.jsx
'use client';
import React, { useState, useRef, useEffect } from 'react';
import { CABINET_ITEMS, FREEZER_ITEMS } from '../../data/constants';
import { getMaxStack } from '../../components/inventory/itemRegistry';
import { GasBurnerIcon } from '../../components/inventory/icons/GasBurnerIcon';
import { WipeIcon } from '../../components/inventory/icons/WipeIcon';

// Объединяем все предметы склада в единую поисковую базу
const SEARCH_DATABASE = [...CABINET_ITEMS, ...FREEZER_ITEMS];

const CATEGORY_ICON = {
  disinfection: <WipeIcon size={20} />,
  burner: <GasBurnerIcon size={20} />,
  safety: '🧤',
  safety_goggles: '👓',
  marking: '✏️',
  transport: '❄️',
  tools: '🔧'
};

// Расходники, для которых студенту разумно взять больше 1 шт (но не слишком много).
// Порог "нормы" — если взято больше этого числа, отчёт отметит избыточный запас.
const REASONABLE_QTY = {
  ethyl_wipes: 3,
  isop_wipes: 3,
  antibact_wipes: 3,
  sterile_gloves: 3, // нужно минимум 2 пары: подготовка крана + смена на бактериологии
  regular_gloves: 2,
};

export default function Step3_FieldKit({ savedData, onUpdate, onComplete }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [packedItems, setPackedItems] = useState(savedData.kitResults || []);
  const [validationWarning, setValidationWarning] = useState("");

  const REQUIRED_FREEZER_TEMP = -24;
  const [freezerTemp, setFreezerTemp] = useState(-2);

  useEffect(() => {
    if (typeof onUpdate === 'function') {
      onUpdate({ kitResults: packedItems });
    }
  }, [packedItems, onUpdate]);

  const [hoveredItem, setHoveredItem] = useState(null);
  const hoverTimeout = useRef(null);

  const getSearchResults = () => {
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery.length <= 3) return [];
    const query = trimmedQuery.toLowerCase();
    return SEARCH_DATABASE.filter(item =>
      item.name.toLowerCase().includes(query) ||
      item.desc.toLowerCase().includes(query)
    );
  };

  const searchResults = getSearchResults();

  /**
   * Положить предмет в сумку. Расходники (maxStack > 1) можно класть
   * повторно — увеличивается qty, вплоть до maxStack. Уникальные предметы
   * (maxStack === 1, например горелка) кладутся один раз, повторный клик
   * по уже уложенному просто не делает ничего нового (без ошибки).
   */
  const handlePack = (item) => {
  const maxStack = getMaxStack(item.id);
  const existingIndex = packedItems.findIndex(i => i.id === item.id);

  if (existingIndex === -1) {
    // Предмета ещё нет в сумке — кладём первую единицу
    const newItem = { ...item, qty: 1 };
    
    // 🟢 Сохраняем температуру морозилки, если это хладоэлемент
    if (item.category === 'transport') {
      newItem.packedAtTemp = freezerTemp;
    }
    
    const newItems = [...packedItems, newItem];
    setPackedItems(newItems);
    setValidationWarning("");
    return;
  }

  // Предмет уже есть — пытаемся добавить ещё одну штуку (если maxStack позволяет)
  const current = packedItems[existingIndex];
  if (current.qty >= maxStack) {
    setValidationWarning(`Достигнут предел: больше ${maxStack} шт. этого предмета в сумку не положить.`);
    return;
  }
  
  const newItems = packedItems.map((i, idx) => idx === existingIndex ? { ...i, qty: i.qty + 1 } : i);
  setPackedItems(newItems);
  setValidationWarning("");
};

  // Убрать ровно 1 штуку (а не весь стек) — удобно, если случайно перебрал
  const handleUnpackOne = (itemId) => {
    setPackedItems(prev => {
      const next = prev
        .map(i => i.id === itemId ? { ...i, qty: i.qty - 1 } : i)
        .filter(i => i.qty > 0);
      return next;
    });
  };

  const handleUnpack = (itemId) => {
    const newItems = packedItems.filter(i => i.id !== itemId);
    setPackedItems(newItems);
  };

  const handleRowClick = (item) => {
    handlePack(item);
  };

  const handleContextMenu = (e, item) => {
    e.preventDefault(); // Отключаем стандартное контекстное меню браузера
    const isPacked = packedItems.some(i => i.id === item.id);
    
    // Если предмет уже есть в сумке, убавляем его количество на 1
    if (isPacked) {
      handleUnpackOne(item.id);
    }
  };

  const handleMouseEnter = (item, e) => {
    clearTimeout(hoverTimeout.current);
    const rect = e.currentTarget.getBoundingClientRect();
    setHoveredItem({ item, rect });
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setHoveredItem(null), 80);
  };

  const handleCompleteKit = () => {
    if (packedItems.length === 0) {
      setValidationWarning("Ваша сумка пуста! Соберите необходимый инвентарь перед выездом.");
      return;
    }
    setValidationWarning("");

    let score = 100;
    let errors = [];
    const packedCategories = packedItems.map(i => i.category);

    if (!packedCategories.includes('disinfection')) { errors.push("Критическая ошибка: Вы забыли взять спиртовые салфетки для дезинфекции крана!"); score -= 20; }
    if (!packedCategories.includes('burner'))       { errors.push("Критическая ошибка: Вы забыли инструменты для прокаливания крана (горелку)!"); score -= 20; }
    if (!packedCategories.includes('safety'))       { errors.push("Критическая ошибка: Вы забыли взять стерильные перчатки!"); score -= 20; }
    if (!packedCategories.includes('safety_goggles')) { errors.push("Нарушение ТБ: Вы оставили в лаборатории защитные очки при работе с горелкой."); score -= 10; }
    if (!packedCategories.includes('marking'))      { errors.push("Ошибка маркировки: Вы не взяли пишущий инструмент для подписи флаконов."); score -= 10; }
    if (!packedCategories.includes('transport'))    { errors.push("Критическая ошибка: Вы забыли сумку-холодильник с хладоэлементами!"); score -= 20; }
    if (!packedCategories.includes('tools')) {
      errors.push("Критическая ошибка: Вы забыли взять инструмент для демонтажа сеточки-аэратора с водопроводного крана.");
      score -= 15;
    }

    packedItems.forEach(item => {
      if (item.category === 'transport') {
        if (!item.isCorrect) { errors.push(item.error); score -= 15; }
        if (item.packedAtTemp > REQUIRED_FREEZER_TEMP) {
          errors.push(`Температурный режим: Вы уложили хладоэлементы из камеры при ${item.packedAtTemp}°C (требуется ${REQUIRED_FREEZER_TEMP}°C и ниже, режим «Суперзаморозка», 12–24+ ч). Элементы быстро растаяли, пробы нагрелись.`);
          score -= 20;
        }
      } else if (!item.isCorrect) {
        errors.push(item.error);
        score -= 15;
      }

      // Мягкая проверка на избыточный запас расходников — не критично,
      // но отражает нерациональный расход материалов лаборатории.
      const reasonableQty = REASONABLE_QTY[item.id];
      if (reasonableQty && item.qty > reasonableQty) {
        errors.push(`Нерациональный расход: вы взяли ${item.qty} шт. «${item.name}», хотя по протоколу обычно достаточно ${reasonableQty}. Избыточный запас расходников — лишняя нагрузка на бюджет лаборатории.`);
        score -= 5;
      }
    });

    onComplete({ kitResults: packedItems, kitErrors: errors, kitScore: Math.max(0, score) });
  };

  return (
    <div className="bg-white w-full max-w-6xl rounded-b-xl rounded-tr-xl shadow-xl border border-slate-200 overflow-hidden mb-6 flex flex-col lg:flex-row relative">

      {hoveredItem && (
        <ItemTooltip
          item={hoveredItem.item}
          rect={hoveredItem.rect}
          freezerTemp={freezerTemp}
          setFreezerTemp={setFreezerTemp}
          requiredTemp={REQUIRED_FREEZER_TEMP}
          onMouseEnter={() => clearTimeout(hoverTimeout.current)}
          onMouseLeave={handleMouseLeave}
        />
      )}

      {/* ЛЕВАЯ ЧАСТЬ: ПОИСК */}
      <div className="w-full lg:w-1/2 p-8 border-r border-slate-100 bg-slate-50 flex flex-col gap-6">

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Поиск на складе лаборатории</h2>
            <p className="text-slate-500 text-xs mt-1">
              Наведите курсор, чтобы увидеть описание. Клик — положить в сумку (повторный клик добавит ещё одну штуку, если предмет можно взять в нескольких экземплярах).
            </p>
          </div>

          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">🔍</span>
            <input
              type="text"
              placeholder="Начните вводить название..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all text-black"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>

          <div className="mt-2 max-h-[420px] overflow-y-auto border-t border-slate-100 pt-2 empty:hidden">
            {searchQuery && searchResults.length === 0 && (
              <p className="text-sm text-slate-400 italic text-center py-4">
                Ничего не найдено. Нужно минимум 4 символа. Попробуйте другой запрос.
              </p>
            )}

            {searchResults.map(item => {
              const packedEntry = packedItems.find(i => i.id === item.id);
              const isPacked = !!packedEntry;
              const maxStack = getMaxStack(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => handleRowClick(item)}
                  onContextMenu={(e) => handleContextMenu(e, item)} 
                  onMouseEnter={(e) => handleMouseEnter(item, e)}
                  onMouseLeave={handleMouseLeave}
                  className={`w-full text-left p-3 rounded-lg border mb-1.5 flex items-center justify-between text-sm transition-all
                    ${isPacked ? 'border-emerald-300 bg-emerald-50 font-bold' : 'border-slate-100 bg-slate-50 hover:bg-blue-50 hover:border-blue-300'}`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <span className="text-lg">{CATEGORY_ICON[item.category]}</span>
                    <span className="font-semibold text-slate-700 truncate">{item.name}</span>
                  </div>
                  {isPacked ? (
                    <span className="text-[9px] font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full shrink-0">
                      В сумке {maxStack > 1 ? `×${packedEntry.qty}` : '✓'}
                    </span>
                  ) : (
                    <span className="text-[9px] font-bold text-blue-500 px-2 py-0.5 rounded-full shrink-0 opacity-0 group-hover:opacity-100">
                      Клик → в сумку
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* ПРАВАЯ ЧАСТЬ: СУМКА */}
      <div className="w-full lg:w-1/2 p-8 bg-slate-50 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2 flex justify-between items-center">
            <span>👜 Сумка-укладчик</span>
            <span className="bg-blue-600 text-white text-xs px-2.5 py-1 rounded-full font-bold">
              {packedItems.reduce((sum, i) => sum + (i.qty || 1), 0)}
            </span>
          </h2>

          <div className="space-y-2 max-h-[460px] overflow-y-auto">
            {packedItems.length === 0 ? (
              <div className="text-center text-slate-400 text-sm p-8 border-2 border-dashed border-slate-200 rounded-xl bg-white">
                Сумка пуста. Найдите и кликните на предметы слева.
              </div>
            ) : (
              packedItems.map(item => {
                const maxStack = getMaxStack(item.id);
                return (
                  <div key={item.id}
                    onMouseEnter={(e) => handleMouseEnter(item, e)}
                    onMouseLeave={handleMouseLeave}
                    className="bg-white p-3 rounded-lg border border-slate-200 text-xs flex justify-between items-center shadow-sm hover:border-blue-300 transition-all cursor-default">
                    <span className="flex items-center gap-2 font-semibold text-slate-700 truncate pr-2">
                      <span className="text-base">{CATEGORY_ICON[item.category]}</span>
                      {item.name}
                      {maxStack > 1 && (
                        <span className="text-[9px] font-mono bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-bold">
                          ×{item.qty}
                        </span>
                      )}
                      {item.category === 'transport' && (
                        <span className="text-[9px] font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">
                          {item.packedAtTemp}°C
                        </span>
                      )}
                    </span>
                    <div className="flex items-center gap-1 shrink-0">
                      {maxStack > 1 && item.qty > 1 && (
                        <button onClick={() => handleUnpackOne(item.id)}
                          title="Убрать одну штуку"
                          className="text-slate-400 hover:text-slate-600 text-sm w-5 h-5 flex items-center justify-center rounded hover:bg-slate-100">
                          −
                        </button>
                      )}
                      <button onClick={() => handleUnpack(item.id)} title="Убрать всё"
                        className="text-red-400 hover:text-red-600 text-base">✖</button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        <div className="mt-8">
          {validationWarning && <p className="text-red-500 text-xs font-bold mb-2 text-center bg-red-50 p-2 rounded">{validationWarning}</p>}
          <button
            onClick={handleCompleteKit}
            className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-4 rounded-xl shadow-md transition-all transform hover:-translate-y-1"
          >
            Подтвердить укладку →
          </button>
        </div>
      </div>

    </div>
  );
}

function ItemTooltip({ item, rect, freezerTemp, setFreezerTemp, requiredTemp, onMouseEnter, onMouseLeave }) {
  if (!rect) return null;

  const isTransport = item.category === 'transport';
  const tooltipWidth = isTransport ? 320 : 280;

  const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
  const spaceOnRight = viewportWidth - rect.right;
  const placeLeft = spaceOnRight < tooltipWidth + 24;

  const style = {
    position: 'fixed',
    top: Math.max(12, rect.top + rect.height / 2 - 90),
    left: placeLeft ? Math.max(12, rect.left - tooltipWidth - 12) : rect.right + 12,
    width: tooltipWidth,
    zIndex: 60,
  };

  return (
    <div
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="rounded-xl border border-slate-200 bg-white shadow-2xl p-4 animate-fade-in pointer-events-auto"
    >
      <div className="flex items-start gap-2 mb-2">
        <span className="text-xl shrink-0">{CATEGORY_ICON[item.category]}</span>
        <h4 className="font-bold text-slate-800 text-sm leading-snug">{item.name}</h4>
      </div>
      <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>

      {isTransport && (
        <div className="mt-3 pt-3 border-t border-slate-100">
          <div className="bg-slate-900 rounded-xl p-4 border-2 border-slate-800 text-white">
            <div className="flex items-center mb-2">
              <p className="text-slate-400 text-[10px] font-mono">МЕДИЦИНСКИЙ МОРОЗИЛЬНИК</p>
            </div>
            <p className="text-3xl font-mono font-bold tracking-wider text-slate-100 mb-2">
              {freezerTemp}°C
            </p>
            <input
              type="range" min="-30" max="0" step="1"
              value={freezerTemp}
              onChange={(e) => setFreezerTemp(parseInt(e.target.value))}
              className="w-full cursor-pointer accent-blue-500"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="flex justify-between text-[8px] text-slate-500 mt-1 font-mono">
              <span>-30°C</span><span>0°C</span>
            </div>
          </div>
          <p className="text-[10px] text-slate-500 leading-relaxed mt-2">
            Требуется <b>12–24+ часов</b> охлаждения.
          </p>
        </div>
      )}
    </div>
  );
}
