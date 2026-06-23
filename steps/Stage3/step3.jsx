// steps/Stage3/Step3/Step3_DigitalAct.jsx
'use client';
import React, { useState, useCallback } from 'react';
import { ACT_TEMPLATE } from './data/actData';
import NormVerifyInteractive from './components/NormVerifyInteractive';
import GeoTimeInteractive from './components/GeoTimeInteractive';
import ClimateInteractive from './components/ClimateInteractive';
import SignatureInteractive from './components/SignatureInteractive';
import GpsWidget from './components/GpsWidget';
import WeatherWidget from './components/WeatherWidget';
import SignatureWidget from './components/SignatureWidget';

// ─── Статус-строка прогресса ──────────────────────────────────────────────────
function ProgressBar({ steps }) {
  const done = steps.filter(Boolean).length;
  return (
    <div className="flex items-center gap-2 mb-2">
      {steps.map((isDone, i) => (
        <div key={i} className={`h-1.5 flex-1 rounded-full transition-all duration-500
          ${isDone ? 'bg-emerald-500' : 'bg-slate-200'}`} />
      ))}
      <span className="text-[10px] font-bold text-slate-400 shrink-0">{done}/{steps.length}</span>
    </div>
  );
}

// ─── Блок-поле планшета ───────────────────────────────────────────────────────
function ActField({ label, value, highlight, question }) {
  return (
    <div className={`rounded-xl px-3 py-2 border ${highlight ? 'bg-amber-50 border-amber-300' : 'bg-slate-50 border-slate-200'}`}>
      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">{label}</p>
      {question
        ? <p className="text-sm font-bold text-red-500">❓</p>
        : <p className="text-sm font-semibold text-slate-800 font-mono">{value}</p>}
    </div>
  );
}

// ─── Главный компонент ────────────────────────────────────────────────────────
export default function Step3_DigitalAct({ onComplete }) {
  // Прогресс интерактивов
  const [normConfirmed, setNormConfirmed]       = useState(false);
  const [geoConfirmed, setGeoConfirmed]         = useState(false);
  const [climateConfirmed, setClimateConfirmed] = useState(false);
  const [signConfirmed, setSignConfirmed]       = useState(false);

  // Данные планшета
  const [gpsValue, setGpsValue]         = useState(null);
  const [weatherValue, setWeatherValue] = useState(null);
  const [signatory, setSignatory]       = useState(null);
  const [actSigned, setActSigned]       = useState(false);

  const [errors, setErrors] = useState([]);

  const allInteractivesDone = normConfirmed && geoConfirmed && climateConfirmed && signConfirmed;
  const actReady = allInteractivesDone && gpsValue && weatherValue;

  const handleFinish = useCallback(() => {
    const newErrors = [];
    let scorePenalty = 0;

    if (!normConfirmed)    { newErrors.push('Не верифицирована нормативная база в Акте.'); scorePenalty += 20; }
    if (!geoConfirmed)     { newErrors.push('Не пройден интерактив по геопозиции и времени.'); scorePenalty += 15; }
    if (!climateConfirmed) { newErrors.push('Не пройден интерактив по климатическим условиям.'); scorePenalty += 10; }
    if (!signConfirmed)    { newErrors.push('Не пройден интерактив по цифровой подписи.'); scorePenalty += 20; }
    if (!gpsValue)         { newErrors.push('GPS-координаты не определены.'); scorePenalty += 15; }
    if (!weatherValue)     { newErrors.push('Климатические условия не синхронизированы.'); scorePenalty += 10; }
    if (!actSigned)        { newErrors.push('Акт не подписан ЭЦП.'); scorePenalty += 25; }

    setErrors(newErrors);
    if (newErrors.length > 0) return;

    onComplete?.({
      actErrors: newErrors,
      actScorePenalty: scorePenalty,
      gpsValue,
      weatherValue,
      signatory,
      normConfirmed,
      geoConfirmed,
      climateConfirmed,
      signConfirmed,
    });
  }, [normConfirmed, geoConfirmed, climateConfirmed, signConfirmed, gpsValue, weatherValue, actSigned, signatory, onComplete]);

  return (
    <div className="relative w-full max-w-5xl mb-6">
      <style>{`
        .step-card{background:white;border-radius:20px;border:1.5px solid #e2e8f0;box-shadow:0 4px 24px rgba(0,0,0,0.07);overflow:hidden}
      `}</style>

      <div className="step-card">
        <div className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 px-4 sm:px-6 py-4 sm:py-5">
          
         
        </div>

        <div className="p-4 sm:p-6 flex flex-col gap-4 sm:gap-6">
          <ProgressBar steps={[normConfirmed, geoConfirmed, climateConfirmed, signConfirmed, !!gpsValue, !!weatherValue, actSigned]} />

          {/* ыщьу */}

          {!normConfirmed && (
            <NormVerifyInteractive onResolved={() => setNormConfirmed(true)} />
          )}
          {normConfirmed && !geoConfirmed && (
            <>
              <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-700 font-semibold">
                <span>⚖️</span> Нормативная база скорректирована верно.
              </div>
              <GeoTimeInteractive onResolved={() => setGeoConfirmed(true)} />
            </>
          )}
          {geoConfirmed && !climateConfirmed && (
            <>
              <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-700 font-semibold">
                <span>📡</span> Способ фиксации геопозиции выбран верно.
              </div>
              <ClimateInteractive onResolved={() => setClimateConfirmed(true)} />
            </>
          )}
          {climateConfirmed && !signConfirmed && (
            <>
              <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-700 font-semibold">
                <span>🌤️</span> Роль климатических условий понята верно.
              </div>
              <SignatureInteractive onResolved={() => setSignConfirmed(true)} />
            </>
          )}
          {signConfirmed && !actReady && (
            <div className="flex items-center gap-3 bg-blue-50 border border-blue-200 rounded-xl p-3 text-xs text-blue-700 font-semibold">
              <span>✍️</span> Все интерактивы пройдены. Используйте виджеты на планшете выше для определения GPS и синхронизации погоды — затем появится поле ЭЦП.
            </div>
          )}
          {actReady && !actSigned && (
            <div className="flex items-center gap-3 bg-violet-50 border border-violet-200 rounded-xl p-3 text-xs text-violet-700 font-semibold">
              <span>🔏</span> Все данные внесены. Введите ID-код и подпишите Акт ЭЦП на планшете.
            </div>
          )}

          {/* ── Планшет — электронный бланк Акта ── */}
          <div className="rounded-2xl border-2 border-slate-300 overflow-hidden shadow-lg">


            {/* Содержимое планшета */}
            <div className="bg-white p-4 sm:p-5 flex flex-col gap-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <ActField label="Место отбора" value={ACT_TEMPLATE.location} />
                <ActField
                  label="Метод отбора (нормативный документ)"
                  value={normConfirmed ? ACT_TEMPLATE.methodCorrected : ACT_TEMPLATE.method}
                  highlight={!normConfirmed}
                />
                <ActField label="GPS-координаты" value={gpsValue} question={!gpsValue} />
                <ActField label="Дата и время (UTC+6)"
                  value={new Date().toLocaleString('ru-KZ', { dateStyle: 'short', timeStyle: 'short' })} />
                <ActField label="Температура воздуха" value={weatherValue?.temp} question={!weatherValue} />
                <ActField label="Влажность / Условия"
                  value={weatherValue ? `${weatherValue.humidity} · ${weatherValue.condition}` : null}
                  question={!weatherValue} />
                <ActField label="ЭЦП исполнителя"
                  value={signatory ? `Подписано · ID: ${'*'.repeat(signatory.length - 2)}${signatory.slice(-2)}` : null}
                  question={!actSigned} />
                <ActField label="Статус документа"
                  value={actSigned ? '🟢 УТВЕРЖДЁН И ЗАБЛОКИРОВАН' : '🔴 Ожидает подписания'} />
              </div>

              {/* Виджеты */}
              <div className="flex flex-col gap-2 mt-1">
                <GpsWidget onFixed={(val) => setGpsValue(val)} />
                <WeatherWidget onFixed={(val) => setWeatherValue(val)} />
              </div>

              {/* ЭЦП — появляется только когда все интерактивы и виджеты готовы */}
              {actReady && !actSigned && (
                <SignatureWidget onSigned={(id) => { setSignatory(id); setActSigned(true); }} />
              )}

              {actSigned && (
                <div className="flex items-center justify-center gap-3 p-4 bg-emerald-50 border-2 border-emerald-400 rounded-2xl">
                  <span className="text-4xl">🟢</span>
                  <div>
                    <p className="font-black text-emerald-800">АКТ УТВЕРЖДЁН</p>
                    <p className="text-xs text-emerald-600">Подписан ЭЦП · Заблокирован · Отправлен в базу лаборатории</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ── Интерактивы ── */}
          

          {/* Справка */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs text-blue-800">
            <p className="font-bold mb-1">📖 Юридическое значение Акта отбора проб (СТ РК)</p>
            <p className="leading-relaxed text-blue-700">
              Незаполненный или неправильно оформленный Акт делает результаты всех последующих анализов
              недействительными в суде или при проверках контролирующих органов. ЭЦП криптографически
              фиксирует содержимое документа и личность исполнителя в момент подписания.
            </p>
          </div>

          {errors.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 space-y-1">
              {errors.map((err, i) => (
                <p key={i} className="text-red-600 text-xs font-bold">⚠️ {err}</p>
              ))}
            </div>
          )}

          <button
            onClick={handleFinish}
            disabled={!actSigned}
            className={`w-full font-bold py-4 rounded-2xl shadow-lg transition-all transform text-sm
              ${actSigned
                ? 'bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white hover:-translate-y-0.5'
                : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}>
            Завершить Акт и закрыть кейс →
          </button>
        </div>
      </div>
    </div>
  );
}