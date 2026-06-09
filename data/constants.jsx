// src/data/constants.js
export const CHEM_MATERIALS = [
  { id: 'pet', code: '01', name: 'ПЭТ (Полиэтилентерефталат)', rigidity: 'Жесткий', isCorrect: false, error: 'ПЭТ не рекомендуется для точного хим. анализа.' },
  { id: 'hdpe', code: '02', name: 'HDPE (Полиэтилен низкого давления)', rigidity: 'Высокая жесткость', isCorrect: true },
  { id: 'ldpe', code: '04', name: 'LDPE (Полиэтилен высокого давления)', rigidity: 'Мягкий', isCorrect: false, error: 'LDPE слишком мягкий, есть риск деформации.' },
  { id: 'pp', code: '05', name: 'PP (Полипропилен)', rigidity: 'Высокая жесткость', isCorrect: true }
];

export const CHEM_COLORS = [
  { id: 'clear', name: 'Прозрачный', visual: 'bg-cyan-100 opacity-30', isCorrect: false, error: 'Прозрачный пластик не защищает от фотохимических реакций.' },
  { id: 'white', name: 'Белый (матовый)', visual: 'bg-white opacity-90', isCorrect: false, error: 'Белый пластик пропускает свет, искажая хим. состав.' },
  { id: 'dark', name: 'Темный / Янтарный', visual: 'bg-amber-800 opacity-95', isCorrect: true }
];

export const CHEM_CAPS = [
  { id: 'plastic', name: 'Пластиковая коническая', desc: 'Герметизация за счет формы', isCorrect: true },
  { id: 'rubber', name: 'С резиновой прокладкой', desc: 'Герметизация резиной', isCorrect: false, error: 'Резина выделяет в воду примеси (цинк, фенолы).' }
];

export const BIO_MATERIALS = [
  { id: 'glass_boro', name: 'Боросиликатное стекло', visual: 'bg-blue-50/40', isCorrect: true },
  { id: 'plastic_thermo', name: 'Термостойкий пластик (PC/PP)', visual: 'bg-white/80', isCorrect: true },
  { id: 'pet_regular', name: 'Обычный ПЭТ (01)', visual: 'bg-cyan-50/30', isCorrect: false, error: 'Обычный ПЭТ расплавится в автоклаве при стерилизации тары.' },
  { id: 'glass_regular', name: 'Обычное стекло', visual: 'bg-emerald-50/40', isCorrect: false, error: 'Обычное стекло может треснуть при перепадах температур и стерилизации.' }
];

export const BIO_CAPS = [
  { id: 'silicone_foil', name: 'Силиконовая пробка + фольга', isCorrect: true },
  { id: 'screw_plastic', name: 'Обычная винтовая', isCorrect: false, error: 'Обычная винтовая крышка не гарантирует сохранения стерильности.' },
  { id: 'cotton', name: 'Ватно-марлевая пробка', isCorrect: false, error: 'Ватно-марлевая пробка намокнет при транспортировке и пропустит контаминацию.' }
];

export const BIO_ADDITIVES = [
  { id: 'thiosulfate', name: 'Тиосульфат натрия', desc: 'Дехлоратор', visual: 'bg-white', isCorrect: true },
  { id: 'none', name: 'Без добавок (пустой)', desc: 'Отсутствует', visual: 'hidden', isCorrect: false, error: 'Остаточный хлор в воде убьет бактерии до приезда в лабораторию. Нужен дехлоратор.' },
  { id: 'nitric_acid', name: 'Азотная кислота', desc: 'Консервант', visual: 'bg-yellow-200/50', isCorrect: false, error: 'Азотная кислота мгновенно убьет все микроорганизмы!' }
];



export const CABINET_ITEMS = [
  { id: 'ethyl_wipes', name: 'Салфетки этиловые', category: 'disinfection', desc: 'Пропитка: Этиловый спирт 70%. Быстро испаряется, уничтожает вегетативные формы микроорганизмов, не оставляет налета.', isCorrect: true },
  { id: 'isop_wipes', name: 'Салфетки изопропиловые', category: 'disinfection', desc: 'Пропитка: Изопропиловый спирт 70%. Эффективный кожный антисептик, разрешен стандартами дезинфекции по ГОСТ 31942.', isCorrect: true },
  { id: 'antibact_wipes', name: 'Салфетки гигиенические (без спирта)', category: 'disinfection', desc: 'Пропитка: Водный раствор ПАВ (мыльные вещества), экстракт ромашки, парфюмерные отдушки.', isCorrect: false, error: 'Гигиенические салфетки с ПАВ: Оставили на кране невидимую мыльную пленку, которая смылась в бутылку для хим. анализа и исказила показатели pH и мутности.' },
  
  { id: 'gas_burner', name: 'Портативная газовая горелка', category: 'burner', desc: 'Насадка-горелка на цанговый баллон. Дает направленный факел пламени с температурой до 1300 °C. Предназначена для прокалки металлов.', isCorrect: true },
  { id: 'lighter_only', name: 'Бытовая зажигалка', category: 'burner', desc: 'Карманная газовая зажигалка. Дает мягкое диффузное пламя высотой до 2 см с температурой около 800 °C.', isCorrect: false, error: 'Обычная зажигалка: Слабое пламя не смогло прогреть толстый металлический кран. Стерильность при отборе бактериологии нарушена.' },
  
  { id: 'sterile_gloves', name: 'Перчатки хирургические латексные', category: 'safety', desc: 'Стерильные перчатки анатомической формы. Герметичная индивидуальная упаковка (пара).', isCorrect: true },
  { id: 'regular_gloves', name: 'Перчатки хозяйственные латексные', category: 'safety', desc: 'Плотные латексные перчатки желтого цвета. Предназначены для хозяйственных работ и мытья поверхностей.', isCorrect: false, error: 'Нестерильные перчатки: На латексе хозяйственных перчаток из открытой пачки были бактерии, которые при отборе попали в стерильный флакон.' },
  
  { id: 'waterproof_marker', name: 'Маркер перманентный черный', category: 'marking', desc: 'Чернила на спиртовой основе, быстросохнущие, устойчивые к воде, спирту и истиранию.', isCorrect: true },
  { id: 'regular_pencil', name: 'Карандаш графитовый HB', category: 'marking', desc: 'Обычный деревянный карандаш с грифелем средней мягкости.', isCorrect: false, error: 'Простой карандаш: Грифель размок под действием холодного конденсата в сумке, маркировка на бутылках стерлась.' },
  
  { id: 'safety_goggles', name: 'Очки защитные пластиковые', category: 'safety_goggles', desc: 'Защитные очки лаборанта. Предназначены для защиты органов зрения от брызг и открытого пламени горелки.', isCorrect: true }
];

export const FREEZER_ITEMS = [
  { id: 'ice_eutectic', name: 'Эвтектический (водно-солевой) хладоэлемент', category: 'transport', desc: 'Жесткий полимерный брикет. Заполнен водно-солевым раствором.', isCorrect: true },
  { id: 'ice_gel', name: 'Гелевый хладоэлемент', category: 'transport', desc: 'Мягкий герметичный пакет с карбоксиметилцеллюлозой (гель).', isCorrect: false, error: 'Гелевый хладоэлемент: Отдал холод слишком быстро. К середине пути температура в сумке превысила +8°C, бактерии в пробах начали бесконтрольно размножаться.' },
  { id: 'ice_silicone', name: 'Силиконовый хладоэлемент', category: 'transport', desc: 'Герметичный пакет с силиконовым наполнителем.', isCorrect: false, error: 'Силиконовый хладоэлемент: Обладает слабой теплоемкостью для биологических стандартов. Пробы перегрелись в дороге.' }
];