// steps/Stage1/Report.js
import React, { useState, useEffect, useRef } from 'react';
import { useInventoryContext } from '@/components/inventory/InventoryContext';

export default function Stage1Report({ logs, onContinue }) {
  const inventory = useInventoryContext();
  const [notification, setNotification] = useState(null);
  const [missingItemsList, setMissingItemsList] = useState([]);
  
  // Используем useRef вместо useState для отслеживания добавления
  const itemsAddedRef = useRef(false);
  
  // Проверяем, есть ли правильные конфигурации
  const hasCorrectChem = logs.chemResults?.some(res => res.isPerfect === true) || false;
  const hasCorrectBio = logs.bioResults?.some(res => res.isPerfect === true) || false;
  
  // Новая система оценок: 100 если есть правильный вариант, иначе 0
  const chemScore = hasCorrectChem ? 100 : 0;
  const bioScore = hasCorrectBio ? 100 : 0;
  const kitScore = logs.kitScore || 0;
  
  // Пересчитываем средний балл
  const averageScore = Math.round((chemScore + bioScore + kitScore) / 3);

  // Функция для определения забытых предметов
  const getMissingItems = () => {
    const missing = [];
    
    // ========== 1. ПРОВЕРКА ХИМИЧЕСКОЙ ТАРЫ ==========
    if (logs.chemResults && logs.chemResults.length > 0) {
      // Проверяем, есть ли правильные конфигурации
      const hasCorrectChem = logs.chemResults.some(res => res.isPerfect === true);
      
      if (!hasCorrectChem) {
        // Если нет ни одной правильной конфигурации - даем обе
        missing.push({
          id: 'chem_tare_hdpe',
          name: 'Тара Хим. — HDPE (Полиэтилен низкого давления) (2л)',
          qty: 1,
          reason: 'Для химического анализа (HDPE)',
          emoji: '🧪'
        });
        missing.push({
          id: 'chem_tare_pp',
          name: 'Тара Хим. — PP (Полипропилен) (2л)',
          qty: 1,
          reason: 'Для химического анализа (PP)',
          emoji: '🧪'
        });
      } else {
        // Если есть правильная конфигурация - проверяем каждую отдельно
        const hasHDPE = logs.chemResults.some(res => res.isPerfect && res.configKey?.includes('hdpe'));
        const hasPP = logs.chemResults.some(res => res.isPerfect && res.configKey?.includes('pp'));
        
        if (!hasHDPE) {
          missing.push({
            id: 'chem_tare_hdpe',
            name: 'Тара Хим. — HDPE (Полиэтилен низкого давления) (2л)',
            qty: 1,
            reason: 'Для химического анализа (HDPE)',
            emoji: '🧪'
          });
        }
        if (!hasPP) {
          missing.push({
            id: 'chem_tare_pp',
            name: 'Тара Хим. — PP (Полипропилен) (2л)',
            qty: 1,
            reason: 'Для химического анализа (PP)',
            emoji: '🧪'
          });
        }
      }
    } else {
      // Если нет результатов химии - даем обе
      missing.push({
        id: 'chem_tare_hdpe',
        name: 'Тара Хим. — HDPE (Полиэтилен низкого давления) (2л)',
        qty: 1,
        reason: 'Для химического анализа (HDPE)',
        emoji: '🧪'
      });
      missing.push({
        id: 'chem_tare_pp',
        name: 'Тара Хим. — PP (Полипропилен) (2л)',
        qty: 1,
        reason: 'Для химического анализа (PP)',
        emoji: '🧪'
      });
    }
    
    // ========== 2. ПРОВЕРКА БАКТЕРИОЛОГИЧЕСКОЙ ТАРЫ ==========
    if (logs.bioResults && logs.bioResults.length > 0) {
      // Проверяем, есть ли правильные конфигурации
      const hasCorrectBio = logs.bioResults.some(res => res.isPerfect === true);
      
      if (!hasCorrectBio) {
        // Если нет ни одной правильной конфигурации - даем обе
        missing.push({
          id: 'bio_tare_glass_boro',
          name: 'Тара Био — Боросиликатное стекло (0.5л)',
          qty: 1,
          reason: 'Для бактериологического анализа (боросиликатное стекло)',
          emoji: '🧫'
        });
        missing.push({
          id: 'bio_tare_plastic_thermo',
          name: 'Тара Био — Термостойкий пластик (PC/PP) (0.5л)',
          qty: 1,
          reason: 'Для бактериологического анализа (термостойкий пластик)',
          emoji: '🧫'
        });
      } else {
        // Если есть правильная конфигурация - проверяем каждую отдельно
        const hasGlassBoro = logs.bioResults.some(res => res.isPerfect && res.configKey?.includes('glass_boro'));
        const hasPlasticThermo = logs.bioResults.some(res => res.isPerfect && res.configKey?.includes('plastic_thermo'));
        
        if (!hasGlassBoro) {
          missing.push({
            id: 'bio_tare_glass_boro',
            name: 'Тара Био — Боросиликатное стекло (0.5л)',
            qty: 1,
            reason: 'Для бактериологического анализа (боросиликатное стекло)',
            emoji: '🧫'
          });
        }
        if (!hasPlasticThermo) {
          missing.push({
            id: 'bio_tare_plastic_thermo',
            name: 'Тара Био — Термостойкий пластик (PC/PP) (0.5л)',
            qty: 1,
            reason: 'Для бактериологического анализа (термостойкий пластик)',
            emoji: '🧫'
          });
        }
      }
    } else {
      // Если нет результатов бактериологии - даем обе
      missing.push({
        id: 'bio_tare_glass_boro',
        name: 'Тара Био — Боросиликатное стекло (0.5л)',
        qty: 1,
        reason: 'Для бактериологического анализа (боросиликатное стекло)',
        emoji: '🧫'
      });
      missing.push({
        id: 'bio_tare_plastic_thermo',
        name: 'Тара Био — Термостойкий пластик (PC/PP) (0.5л)',
        qty: 1,
        reason: 'Для бактериологического анализа (термостойкий пластик)',
        emoji: '🧫'
      });
    }
    
    // ========== 3. ПРОВЕРКА ПОЛЕВОЙ СУМКИ ==========
    if (!logs.kitResults || logs.kitResults.length === 0) {
      // Если сумка пуста - добавляем все критические предметы
      missing.push(
        { id: 'ethyl_wipes', name: 'Салфетки этиловые', qty: 3, reason: 'Для дезинфекции крана', emoji: '🧻' },
        { id: 'gas_burner', name: 'Портативная горелка', qty: 1, reason: 'Для прокаливания крана', emoji: '🔥' },
        { id: 'sterile_gloves', name: 'Перчатки стерильные', qty: 2, reason: 'Для работы на объекте', emoji: '🧤' },
        { id: 'safety_goggles', name: 'Очки защитные', qty: 1, reason: 'Для безопасности при работе с горелкой', emoji: '🥽' },
        { id: 'waterproof_marker', name: 'Маркер перманентный', qty: 1, reason: 'Для маркировки проб', emoji: '🖊️' },
        { id: 'ice_eutectic', name: 'Эвтектический хладоэлемент', qty: 5, reason: 'Для охлаждения проб при транспортировке', emoji: '🧊' },
        { id: 'aerator_key_special', name: 'Специальный ключ для скрытых аэраторов', qty: 1, reason: 'Для демонтажа сеточки-аэратора', emoji: '🔧' },
        { id: 'divider_foam', name: 'Перегородка из пенопласта', qty: 5, reason: 'Для теплоизоляции проб от хладоэлементов', emoji: '📦' }
      );
      return missing;
    }
    
    const packedItems = logs.kitResults;
    
    // Функция для подсчета количества конкретного предмета
    const getItemQty = (id) => {
      const item = packedItems.find(i => i.id === id);
      return item ? item.qty || 1 : 0;
    };
    
    // Проверяем наличие по ID
    const hasId = (id) => packedItems.some(i => i.id === id);
    
    // 3.1 Салфетки - если нет ни одного вида, даем 3 этиловых
    if (!hasId('ethyl_wipes') && !hasId('isop_wipes')) {
      missing.push({
        id: 'ethyl_wipes',
        name: 'Салфетки этиловые',
        qty: 3,
        reason: 'Для дезинфекции крана',
        emoji: '🧻'
      });
    }
    
    // 3.2 Горелка - если нет, даем 1
    if (!hasId('gas_burner')) {
      missing.push({
        id: 'gas_burner',
        name: 'Портативная горелка',
        qty: 1,
        reason: 'Для прокаливания крана',
        emoji: '🔥'
      });
    }
    
    // 3.3 Перчатки - если меньше 2, добавляем до 2
    const glovesQty = getItemQty('sterile_gloves');
    if (glovesQty < 2) {
      missing.push({
        id: 'sterile_gloves',
        name: 'Перчатки стерильные',
        qty: 2 - glovesQty,
        reason: `Взято ${glovesQty} шт., нужно 2 шт. для работы на объекте`,
        emoji: '🧤'
      });
    }
    
    // 3.4 Очки - если нет, даем 1
    if (!hasId('safety_goggles')) {
      missing.push({
        id: 'safety_goggles',
        name: 'Очки защитные',
        qty: 1,
        reason: 'Для безопасности при работе с горелкой',
        emoji: '🥽'
      });
    }
    
    // 3.5 Маркер - если нет, даем 1
    if (!hasId('waterproof_marker')) {
      missing.push({
        id: 'waterproof_marker',
        name: 'Маркер перманентный',
        qty: 1,
        reason: 'Для маркировки проб',
        emoji: '🖊️'
      });
    }
    
    // 3.6 Хладоэлементы - должно быть 5
    const iceQty = getItemQty('ice_eutectic') + getItemQty('ice_gel') + getItemQty('ice_silicone');
    if (iceQty < 5) {
      missing.push({
        id: 'ice_eutectic',
        name: 'Эвтектический хладоэлемент',
        qty: 5 - iceQty,
        reason: `Взято ${iceQty} шт., нужно 5 шт. для охлаждения проб при транспортировке`,
        emoji: '🧊'
      });
    }
    
    // 3.7 Инструменты для аэратора - если нет, даем 1
    const hasTool = hasId('aerator_key_special') || hasId('adjustable_wrench');
    if (!hasTool) {
      missing.push({
        id: 'aerator_key_special',
        name: 'Специальный ключ для скрытых аэраторов',
        qty: 1,
        reason: 'Для демонтажа сеточки-аэратора',
        emoji: '🔧'
      });
    }
    
    // 3.8 Перегородки - должно быть 5
    const dividerQty = getItemQty('divider_cardboard') + getItemQty('divider_foam');
    if (dividerQty < 5) {
      missing.push({
        id: 'divider_foam',
        name: 'Перегородка из пенопласта',
        qty: 5 - dividerQty,
        reason: `Взято ${dividerQty} шт., нужно 5 шт. для теплоизоляции проб от хладоэлементов`,
        emoji: '📦'
      });
    }
    
    return missing;
  };

  // Автоматически добавляем забытые предметы при загрузке
  useEffect(() => {
    // Проверяем, были ли уже добавлены предметы
    if (itemsAddedRef.current) {
      return; // Уже добавили - выходим
    }
    
    const missing = getMissingItems();
    setMissingItemsList(missing);
    
    if (missing.length > 0) {
      // Подготавливаем все предметы для добавления
      const itemsToAdd = missing.map(item => ({
        id: item.id,
        name: item.name,
        qty: item.qty || 1
      }));
      
      // Добавляем все за один раз
      inventory.addMultipleItems(itemsToAdd);
      
      // Отмечаем, что предметы добавлены
      itemsAddedRef.current = true;
      
      setNotification({
        type: 'warning',
        message: `📦 В инвентарь добавлены забытые предметы: ${missing.map(i => `${i.emoji} ${i.name} (${i.qty} шт.)`).join(', ')}`
      });
      
      // Автоматически скрываем уведомление через 7 секунд
      setTimeout(() => {
        setNotification(null);
      }, 7000);
    } else {
      setNotification({
        type: 'success',
        message: '✅ Все необходимые предметы собраны! Можно переходить на объект.'
      });
      
      // Автоматически скрываем уведомление через 3 секунды
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    }
  }, []); // Пустой массив - только при монтировании

  return (
    <div className="bg-white w-full max-w-5xl rounded-xl shadow-xl border border-slate-200 overflow-hidden mb-6 animate-fade-in">
      
      {/* Шапка отчета */}
      <div className="bg-blue-50 px-8 py-6 border-b border-blue-100 text-center">
        <span className="text-5xl block mb-4">📋</span>
        <h2 className="text-3xl font-bold text-blue-900">Промежуточный отчет - Этап 1</h2>
        <p className="text-blue-700 mt-2 font-medium">Результаты предвыездной подготовки в лаборатории</p>
      </div>
      
      <div className="p-8">
        
        {/* Уведомление */}
        {notification && (
          <div className={`mb-6 p-4 rounded-xl border ${
            notification.type === 'success' ? 'bg-green-50 border-green-200 text-green-800' :
            notification.type === 'warning' ? 'bg-amber-50 border-amber-200 text-amber-800' :
            'bg-blue-50 border-blue-200 text-blue-800'
          }`}>
            <p className="text-sm font-medium">{notification.message}</p>
          </div>
        )}
        
        {/* Виджет забытых предметов (если есть) */}
        {missingItemsList.length > 0 && (
          <div className="mb-6 p-4 rounded-xl border border-red-200 bg-red-50">
            <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
              <span>⚠️</span> 
              Забытые предметы (автоматически добавлены в инвентарь)
            </h4>
            <ul className="space-y-1">
              {missingItemsList.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-red-700">
                  <span>{item.emoji}</span>
                  <span className="font-medium">{item.name}</span>
                  <span className="text-xs bg-red-100 px-2 py-0.5 rounded">+{item.qty}</span>
                  <span className="text-xs text-red-500">— {item.reason}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Виджеты оценок - новая система */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          
          <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-5 text-center w-full sm:w-44 shadow-inner">
            <p className="text-slate-500 font-bold mb-1 text-[10px] uppercase tracking-wider">Хим. Анализ</p>
            <div className={`text-3xl font-black ${chemScore === 100 ? 'text-green-600' : 'text-red-600'}`}>
              {chemScore}/100
            </div>
            <p className="text-[10px] font-semibold mt-2 text-slate-600">
              {hasCorrectChem ? "✅ Есть правильный вариант" : "❌ Нет правильных"}
            </p>
          </div>

          <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-5 text-center w-full sm:w-44 shadow-inner">
            <p className="text-slate-500 font-bold mb-1 text-[10px] uppercase tracking-wider">Бактериология</p>
            <div className={`text-3xl font-black ${bioScore === 100 ? 'text-green-600' : 'text-red-600'}`}>
              {bioScore}/100
            </div>
            <p className="text-[10px] font-semibold mt-2 text-slate-600">
              {hasCorrectBio ? "✅ Есть правильный вариант" : "❌ Нет правильных"}
            </p>
          </div>

          <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-5 text-center w-full sm:w-44 shadow-inner">
            <p className="text-slate-500 font-bold mb-1 text-[10px] uppercase tracking-wider">Полевая сумка</p>
            <div className={`text-3xl font-black ${kitScore === 100 ? 'text-green-600' : kitScore >= 50 ? 'text-amber-500' : 'text-red-600'}`}>
              {kitScore}/100
            </div>
            <p className="text-[10px] font-semibold mt-2 text-slate-600">
              {logs.kitErrors?.length === 0 ? "🌟 Без ошибок" : `Ошибок: ${logs.kitErrors?.length || 0}`}
            </p>
          </div>

          <div className="bg-blue-900 border-2 border-blue-950 rounded-2xl p-5 text-center w-full sm:w-44 shadow-md text-white">
            <p className="text-blue-300 font-bold mb-1 text-[10px] uppercase tracking-wider">Средний балл</p>
            <div className="text-4xl font-black">
              {averageScore}
            </div>
            <p className="text-[10px] font-semibold mt-2 text-blue-200">
              {averageScore >= 80 ? "🎓 Отлично" : averageScore >= 50 ? "⚠️ Требует внимания" : "❌ Требуется пересдача"}
            </p>
          </div>

        </div>

        {/* ДЕТАЛИЗАЦИЯ ХИМИИ */}
        <h3 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">1. Разбор (Химический анализ):</h3>
        <div className="space-y-3 mb-8">
          {logs.chemResults && logs.chemResults.length > 0 ? (
            logs.chemResults.map((res, idx) => {
              // Если есть хотя бы одна правильная - все зачтено
              const isSuccess = hasCorrectChem;
              
              return (
                <div key={`chem-${res.id}-${idx}`} className={`p-4 rounded-xl border ${isSuccess ? 'bg-green-50 border-green-200' : res.isPerfect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                  <p className={`font-bold text-md mb-2 flex items-center ${isSuccess ? 'text-green-800' : res.isPerfect ? 'text-green-800' : 'text-red-800'}`}>
                    <span className="mr-2">{isSuccess ? '✅' : res.isPerfect ? '✅' : '❌'}</span> 
                    Вариант {res.id}: {res.name}
                    {isSuccess && !res.isPerfect && <span className="ml-2 text-xs text-green-600 font-normal">(зачтено, есть правильный вариант)</span>}
                    {isSuccess && res.isPerfect && <span className="ml-2 text-xs text-green-600 font-normal">(✅ правильный)</span>}
                  </p>
                  {!isSuccess && !res.isPerfect && (
                    <ul className="space-y-1">
                      {(res.errs || []).map((err, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-700">
                          <span className="text-red-500 mr-2">•</span>{err}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })
          ) : (
            <p className="text-slate-500 italic">Нет данных</p>
          )}
        </div>

        {/* ДЕТАЛИЗАЦИЯ БИО */}
        <h3 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">2. Разбор (Бактериологический анализ):</h3>
        <div className="space-y-3 mb-8">
          {logs.bioResults && logs.bioResults.length > 0 ? (
            logs.bioResults.map((res, idx) => {
              // Если есть хотя бы одна правильная - все зачтено
              const isSuccess = hasCorrectBio;
              
              return (
                <div key={`bio-${res.id}-${idx}`} className={`p-4 rounded-xl border ${isSuccess ? 'bg-green-50 border-green-200' : res.isPerfect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                  <p className={`font-bold text-md mb-2 flex items-center ${isSuccess ? 'text-green-800' : res.isPerfect ? 'text-green-800' : 'text-red-800'}`}>
                    <span className="mr-2">{isSuccess ? '✅' : res.isPerfect ? '✅' : '❌'}</span> 
                    Вариант {res.id}: {res.name}
                    {isSuccess && !res.isPerfect && <span className="ml-2 text-xs text-green-600 font-normal">(зачтено, есть правильный вариант)</span>}
                    {isSuccess && res.isPerfect && <span className="ml-2 text-xs text-green-600 font-normal">(✅ правильный)</span>}
                  </p>
                  {!isSuccess && !res.isPerfect && (
                    <ul className="space-y-1">
                      {(res.errs || []).map((err, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-700">
                          <span className="text-red-500 mr-2">•</span>{err}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })
          ) : (
            <p className="text-slate-500 italic">Нет данных</p>
          )}
        </div>

        {/* ДЕТАЛИЗАЦИЯ ПОЛЕВОЙ СУМКИ */}
        <h3 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">3. Разбор (Комплектация полевой сумки):</h3>
        <div className="space-y-3 mb-8">
          {logs.kitErrors && logs.kitErrors.length === 0 ? (
            <div className="bg-green-50 border border-green-200 p-5 rounded-xl text-green-800 flex items-start">
              <span className="text-2xl mr-3">✅</span>
              <div>
                <p className="font-bold text-lg">Сумка укомплектована верно</p>
                <p className="mt-1 text-sm">Вы взяли все средства дезинфекции, безопасности, контроля температуры и маркировки строго по стандартам.</p>
              </div>
            </div>
          ) : (
            <div className="bg-red-50 border border-red-200 p-5 rounded-xl">
              <p className="font-bold text-red-800 text-lg mb-3 flex items-center">
                <span className="mr-2">❌</span> Обнаружены ошибки при сборе сумки:
              </p>
              <ul className="space-y-2">
                {(logs.kitErrors || []).map((err, idx) => (
                  <li key={idx} className="flex items-start bg-white p-3 rounded-lg border border-red-100 shadow-sm text-sm">
                    <span className="text-red-500 font-bold mr-3">•</span>
                    <span className="text-slate-700 font-medium">{err}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Кнопка продолжения */}
        <div className="flex justify-center border-t pt-6">
          <button 
            onClick={onContinue}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-md transition-all transform hover:-translate-y-1"
          >
            ✅ Продолжить на Этап 2
          </button>
        </div>
        
      </div>
    </div>
  );
}