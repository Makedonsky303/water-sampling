// src/steps/Stage1/Step3_FieldKit.jsx
'use client';
import React, { useState } from 'react';
import { CABINET_ITEMS, FREEZER_ITEMS } from '../../data/constants';

// Объединяем все предметы склада в единую поисковую базу
const SEARCH_DATABASE = [...CABINET_ITEMS, ...FREEZER_ITEMS];

export default function Step3_FieldKit({ onComplete }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [packedItems, setPackedItems] = useState([]);
  const [inspectedItem, setInspectedItem] = useState(null);
  const [validationWarning, setValidationWarning] = useState("");

  // Состояние морозильной камеры
  const [freezerTemp, setFreezerTemp] = useState(-2); // Исходная температура -2°C

  // Динамическая фильтрация базы данных по поисковому запросу
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

  const handlePack = (item) => {
    // Если упаковываем хладоэлемент, фиксируем температуру морозилки на момент укладки
    if (item.category === 'transport') {
      const existingTransport = packedItems.find(i => i.category === 'transport');
      if (existingTransport) {
        setValidationWarning("В сумке уже есть хладоэлемент! Выложите старый перед заменой.");
        return;
      }
      setPackedItems([...packedItems, { ...item, packedAtTemp: freezerTemp }]);
    } else {
      if (!packedItems.some(i => i.id === item.id)) {
        setPackedItems([...packedItems, item]);
      }
    }
    setValidationWarning("");
    setSearchQuery(""); // Очищаем поиск после укладки для удобства
  };

  const handleUnpack = (itemId) => {
    setPackedItems(packedItems.filter(i => i.id !== itemId));
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
    
    // 1. Проверяем наличие всех обязательных категорий
    if (!packedCategories.includes('disinfection')) {
      errors.push("Критическая ошибка: Вы забыли взять спиртовые салфетки для дезинфекции крана!");
      score -= 20;
    }
    if (!packedCategories.includes('burner')) {
      errors.push("Критическая ошибка: Вы забыли инструменты для прокаливания крана (горелку)!");
      score -= 20;
    }
    if (!packedCategories.includes('safety')) {
      errors.push("Критическая ошибка: Вы забыли взять стерильные перчатки!");
      score -= 20;
    }
    if (!packedCategories.includes('safety_goggles')) {
      errors.push("Нарушение ТБ: Вы оставили в лаборатории защитные очки при работе с горелкой.");
      score -= 10;
    }
    if (!packedCategories.includes('marking')) {
      errors.push("Ошибка маркировки: Вы не взяли пишущий инструмент для подписи флаконов.");
      score -= 10;
    }
    if (!packedCategories.includes('transport')) {
      errors.push("Критическая ошибка: Вы забыли сумку-холодильник с хладоэлементами!");
      score -= 20;
    }

    // 2. Проверяем ошибки каждого уложенного предмета
    packedItems.forEach(item => {
      if (item.category === 'transport') {
        if (!item.isCorrect) {
          errors.push(item.error);
          score -= 15;
        }
        if (item.packedAtTemp > -20) {
          errors.push(`Температурный режим: Вы уложили хладоэлементы, замороженные только до ${item.packedAtTemp}°C (требуется глубокая заморозка до -20°C). Элементы быстро растаяли, пробы нагрелись.`);
          score -= 20;
        }
      } else {
        if (!item.isCorrect) {
          errors.push(item.error);
          score -= 15;
        }
      }
    });

    onComplete({
        kitResults: packedItems.map(i => ({ id: i.id, name: i.name, isPerfect: i.isCorrect, err: i.error })),
        kitErrors: errors,
        kitScore: Math.max(0, score)
    });
  };

  return (
    <div className="bg-white w-full max-w-6xl rounded-b-xl rounded-tr-xl shadow-xl border border-slate-200 overflow-hidden mb-6 flex flex-col lg:flex-row">
      
      {/* ЛЕВАЯ ЧАСТЬ: ПОИСК И НАСТРОЙКА МОРОЗИЛКИ */}
      <div className="w-full lg:w-1/2 p-8 border-r border-slate-100 bg-slate-50 flex flex-col gap-6">
        
        {/* Поисковый блок без подсказок */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Поиск на складе лаборатории</h2>
            <p className="text-slate-500 text-xs mt-1">Введите название прибора или расходного материала для укладки.</p>
          </div>

          {/* Строка поиска */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">🔍</span>
            <input 
              type="text"
              placeholder="Начните вводить название..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all"
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

          {/* Результаты поиска */}
          <div className="mt-2 max-h-[280px] overflow-y-auto border-t border-slate-100 pt-2 empty:hidden">
            {searchQuery && searchResults.length === 0 && (
              <p className="text-sm text-slate-400 italic text-center py-4">Ничего не найдено. Попробуйте другой запрос.</p>
            )}
            
            {searchResults.map(item => {
              const isPacked = packedItems.some(i => i.id === item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => { setInspectedItem(item); setValidationWarning(""); }}
                  className={`w-full text-left p-3 rounded-lg border mb-1.5 flex items-center justify-between text-sm transition-all
                    ${inspectedItem?.id === item.id ? 'border-blue-500 bg-blue-50/30 font-bold' : 'border-slate-100 bg-slate-50 hover:bg-slate-100'}
                    ${isPacked ? 'opacity-70 font-normal' : ''}`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <span className="text-lg">
                      {item.category === 'disinfection' && '🧼'}
                      {item.category === 'burner' && '🔥'}
                      {item.category === 'safety' && '🧤'}
                      {item.category === 'safety_goggles' && '👓'}
                      {item.category === 'marking' && '✏️'}
                      {item.category === 'transport' && '❄️'}
                    </span>
                    <span className="font-semibold text-slate-700 truncate">{item.name}</span>
                  </div>
                  {isPacked && (
                    <span className="text-[9px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full shrink-0">
                      Уложено
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Настройка морозильной камеры */}
        <div className="bg-slate-900 rounded-xl p-5 border-2 border-slate-800 text-white flex items-center justify-between shadow-md">
          <div className="w-1/2">
            <p className="text-slate-400 text-xs font-mono mb-1">МЕДИЦИНСКИЙ МОРОЗИЛЬНИК</p>
            <p className="text-4xl font-mono font-bold tracking-wider text-slate-100">
              {freezerTemp}°C
            </p>
            <p className="text-[9px] text-slate-400 font-mono mt-1 leading-tight">
              * Замораживание хладоэлементов перед выездом
            </p>
          </div>
          <div className="w-1/2 flex flex-col pl-4 border-l border-slate-800">
            <label className="text-[10px] text-slate-400 font-mono mb-2">РЕГУЛЯТОР ТЕМПЕРАТУРЫ</label>
            <input 
              type="range" min="-25" max="0" step="1" 
              value={freezerTemp} 
              onChange={(e) => setFreezerTemp(parseInt(e.target.value))}
              className="w-full cursor-pointer accent-blue-500"
            />
            <div className="flex justify-between text-[8px] text-slate-500 mt-1 font-mono">
              <span>-25°C</span><span>0°C</span>
            </div>
          </div>
        </div>

      </div>

      {/* ЦЕНТР: ОСМОТР */}
      <div className="w-full lg:w-1/4 p-8 border-r border-slate-100 bg-white flex flex-col">
        <h2 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2">🔍 Свойства предмета</h2>
        
        {!inspectedItem ? (
          <div className="flex-1 flex flex-col items-center justify-center text-slate-400 opacity-60">
            <span className="text-5xl mb-4">🎒</span>
            <p className="text-center text-sm">Найдите предмет на складе слева и выберите его для осмотра.</p>
          </div>
        ) : (
          <div className="flex-1 flex flex-col justify-between animate-fade-in">
            <div>
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-sm">
                {inspectedItem.category === 'disinfection' && '🧼'}
                {inspectedItem.category === 'burner' && '🔥'}
                {inspectedItem.category === 'safety' && '🧤'}
                {inspectedItem.category === 'safety_goggles' && '👓'}
                {inspectedItem.category === 'marking' && '✏️'}
                {inspectedItem.category === 'transport' && '❄️'}
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-2">{inspectedItem.name}</h3>
              <p className="text-slate-600 text-sm leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                {inspectedItem.desc}
              </p>
              
              {inspectedItem.category === 'transport' && packedItems.some(i => i.id === inspectedItem.id) && (
                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200 text-xs text-blue-800 font-semibold">
                  Элемент уложен при температуре: {packedItems.find(i => i.id === inspectedItem.id).packedAtTemp}°C
                </div>
              )}
            </div>

            <div className="mt-6">
              {packedItems.some(i => i.id === inspectedItem.id) ? (
                <button 
                  onClick={() => handleUnpack(inspectedItem.id)}
                  className="w-full bg-red-100 hover:bg-red-200 text-red-700 font-bold py-3 rounded-xl transition-all"
                >
                  Выложить из сумки
                </button>
              ) : (
                <button 
                  onClick={() => handlePack(inspectedItem)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all shadow-md"
                >
                  Положить в сумку
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* ПРАВАЯ ЧАСТЬ: СУМКА */}
      <div className="w-full lg:w-1/4 p-8 bg-slate-50 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2 flex justify-between items-center">
            <span>👜 Сумка-укладчик</span>
            <span className="bg-blue-600 text-white text-xs px-2.5 py-1 rounded-full font-bold">{packedItems.length}</span>
          </h2>

          <div className="space-y-2 max-h-[350px] overflow-y-auto">
            {packedItems.length === 0 ? (
              <div className="text-center text-slate-400 text-sm p-8 border-2 border-dashed border-slate-200 rounded-xl bg-white">
                Сумка пуста. Найдите и уложите приборы через поиск.
              </div>
            ) : (
              packedItems.map(item => (
                <div key={item.id} className="bg-white p-3 rounded-lg border border-slate-200 text-xs flex justify-between items-center shadow-sm">
                  <span className="font-semibold text-slate-700 truncate pr-2">{item.name}</span>
                  <button onClick={() => handleUnpack(item.id)} className="text-red-400 hover:text-red-600 text-base shrink-0">✖</button>
                </div>
              ))
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