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

// ────────────────────────────────
function ActField({ label, value }) {
  return (
    <div className="rounded-xl px-3 py-2 border bg-slate-50 border-slate-200">
      <p className="text-[10px] font-bold uppercase text-slate-400 mb-0.5">
        {label}
      </p>
      <p className="text-sm font-mono font-semibold text-slate-800">
        {value || '—'}
      </p>
    </div>
  );
}

// ────────────────────────────────
export default function Step3_DigitalAct({ onComplete }) {
  const [answers, setAnswers] = useState({
    norm: null,
    geo: null,
    climate: null,
    sign: null,
  });

  const [gpsValue, setGpsValue] = useState(null);
  const [weatherValue, setWeatherValue] = useState(null);
  const [signatory, setSignatory] = useState(null);
  const [actSigned, setActSigned] = useState(false);

  const [errors, setErrors] = useState([]);

  const updateAnswer = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const quizReady =
    answers.norm && answers.geo && answers.climate && answers.sign;

  const handleFinish = useCallback(() => {
    const newErrors = [];

    if (!answers.norm) newErrors.push('Выберите ответ для вопроса 1 (Норматив)');
    if (!answers.geo) newErrors.push('Выберите ответ для вопроса 2 (Геолокация)');
    if (!answers.climate) newErrors.push('Выберите ответ для вопроса 3 (Климат)');
    if (!answers.sign) newErrors.push('Выберите ответ для вопроса 4 (Подпись)');

    if (!gpsValue) newErrors.push('Определите GPS координаты');
    if (!weatherValue) newErrors.push('Синхронизируйте погодные данные');
    if (!actSigned) newErrors.push('Подпишите акт ЭЦП');

    setErrors(newErrors);
    if (newErrors.length > 0) return;

    // === REAL SCORING LOGIC ===
    let score = 7;
    const maxPoints = 7;
    const penaltyPerMistake = 1; // 4 questions = 25 points each

    const report = [];

    // Check each answer
    const questions = [
      { key: 'norm', label: 'Нормативная база' },
      { key: 'geo', label: 'Геолокация и время' },
      { key: 'climate', label: 'Климатические условия' },
      { key: 'sign', label: 'Электронная подпись' }
    ];

    questions.forEach(({ key, label }) => {
      const answer = answers[key];
      const isCorrect = answer?.correct === true || answer?.selected === 'correct'; // adjust according to your component return format

      report.push({
        question: key,
        selected: answer?.selected || answer,
        correct: isCorrect,
        text: `${label}: ${answer?.text || answer?.selected || answer}`
      });

      if (!isCorrect) {
        score -= penaltyPerMistake;
      }
    });

    // GPS, Weather, Signature are mandatory but always give full points if completed
    report.push(
      { question: "gps", selected: gpsValue, correct: true, text: `Пройдено!  GPS: ${gpsValue}` },
      { question: "weather", selected: weatherValue, correct: true, text: `Пройдено!  Погода: ${weatherValue?.temp}°C` },
      { question: "signature", selected: signatory, correct: true, text: `Пройдено!  Подписано ЭЦП: ${signatory}` }
    );

    const finalScore = Math.max(0, score);

    onComplete?.({
      step: 3,
      score: finalScore,
      total: maxPoints,
      passed: finalScore >= 6,        
      report: report,
      gpsValue,
      weatherValue,
      signatory,
    });
  }, [answers, gpsValue, weatherValue, actSigned, signatory, onComplete]);

  return (
    <div className="w-full max-w-5xl">
      <style>{`
        .step-card{background:white;border-radius:20px;border:1.5px solid #e2e8f0;box-shadow:0 4px 24px rgba(0,0,0,0.07);overflow:hidden}
      `}</style>
      <div className="bg-white rounded-2xl border shadow-lg p-4">

        <div className="space-y-4">
          <NormVerifyInteractive onResolved={(v) => updateAnswer('norm', v)} />
          <GeoTimeInteractive onResolved={(v) => updateAnswer('geo', v)} />
          <ClimateInteractive onResolved={(v) => updateAnswer('climate', v)} />
          <SignatureInteractive onResolved={(v) => updateAnswer('sign', v)} />
        </div>

        <div className={`mt-5 border rounded-2xl p-4 transition-all bg-slate-50 ${!quizReady ? 'opacity-60 grayscale pointer-events-none' : ''}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <ActField label="Место отбора" value={ACT_TEMPLATE.location} />
            <ActField label="Метод отбора" value={ACT_TEMPLATE.method} />
            <ActField label="GPS" value={gpsValue} />
            <ActField label="Погода" value={weatherValue ? `${weatherValue.temp}°C` : null} />
            <ActField label="ЭЦП" value={signatory ? 'Подписано' : null} />
          </div>

          <div className="mt-3 space-y-2">
            <GpsWidget onFixed={setGpsValue} />
            <WeatherWidget onFixed={setWeatherValue} />
          </div>

          {!actSigned && gpsValue && weatherValue && quizReady && (
            <SignatureWidget onSigned={(id) => { setSignatory(id); setActSigned(true); }} />
          )}

          {actSigned && (
            <div className="mt-3 p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-700 font-bold">
              Акт подписан ✔
            </div>
          )}
        </div>

        <button
          onClick={handleFinish}
          className="mt-5 w-full py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800"
        >
          Завершить
        </button>

        {errors.length > 0 && (
          <div className="mt-4 bg-red-50 border border-red-200 rounded-xl p-3">
            {errors.map((e, i) => <p key={i} className="text-red-600 text-xs">• {e}</p>)}
          </div>
        )}
      </div>
    </div>
  );
}