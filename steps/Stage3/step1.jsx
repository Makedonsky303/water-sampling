  // steps/Stage3/Step1_Marking.jsx
  'use client';
  import React, { useState, useCallback } from 'react';
  import { CONTAINERS, MARKER_OPTIONS, CHECKLIST_OPTIONS, FOIL_PLACEMENT_OPTIONS, ENCRYPTION_OPTIONS } from './data/markingData';
  import LabelForm from './components/labelForm';
  import ContainerCard from './components/containerCard';
  import ChecklistInteractive from './components/checklistInteractive';
  import MarkerChoiceInteractive from './components/markerchoiceInteractive';
  import FoilPlacementInteractive from './components/foilplacementInteractive';
  import EncryptionInteractive from './components/EncryptionInteractive';



  export default function Step1_Marking({ onComplete }) {
    // Состояния ответов на тесты
    const [markerId, setMarkerId] = useState(null);
    // const [labelsPlacement, setLabelsPlacement] = useState({});
    const [encryptionId, setEncryptionId] = useState(null);
    const [foilPlacementId, setFoilPlacementId] = useState(null);
    const [checklist, setChecklist] = useState({});
    const [labelsData, setLabelsData] = useState({});

    // Техническое состояние модальных окон и итогов
    const [activeFormId, setActiveFormId] = useState(null);
    const [quizResult, setQuizResult] = useState(null);

    // Проверка готовности формы к отправке
    const isAllFormsFilled = CONTAINERS.every(c => !!labelsData[c.id]);
    // const isAllPlacementsSelected = CONTAINERS.every(c => !!labelsPlacement[c.id]);
    const isChecklistTouched = Object.keys(checklist).length > 0;

    const isReadyToSubmit = 
      !!markerId && 
      !!encryptionId && 
      !!foilPlacementId && 
      Object.keys(checklist).length > 0 && 
      CONTAINERS.every(c => !!labelsData[c.id]);

    const handleSubmitTest = () => {
      let score = 0;
      const report = [];
      const totalQuestions = 5;

      // 1. Проверка инструмента
      const markerOpt = MARKER_OPTIONS.find(o => o.id === markerId);
      if (markerOpt?.correct) { score++; report.push({ q: 'Инструмент разметки', success: true, text: 'Верно! Выбран перманентный маркер.' }); }
      else { report.push({ q: 'Инструмент разметки', success: false, text: markerOpt?.feedback || 'Неверно.' }); }

      // // 2. Проверка локации размещения этикеток
      // const hasPlacementError = Object.entries(labelsPlacement).some(([_, zone]) => zone !== 'body');
      // if (!hasPlacementError) { score++; report.push({ q: 'Размещение этикеток', success: true, text: 'Правильно! Этикетки наклеены на тело емкостей.' }); }
      // else { report.push({ q: 'Размещение этикеток', success: false, text: 'Ошибка. Наклеивание на фольгу недопустимо.' }); }

      // 3. Проверка шифрования
      const encryptOpt = ENCRYPTION_OPTIONS.find(o => o.id === encryptionId);
      if (encryptOpt?.correct) { score++; report.push({ q: 'Шифрование пробы', success: true, text: 'Верно! Применен сквозной код.' }); }
      else { report.push({ q: 'Шифрование пробы', success: false, text: encryptOpt?.feedback || 'Неверно.' }); }

      // 4. Проверка подвоха с фольгой
      const foilOpt = FOIL_PLACEMENT_OPTIONS.find(o => o.id === foilPlacementId);
      if (foilOpt?.correct) { score++; report.push({ q: 'Флакон для бактериологии', success: true, text: 'Верно! Промаркирована стенка флакона.' }); }
      else { report.push({ q: 'Флакон для бактериологии', success: false, text: foilOpt?.feedback || 'Ошибка.' }); }

      // 5. Проверка чек-листа реквизитов
      const wrongChecklist = CHECKLIST_OPTIONS.filter(opt => !!checklist[opt.id] !== opt.required);
      if (wrongChecklist.length === 0) { score++; report.push({ q: 'Обязательные реквизиты', success: true, text: 'Идеально! Состав полей утвержден стандартами РК.' }); }
      else { report.push({ q: 'Обязательные реквизиты', success: false, text: 'Ошибка в составе обязательных реквизитов.' }); }

      const passed = score >= 4;
      const finalResult = { score, total: totalQuestions, report, passed };
      
      setQuizResult(finalResult);
      if (onComplete) onComplete(finalResult);
    };

    return (
      <div className="w-full max-w-4xl space-y-6">
        {/* Теоретический блок вопросов */}
        <MarkerChoiceInteractive selectedId={markerId} onChange={setMarkerId} />
        <EncryptionInteractive selectedId={encryptionId} onChange={setEncryptionId} />
        <FoilPlacementInteractive selectedId={foilPlacementId} onChange={setFoilPlacementId} />
        <ChecklistInteractive checked={checklist} onChange={setChecklist} />

        {/* САМЫЙ ПОСЛЕДНИЙ ПРАКТИЧЕСКИЙ ШАГ: Заполнение карточек этикеток */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3">
          <h3 className="font-bold text-slate-800 text-sm">Цифровое заполнение этикеток</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Кликните по каждой емкости ниже, чтобы заполнить данные этикетки. Время должно строго соответствовать формату 24ч (например: 08:05, 16:40).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {CONTAINERS.map(c => (
              <ContainerCard 
                key={c.id} 
                container={c} 
                labelData={labelsData[c.id]} 
                onOpenForm={() => setActiveFormId(c.id)} 
              />
            ))}
          </div>
        </div>

        {/* Финальная кнопка сдачи */}
        <div className="pt-2">
          <button
            type="button"
            disabled={!isReadyToSubmit}
            onClick={handleSubmitTest}
            className={`w-full font-bold py-4 rounded-xl text-sm shadow-md transition-all
              ${isReadyToSubmit 
                ? 'bg-slate-950 text-white hover:bg-slate-900 cursor-pointer' 
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
          >
            {isReadyToSubmit ? 'Отправить результаты тестирования' : 'Пожалуйста, выполните все разделы теста и заполните этикетки выше'}
          </button>
        </div>

        {/* Модальное окно формы */}
        {activeFormId && (
          <LabelForm 
            container={CONTAINERS.find(c => c.id === activeFormId)}
            initialData={labelsData[activeFormId]}
            onClose={() => setActiveFormId(null)}
            onSave={(data) => {
              setLabelsData(prev => ({ ...prev, [activeFormId]: data }));
              setActiveFormId(null);
            }}
          />
        )}

        {/* Итоговый репорт на экране */}
        {quizResult && (
          <div className={`p-6 rounded-2xl border-2 mt-4 space-y-4 shadow-sm
            ${quizResult.passed ? 'bg-emerald-50/60 border-emerald-300' : 'bg-red-50/60 border-red-300'}`}>
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-base text-slate-800">Результаты тестирования</h2>
              <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${quizResult.passed ? 'bg-emerald-600' : 'bg-red-600'}`}>
                {quizResult.passed ? 'Пройдено успешно' : 'Не сдано'}
              </span>
            </div>
            <p className="text-sm font-semibold text-slate-700">Итоговый результат: {quizResult.score} из {quizResult.total} баллов.</p>
            <div className="space-y-2 border-t pt-3">
              {quizResult.report.map((item, index) => (
                <div key={index} className="flex items-start gap-2 text-xs">
                  <span>{item.success ? '✅' : '❌'}</span>
                  <div>
                    <strong>{item.q}:</strong> <span className={item.success ? 'text-slate-700' : 'text-red-700 font-medium'}>{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }