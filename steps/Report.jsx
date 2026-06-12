// steps/Report.js
import React from 'react';

export default function Report({ logs, onReset }) {
  // Вычисляем оценку за подготовку крана (из 100 вычитаем штрафы)
  const prepScore = Math.max(0, 100 - logs.prepScorePenalty);

  // Вычисляем средний балл за все 4 пройденных этапа
  const averageScore = Math.round((logs.chemScore + logs.bioScore + logs.kitScore + prepScore) / 4);

  return (
    <div className="bg-white w-full max-w-5xl rounded-xl shadow-xl border border-slate-200 overflow-hidden mb-6 animate-fade-in">
      
      {/* Шапка отчета */}
      <div className="bg-purple-50 px-8 py-6 border-b border-purple-100 text-center">
        <span className="text-5xl block mb-4">📋</span>
        <h2 className="text-3xl font-bold text-purple-900">Итоговый отчет симуляции</h2>
        <p className="text-purple-700 mt-2 font-medium">Разбор ваших действий на этапе предвыездной подготовки и работы на объекте</p>
      </div>
      
      <div className="p-8">
        
        {/* Виджеты оценок (теперь их 5 штук!) */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          
          <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-5 text-center w-full sm:w-44 shadow-inner">
            <p className="text-slate-500 font-bold mb-1 text-[10px] uppercase tracking-wider">Хим. Анализ</p>
            <div className={`text-3xl font-black ${logs.chemScore === 100 ? 'text-green-600' : logs.chemScore >= 50 ? 'text-amber-500' : 'text-red-600'}`}>
              {logs.chemScore}/100
            </div>
            <p className="text-[10px] font-semibold mt-2 text-slate-600">
              {logs.chemFound1 && logs.chemFound2 ? "🌟 Все варианты" : "Частичный успех"}
            </p>
          </div>

          <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-5 text-center w-full sm:w-44 shadow-inner">
            <p className="text-slate-500 font-bold mb-1 text-[10px] uppercase tracking-wider">Бактериология</p>
            <div className={`text-3xl font-black ${logs.bioScore === 100 ? 'text-green-600' : logs.bioScore >= 50 ? 'text-amber-500' : 'text-red-600'}`}>
              {logs.bioScore}/100
            </div>
            <p className="text-[10px] font-semibold mt-2 text-slate-600">
              {logs.bioFound1 && logs.bioFound2 ? "🌟 Все варианты" : "Частичный успех"}
            </p>
          </div>

          <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-5 text-center w-full sm:w-44 shadow-inner">
            <p className="text-slate-500 font-bold mb-1 text-[10px] uppercase tracking-wider">Полевая сумка</p>
            <div className={`text-3xl font-black ${logs.kitScore === 100 ? 'text-green-600' : logs.kitScore >= 50 ? 'text-amber-500' : 'text-red-600'}`}>
              {logs.kitScore}/100
            </div>
            <p className="text-[10px] font-semibold mt-2 text-slate-600">
              {logs.kitErrors.length === 0 ? "🌟 Без ошибок" : `Ошибок: ${logs.kitErrors.length}`}
            </p>
          </div>

          {/* НОВЫЙ ВИДЖЕТ: ПОДГОТОВКА КРАНА */}
          <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-5 text-center w-full sm:w-44 shadow-inner">
            <p className="text-slate-500 font-bold mb-1 text-[10px] uppercase tracking-wider">Подготовка крана</p>
            <div className={`text-3xl font-black ${prepScore === 100 ? 'text-green-600' : prepScore >= 50 ? 'text-amber-500' : 'text-red-600'}`}>
              {prepScore}/100
            </div>
            <p className="text-[10px] font-semibold mt-2 text-slate-600">
              {logs.prepErrors.length === 0 ? "🌟 Без ошибок" : `Ошибок: ${logs.prepErrors.length}`}
            </p>
          </div>

          <div className="bg-purple-900 border-2 border-purple-950 rounded-2xl p-5 text-center w-full sm:w-44 shadow-md text-white">
            <p className="text-purple-300 font-bold mb-1 text-[10px] uppercase tracking-wider">Итоговый балл</p>
            <div className="text-4xl font-black">
              {averageScore}
            </div>
            <p className="text-[10px] font-semibold mt-2 text-purple-200">
              {averageScore >= 80 ? "🎓 Отличный допуск" : averageScore >= 50 ? "⚠️ Переподготовка" : "❌ Не допущен к работе"}
            </p>
          </div>

        </div>

        {/* ДЕТАЛИЗАЦИЯ ХИМИИ */}
        <h3 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">1. Разбор (Химический анализ):</h3>
        <div className="space-y-3 mb-8">
          {logs.chemResults.map((res) => (
            <div key={res.id} className={`p-4 rounded-xl border ${res.isPerfect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
              <p className={`font-bold text-md mb-2 flex items-center ${res.isPerfect ? 'text-green-800' : 'text-red-800'}`}>
                <span className="mr-2">{res.isPerfect ? '✅' : '❌'}</span> Вариант {res.id}: {res.name}
              </p>
              {!res.isPerfect && (
                <ul className="space-y-1">
                  {res.errs.map((err, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-700">
                      <span className="text-red-500 mr-2">•</span>{err}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* ДЕТАЛИЗАЦИЯ БИО */}
        <h3 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">2. Разбор (Бактериологический анализ):</h3>
        <div className="space-y-3 mb-8">
          {logs.bioResults.map((res) => (
            <div key={res.id} className={`p-4 rounded-xl border ${res.isPerfect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
              <p className={`font-bold text-md mb-2 flex items-center ${res.isPerfect ? 'text-green-800' : 'text-red-800'}`}>
                <span className="mr-2">{res.isPerfect ? '✅' : '❌'}</span> Вариант {res.id}: {res.name}
              </p>
              {!res.isPerfect && (
                <ul className="space-y-1">
                  {res.errs.map((err, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-700">
                      <span className="text-red-500 mr-2">•</span>{err}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* ДЕТАЛИЗАЦИЯ ПОЛЕВОЙ СУМКИ */}
        <h3 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">3. Разбор (Комплектация полевой сумки):</h3>
        <div className="space-y-3 mb-8">
          {logs.kitErrors.length === 0 ? (
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
                {logs.kitErrors.map((err, idx) => (
                  <li key={idx} className="flex items-start bg-white p-3 rounded-lg border border-red-100 shadow-sm text-sm">
                    <span className="text-red-500 font-bold mr-3">•</span>
                    <span className="text-slate-700 font-medium">{err}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* ДЕТАЛИЗАЦИЯ ПОДГОТОВКИ КРАНА */}
        <h3 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">4. Разбор (Подготовка точки отбора):</h3>
        <div className="space-y-3 mb-8">
          {logs.prepErrors.length === 0 ? (
            <div className="bg-green-50 border border-green-200 p-5 rounded-xl text-green-800 flex items-start">
              <span className="text-2xl mr-3">✅</span>
              <div>
                <p className="font-bold text-lg">Точка отбора подготовлена по стандартам</p>
                <p className="mt-1 text-sm">Вы не забыли надеть защиту, открутили аэратор и тщательно очистили металл носика крана от ржавчины.</p>
              </div>
            </div>
          ) : (
            <div className="bg-red-50 border border-red-200 p-5 rounded-xl">
              <p className="font-bold text-red-800 text-lg mb-3 flex items-center">
                <span className="mr-2">❌</span> Нарушения при подготовке крана:
              </p>
              <ul className="space-y-2">
                {logs.prepErrors.map((err, idx) => (
                  <li key={idx} className="flex items-start bg-white p-3 rounded-lg border border-red-100 shadow-sm text-sm">
                    <span className="text-red-500 font-bold mr-3">•</span>
                    <span className="text-slate-700 font-medium">{err}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Кнопка сброса */}
        <div className="flex justify-center border-t pt-6">
          <button 
            onClick={onReset}
            className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-8 rounded-xl shadow-md transition-all transform hover:-translate-y-1"
          >
            🔄 Начать симуляцию заново
          </button>
        </div>
        
      </div>
    </div>
  );
}