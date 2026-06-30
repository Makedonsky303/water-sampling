'use client';
import React, { useState } from 'react';
import { LABEL_FIELDS } from '../data/markingData';

export default function LabelForm({ container, initialData, onSave, onClose }) {
  const [data, setData] = useState(() => ({
    ...initialData,
    dateText: initialData?.dateText || '',
  }));

  const [errors, setErrors] = useState({});
  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarDate, setCalendarDate] = useState(new Date());

  // ---------------- helpers ----------------
  const pad = (n) => (n < 10 ? `0${n}` : n);

  const formatDMY = (date) => {
    const d = pad(date.getDate());
    const m = pad(date.getMonth() + 1);
    const y = date.getFullYear();
    return `${d}/${m}/${y}`;
  };

  const formatISO = (date) => {
    const y = date.getFullYear();
    const m = pad(date.getMonth() + 1);
    const d = pad(date.getDate());
    return `${y}-${m}-${d}`;
  };

  const parseDMY = (str) => {
    const [d, m, y] = str.split('/');
    if (!d || !m || !y) return null;
    return new Date(y, m - 1, d);
  };

  // ---------------- state ----------------
  const handleChange = (id, value) => {
    setData(prev => ({ ...prev, [id]: value }));
    if (errors[id]) setErrors(prev => ({ ...prev, [id]: null }));
  };

  // ---------------- DATE ----------------
  const handleSelectDate = (date) => {
    setCalendarDate(date);
    handleChange('dateText', formatDMY(date));
    handleChange('date', formatISO(date));
    setShowCalendar(false);
  };

  const handleTextChange = (value) => {
    let v = value.replace(/[^\d]/g, '');

    if (v.length > 2) v = v.slice(0, 2) + '/' + v.slice(2);
    if (v.length > 5) v = v.slice(0, 5) + '/' + v.slice(5);
    v = v.slice(0, 10);

    handleChange('dateText', v);

    const parsed = parseDMY(v);
    if (parsed) {
      handleChange('date', formatISO(parsed));
      setCalendarDate(parsed);
    }
  };

  const goToday = () => {
    const today = new Date();
    setCalendarDate(today);
    handleSelectDate(today);
  };

  // ---------------- SAVE ----------------
  const handleSave = () => {
  const newErrors = {};

  LABEL_FIELDS.forEach(field => {
    const value = (data[field.id] || '').trim();

    // required check
    if (field.required && !value) {
      newErrors[field.id] = 'Поле обязательно';
      return;
    }

    // pattern check (ВАЖНО для времени)
    if (field.pattern && value && !field.pattern.test(value)) {
      newErrors[field.id] =
        'Неверный формат времени (HH:MM, 24ч). Пример: 14:30';
    }
  });

  // date check отдельно
  if (!data.date) {
    newErrors.date = 'Дата обязательна';
  }

  if (Object.keys(newErrors).length) {
    setErrors(newErrors);
    return;
  }

  onSave({
    ...data,
    date: data.dateText,
  });
};

  // ---------------- CALENDAR ----------------
  const buildCalendar = () => {
    const year = calendarDate.getFullYear();
    const month = calendarDate.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const start = firstDay.getDay() || 7;

    const days = [];

    for (let i = 1; i < start; i++) days.push(null);
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const monthNames = [
    'Янв','Фев','Мар','Апр','Май','Июн',
    'Июл','Авг','Сен','Окт','Ноя','Дек'
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl">

        {/* HEADER */}
        <div className="bg-slate-800 text-white px-6 py-4 rounded-t-2xl">
          <h3 className="font-bold text-sm">Этикетка пробы</h3>
          <p className="text-xs text-slate-300">{container.name}</p>
        </div>

        {/* BODY */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">

          {LABEL_FIELDS.map(field => {
            const hasError = !!errors[field.id];
            const isDate = field.id === 'date';

            return (
              <div key={field.id} className={field.id === 'objectName' ? 'sm:col-span-2' : ''}>

                <label className="text-xs font-bold block mb-1">
                  {field.label}
                </label>

                {/* DATE FIELD (ONLY DATE HERE) */}
                {isDate ? (
                  <div className="relative">

                    <input
                      type="text"
                      value={data.dateText || ''}
                      placeholder="dd/mm/yyyy"
                      onChange={(e) => handleTextChange(e.target.value)}
                      className={`w-full px-3 py-2 pr-10 border rounded-lg text-sm
                        ${hasError ? 'border-red-400 bg-red-50' : 'border-slate-300'}`}
                    />

                    <button
                      type="button"
                      onClick={() => setShowCalendar(true)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-slate-600 hover:text-blue-600"
                    >
                      📅
                    </button>

                    {hasError && (
                      <p className="text-red-500 text-[10px] mt-1">
                        {errors.date}
                      </p>
                    )}
                  </div>
                ) : (
                  // NON-DATE FIELDS
                  field.type === 'select' ? (
                    <select
                      value={data[field.id] || ''}
                      onChange={(e) => handleChange(field.id, e.target.value)}
                      className={`w-full px-3 py-2 border rounded-lg text-sm
                        ${hasError ? 'border-red-400 bg-red-50' : 'border-slate-300'}`}
                    >
                      {field.options?.map((opt, i) => (
                        <option key={i} value={opt}>
                          {opt || 'Выберите...'}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      value={data[field.id] || ''}
                      onChange={(e) => handleChange(field.id, e.target.value)}
                      placeholder={field.placeholder}
                      className={`w-full px-3 py-2 border rounded-lg text-sm
                        ${hasError ? 'border-red-400 bg-red-50' : 'border-slate-300'}`}
                    />
                  )
                )}

              </div>
            );
          })}

        </div>

        {/* FOOTER */}
        <div className="px-6 py-4 border-t flex justify-end gap-2 bg-slate-50">
          <button onClick={onClose} className="px-4 py-2">
            Отмена
          </button>

          <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Сохранить
          </button>
        </div>
      </div>

      {/* ---------------- CALENDAR ---------------- */}
      {showCalendar && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40">

          <div className="bg-white rounded-xl shadow-xl p-4 w-[320px]">

            {/* HEADER */}
            <div className="flex justify-between items-center mb-3">
              <button
                onClick={() =>
                  setCalendarDate(new Date(calendarDate.getFullYear(), calendarDate.getMonth() - 1))
                }
              >
                ◀
              </button>

              <div className="font-bold">
                {monthNames[calendarDate.getMonth()]} {calendarDate.getFullYear()}
              </div>

              <button
                onClick={() =>
                  setCalendarDate(new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1))
                }
              >
                ▶
              </button>
            </div>

            {/* WEEK DAYS */}
            <div className="grid grid-cols-7 text-center text-xs font-bold mb-2">
              {['Пн','Вт','Ср','Чт','Пт','Сб','Вс'].map(d => (
                <div key={d}>{d}</div>
              ))}
            </div>

            {/* DAYS */}
            <div className="grid grid-cols-7 gap-1 text-center">
              {buildCalendar().map((date, i) => (
                <div key={i}>
                  {date && (
                    <button
                      onClick={() => handleSelectDate(date)}
                      className="w-8 h-8 rounded hover:bg-blue-100 cursor-pointer"
                    >
                      {date.getDate()}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* FOOTER */}
            <div className="flex justify-between mt-4 pt-3 border-t">

              <button
                onClick={() => setShowCalendar(false)}
                className="text-sm text-slate-600 hover:text-red-500 cursor-pointer"
              >
                Cancel
              </button>

              <button
                onClick={goToday}
                className="text-sm text-blue-600 font-semibold hover:underline cursor-pointer"
              >
                Today
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}