module.exports = [
"[project]/data/constants.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// data/constants.js
__turbopack_context__.s([
    "ALL_INVENTORY_ITEMS",
    ()=>ALL_INVENTORY_ITEMS,
    "BIO_ADDITIVES",
    ()=>BIO_ADDITIVES,
    "BIO_CAPS",
    ()=>BIO_CAPS,
    "BIO_MATERIALS",
    ()=>BIO_MATERIALS,
    "CABINET_ITEMS",
    ()=>CABINET_ITEMS,
    "CHEM_CAPS",
    ()=>CHEM_CAPS,
    "CHEM_COLORS",
    ()=>CHEM_COLORS,
    "CHEM_MATERIALS",
    ()=>CHEM_MATERIALS,
    "DIVIDER_ITEMS",
    ()=>DIVIDER_ITEMS,
    "FREEZER_ITEMS",
    ()=>FREEZER_ITEMS,
    "SOME_STUFF",
    ()=>SOME_STUFF
]);
const CHEM_MATERIALS = [
    {
        id: 'pet',
        code: '01',
        name: 'ПЭТ (Полиэтилентерефталат)',
        rigidity: 'Жесткий',
        isCorrect: false,
        error: 'ПЭТ не рекомендуется для точного хим. анализа.'
    },
    {
        id: 'hdpe',
        code: '02',
        name: 'HDPE (Полиэтилен низкого давления)',
        rigidity: 'Высокая жесткость',
        isCorrect: true
    },
    {
        id: 'ldpe',
        code: '04',
        name: 'LDPE (Полиэтилен высокого давления)',
        rigidity: 'Мягкий',
        isCorrect: false,
        error: 'LDPE слишком мягкий, есть риск деформации.'
    },
    {
        id: 'pp',
        code: '05',
        name: 'PP (Полипропилен)',
        rigidity: 'Высокая жесткость',
        isCorrect: true
    }
];
const CHEM_COLORS = [
    {
        id: 'clear',
        name: 'Прозрачный',
        visual: 'bg-cyan-100 opacity-30',
        isCorrect: false,
        error: 'Прозрачный пластик не защищает от фотохимических реакций.'
    },
    {
        id: 'white',
        name: 'Белый (матовый)',
        visual: 'bg-white opacity-90',
        isCorrect: false,
        error: 'Белый пластик пропускает свет, искажая хим. состав.'
    },
    {
        id: 'dark',
        name: 'Темный / Янтарный',
        visual: 'bg-amber-800 opacity-95',
        isCorrect: true
    }
];
const CHEM_CAPS = [
    {
        id: 'plastic',
        name: 'Пластиковая коническая',
        desc: 'Герметизация за счет формы',
        isCorrect: true
    },
    {
        id: 'rubber',
        name: 'С резиновой прокладкой',
        desc: 'Герметизация резиной',
        isCorrect: false,
        error: 'Крышка: Резина выделяет в воду примеси (цинк, фенолы).'
    }
];
const BIO_MATERIALS = [
    {
        id: 'glass_boro',
        name: 'Боросиликатное стекло',
        visual: 'bg-blue-50/40',
        isCorrect: true
    },
    {
        id: 'plastic_thermo',
        name: 'Термостойкий пластик (PC/PP)',
        visual: 'bg-white/80',
        isCorrect: true
    },
    {
        id: 'pet_regular',
        name: 'Обычный ПЭТ (01)',
        visual: 'bg-cyan-50/30',
        isCorrect: false,
        error: 'Обычный ПЭТ расплавится в автоклаве при стерилизации тары.'
    },
    {
        id: 'glass_regular',
        name: 'Обычное стекло',
        visual: 'bg-emerald-50/40',
        isCorrect: false,
        error: 'Обычное стекло может треснуть при перепадах температур и стерилизации.'
    }
];
const BIO_CAPS = [
    {
        id: 'silicone_foil',
        name: 'Силиконовая пробка + фольга',
        isCorrect: true
    },
    {
        id: 'screw_plastic',
        name: 'Обычная винтовая',
        isCorrect: false,
        error: 'Обычная винтовая крышка не гарантирует сохранения стерильности.'
    },
    {
        id: 'cotton',
        name: 'Ватно-марлевая пробка',
        isCorrect: false,
        error: 'Ватно-марлевая пробка намокнет при транспортировке и пропустит контаминацию.'
    }
];
const BIO_ADDITIVES = [
    {
        id: 'thiosulfate',
        name: 'Тиосульфат натрия',
        desc: 'Дехлоратор',
        visual: 'bg-white',
        isCorrect: true
    },
    {
        id: 'none',
        name: 'Без добавок (пустой)',
        desc: 'Отсутствует',
        visual: 'hidden',
        isCorrect: false,
        error: 'Остаточный хлор в воде убьет бактерии до приезда в лабораторию. Нужен дехлоратор.'
    },
    {
        id: 'nitric_acid',
        name: 'Азотная кислота',
        desc: 'Консервант',
        visual: 'bg-yellow-200/50',
        isCorrect: false,
        error: 'Азотная кислота мгновенно убьет все микроорганизмы!'
    }
];
const CABINET_ITEMS = [
    {
        id: 'ethyl_wipes',
        name: 'Салфетки этиловые',
        category: 'disinfection',
        desc: 'Пропитка: Этиловый спирт 70%. Быстро испаряется, уничтожает вегетативные формы микроорганизмов, не оставляет налета.',
        isCorrect: true
    },
    {
        id: 'isop_wipes',
        name: 'Салфетки изопропиловые',
        category: 'disinfection',
        desc: 'Пропитка: Изопропиловый спирт 70%. Эффективный кожный антисептик, разрешен стандартами дезинфекции по ГОСТ 31942.',
        isCorrect: true
    },
    {
        id: 'antibact_wipes',
        name: 'Салфетки гигиенические (без спирта)',
        category: 'disinfection',
        desc: 'Пропитка: Водный раствор ПАВ (мыльные вещества), экстракт ромашки, парфюмерные отдушки.',
        isCorrect: false,
        error: 'Гигиенические салфетки с ПАВ: Оставили на кране невидимую мыльную пленку, которая смылась в бутылку для хим. анализа и исказила показатели pH и мутности.'
    },
    {
        id: 'gas_burner',
        name: 'Портативная газовая горелка',
        category: 'burner',
        desc: 'Насадка-горелка на цанговый баллон. Дает направленный факел пламени с температурой до 1300 °C. Предназначена для прокалки металлов.',
        isCorrect: true
    },
    {
        id: 'lighter_only',
        name: 'Бытовая зажигалка',
        category: 'burner',
        desc: 'Карманная газовая зажигалка. Дает мягкое диффузное пламя высотой до 2 см с температурой около 800 °C.',
        isCorrect: false,
        error: 'Обычная зажигалка: Слабое пламя не смогло прогреть толстый металлический кран. Стерильность при отборе бактериологии нарушена.'
    },
    {
        id: 'sterile_gloves',
        name: 'Перчатки хирургические латексные',
        category: 'safety',
        desc: 'Стерильные перчатки анатомической формы. Герметичная индивидуальная упаковка (пара).',
        isCorrect: true
    },
    {
        id: 'regular_gloves',
        name: 'Перчатки хозяйственные латексные',
        category: 'safety',
        desc: 'Плотные латексные перчатки желтого цвета. Предназначены для хозяйственных работ и мытья поверхностей.',
        isCorrect: false,
        error: 'Нестерильные перчатки: На латексе хозяйственных перчаток из открытой пачки были бактерии, которые при отборе попали в стерильный флакон.'
    },
    {
        id: 'waterproof_marker',
        name: 'Маркер перманентный черный',
        category: 'marking',
        desc: 'Чернила на спиртовой основе, быстросохнущие, устойчивые к воде, спирту и истиранию.',
        isCorrect: true
    },
    {
        id: 'regular_pencil',
        name: 'Карандаш графитовый HB',
        category: 'marking',
        desc: 'Обычный деревянный карандаш с грифелем средней мягкости.',
        isCorrect: false,
        error: 'Простой карандаш: Грифель размок под действием холодного конденсата в сумке, маркировка на бутылках стерлась.'
    },
    {
        id: 'safety_goggles',
        name: 'Очки защитные пластиковые',
        category: 'safety_goggles',
        desc: 'Защитные очки лаборанта. Предназначены для защиты органов зрения от брызг и открытого пламени горелки.',
        isCorrect: true
    },
    // НОВЫЕ ХАРДКОРНЫЕ ИНСТРУМЕНТЫ ДЛЯ ОТКРУЧИВАНИЯ АЭРАТОРА:
    {
        id: 'aerator_key_special',
        name: 'Специальный ключ для скрытых аэраторов',
        category: 'tools',
        desc: 'Компактный пластиковый ключ с пазами под стандартные внутренние и внешние резьбы аэраторов. Предотвращает царапины и деформацию металла.',
        isCorrect: true
    },
    {
        id: 'adjustable_wrench',
        name: 'Разводной шведский ключ',
        category: 'tools',
        desc: 'Металлический ключ с регулируемым расстоянием губок. Позволяет открутить любую внешнюю сантехническую гайку.',
        isCorrect: true
    },
    {
        id: 'pliers',
        name: 'Пассатижи монтажные (плоскогубцы)',
        category: 'tools',
        desc: 'Металлический ручной инструмент с зажимными губками и острыми зубцами для фиксации деталей.',
        isCorrect: false,
        error: 'Плоскогубцы: Острые металлические зубья пассатижей сорвали хромированное покрытие смесителя заявителя и необратимо деформировали резьбу аэратора.'
    }
];
const FREEZER_ITEMS = [
    {
        id: 'ice_eutectic',
        name: 'Эвтектический (водно-солевой) хладоэлемент',
        category: 'transport',
        desc: 'Жесткий полимерный брикет. Заполнен водно-солевым раствором. Удерживает температуру строго в диапазоне +2...+8°C за счет стабильной точки плавления соли при фазовом переходе.',
        isCorrect: true
    },
    {
        id: 'ice_gel',
        name: 'Гелевый хладоэлемент',
        category: 'transport',
        desc: 'Мягкий герметичный пакет с карбоксиметилцеллюлозой (гель). Быстро охлаждает, но быстро отдает холод, не имеет фиксированной точки фазового перехода.',
        isCorrect: false,
        error: 'Гелевый хладоэлемент: Отдал холод слишком быстро. К середине пути температура в сумке превысила +8°C, бактерии в пробах начали бесконтрольно размножаться.'
    },
    {
        id: 'ice_silicone',
        name: 'Силиконовый хладоэлемент',
        category: 'transport',
        desc: 'Герметичный пакет с силиконовым наполнителем. Медленно аккумулирует холод, используется преимущественно для бытового охлаждения.',
        isCorrect: false,
        error: 'Силиконовый хладоэлемент: Обладает слабой теплоемкостью для биологических стандартов. Пробы перегрелись в дороге.'
    }
];
const DIVIDER_ITEMS = [
    {
        id: 'divider_cardboard',
        name: 'Картонная перегородка',
        category: 'divider',
        desc: 'Плотный гофрированный картон, нарезанный по размеру сумки. Создаёт воздушную прослойку между хладоэлементом и тарой с пробой.',
        isCorrect: true
    },
    {
        id: 'divider_foam',
        name: 'Перегородка из пенопласта',
        category: 'divider',
        desc: 'Лист вспененного полистирола (пенопласт). Один из лучших доступных теплоизоляторов — замедляет передачу холода от хладоэлемента к таре с пробой.',
        isCorrect: true
    },
    {
        id: 'divider_water_bottle',
        name: 'Бутылка с водой',
        category: 'divider',
        desc: 'Закрытая пластиковая бутылка с обычной питьевой водой комнатной температуры.',
        isCorrect: false,
        error: 'Бутылка с водой не является теплоизолятором: она просто физически отодвигает пробу от хладоэлемента, но сама быстро принимает температуру льда и продолжает прямой контактный перенос холода — образец всё равно может переохладиться или замёрзнуть.'
    },
    {
        id: 'divider_sealant_bottle',
        name: 'Бутылка строительного герметика',
        category: 'divider',
        desc: 'Туба с силиконовым или акриловым герметиком для бытовых/строительных работ.',
        isCorrect: false,
        error: 'Герметик в тубе не предназначен для использования в зоне хранения проб питьевой воды: помимо того что это не теплоизолятор, при повреждении упаковки химические испарения герметика могут контактировать с тарой и исказить результаты химического анализа.'
    }
];
const SOME_STUFF = [
    {
        id: 'tape_distractor',
        name: 'Скотч',
        category: 'some_stuff',
        desc: 'Обычный упаковочный скотч на полипропиленовой основе.',
        isCorrect: false,
        error: 'Скотч сам по себе не является ни теплоизолятором, ни герметизирующим элементом тары — его использование здесь не решает задачу изоляции пробы от хладоэлемента.'
    }
];
const ALL_INVENTORY_ITEMS = [
    ...CABINET_ITEMS,
    ...FREEZER_ITEMS,
    ...DIVIDER_ITEMS,
    ...SOME_STUFF
];
}),
"[project]/app/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Header.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage1$2f$Step1_ChemTare$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage1/Step1_ChemTare.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage1$2f$Step2_BioTare$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage1/Step2_BioTare.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage1$2f$Step3_FieldKit$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage1/Step3_FieldKit.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage1$2f$Report$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage1/Report.jsx [app-ssr] (ecmascript)"); // Импорт нового отчета
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage2$2f$Step1_SitePrep$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage2/Step1_SitePrep.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage2$2f$Step2_WaterDrain$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage2/Step2_WaterDrain.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage2$2f$Step3_FaucetSterilize$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage2/Step3_FaucetSterilize.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage2$2f$Step4_BioSampling$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage2/Step4_BioSampling.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage2$2f$Step5_ChemSampling$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage2/Step5_ChemSampling.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage4$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage4/index.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Report$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Report.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$InventoryContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/InventoryContext.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$step1$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage3/step1.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$step2$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage3/step2.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$step3$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage3/step3.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$InventorySideBar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/InventorySideBar.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/itemRegistry.js [app-ssr] (ecmascript)");
// app/page.js
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function Home() {
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(9);
    const [showConfirm, setShowConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        chemCart: [],
        chemResults: [],
        chemScore: 0,
        chemFound1: false,
        chemFound2: false,
        bioCart: [],
        bioResults: [],
        bioScore: 0,
        bioFound1: false,
        bioFound2: false,
        kitResults: [],
        kitErrors: [],
        kitScore: 0,
        prepErrors: [],
        prepScorePenalty: 0,
        gogglesEquipped: false,
        glovesEquipped: null,
        drainErrors: [],
        drainScorePenalty: 0,
        drainGoal: null,
        drainType: null,
        drainSuccess: false,
        sterilizeErrors: [],
        sterilizeScorePenalty: 0,
        faucetType: null,
        sterilizeSuccess: false
    });
    const updateLogs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newData)=>{
        setLogs((prev)=>({
                ...prev,
                ...newData
            }));
    }, []);
    // Новый обработчик для перехода к отчету Stage 1
    const handleStage1Complete = ()=>{
        setCurrentStep(3.5); // Промежуточный шаг
    };
    const handleChemComplete = (chemData)=>{
        setLogs((prev)=>({
                ...prev,
                ...chemData
            }));
    // Не переходим автоматически - пользователь сам нажимает "Далее"
    };
    const handleBioComplete = (bioData)=>{
        setLogs((prev)=>({
                ...prev,
                ...bioData
            }));
    };
    const handleKitComplete = (kitData)=>{
        setLogs((prev)=>({
                ...prev,
                ...kitData
            }));
        // Переходим к отчету после завершения всех трех шагов
        setCurrentStep(3.5);
    };
    const handlePrepComplete = (prepData)=>{
        setLogs((prev)=>({
                ...prev,
                ...prepData
            }));
        setCurrentStep(5);
    };
    const handleDrainComplete = (drainData)=>{
        setLogs((prev)=>({
                ...prev,
                ...drainData
            }));
        setCurrentStep(6);
    };
    const handleSterilizeComplete = (sterilizeData)=>{
        setLogs((prev)=>({
                ...prev,
                ...sterilizeData
            }));
        setCurrentStep(7); // Теперь 2.4 — отбор био пробы
    };
    const handleBioSampleComplete = (bioSampleData)=>{
        setLogs((prev)=>({
                ...prev,
                ...bioSampleData
            }));
        setCurrentStep(8); // 2.5 chem rinse
    };
    const handleChemRinseComplete = (chemRinseData)=>{
        setLogs((prev)=>({
                ...prev,
                ...chemRinseData
            }));
        setCurrentStep(9); // Stage3
    };
    const [inventoryKey, setInventoryKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const handleStage4Complete = (stage4Data)=>{
        setLogs((prev)=>({
                ...prev,
                stage4Results: stage4Data
            }));
        setCurrentStep(13); // Переход к отчёту
    };
    const handleReset = ()=>{
        setLogs({
            chemCart: [],
            chemResults: [],
            chemScore: 0,
            chemFound1: false,
            chemFound2: false,
            bioCart: [],
            bioResults: [],
            bioScore: 0,
            bioFound1: false,
            bioFound2: false,
            kitResults: [],
            kitErrors: [],
            kitScore: 0,
            prepErrors: [],
            prepScorePenalty: 0,
            gogglesEquipped: false,
            glovesEquipped: null,
            drainErrors: [],
            drainScorePenalty: 0,
            drainGoal: null,
            drainType: null,
            drainSuccess: false,
            sterilizeErrors: [],
            sterilizeScorePenalty: 0,
            faucetType: null,
            sterilizeSuccess: false
        });
        setCurrentStep(1);
        setInventoryKey((key)=>key + 1);
    };
    const buildInitialInventory = (logsData)=>{
        const items = [];
        (logsData.kitResults || []).forEach((kitItem)=>{
            items.push({
                id: kitItem.id,
                name: kitItem.name,
                qty: kitItem.qty ?? 1
            });
        });
        const chemGrouped = {};
        (logsData.chemResults || []).forEach((res)=>{
            const key = res.configKey || res.name;
            if (!chemGrouped[key]) {
                chemGrouped[key] = {
                    id: `chem_tare_${key}`,
                    name: `Тара Хим. — ${res.name} (${res.vol}л)`,
                    qty: 0
                };
            }
            chemGrouped[key].qty += 1;
        });
        items.push(...Object.values(chemGrouped));
        const bioGrouped = {};
        (logsData.bioResults || []).forEach((res)=>{
            const key = res.configKey || res.name;
            if (!bioGrouped[key]) {
                bioGrouped[key] = {
                    id: `bio_tare_${key}`,
                    name: `Тара Био — ${res.name} (${res.vol}л)`,
                    qty: 0
                };
            }
            bioGrouped[key].qty += 1;
        });
        items.push(...Object.values(bioGrouped));
        return items;
    };
    const initialInventoryItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>buildInitialInventory(logs), [
        logs
    ]);
    // Stage 3
    const [stage3Report, setStage3Report] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        marking: null,
        cooling: null,
        digitalAct: null
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-slate-100 p-8 flex flex-col items-center font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                currentStep: currentStep,
                onStepClick: (step)=>{
                    // Allow navigation within Stage1 and Stage2. Confirm when going from stage1->stage2.
                    if (currentStep <= 3 && step >= 4) {
                        setShowConfirm(true);
                        return;
                    }
                    // Allow switching inside stage bounds
                    if (step >= 1 && step <= 3 || step >= 4 && step <= 8 || step >= 9 && step <= 11) {
                        setCurrentStep(step);
                    }
                }
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 155,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$InventoryContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InventoryProvider"], {
                initialItems: initialInventoryItems,
                shouldInitialize: currentStep >= 4,
                children: [
                    currentStep === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage1$2f$Step1_ChemTare$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        savedData: logs,
                        onUpdate: updateLogs,
                        onComplete: (d)=>{
                            updateLogs(d);
                            setCurrentStep(2);
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 175,
                        columnNumber: 27
                    }, this),
                    currentStep === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage1$2f$Step2_BioTare$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        savedData: logs,
                        onUpdate: updateLogs,
                        onComplete: (d)=>{
                            updateLogs(d);
                            setCurrentStep(3);
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 176,
                        columnNumber: 27
                    }, this),
                    currentStep === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage1$2f$Step3_FieldKit$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        savedData: logs,
                        onUpdate: updateLogs,
                        onComplete: handleKitComplete
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 177,
                        columnNumber: 27
                    }, this),
                    currentStep === 3.5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage1$2f$Report$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        logs: logs,
                        onContinue: ()=>setCurrentStep(4)
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 178,
                        columnNumber: 29
                    }, this),
                    currentStep === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage2$2f$Step1_SitePrep$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        logs: logs,
                        savedData: logs,
                        onComplete: (d)=>{
                            updateLogs(d);
                            setCurrentStep(5);
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 179,
                        columnNumber: 27
                    }, this),
                    currentStep === 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage2$2f$Step2_WaterDrain$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        logs: logs,
                        onComplete: handleDrainComplete
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 180,
                        columnNumber: 27
                    }, this),
                    currentStep === 6 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage2$2f$Step3_FaucetSterilize$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        logs: logs,
                        onComplete: handleSterilizeComplete
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 181,
                        columnNumber: 27
                    }, this),
                    currentStep === 7 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage2$2f$Step4_BioSampling$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        logs: logs,
                        onComplete: handleBioSampleComplete
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 182,
                        columnNumber: 27
                    }, this),
                    currentStep === 8 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage2$2f$Step5_ChemSampling$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        logs: logs,
                        onComplete: handleChemRinseComplete
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 183,
                        columnNumber: 27
                    }, this),
                    currentStep >= 9 && currentStep <= 11 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-6 items-start w-full max-w-7xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$InventorySideBar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 188,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    currentStep === 9 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$step1$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        onComplete: (result)=>{
                                            setStage3Report((prev)=>({
                                                    ...prev,
                                                    marking: result
                                                }));
                                            setCurrentStep(10); // Переход к консервации и охлаждению
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 191,
                                        columnNumber: 13
                                    }, this),
                                    currentStep === 10 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$step2$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        onComplete: (result)=>{
                                            setStage3Report((prev)=>({
                                                    ...prev,
                                                    cooling: result
                                                }));
                                            setCurrentStep(11); // Переход к заполнению Акта
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, this),
                                    currentStep === 11 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$step3$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        onComplete: (result)=>{
                                            setStage3Report((prev)=>({
                                                    ...prev,
                                                    digitalAct: result
                                                }));
                                            setCurrentStep(12); // Переход на Этап 4 (симулятор транспортировки)
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 204,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 189,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 187,
                        columnNumber: 7
                    }, this),
                    currentStep === 12 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage4$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onComplete: handleStage4Complete
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 216,
                        columnNumber: 28
                    }, this),
                    currentStep === 13 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Report$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        logs: logs,
                        onReset: handleReset,
                        stage3Report: stage3Report
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 217,
                        columnNumber: 28
                    }, this)
                ]
            }, inventoryKey, true, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 174,
                columnNumber: 3
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.jsx",
        lineNumber: 153,
        columnNumber: 1
    }, this);
}
}),
];

//# sourceMappingURL=_1k5q9hg._.js.map