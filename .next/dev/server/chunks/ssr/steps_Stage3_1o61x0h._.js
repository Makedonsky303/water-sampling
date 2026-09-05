module.exports = [
"[project]/steps/Stage3/data/markingData.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/stage3/data/markingData.js
__turbopack_context__.s([
    "CHECKLIST_OPTIONS",
    ()=>CHECKLIST_OPTIONS,
    "CONTAINERS",
    ()=>CONTAINERS,
    "ENCRYPTION_OPTIONS",
    ()=>ENCRYPTION_OPTIONS,
    "FOIL_PLACEMENT_OPTIONS",
    ()=>FOIL_PLACEMENT_OPTIONS,
    "FREEZE_OPTIONS",
    ()=>FREEZE_OPTIONS,
    "LABEL_FIELDS",
    ()=>LABEL_FIELDS,
    "MARKER_OPTIONS",
    ()=>MARKER_OPTIONS,
    "POSITION_OPTIONS",
    ()=>POSITION_OPTIONS,
    "TEMPERATURE_OPTIONS",
    ()=>TEMPERATURE_OPTIONS
]);
const CONTAINERS = [
    {
        id: 'bottle_2l',
        name: 'Канистра пластиковая 2.0 дм³',
        emoji: '🧴',
        size: 'large',
        hasFoil: false,
        codeSuffix: 'А'
    },
    {
        id: 'vial_05l',
        name: 'Флакон 0.5 дм³ (в фольге)',
        emoji: '🫙',
        size: 'small',
        hasFoil: true,
        codeSuffix: 'Б'
    }
];
const MARKER_OPTIONS = [
    {
        id: 'ballpoint',
        icon: '🖊️',
        label: 'Обычная шариковая синяя ручка',
        correct: false,
        feedback: 'Паста шариковой ручки расплывается и стирается от конденсата и трения.'
    },
    {
        id: 'whiteboard',
        icon: '🖍️',
        label: 'Спиртовой маркер для белых досок (Whiteboard marker)',
        correct: false,
        feedback: 'Маркеры для досок созданы легко стираться сухой тканью. Надпись исчезнет.'
    },
    {
        id: 'water_marker',
        icon: '🖋️',
        label: 'Водостойкий перманентный маркер на спиртовой основе',
        correct: true,
        feedback: 'Отличный выбор! Перманентный маркер не смывается конденсатом.'
    },
    {
        id: 'gel_pen',
        icon: '✒️',
        label: 'Гелевая черная ручка',
        correct: false,
        feedback: 'Гелевые чернила сделаны на водной основе. Надпись полностью потечет.'
    }
];
const ENCRYPTION_OPTIONS = [
    {
        id: 'one_bottle',
        label: 'Написать код только на одной бутылке, вторая "и так понятна".',
        correct: false,
        feedback: 'Неверно. Каждая емкость является самостоятельной единицей учета.'
    },
    {
        id: 'cross_code',
        label: 'Нанести один и тот же уникальный сквозной код (например, № 143-ХВ и № 143-БВ) на обе емкости и продублировать его в полевом журнале.',
        correct: true,
        feedback: 'Абсолютно верно! Сквозное кодирование сохраняет анонимность параметров для объективности анализа.'
    },
    {
        id: 'only_names',
        label: 'Написать на канистре "Химия", а на флаконе "Бактериология" без цифр.',
        correct: false,
        feedback: 'Ошибка. Принцип обезличивания требует уникального цифрового или буквенно-цифрового шифра.'
    }
];
const FOIL_PLACEMENT_OPTIONS = [
    {
        id: 'on_foil',
        icon: '🥡',
        label: 'Прямо поверх алюминиевой фольги на горлышке',
        correct: false,
        feedback: 'Ошибка! В лаборатории фольгу снимут — проба мгновенно потеряет маркировку.'
    },
    {
        id: 'on_body',
        icon: '🫙',
        label: 'На боковую стеклянную/пластиковую стенку самого флакона (по центру ёмкости)',
        correct: true,
        feedback: 'Верно! Этикетка на теле флакона остаётся на месте на всех этапах анализа.'
    }
];
const CHECKLIST_OPTIONS = [
    {
        id: 'sample_code',
        label: 'Уникальный код (номер) пробы',
        required: true
    },
    {
        id: 'object_name',
        label: 'Наименование объекта отбора (источника)',
        required: true
    },
    {
        id: 'sample_type',
        label: 'Вид пробы (цель анализа/тип воды)',
        required: true
    },
    {
        id: 'date_time',
        label: 'Дата и время отбора',
        required: true
    },
    {
        id: 'sampler_fio',
        label: 'ФИО пробоотборщика',
        required: true
    },
    {
        id: 'preservation',
        label: 'Метод консервации или отметка об охлаждении',
        required: true
    },
    {
        id: 'weather',
        label: 'Погодные условия (температура воздуха, осадки)',
        required: false
    },
    {
        id: 'transport',
        label: 'Номер автомобиля службы доставки',
        required: false
    }
];
const LABEL_FIELDS = [
    {
        id: 'sampleCode',
        label: 'Код пробы',
        type: 'text',
        placeholder: 'Например, №143',
        required: true
    },
    {
        id: 'objectName',
        label: 'Наименование объекта отбора',
        type: 'text',
        placeholder: 'Скважина №2, м-ние...',
        required: true
    },
    {
        id: 'sampleType',
        label: 'Вид пробы',
        type: 'text',
        placeholder: 'Вода подземная',
        required: true
    },
    {
        id: 'date',
        label: 'Дата отбора',
        type: 'date',
        required: true
    },
    {
        id: 'time',
        label: 'Время отбора (24ч)',
        type: 'text',
        placeholder: 'Например, 14:30',
        required: true,
        pattern: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/
    },
    {
        id: 'samplerFio',
        label: 'ФИО пробоотборщика',
        type: 'text',
        placeholder: 'Иванов И.И.',
        required: true
    },
    {
        id: 'preservation',
        label: 'Метод консервации/охлаждения',
        type: 'select',
        required: true,
        options: [
            '',
            'Без консервации, охлаждение 2–8°C',
            'Подкисление HNO3',
            'Подкисление H2SO4',
            'Фиксация (фольга, темнота)'
        ]
    },
    {
        id: 'notes',
        label: 'Примечания',
        type: 'text',
        placeholder: 'необязательно',
        required: false
    }
];
const POSITION_OPTIONS = [
    {
        id: 'horiz',
        label: 'Положить горизонтально на бок, чтобы они не упали при тряске в машине.',
        correct: false,
        feedback: 'Ошибка! Увеличивается площадь контакта химии с крышкой, а бак-проба может протечь.'
    },
    {
        id: 'vert',
        label: 'Разместить строго вертикально, зафиксировав в специальных пазах или уплотнив свободное пространство.',
        correct: true,
        feedback: 'Верно! Вертикальное положение гарантирует герметичность и минимизирует риски протечки.'
    },
    {
        id: 'mix',
        label: 'Поставить канистру вертикально, а маленький флакон положить сверху на нее.',
        correct: false,
        feedback: 'Ошибка! Маленький флакон свободно упадет при первой же тряске автомобиля.'
    }
];
const FREEZE_OPTIONS = [
    {
        id: 'close',
        label: 'Прижать флакон вплотную к замороженному хладоэлементу, чтобы вода быстрее охладилась.',
        correct: false,
        feedback: 'Ошибка! Замораживание бак-пробы категорически запрещено — лед разрушит клетки бактерий, анализ будет аннулирован.'
    },
    {
        id: 'isolated',
        label: 'Разместить флакон по центру сумки, изолировав его от прямого контакта с хладоэлементами с помощью специальной перегородки или прослойки.',
        correct: true,
        feedback: 'Абсолютно верно! Защитная перегородка предохраняет живую микрофлору от крио-деструкции.'
    },
    {
        id: 'no_ice',
        label: 'Вытащить хладоэлементы вообще, чтобы не рисковать пробой.',
        correct: false,
        feedback: 'Неверно. Без хладоэлементов температура внутри поднимется выше нормы, запустив неконтролируемый рост бактерий.'
    }
];
const TEMPERATURE_OPTIONS = [
    {
        id: 'subzero',
        label: 'Ниже 0 °C (желательно -5...-2 °C), чтобы законсервировать все процессы.',
        correct: false,
        feedback: 'Ошибка! Минусовая температура заморозит воду и уничтожит бактериологическую пробу.'
    },
    {
        id: 'ideal',
        label: 'В пределах +2...+5 °C (допускается до +10 °C, но оптимально +2...+5 °C).',
        correct: true,
        feedback: 'Правильно! Это стандартный температурный коридор, замедляющий биохимические процессы без заморозки.'
    },
    {
        id: 'room',
        label: 'Около +15...+20 °C (комнатная температура, чтобы бактериям было комфортно).',
        correct: false,
        feedback: 'Критическая ошибка! При температуре выше +10 °C в пробе начнется неконтролируемый рост микрофлоры. Посев покажет ложные данные.'
    }
];
}),
"[project]/steps/Stage3/components/labelForm.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LabelForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$markingData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage3/data/markingData.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function LabelForm({ container, initialData, onSave, onClose }) {
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>({
            ...initialData,
            dateText: initialData?.dateText || ''
        }));
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [showCalendar, setShowCalendar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [calendarDate, setCalendarDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Date());
    // ---------------- helpers ----------------
    const pad = (n)=>n < 10 ? `0${n}` : n;
    const formatDMY = (date)=>{
        const d = pad(date.getDate());
        const m = pad(date.getMonth() + 1);
        const y = date.getFullYear();
        return `${d}/${m}/${y}`;
    };
    const formatISO = (date)=>{
        const y = date.getFullYear();
        const m = pad(date.getMonth() + 1);
        const d = pad(date.getDate());
        return `${y}-${m}-${d}`;
    };
    const parseDMY = (str)=>{
        const [d, m, y] = str.split('/');
        if (!d || !m || !y) return null;
        return new Date(y, m - 1, d);
    };
    // ---------------- state ----------------
    const handleChange = (id, value)=>{
        setData((prev)=>({
                ...prev,
                [id]: value
            }));
        if (errors[id]) setErrors((prev)=>({
                ...prev,
                [id]: null
            }));
    };
    // ---------------- DATE ----------------
    const handleSelectDate = (date)=>{
        setCalendarDate(date);
        handleChange('dateText', formatDMY(date));
        handleChange('date', formatISO(date));
        setShowCalendar(false);
    };
    const handleTextChange = (value)=>{
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
    const goToday = ()=>{
        const today = new Date();
        setCalendarDate(today);
        handleSelectDate(today);
    };
    // ---------------- SAVE ----------------
    const handleSave = ()=>{
        const newErrors = {};
        __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$markingData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LABEL_FIELDS"].forEach((field)=>{
            const value = (data[field.id] || '').trim();
            // required check
            if (field.required && !value) {
                newErrors[field.id] = 'Поле обязательно';
                return;
            }
            // pattern check (ВАЖНО для времени)
            if (field.pattern && value && !field.pattern.test(value)) {
                newErrors[field.id] = 'Неверный формат времени (HH:MM, 24ч). Пример: 14:30';
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
            date: data.dateText
        });
    };
    // ---------------- CALENDAR ----------------
    const buildCalendar = ()=>{
        const year = calendarDate.getFullYear();
        const month = calendarDate.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const start = firstDay.getDay() || 7;
        const days = [];
        for(let i = 1; i < start; i++)days.push(null);
        for(let i = 1; i <= lastDay.getDate(); i++){
            days.push(new Date(year, month, i));
        }
        return days;
    };
    const monthNames = [
        'Янв',
        'Фев',
        'Мар',
        'Апр',
        'Май',
        'Июн',
        'Июл',
        'Авг',
        'Сен',
        'Окт',
        'Ноя',
        'Дек'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80",
        onClick: (e)=>e.target === e.currentTarget && onClose(),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-2xl bg-white rounded-2xl shadow-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-800 text-white px-6 py-4 rounded-t-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-sm",
                                children: "Этикетка пробы"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/labelForm.jsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-300",
                                children: container.name
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/labelForm.jsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage3/components/labelForm.jsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 grid grid-cols-1 sm:grid-cols-2 gap-4",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$markingData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LABEL_FIELDS"].map((field)=>{
                            const hasError = !!errors[field.id];
                            const isDate = field.id === 'date';
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: field.id === 'objectName' ? 'sm:col-span-2' : '',
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-bold block mb-1",
                                        children: field.label
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage3/components/labelForm.jsx",
                                        lineNumber: 158,
                                        columnNumber: 17
                                    }, this),
                                    isDate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: data.dateText || '',
                                                placeholder: "dd/mm/yyyy",
                                                onChange: (e)=>handleTextChange(e.target.value),
                                                className: `w-full px-3 py-2 pr-10 border rounded-lg text-sm
                        ${hasError ? 'border-red-400 bg-red-50' : 'border-slate-300'}`
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage3/components/labelForm.jsx",
                                                lineNumber: 166,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setShowCalendar(true),
                                                className: "absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-slate-600 hover:text-blue-600",
                                                children: "📅"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage3/components/labelForm.jsx",
                                                lineNumber: 175,
                                                columnNumber: 21
                                            }, this),
                                            hasError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-red-500 text-[10px] mt-1",
                                                children: errors.date
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage3/components/labelForm.jsx",
                                                lineNumber: 184,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage3/components/labelForm.jsx",
                                        lineNumber: 164,
                                        columnNumber: 19
                                    }, this) : // NON-DATE FIELDS
                                    field.type === 'select' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: data[field.id] || '',
                                        onChange: (e)=>handleChange(field.id, e.target.value),
                                        className: `w-full px-3 py-2 border rounded-lg text-sm
                        ${hasError ? 'border-red-400 bg-red-50' : 'border-slate-300'}`,
                                        children: field.options?.map((opt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: opt,
                                                children: opt || 'Выберите...'
                                            }, i, false, {
                                                fileName: "[project]/steps/Stage3/components/labelForm.jsx",
                                                lineNumber: 199,
                                                columnNumber: 25
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage3/components/labelForm.jsx",
                                        lineNumber: 192,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: field.type,
                                        value: data[field.id] || '',
                                        onChange: (e)=>handleChange(field.id, e.target.value),
                                        placeholder: field.placeholder,
                                        className: `w-full px-3 py-2 border rounded-lg text-sm
                        ${hasError ? 'border-red-400 bg-red-50' : 'border-slate-300'}`
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage3/components/labelForm.jsx",
                                        lineNumber: 205,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, field.id, true, {
                                fileName: "[project]/steps/Stage3/components/labelForm.jsx",
                                lineNumber: 156,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage3/components/labelForm.jsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-4 border-t flex justify-end gap-2 bg-slate-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "px-4 py-2",
                                children: "Отмена"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/labelForm.jsx",
                                lineNumber: 224,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSave,
                                className: "bg-blue-600 text-white px-4 py-2 rounded-lg",
                                children: "Сохранить"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/labelForm.jsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage3/components/labelForm.jsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage3/components/labelForm.jsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            showCalendar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[60] flex items-center justify-center bg-black/40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl shadow-xl p-4 w-[320px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setCalendarDate(new Date(calendarDate.getFullYear(), calendarDate.getMonth() - 1)),
                                    children: "◀"
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage3/components/labelForm.jsx",
                                    lineNumber: 242,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-bold",
                                    children: [
                                        monthNames[calendarDate.getMonth()],
                                        " ",
                                        calendarDate.getFullYear()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/steps/Stage3/components/labelForm.jsx",
                                    lineNumber: 250,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setCalendarDate(new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1)),
                                    children: "▶"
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage3/components/labelForm.jsx",
                                    lineNumber: 254,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/steps/Stage3/components/labelForm.jsx",
                            lineNumber: 241,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-7 text-center text-xs font-bold mb-2",
                            children: [
                                'Пн',
                                'Вт',
                                'Ср',
                                'Чт',
                                'Пт',
                                'Сб',
                                'Вс'
                            ].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: d
                                }, d, false, {
                                    fileName: "[project]/steps/Stage3/components/labelForm.jsx",
                                    lineNumber: 266,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage3/components/labelForm.jsx",
                            lineNumber: 264,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-7 gap-1 text-center",
                            children: buildCalendar().map((date, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleSelectDate(date),
                                        className: "w-8 h-8 rounded hover:bg-blue-100 cursor-pointer",
                                        children: date.getDate()
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage3/components/labelForm.jsx",
                                        lineNumber: 275,
                                        columnNumber: 21
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/steps/Stage3/components/labelForm.jsx",
                                    lineNumber: 273,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage3/components/labelForm.jsx",
                            lineNumber: 271,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between mt-4 pt-3 border-t",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowCalendar(false),
                                    className: "text-sm text-slate-600 hover:text-red-500 cursor-pointer",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage3/components/labelForm.jsx",
                                    lineNumber: 289,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: goToday,
                                    className: "text-sm text-blue-600 font-semibold hover:underline cursor-pointer",
                                    children: "Today"
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage3/components/labelForm.jsx",
                                    lineNumber: 296,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/steps/Stage3/components/labelForm.jsx",
                            lineNumber: 287,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/steps/Stage3/components/labelForm.jsx",
                    lineNumber: 238,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/steps/Stage3/components/labelForm.jsx",
                lineNumber: 236,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/steps/Stage3/components/labelForm.jsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
}),
"[project]/steps/Stage3/components/containerCard.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContainerCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function ContainerCard({ container, labelData, onOpenForm, disabled }) {
    const isLabeled = !!labelData;
    const isLarge = container.size === 'large';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex flex-col items-center gap-3 p-4 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300
    ${disabled ? 'bg-slate-100 opacity-60 grayscale' : 'bg-white hover:shadow-lg hover:-translate-y-1'}
  `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex flex-col items-center justify-end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center justify-center ${isLarge ? 'w-32 h-40' : 'w-32 h-40'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-6xl select-none",
                            children: container.emoji
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage3/components/containerCard.jsx",
                            lineNumber: 28,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage3/components/containerCard.jsx",
                        lineNumber: 23,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        disabled: disabled,
                        onClick: ()=>!disabled && onOpenForm(),
                        className: `mt-2 rounded-md border-2 flex flex-col items-center justify-center text-[10px] leading-tight p-1 transition-all duration-300
        ${disabled ? 'bg-slate-200 border-slate-300 text-slate-400 cursor-not-allowed' : isLabeled ? 'bg-emerald-50 border-emerald-400 text-emerald-800 hover:scale-105 cursor-pointer' : 'bg-amber-50/90 border-dashed border-amber-400 text-amber-600 animate-pulse hover:scale-105 cursor-pointer'}
      `,
                        style: {
                            width: '64px',
                            height: '44px'
                        },
                        children: disabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-[8px] text-center",
                            children: [
                                "✏️ Возьмите",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/steps/Stage3/components/containerCard.jsx",
                                    lineNumber: 51,
                                    columnNumber: 22
                                }, this),
                                "маркер"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/steps/Stage3/components/containerCard.jsx",
                            lineNumber: 50,
                            columnNumber: 9
                        }, this) : isLabeled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold truncate w-full text-center",
                                    children: [
                                        "Код: ",
                                        labelData.sampleCode
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/steps/Stage3/components/containerCard.jsx",
                                    lineNumber: 55,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "truncate w-full text-center opacity-70",
                                    children: labelData.time
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage3/components/containerCard.jsx",
                                    lineNumber: 58,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-[9px]",
                            children: "Заполнить 📝"
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage3/components/containerCard.jsx",
                            lineNumber: 63,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage3/components/containerCard.jsx",
                        lineNumber: 32,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage3/components/containerCard.jsx",
                lineNumber: 20,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-bold text-xs text-slate-800 text-center",
                children: container.name
            }, void 0, false, {
                fileName: "[project]/steps/Stage3/components/containerCard.jsx",
                lineNumber: 70,
                columnNumber: 3
            }, this),
            disabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] text-amber-600 font-semibold text-center",
                children: "Требуется перманентный маркер"
            }, void 0, false, {
                fileName: "[project]/steps/Stage3/components/containerCard.jsx",
                lineNumber: 75,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/steps/Stage3/components/containerCard.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/steps/Stage3/components/checklistInteractive.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChecklistInteractive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$markingData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage3/data/markingData.jsx [app-ssr] (ecmascript)");
// app/stage3/components/ChecklistInteractive.jsx
'use client';
;
;
;
function ChecklistInteractive({ checked = {}, onChange }) {
    const toggle = (id)=>{
        onChange({
            ...checked,
            [id]: !checked[id]
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-2xl border border-slate-200 p-5 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-3xl",
                        children: "📋"
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage3/components/checklistInteractive.jsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-slate-800 text-sm mb-1",
                                children: "Вопрос 4: Обязательные реквизиты этикетки"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/checklistInteractive.jsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-600 leading-relaxed",
                                children: "Отметьте ВСЕ реквизиты, которые согласно стандартам Республики Казахстан обязаны присутствовать на каждой этикетке:"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/checklistInteractive.jsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage3/components/checklistInteractive.jsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage3/components/checklistInteractive.jsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$markingData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHECKLIST_OPTIONS"].map((opt)=>{
                    const isChecked = !!checked[opt.id];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>toggle(opt.id),
                        className: `w-full flex items-center justify-between p-3 rounded-xl border-2 text-left transition-all
                ${isChecked ? 'bg-blue-50 border-blue-400 text-blue-950' : 'bg-slate-50 border-slate-200 hover:border-slate-300'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-semibold text-slate-700",
                                children: opt.label
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/checklistInteractive.jsx",
                                lineNumber: 34,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-5 h-5 rounded border flex items-center justify-center text-xs font-bold
                ${isChecked ? 'bg-blue-500 border-blue-600 text-white' : 'border-slate-300 bg-white'}`,
                                children: isChecked && '✓'
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/checklistInteractive.jsx",
                                lineNumber: 35,
                                columnNumber: 15
                            }, this)
                        ]
                    }, opt.id, true, {
                        fileName: "[project]/steps/Stage3/components/checklistInteractive.jsx",
                        lineNumber: 27,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/steps/Stage3/components/checklistInteractive.jsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/steps/Stage3/components/checklistInteractive.jsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/steps/Stage3/components/markerchoiceInteractive.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MarkerChoiceInteractive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$markingData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage3/data/markingData.jsx [app-ssr] (ecmascript)");
// app/stage3/components/MarkerChoiceInteractive.jsx
'use client';
;
;
;
function MarkerChoiceInteractive({ selectedId, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-2xl border border-slate-200 p-5 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-3xl",
                        children: "💧"
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage3/components/markerchoiceInteractive.jsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-slate-800 text-sm mb-1",
                                children: "Вопрос 1: Борьба с конденсатом"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/markerchoiceInteractive.jsx",
                                lineNumber: 12,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-600 leading-relaxed",
                                children: "Пробы будут транспортироваться в сумке-холодильнике. Из-за разницы температур на поверхности выступит конденсат. Какой инструмент выберем?"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/markerchoiceInteractive.jsx",
                                lineNumber: 13,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage3/components/markerchoiceInteractive.jsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage3/components/markerchoiceInteractive.jsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-2",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$markingData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MARKER_OPTIONS"].map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onChange(opt.id),
                        className: `flex items-center gap-3 p-3 rounded-xl border-2 text-left transition-all
              ${selectedId === opt.id ? 'bg-blue-50 border-blue-500 text-blue-900' : 'bg-slate-50 border-slate-200 hover:border-slate-300'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl shrink-0",
                                children: opt.icon
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/markerchoiceInteractive.jsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-semibold text-slate-700",
                                children: opt.label
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/markerchoiceInteractive.jsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this)
                        ]
                    }, opt.id, true, {
                        fileName: "[project]/steps/Stage3/components/markerchoiceInteractive.jsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/steps/Stage3/components/markerchoiceInteractive.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/steps/Stage3/components/markerchoiceInteractive.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/steps/Stage3/components/foilplacementInteractive.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FoilPlacementInteractive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$markingData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage3/data/markingData.jsx [app-ssr] (ecmascript)");
// app/stage3/components/FoilPlacementInteractive.jsx
'use client';
;
;
;
function FoilPlacementInteractive({ selectedId, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-2xl border border-slate-200 p-5 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-3xl",
                        children: "🫙"
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage3/components/foilplacementInteractive.jsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-slate-800 text-sm mb-1",
                                children: "Вопрос 3: Стерильный флакон и фольга"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/foilplacementInteractive.jsx",
                                lineNumber: 12,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-600 leading-relaxed",
                                children: "Вы маркируете флакон 0.5 дм³ для бактериологии. Горлышко защищено стерильной алюминиевой фольгой. Где будет находиться этикетка?"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/foilplacementInteractive.jsx",
                                lineNumber: 13,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage3/components/foilplacementInteractive.jsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage3/components/foilplacementInteractive.jsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-2",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$markingData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FOIL_PLACEMENT_OPTIONS"].map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onChange(opt.id),
                        className: `flex items-center gap-3 p-3 rounded-xl border-2 text-left transition-all
              ${selectedId === opt.id ? 'bg-blue-50 border-blue-500 text-blue-900' : 'bg-slate-50 border-slate-200 hover:border-slate-300'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl shrink-0",
                                children: opt.icon
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/foilplacementInteractive.jsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-semibold text-slate-700",
                                children: opt.label
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/foilplacementInteractive.jsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this)
                        ]
                    }, opt.id, true, {
                        fileName: "[project]/steps/Stage3/components/foilplacementInteractive.jsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/steps/Stage3/components/foilplacementInteractive.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/steps/Stage3/components/foilplacementInteractive.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/steps/Stage3/components/EncryptionInteractive.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EncryptionInteractive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$markingData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage3/data/markingData.jsx [app-ssr] (ecmascript)");
// app/stage3/components/EncryptionInteractive.jsx
'use client';
;
;
;
function EncryptionInteractive({ selectedId, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-2xl border border-slate-200 p-5 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-3xl",
                        children: "🔐"
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage3/components/EncryptionInteractive.jsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-slate-800 text-sm mb-1",
                                children: "Вопрос 2: Обезличивание и шифрование пробы"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/EncryptionInteractive.jsx",
                                lineNumber: 12,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-600 leading-relaxed",
                                children: 'Для обеспечения объективности анализа в крупных лабораториях часто используется принцип "слепого" тестирования (шифрование). Как правильно нанести уникальный код пробы на тару для химии и бактериологии?'
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/EncryptionInteractive.jsx",
                                lineNumber: 15,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage3/components/EncryptionInteractive.jsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage3/components/EncryptionInteractive.jsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$markingData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENCRYPTION_OPTIONS"].map((opt)=>{
                    const isSelected = selectedId === opt.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onChange(opt.id),
                        className: `w-full text-left p-3.5 rounded-xl border-2 transition-all flex items-start gap-3
                ${isSelected ? 'bg-blue-50 border-blue-500 text-blue-950' : 'bg-slate-50 border-slate-200 hover:border-slate-300'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-4 h-4 rounded-full border shrink-0 mt-0.5 flex items-center justify-center
                ${isSelected ? 'border-blue-500 bg-blue-500' : 'border-slate-300 bg-white'}`,
                                children: isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-1.5 h-1.5 rounded-full bg-white"
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage3/components/EncryptionInteractive.jsx",
                                    lineNumber: 37,
                                    columnNumber: 32
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/EncryptionInteractive.jsx",
                                lineNumber: 35,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-semibold leading-relaxed text-slate-700",
                                children: opt.label
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/EncryptionInteractive.jsx",
                                lineNumber: 39,
                                columnNumber: 15
                            }, this)
                        ]
                    }, opt.id, true, {
                        fileName: "[project]/steps/Stage3/components/EncryptionInteractive.jsx",
                        lineNumber: 26,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/steps/Stage3/components/EncryptionInteractive.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/steps/Stage3/components/EncryptionInteractive.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/steps/Stage3/step1.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Step1_Marking
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$markingData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage3/data/markingData.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$components$2f$labelForm$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage3/components/labelForm.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$components$2f$containerCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage3/components/containerCard.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$components$2f$checklistInteractive$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage3/components/checklistInteractive.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$components$2f$markerchoiceInteractive$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage3/components/markerchoiceInteractive.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$components$2f$foilplacementInteractive$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage3/components/foilplacementInteractive.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$components$2f$EncryptionInteractive$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage3/components/EncryptionInteractive.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$InventoryContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/InventoryContext.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/itemRegistry.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$MinecraftInventory$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/MinecraftInventory.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$Avatar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/Avatar.jsx [app-ssr] (ecmascript)");
// steps/Stage3/Step1_Marking.jsx
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
function Step1_Marking({ onComplete }) {
    const inventory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$InventoryContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInventoryContext"])();
    const hasMarkerInHand = inventory.activeItem?.id === 'waterproof_marker';
    // Состояния ответов на тесты
    const [markerId, setMarkerId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // const [labelsPlacement, setLabelsPlacement] = useState({});
    const [encryptionId, setEncryptionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [foilPlacementId, setFoilPlacementId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [checklist, setChecklist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [labelsData, setLabelsData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    // Техническое состояние модальных окон и итогов
    const [activeFormId, setActiveFormId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [quizResult, setQuizResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Проверка готовности формы к отправке
    const isAllFormsFilled = __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$markingData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTAINERS"].every((c)=>!!labelsData[c.id]);
    // const isAllPlacementsSelected = CONTAINERS.every(c => !!labelsPlacement[c.id]);
    const isChecklistTouched = Object.keys(checklist).length > 0;
    const isReadyToSubmit = !!markerId && !!encryptionId && !!foilPlacementId && Object.keys(checklist).length > 0 && __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$markingData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTAINERS"].every((c)=>!!labelsData[c.id]);
    const handleSubmitTest = ()=>{
        let score = 0;
        const report = [];
        const totalQuestions = 4;
        // 1. Проверка инструмента
        const markerOpt = __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$markingData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MARKER_OPTIONS"].find((o)=>o.id === markerId);
        if (markerOpt?.correct) {
            score++;
            report.push({
                q: 'Инструмент разметки',
                success: true,
                text: 'Верно! Выбран перманентный маркер.'
            });
        } else {
            report.push({
                q: 'Инструмент разметки',
                success: false,
                text: markerOpt?.feedback || 'Неверно.'
            });
        }
        // 3. Проверка шифрования
        const encryptOpt = __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$markingData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENCRYPTION_OPTIONS"].find((o)=>o.id === encryptionId);
        if (encryptOpt?.correct) {
            score++;
            report.push({
                q: 'Шифрование пробы',
                success: true,
                text: 'Верно! Применен сквозной код.'
            });
        } else {
            report.push({
                q: 'Шифрование пробы',
                success: false,
                text: encryptOpt?.feedback || 'Неверно.'
            });
        }
        // 4. Проверка подвоха с фольгой
        const foilOpt = __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$markingData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FOIL_PLACEMENT_OPTIONS"].find((o)=>o.id === foilPlacementId);
        if (foilOpt?.correct) {
            score++;
            report.push({
                q: 'Флакон для бактериологии',
                success: true,
                text: 'Верно! Промаркирована стенка флакона.'
            });
        } else {
            report.push({
                q: 'Флакон для бактериологии',
                success: false,
                text: foilOpt?.feedback || 'Ошибка.'
            });
        }
        // 5. Проверка чек-листа реквизитов
        const wrongChecklist = __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$markingData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHECKLIST_OPTIONS"].filter((opt)=>!!checklist[opt.id] !== opt.required);
        if (wrongChecklist.length === 0) {
            score++;
            report.push({
                q: 'Обязательные реквизиты',
                success: true,
                text: 'Идеально! Состав полей утвержден стандартами РК.'
            });
        } else {
            report.push({
                q: 'Обязательные реквизиты',
                success: false,
                text: 'Ошибка в составе обязательных реквизитов.'
            });
        }
        const passed = score >= 4;
        const finalResult = {
            score,
            total: totalQuestions,
            report,
            passed
        };
        setQuizResult(finalResult);
        if (onComplete) onComplete(finalResult);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-7xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .step-card{background:white;border-radius:20px;border:1.5px solid #e2e8f0;box-shadow:0 4px 24px rgba(0,0,0,0.07);overflow:hidden}
      `
            }, void 0, false, {
                fileName: "[project]/steps/Stage3/step1.jsx",
                lineNumber: 78,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-6 items-start",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: " space-y-6 w-[600px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$components$2f$markerchoiceInteractive$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            selectedId: markerId,
                            onChange: setMarkerId
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage3/step1.jsx",
                            lineNumber: 84,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$components$2f$EncryptionInteractive$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            selectedId: encryptionId,
                            onChange: setEncryptionId
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage3/step1.jsx",
                            lineNumber: 85,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$components$2f$foilplacementInteractive$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            selectedId: foilPlacementId,
                            onChange: setFoilPlacementId
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage3/step1.jsx",
                            lineNumber: 86,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$components$2f$checklistInteractive$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            checked: checklist,
                            onChange: setChecklist
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage3/step1.jsx",
                            lineNumber: 87,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-slate-800 text-sm",
                                    children: "Цифровое заполнение этикеток"
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage3/step1.jsx",
                                    lineNumber: 91,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-500 leading-relaxed",
                                    children: "Кликните по каждой емкости ниже, чтобы заполнить данные этикетки. Время должно строго соответствовать формату 24ч (например: 08:05, 16:40)."
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage3/step1.jsx",
                                    lineNumber: 92,
                                    columnNumber: 11
                                }, this),
                                !hasMarkerInHand && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border border-amber-300 bg-amber-50 p-3 text-sm text-amber-700",
                                    children: "✏️ Возьмите перманентный маркер из инвентаря, чтобы заполнить этикетки."
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage3/step1.jsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$markingData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTAINERS"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$components$2f$containerCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            container: c,
                                            labelData: labelsData[c.id],
                                            disabled: !hasMarkerInHand,
                                            onOpenForm: ()=>{
                                                if (hasMarkerInHand) {
                                                    setActiveFormId(c.id);
                                                }
                                            }
                                        }, c.id, false, {
                                            fileName: "[project]/steps/Stage3/step1.jsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage3/step1.jsx",
                                    lineNumber: 100,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/steps/Stage3/step1.jsx",
                            lineNumber: 90,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                disabled: !isReadyToSubmit,
                                onClick: handleSubmitTest,
                                className: `w-full font-bold py-4 rounded-xl text-sm shadow-md transition-all
              ${isReadyToSubmit ? 'bg-slate-950 text-white hover:bg-slate-900 cursor-pointer' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`,
                                children: isReadyToSubmit ? 'Продолжить' : 'Пожалуйста, выполните все разделы теста и заполните этикетки выше'
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/step1.jsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage3/step1.jsx",
                            lineNumber: 118,
                            columnNumber: 9
                        }, this),
                        activeFormId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$components$2f$labelForm$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            container: __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$markingData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONTAINERS"].find((c)=>c.id === activeFormId),
                            initialData: labelsData[activeFormId],
                            onClose: ()=>setActiveFormId(null),
                            onSave: (data)=>{
                                setLabelsData((prev)=>({
                                        ...prev,
                                        [activeFormId]: data
                                    }));
                                setActiveFormId(null);
                            }
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage3/step1.jsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this),
                        quizResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `p-6 rounded-2xl border-2 mt-4 space-y-4 shadow-sm
            ${quizResult.passed ? 'bg-emerald-50/60 border-emerald-300' : 'bg-red-50/60 border-red-300'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-bold text-base text-slate-800",
                                            children: "Результаты тестирования"
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage3/step1.jsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `px-3 py-1 rounded-full text-xs font-bold text-white ${quizResult.passed ? 'bg-emerald-600' : 'bg-red-600'}`,
                                            children: quizResult.passed ? 'Пройдено успешно' : 'Не сдано'
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage3/step1.jsx",
                                            lineNumber: 151,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/steps/Stage3/step1.jsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-semibold text-slate-700",
                                    children: [
                                        "Итоговый результат: ",
                                        quizResult.score,
                                        " из ",
                                        quizResult.total,
                                        " баллов."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/steps/Stage3/step1.jsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 border-t pt-3",
                                    children: quizResult.report.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-2 text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: item.success ? '✅' : '❌'
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage3/step1.jsx",
                                                    lineNumber: 159,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: [
                                                                item.q,
                                                                ":"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/steps/Stage3/step1.jsx",
                                                            lineNumber: 161,
                                                            columnNumber: 21
                                                        }, this),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: item.success ? 'text-slate-700' : 'text-red-700 font-medium',
                                                            children: item.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/steps/Stage3/step1.jsx",
                                                            lineNumber: 161,
                                                            columnNumber: 48
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/steps/Stage3/step1.jsx",
                                                    lineNumber: 160,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/steps/Stage3/step1.jsx",
                                            lineNumber: 158,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage3/step1.jsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/steps/Stage3/step1.jsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/steps/Stage3/step1.jsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/steps/Stage3/step1.jsx",
                lineNumber: 81,
                columnNumber: 10
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/steps/Stage3/step1.jsx",
        lineNumber: 77,
        columnNumber: 7
    }, this);
}
}),
"[project]/steps/Stage3/components/CoolingSim.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CoolingSim
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// app/stage3/components/CoolingSim.jsx
'use client';
;
;
function CoolingSim({ onStatusChange, isBagClosed, onBagClose }) {
    const [hasShield, setHasShield] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [itemsInBag, setItemsInBag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        bottle: false,
        vial: false
    });
    const [vialOrientation, setVialOrientation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('vert');
    const [bottleOrientation, setBottleOrientation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('vert');
    const [bagTemp, setBagTemp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(21);
    const [gameError, setGameError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isBagClosed) return;
        let targetTemp = 21 - 5; // Default cooling
        if (itemsInBag.bottle) targetTemp -= 2;
        if (itemsInBag.vial) {
            targetTemp = !hasShield ? -1 : 4;
        }
        setBagTemp(targetTemp);
        if (itemsInBag.vial && !hasShield) {
            setGameError('Стоп! Проба заморожена (Т = -1°C). Нужна термоперегородка!');
        } else {
            setGameError(null);
        }
    }, [
        itemsInBag,
        hasShield,
        isBagClosed
    ]);
    // Inform parent if the bag is "Valid"
    const isValid = itemsInBag.bottle && itemsInBag.vial && hasShield && vialOrientation === 'vert' && bottleOrientation === 'vert' && !gameError;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        onStatusChange(isValid);
    }, [
        isValid,
        onStatusChange
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-slate-900 text-slate-100 rounded-2xl p-6 shadow-xl border border-slate-800 space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-black uppercase tracking-wider text-blue-400",
                                children: "Сумка-холодильник в разрезе"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/CoolingSim.jsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-slate-400",
                                children: "Разместите компоненты внутри контейнера"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/CoolingSim.jsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage3/components/CoolingSim.jsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-black border-2 border-slate-700 px-4 py-2 rounded-lg text-center min-w-[120px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] block font-mono text-slate-500 uppercase tracking-widest",
                                children: "Датчик Т"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/CoolingSim.jsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-2xl font-black font-mono ${bagTemp <= 0 ? 'text-red-500 animate-pulse' : 'text-emerald-400'}`,
                                children: [
                                    bagTemp > 0 ? `+${bagTemp}` : bagTemp,
                                    " °C"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage3/components/CoolingSim.jsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage3/components/CoolingSim.jsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage3/components/CoolingSim.jsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-800/50 rounded-xl p-4 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                disabled: hasShield || isBagClosed,
                                onClick: ()=>setHasShield(true),
                                className: `w-full p-3 rounded-xl border text-left text-xs font-bold transition-all ${hasShield ? 'opacity-30' : 'bg-slate-800 border-blue-500/40'}`,
                                children: "📦 Термоперегородка"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/CoolingSim.jsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 bg-slate-800 rounded-xl border border-slate-700 text-xs space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold block",
                                        children: "🧴 Канистра 2.0л"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage3/components/CoolingSim.jsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    !itemsInBag.bottle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setItemsInBag((p)=>({
                                                    ...p,
                                                    bottle: true
                                                })),
                                        disabled: isBagClosed,
                                        className: "w-full py-1.5 bg-blue-600 rounded-lg",
                                        children: "Добавить"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage3/components/CoolingSim.jsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setBottleOrientation('vert'),
                                                className: `flex-1 py-1 rounded ${bottleOrientation === 'vert' ? 'bg-emerald-600' : 'bg-slate-700'}`,
                                                children: "Вертикально"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage3/components/CoolingSim.jsx",
                                                lineNumber: 69,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setBottleOrientation('horiz'),
                                                className: `flex-1 py-1 rounded ${bottleOrientation === 'horiz' ? 'bg-amber-600' : 'bg-slate-700'}`,
                                                children: "На бок"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage3/components/CoolingSim.jsx",
                                                lineNumber: 70,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage3/components/CoolingSim.jsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage3/components/CoolingSim.jsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 bg-slate-800 rounded-xl border border-slate-700 text-xs space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold block",
                                        children: "🫙 Флакон 0.5л"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage3/components/CoolingSim.jsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this),
                                    !itemsInBag.vial ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setItemsInBag((p)=>({
                                                    ...p,
                                                    vial: true
                                                })),
                                        disabled: isBagClosed || !!gameError,
                                        className: "w-full py-1.5 bg-blue-600 rounded-lg",
                                        children: "Добавить"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage3/components/CoolingSim.jsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setVialOrientation('vert'),
                                                        className: `flex-1 py-1 rounded ${vialOrientation === 'vert' ? 'bg-emerald-600' : 'bg-slate-700'}`,
                                                        children: "Вертикально"
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage3/components/CoolingSim.jsx",
                                                        lineNumber: 82,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setVialOrientation('horiz'),
                                                        className: `flex-1 py-1 rounded ${vialOrientation === 'horiz' ? 'bg-amber-600' : 'bg-slate-700'}`,
                                                        children: "На бок"
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage3/components/CoolingSim.jsx",
                                                        lineNumber: 83,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/steps/Stage3/components/CoolingSim.jsx",
                                                lineNumber: 81,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setItemsInBag((p)=>({
                                                            ...p,
                                                            vial: false
                                                        })),
                                                className: "text-[9px] text-red-400",
                                                children: "Удалить"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage3/components/CoolingSim.jsx",
                                                lineNumber: 85,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage3/components/CoolingSim.jsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage3/components/CoolingSim.jsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage3/components/CoolingSim.jsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-2 border-2 border-dashed border-slate-700 rounded-xl p-4 bg-slate-950 relative min-h-[200px] flex items-center justify-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-0 top-0 bottom-0 w-4 bg-blue-800/30"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/CoolingSim.jsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-0 top-0 bottom-0 w-4 bg-blue-800/30"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/CoolingSim.jsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            itemsInBag.bottle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-3 rounded bg-slate-800 border ${bottleOrientation === 'horiz' ? 'rotate-90 border-amber-500' : 'border-slate-600'}`,
                                children: "🧴"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/CoolingSim.jsx",
                                lineNumber: 95,
                                columnNumber: 33
                            }, this),
                            hasShield && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2 h-20 bg-amber-700 rounded"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/CoolingSim.jsx",
                                lineNumber: 96,
                                columnNumber: 25
                            }, this),
                            itemsInBag.vial && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-3 rounded bg-slate-800 border ${vialOrientation === 'horiz' ? 'rotate-90 border-amber-500' : 'border-slate-600'}`,
                                children: "🫙"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/CoolingSim.jsx",
                                lineNumber: 97,
                                columnNumber: 31
                            }, this),
                            gameError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-2 inset-x-2 bg-red-950 text-red-300 text-[10px] p-2 rounded text-center",
                                children: gameError
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/CoolingSim.jsx",
                                lineNumber: 99,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage3/components/CoolingSim.jsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage3/components/CoolingSim.jsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-2 border-t border-slate-800 flex justify-end",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    disabled: !isValid || isBagClosed,
                    onClick: onBagClose,
                    className: `px-6 py-2 rounded-xl font-bold text-xs ${isValid && !isBagClosed ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-500'}`,
                    children: isBagClosed ? '🔒 Сумка закрыта' : 'Застегнуть термосумку'
                }, void 0, false, {
                    fileName: "[project]/steps/Stage3/components/CoolingSim.jsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/steps/Stage3/components/CoolingSim.jsx",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/steps/Stage3/components/CoolingSim.jsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
}),
"[project]/steps/Stage3/components/QuizSection.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuizSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// app/stage3/components/QuizSection.jsx
'use client';
;
;
function QuizSection({ title, description, options, selectedId, onChange, result }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-2xl border border-slate-200 p-5 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-bold text-slate-800 text-sm mb-1",
                children: title
            }, void 0, false, {
                fileName: "[project]/steps/Stage3/components/QuizSection.jsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-slate-600 mb-3",
                children: description
            }, void 0, false, {
                fileName: "[project]/steps/Stage3/components/QuizSection.jsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: options.map((opt)=>{
                    const isSelected = selectedId === opt.id;
                    const isCorrect = opt.correct;
                    // Only show colors if the parent has submitted the results
                    let classes = "bg-slate-50 border-slate-200 hover:bg-slate-100";
                    if (result && isSelected) {
                        classes = isCorrect ? "bg-emerald-50 border-emerald-500 text-emerald-900" : "bg-red-50 border-red-500 text-red-900";
                    } else if (isSelected) {
                        classes = "bg-blue-50 border-blue-500 text-blue-900";
                    }
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>!result && onChange(opt.id),
                        className: `w-full text-left p-3 text-xs rounded-xl border transition-all font-medium ${classes}`,
                        children: [
                            opt.label,
                            result && isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] mt-1 font-bold",
                                children: opt.feedback
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/QuizSection.jsx",
                                lineNumber: 30,
                                columnNumber: 40
                            }, this)
                        ]
                    }, opt.id, true, {
                        fileName: "[project]/steps/Stage3/components/QuizSection.jsx",
                        lineNumber: 24,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/steps/Stage3/components/QuizSection.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/steps/Stage3/components/QuizSection.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/steps/Stage3/step2.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Step2_Cooling
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$markingData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage3/data/markingData.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$components$2f$CoolingSim$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage3/components/CoolingSim.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$components$2f$QuizSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage3/components/QuizSection.jsx [app-ssr] (ecmascript)");
// app/stage3/step2.jsx
'use client';
;
;
;
;
;
function Step2_Cooling({ onFinalReset, onComplete }) {
    const [positionId, setPositionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [freezeId, setFreezeId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tempId, setTempId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isBagValid, setIsBagValid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isBagClosed, setIsBagClosed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [quizResult, setQuizResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const isReadyToSubmit = positionId && freezeId && tempId && isBagClosed;
    const handleSubmit = ()=>{
        let score = 0;
        const report = [];
        // 1. Практическая часть
        if (isBagValid && isBagClosed) {
            score++;
            report.push({
                q: 'Сборка термосумки',
                success: true,
                text: 'Термосумка собрана правильно. Температурный режим соблюден.'
            });
        } else {
            report.push({
                q: 'Сборка термосумки',
                success: false,
                text: 'Термосумка собрана с нарушениями или не была закрыта.'
            });
        }
        // 2. Положение тары
        const positionOpt = __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$markingData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["POSITION_OPTIONS"].find((o)=>o.id === positionId);
        if (positionOpt?.correct) {
            score++;
            report.push({
                q: 'Пространственное положение',
                success: true,
                text: 'Верно! Тара расположена правильно.'
            });
        } else {
            report.push({
                q: 'Пространственное положение',
                success: false,
                text: positionOpt?.feedback || 'Неверный ответ.'
            });
        }
        // 3. Защита от замораживания
        const freezeOpt = __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$markingData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FREEZE_OPTIONS"].find((o)=>o.id === freezeId);
        if (freezeOpt?.correct) {
            score++;
            report.push({
                q: 'Защита от замораживания',
                success: true,
                text: 'Верно! Использована правильная защита.'
            });
        } else {
            report.push({
                q: 'Защита от замораживания',
                success: false,
                text: freezeOpt?.feedback || 'Неверный ответ.'
            });
        }
        // 4. Температурный режим
        const tempOpt = __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$markingData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEMPERATURE_OPTIONS"].find((o)=>o.id === tempId);
        if (tempOpt?.correct) {
            score++;
            report.push({
                q: 'Температурный режим',
                success: true,
                text: 'Температурный диапазон выбран верно.'
            });
        } else {
            report.push({
                q: 'Температурный режим',
                success: false,
                text: tempOpt?.feedback || 'Неверный ответ.'
            });
        }
        const totalQuestions = 4;
        const passed = score >= 4;
        const finalResult = {
            step: 2,
            score,
            total: totalQuestions,
            passed,
            report
        };
        setQuizResult(finalResult);
        onComplete?.(finalResult);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-4xl space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .step-card{background:white;border-radius:20px;border:1.5px solid #e2e8f0;box-shadow:0 4px 24px rgba(0,0,0,0.07);overflow:hidden}
      `
            }, void 0, false, {
                fileName: "[project]/steps/Stage3/step2.jsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$components$2f$CoolingSim$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onStatusChange: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((val)=>setIsBagValid(val), []),
                isBagClosed: isBagClosed,
                onBagClose: ()=>setIsBagClosed(true)
            }, void 0, false, {
                fileName: "[project]/steps/Stage3/step2.jsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$components$2f$QuizSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: "Вопрос 1: Пространственное положение",
                description: "В каком положении необходимо разместить тару?",
                options: __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$markingData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["POSITION_OPTIONS"],
                selectedId: positionId,
                onChange: setPositionId,
                result: quizResult
            }, void 0, false, {
                fileName: "[project]/steps/Stage3/step2.jsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$components$2f$QuizSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: "Вопрос 2: Защита от замораживания",
                description: "Как правильно разместить бак-пробу относительно льда?",
                options: __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$markingData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FREEZE_OPTIONS"],
                selectedId: freezeId,
                onChange: setFreezeId,
                result: quizResult
            }, void 0, false, {
                fileName: "[project]/steps/Stage3/step2.jsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$components$2f$QuizSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: "Вопрос 3: Температурный коридор",
                description: "Оптимальная температура согласно ГОСТ Р 59024-2020?",
                options: __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$markingData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEMPERATURE_OPTIONS"],
                selectedId: tempId,
                onChange: setTempId,
                result: quizResult
            }, void 0, false, {
                fileName: "[project]/steps/Stage3/step2.jsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            !quizResult ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleSubmit,
                disabled: !isReadyToSubmit,
                className: `w-full py-4 rounded-xl font-bold text-sm shadow-md transition-all
            ${isReadyToSubmit ? 'bg-slate-950 text-white' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`,
                children: !isBagClosed ? 'Сначала соберите и закройте термосумку' : 'Продолжить'
            }, void 0, false, {
                fileName: "[project]/steps/Stage3/step2.jsx",
                lineNumber: 163,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `p-6 rounded-2xl border-2 mt-4 space-y-4 shadow-sm
          ${quizResult.passed ? 'bg-emerald-50/60 border-emerald-300' : 'bg-red-50/60 border-red-300'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-bold text-base text-slate-800",
                                children: "Результаты тестирования"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/step2.jsx",
                                lineNumber: 187,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `px-3 py-1 rounded-full text-xs font-bold text-white
              ${quizResult.passed ? 'bg-emerald-600' : 'bg-red-600'}`,
                                children: quizResult.passed ? 'Пройдено успешно' : 'Не сдано'
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/step2.jsx",
                                lineNumber: 191,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage3/step2.jsx",
                        lineNumber: 186,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-semibold text-slate-700",
                        children: [
                            "Итоговый результат: ",
                            quizResult.score,
                            " из ",
                            quizResult.total,
                            " баллов."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage3/step2.jsx",
                        lineNumber: 205,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 border-t pt-3",
                        children: quizResult.report.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-2 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: item.success ? '✅' : '❌'
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage3/step2.jsx",
                                        lineNumber: 215,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: [
                                                    item.q,
                                                    ":"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/steps/Stage3/step2.jsx",
                                                lineNumber: 218,
                                                columnNumber: 19
                                            }, this),
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: item.success ? 'text-slate-700' : 'text-red-700 font-medium',
                                                children: item.text
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage3/step2.jsx",
                                                lineNumber: 219,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage3/step2.jsx",
                                        lineNumber: 217,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/steps/Stage3/step2.jsx",
                                lineNumber: 211,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage3/step2.jsx",
                        lineNumber: 209,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage3/step2.jsx",
                lineNumber: 178,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/steps/Stage3/step2.jsx",
        lineNumber: 120,
        columnNumber: 5
    }, this);
}
}),
"[project]/steps/Stage3/data/actData.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// steps/Stage3/Step3/actData.js
// ─── Интерактив №1: верификация нормативной базы ──────────────────────────────
__turbopack_context__.s([
    "ACT_TEMPLATE",
    ()=>ACT_TEMPLATE,
    "CLIMATE_OPTIONS",
    ()=>CLIMATE_OPTIONS,
    "GEO_OPTIONS",
    ()=>GEO_OPTIONS,
    "NORM_OPTIONS",
    ()=>NORM_OPTIONS,
    "SIGN_OPTIONS",
    ()=>SIGN_OPTIONS
]);
const NORM_OPTIONS = [
    {
        id: 'leave',
        label: 'Оставить как есть, шаблон составлен верно.',
        correct: false,
        feedback: 'Ошибка! ГОСТ Р 51592-2000 — это общие требования к отбору проб воды. Для питьевой воды из крана потребителя необходимо ссылаться на специализированный стандарт, регулирующий именно этот метод отбора.'
    },
    {
        id: 'correct',
        label: 'Скорректировать: изменить на "Ручной налив из крана потребителя в соответствии с СТ РК ГОСТ Р 51593-2003 (или ГОСТ Р 59024-2020)".',
        correct: true,
        feedback: 'Верно! ГОСТ Р 51592 / ГОСТ 31861 — общие требования к отбору проб. Отбор питьевой воды из крана потребителя регулируют специализированные стандарты СТ РК ГОСТ Р 51593-2003 и ГОСТ Р 59024-2020. Путаница в нормативной базе делает Акт юридически уязвимым.'
    },
    {
        id: 'delete',
        label: 'Удалить упоминание ГОСТов вообще, достаточно написать слово «Вручную».',
        correct: false,
        feedback: 'Ошибка! Акт без ссылки на нормативный документ не имеет юридической силы. Лаборатория не сможет подтвердить, что метод отбора соответствует стандарту, и результаты могут быть оспорены.'
    }
];
const GEO_OPTIONS = [
    {
        id: 'manual',
        label: 'Введу адрес по памяти, а время округлю до ближайшего часа (например, 08:00 вместо 08:14).',
        correct: false,
        feedback: 'Ошибка! Микробиологический анализ критичен к минутам — отсчёт допустимого времени доставки пробы в лабораторию идёт строго от момента закрытия флакона. Округление времени делает сроки недостоверными.'
    },
    {
        id: 'gps',
        label: 'Активирую встроенный GPS-модуль планшета для автоматической фиксации координат, а время синхронизирую с сервером точного времени в момент завершения отбора.',
        correct: true,
        feedback: 'Верно! Автоматическая фиксация GPS и синхронизация времени с сервером исключает возможность фальсификации места и момента отбора — это ключевое требование цепочки хранения доказательств (chain of custody).'
    },
    {
        id: 'skip',
        label: 'Вообще не буду заполнять координаты, достаточно названия города.',
        correct: false,
        feedback: 'Ошибка! Название города не идентифицирует конкретную точку отбора. При проверке контролирующим органом невозможно доказать, что проба взята именно из указанного объекта, а не в произвольном месте.'
    }
];
const CLIMATE_OPTIONS = [
    {
        id: 'formal',
        label: 'Это формальность, погодные условия никак не влияют на внутренний водопровод.',
        correct: false,
        feedback: 'Ошибка! Погодные условия напрямую влияют на условия транспортировки пробы от объекта до лаборатории — температура окружающей среды определяет, достаточно ли хладоэлементов в сумке для поддержания режима 2–8°C.'
    },
    {
        id: 'transport',
        label: 'Для учёта температурных рисков при транспортировке (экстремальная жара +40°C или мороз −25°C требуют разного количества хладоэлементов в сумке).',
        correct: true,
        feedback: 'Верно! Внешние климатические условия фиксируются именно для обеспечения правильного температурного режима при транспортировке. Это влияет на количество хладоэлементов, упаковку и время доставки — всё это документируется в Акте.'
    },
    {
        id: 'storm',
        label: 'Чтобы лаборатория знала, была ли гроза (гроза меняет состав бактерий в кране).',
        correct: false,
        feedback: 'Ошибочное суждение. Гроза не влияет на состав воды внутренней водопроводной сети — сеть изолирована от атмосферы. Климатические условия фиксируются исключительно для транспортных рисков.'
    }
];
const SIGN_OPTIONS = [
    {
        id: 'close',
        label: 'Просто закрыть приложение, оно сохраняется автоматически.',
        correct: false,
        feedback: 'Ошибка! Сохранение без подписи оставляет документ незавершённым и юридически недействительным. Любые данные без ЭЦП могут быть изменены или оспорены.'
    },
    {
        id: 'screenshot',
        label: 'Отправить скриншот экрана куратору в мессенджер.',
        correct: false,
        feedback: 'Ошибка! Скриншот — не юридический документ. Он не подтверждает подлинность данных, не имеет криптографической защиты и легко фальсифицируется.'
    },
    {
        id: 'sign',
        label: 'Ввести личный ID-код исполнителя и утвердить Акт цифровой подписью (ЭЦП) — документ блокируется от изменений и уходит в общую базу лаборатории.',
        correct: true,
        feedback: 'Верно! ЭЦП криптографически связывает содержимое Акта с личностью исполнителя, фиксирует точный момент подписания и исключает последующие изменения. Только после этого Акт имеет юридическую силу.'
    }
];
const ACT_TEMPLATE = {
    location: 'Внутренняя водопроводная сеть',
    method: 'Ручной налив из крана потребителя по ГОСТ Р 51592-2000',
    methodCorrected: 'Ручной налив из крана потребителя по СТ РК ГОСТ Р 51593-2003',
    gps: null,
    gpsValue: '43.2389° N, 76.8897° E — г. Алматы',
    time: null,
    weather: null,
    weatherValue: {
        temp: '+22°C',
        humidity: '45%',
        condition: 'Переменная облачность'
    },
    signatory: null
};
}),
"[project]/steps/Stage3/components/NormVerifyInteractive.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NormVerifyInteractive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$actData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage3/data/actData.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function NormVerifyInteractive({ onResolved }) {
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSelect = (opt)=>{
        setSelectedId(opt.id);
        onResolved?.({
            question: 'norm',
            selected: opt.id,
            selectedLabel: opt.label,
            correct: opt.correct,
            feedback: opt.feedback,
            text: opt.feedback
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-2xl border-2 border-amber-200 p-5 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-3xl",
                        children: "⚖️"
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage3/components/NormVerifyInteractive.jsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-bold text-slate-800 text-sm mb-1",
                            children: "Вопрос 1: верификация нормативной базы"
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage3/components/NormVerifyInteractive.jsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage3/components/NormVerifyInteractive.jsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage3/components/NormVerifyInteractive.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$actData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NORM_OPTIONS"].map((opt)=>{
                    const isSelected = selectedId === opt.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleSelect(opt),
                        className: `flex items-start gap-3 p-3 rounded-xl border-2 text-left transition-all
                ${isSelected ? 'bg-amber-50 border-amber-400' : 'bg-slate-50 border-slate-200 hover:border-amber-300 hover:bg-amber-50'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-semibold text-slate-700 flex-1",
                            children: opt.label
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage3/components/NormVerifyInteractive.jsx",
                            lineNumber: 46,
                            columnNumber: 15
                        }, this)
                    }, opt.id, false, {
                        fileName: "[project]/steps/Stage3/components/NormVerifyInteractive.jsx",
                        lineNumber: 38,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/steps/Stage3/components/NormVerifyInteractive.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/steps/Stage3/components/NormVerifyInteractive.jsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/steps/Stage3/components/GeoTimeInteractive.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GeoTimeInteractive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$actData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage3/data/actData.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function GeoTimeInteractive({ onResolved }) {
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSelect = (opt)=>{
        setSelectedId(opt.id);
        onResolved?.({
            question: 'geo',
            selected: opt.id,
            selectedLabel: opt.label,
            correct: opt.correct,
            feedback: opt.feedback,
            text: opt.feedback
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-2xl border-2 border-blue-200 p-5 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-3xl mb-3",
                        children: "📡"
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage3/components/GeoTimeInteractive.jsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-slate-800 text-sm mb-1",
                                children: "Вопрос 2: фиксация геопозиции и времени"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/GeoTimeInteractive.jsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-600 leading-relaxed",
                                children: "Как правильно зафиксировать геолокацию и время отбора проб?"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/GeoTimeInteractive.jsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage3/components/GeoTimeInteractive.jsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage3/components/GeoTimeInteractive.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$actData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GEO_OPTIONS"].map((opt)=>{
                    const isSelected = selectedId === opt.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleSelect(opt),
                        className: `p-3 rounded-xl border-2 text-left transition-all
                ${isSelected ? 'bg-blue-50 border-blue-400' : 'bg-slate-50 border-slate-200 hover:border-blue-300'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-semibold",
                            children: opt.label
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage3/components/GeoTimeInteractive.jsx",
                            lineNumber: 46,
                            columnNumber: 15
                        }, this)
                    }, opt.id, false, {
                        fileName: "[project]/steps/Stage3/components/GeoTimeInteractive.jsx",
                        lineNumber: 38,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/steps/Stage3/components/GeoTimeInteractive.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/steps/Stage3/components/GeoTimeInteractive.jsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/steps/Stage3/components/ClimateInteractive.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClimateInteractive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$actData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage3/data/actData.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function ClimateInteractive({ onResolved }) {
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSelect = (opt)=>{
        setSelectedId(opt.id);
        onResolved?.({
            question: 'climate',
            selected: opt.id,
            selectedLabel: opt.label,
            correct: opt.correct,
            feedback: opt.feedback,
            text: opt.feedback
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-2xl border-2 border-cyan-200 p-5 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-3xl",
                        children: "🌤️"
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage3/components/ClimateInteractive.jsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-slate-800 text-sm mb-1",
                                children: "Вопрос 3: учёт климатических условий"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/ClimateInteractive.jsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-600",
                                children: "Зачем фиксировать климат при отборе проб?"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/ClimateInteractive.jsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage3/components/ClimateInteractive.jsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage3/components/ClimateInteractive.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$actData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CLIMATE_OPTIONS"].map((opt)=>{
                    const isSelected = selectedId === opt.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleSelect(opt),
                        className: `p-3 rounded-xl border-2 text-left transition-all
                ${isSelected ? 'bg-cyan-50 border-cyan-400' : 'bg-slate-50 border-slate-200 hover:border-cyan-300'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-semibold",
                            children: opt.label
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage3/components/ClimateInteractive.jsx",
                            lineNumber: 47,
                            columnNumber: 15
                        }, this)
                    }, opt.id, false, {
                        fileName: "[project]/steps/Stage3/components/ClimateInteractive.jsx",
                        lineNumber: 39,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/steps/Stage3/components/ClimateInteractive.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/steps/Stage3/components/ClimateInteractive.jsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/steps/Stage3/components/SignatureInteractive.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SignatureInteractive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$actData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage3/data/actData.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function SignatureInteractive({ onResolved }) {
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSelect = (opt)=>{
        setSelectedId(opt.id);
        onResolved?.({
            question: 'sign',
            selected: opt.id,
            selectedLabel: opt.label,
            correct: opt.correct,
            feedback: opt.feedback,
            text: opt.feedback
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-2xl border-2 border-violet-200 p-5 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-3xl",
                        children: "✍️"
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage3/components/SignatureInteractive.jsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-slate-800 text-sm mb-1",
                                children: "Вопрос 4: цифровая подпись и завершение акта"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/SignatureInteractive.jsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-600 leading-relaxed",
                                children: "Какое действие завершает оформление акта?"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/SignatureInteractive.jsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage3/components/SignatureInteractive.jsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage3/components/SignatureInteractive.jsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$actData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SIGN_OPTIONS"].map((opt)=>{
                    const isSelected = selectedId === opt.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleSelect(opt),
                        className: `p-3 rounded-xl border-2 text-left transition-all
                ${isSelected ? 'bg-violet-50 border-violet-400' : 'bg-slate-50 border-slate-200 hover:border-violet-300'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-semibold",
                            children: opt.label
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage3/components/SignatureInteractive.jsx",
                            lineNumber: 48,
                            columnNumber: 15
                        }, this)
                    }, opt.id, false, {
                        fileName: "[project]/steps/Stage3/components/SignatureInteractive.jsx",
                        lineNumber: 40,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/steps/Stage3/components/SignatureInteractive.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/steps/Stage3/components/SignatureInteractive.jsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/steps/Stage3/components/GpsWidget.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GpsWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$actData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage3/data/actData.jsx [app-ssr] (ecmascript)");
// steps/Stage3/Step3/components/GpsWidget.jsx
'use client';
;
;
;
function GpsWidget({ onFixed }) {
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('idle'); // idle | scanning | done
    const handleScan = ()=>{
        if (state !== 'idle') return;
        setState('scanning');
        setTimeout(()=>{
            setState('done');
            onFixed?.(__TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$actData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACT_TEMPLATE"].gpsValue);
        }, 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center gap-3 p-3 rounded-xl border-2 transition-all
      ${state === 'done' ? 'bg-emerald-50 border-emerald-300' : 'bg-slate-50 border-slate-200'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `text-2xl ${state === 'scanning' ? 'animate-pulse' : ''}`,
                children: state === 'done' ? '🛰️' : '📡'
            }, void 0, false, {
                fileName: "[project]/steps/Stage3/components/GpsWidget.jsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-0.5",
                        children: "GPS-координаты"
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage3/components/GpsWidget.jsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    state === 'idle' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-amber-600 font-semibold",
                        children: "⚠ Не определены — нажмите кнопку"
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage3/components/GpsWidget.jsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this),
                    state === 'scanning' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-blue-600 font-semibold animate-pulse",
                        children: "🔍 Поиск спутников..."
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage3/components/GpsWidget.jsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this),
                    state === 'done' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-emerald-700 font-mono font-bold",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$actData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACT_TEMPLATE"].gpsValue
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage3/components/GpsWidget.jsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage3/components/GpsWidget.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            state !== 'done' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleScan,
                disabled: state === 'scanning',
                className: `shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold transition-all
            ${state === 'scanning' ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm'}`,
                children: state === 'scanning' ? 'Поиск...' : 'Определить GPS'
            }, void 0, false, {
                fileName: "[project]/steps/Stage3/components/GpsWidget.jsx",
                lineNumber: 37,
                columnNumber: 9
            }, this),
            state === 'done' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-emerald-500 text-lg shrink-0",
                children: "✓"
            }, void 0, false, {
                fileName: "[project]/steps/Stage3/components/GpsWidget.jsx",
                lineNumber: 47,
                columnNumber: 28
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/steps/Stage3/components/GpsWidget.jsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/steps/Stage3/components/WeatherWidget.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WeatherWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$actData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage3/data/actData.jsx [app-ssr] (ecmascript)");
// steps/Stage3/Step3/components/WeatherWidget.jsx
'use client';
;
;
;
function WeatherWidget({ onFixed }) {
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('idle'); // idle | loading | done
    const handleSync = ()=>{
        if (state !== 'idle') return;
        setState('loading');
        setTimeout(()=>{
            setState('done');
            onFixed?.(__TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$actData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACT_TEMPLATE"].weatherValue);
        }, 1800);
    };
    const { temp, humidity, condition } = __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$actData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACT_TEMPLATE"].weatherValue;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center gap-3 p-3 rounded-xl border-2 transition-all
      ${state === 'done' ? 'bg-cyan-50 border-cyan-300' : 'bg-slate-50 border-slate-200'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `text-2xl ${state === 'loading' ? 'animate-spin' : ''}`,
                children: state === 'done' ? '⛅' : '🌐'
            }, void 0, false, {
                fileName: "[project]/steps/Stage3/components/WeatherWidget.jsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-0.5",
                        children: "Климатические условия"
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage3/components/WeatherWidget.jsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    state === 'idle' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-amber-600 font-semibold",
                        children: "⚠ Не синхронизировано"
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage3/components/WeatherWidget.jsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this),
                    state === 'loading' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-blue-600 font-semibold animate-pulse",
                        children: "📶 Запрос к серверу погоды..."
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage3/components/WeatherWidget.jsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this),
                    state === 'done' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-bold text-cyan-700",
                                children: temp
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/WeatherWidget.jsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-slate-500",
                                children: [
                                    "Влажность: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: humidity
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage3/components/WeatherWidget.jsx",
                                        lineNumber: 37,
                                        columnNumber: 65
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage3/components/WeatherWidget.jsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-slate-500",
                                children: condition
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/WeatherWidget.jsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage3/components/WeatherWidget.jsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage3/components/WeatherWidget.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            state !== 'done' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleSync,
                disabled: state === 'loading',
                className: `shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold transition-all
            ${state === 'loading' ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-cyan-600 hover:bg-cyan-700 text-white shadow-sm'}`,
                children: state === 'loading' ? 'Загрузка...' : 'Синхр. погоду'
            }, void 0, false, {
                fileName: "[project]/steps/Stage3/components/WeatherWidget.jsx",
                lineNumber: 43,
                columnNumber: 9
            }, this),
            state === 'done' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-cyan-600 text-lg shrink-0",
                children: "✓"
            }, void 0, false, {
                fileName: "[project]/steps/Stage3/components/WeatherWidget.jsx",
                lineNumber: 53,
                columnNumber: 28
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/steps/Stage3/components/WeatherWidget.jsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/steps/Stage3/components/SignatureWidget.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SignatureWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// steps/Stage3/Step3/components/SignatureWidget.jsx
'use client';
;
;
function SignatureWidget({ onSigned }) {
    const [idCode, setIdCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('idle'); // idle | signing | done
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const handleSign = ()=>{
        if (!idCode.trim()) {
            setError('Введите личный ID-код исполнителя.');
            return;
        }
        if (idCode.trim().length < 4) {
            setError('ID-код должен содержать не менее 4 символов.');
            return;
        }
        setError('');
        setState('signing');
        setTimeout(()=>{
            setState('done');
            onSigned?.(idCode.trim());
        }, 1500);
    };
    if (state === 'done') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-3 p-5 rounded-2xl bg-emerald-50 border-2 border-emerald-400",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-5xl",
                    children: "🟢"
                }, void 0, false, {
                    fileName: "[project]/steps/Stage3/components/SignatureWidget.jsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-black text-emerald-800 text-lg",
                            children: "АКТ УТВЕРЖДЁН"
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage3/components/SignatureWidget.jsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-emerald-600 mt-1",
                            children: "Документ подписан ЭЦП · Заблокирован от изменений · Отправлен в базу лаборатории"
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage3/components/SignatureWidget.jsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/steps/Stage3/components/SignatureWidget.jsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl border border-emerald-300 px-4 py-2 font-mono text-xs text-slate-600 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-slate-400",
                            children: "ID исполнителя: "
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage3/components/SignatureWidget.jsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-slate-800",
                            children: '*'.repeat(idCode.length - 2) + idCode.slice(-2)
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage3/components/SignatureWidget.jsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/steps/Stage3/components/SignatureWidget.jsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/steps/Stage3/components/SignatureWidget.jsx",
            lineNumber: 29,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-3 p-4 rounded-2xl bg-violet-50 border-2 border-violet-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-2xl",
                        children: "🔏"
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage3/components/SignatureWidget.jsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold text-slate-800 text-sm",
                                children: "Цифровая подпись (ЭЦП)"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/SignatureWidget.jsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500",
                                children: "Введите личный ID-код исполнителя для утверждения Акта"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/components/SignatureWidget.jsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage3/components/SignatureWidget.jsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage3/components/SignatureWidget.jsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: idCode,
                        onChange: (e)=>{
                            setIdCode(e.target.value);
                            setError('');
                        },
                        placeholder: "Введите ID-код...",
                        disabled: state === 'signing',
                        className: "flex-1 px-3 py-2.5 sm:py-2 rounded-lg border-2 border-violet-300 text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-400"
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage3/components/SignatureWidget.jsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSign,
                        disabled: state === 'signing',
                        className: `shrink-0 px-4 py-2 rounded-lg text-sm font-bold transition-all
            ${state === 'signing' ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-violet-700 hover:bg-violet-800 text-white shadow-sm'}`,
                        children: state === 'signing' ? '...' : 'Подписать'
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage3/components/SignatureWidget.jsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage3/components/SignatureWidget.jsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-600 text-xs font-semibold",
                children: error
            }, void 0, false, {
                fileName: "[project]/steps/Stage3/components/SignatureWidget.jsx",
                lineNumber: 75,
                columnNumber: 17
            }, this),
            state === 'signing' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-violet-600 text-xs font-semibold animate-pulse",
                children: "🔐 Применяется ЭЦП..."
            }, void 0, false, {
                fileName: "[project]/steps/Stage3/components/SignatureWidget.jsx",
                lineNumber: 77,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/steps/Stage3/components/SignatureWidget.jsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),
"[project]/steps/Stage3/step3.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Step3_DigitalAct
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$actData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage3/data/actData.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$components$2f$NormVerifyInteractive$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage3/components/NormVerifyInteractive.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$components$2f$GeoTimeInteractive$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage3/components/GeoTimeInteractive.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$components$2f$ClimateInteractive$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage3/components/ClimateInteractive.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$components$2f$SignatureInteractive$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage3/components/SignatureInteractive.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$components$2f$GpsWidget$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage3/components/GpsWidget.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$components$2f$WeatherWidget$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage3/components/WeatherWidget.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$components$2f$SignatureWidget$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage3/components/SignatureWidget.jsx [app-ssr] (ecmascript)");
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
// ────────────────────────────────
function ActField({ label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl px-3 py-2 border bg-slate-50 border-slate-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] font-bold uppercase text-slate-400 mb-0.5",
                children: label
            }, void 0, false, {
                fileName: "[project]/steps/Stage3/step3.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-mono font-semibold text-slate-800",
                children: value || '—'
            }, void 0, false, {
                fileName: "[project]/steps/Stage3/step3.jsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/steps/Stage3/step3.jsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
function Step3_DigitalAct({ onComplete }) {
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        norm: null,
        geo: null,
        climate: null,
        sign: null
    });
    const [gpsValue, setGpsValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [weatherValue, setWeatherValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [signatory, setSignatory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [actSigned, setActSigned] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const updateAnswer = (key, value)=>{
        setAnswers((prev)=>({
                ...prev,
                [key]: value
            }));
    };
    const quizReady = answers.norm && answers.geo && answers.climate && answers.sign;
    const handleFinish = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
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
            {
                key: 'norm',
                label: 'Нормативная база'
            },
            {
                key: 'geo',
                label: 'Геолокация и время'
            },
            {
                key: 'climate',
                label: 'Климатические условия'
            },
            {
                key: 'sign',
                label: 'Электронная подпись'
            }
        ];
        questions.forEach(({ key, label })=>{
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
        report.push({
            question: "gps",
            selected: gpsValue,
            correct: true,
            text: `Пройдено!  GPS: ${gpsValue}`
        }, {
            question: "weather",
            selected: weatherValue,
            correct: true,
            text: `Пройдено!  Погода: ${weatherValue?.temp}°C`
        }, {
            question: "signature",
            selected: signatory,
            correct: true,
            text: `Пройдено!  Подписано ЭЦП: ${signatory}`
        });
        const finalScore = Math.max(0, score);
        onComplete?.({
            step: 3,
            score: finalScore,
            total: maxPoints,
            passed: finalScore >= 6,
            report: report,
            gpsValue,
            weatherValue,
            signatory
        });
    }, [
        answers,
        gpsValue,
        weatherValue,
        actSigned,
        signatory,
        onComplete
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-5xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .step-card{background:white;border-radius:20px;border:1.5px solid #e2e8f0;box-shadow:0 4px 24px rgba(0,0,0,0.07);overflow:hidden}
      `
            }, void 0, false, {
                fileName: "[project]/steps/Stage3/step3.jsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl border shadow-lg p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$components$2f$NormVerifyInteractive$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                onResolved: (v)=>updateAnswer('norm', v)
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/step3.jsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$components$2f$GeoTimeInteractive$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                onResolved: (v)=>updateAnswer('geo', v)
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/step3.jsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$components$2f$ClimateInteractive$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                onResolved: (v)=>updateAnswer('climate', v)
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/step3.jsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$components$2f$SignatureInteractive$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                onResolved: (v)=>updateAnswer('sign', v)
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/step3.jsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage3/step3.jsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `mt-5 border rounded-2xl p-4 transition-all bg-slate-50 ${!quizReady ? 'opacity-60 grayscale pointer-events-none' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ActField, {
                                        label: "Место отбора",
                                        value: __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$actData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACT_TEMPLATE"].location
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage3/step3.jsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ActField, {
                                        label: "Метод отбора",
                                        value: __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$data$2f$actData$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACT_TEMPLATE"].method
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage3/step3.jsx",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ActField, {
                                        label: "GPS",
                                        value: gpsValue
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage3/step3.jsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ActField, {
                                        label: "Погода",
                                        value: weatherValue ? `${weatherValue.temp}°C` : null
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage3/step3.jsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ActField, {
                                        label: "ЭЦП",
                                        value: signatory ? 'Подписано' : null
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage3/step3.jsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage3/step3.jsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$components$2f$GpsWidget$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        onFixed: setGpsValue
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage3/step3.jsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$components$2f$WeatherWidget$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        onFixed: setWeatherValue
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage3/step3.jsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage3/step3.jsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            !actSigned && gpsValue && weatherValue && quizReady && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage3$2f$components$2f$SignatureWidget$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                onSigned: (id)=>{
                                    setSignatory(id);
                                    setActSigned(true);
                                }
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/step3.jsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this),
                            actSigned && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-700 font-bold",
                                children: "Акт подписан ✔"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage3/step3.jsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage3/step3.jsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleFinish,
                        className: "mt-5 w-full py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800",
                        children: "Завершить"
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage3/step3.jsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    errors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 bg-red-50 border border-red-200 rounded-xl p-3",
                        children: errors.map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-600 text-xs",
                                children: [
                                    "• ",
                                    e
                                ]
                            }, i, true, {
                                fileName: "[project]/steps/Stage3/step3.jsx",
                                lineNumber: 166,
                                columnNumber: 35
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage3/step3.jsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage3/step3.jsx",
                lineNumber: 123,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/steps/Stage3/step3.jsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=steps_Stage3_1o61x0h._.js.map