'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FaucetSVG } from '../../components/FaucetSVG';

export default function Step5_ChemSampling({ logs, onComplete }) {
  const [currentFlow, setCurrentFlow] = useState(0);
  const [rinseCount, setRinseCount] = useState(0);
  const [containerPos, setContainerPos] = useState({ left: 380, top: 160 });
  const [fillLevel, setFillLevel] = useState(0);
  const [tiltAngle, setTiltAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isTilting, setIsTilting] = useState(false);
  const [isPouring, setIsPouring] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [hint, setHint] = useState('');
  const [completed, setCompleted] = useState(false);
  const [phase, setPhase] = useState('rinsing'); // 'rinsing' | 'sampling'
  const [lidAttached, setLidAttached] = useState(false);
  const [closeModalOpen, setCloseModalOpen] = useState(false);
  const [tiltStartX, setTiltStartX] = useState(0);

  const containerRef = useRef(null);
  const fillIntervalRef = useRef(null);
  const pourIntervalRef = useRef(null);

  const CONTAINER_W = 33;
  const CONTAINER_H = 73;

  const sideStreamWidth = Math.max(2, currentFlow * 5);

  // Добавьте этот реф и эффект синхронизации
  const fillLevelRef = useRef(0);
  useEffect(() => {
    fillLevelRef.current = fillLevel;
  }, [fillLevel]);

  const isUnderStream = useCallback(() => {
    const neckX = containerPos.left + CONTAINER_W / 2;
    return currentFlow > 0.05 && neckX > 155 && neckX < 255;
  }, [containerPos, currentFlow]);

  const getHint = useCallback(() => {
    if (phase === 'sampling') {
      if (fillLevel < 1) return 'Опустите емкость под струю, наклонив под углом';
      if (!lidAttached) return 'Кликните по емкости, чтобы закрутить крышку';
      return 'Нажмите кнопку для завершения';
    }
    if (completed || rinseCount >= 3) return 'Этап ополаскивания завершен';
    if (fillLevel < 0.99) return 'Перетащите емкость под струю воды';
    if (isUnderStream()) return 'Отведите емкость в сторону';
    return 'Возьмите емкость за нижнюю часть и наклоните для слива';
  }, [phase, fillLevel, lidAttached, completed, rinseCount, isUnderStream]);

  // Update hint
  useEffect(() => {
    setHint(getHint());
  }, [getHint]);

  // Fill logic
  const startFill = () => {
    if (fillIntervalRef.current || isPouring || completed) return;
    fillIntervalRef.current = setInterval(() => {
      // Рассчитываем значение напрямую через реф
      const currentVal = fillLevelRef.current;
      const next = Math.min(1, currentVal + 0.07);
      
      fillLevelRef.current = next; // Синхронно обновляем реф
      setFillLevel(next);          // Безопасное плоское обновление стейта

      if (next >= 1) {
        if (fillIntervalRef.current) {
          clearInterval(fillIntervalRef.current);
          fillIntervalRef.current = null;
        }
      }
    }, 110);
  };

  const stopFill = () => {
    if (fillIntervalRef.current) {
      clearInterval(fillIntervalRef.current);
      fillIntervalRef.current = null;
    }
  };

  // Pour logic
  const isPouringRef = useRef(false);

  const startPour = () => {
    if (pourIntervalRef.current || isPouringRef.current || completed) return;
    isPouringRef.current = true;
    setIsPouring(true);
    pourIntervalRef.current = setInterval(() => {
      // Рассчитываем значение напрямую через реф
      const currentVal = fillLevelRef.current;
      const next = Math.max(0, currentVal - 0.1);
      
      fillLevelRef.current = next; // Синхронно обновляем реф
      setFillLevel(next);          // Безопасное плоское обновление стейта

      if (next <= 0) {
        if (pourIntervalRef.current) {
          clearInterval(pourIntervalRef.current);
          pourIntervalRef.current = null;
        }
        isPouringRef.current = false;
        setIsPouring(false);
        setTiltAngle(0);
        
        // Сработает строго один раз, так как находится вне коллбека prev => ...
        setRinseCount(prevCount => prevCount + 1);
      }
    }, 90);
  };
  // Эффект переключения фазы при достижении 3 ополаскиваний
  useEffect(() => {
    if (rinseCount >= 3) {
      setPhase('sampling');
      setContainerPos({ left: 380, top: 160 });
      setFillLevel(0);
      fillLevelRef.current = 0; // Сбрасываем реф синхронно
      setTiltAngle(0);
      setLidAttached(false);
    }
  }, [rinseCount]);

  // Mouse handlers
  const handleContainerMouseDown = (e) => {
  if (isPouring || completed) return;
  const rect = containerRef.current ? containerRef.current.getBoundingClientRect() : { top: 0, left: 0, height: CONTAINER_H, width: CONTAINER_W };
  const relY = e.clientY - rect.top;
  const isBottomGrab = relY > rect.height * 0.55;

  // В фазе sampling наклон всегда мягкий — слив запрещён вообще
  if (phase === 'sampling') {
    setIsTilting(true);
    setIsDragging(false);
    setDragOffset({
      x: e.clientX - containerPos.left,
      y: e.clientY - containerPos.top,
    });
    setTiltStartX(e.clientX);
    return;
  }

  if (fillLevel >= 0.99 && !isUnderStream() && isBottomGrab) {
    setIsTilting(true);
    setIsDragging(false);
  } else {
    setIsDragging(true);
    setIsTilting(false);
    setDragOffset({
      x: e.clientX - containerPos.left,
      y: e.clientY - containerPos.top,
    });
  }
};

  const handleContainerClick = (e) => {
    e.stopPropagation();
    if (phase === 'sampling' && fillLevel >= 1 && !lidAttached && !isPouring && !isTilting && !isDragging) {
      setCloseModalOpen(true);
    }
  };

  const handleMouseMove = useCallback((e) => {
  if (isDragging) {
    const newLeft = Math.max(60, Math.min(520, e.clientX - dragOffset.x));
    const newTop = Math.max(60, Math.min(380, e.clientY - dragOffset.y));
    setContainerPos({ left: newLeft, top: newTop });

    const neckXCheck = newLeft + CONTAINER_W / 2;
    const under = currentFlow > 0.05 && neckXCheck > 155 && neckXCheck < 255;
    const properForSampling = phase !== 'sampling' || Math.abs(tiltAngle) > 10;
    if (under && properForSampling && fillLevel < 1 && !isPouring && !completed) {
      startFill();
    }
  }

  if (isTilting) {
    if (!containerRef.current) return;

    if (phase === 'sampling') {
      // Мягкий наклон без слива на протяжении всей фазы sampling
      const deltaX = e.clientX - tiltStartX;
      const angle = Math.max(-30, Math.min(30, deltaX * 0.3));
      setTiltAngle(angle);

      const newLeft = Math.max(60, Math.min(520, e.clientX - dragOffset.x));
      const newTop = Math.max(60, Math.min(380, e.clientY - dragOffset.y));
      setContainerPos({ left: newLeft, top: newTop });

      const neckXCheck = newLeft + CONTAINER_W / 2;
      const under = currentFlow > 0.05 && neckXCheck > 155 && neckXCheck < 255;
      if (under && Math.abs(angle) > 10 && fillLevel < 1 && !isPouring && !completed) {
        startFill();
      }
      return; 
    }

    // РАСЧЕТ ДЛЯ ФАЗЫ ОПОЛАСКИВАНИЯ (RINSING):
    // 1. Получаем стабильные координаты родительского контейнера (он не вращается)
    const parentRect = containerRef.current.parentElement.getBoundingClientRect();
    
    // 2. Рассчитываем стабильную точку опоры (горлышко) в глобальных координатах
    const neckX = parentRect.left + containerPos.left + CONTAINER_W / 2;
    const neckY = parentRect.top + containerPos.top;

    // 3. Вычисляем вектор от горлышка до мыши
    const dx = e.clientX - neckX;
    const dy = e.clientY - neckY;

    // 4. Математический маятник: используем Math.abs(dy), чтобы низ флакона шел строго за мышью
    let angle = Math.atan2(dx, Math.abs(dy)) * (180 / Math.PI);
    angle = Math.max(-120, Math.min(120, angle));
    
    setTiltAngle(angle);

    if (Math.abs(angle) > 75 && fillLevelRef.current > 0.01 && !isPouringRef.current) {
      startPour();
    }
  }
}, [isDragging, isTilting, dragOffset, currentFlow, fillLevel, isPouring, completed, phase, tiltAngle, tiltStartX, containerPos]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    if (isTilting) {
      setIsTilting(false);
      if (!isPouring) {
        setTiltAngle(0);
      }
    }
  }, [isTilting, isPouring]);

  // Global listeners
  useEffect(() => {
    if (isDragging || isTilting) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isTilting, handleMouseMove, handleMouseUp]);

  // Auto fill / stop based on position
  useEffect(() => {
    const neckXCheck = containerPos.left + CONTAINER_W / 2;
    const under = currentFlow > 0.05 && neckXCheck > 155 && neckXCheck < 255;
    const properTilt = phase !== 'sampling' || Math.abs(tiltAngle) > 10;
    if (under && properTilt && fillLevel < 1 && !isPouring && !completed) {
      startFill();
    } else if (!under || !properTilt) {
      stopFill();
    }
  }, [containerPos, currentFlow, fillLevel, isPouring, completed, CONTAINER_W, phase, tiltAngle]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (fillIntervalRef.current) clearInterval(fillIntervalRef.current);
      if (pourIntervalRef.current) clearInterval(pourIntervalRef.current);
    };
  }, []);

  const handleComplete = () => {
    if (phase === 'sampling' && lidAttached) {
      onComplete({
        chemRinseCompleted: true,
        chemRinseCount: rinseCount,
        chemSampleFilled: true,
        chemSampleSuccess: true,
      });
    }
  };

  const underStream = isUnderStream();

  return (
    <div className="bg-white w-full max-w-6xl rounded-xl shadow-xl border border-slate-200 overflow-hidden mb-6 flex flex-col lg:flex-row animate-fade-in">
      {/* LEFT INSTRUCTIONS */}
      <div className="w-full lg:w-1/3 p-8 border-r border-slate-100 bg-slate-50 flex flex-col gap-6">
        <div>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">ШАГ 2.5</span>
          <h2 className="text-2xl font-bold text-slate-800 mt-3">Набор пробы на химический анализ</h2>
          <p className="text-slate-500 text-xs mt-1">{phase === 'rinsing' ? 'Ополосните полимерную емкость 2.0 дм³ три раза.' : 'Наберите пробу до краев, вытеснив воздух.'}</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3 text-xs">
          <ol className="list-decimal pl-4 space-y-1.5 text-slate-600">
            {phase === 'rinsing' ? (
              <>
                <li>Возьмите полимерную емкость (2.0 дм³).</li>
                <li>Ополосните емкость и крышку отбираемой водой из крана 3 раза.</li>
                <li>Опустите емкость под струю, наклонив под углом.</li>
                <li>Наберите воду под пробку (до краев), вытесняя воздух.</li>
              </>
            ) : (
              <>
                <li>Опустите емкость под струю, наклонив под углом.</li>
                <li>Наберите воду до краев, вытесняя воздух.</li>
                <li>Плотно закрутите крышку.</li>
              </>
            )}
          </ol>
        </div>

        {phase === 'rinsing' && (
          <div className="text-center font-bold text-lg">
            Ополаскивание: {rinseCount}/3
          </div>
        )}
      </div>

      {/* CENTER - FAUCET + CONTAINER */}
      <div className="w-full lg:w-1/3 p-6 bg-white flex flex-col items-center border-r border-slate-100 min-h-[520px] relative">
        <div className="w-full flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-slate-400">КРАН</span>
          <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">НАПОР: {Math.round(currentFlow * 100)}%</span>
        </div>

        <div className="w-full flex-1 flex items-center justify-center relative">
          <FaucetSVG
            aeratorRemoved={true}
            spotsLeft={0}
            isWiping={false}
            onRemoveAerator={() => {}}
            onWipeSpot={() => {}}
            glovesEquipped={true}
            blocked={false}
            onFlowChange={setCurrentFlow}
          />

          {/* Polymer container 2.0L */}
          <div
            ref={containerRef}
            className={`absolute border-[3px] border-slate-500 bg-white shadow-lg flex flex-col overflow-hidden select-none ${phase === 'sampling' && fillLevel >= 1 && !lidAttached ? 'cursor-pointer' : 'cursor-grab'}`}
            style={{
              left: containerPos.left,
              top: containerPos.top,
              width: CONTAINER_W,
              height: CONTAINER_H,
              borderRadius: '6px 6px 10px 10px',
              transform: `rotate(${tiltAngle}deg)`,
              transformOrigin: '50% 0%',
              zIndex: 10,
              transition: (isTilting || isPouring) ? 'none' : 'transform 0.15s ease-out',
            }}
            onMouseDown={handleContainerMouseDown}
            onClick={handleContainerClick}
            onMouseEnter={() => setHint(getHint())}
            onMouseLeave={() => setHint('')}
          >
            {/* Water fill */}
            <div
              className="absolute bottom-0 left-0 w-full bg-sky-400"
              style={{
                height: `${fillLevel * 100}%`,
                transition: isPouring ? 'none' : 'height 0.1s linear',
              }}
            />
            {/* Lid on neck, once attached */}
            {lidAttached && (
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-5 h-2 bg-gray-300 border border-slate-500 rounded z-20" />
            )}
            <div className="absolute bottom-1 right-1 text-[5px] text-slate-600 font-mono">2.0L</div>
          </div>

          {/* Pour stream visual */}
          {isPouring && fillLevel > 0 && (
            <div
              className="absolute bg-sky-400/80 pointer-events-none"
              style={{
                left: containerPos.left + CONTAINER_W / 2 - 2,
                top: containerPos.top + 8,
                width: 4,
                height: 130,
                zIndex: 4,
              }}
            />
          )}

          {/* Hint */}
          {hint && (
            <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[10px] px-3 py-0.5 rounded-full shadow pointer-events-none z-20 whitespace-nowrap">
              {hint}
            </div>
          )}
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/3 p-8 bg-slate-50 flex flex-col">
        <div className="flex-1">
          <h3 className="text-xs font-bold text-slate-400 uppercase mb-3">Чек-лист этапа</h3>
          <div className="space-y-3 text-sm">
            <div className={`p-3 rounded-xl border flex items-center justify-between ${rinseCount >= 3 ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-slate-200'}`}>
              <span>1. Ополаскивание емкости</span>
              <span className="font-mono text-xs">{rinseCount}/3 {rinseCount >= 3 ? '✓' : ''}</span>
            </div>
            <div className={`p-3 rounded-xl border flex items-center justify-between ${phase === 'sampling' && fillLevel >= 1 ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-slate-200'}`}>
              <span>2. Набор пробы воды</span>
              <span>{phase === 'sampling' && fillLevel >= 1 ? '✓' : ''}</span>
            </div>
            <div className={`p-3 rounded-xl border flex items-center justify-between ${lidAttached ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-slate-200'}`}>
              <span>3. Закручивание крышки</span>
              <span>{lidAttached ? '✓' : ''}</span>
            </div>
          </div>
        </div>

        <div className="mt-4">
          {phase === 'rinsing' && rinseCount >= 3 && (
            <button 
              onClick={() => setPhase('sampling')}
              className="w-full py-4 rounded-2xl font-bold text-sm bg-emerald-700 text-white"
            >
              Начать набор пробы →
            </button>
          )}
          {phase === 'sampling' && lidAttached && (
            <button 
              onClick={handleComplete}
              className="w-full py-4 rounded-2xl font-bold text-sm bg-emerald-700 text-white"
            >
              Завершить отбор пробы →
            </button>
          )}
          {phase === 'sampling' && !lidAttached && (
            <div className="text-center text-xs text-slate-500">Наполните емкость и закрутите крышку</div>
          )}
        </div>
      </div>

      {/* CLOSE MODAL */}
      {closeModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70" onClick={() => setCloseModalOpen(false)}>
          <div className="bg-white rounded-2xl p-8 w-full max-w-md mx-4 relative" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setCloseModalOpen(false)} 
              className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-2xl leading-none text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Закрыть"
            >
              ×
            </button>
            <h3 className="font-bold text-lg mb-1">Закрытие полимерной емкости</h3>
            <p className="text-sm text-slate-600 mb-6">Плотно закрутите крышку, чтобы вытеснить остатки воздуха и предотвратить контаминацию.</p>

            <div className="flex items-center justify-center gap-8 mb-6">
              {/* Увеличенная емкость */}
              <div className="relative w-40 h-64 border-4 border-slate-500 bg-white overflow-hidden flex-shrink-0" style={{ borderRadius: '10px 10px 16px 16px' }}>
                <div 
                  className="absolute bottom-0 left-0 w-full bg-sky-400"
                  style={{ height: `${fillLevel * 100}%` }}
                />
                {lidAttached && (
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-16 h-5 bg-gray-300 border-2 border-slate-500 rounded z-20" />
                )}
                <div className="absolute bottom-2 right-2 text-[9px] text-slate-600 font-mono">2.0L</div>
              </div>

              {/* Крышка рядом — клик чтобы надеть */}
              <div className="flex flex-col gap-4 text-center">
                {!lidAttached && (
                  <div 
                    onClick={() => setLidAttached(true)}
                    className="w-24 h-7 bg-gray-300 border-2 border-slate-500 rounded cursor-pointer hover:scale-105 transition-all flex items-center justify-center shadow"
                    title="Надеть крышку"
                  >
                    <span className="text-[10px] text-slate-700 font-bold">КРЫШКА</span>
                  </div>
                )}
                {lidAttached && (
                  <div className="w-24 h-7 bg-gray-300 border-2 border-slate-500 rounded opacity-40 flex items-center justify-center">
                    <span className="text-[10px] text-slate-700 font-bold">КРЫШКА ✓</span>
                  </div>
                )}
              </div>
            </div>

            {lidAttached && (
              <button 
                onClick={() => setCloseModalOpen(false)}
                className="w-full py-3 bg-emerald-700 text-white rounded-2xl font-bold hover:bg-emerald-800 transition-all"
              >
                Завершить закрытие емкости
              </button>
            )}
            <p className="text-[10px] text-center text-slate-500 mt-3">Кликните по крышке, чтобы плотно закрутить ее на горлышке.</p>
          </div>
        </div>
      )}
    </div>
  );
}