// app/stage3/components/LabelForm.jsx
'use client';
import React, { useState } from 'react';
import { LABEL_FIELDS } from '../data/markingData';

export default function LabelForm({ container, initialData, onSave, onClose }) {
  const [data, setData] = useState(initialData || {});
  const [errors, setErrors] = useState({});

  const handleChange = (id, value) => {
    setData(prev => ({ ...prev, [id]: value }));
    if (errors[id]) setErrors(prev => ({ ...prev, [id]: null }));
  };

  const handleSave = () => {
    const newErrors = {};
    
    LABEL_FIELDS.forEach(field => {
      const val = (data[field.id] || '').trim();
      
      if (field.required && !val) {
        newErrors[field.id] = 'Поле обязательно для заполнения';
      } else if (field.pattern && val && !field.pattern.test(val)) {
        newErrors[field.id] = 'Неверный формат времени! Используйте формат 24ч (например, 14:30 или 09:15)';
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onSave(data);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl flex flex-col max-h-[90vh]">
        <div className="bg-slate-800 px-6 py-4 flex items-center justify-between text-white rounded-t-2xl">
          <div>
            <h3 className="font-bold text-sm">Заполнение этикетки пробы</h3>
            <p className="text-slate-400 text-xs">{container.name}</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white text-xl">&times;</button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {LABEL_FIELDS.map(field => {
            const hasError = !!errors[field.id];
            return (
              <div key={field.id} className={field.id === 'objectName' ? 'sm:col-span-2' : ''}>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {field.label} {field.required && <span className="text-red-500">*</span>}
                </label>
                
                {field.type === 'select' ? (
                  <select
                    value={data[field.id] || ''}
                    onChange={(e) => handleChange(field.id, e.target.value)}
                    className={`w-full px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white
                      ${hasError ? 'border-red-400 bg-red-50' : 'border-slate-300'}`}
                  >
                    {field.options.map((opt, i) => (
                      <option key={i} value={opt}>{opt || 'Выберите значение...'}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={data[field.id] || ''}
                    onChange={(e) => handleChange(field.id, e.target.value)}
                    className={`w-full px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white
                      ${hasError ? 'border-red-400 bg-red-50' : 'border-slate-300'}`}
                  />
                )}
                {hasError && <p className="text-red-500 text-[10px] mt-1 font-medium">{errors[field.id]}</p>}
              </div>
            );
          })}
        </div>

        <div className="px-6 py-4 border-t flex justify-end gap-2 bg-slate-50 rounded-b-2xl">
          <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-bold text-slate-500 hover:bg-slate-200 rounded-xl">Отмена</button>
          <button type="button" onClick={handleSave} className="px-5 py-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl">Сохранить</button>
        </div>
      </div>
    </div>
  );
}