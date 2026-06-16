// steps/Stage3/Step1_Marking.jsx
'use client';
import React, { useState, useCallback } from 'react';
import * as Data from './markingData';
import ChecklistInteractive from './interactive2';
import MarkerChoiceInteractive from './interactive1';

// ─── Поля бланка этикетки (по стандартам РК) ─────────────────────────────────
const LABEL_FIELDS = Data.LABEL_FIELDS;

const CONTAINERS = Data.CONTAINERS;


// ─── Бланк этикетки (увеличительное стекло) ──────────────────────────────────
function LabelForm({ container, initialData, onSave, onClose }) {
  const [data, setData] = useState(initialData || {});
  const [touched, setTouched] = useState(false);

  const handleChange = (fieldId, value) => {
    setData(prev => ({ ...prev, [fieldId]: value }));
  };

  const missingRequired = LABEL_FIELDS.filter(f => f.required && !data[f.id]?.trim?.());

  const handleSave = () => {
    setTouched(true);
    if (missingRequired.length > 0) return;
    onSave(data);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4"
      style={{ background: 'rgba(15,23,42,0.78)', backdropFilter: 'blur(6px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="relative w-full h-full sm:h-auto sm:max-w-2xl sm:rounded-2xl overflow-hidden shadow-2xl bg-white flex flex-col">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between shrink-0">
          <div>
            <h2 className="text-white font-bold text-base sm:text-lg">🔍 Этикетка пробы</h2>
            <p className="text-slate-400 text-xs mt-0.5">{container.name}</p>
          </div>
          <button onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-700 hover:bg-red-600 text-slate-300 hover:text-white font-bold text-lg flex items-center justify-center transition-all shrink-0">×</button>
        </div>

        <div className="p-4 sm:p-6 flex-1 overflow-y-auto">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 text-xs text-amber-800">
            ⚠️ Все поля, отмеченные «*», обязательны. Если лаборатория не сможет идентифицировать пробу по этикетке — она будет отклонена.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {LABEL_FIELDS.map(field => {
              const isEmpty = touched && field.required && !data[field.id]?.trim?.();
              return (
                <div key={field.id} className={field.id === 'notes' ? 'sm:col-span-2' : ''}>
                  <label className="block text-xs font-bold text-slate-600 mb-1">
                    {field.label}{field.required && <span className="text-red-500"> *</span>}
                  </label>
                  {field.type === 'select' ? (
                    <select
                      value={data[field.id] || ''}
                      onChange={(e) => handleChange(field.id, e.target.value)}
                      className={`w-full px-3 py-2.5 sm:py-2 rounded-lg border text-base sm:text-sm bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-300
                        ${isEmpty ? 'border-red-400' : 'border-slate-300'}`}>
                      {field.options.map(opt => (
                        <option key={opt} value={opt}>{opt || '— выбрать —'}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      value={data[field.id] || ''}
                      placeholder={field.placeholder}
                      onChange={(e) => handleChange(field.id, e.target.value)}
                      className={`w-full px-3 py-2.5 sm:py-2 rounded-lg border text-base sm:text-sm bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-300
                        ${isEmpty ? 'border-red-400' : 'border-slate-300'}`}
                    />
                  )}
                  {isEmpty && <p className="text-red-500 text-[10px] mt-1">Поле обязательно для заполнения</p>}
                </div>
              );
            })}
          </div>
        </div>

        <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-slate-200 flex flex-col-reverse sm:flex-row justify-end gap-2 bg-slate-50 shrink-0">
          <button onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 sm:py-2 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-200 transition-all">
            Отмена
          </button>
          <button onClick={handleSave}
            className="w-full sm:w-auto px-5 py-2.5 sm:py-2 rounded-xl text-sm font-bold text-white bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 shadow-md transition-all">
            Сохранить и наклеить →
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Карточка одной ёмкости ───────────────────────────────────────────────────
function ContainerCard({ container, labelData, isApplying, onOpenForm }) {
  const isLabeled = !!labelData;
  const isLarge = container.size === 'large';

  return (
    <div className="flex flex-col items-center gap-3 p-4 rounded-2xl border-2 transition-all
      bg-white border-slate-200 hover:border-blue-300">
      <div className={`relative flex items-center justify-center ${isLarge ? 'w-32 h-40' : 'w-24 h-32'}`}>
        <div className={`text-6xl ${isLarge ? 'text-7xl' : 'text-6xl'} select-none transition-transform
          ${isApplying ? 'scale-105' : ''}`}>
          {container.emoji}
        </div>

        {/* Этикетка */}
        <button
          onClick={onOpenForm}
          className={`absolute rounded-md border-2 flex flex-col items-center justify-center text-[8px] leading-tight font-mono p-1 cursor-pointer transition-all duration-300
            ${isLabeled
              ? 'bg-white border-slate-400 text-slate-700 shadow-sm'
              : 'bg-white/70 border-dashed border-amber-400 text-amber-500 hover:border-amber-500 hover:scale-105 animate-pulse'}
            ${isApplying ? 'scale-110 shadow-lg' : ''}
          `}
          style={{
            width: isLarge ? '64px' : '52px',
            height: isLarge ? '44px' : '38px',
            bottom: isLarge ? '36px' : '28px',
          }}
          title={isLabeled ? 'Кликните, чтобы изменить данные' : 'Кликните, чтобы заполнить этикетку'}
        >
          {isLabeled ? (
            <>
              <span className="font-bold truncate w-full text-center">{labelData.sampleCode}</span>
              <span className="truncate w-full text-center opacity-70">{labelData.date}</span>
            </>
          ) : (
            <span>🔍</span>
          )}
        </button>
      </div>

      <div className="text-center">
        <p className="font-bold text-sm text-slate-800">{container.name}</p>
        <p className={`text-xs font-semibold mt-0.5 ${isLabeled ? 'text-emerald-600' : 'text-amber-600'}`}>
          {isLabeled ? '✓ Этикетка заполнена и наклеена' : 'Этикетка не заполнена'}
        </p>
      </div>
    </div>
  );
}



// ─── Главный компонент ─────────────────────────────────────────────────────────
export default function Step1_Marking({ onComplete }) {
  const [checklistConfirmed, setChecklistConfirmed] = useState(false);
  const [markerConfirmed, setMarkerConfirmed] = useState(false);
  const [activeForm, setActiveForm] = useState(null); // containerId | null
  const [applyingId, setApplyingId] = useState(null);
  const [labels, setLabels] = useState({}); // { containerId: data }
  const [errors, setErrors] = useState([]);

  const handleChecklistResolved = useCallback(() => {
    setChecklistConfirmed(true);
  }, []);

  const handleMarkerResolved = useCallback(() => {
    setMarkerConfirmed(true);
  }, []);

  const handleOpenForm = (containerId) => {
    if (!markerConfirmed) return;
    setActiveForm(containerId);
  };

  const handleSaveLabel = (containerId, data) => {
    setActiveForm(null);
    setApplyingId(containerId);
    setTimeout(() => {
      setLabels(prev => ({ ...prev, [containerId]: data }));
      setApplyingId(null);
    }, 600); // имитация "разглаживания" этикетки
  };

  const allLabeled = CONTAINERS.every(c => labels[c.id]);

  // Проверка уникальности кодов проб (защита от обезличивания)
  const checkCodesUnique = () => {
    const codes = CONTAINERS.map(c => labels[c.id]?.sampleCode?.trim()).filter(Boolean);
    return new Set(codes).size === codes.length;
  };

  const handleFinish = () => {
    const newErrors = [];
    let scorePenalty = 0;

    if (!checklistConfirmed) {
      newErrors.push('Не пройден чек-лист юридического состава этикетки.');
      scorePenalty += 15;
    }
    if (!markerConfirmed) {
      newErrors.push('Не выбран корректный инструмент для маркировки.');
      scorePenalty += 15;
    }
    if (!allLabeled) {
      newErrors.push('Не все ёмкости промаркированы.');
      scorePenalty += 25;
    }
    if (allLabeled && !checkCodesUnique()) {
      newErrors.push('Код пробы (номер) совпадает на разных ёмкостях — пробы будут считаться обезличенными.');
      scorePenalty += 20;
    }

    setErrors(newErrors);
    if (newErrors.length > 0) return;

    onComplete?.({
      markingErrors: newErrors,
      markingScorePenalty: scorePenalty,
      labels,
      markerUsed: 'permanent',
      checklistConfirmed,
    });
  };

  return (
    <div className="relative w-full max-w-5xl mb-6">
      <style>{`
        .step-card{background:white;border-radius:20px;border:1.5px solid #e2e8f0;box-shadow:0 4px 24px rgba(0,0,0,0.07);overflow:hidden}
      `}</style>

      {activeForm && (
        <LabelForm
          container={CONTAINERS.find(c => c.id === activeForm)}
          initialData={labels[activeForm]}
          onSave={(data) => handleSaveLabel(activeForm, data)}
          onClose={() => setActiveForm(null)}
        />
      )}

      <div className="step-card">
        <div className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 px-4 sm:px-6 py-4 sm:py-5">
          <h2 className="text-white font-bold text-base sm:text-lg">🏷️ Этап 3.1 — Маркировка проб</h2>
          <p className="text-slate-400 text-xs mt-1">
            Наклейте этикетки на ёмкости и заполните код пробы водостойким маркером
          </p>
        </div>

        <div className="p-4 sm:p-6 flex flex-col gap-4 sm:gap-6">

          {/* Интерактив №2 — юридический состав этикетки */}
          {!checklistConfirmed && (
            <ChecklistInteractive onResolved={handleChecklistResolved} />
          )}

          {checklistConfirmed && !markerConfirmed && (
            <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-700 font-semibold">
              <span className="text-xl">📋</span>
              Состав этикетки определён верно. Теперь выберите инструмент для маркировки.
            </div>
          )}

          {/* Интерактив №1 — выбор маркера */}
          {checklistConfirmed && !markerConfirmed && (
            <MarkerChoiceInteractive onResolved={handleMarkerResolved} />
          )}

          {checklistConfirmed && markerConfirmed && (
            <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-700 font-semibold">
              <span className="text-xl">🖋️</span>
              Инструмент выбран: чёрный водостойкий перманентный маркер. Можно приступать к заполнению этикеток.
            </div>
          )}

          {/* Рабочий стол с ёмкостями */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-opacity ${markerConfirmed ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>
            {CONTAINERS.map(container => (
              <ContainerCard
                key={container.id}
                container={container}
                labelData={labels[container.id]}
                isApplying={applyingId === container.id}
                onOpenForm={() => handleOpenForm(container.id)}
              />
            ))}
          </div>

          {/* Справка по стандартам */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs text-blue-800">
            <p className="font-bold mb-1">📖 Обязательные реквизиты этикетки (РК)</p>
            <p className="leading-relaxed text-blue-700">
              Код (номер) пробы, наименование объекта отбора, вид пробы, дата и время отбора, ФИО
              пробоотборщика, метод консервации/охлаждения. Отсутствие любого из пунктов делает пробу
              недостоверной для лаборатории.
            </p>
          </div>

          {/* Ошибки */}
          {errors.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 space-y-1">
              {errors.map((err, i) => (
                <p key={i} className="text-red-600 text-xs font-bold">⚠️ {err}</p>
              ))}
            </div>
          )}

          <button
            onClick={handleFinish}
            disabled={!markerConfirmed || !checklistConfirmed}
            className={`w-full font-bold py-4 rounded-2xl shadow-lg transition-all transform text-sm
              ${markerConfirmed && checklistConfirmed
                ? 'bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white hover:-translate-y-0.5'
                : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}>
            Завершить маркировку →
          </button>
        </div>
      </div>
    </div>
  );
}