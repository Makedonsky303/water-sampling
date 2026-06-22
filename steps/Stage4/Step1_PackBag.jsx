'use client';
import React, { useState } from 'react';

// Предметы для укладки (включая дистракторы)
const ITEMS = [
  { id: 'ice1', type: 'ice', label: 'Хладоэлемент №1', icon: '🧊' },
  { id: 'ice2', type: 'ice', label: 'Хладоэлемент №2', icon: '🧊' },
  { id: 'ice3', type: 'distractor', label: 'Хладоэлемент №3', icon: '🧊' },
  { id: 'divider', type: 'divider', label: 'Изолирующая перегородка', icon: '📋' },
  { id: 'chem', type: 'sample', label: 'Флакон: хим. анализ', icon: '🧪' },
  { id: 'bio', type: 'sample', label: 'Флакон: бак. анализ', icon: '🦠' },
  { id: 'foam', type: 'distractor', label: 'Пенопласт', icon: '📦' },
  { id: 'tape', type: 'distractor', label: 'Скотч', icon: '📼' },
];

// Зоны сумки
const BAG_ZONES = {
  leftWall: { id: 'leftWall', label: 'Левая стенка', correctTypes: ['ice'] },
  rightWall: { id: 'rightWall', label: 'Правая стенка', correctTypes: ['ice'] },
  leftDivider: { id: 'leftDivider', label: 'Левая перегородка', correctTypes: ['divider'] },
  leftSample: { id: 'leftSample', label: 'Левый образец', correctTypes: ['sample'] },
  rightSample: { id: 'rightSample', label: 'Правый образец', correctTypes: ['sample'] },
  rightDivider: { id: 'rightDivider', label: 'Правая перегородка', correctTypes: ['divider'] },
};

export default function Step1_PackBag({ onComplete }) {
  const [placed, setPlaced] = useState({});
  const [draggedItem, setDraggedItem] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null); // для мобильных
  const [dragOverZone, setDragOverZone] = useState(null); // подсветка зоны при драге

  // Доступные предметы (еще не размещенные)
  const availableItems = ITEMS.filter(item =>
    !Object.values(placed).includes(item.id)
  );

  const handleDragStart = (e, item) => {
    setDraggedItem(item);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e, zoneId) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverZone(zoneId); // Подсвечиваем зону
  };

  const handleDragLeave = () => {
    setDragOverZone(null);
  };

  const handleDrop = (e, zoneId) => {
    e.preventDefault();
    setDragOverZone(null);
    if (!draggedItem) return;

    // Удаляем предмет из старой зоны
    const newPlaced = { ...placed };
    Object.keys(newPlaced).forEach(key => {
      if (newPlaced[key] === draggedItem.id) {
        delete newPlaced[key];
      }
    });

    // Размещаем в новой зоне
    newPlaced[zoneId] = draggedItem.id;
    setPlaced(newPlaced);
    setDraggedItem(null);
  };

  const handleZoneClick = (zoneId) => {
    if (selectedItem) {
      // Размещаем выбранный предмет
      const newPlaced = { ...placed };
      Object.keys(newPlaced).forEach(key => {
        if (newPlaced[key] === selectedItem.id) {
          delete newPlaced[key];
        }
      });
      newPlaced[zoneId] = selectedItem.id;
      setPlaced(newPlaced);
      setSelectedItem(null);
    } else {
      // Убираем предмет из зоны
      if (placed[zoneId]) {
        const newPlaced = { ...placed };
        delete newPlaced[zoneId];
        setPlaced(newPlaced);
      }
    }
  };

  const checkPacking = () => {
    const errors = [];
    let scorePenalty = 0;

    // Проверка: хладоэлементы по бокам
    const hasIceLeft = placed.leftWall === 'ice1' || placed.leftWall === 'ice2';
    const hasIceRight = placed.rightWall === 'ice1' || placed.rightWall === 'ice2';

    if (!hasIceLeft) {
      errors.push('Отсутствует хладоэлемент в левой стенке. Нарушение температурного режима.');
      scorePenalty += 15;
    }

    if (!hasIceRight) {
      errors.push('Отсутствует хладоэлемент в правой стенке. Нарушение температурного режима.');
      scorePenalty += 15;
    }

    // Проверка: перегородки с обеих сторон
    if (placed.leftDivider !== 'divider') {
      errors.push('Левая изолирующая перегородка отсутствует.');
      scorePenalty += 10;
    }

    if (placed.rightDivider !== 'divider') {
      errors.push('Правая изолирующая перегородка отсутствует.');
      scorePenalty += 10;
    }

    // Проверка: оба образца размещены
    const hasLeftSample = placed.leftSample === 'chem' || placed.leftSample === 'bio';
    const hasRightSample = placed.rightSample === 'chem' || placed.rightSample === 'bio';

    if (!hasLeftSample) {
      errors.push('Левый образец не размещён.');
      scorePenalty += 15;
    }

    if (!hasRightSample) {
      errors.push('Правый образец не размещён.');
      scorePenalty += 15;
    }

    // Проверка: лишние предметы
    const hasDistractors = Object.values(placed).some(itemId => {
      const item = ITEMS.find(i => i.id === itemId);
      return item && item.type === 'distractor';
    });

    if (hasDistractors) {
      errors.push('В сумке размещены лишние предметы.');
      scorePenalty += 10;
    }

    onComplete({
      packingErrors: errors,
      packingScorePenalty: scorePenalty,
      packingData: placed,
    });
  };

  const getItemById = (id) => ITEMS.find(item => item.id === id);

  return (
    <div className="relative w-full max-w-6xl mb-6">
      <style>{`
        .bag-zone { transition: all 0.2s; }
        .bag-zone:hover { background: rgba(59, 130, 246, 0.1); }
        .item-card { cursor: grab; transition: all 0.2s; }
        .item-card:active { cursor: grabbing; }
        .item-selected { background: #fef08a !important; border-color: #eab308 !important; }
      `}</style>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

        {/* ── LEFT: Доступные предметы ── */}
        <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 shadow-lg flex flex-col overflow-hidden">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 px-6 py-5">
            <h2 className="text-white font-bold text-lg">📦 Доступные предметы</h2>
            <p className="text-slate-400 text-xs mt-1">Перетащите в сумку или выберите и кликните по зоне</p>
          </div>
          <div className="p-5 space-y-2 flex-1 overflow-y-auto">
            {availableItems.map(item => (
              <div
                key={item.id}
                draggable
                onDragStart={(e) => handleDragStart(e, item)}
                onClick={() => setSelectedItem(item)}
                className={`item-card flex items-center gap-3 p-3 rounded-xl border-2 ${
                  selectedItem?.id === item.id
                    ? 'item-selected'
                    : 'bg-white border-slate-300 hover:border-blue-400'
                }`}
              >
                <span className="text-2xl">{item.icon}</span>
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-800">{item.label}</p>
                </div>
              </div>
            ))}
            {availableItems.length === 0 && (
              <p className="text-center text-slate-400 text-sm py-8">Все предметы размещены</p>
            )}
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
              {/* SVG сумка */}
              <svg viewBox="0 0 400 300" className="w-full h-auto">
                {/* Контур сумки */}
                <rect x="40" y="40" width="320" height="220" fill="#e0f2fe" stroke="#0369a1" strokeWidth="3" rx="8"/>
                <text x="200" y="25" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="bold">
                  Термосумка
                </text>

                {/* Левая стенка (хладоэлемент) */}
                <g
                  onDragOver={(e) => handleDragOver(e, 'leftWall')}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => handleDrop(e, 'leftWall')}
                  onClick={() => handleZoneClick('leftWall')}
                  style={{ cursor: 'pointer' }}
                >
                  <rect x="50" y="60" width="60" height="180"
                    fill={placed.leftWall ? '#bfdbfe' : dragOverZone === 'leftWall' ? '#dbeafe' : '#fff'}
                    stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" className="bag-zone"/>
                  {placed.leftWall && (
                    <>
                      <text x="80" y="145" textAnchor="middle" fill="#1e40af" fontSize="28">
                        {getItemById(placed.leftWall)?.icon}
                      </text>
                      <text x="80" y="168" textAnchor="middle" fill="#64748b" fontSize="8" fontWeight="bold">
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
                      {getItemById(placed.leftDivider)?.icon}
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
                        {getItemById(placed.leftSample)?.icon}
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
                        {getItemById(placed.rightSample)?.icon}
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
                      {getItemById(placed.rightDivider)?.icon}
                    </text>
                  )}
                </g>

                {/* Правая стенка (хладоэлемент) */}
                <g
                  onDragOver={(e) => handleDragOver(e, 'rightWall')}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => handleDrop(e, 'rightWall')}
                  onClick={() => handleZoneClick('rightWall')}
                  style={{ cursor: 'pointer' }}
                >
                  <rect x="290" y="60" width="60" height="180"
                    fill={placed.rightWall ? '#bfdbfe' : dragOverZone === 'rightWall' ? '#dbeafe' : '#fff'}
                    stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" className="bag-zone"/>
                  {placed.rightWall && (
                    <>
                      <text x="320" y="145" textAnchor="middle" fill="#1e40af" fontSize="28">
                        {getItemById(placed.rightWall)?.icon}
                      </text>
                      <text x="320" y="168" textAnchor="middle" fill="#64748b" fontSize="8" fontWeight="bold">
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
                <li>• Хладоэлементы по бокам</li>
                <li>• Перегородка изолирует образцы</li>
                <li>• Флакон бак. анализа — за перегородкой</li>
                <li>• Без лишних предметов</li>
              </ul>
            </div>

            <div className="bg-slate-900 rounded-xl p-4 text-white text-xs space-y-2 border border-slate-700">
              <p className="font-bold text-slate-300 uppercase tracking-wider text-[10px]">Статус укладки</p>
              {[
                { zoneId: 'leftWall', label: 'Левый лёд' },
                { zoneId: 'leftDivider', label: 'Лев. перегородка' },
                { zoneId: 'leftSample', label: 'Лев. образец' },
                { zoneId: 'rightSample', label: 'Прав. образец' },
                { zoneId: 'rightDivider', label: 'Прав. перегородка' },
                { zoneId: 'rightWall', label: 'Правый лёд' },
              ].map((zone) => {
                const itemId = placed[zone.zoneId];
                const item = itemId ? getItemById(itemId) : null;
                return (
                  <div key={zone.zoneId} className="flex justify-between items-center">
                    <span className="text-slate-400 text-[11px]">{zone.label}:</span>
                    <span className={`font-bold text-[11px] ${item ? 'text-emerald-400' : 'text-red-400'}`}>
                      {item ? `${item.icon}` : 'Пусто'}
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
