"use client";

import React from 'react';

// ─── SVG Faucet ──────────────────────────────────────────────────────────────
export function FaucetSVG({ aeratorRemoved, spotsLeft, isWiping, onRemoveAerator, onWipeSpot, glovesEquipped }) {
  const canInteract = !!glovesEquipped;
  const svgRef = React.useRef(null);

  // Референсы для хранения аудио-объектов (не сбрасываются при рендерах)
  const lowAudioRef = React.useRef(null);
  const medAudioRef = React.useRef(null);
  const highAudioRef = React.useRef(null);

  // Состояния для перетаскивания ручки смесителя
  // x: -45 (горячая) до 45 (холодная)
  // y: 10 (выключена) до -45 (полный напор вверх)
  const [handlePos, setHandlePos] = React.useState({ x: 0, y: 10 });
  const [isDragging, setIsDragging] = React.useState(false);

  // Координаты пятен ржавчины
  const spots = [
    { id: 0, cx: 440, cy: 300, r: 7 },
    { id: 1, cx: 432, cy: 322, r: 6 },
    { id: 2, cx: 448, cy: 340, r: 5.5 },
  ];

  // Обработчики мыши и тач-событий для Drag-and-Drop
  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !svgRef.current) return;

    const rect = svgRef.current.getBoundingClientRect();
    const clientX = e.clientX ?? e.touches?.[0]?.clientX;
    const clientY = e.clientY ?? e.touches?.[0]?.clientY;

    if (clientX === undefined || clientY === undefined) return;

    // Вычисляем координаты клика относительно SVG контейнера
    const relativeX = clientX - rect.left;
    const relativeY = clientY - rect.top;

    // Конвертируем в систему координат viewBox (600 x 640)
    const svgX = (relativeX / rect.width) * 600;
    const svgY = (relativeY / rect.height) * 640;

    // Базовая точка крепления ручки: x = 300, y = 106
    let dx = svgX - 300;
    let dy = svgY - 106;

    // Ограничиваем диапазон перемещения ручки
    dx = Math.max(-45, Math.min(45, dx));
    dy = Math.max(-45, Math.min(10, dy));

    setHandlePos({ x: dx, y: dy });
  };

  // Вычисляем процент напора воды в зависимости от высоты ручки (Y)
  const flowPercent = Math.max(0, (10 - handlePos.y) / 55); 

  // Цвета воды в зависимости от положения ручки по оси X
  let waterColor = '#bae6fd'; 
  let innerWaterColor = '#f0f9ff';
  let knobColor = '#cbd5e1'; 

  if (handlePos.x < -10) {
    waterColor = '#fecaca'; 
    innerWaterColor = '#fef2f2';
    knobColor = '#d09292';
  } else if (handlePos.x > 10) {
    waterColor = '#93c5fd'; 
    innerWaterColor = '#eff6ff';
    knobColor = '#3b92fc';
  }

  // Напор считается открытым, если ручка поднята хотя бы на 10%
  const isFlowing = spotsLeft === 0 && aeratorRemoved && flowPercent > 0.02;

  // Динамические размеры струи в зависимости от напора (с увеличенной базовой толщиной)
  const outerStrokeWidth = 3 + flowPercent * flowPercent * 26;
  const innerStrokeWidth = 1 + flowPercent * flowPercent * 14;

  // Инициализация аудио-объектов при монтировании компонента в браузере
  React.useEffect(() => {
    lowAudioRef.current = new Audio('/audio/water_low.mp3');
    medAudioRef.current = new Audio('/audio/water_med.mp3');
    highAudioRef.current = new Audio('/audio/water_high.mp3');

    // Настраиваем бесконечный цикл воспроизведения
    lowAudioRef.current.loop = true;
    medAudioRef.current.loop = true;
    highAudioRef.current.loop = true;

    // Очистка памяти при размонтировании (уходе со страницы)
    return () => {
      lowAudioRef.current?.pause();
      medAudioRef.current?.pause();
      highAudioRef.current?.pause();
    };
  }, []);

  // Управление громкостью и запуском/остановкой треков на основе напора
  React.useEffect(() => {
    const low = lowAudioRef.current;
    const med = medAudioRef.current;
    const high = highAudioRef.current;

    if (!low || !med || !high) return;

    if (!isFlowing) {
      // Если вода перекрыта, останавливаем все аудио
      low.pause();
      med.pause();
      high.pause();
      return;
    }

    // Если вода пошла, запускаем воспроизведение (если еще не играет)
    if (low.paused) low.play().catch(() => {});
    if (med.paused) med.play().catch(() => {});
    if (high.paused) high.play().catch(() => {});

    // Кроссфейд-интерполяция громкости (от 0.0 до 1.0)
    const volLow = Math.max(0, 1 - flowPercent * 2);
    const volMed = Math.max(0, 1 - Math.abs(flowPercent - 0.5) * 2);
    const volHigh = Math.max(0, (flowPercent - 0.5) * 2);

    // Применяем громкость к объектам
    low.volume = volLow;
    med.volume = volMed;
    high.volume = volHigh;
  }, [isFlowing, flowPercent]);

  return (
    <svg 
      ref={svgRef}
      viewBox="0 0 600 640" 
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-sm mx-auto select-none outline-none"
      style={{ filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.15))' }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
    >
      <defs>
        <linearGradient id="fc_sink"   x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#e2e8f0"/><stop offset="100%" stopColor="#b0bec5"/></linearGradient>
        <linearGradient id="fc_chrome" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#f1f5f9"/><stop offset="35%" stopColor="#e2e8f0"/><stop offset="65%" stopColor="#94a3b8"/><stop offset="100%" stopColor="#64748b"/></linearGradient>
        <linearGradient id="fc_side"   x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#f8fafc"/><stop offset="40%" stopColor="#cbd5e1"/><stop offset="100%" stopColor="#475569"/></linearGradient>
        <linearGradient id="fc_spout"  x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#f1f5f9"/><stop offset="45%" stopColor="#cbd5e1"/><stop offset="100%" stopColor="#64748b"/></linearGradient>
        <linearGradient id="fc_rust"   x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#92400e"/><stop offset="100%" stopColor="#78350f"/></linearGradient>
        <radialGradient id="fc_aerator" cx="50%" cy="35%" r="65%"><stop offset="0%" stopColor="#94a3b8"/><stop offset="100%" stopColor="#1e293b"/></radialGradient>
        <filter id="fc_wipe"><feGaussianBlur stdDeviation="8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <filter id="fc_lbl" x="-20%" y="-40%" width="140%" height="180%"><feDropShadow dx="0" dy="1" stdDeviation="3" floodColor="#000" floodOpacity="0.5"/></filter>
        
        {/* Расширенный фильтр искажения течения воды (без обрезки широкой струи) */}
        <filter id="water_noise" x="-50%" y="-10%" width="200%" height="120%">
          <feTurbulence 
            type="turbulence" 
            baseFrequency="0.01 0.15" 
            numOctaves="2" 
            result="wave"
          >
            <animate 
              attributeName="baseFrequency" 
              dur="1.5s" 
              values="0.01 0.15; 0.01 0.12; 0.01 0.15" 
              repeatCount="indefinite" 
            />
          </feTurbulence>
          <feDisplacementMap 
            in="SourceGraphic" 
            in2="wave" 
            scale="4"
            xChannelSelector="R" 
            yChannelSelector="G" 
          />
        </filter>
      </defs>
      
      {/* Раковина (смещена ниже по оси Y на 80px) */}
      <path d="M30 485 Q30 620 120 620 L480 620 Q570 620 570 485 L570 475 L30 475 Z" fill="url(#fc_sink)" stroke="#94a3b8" strokeWidth="2.5"/>
      <path d="M30 475 L570 475" stroke="#f1f5f9" strokeWidth="3" opacity="0.6"/>
      <ellipse cx="300" cy="480" rx="260" ry="10" fill="#94a3b8" opacity="0.3"/>
      
      {/* Сливное отверстие */}
      <ellipse cx="300" cy="600" rx="30"  ry="10" fill="#94a3b8" stroke="#64748b" strokeWidth="2"/>
      <line x1="282" y1="600" x2="318" y2="600" stroke="#64748b" strokeWidth="2"/>
      <line x1="300" y1="590" x2="300" y2="610" stroke="#64748b" strokeWidth="2"/>
      
      {/* Корпус смесителя */}
      <rect x="260" y="28"  width="80" height="62"  rx="10" fill="url(#fc_chrome)" stroke="#94a3b8" strokeWidth="2"/>
      <rect x="272" y="34"  width="10" height="50"  rx="3"  fill="white" opacity="0.4"/>
      <rect x="265" y="88"  width="70" height="150" rx="6"  fill="url(#fc_side)"   stroke="#94a3b8" strokeWidth="2"/>
      <rect x="275" y="88"  width="12" height="150" rx="4"  fill="white" opacity="0.3"/>
      
      {/* Интерактивная ручка */}
      {/* Полностью трехмерная прямоугольная ручка и объемная ножка-параллелепипед */}
      {(() => {
        const cx = 300 + handlePos.x;
        const cy = 106 + handlePos.y;

        const w = 15; // Полуширина плиты ручки
        const h = 5; // Полувысота плиты ручки
        const thickness = 4; // Единая толщина для ручки и ножки (10px)

        // Мягкие коэффициенты деформации для естественного объема
        const scale_L = 1 + (handlePos.x / 45) * 0.12 - (handlePos.y / 45) * 0.12;
        const scale_R = 1 - (handlePos.x / 45) * 0.12 + (handlePos.y / 45) * 0.12;
        const scale_B = 1 + (handlePos.x / 45) * 0.12 - (handlePos.y / 45) * 0.12;
        const scale_T = 1 - (handlePos.x / 45) * 0.12 + (handlePos.y / 45) * 0.12;

        // Координаты углов передней плоскости ручки
        const tlX = cx - w * scale_L;
        const tlY = cy - h * scale_T * scale_L;

        const trX = cx + w * scale_R;
        const trY = cy - h * scale_T * scale_R;

        const brX = cx + w * scale_R;
        const brY = cy + h * scale_B * scale_R;

        const blX = cx - w * scale_L;
        const blY = cy + h * scale_B * scale_L;

        return (
          <g>
            {/* Прямоугольная платформа смесителя */}
            <rect 
              x="274" 
              y="100" 
              width="52" 
              height="12" 
              rx="3" 
              fill="#334155" 
              stroke="#1e293b"
              strokeWidth="1.5"
            />
            {/* Передняя панель платформы смесителя */}
            <rect 
              x="274" 
              y="97" 
              width="52" 
              height="14" 
              rx="3" 
              fill="url(#fc_side)" 
              stroke="#64748b" 
              strokeWidth="1.5" 
            />

            {/* 1. Объемная 3D-грань ножки смесителя (сделана параллелепипедом толщиной 10px) */}
            {/* Правая грань */}
            <polygon
              points={`312,100 288,100 ${cx - 12},${cy} ${cx - 12},${cy + thickness} ${cx + 12},${cy + thickness} 312,110`}
              fill="#4f5c6e"
              stroke="#1e293b"
              strokeWidth="1.5"
            />
            {/* Левая грань */}
            <polygon
              points={`288,100 312,100 ${cx + 12},${cy} ${cx + 12},${cy + thickness} ${cx - 12},${cy + thickness} 288,110`}
              fill="#4f5c6e"
              stroke="#1e293b"
              strokeWidth="1.5"
            />
            

            

            {/* 2. Передняя хромированная грань ножки смесителя */}
            {/* Верхняя грань */}
            <polygon
              points={`288,100 312,100 ${cx + 12},${cy} ${cx - 12},${cy}`}
              fill="url(#fc_chrome)"
              stroke="#64748b"
              strokeWidth="1.2"
            />
            {/* Нижняя грань */}
            <polygon
              points={`288,110 312,110 ${cx + 12},${cy} ${cx - 12},${cy}`}
              fill="#334155"
              stroke="#0f1113"
              strokeWidth="1.2"
            />
            

            {/* 3. Объемная 3D-грань ручки (толщина плиты 10px) */}
            {/* <polygon
              points={`${tlX},${tlY} ${trX},${trY} ${trX},${trY + thickness} ${brX},${brY + thickness} ${blX},${blY + thickness} ${tlX},${tlY + thickness}`}
              fill="#334155"
              stroke="#1e293b"
              strokeWidth="1.5"
            />
 */}
            {/* 4. Передняя прямоугольная плита ручки смесителя */}
            <polygon
              points={`${tlX},${tlY} ${trX},${trY} ${brX},${brY} ${blX},${blY}`}
              fill={knobColor} 
              stroke="#1e293b" 
              strokeWidth="2.5"
              style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleMouseDown}
            />
          </g>
        );
      })()}

      {/* 5. Всплывающая подсказка с процентом напора при движении ручки (вставьте сразу под })()}) */}
      {isDragging && (
        <g style={{ pointerEvents: 'none' }} opacity="0.5">
          {/* Темная скругленная плашка тултипа */}
          <rect 
            x={300 + handlePos.x - 26} 
            y={106 + handlePos.y - 42} 
            width="76" 
            height="36" 
            rx="10" 
            fill="#1e293b" 
            stroke="#475569"
            strokeWidth="1"
          />
          {/* Маленький треугольник-указатель под плашкой */}
          <polygon 
            points={`
              ${300 + handlePos.x - 4},${106 + handlePos.y - 22} 
              ${300 + handlePos.x + 4},${106 + handlePos.y - 22} 
              ${300 + handlePos.x},${106 + handlePos.y - 18}
            `}
            fill="#1e293b"
          />
          {/* Текст с процентом */}
          <text 
            x={314 + handlePos.x} 
            y={118 + handlePos.y - 28} 
            textAnchor="middle" 
            fill="#ffffff" 
            fontSize="24" 
            fontWeight="black"
            fontFamily="monospace"
          >
            {Math.round(flowPercent * 100)}%
          </text>
        </g>
      )}
      
      {/* Излив смесителя */}
      <path d="M335 158 Q440 158 440 258 L440 280" stroke="#64748b"       strokeWidth="46" fill="none" strokeLinecap="round"/>
      <path d="M335 158 Q440 158 440 258 L440 280" stroke="url(#fc_side)" strokeWidth="40" fill="none" strokeLinecap="round"/>
      <path d="M335 158 Q440 158 440 258 L440 280" stroke="url(#fc_chrome)" strokeWidth="32" fill="none" strokeLinecap="round"/>
      <path d="M333 153 Q436 153 436 258 L436 280" stroke="white" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.25"/>      
      {spots.map(spot => {
        if (spot.id >= spotsLeft) return null;
        return (
          <g key={spot.id}>
            <circle cx={spot.cx} cy={spot.cy} r={spot.r+5} fill="url(#fc_rust)" opacity="0.12"/>
            <circle cx={spot.cx} cy={spot.cy} r={spot.r}   fill="url(#fc_rust)" opacity="0.9"
              className={canInteract && !isWiping ? 'cursor-pointer' : 'cursor-default'}
              onClick={() => canInteract && onWipeSpot(spot.id)}/>
            {canInteract && !isWiping && (
              <circle cx={spot.cx} cy={spot.cy} r={spot.r+9}
                fill="transparent" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,3" opacity="0.8"
                className="cursor-pointer" onClick={() => canInteract && onWipeSpot(spot.id)}
                style={{ transformOrigin:`${spot.cx}px ${spot.cy}px`, animation:'fc_spin 3s linear infinite' }}/>
            )}
          </g>
        );
      })}
      
      {isWiping && <ellipse cx="440" cy="320" rx="28" ry="50" fill="#fef3c7" opacity="0.6" filter="url(#fc_wipe)"/>}
      
      {!aeratorRemoved ? (
        <g onClick={onRemoveAerator} className="cursor-pointer" style={{ filter:'drop-shadow(0 3px 6px rgba(0,0,0,0.4))' }}>
          <ellipse cx="440" cy="362" rx="22" ry="13" fill="url(#fc_aerator)" stroke="#475569" strokeWidth="2.5"/>
          <ellipse cx="440" cy="358" rx="17" ry="9"  fill="#64748b" opacity="0.45"/>
          {[0,1,2,3,4].map(c=><line key={c} x1={424+c*5} y1="352" x2={424+c*5} y2="370" stroke="#94a3b8" strokeWidth="1" opacity="0.55"/>)}
          {[0,1,2].map(r=><line key={r} x1="421" y1={354+r*5} x2="459" y2={354+r*5} stroke="#94a3b8" strokeWidth="1" opacity="0.55"/>)}
          <ellipse cx="440" cy="362" rx="22" ry="13" fill="none" stroke="#e2e8f0" strokeWidth="1" opacity="0.3"/>
          <rect x="310" y="349" width="108" height="28" rx="14" fill="#f59e0b" filter="url(#fc_lbl)"/>
          <text x="364" y="368" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">нажми ⚙️</text>
          <path d="M418 363 L408 358 L408 368 Z" fill="#f59e0b" opacity="0.9"/>
        </g>
      ) : (
        <g>
          <ellipse cx="440" cy="290" rx="22" ry="12" fill="#1e293b" stroke="#475569" strokeWidth="2"/>
          <ellipse cx="440" cy="290" rx="16" ry="7"  fill="#0f172a" opacity="0.9"/>
          <rect x="355" y="350" width="72" height="24" rx="12" fill="#dcfce7" stroke="#86efac" strokeWidth="1.5"/>
          <text x="391" y="366" textAnchor="middle" fontSize="12" fill="#166534" fontWeight="bold">Снят ✓</text>
          
          {/* Уложенный аэратор на раковине (смещен на y=580) */}
          <ellipse cx="160" cy="580" rx="20" ry="11" fill="#64748b" stroke="#475569" strokeWidth="2" opacity="0.85"/>
          <text x="160" y="600" textAnchor="middle" fontSize="10" fill="#94a3b8" fontWeight="600">аэратор</text>
        </g>
      )}
      
      {/* Струя воды, доходящая ровно до края раковины (без брызг на дне) */}
      {isFlowing && (
        <g>
          {/* 1. Внешняя часть струи (толщина увеличивается до 60px) */}
          <path 
            d="M 440,290 L 440,474" 
            stroke={waterColor} 
            strokeWidth={outerStrokeWidth} 
            strokeLinecap="butt" 
            opacity="0.6" 
          />
          
          <path d="M 440,290 L 440,474" stroke={waterColor} strokeWidth={outerStrokeWidth * 0.4} strokeLinecap="butt" opacity="0.4">
            <animateTransform attributeName="transform" type="translate" values="-3,0; 3,0; -3,0" dur="0.7s" repeatCount="indefinite"/>
          </path>
          {/* Рябь 2 */}
          <path d="M 440,290 L 440,474" stroke={waterColor} strokeWidth={outerStrokeWidth * 0.4} strokeLinecap="butt" opacity="0.4">
            <animateTransform attributeName="transform" type="translate" values="3,0; -3,0; 3,0" dur="1.0s" repeatCount="indefinite"/>
          </path>
          {/* Рябь 3 */}
          <path d="M 440,290 L 440,474" stroke={waterColor} strokeWidth={outerStrokeWidth * 0.4} strokeLinecap="butt" opacity="0.4">
            <animateTransform attributeName="transform" type="translate" values="-3,0; 3,0; -3,0" dur="1.3s" repeatCount="indefinite"/>
          </path>
          {/* Рябь 4 */}
          <path d="M 440,362 L 440,474" stroke={waterColor} strokeWidth={outerStrokeWidth * 0.4} strokeLinecap="butt" opacity="0.4">
            <animateTransform attributeName="transform" type="translate" values="-3,0; 3,0; -3,0" dur="2s" repeatCount="indefinite"/>
          </path>
        </g>
      )}
    </svg>
  );
}