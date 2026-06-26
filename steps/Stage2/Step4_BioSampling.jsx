'use client';
import React, { useState, useEffect, useRef } from 'react';
import { FaucetSVG } from '../../components/FaucetSVG';
import MinecraftInventory from '../../components/inventory/MinecraftInventory';
import { useInventoryContext } from '../../components/inventory/InventoryContext';
import { getItemDef, renderItemIcon } from '../../components/inventory/itemRegistry';
import { FollowCursor } from '../../components/inventory/FollowCursor';

export default function Step4_BioSampling({ logs, onComplete }) {
  const inv = useInventoryContext();

  const [currentFlow, setCurrentFlow] = useState(0);
  const [bottleInPosition, setBottleInPosition] = useState(false);
  const [removeModalOpen, setRemoveModalOpen] = useState(false);
  const [closeModalOpen, setCloseModalOpen] = useState(false);
  const [foilRemoved, setFoilRemoved] = useState(false);
  const [stopperRemoved, setStopperRemoved] = useState(false);
  const [foilOn, setFoilOn] = useState(false);
  const [stopperOn, setStopperOn] = useState(false);
  const [fillLevel, setFillLevel] = useState(0); // 0 to 1
  const [stepCompleted, setStepCompleted] = useState(false);
  const [hasWrongOrder, setHasWrongOrder] = useState(false);
  const [airGapOk, setAirGapOk] = useState(true);
  const [hasOverflowed, setHasOverflowed] = useState(false);

  const fillInterval = useRef(null);
  const errors = [];
  let scorePenalty = 0;

  const isHoldingBioBottle = inv.activeItem && inv.activeItem.id && inv.activeItem.id.startsWith('bio_tare_');

  // Флакон открыт и стоит под краном — вода набирается внутрь
  const bottleOpenUnderTap = bottleInPosition && foilRemoved && stopperRemoved && !foilOn && !stopperOn;

  const sideStreamWidth = Math.max(2, currentFlow * 5);

  // Fill logic: allow filling to the brim (1.0). When at brim and still flowing -> overflow (error)
  useEffect(() => {
    const effectiveFlow = currentFlow > 0.05 ? currentFlow : 0;
    const shouldFill = bottleOpenUnderTap && effectiveFlow > 0 && fillLevel < 1.0;
    if (shouldFill) {
      if (!fillInterval.current) {
        fillInterval.current = setInterval(() => {
          setFillLevel(prev => {
            const increment = effectiveFlow * 0.025;
            const newLevel = Math.min(1.0, prev + increment);
            return newLevel;
          });
        }, 250);
      }
    } else if (fillInterval.current) {
      clearInterval(fillInterval.current);
      fillInterval.current = null;
    }
    return () => {
      if (fillInterval.current) {
        clearInterval(fillInterval.current);
        fillInterval.current = null;
      }
    };
  }, [bottleInPosition, currentFlow, foilRemoved, stopperRemoved, foilOn, stopperOn, fillLevel]);

  // Detect overflow when full and still flowing (during open phase)
  useEffect(() => {
    if (bottleOpenUnderTap && currentFlow > 0.05 && fillLevel >= 1.0) {
      setHasOverflowed(true);
    }
  }, [bottleOpenUnderTap, currentFlow, fillLevel]);

  useEffect(() => {
    const shouldHide = isHoldingBioBottle && !bottleInPosition;
    if (shouldHide) {
      document.body.style.cursor = 'none';
    } else {
      document.body.style.cursor = 'auto';
    }
    return () => { document.body.style.cursor = 'auto'; };
  }, [isHoldingBioBottle, bottleInPosition]);

  const removeFoil = () => {
    if (!foilRemoved) setFoilRemoved(true);
  };

  const removeStopper = () => {
    if (!foilRemoved || stopperRemoved) return;
    setStopperRemoved(true);
  };

  const closeRemoveModal = () => {
    setRemoveModalOpen(false);
  };

  const placeStopper = () => {
    if (stopperOn) return;
    if (foilOn) {
      setHasWrongOrder(true);
    }
    setStopperOn(true);
  };

  const placeFoil = () => {
    if (foilOn) return;
    if (!stopperOn) {
      setHasWrongOrder(true);
    }
    setFoilOn(true);
  };

  const removeFoilFromClose = () => {
    setFoilOn(false);
  };

  const closeBottle = () => {
    if (!stopperOn || !foilOn) {
      // shouldn't happen if button disabled
      return;
    }
    const currentFill = fillLevel;
    if (currentFill < 0.78 || currentFill > 0.92 || hasOverflowed) {
      setAirGapOk(false);
      scorePenalty += 15;
      if (hasOverflowed) {
        errors.push('Флакон переполнен — вода выливалась через край.');
        scorePenalty += 10; // дополнительный штраф за перелив
      } else {
        errors.push('Неправильный воздушный зазор (должен быть 1-2 см).');
      }
    }
    if (hasWrongOrder) {
      scorePenalty += 20;
      errors.push('Нарушена последовательность закрытия (сначала пробка, потом колпачок).');
    }
    setStepCompleted(true);
    setCloseModalOpen(false);

    // Complete
    const finalPenalty = scorePenalty;
    const success = finalPenalty === 0 && airGapOk && !hasWrongOrder && !hasOverflowed;
    onComplete({
      bioSampleErrors: errors,
      bioSampleScorePenalty: finalPenalty,
      bioSampleSuccess: success,
      bioSampleFillLevel: currentFill,
      bioSampleWrongOrder: hasWrongOrder,
      bioSampleOverflowed: hasOverflowed,
    });
  };

  const isBioBottleActive = isHoldingBioBottle;

  const handlePlaceBottle = () => {
    if (isHoldingBioBottle && !bottleInPosition) {
      setBottleInPosition(true);
      if (!foilRemoved || !stopperRemoved) {
        setRemoveModalOpen(true);
      } else {
        setCloseModalOpen(true);
      }
    }
  };

  return (
    <div className="bg-white w-full max-w-6xl rounded-xl shadow-xl border border-slate-200 overflow-hidden mb-6 flex flex-col lg:flex-row animate-fade-in">
      {/* LEFT INSTRUCTIONS */}
      <div className="w-full lg:w-1/3 p-8 border-r border-slate-100 bg-slate-50 flex flex-col gap-6">
        <div>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">ШАГ 2.4</span>
          <h2 className="text-2xl font-bold text-slate-800 mt-3">Отбор на бактериологический анализ</h2>
          <p className="text-slate-500 text-xs mt-1">Наберите пробу в стерильный флакон с тиосульфатом.</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3 text-xs">
          <ol className="list-decimal pl-4 space-y-1.5 text-slate-600">
            <li>Возьмите стерильный флакон 0.5 дм³ в руку из инвентаря (курсор заменится на флакон).</li>
            <li>Кликните по крану, чтобы вручную поднести флакон под струю, тогда откроется окно.</li>
            <li>В окошке снимите колпачок и пробку (не касайтесь горлышка и внутренней поверхности пробки).</li>
            <li>Закройте окно. Откройте воду. Наберите с воздушным зазором ~1-2 см.</li>
            <li>Закройте воду. Кликните по флакону, чтобы закрыть.</li>
            <li>В окошке сначала наденьте пробку, затем колпачок.</li>
          </ol>
          <div className="text-[10px] text-amber-600">⚠️ Не ополаскивайте флакон. Тиосульфат внутри сухой.</div>
        </div>

        <button 
          onClick={inv.openInventory}
          className="w-full py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-700 to-emerald-800 text-white hover:brightness-110 transition-all"
        >
          🗃️ Открыть инвентарь
        </button>

        {/* Hotbar */}
        <div>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1.5">В руке — ← →</p>
          <div className="grid grid-cols-9 gap-1 p-2 rounded-xl bg-slate-900">
            {inv.slots.slice(0, 9).map((item, i) => (
              <div 
                key={i}
                className={`h-9 rounded-lg border-2 flex items-center justify-center text-base transition-all ${ (item?.id === 'gas_burner' || item?.id?.includes('wipes') || item?.id?.includes('wipe')) ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer' } ${i === inv.hotbarActive ? 'border-yellow-400 bg-slate-700 scale-110' : 'border-slate-700 bg-slate-800'}`}
                onClick={() => {
                  if (item?.id === 'gas_burner' || item?.id?.includes('wipes') || item?.id?.includes('wipe')) return;
                  inv.setHotbarActive(i);
                }}
              >
                {item ? renderItemIcon(item, 18) : ''}
              </div>
            ))}
          </div>
          <div className="mt-1.5 text-center text-xs text-slate-400 min-h-[1rem]">{inv.activeItemDef?.label || ''}</div>
        </div>
      </div>

      {/* CENTER - FAUCET + BOTTLE */}
      <div className="w-full lg:w-1/3 p-6 bg-white flex flex-col items-center border-r border-slate-100 min-h-[520px] relative">
        <div className="w-full flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-slate-400">СТЕРИЛЬНЫЙ КРАН</span>
          <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">НАПОР: {Math.round(currentFlow * 100)}%</span>
        </div>

        <div 
          className="w-full flex-1 flex items-center justify-center relative"
          onClick={handlePlaceBottle}
        >
          <FaucetSVG
            aeratorRemoved={true}
            spotsLeft={0}
            isWiping={false}
            onRemoveAerator={() => {}}
            onWipeSpot={() => {}}
            glovesEquipped={true}
            blocked={false}
            onFlowChange={setCurrentFlow}
            bottleUnderSpout={bottleInPosition}
          />

          {/* Bottle visual closer to the spout */}
          {bottleInPosition && (
            <div 
              className="absolute top-[325px] right-[calc(20%+3px)] w-[40px] h-[70px] border-2 border-slate-400 rounded-t-lg rounded-b-lg bg-white shadow-md z-10 cursor-pointer flex flex-col overflow-hidden"
              onClick={(e) => { e.stopPropagation(); 
                if (!foilRemoved || !stopperRemoved) {
                  setRemoveModalOpen(true);
                } else {
                  setCloseModalOpen(true);
                }
              }}
            >
              {/* Water fill - exactly follows flask shape using same corner radius. No empty white space at corners. */}
              <div 
                className="absolute bottom-0 left-0 w-full bg-sky-400 transition-all duration-300 ease-out rounded-t-lg rounded-b-lg"
                style={{ height: `${fillLevel * 100}%` }}
              />
              {/* Stopper visual */}
              {stopperOn && (
                <div className="absolute -top-[0.3px] left-1/2 -translate-x-1/2 w-[17px] h-[6px] bg-gray-400 rounded-sm border border-gray-500 z-20" />
              )}
              {/* Foil cap visual */}
              {foilOn && (
                <div className="absolute -top-[1.25px] left-1/2 -translate-x-1/2 w-[22px] h-[4px] bg-gray-300 border border-gray-400 z-30" />
              )}
              <div className="absolute bottom-1 right-0.5 text-[4px] text-slate-500 font-mono">0.5L</div>
            </div>
          )}

          {/* Вода по бокам: горизонтальная струя над колбой (перелив), соединённая с внешними вертикальными струями по бокам.
              Вертикальные обрезаны до края раковины. */}
          {bottleInPosition && currentFlow > 0.05 && ( (foilOn && stopperOn) || hasOverflowed ) && (
            <>
              {/* horizontal overflow stream above the flask top, connected to the side streams.
                  Shown for closed (water flows over the cap around the flask) and for open overfill. */}
              <div
                className="absolute bg-sky-400/70 rounded-t-lg pointer-events-none animate-pulse"
                style={{
                  top: '320px',
                  right: `calc(20% + 3px - ${sideStreamWidth}px)`,
                  width: `${40 + 2 * sideStreamWidth}px`,
                  height: '12px',
                  zIndex: 5,
                }}
              />

              

              {/* left external side stream */}
              <div
                className="absolute bg-sky-400/70 rounded-full pointer-events-none animate-pulse"
                style={{
                  top: '325px',
                  right: 'calc(20% + 3px + 40px)',
                  width: `${sideStreamWidth}px`,
                  height: '155px',
                  zIndex: 5,
                  boxShadow: '0 0 4px rgba(56, 189, 248, 0.6)',
                }}
              />
              {/* right external side stream */}
              <div
                className="absolute bg-sky-400/70 rounded-full pointer-events-none animate-pulse"
                style={{
                  top: '325px',
                  right: `calc(20% + 3px - ${sideStreamWidth}px)`,
                  width: `${sideStreamWidth}px`,
                  height: '155px',
                  zIndex: 5,
                  boxShadow: '0 0 4px rgba(56, 189, 248, 0.6)',
                }}
              />
            </>
          )}

          {/* Instruction when holding bottle */}
          {isBioBottleActive && !bottleInPosition && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs px-3 py-1 rounded-full shadow pointer-events-none">
              Кликните по крану, чтобы поднести флакон
            </div>
          )}
        </div>
      </div>

      {/* RIGHT - INFO */}
      <div className="w-full lg:w-1/3 p-8 bg-slate-50 flex flex-col">
        <div className="flex-1">
          <h3 className="text-xs font-bold text-slate-400 uppercase mb-3">Процесс отбора</h3>
          <div className="space-y-3 text-sm">
            <div className={`p-3 rounded-xl border ${bottleInPosition ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-slate-200'}`}>
              1. Флакон поднесён к крану {bottleInPosition && '✓'}
            </div>
            <div className={`p-3 rounded-xl border ${foilRemoved && stopperRemoved ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-slate-200'}`}>
              2. Сняты колпачок и пробка {foilRemoved && stopperRemoved && '✓'}
            </div>
            <div className={`p-3 rounded-xl border ${fillLevel > 0.1 ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-slate-200'}`}>
              3. Набранная вода: {(fillLevel * 100).toFixed(0)}% (воздушный зазор ~{Math.max(0, (100 - fillLevel*100)).toFixed(0)}% {fillLevel >= 1 ? '⚠️ переполнен' : ''})
            </div>
            <div className={`p-3 rounded-xl border ${stepCompleted ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-slate-200'}`}>
              4. Флакон закрыт {stepCompleted && '✓'}
            </div>
          </div>

          {hasWrongOrder && (
            <div className="mt-4 p-3 bg-amber-100 border border-amber-300 rounded-xl text-xs text-amber-700">
              ⚠️ Была нарушена последовательность. Это снизит оценку.
            </div>
          )}
          {hasOverflowed && (
            <div className="mt-4 p-3 bg-red-100 border border-red-300 rounded-xl text-xs text-red-700">
              ⚠️ Флакон переполнен — вода выливалась через край. Это ошибка и снизит оценку.
            </div>
          )}
        </div>

        <div className="mt-4">
          <button 
            onClick={() => {
              if (stepCompleted) {
                const finalErrors = [...errors];
                if (hasWrongOrder) finalErrors.push('Нарушена последовательность закрытия флакона.');
                if (!airGapOk) {
                  if (hasOverflowed) finalErrors.push('Флакон переполнен — вода выливалась через край.');
                  else finalErrors.push('Неправильный воздушный зазор.');
                }
                const penalty = (hasWrongOrder ? 20 : 0) + (hasOverflowed ? 10 : 0) + (!airGapOk && !hasOverflowed ? 15 : 0);
                onComplete({
                  bioSampleErrors: finalErrors,
                  bioSampleScorePenalty: penalty,
                  bioSampleSuccess: !hasWrongOrder && airGapOk && !hasOverflowed,
                });
              }
            }}
            disabled={!stepCompleted}
            className="w-full py-4 rounded-2xl font-bold text-sm bg-emerald-700 text-white disabled:bg-slate-300 disabled:text-slate-500 transition-all"
          >
            {stepCompleted ? 'Завершить отбор пробы →' : 'Выполните все действия с флаконом'}
          </button>
        </div>
      </div>

      {/* REMOVE MODAL */}
      {removeModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70" onClick={closeRemoveModal}>
          <div className="bg-white rounded-2xl p-8 w-full max-w-md mx-4 relative" onClick={e => e.stopPropagation()}>
            <h3 className="font-bold text-lg mb-2">Стерильный флакон 0.5 дм³</h3>
            <p className="text-sm text-slate-600 mb-6">Сначала снимите колпачок из фольги, потом пробку. Снятые предметы переместятся рядом с флаконом.</p>

            <div className="flex justify-center gap-6 mb-6">
              {/* Bottle */}
              <div className="relative w-40 h-64 border-4 border-slate-300 rounded-t-3xl rounded-b-xl bg-slate-50 overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-100/30 to-sky-200/30" />

                {/* Foil cap on bottle if not removed - clickable to remove */}
                {!foilRemoved && (
                  <div 
                    onClick={removeFoil}
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-300 border-b-2 border-gray-400 shadow cursor-pointer hover:brightness-95 transition-all"
                  >
                    <div className="text-center text-[10px] text-gray-600 font-bold pt-0.5">ФОЛЬГА</div>
                  </div>
                )}

                {/* Stopper on bottle if not removed - clickable only after foil */}
                {!stopperRemoved && (
                  <div 
                    onClick={removeStopper}
                    className={`absolute top-4 left-1/2 -translate-x-1/2 w-16 h-5 bg-gray-400 rounded cursor-pointer hover:brightness-95 transition-all ${!foilRemoved ? 'opacity-40 cursor-not-allowed' : ''}`}
                  >
                    <div className="text-center text-[9px] text-white font-bold">ПРОБКА</div>
                  </div>
                )}

                {foilRemoved && stopperRemoved && (
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 text-xs text-emerald-600 font-bold">ГОРЛЫШКО ОТКРЫТО</div>
                )}
              </div>

              {/* Removed items area beside */}
              <div className="flex flex-col gap-2 mt-8">
                {foilRemoved && (
                  <div className="w-20 h-6 bg-gray-300 border-b-2 border-gray-400 shadow flex items-center justify-center text-[10px] text-gray-700 font-bold">
                    ФОЛЬГА
                  </div>
                )}
                {stopperRemoved && (
                  <div className="w-16 h-5 bg-gray-400 rounded shadow flex items-center justify-center text-[9px] text-white font-bold">
                    ПРОБКА
                  </div>
                )}
              </div>
            </div>

            <button 
              onClick={closeRemoveModal} 
              className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-2xl leading-none text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Закрыть"
            >
              ×
            </button>
            <p className="text-[10px] text-center text-slate-500 mt-3">Кликните по колпачку и пробке, чтобы снять.</p>
          </div>
        </div>
      )}

      {/* CLOSE MODAL - items beside bottle, clickable to put on */}
      {closeModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70" onClick={() => setCloseModalOpen(false)}>
          <div className="bg-white rounded-2xl p-8 w-full max-w-lg mx-4 relative" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setCloseModalOpen(false)} 
              className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-2xl leading-none text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Закрыть"
            >
              ×
            </button>
            <h3 className="font-bold text-lg mb-1">Закрытие стерильного флакона</h3>
            <p className="text-sm text-slate-600 mb-4">Сначала наденьте пробку, затем колпачок. Нажмите на предметы рядом с флаконом.</p>

            <div className="flex items-center justify-center gap-8 mb-6">
              {/* Enlarged bottle */}
              <div className="relative w-40 h-64 border-4 border-slate-300 rounded-t-3xl rounded-b-xl bg-slate-50 overflow-hidden flex-shrink-0">
                <div 
                  className="absolute bottom-0 left-0 w-full bg-sky-400 transition-all duration-300 ease-out rounded-b-lg"
                  style={{ height: `${fillLevel * 100}%` }}
                />
                {/* Stopper on bottle */}
                {stopperOn && (
                  <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-8 h-3 bg-gray-400 rounded-sm border border-gray-500 z-20" />
                )}
                {/* Foil on bottle */}
                {foilOn && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-2 bg-gray-300 border border-gray-400 z-30" />
                )}
              </div>

              {/* Removed items lying beside - clickable to put on */}
              <div className="flex flex-col gap-4 text-center">
                {/* Stopper item */}
                {!stopperOn && (
                  <div 
                    onClick={placeStopper}
                    className="w-20 h-6 bg-gray-400 rounded-sm border border-gray-500 cursor-pointer hover:scale-105 transition-all flex items-center justify-center shadow"
                    title="Надеть пробку"
                  >
                    <span className="text-[10px] text-white font-bold">ПРОБКА</span>
                  </div>
                )}
                {stopperOn && <div className="w-20 h-6 bg-gray-400 rounded-sm border border-gray-500 opacity-40 flex items-center justify-center"><span className="text-[10px] text-white font-bold">ПРОБКА ✓</span></div>}

                {/* Foil cap item */}
                {!foilOn && (
                  <div 
                    onClick={placeFoil}
                    className="w-24 h-3 bg-gray-300 border border-gray-400 cursor-pointer hover:scale-105 transition-all flex items-center justify-center shadow"
                    title="Надеть колпачок из фольги"
                  >
                    <span className="text-[9px] text-gray-700 font-bold">ФОЛЬГА</span>
                  </div>
                )}
                {foilOn && <div className="w-24 h-3 bg-gray-300 border border-gray-400 opacity-40 flex items-center justify-center"><span className="text-[9px] text-gray-700 font-bold">ФОЛЬГА ✓</span></div>}

                {hasWrongOrder && foilOn && !stopperOn && (
                  <button 
                    onClick={removeFoilFromClose} 
                    className="text-xs bg-amber-500 text-white px-3 py-1 rounded hover:bg-amber-600"
                  >
                    Снять колпачок
                  </button>
                )}
              </div>
            </div>

            {stopperOn && foilOn && (
              <button 
                onClick={closeBottle}
                className="w-full py-3 bg-emerald-700 text-white rounded-2xl font-bold hover:bg-emerald-800 transition-all"
              >
                Завершить закрытие флакона
              </button>
            )}
            <p className="text-[10px] text-center text-slate-500 mt-3">Сначала пробка, потом колпачок. Неправильный порядок снизит оценку.</p>
          </div>
        </div>
      )}

      {isHoldingBioBottle && !bottleInPosition && (
        <FollowCursor activeItemDef={inv.activeItemDef} activeItem={inv.activeItem} replaceCursor={true} />
      )}
    </div>
  );
}


