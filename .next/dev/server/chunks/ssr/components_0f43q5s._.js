module.exports = [
"[project]/components/Header.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// components/Header.js
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function Header({ currentStep, onStepClick }) {
    const isStage1 = currentStep >= 1 && currentStep <= 3;
    const isStage1Report = currentStep === 3.5;
    const isStage2 = currentStep >= 4 && currentStep <= 8;
    const isStage3 = currentStep >= 9 && currentStep <= 11;
    const isStage4 = currentStep === 12;
    const isReport = currentStep === 13;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-6xl mb-6 animate-fade-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 mb-2",
                children: [
                    !isReport && !isStage1Report && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-xs font-bold px-3 py-1 rounded-full border
            ${isStage1 && 'bg-blue-50 text-blue-700 border-blue-200'}
            ${isStage2 && 'bg-emerald-50 text-emerald-700 border-emerald-200'}
            ${isStage3 && 'bg-emerald-50 text-emerald-700 border-emerald-200'}
            ${isStage4 && 'bg-emerald-50 text-emerald-700 border-emerald-200'}
              `,
                        children: [
                            isStage1 && 'ЭТАП 1 из 4',
                            isStage2 && 'ЭТАП 2 из 4',
                            isStage3 && 'ЭТАП 3 из 4',
                            isStage4 && 'ЭТАП 4 из 4'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.jsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this),
                    isStage1Report && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-bold px-3 py-1 rounded-full border bg-blue-50 text-blue-700 border-blue-200",
                        children: "ОТЧЕТ - ЭТАП 1"
                    }, void 0, false, {
                        fileName: "[project]/components/Header.jsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-slate-800 transition-all",
                        children: [
                            isStage1 && 'Предвыездная подготовка в лаборатории',
                            isStage1Report && 'Промежуточный отчет',
                            isStage2 && 'Работа на объекте',
                            isStage3 && 'Подготовка и документирование',
                            isStage4 && 'Транспортировка и сдача в лабораторию',
                            isReport && 'Итоговые результаты симуляции'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.jsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Header.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-slate-500 text-sm mb-4",
                children: [
                    isStage1 && 'Локация: Склад и химико-бактериологический отдел лаборатории',
                    isStage1Report && 'Проверьте свои результаты перед переходом на объект',
                    isStage2 && 'Локация: Объект (г. А., ул. Клочкова, 23, квартира заявителя)',
                    isReport && 'Локация: Панель оценивания действий',
                    isStage3 && 'something',
                    isStage4 && 'ГОСТ Р 59024‑2020 · Отбор проб воды для микробиологического анализа'
                ]
            }, void 0, true, {
                fileName: "[project]/components/Header.jsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            isStage1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: [
                    {
                        step: 1,
                        label: '1. Тара (Химия)',
                        activeColor: 'text-blue-700 border-blue-600'
                    },
                    {
                        step: 2,
                        label: '2. Тара (Бактериология)',
                        activeColor: 'text-cyan-700 border-cyan-600'
                    },
                    {
                        step: 3,
                        label: '3. Полевая сумка',
                        activeColor: 'text-slate-700 border-slate-600'
                    }
                ].map(({ step, label, activeColor })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onStepClick(step),
                        className: `px-4 py-2 rounded-t-lg font-bold border-b-4 transition-all
                ${currentStep === step ? `bg-white ${activeColor} shadow-sm` : 'bg-slate-200 text-slate-400 border-transparent hover:bg-slate-300'}`,
                        children: label
                    }, step, false, {
                        fileName: "[project]/components/Header.jsx",
                        lineNumber: 63,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Header.jsx",
                lineNumber: 57,
                columnNumber: 9
            }, this),
            isStage2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: [
                    {
                        step: 4,
                        label: '1. Подготовка крана'
                    },
                    {
                        step: 5,
                        label: '2. Предварительный слив'
                    },
                    {
                        step: 6,
                        label: '3. Стерилизация крана'
                    },
                    {
                        step: 7,
                        label: '4. Отбор на бактериологию'
                    },
                    {
                        step: 8,
                        label: '5. Отбор на химию'
                    }
                ].map(({ step, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onStepClick(step),
                        className: `px-4 py-2 rounded-t-lg font-bold border-b-4 transition-all
                ${currentStep === step ? 'bg-white text-emerald-700 border-emerald-600 shadow-sm' : 'bg-slate-200 text-slate-400 border-transparent hover:bg-slate-300'}`,
                        children: label
                    }, step, false, {
                        fileName: "[project]/components/Header.jsx",
                        lineNumber: 87,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Header.jsx",
                lineNumber: 79,
                columnNumber: 9
            }, this),
            isStage3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: [
                    {
                        step: 9,
                        label: '1. Маркировка'
                    },
                    {
                        step: 10,
                        label: '2. Консервация и охлаждение'
                    },
                    {
                        step: 11,
                        label: '3. Цифровое заполнение Акта отбора проб'
                    }
                ].map(({ step, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onStepClick(step),
                        className: `px-4 py-2 rounded-t-lg font-bold border-b-4 transition-all
                ${currentStep === step ? 'bg-white text-purple-700 border-purple-600 shadow-sm' : 'bg-slate-200 text-slate-400 border-transparent hover:bg-slate-300'}`,
                        children: label
                    }, step, false, {
                        fileName: "[project]/components/Header.jsx",
                        lineNumber: 109,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Header.jsx",
                lineNumber: 103,
                columnNumber: 9
            }, this),
            isStage1Report && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-2 rounded-t-lg font-bold border-b-4 bg-white text-blue-700 border-blue-600 shadow-sm",
                    children: "📊 Отчет Этапа 1"
                }, void 0, false, {
                    fileName: "[project]/components/Header.jsx",
                    lineNumber: 128,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Header.jsx",
                lineNumber: 127,
                columnNumber: 9
            }, this),
            isReport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-2 rounded-t-lg font-bold border-b-4 bg-white text-purple-700 border-purple-600 shadow-sm",
                    children: "📊 Итоговый отчёт"
                }, void 0, false, {
                    fileName: "[project]/components/Header.jsx",
                    lineNumber: 137,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Header.jsx",
                lineNumber: 136,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Header.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/inventory/icons/GasBurnerIcon.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GasBurnerIcon",
    ()=>GasBurnerIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function GasBurnerIcon({ className = '', size = 24, lit = false, flameProgress = 0, inventory = false, ...props }) {
    const s = size;
    const [flicker, setFlicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Анимация мерцания пламени (только когда горит)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!lit) {
            setFlicker(0);
            return;
        }
        let rafId;
        let t = 0;
        const animate = ()=>{
            t += 0.09;
            // Несколько синусов для естественного живого мерцания
            const f = Math.sin(t) * 0.55 + Math.sin(t * 2.4) * 0.35 + Math.sin(t * 5.1) * 0.25;
            setFlicker(f);
            rafId = requestAnimationFrame(animate);
        };
        rafId = requestAnimationFrame(animate);
        return ()=>cancelAnimationFrame(rafId);
    }, [
        lit
    ]);
    // Интерполяция цвета оранжевый → синий
    const p = Math.max(0, Math.min(1, flameProgress || 0));
    const outerColor = interpolateColor('#ff5722', '#1e3a8a', p);
    const midColor = interpolateColor('#ff9800', '#3b82f6', p);
    const coreColor = interpolateColor('#ffeb3b', '#bae6fd', p);
    const innerCore = interpolateColor('#fff59d', '#e0f2fe', p);
    // Параметры пламени
    const flameBaseLength = 12 + p * 11;
    const flameHeight = 8 + p * 3.5 + Math.abs(flicker) * 2.8;
    const flameWobble = flicker * 1.9;
    const flameIntensity = 0.7 + p * 0.22;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: s,
        height: s,
        viewBox: "0 0 110 38",
        preserveAspectRatio: "xMidYMid meet",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                transform: `translate(5 3) scale(${inventory ? 2.5 : 1.25})`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "3",
                        y: "9",
                        width: "10",
                        height: "17",
                        rx: "2",
                        fill: "#64748b",
                        stroke: "#334155",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/components/inventory/icons/GasBurnerIcon.jsx",
                        lineNumber: 72,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "4.5",
                        y: "10.5",
                        width: "3",
                        height: "14",
                        rx: "1",
                        fill: "#94a3b8",
                        opacity: "0.5"
                    }, void 0, false, {
                        fileName: "[project]/components/inventory/icons/GasBurnerIcon.jsx",
                        lineNumber: 83,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "5",
                        y: "6",
                        width: "6",
                        height: "4",
                        rx: "1",
                        fill: "#475569",
                        stroke: "#1e293b",
                        strokeWidth: "1"
                    }, void 0, false, {
                        fileName: "[project]/components/inventory/icons/GasBurnerIcon.jsx",
                        lineNumber: 94,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "6.5",
                        y: "3",
                        width: "3",
                        height: "4",
                        rx: "0.5",
                        fill: "#1e293b"
                    }, void 0, false, {
                        fileName: "[project]/components/inventory/icons/GasBurnerIcon.jsx",
                        lineNumber: 106,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "8",
                        cy: "2.5",
                        r: "2",
                        fill: "#dc2626",
                        stroke: "#7f1d1d",
                        strokeWidth: "0.8"
                    }, void 0, false, {
                        fileName: "[project]/components/inventory/icons/GasBurnerIcon.jsx",
                        lineNumber: 116,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "8",
                        cy: "2.5",
                        r: "0.8",
                        fill: "#fee2e2",
                        opacity: "0.6"
                    }, void 0, false, {
                        fileName: "[project]/components/inventory/icons/GasBurnerIcon.jsx",
                        lineNumber: 117,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "12.5",
                                y: "13",
                                width: "14",
                                height: "3.5",
                                rx: "1.2",
                                fill: "#475569",
                                stroke: "#1e293b",
                                strokeWidth: "1"
                            }, void 0, false, {
                                fileName: "[project]/components/inventory/icons/GasBurnerIcon.jsx",
                                lineNumber: 121,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "13",
                                y: "13.6",
                                width: "12.5",
                                height: "1.2",
                                rx: "0.4",
                                fill: "#94a3b8",
                                opacity: "0.6"
                            }, void 0, false, {
                                fileName: "[project]/components/inventory/icons/GasBurnerIcon.jsx",
                                lineNumber: 131,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/inventory/icons/GasBurnerIcon.jsx",
                        lineNumber: 120,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "25",
                        y: "11.5",
                        width: "5.5",
                        height: "6.5",
                        rx: "1.5",
                        fill: "#334155",
                        stroke: "#1e293b",
                        strokeWidth: "1.2"
                    }, void 0, false, {
                        fileName: "[project]/components/inventory/icons/GasBurnerIcon.jsx",
                        lineNumber: 143,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        fill: "#1e293b",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "26.3",
                                cy: "13",
                                r: "0.7"
                            }, void 0, false, {
                                fileName: "[project]/components/inventory/icons/GasBurnerIcon.jsx",
                                lineNumber: 156,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "28.5",
                                cy: "13",
                                r: "0.7"
                            }, void 0, false, {
                                fileName: "[project]/components/inventory/icons/GasBurnerIcon.jsx",
                                lineNumber: 157,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "26.3",
                                cy: "15.5",
                                r: "0.7"
                            }, void 0, false, {
                                fileName: "[project]/components/inventory/icons/GasBurnerIcon.jsx",
                                lineNumber: 158,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "28.5",
                                cy: "15.5",
                                r: "0.7"
                            }, void 0, false, {
                                fileName: "[project]/components/inventory/icons/GasBurnerIcon.jsx",
                                lineNumber: 159,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/inventory/icons/GasBurnerIcon.jsx",
                        lineNumber: 155,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "23.5",
                        y: "12.8",
                        width: "2",
                        height: "3.8",
                        rx: "0.5",
                        fill: "#1e293b"
                    }, void 0, false, {
                        fileName: "[project]/components/inventory/icons/GasBurnerIcon.jsx",
                        lineNumber: 163,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "11.8",
                        y: "12",
                        width: "1.5",
                        height: "5.5",
                        rx: "0.3",
                        fill: "#334155",
                        stroke: "#1e293b",
                        strokeWidth: "0.5"
                    }, void 0, false, {
                        fileName: "[project]/components/inventory/icons/GasBurnerIcon.jsx",
                        lineNumber: 173,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/inventory/icons/GasBurnerIcon.jsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            lit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                transform: `translate(42 20)`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: flameBaseLength * 0.92 + 4,
                        cy: flameWobble * 0.2,
                        rx: flameBaseLength + 6 + Math.abs(flicker) * 2,
                        ry: flameHeight * 1.38,
                        fill: outerColor,
                        opacity: 0.30 * flameIntensity
                    }, void 0, false, {
                        fileName: "[project]/components/inventory/icons/GasBurnerIcon.jsx",
                        lineNumber: 189,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: flameBaseLength * 0.85 + 2,
                        cy: flameWobble * 0.35,
                        rx: flameBaseLength + 3 + Math.abs(flicker) * 1.5,
                        ry: flameHeight * 1.18,
                        fill: outerColor,
                        opacity: 0.42 * flameIntensity
                    }, void 0, false, {
                        fileName: "[project]/components/inventory/icons/GasBurnerIcon.jsx",
                        lineNumber: 199,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: flameBaseLength * 0.72,
                        cy: flameWobble * 0.25,
                        rx: flameBaseLength + 1 + flicker * 1.0,
                        ry: flameHeight * 1.0,
                        fill: midColor,
                        opacity: 0.82 * flameIntensity
                    }, void 0, false, {
                        fileName: "[project]/components/inventory/icons/GasBurnerIcon.jsx",
                        lineNumber: 209,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: flameBaseLength * 0.62,
                        cy: flameWobble * 0.1,
                        rx: flameBaseLength + flicker * 0.7,
                        ry: flameHeight * 0.82,
                        fill: midColor,
                        opacity: 0.95 * flameIntensity
                    }, void 0, false, {
                        fileName: "[project]/components/inventory/icons/GasBurnerIcon.jsx",
                        lineNumber: 219,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: flameBaseLength * 0.55,
                        cy: flameWobble * 0.05,
                        rx: flameBaseLength * 0.55 + flicker * 0.6,
                        ry: flameHeight * 0.55,
                        fill: coreColor,
                        opacity: 0.97
                    }, void 0, false, {
                        fileName: "[project]/components/inventory/icons/GasBurnerIcon.jsx",
                        lineNumber: 229,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: flameBaseLength * 0.40,
                        cy: -flameWobble * 0.15,
                        rx: flameBaseLength * 0.32,
                        ry: flameHeight * 0.30,
                        fill: innerCore,
                        opacity: 0.9 + p * 0.08
                    }, void 0, false, {
                        fileName: "[project]/components/inventory/icons/GasBurnerIcon.jsx",
                        lineNumber: 239,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: flameBaseLength * 0.66 + 1,
                        cy: -flameHeight * 0.4 + flameWobble * 1.0,
                        rx: flameBaseLength * 0.52,
                        ry: flameHeight * 0.40,
                        fill: midColor,
                        opacity: 0.60 * flameIntensity
                    }, void 0, false, {
                        fileName: "[project]/components/inventory/icons/GasBurnerIcon.jsx",
                        lineNumber: 249,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: flameBaseLength * 0.70,
                        cy: flameHeight * 0.36 - flameWobble * 0.85,
                        rx: flameBaseLength * 0.48,
                        ry: flameHeight * 0.39,
                        fill: midColor,
                        opacity: 0.55 * flameIntensity
                    }, void 0, false, {
                        fileName: "[project]/components/inventory/icons/GasBurnerIcon.jsx",
                        lineNumber: 257,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: flameBaseLength * 1.02 + 3,
                        cy: flameWobble * 0.05,
                        rx: flameBaseLength * 0.38,
                        ry: flameHeight * 0.45,
                        fill: outerColor,
                        opacity: 0.42 * flameIntensity
                    }, void 0, false, {
                        fileName: "[project]/components/inventory/icons/GasBurnerIcon.jsx",
                        lineNumber: 267,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/inventory/icons/GasBurnerIcon.jsx",
                lineNumber: 187,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/inventory/icons/GasBurnerIcon.jsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
// Простая линейная интерполяция цвета hex
function interpolateColor(color1, color2, factor) {
    const f = Math.max(0, Math.min(1, factor));
    const c1 = hexToRgb(color1);
    const c2 = hexToRgb(color2);
    const r = Math.round(c1.r + (c2.r - c1.r) * f);
    const g = Math.round(c1.g + (c2.g - c1.g) * f);
    const b = Math.round(c1.b + (c2.b - c1.b) * f);
    return rgbToHex(r, g, b);
}
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : {
        r: 255,
        g: 128,
        b: 0
    };
}
function rgbToHex(r, g, b) {
    return '#' + [
        r,
        g,
        b
    ].map((x)=>{
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');
}
}),
"[project]/components/inventory/icons/WipeIcon.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WipeIcon",
    ()=>WipeIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function WipeIcon({ className = '', size = 24, wiping = false, ...props }) {
    const s = size;
    const [offset, setOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Анимация "протирки" — салфетка двигается влево-вправо
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!wiping) {
            setOffset(0);
            return;
        }
        let rafId;
        let t = 0;
        const animate = ()=>{
            t += 0.16;
            // Плавное синусоидальное движение из стороны в сторону
            const o = Math.sin(t) * 8;
            setOffset(o);
            rafId = requestAnimationFrame(animate);
        };
        rafId = requestAnimationFrame(animate);
        return ()=>cancelAnimationFrame(rafId);
    }, [
        wiping
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: s,
        height: s,
        viewBox: "0 0 70 34",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            transform: `translate(${offset + 8} 0)`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "5",
                    y: "5",
                    width: "36",
                    height: "24",
                    rx: "5",
                    ry: "5",
                    fill: "#e0f2fe",
                    stroke: "#475569",
                    strokeWidth: "2.5"
                }, void 0, false, {
                    fileName: "[project]/components/inventory/icons/WipeIcon.jsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "7",
                    y: "7",
                    width: "32",
                    height: "20",
                    rx: "3",
                    ry: "3",
                    fill: "#bae6fd",
                    opacity: "0.65"
                }, void 0, false, {
                    fileName: "[project]/components/inventory/icons/WipeIcon.jsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "9",
                    y1: "11",
                    x2: "39",
                    y2: "11",
                    stroke: "#64748b",
                    strokeWidth: "1.2",
                    opacity: "0.5"
                }, void 0, false, {
                    fileName: "[project]/components/inventory/icons/WipeIcon.jsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "9",
                    y1: "15",
                    x2: "39",
                    y2: "15",
                    stroke: "#64748b",
                    strokeWidth: "1.2",
                    opacity: "0.45"
                }, void 0, false, {
                    fileName: "[project]/components/inventory/icons/WipeIcon.jsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "9",
                    y1: "19",
                    x2: "39",
                    y2: "19",
                    stroke: "#64748b",
                    strokeWidth: "1.2",
                    opacity: "0.4"
                }, void 0, false, {
                    fileName: "[project]/components/inventory/icons/WipeIcon.jsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "9",
                    y1: "23",
                    x2: "39",
                    y2: "23",
                    stroke: "#64748b",
                    strokeWidth: "1",
                    opacity: "0.35"
                }, void 0, false, {
                    fileName: "[project]/components/inventory/icons/WipeIcon.jsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M10 8 Q 22 14, 36 9",
                    stroke: "#64748b",
                    strokeWidth: "1.5",
                    opacity: "0.35",
                    fill: "none"
                }, void 0, false, {
                    fileName: "[project]/components/inventory/icons/WipeIcon.jsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M8 26 Q 20 20, 38 27",
                    stroke: "#64748b",
                    strokeWidth: "1.2",
                    opacity: "0.3",
                    fill: "none"
                }, void 0, false, {
                    fileName: "[project]/components/inventory/icons/WipeIcon.jsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                    cx: "15",
                    cy: "12",
                    rx: "9",
                    ry: "5",
                    fill: "#f0f9ff",
                    opacity: "0.55"
                }, void 0, false, {
                    fileName: "[project]/components/inventory/icons/WipeIcon.jsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                    cx: "28",
                    cy: "18",
                    rx: "6",
                    ry: "3.5",
                    fill: "#ffffff",
                    opacity: "0.35"
                }, void 0, false, {
                    fileName: "[project]/components/inventory/icons/WipeIcon.jsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "5",
                    y: "5",
                    width: "36",
                    height: "24",
                    rx: "5",
                    ry: "5",
                    fill: "none",
                    stroke: "#475569",
                    strokeWidth: "1",
                    opacity: "0.7"
                }, void 0, false, {
                    fileName: "[project]/components/inventory/icons/WipeIcon.jsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "21",
                    r: "1.8",
                    fill: "#67e8f9",
                    opacity: "0.4"
                }, void 0, false, {
                    fileName: "[project]/components/inventory/icons/WipeIcon.jsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "33",
                    cy: "10",
                    r: "1.4",
                    fill: "#67e8f9",
                    opacity: "0.35"
                }, void 0, false, {
                    fileName: "[project]/components/inventory/icons/WipeIcon.jsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/inventory/icons/WipeIcon.jsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/inventory/icons/WipeIcon.jsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/inventory/itemRegistry.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ICON_MAP",
    ()=>ICON_MAP,
    "getItemDef",
    ()=>getItemDef,
    "getMaxStack",
    ()=>getMaxStack,
    "renderItemIcon",
    ()=>renderItemIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// components/inventory/itemRegistry.js
// ── Единственный источник правды по иконкам/лейблам/слотам/стекам предметов ──
// Если предмет нужно добавить в инвентарь — добавляйте его сюда, и только сюда.
//
// maxStack — сколько штук одного предмета может лежать в одной ячейке
// (как в Minecraft). По умолчанию (если не указано) — 1, то есть предмет
// уникален и не стекуется (горелка, очки, ключи и т.п.).
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$icons$2f$GasBurnerIcon$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/icons/GasBurnerIcon.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$icons$2f$WipeIcon$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/icons/WipeIcon.jsx [app-ssr] (ecmascript)");
;
;
;
const ICON_MAP = {
    ethyl_wipes: {
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$icons$2f$WipeIcon$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WipeIcon"],
        label: 'Салфетки этиловые',
        slot: null,
        maxStack: 10
    },
    isop_wipes: {
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$icons$2f$WipeIcon$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WipeIcon"],
        label: 'Салфетки изопропиловые',
        slot: null,
        maxStack: 10
    },
    antibact_wipes: {
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$icons$2f$WipeIcon$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WipeIcon"],
        label: 'Салфетки гигиенические',
        slot: null,
        maxStack: 10
    },
    gas_burner: {
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$icons$2f$GasBurnerIcon$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GasBurnerIcon"],
        label: 'Портативная горелка',
        slot: null,
        maxStack: 1
    },
    lighter_only: {
        icon: '🪔',
        label: 'Бытовая зажигалка',
        slot: null,
        maxStack: 1
    },
    sterile_gloves: {
        icon: '🧤',
        label: 'Перчатки стерильные',
        slot: 'gloves',
        value: 'sterile',
        bg: 'bg-emerald-50',
        border: 'border-emerald-300',
        maxStack: 10
    },
    regular_gloves: {
        icon: '🫳',
        label: 'Перчатки хозяйственные',
        slot: 'gloves',
        value: 'yellow',
        bg: 'bg-amber-50',
        border: 'border-amber-300',
        maxStack: 10
    },
    used_gloves: {
        icon: '🗑️',
        label: 'Использованные перчатки',
        slot: null,
        bg: 'bg-slate-100',
        border: 'border-slate-300',
        maxStack: 10
    },
    waterproof_marker: {
        icon: '🖊️',
        label: 'Маркер перманентный',
        slot: null,
        maxStack: 1
    },
    regular_pencil: {
        icon: '✏️',
        label: 'Карандаш графитовый',
        slot: null,
        maxStack: 1
    },
    safety_goggles: {
        icon: '🥽',
        label: 'Очки защитные',
        slot: 'helmet',
        bg: 'bg-blue-50',
        border: 'border-blue-300',
        maxStack: 1
    },
    aerator_key_special: {
        icon: '🔧',
        label: 'Специальный ключ для скрытых аэраторов',
        slot: null,
        maxStack: 1
    },
    adjustable_wrench: {
        icon: '🔧',
        label: 'Разводной шведский ключ',
        slot: null,
        maxStack: 1
    },
    pliers: {
        icon: '🔧',
        label: 'Пассатижи монтажные (плоскогубцы)',
        slot: null,
        maxStack: 1
    },
    ice_eutectic: {
        icon: '🧊',
        label: 'Эвтектический хладоэлемент',
        slot: null,
        maxStack: 10,
        unlimited: true
    },
    ice_gel: {
        icon: '🫙',
        label: 'Гелевый хладоэлемент',
        slot: null,
        maxStack: 10,
        unlimited: true
    },
    ice_silicone: {
        icon: '💧',
        label: 'Силиконовый хладоэлемент',
        slot: null,
        maxStack: 10,
        unlimited: true
    },
    // тара для химии/бактериологии — динамические id, обрабатываются через префикс в getItemDef()
    // ── Перегородки (категория divider) — Stage4 / Step1_PackBag ──
    divider_cardboard: {
        icon: '📦',
        label: 'Картонная перегородка',
        slot: null,
        maxStack: 10,
        unlimited: true
    },
    divider_foam: {
        icon: '📦',
        label: 'Перегородка из пенопласта',
        slot: null,
        maxStack: 10,
        unlimited: true
    },
    divider_water_bottle: {
        icon: '💦',
        label: 'Бутылка с водой',
        slot: null,
        maxStack: 10,
        unlimited: true
    },
    divider_sealant_bottle: {
        icon: '🧪',
        label: 'Бутылка строительного герметика',
        slot: null,
        maxStack: 10,
        unlimited: true
    },
    // ── Прочее (категория some_stuff) ──
    tape_distractor: {
        icon: '🎗️',
        label: 'Скотч',
        slot: null,
        unlimited: true
    },
    // Старое имя оставлено как алиас на случай, если где-то в коде ещё
    // встречается foam_distractor — указывает на тот же предмет, что divider_foam.
    foam_distractor: {
        icon: '🧱',
        label: 'Перегородка из пенопласта',
        slot: null,
        maxStack: 10,
        unlimited: true
    }
};
const DEFAULT_MAX_STACK = 1;
const TARE_MAX_STACK = 10;
function getItemDef(item) {
    if (!item) return null;
    if (ICON_MAP[item.id]) {
        const def = ICON_MAP[item.id];
        return {
            maxStack: DEFAULT_MAX_STACK,
            ...def
        };
    }
    if (item.id?.startsWith('chem_tare_')) {
        return {
            icon: '🧪',
            label: item.name,
            slot: null,
            bg: 'bg-blue-50',
            border: 'border-blue-200',
            maxStack: TARE_MAX_STACK
        };
    }
    if (item.id?.startsWith('bio_tare_')) {
        return {
            icon: '🧫',
            label: item.name,
            slot: null,
            bg: 'bg-cyan-50',
            border: 'border-cyan-200',
            maxStack: TARE_MAX_STACK
        };
    }
    return {
        icon: '📦',
        label: item.name || item.id,
        slot: null,
        maxStack: DEFAULT_MAX_STACK
    };
}
function getMaxStack(id) {
    return getItemDef({
        id
    })?.maxStack ?? DEFAULT_MAX_STACK;
}
function renderItemIcon(itemOrDef, size = 20) {
    let def = itemOrDef;
    if (itemOrDef && itemOrDef.id && !itemOrDef.Icon && !itemOrDef.icon) {
        def = getItemDef(itemOrDef);
    }
    if (!def) return null;
    const isGasBurner = !!(def.label && def.label.toLowerCase().includes('горелка'));
    const isWipe = !!(def.label && def.label.toLowerCase().includes('салфетк'));
    let effectiveSize = size;
    if (isGasBurner) effectiveSize = size * 1.8;
    else if (isWipe) effectiveSize = size * 1.5;
    if (def.Icon) {
        const IconComp = def.Icon;
        const extra = isGasBurner ? {
            inventory: true
        } : {};
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComp, {
            size: effectiveSize,
            ...extra
        }, void 0, false, {
            fileName: "[project]/components/inventory/itemRegistry.js",
            lineNumber: 94,
            columnNumber: 12
        }, this);
    }
    return def.icon || '📦';
}
}),
"[project]/components/inventory/useInventory.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInventory",
    ()=>useInventory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/itemRegistry.js [app-ssr] (ecmascript)");
// components/inventory/useInventory.js
'use client';
;
;
const TOTAL_SLOTS = 36; // 9 hotbar + 27 основной инвентарь
/**
 * Нормализует предмет к виду { id, name, qty }. qty по умолчанию 1.
 * Все предметы в слотах хранятся именно в этом виде, чтобы стекинг
 * (как в Minecraft) был возможен для расходников (maxStack > 1).
 */ function withQty(item, qty = 1) {
    if (!item) return null;
    return {
        ...item,
        qty: Math.max(1, qty)
    };
}
function useInventory(initialItems = []) {
    const buildInitialSlots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const slots = new Array(TOTAL_SLOTS).fill(null);
        let cursor = 0;
        initialItems.forEach((rawItem)=>{
            if (cursor >= TOTAL_SLOTS) return;
            const maxStack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMaxStack"])(rawItem.id);
            let remaining = rawItem.qty ?? 1;
            // Если в той же сборке initialItems несколько раз встречается id
            // (например, студент дважды взял одну и ту же салфетку), пытаемся
            // сначала добавить в уже существующую неполную стопку.
            const existingIndex = slots.findIndex((s)=>s && s.id === rawItem.id && s.qty < maxStack);
            if (existingIndex !== -1 && remaining > 0) {
                const canAdd = Math.min(remaining, maxStack - slots[existingIndex].qty);
                slots[existingIndex] = {
                    ...slots[existingIndex],
                    qty: slots[existingIndex].qty + canAdd
                };
                remaining -= canAdd;
            }
            while(remaining > 0 && cursor < TOTAL_SLOTS){
                const qtyForSlot = Math.min(remaining, maxStack);
                slots[cursor] = withQty({
                    id: rawItem.id,
                    name: rawItem.name
                }, qtyForSlot);
                remaining -= qtyForSlot;
                cursor++;
            }
        });
        return slots;
    }, [
        initialItems
    ]);
    const [slots, setSlots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(buildInitialSlots);
    const [selectedSlot, setSelectedSlot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null); // number | 'helmet' | 'gloves' | null
    const [equippedHelmet, setEquippedHelmet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [equippedGloves, setEquippedGloves] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null); // null | 'sterile' | 'yellow'
    const [hotbarActive, setHotbarActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isHoldingActive, setIsHoldingActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [draggedSlot, setDraggedSlot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null); // number | 'helmet' | 'gloves' | null
    const initialItemsKey = JSON.stringify(initialItems);
    // Пересобрать инвентарь, если initialItems сменились
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setSlots(buildInitialSlots());
        setEquippedHelmet(false);
        setEquippedGloves(null);
        setSelectedSlot(null);
    }, [
        initialItemsKey
    ]);
    // ── «Виртуальный» предмет, лежащий в слоте экипировки (всегда qty:1) ──
    const getEquipItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((slotName)=>{
        if (slotName === 'helmet') return equippedHelmet ? withQty({
            id: 'safety_goggles'
        }) : null;
        if (slotName === 'gloves') {
            if (equippedGloves === 'sterile') return withQty({
                id: 'sterile_gloves'
            });
            if (equippedGloves === 'yellow') return withQty({
                id: 'regular_gloves'
            });
            return null;
        }
        return null;
    }, [
        equippedHelmet,
        equippedGloves
    ]);
    const getSlotItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((slot)=>{
        const isEquip = slot === 'helmet' || slot === 'gloves';
        return isEquip ? getEquipItem(slot) : slots[slot];
    }, [
        slots,
        getEquipItem
    ]);
    // Положить предмет (с его qty) в первую свободную ячейку,
    // либо доложить в существующую неполную стопку того же id.
    const returnToInventory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((item)=>{
        if (!item) return;
        setSlots((prev)=>{
            const next = [
                ...prev
            ];
            const maxStack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMaxStack"])(item.id);
            let remaining = item.qty ?? 1;
            // Сначала пытаемся доложить в существующие неполные стопки
            for(let i = 0; i < next.length && remaining > 0; i++){
                if (next[i] && next[i].id === item.id && next[i].qty < maxStack) {
                    const canAdd = Math.min(remaining, maxStack - next[i].qty);
                    next[i] = {
                        ...next[i],
                        qty: next[i].qty + canAdd
                    };
                    remaining -= canAdd;
                }
            }
            // Остаток — в свободные ячейки
            while(remaining > 0){
                const emptyIdx = next.findIndex((s)=>s === null);
                if (emptyIdx === -1) break; // инвентарь полон — остаток теряется (как в Minecraft)
                const qtyForSlot = Math.min(remaining, maxStack);
                next[emptyIdx] = withQty({
                    id: item.id,
                    name: item.name
                }, qtyForSlot);
                remaining -= qtyForSlot;
            }
            return next;
        });
    }, []);
    /**
   * moveItem — переместить весь предмет (со всем qty) из source в target.
   * Если в target лежит такой же id — стекуется до maxStack, остаток
   * остаётся в source. Если разные id — обычный обмен местами (swap).
   */ const moveItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((source, target)=>{
        if (source === null || source === undefined) return;
        if (source === target) return;
        const isEquipSource = source === 'helmet' || source === 'gloves';
        const isEquipTarget = target === 'helmet' || target === 'gloves';
        const sourceItem = isEquipSource ? getEquipItem(source) : slots[source];
        const targetItem = isEquipTarget ? getEquipItem(target) : slots[target];
        if (!sourceItem) return;
        // ── Случай A: инвентарь → экипировка ──
        if (!isEquipSource && isEquipTarget) {
            const def = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getItemDef"])(sourceItem);
            if (def?.slot && def.slot === target) {
                // Экипировать можно только 1 штуку; если в стеке было больше — остаток
                // остаётся в исходном слоте инвентаря.
                const remainder = sourceItem.qty > 1 ? {
                    ...sourceItem,
                    qty: sourceItem.qty - 1
                } : targetItem;
                setSlots((prev)=>{
                    const n = [
                        ...prev
                    ];
                    n[source] = remainder;
                    return n;
                });
                if (target === 'helmet') setEquippedHelmet(true);
                if (target === 'gloves') setEquippedGloves(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ICON_MAP"][sourceItem.id]?.value || null);
                // Если в экип-слоте уже что-то было и остатка от стека нет — вернуть это в инвентарь
                if (sourceItem.qty <= 1 && targetItem) returnToInventory(targetItem);
            }
            return;
        }
        // ── Случай B: экипировка → инвентарь ──
        if (isEquipSource && !isEquipTarget) {
            const displaced = slots[target];
            if (displaced && displaced.id === sourceItem.id && displaced.qty < (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMaxStack"])(displaced.id)) {
                // Стекуем с тем, что уже лежит в целевой ячейке
                const maxStack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMaxStack"])(displaced.id);
                const canAdd = Math.min(sourceItem.qty, maxStack - displaced.qty);
                setSlots((prev)=>{
                    const n = [
                        ...prev
                    ];
                    n[target] = {
                        ...displaced,
                        qty: displaced.qty + canAdd
                    };
                    return n;
                });
            } else {
                setSlots((prev)=>{
                    const n = [
                        ...prev
                    ];
                    n[target] = sourceItem;
                    return n;
                });
                if (displaced) returnToInventory(displaced);
            }
            if (source === 'helmet') setEquippedHelmet(false);
            if (source === 'gloves') setEquippedGloves(null);
            return;
        }
        // ── Случай C: экипировка → экипировка ──
        if (isEquipSource && isEquipTarget) {
            const sourceDef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getItemDef"])(sourceItem);
            const targetDef = targetItem ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getItemDef"])(targetItem) : null;
            if (!sourceDef?.slot || sourceDef.slot !== target) return;
            if (target === 'helmet') setEquippedHelmet(true);
            if (target === 'gloves') setEquippedGloves(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ICON_MAP"][sourceItem.id]?.value || null);
            if (targetItem && targetDef?.slot === source) {
                if (source === 'helmet') setEquippedHelmet(true);
                if (source === 'gloves') setEquippedGloves(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ICON_MAP"][targetItem.id]?.value || null);
            } else {
                if (source === 'helmet') setEquippedHelmet(false);
                if (source === 'gloves') setEquippedGloves(null);
                if (targetItem) returnToInventory(targetItem);
            }
            return;
        }
        // ── Случай D: инвентарь → инвентарь ──
        if (targetItem && targetItem.id === sourceItem.id) {
            // Стекуем одинаковые предметы
            const maxStack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMaxStack"])(sourceItem.id);
            const total = sourceItem.qty + targetItem.qty;
            if (total <= maxStack) {
                setSlots((prev)=>{
                    const n = [
                        ...prev
                    ];
                    n[target] = {
                        ...targetItem,
                        qty: total
                    };
                    n[source] = null;
                    return n;
                });
            } else {
                setSlots((prev)=>{
                    const n = [
                        ...prev
                    ];
                    n[target] = {
                        ...targetItem,
                        qty: maxStack
                    };
                    n[source] = {
                        ...sourceItem,
                        qty: total - maxStack
                    };
                    return n;
                });
            }
        } else {
            // Разные предметы (или target пуст) — обычный обмен
            setSlots((prev)=>{
                const n = [
                    ...prev
                ];
                n[source] = targetItem;
                n[target] = sourceItem;
                return n;
            });
        }
    }, [
        slots,
        getEquipItem,
        returnToInventory
    ]);
    /**
   * moveOne — Minecraft-style «правый клик»: переместить только 1 штуку
   * из стека source в target (а не весь стек). Используется для разделения
   * стопки расходников (например, переложить 1 перчатку из 5 в новую ячейку).
   */ const moveOne = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((source, target)=>{
        if (source === null || source === undefined || source === target) return;
        const isEquipSource = source === 'helmet' || source === 'gloves';
        const isEquipTarget = target === 'helmet' || target === 'gloves';
        const sourceItem = isEquipSource ? getEquipItem(source) : slots[source];
        if (!sourceItem) return;
        // Экипировочные слоты всегда содержат максимум 1 шт — для них
        // «взять одну» равносильно обычному moveItem.
        if (isEquipSource || isEquipTarget) {
            moveItem(source, target);
            return;
        }
        const targetItem = slots[target];
        const maxStack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMaxStack"])(sourceItem.id);
        // Целевая ячейка пуста или содержит тот же предмет с местом в стопке
        if (!targetItem) {
            setSlots((prev)=>{
                const n = [
                    ...prev
                ];
                const newSourceQty = sourceItem.qty - 1;
                n[source] = newSourceQty > 0 ? {
                    ...sourceItem,
                    qty: newSourceQty
                } : null;
                n[target] = withQty({
                    id: sourceItem.id,
                    name: sourceItem.name
                }, 1);
                return n;
            });
            return;
        }
        if (targetItem.id === sourceItem.id && targetItem.qty < maxStack) {
            setSlots((prev)=>{
                const n = [
                    ...prev
                ];
                const newSourceQty = sourceItem.qty - 1;
                n[source] = newSourceQty > 0 ? {
                    ...sourceItem,
                    qty: newSourceQty
                } : null;
                n[target] = {
                    ...targetItem,
                    qty: targetItem.qty + 1
                };
                return n;
            });
            return;
        }
    // Иначе (другой предмет в target и стопка полна) — ничего не делаем
    }, [
        slots,
        getEquipItem,
        moveItem
    ]);
    /**
   * handleSlotClick — режим "выделить → переместить" по левому клику (весь стек).
   */ const handleSlotClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((target)=>{
        if (selectedSlot === null) {
            if (getSlotItem(target)) setSelectedSlot(target);
            return;
        }
        if (selectedSlot === target) {
            setSelectedSlot(null);
            return;
        }
        moveItem(selectedSlot, target);
        setSelectedSlot(null);
    }, [
        selectedSlot,
        getSlotItem,
        moveItem
    ]);
    /**
moveHalf — переносит ровно половину стака (округление в большую сторону).
Аналог «правого клика по стеку» в Minecraft, когда предмет уже «в руке» (выделен).
*/ const moveHalf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((source, target)=>{
        if (source === null || source === undefined || source === target) return;
        const isEquipSource = source === 'helmet' || source === 'gloves';
        const isEquipTarget = target === 'helmet' || target === 'gloves';
        // В слотах экипировки максимум 1 шт, поэтому половина — это просто 1
        if (isEquipSource || isEquipTarget) {
            moveOne(source, target);
            return;
        }
        const sourceItem = slots[source];
        if (!sourceItem) return;
        const targetItem = slots[target];
        const maxStack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMaxStack"])(sourceItem.id);
        const halfQty = Math.ceil(sourceItem.qty / 2);
        // Если целевая ячейка пуста
        if (!targetItem) {
            setSlots((prev)=>{
                const n = [
                    ...prev
                ];
                const newSourceQty = sourceItem.qty - halfQty;
                n[source] = newSourceQty > 0 ? {
                    ...sourceItem,
                    qty: newSourceQty
                } : null;
                n[target] = withQty({
                    id: sourceItem.id,
                    name: sourceItem.name
                }, halfQty);
                return n;
            });
            return;
        }
        // Если в целевой ячейке тот же предмет и есть место
        if (targetItem.id === sourceItem.id && targetItem.qty < maxStack) {
            setSlots((prev)=>{
                const n = [
                    ...prev
                ];
                const canAdd = Math.min(halfQty, maxStack - targetItem.qty);
                const newSourceQty = sourceItem.qty - canAdd;
                n[source] = newSourceQty > 0 ? {
                    ...sourceItem,
                    qty: newSourceQty
                } : null;
                n[target] = {
                    ...targetItem,
                    qty: targetItem.qty + canAdd
                };
                return n;
            });
            return;
        }
    // Если ячейка занята другим предметом или переполнена — ничего не делаем
    }, [
        slots,
        moveOne
    ]);
    /**
handleSlotRightClick — универсальный обработчик правого клика.
1. Если идет Drag-and-drop (зажали ЛКМ) -> переносит 1 штуку.
2. Если предмет просто выделен (кликнули ЛКМ) -> переносит половину стака.
3. Если ничего не выбрано -> выделяет слот.
*/ const handleSlotRightClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((target)=>{
        // Сценарий А: Тащим предмет (Drag) + ПКМ = перенос 1 штуки
        if (draggedSlot !== null) {
            if (draggedSlot !== target) {
                moveOne(draggedSlot, target);
            }
            setDraggedSlot(null); // Завершаем режим перетаскивания
            setSelectedSlot(null);
            return;
        }
        // Сценарий Б: Предмет выделен (ЛКМ) + ПКМ = перенос половины стака
        if (selectedSlot !== null) {
            if (selectedSlot === target) {
                setSelectedSlot(null);
                return;
            }
            moveHalf(selectedSlot, target);
            // Снимаем выделение, если в источнике ничего не осталось
            const sourceStillHasItem = getSlotItem(selectedSlot);
            setSelectedSlot(sourceStillHasItem ? selectedSlot : null);
            return;
        }
        // Сценарий В: Ничего не выбрано — просто выделяем слот
        if (getSlotItem(target)) {
            setSelectedSlot(target);
        }
    }, [
        draggedSlot,
        selectedSlot,
        getSlotItem,
        moveOne,
        moveHalf
    ]);
    /**
   * Drag-and-drop — левая кнопка мыши тащит весь стек (как moveItem).
   * Если хотите тащить только 1 штуку — зажмите Alt при отпускании
   * (см. handleDrop ниже, e.altKey).
   */ const handleDragStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((source)=>{
        if (!getSlotItem(source)) return;
        setDraggedSlot(source);
        setSelectedSlot(null);
    }, [
        getSlotItem
    ]);
    const handleDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((target, isAltKey = false)=>{
        if (draggedSlot === null) return;
        if (isAltKey) {
            moveOne(draggedSlot, target);
        } else {
            moveItem(draggedSlot, target);
        }
        setDraggedSlot(null);
    }, [
        draggedSlot,
        moveItem,
        moveOne
    ]);
    const handleDragEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setDraggedSlot(null);
    }, []);
    /**
   * removeFromSlot — безопасно убрать предмет из конкретного инвентарного
   * слота (например, когда предмет "вынесли" из инвентаря в зону термосумки
   * на Stage4). Использует setSlots, поэтому React корректно увидит изменение
   * — в отличие от прямой мутации/splice массива slots.
   */ const removeFromSlot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((slotIndex)=>{
        if (typeof slotIndex !== 'number') return;
        setSlots((prev)=>{
            const next = [
                ...prev
            ];
            next[slotIndex] = null;
            return next;
        });
    }, []);
    /**
   * returnItemToSlot — положить предмет обратно в конкретный слот инвентаря
   * (например, когда предмет вынули из зоны термосумки обратно в рюкзак).
   * Если переданный slotIndex уже занят — кладём в первую свободную ячейку,
   * чтобы не потерять и не перезаписать то, что туда успело попасть.
   */ const returnItemToSlot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((slotIndex, item)=>{
        if (!item) return;
        setSlots((prev)=>{
            const next = [
                ...prev
            ];
            if (typeof slotIndex === 'number' && next[slotIndex] === null) {
                next[slotIndex] = item;
                return next;
            }
            const empty = next.findIndex((s)=>s === null);
            if (empty !== -1) next[empty] = item;
            return next;
        });
    }, []);
    // ── Открытие/закрытие модалки ──
    const openInventory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setIsOpen(true), []);
    const closeInventory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsOpen(false);
        setSelectedSlot(null);
        setDraggedSlot(null);
    }, []);
    const toggleInventory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsOpen((o)=>!o);
        setSelectedSlot(null);
        setDraggedSlot(null);
    }, []);
    const resetInventory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setSlots(buildInitialSlots());
        setEquippedHelmet(false);
        setEquippedGloves(null);
        setSelectedSlot(null);
        setDraggedSlot(null);
        setHotbarActive(0);
    }, [
        buildInitialSlots
    ]);
    // ── Управление активной ячейкой hotbar (клавиатура ←/→ или клик) ──
    const moveHotbarActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((direction)=>{
        setHotbarActive((a)=>(a + direction + 9) % 9);
        setIsHoldingActive(true);
    }, []);
    // ── Горячие клавиши: Tab открывают-закрывают, Esc закрывает, ←→ листают hotbar ──
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onKey = (e)=>{
            const key = e.key.toLowerCase();
            if (key === 'tab') {
                e.preventDefault();
                toggleInventory();
                return;
            }
            if (e.key === 'Escape' && isOpen) {
                closeInventory();
                return;
            }
            if (!isOpen) {
                if (e.key === 'ArrowRight') moveHotbarActive(1);
                if (e.key === 'ArrowLeft') moveHotbarActive(-1);
            }
        };
        window.addEventListener('keydown', onKey);
        return ()=>window.removeEventListener('keydown', onKey);
    }, [
        isOpen,
        toggleInventory,
        closeInventory,
        moveHotbarActive
    ]);
    const activeItem = isHoldingActive ? slots[hotbarActive] : null;
    const activeItemDef = activeItem ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getItemDef"])(activeItem) : null;
    const selectHotbarSlot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((index)=>{
        if (hotbarActive === index) {
            // Повторный клик по активному слоту убирает предмет из руки (очищает курсор)
            setIsHoldingActive((prev)=>!prev);
        } else {
            // Клик по другому слоту активирует его и поднимает предмет в руку
            setHotbarActive(index);
            setIsHoldingActive(true);
        }
    }, [
        hotbarActive
    ]);
    /**
   * degradeItem — заменить N штук предмета с одним id на предмет с другим id
   * (например, после использования стерильных перчаток на Шаге 2.4 —
   * первая пара становится «использованными перчатками»). Уменьшает qty
   * исходного предмета и добавляет такое же количество нового через
   * returnToInventory (что также сработает со стекингом).
   *
   * Если исходный предмет экипирован (sterile/yellow в gloves) — снимает
   * экипировку и заменяет на использованные перчатки в инвентаре.
   */ const degradeItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((fromId, toId, qty = 1)=>{
        // Сначала проверяем — не надеты ли именно эти перчатки сейчас
        if (fromId === 'sterile_gloves' && equippedGloves === 'sterile') {
            setEquippedGloves(null);
            returnToInventory(withQty({
                id: toId
            }, qty));
            return;
        }
        if (fromId === 'regular_gloves' && equippedGloves === 'yellow') {
            setEquippedGloves(null);
            returnToInventory(withQty({
                id: toId
            }, qty));
            return;
        }
        setSlots((prev)=>{
            const next = [
                ...prev
            ];
            let remaining = qty;
            for(let i = 0; i < next.length && remaining > 0; i++){
                if (next[i] && next[i].id === fromId) {
                    const take = Math.min(remaining, next[i].qty);
                    next[i] = next[i].qty - take > 0 ? {
                        ...next[i],
                        qty: next[i].qty - take
                    } : null;
                    remaining -= take;
                }
            }
            return next;
        });
        if (qty > 0) returnToInventory(withQty({
            id: toId
        }, qty));
    }, [
        equippedGloves,
        returnToInventory
    ]);
    /**
   * addItem — публичный метод для добавления одного предмета в инвентарь
   */ const addItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((item)=>{
        if (!item) return;
        const maxStack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMaxStack"])(item.id);
        let remaining = item.qty || 1;
        setSlots((prev)=>{
            const next = [
                ...prev
            ];
            // 1. Сначала пытаемся добавить в существующие стопки
            for(let i = 0; i < next.length && remaining > 0; i++){
                if (next[i] && next[i].id === item.id && next[i].qty < maxStack) {
                    const canAdd = Math.min(remaining, maxStack - next[i].qty);
                    next[i] = {
                        ...next[i],
                        qty: next[i].qty + canAdd
                    };
                    remaining -= canAdd;
                }
            }
            // 2. Остаток кладем в пустые слоты
            while(remaining > 0){
                const emptyIdx = next.findIndex((s)=>s === null);
                if (emptyIdx === -1) {
                    console.warn('Инвентарь полон! Некоторые предметы не добавлены.');
                    break;
                }
                const qtyForSlot = Math.min(remaining, maxStack);
                next[emptyIdx] = withQty({
                    id: item.id,
                    name: item.name
                }, qtyForSlot);
                remaining -= qtyForSlot;
            }
            return next;
        });
    }, []);
    /**
   * addMultipleItems — публичный метод для добавления нескольких предметов
   * за один раз. Это гарантирует, что предметы не перезапишут друг друга.
   */ const addMultipleItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((items)=>{
        if (!items || items.length === 0) return;
        setSlots((prev)=>{
            const next = [
                ...prev
            ];
            // Обрабатываем каждый предмет
            items.forEach((item)=>{
                const maxStack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMaxStack"])(item.id);
                let remaining = item.qty || 1;
                // 1. Сначала ищем существующие стопки
                for(let i = 0; i < next.length && remaining > 0; i++){
                    if (next[i] && next[i].id === item.id && next[i].qty < maxStack) {
                        const canAdd = Math.min(remaining, maxStack - next[i].qty);
                        next[i] = {
                            ...next[i],
                            qty: next[i].qty + canAdd
                        };
                        remaining -= canAdd;
                    }
                }
                // 2. Остаток в пустые слоты
                while(remaining > 0){
                    const emptyIdx = next.findIndex((s)=>s === null);
                    if (emptyIdx === -1) {
                        console.warn(`Инвентарь полон! Не добавлено ${remaining} шт. ${item.name}`);
                        break;
                    }
                    const qtyForSlot = Math.min(remaining, maxStack);
                    next[emptyIdx] = withQty({
                        id: item.id,
                        name: item.name
                    }, qtyForSlot);
                    remaining -= qtyForSlot;
                }
            });
            return next;
        });
    }, []);
    return {
        // данные
        slots,
        selectedSlot,
        draggedSlot,
        equippedHelmet,
        equippedGloves,
        hotbarActive,
        isHoldingActive,
        activeItem,
        activeItemDef,
        isOpen,
        // действия — клик (левый = весь стек, правый = по одной штуке)
        handleSlotClick,
        handleSlotRightClick,
        // действия — drag and drop
        handleDragStart,
        handleDrop,
        handleDragEnd,
        // точечные операции со слотами (используются на Stage4 для зон термосумки)
        removeFromSlot,
        returnItemToSlot,
        // утилита для других шагов: заменить N штук предмета на другой id
        degradeItem,
        // добавление предметов
        addItem,
        addMultipleItems,
        // hotbar / модалка
        setHotbarActive: selectHotbarSlot,
        moveHotbarActive,
        openInventory,
        closeInventory,
        toggleInventory,
        resetInventory
    };
}
}),
"[project]/components/inventory/InventoryContext.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InventoryProvider",
    ()=>InventoryProvider,
    "useInventoryContext",
    ()=>useInventoryContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$useInventory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/useInventory.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const InventoryContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function InventoryProvider({ initialItems, children }) {
    const itemsKey = JSON.stringify(initialItems || []);
    const stableItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>initialItems || [], [
        itemsKey
    ]);
    const inventory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$useInventory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInventory"])(stableItems);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InventoryContext.Provider, {
        value: inventory,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/inventory/InventoryContext.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
function useInventoryContext() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(InventoryContext);
    if (!context) {
        throw new Error('useInventoryContext must be used within InventoryProvider');
    }
    return context;
}
}),
"[project]/components/FaucetSVG.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaucetSVG",
    ()=>FaucetSVG
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function FaucetSVG({ aeratorRemoved, spotsLeft, isWiping, onRemoveAerator, onWipeSpot, glovesEquipped, blocked = false, onFlowChange, showAeratorRemovedBadge = false, bottleUnderSpout = false }) {
    const canInteract = !!glovesEquipped;
    const svgRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    // Референсы для хранения аудио-объектов (не сбрасываются при рендерах)
    const lowAudioRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const medAudioRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const highAudioRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    // Состояния для перетаскивания ручки смесителя
    // x: -45 (горячая) до 45 (холодная)
    // y: 10 (выключена) до -45 (полный напор вверх)
    const [handlePos, setHandlePos] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState({
        x: 0,
        y: 10
    });
    const [isDragging, setIsDragging] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    // Координаты пятен ржавчины
    const spots = [
        {
            id: 0,
            cx: 440,
            cy: 233,
            r: 7
        },
        {
            id: 1,
            cx: 432,
            cy: 255,
            r: 6
        },
        {
            id: 2,
            cx: 448,
            cy: 273,
            r: 5.5
        }
    ];
    // Обработчики мыши и тач-событий для Drag-and-Drop
    const handleMouseDown = ()=>{
        if (blocked) return;
        setIsDragging(true);
    };
    // ИСПРАВЛЕНО: Теперь сбрасывает состояние перетаскивания
    const handleMouseUp = ()=>{
        setIsDragging(false);
    };
    // ИСПРАВЛЕНО: Добавлена проверка на blocked, чтобы ручка не двигалась при блокировке
    const handleMouseMove = (e)=>{
        if (blocked || !isDragging || !svgRef.current) return;
        const rect = svgRef.current.getBoundingClientRect();
        const clientX = e.clientX ?? e.touches?.[0]?.clientX;
        const clientY = e.clientY ?? e.touches?.[0]?.clientY;
        if (clientX === undefined || clientY === undefined) return;
        // Вычисляем координаты клика относительно SVG контейнера
        const relativeX = clientX - rect.left;
        const relativeY = clientY - rect.top;
        // Конвертируем в систему координат viewBox (600 x 640)
        const svgX = relativeX / rect.width * 600;
        const svgY = relativeY / rect.height * 640;
        // Базовая точка крепления ручки: x = 300, y = 106
        let dx = svgX - 300;
        let dy = svgY - 106;
        // Ограничиваем диапазон перемещения ручки
        dx = Math.max(-45, Math.min(45, dx));
        dy = Math.max(-45, Math.min(10, dy));
        setHandlePos({
            x: dx,
            y: dy
        });
    };
    // Вычисляем процент напора воды в зависимости от высоты ручки (Y)
    const flowPercent = Math.max(0, (10 - handlePos.y) / 55);
    // Цвета воды в зависимости от положения ручки по оси X
    let waterColor = '#bae6fd';
    let knobColor = '#cbd5e1';
    if (handlePos.x < -10) {
        waterColor = '#fecaca';
        knobColor = '#d09292';
    } else if (handlePos.x > 10) {
        waterColor = '#93c5fd';
        knobColor = '#3b92fc';
    }
    // Напор считается открытым, если ручка поднята хотя бы на 2%
    const isFlowing = !blocked && spotsLeft === 0 && aeratorRemoved && flowPercent > 0.02;
    // Динамические размеры струи в зависимости от напора
    const outerStrokeWidth = 3 + flowPercent * flowPercent * 26;
    // Укорачиваем струю только если флакон открыт и стоит под краном (вода набирается внутрь).
    // Когда флакон закрыт (крышка и пробка надеты) — вода льётся вокруг него и стекает в раковину.
    const waterEndY = bottleUnderSpout ? 355 : 474;
    // Инициализация аудио-объектов при монтировании компонента в браузере
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        lowAudioRef.current = new Audio('/audio/water_low.mp3');
        medAudioRef.current = new Audio('/audio/water_med.mp3');
        highAudioRef.current = new Audio('/audio/water_high.mp3');
        // Настраиваем бесконечный цикл воспроизведения
        lowAudioRef.current.loop = true;
        medAudioRef.current.loop = true;
        highAudioRef.current.loop = true;
        // Очистка памяти при размонтировании (уходе со страницы)
        return ()=>{
            lowAudioRef.current?.pause();
            medAudioRef.current?.pause();
            highAudioRef.current?.pause();
        };
    }, []);
    // Управление громкостью и запуском/остановкой треков на основе напора
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        const low = lowAudioRef.current;
        const med = medAudioRef.current;
        const high = highAudioRef.current;
        if (!low || !med || !high) return;
        if (!isFlowing) {
            // Если вода перекрыта, останавливаем все аудио
            low.pause();
            med.pause();
            high.pause();
        } else {
            // Если вода пошла, запускаем воспроизведение (если еще не играет)
            if (low.paused) low.play().catch(()=>{});
            if (med.paused) med.play().catch(()=>{});
            if (high.paused) high.play().catch(()=>{});
            // Кроссфейд-интерполяция громкости (от 0.0 до 1.0)
            const volLow = Math.max(0, 1 - flowPercent * 2);
            const volMed = Math.max(0, 1 - Math.abs(flowPercent - 0.5) * 2);
            const volHigh = Math.max(0, (flowPercent - 0.5) * 2);
            // Применяем громкость к объектам
            low.volume = volLow;
            med.volume = volMed;
            high.volume = volHigh;
        }
        // Всегда сообщаем актуальный напор родителю (в т.ч. 0 при закрытом кране)
        if (onFlowChange) {
            onFlowChange(isFlowing ? flowPercent : 0);
        }
    }, [
        isFlowing,
        flowPercent,
        onFlowChange
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (blocked) {
            setHandlePos({
                x: 0,
                y: 10
            }); // Принудительно выключаем воду при блокировке
        }
    }, [
        blocked
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ref: svgRef,
        viewBox: "0 0 600 640",
        xmlns: "http://www.w3.org/2000/svg",
        className: "w-full max-w-sm mx-auto select-none outline-none",
        style: {
            filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.15))'
        },
        onMouseMove: handleMouseMove,
        onMouseUp: handleMouseUp,
        onMouseLeave: handleMouseUp,
        onTouchMove: handleMouseMove,
        onTouchEnd: handleMouseUp,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "fc_sink",
                        x1: "0",
                        y1: "0",
                        x2: "0",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "#e2e8f0"
                            }, void 0, false, {
                                fileName: "[project]/components/FaucetSVG.jsx",
                                lineNumber: 168,
                                columnNumber: 68
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "#b0bec5"
                            }, void 0, false, {
                                fileName: "[project]/components/FaucetSVG.jsx",
                                lineNumber: 168,
                                columnNumber: 107
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FaucetSVG.jsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "fc_chrome",
                        x1: "0",
                        y1: "0",
                        x2: "1",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "#f1f5f9"
                            }, void 0, false, {
                                fileName: "[project]/components/FaucetSVG.jsx",
                                lineNumber: 169,
                                columnNumber: 68
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "35%",
                                stopColor: "#e2e8f0"
                            }, void 0, false, {
                                fileName: "[project]/components/FaucetSVG.jsx",
                                lineNumber: 169,
                                columnNumber: 107
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "65%",
                                stopColor: "#94a3b8"
                            }, void 0, false, {
                                fileName: "[project]/components/FaucetSVG.jsx",
                                lineNumber: 169,
                                columnNumber: 147
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "#64748b"
                            }, void 0, false, {
                                fileName: "[project]/components/FaucetSVG.jsx",
                                lineNumber: 169,
                                columnNumber: 187
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FaucetSVG.jsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "fc_side",
                        x1: "0",
                        y1: "0",
                        x2: "1",
                        y2: "0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "#f8fafc"
                            }, void 0, false, {
                                fileName: "[project]/components/FaucetSVG.jsx",
                                lineNumber: 170,
                                columnNumber: 68
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "40%",
                                stopColor: "#cbd5e1"
                            }, void 0, false, {
                                fileName: "[project]/components/FaucetSVG.jsx",
                                lineNumber: 170,
                                columnNumber: 107
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "#475569"
                            }, void 0, false, {
                                fileName: "[project]/components/FaucetSVG.jsx",
                                lineNumber: 170,
                                columnNumber: 147
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FaucetSVG.jsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "fc_rust",
                        x1: "0",
                        y1: "0",
                        x2: "1",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "#92400e"
                            }, void 0, false, {
                                fileName: "[project]/components/FaucetSVG.jsx",
                                lineNumber: 171,
                                columnNumber: 68
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "#78350f"
                            }, void 0, false, {
                                fileName: "[project]/components/FaucetSVG.jsx",
                                lineNumber: 171,
                                columnNumber: 107
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FaucetSVG.jsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                        id: "fc_aerator",
                        cx: "50%",
                        cy: "35%",
                        r: "65%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "#94a3b8"
                            }, void 0, false, {
                                fileName: "[project]/components/FaucetSVG.jsx",
                                lineNumber: 172,
                                columnNumber: 67
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "#1e293b"
                            }, void 0, false, {
                                fileName: "[project]/components/FaucetSVG.jsx",
                                lineNumber: 172,
                                columnNumber: 106
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FaucetSVG.jsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                        id: "fc_wipe",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                stdDeviation: "8",
                                result: "b"
                            }, void 0, false, {
                                fileName: "[project]/components/FaucetSVG.jsx",
                                lineNumber: 173,
                                columnNumber: 30
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                        in: "b"
                                    }, void 0, false, {
                                        fileName: "[project]/components/FaucetSVG.jsx",
                                        lineNumber: 173,
                                        columnNumber: 84
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                        in: "SourceGraphic"
                                    }, void 0, false, {
                                        fileName: "[project]/components/FaucetSVG.jsx",
                                        lineNumber: 173,
                                        columnNumber: 105
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/FaucetSVG.jsx",
                                lineNumber: 173,
                                columnNumber: 75
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FaucetSVG.jsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                        id: "fc_lbl",
                        x: "-20%",
                        y: "-40%",
                        width: "140%",
                        height: "180%",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feDropShadow", {
                            dx: "0",
                            dy: "1",
                            stdDeviation: "3",
                            floodColor: "#000",
                            floodOpacity: "0.5"
                        }, void 0, false, {
                            fileName: "[project]/components/FaucetSVG.jsx",
                            lineNumber: 174,
                            columnNumber: 74
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/FaucetSVG.jsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/FaucetSVG.jsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M30 485 Q30 620 120 620 L480 620 Q570 620 570 485 L570 475 L30 475 Z",
                fill: "url(#fc_sink)",
                stroke: "#94a3b8",
                strokeWidth: "2.5"
            }, void 0, false, {
                fileName: "[project]/components/FaucetSVG.jsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M30 475 L570 475",
                stroke: "#f1f5f9",
                strokeWidth: "3",
                opacity: "0.6"
            }, void 0, false, {
                fileName: "[project]/components/FaucetSVG.jsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "300",
                cy: "480",
                rx: "260",
                ry: "10",
                fill: "#94a3b8",
                opacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/components/FaucetSVG.jsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "300",
                cy: "600",
                rx: "30",
                ry: "10",
                fill: "#94a3b8",
                stroke: "#64748b",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/components/FaucetSVG.jsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "282",
                y1: "600",
                x2: "318",
                y2: "600",
                stroke: "#64748b",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/components/FaucetSVG.jsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "300",
                y1: "590",
                x2: "300",
                y2: "610",
                stroke: "#64748b",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/components/FaucetSVG.jsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "260",
                y: "28",
                width: "80",
                height: "62",
                rx: "10",
                fill: "url(#fc_chrome)",
                stroke: "#94a3b8",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/components/FaucetSVG.jsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "272",
                y: "34",
                width: "10",
                height: "50",
                rx: "3",
                fill: "white",
                opacity: "0.4"
            }, void 0, false, {
                fileName: "[project]/components/FaucetSVG.jsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "265",
                y: "88",
                width: "70",
                height: "150",
                rx: "6",
                fill: "url(#fc_side)",
                stroke: "#94a3b8",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/components/FaucetSVG.jsx",
                lineNumber: 190,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "275",
                y: "88",
                width: "12",
                height: "150",
                rx: "4",
                fill: "white",
                opacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/components/FaucetSVG.jsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            (()=>{
                const cx = 300 + handlePos.x;
                const cy = 106 + handlePos.y;
                const w = 15; // Полуширина плиты ручки
                const h = 5; // Полувысота плиты ручки
                const thickness = 4; // Единая толщина
                const scale_L = 1 + handlePos.x / 45 * 0.12 - handlePos.y / 45 * 0.12;
                const scale_R = 1 - handlePos.x / 45 * 0.12 + handlePos.y / 45 * 0.12;
                const scale_B = 1 + handlePos.x / 45 * 0.12 - handlePos.y / 45 * 0.12;
                const scale_T = 1 - handlePos.x / 45 * 0.12 + handlePos.y / 45 * 0.12;
                const tlX = cx - w * scale_L;
                const tlY = cy - h * scale_T * scale_L;
                const trX = cx + w * scale_R;
                const trY = cy - h * scale_T * scale_R;
                const brX = cx + w * scale_R;
                const brY = cy + h * scale_B * scale_R;
                const blX = cx - w * scale_L;
                const blY = cy + h * scale_B * scale_L;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "274",
                            y: "100",
                            width: "52",
                            height: "12",
                            rx: "3",
                            fill: "#334155",
                            stroke: "#1e293b",
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/components/FaucetSVG.jsx",
                            lineNumber: 221,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "274",
                            y: "97",
                            width: "52",
                            height: "14",
                            rx: "3",
                            fill: "url(#fc_side)",
                            stroke: "#64748b",
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/components/FaucetSVG.jsx",
                            lineNumber: 231,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            points: `312,100 288,100 ${cx - 12},${cy} ${cx - 12},${cy + thickness} ${cx + 12},${cy + thickness} 312,110`,
                            fill: "#4f5c6e",
                            stroke: "#1e293b",
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/components/FaucetSVG.jsx",
                            lineNumber: 243,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            points: `288,100 312,100 ${cx + 12},${cy} ${cx + 12},${cy + thickness} ${cx - 12},${cy + thickness} 288,110`,
                            fill: "#4f5c6e",
                            stroke: "#1e293b",
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/components/FaucetSVG.jsx",
                            lineNumber: 249,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            points: `288,100 312,100 ${cx + 12},${cy} ${cx - 12},${cy}`,
                            fill: "url(#fc_chrome)",
                            stroke: "#64748b",
                            strokeWidth: "1.2"
                        }, void 0, false, {
                            fileName: "[project]/components/FaucetSVG.jsx",
                            lineNumber: 257,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            points: `288,110 312,110 ${cx + 12},${cy} ${cx - 12},${cy}`,
                            fill: "#334155",
                            stroke: "#0f1113",
                            strokeWidth: "1.2"
                        }, void 0, false, {
                            fileName: "[project]/components/FaucetSVG.jsx",
                            lineNumber: 263,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            points: `${tlX},${tlY} ${trX},${trY} ${brX},${brY} ${blX},${blY}`,
                            fill: knobColor,
                            stroke: "#1e293b",
                            strokeWidth: "2.5",
                            style: {
                                cursor: isDragging ? 'grabbing' : 'grab'
                            },
                            onMouseDown: handleMouseDown,
                            onTouchStart: handleMouseDown
                        }, void 0, false, {
                            fileName: "[project]/components/FaucetSVG.jsx",
                            lineNumber: 271,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/FaucetSVG.jsx",
                    lineNumber: 220,
                    columnNumber: 11
                }, this);
            })(),
            isDragging && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                style: {
                    pointerEvents: 'none'
                },
                opacity: "0.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: 300 + handlePos.x - 26,
                        y: 106 + handlePos.y - 42,
                        width: "76",
                        height: "36",
                        rx: "10",
                        fill: "#1e293b",
                        stroke: "#475569",
                        strokeWidth: "1"
                    }, void 0, false, {
                        fileName: "[project]/components/FaucetSVG.jsx",
                        lineNumber: 287,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                        points: `
              ${300 + handlePos.x - 4},${106 + handlePos.y - 22} 
              ${300 + handlePos.x + 4},${106 + handlePos.y - 22} 
              ${300 + handlePos.x},${106 + handlePos.y - 18}
            `,
                        fill: "#1e293b"
                    }, void 0, false, {
                        fileName: "[project]/components/FaucetSVG.jsx",
                        lineNumber: 297,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: 314 + handlePos.x,
                        y: 118 + handlePos.y - 28,
                        textAnchor: "middle",
                        fill: "#ffffff",
                        fontSize: "24",
                        fontWeight: "black",
                        fontFamily: "monospace",
                        children: [
                            Math.round(flowPercent * 100),
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FaucetSVG.jsx",
                        lineNumber: 305,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/FaucetSVG.jsx",
                lineNumber: 286,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M335 158 Q440 158 440 258 L440 280",
                stroke: "#64748b",
                strokeWidth: "46",
                fill: "none",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/components/FaucetSVG.jsx",
                lineNumber: 320,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M335 158 Q440 158 440 258 L440 280",
                stroke: "url(#fc_side)",
                strokeWidth: "40",
                fill: "none",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/components/FaucetSVG.jsx",
                lineNumber: 321,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M335 158 Q440 158 440 258 L440 280",
                stroke: "url(#fc_chrome)",
                strokeWidth: "32",
                fill: "none",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/components/FaucetSVG.jsx",
                lineNumber: 322,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M333 153 Q436 153 436 258 L436 280",
                stroke: "white",
                strokeWidth: "8",
                fill: "none",
                strokeLinecap: "round",
                opacity: "0.25"
            }, void 0, false, {
                fileName: "[project]/components/FaucetSVG.jsx",
                lineNumber: 323,
                columnNumber: 7
            }, this),
            isWiping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "440",
                cy: "320",
                rx: "28",
                ry: "50",
                fill: "#fef3c7",
                opacity: "0.6",
                filter: "url(#fc_wipe)"
            }, void 0, false, {
                fileName: "[project]/components/FaucetSVG.jsx",
                lineNumber: 325,
                columnNumber: 20
            }, this),
            !aeratorRemoved ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                onClick: onRemoveAerator,
                className: "cursor-pointer",
                style: {
                    filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.4))'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "440",
                        cy: "295",
                        rx: "22",
                        ry: "13",
                        fill: "url(#fc_aerator)",
                        stroke: "#475569",
                        strokeWidth: "2.5"
                    }, void 0, false, {
                        fileName: "[project]/components/FaucetSVG.jsx",
                        lineNumber: 329,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "440",
                        cy: "291",
                        rx: "17",
                        ry: "9",
                        fill: "#64748b",
                        opacity: "0.45"
                    }, void 0, false, {
                        fileName: "[project]/components/FaucetSVG.jsx",
                        lineNumber: 330,
                        columnNumber: 11
                    }, this),
                    [
                        0,
                        1,
                        2,
                        3,
                        4
                    ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: 424 + c * 5,
                            y1: "285",
                            x2: 424 + c * 5,
                            y2: "303",
                            stroke: "#94a3b8",
                            strokeWidth: "1",
                            opacity: "0.55"
                        }, c, false, {
                            fileName: "[project]/components/FaucetSVG.jsx",
                            lineNumber: 331,
                            columnNumber: 31
                        }, this)),
                    [
                        0,
                        1,
                        2
                    ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "421",
                            y1: 287 + r * 5,
                            x2: "459",
                            y2: 287 + r * 5,
                            stroke: "#94a3b8",
                            strokeWidth: "1",
                            opacity: "0.55"
                        }, r, false, {
                            fileName: "[project]/components/FaucetSVG.jsx",
                            lineNumber: 332,
                            columnNumber: 27
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "440",
                        cy: "295",
                        rx: "22",
                        ry: "13",
                        fill: "none",
                        stroke: "#e2e8f0",
                        strokeWidth: "1",
                        opacity: "0.3"
                    }, void 0, false, {
                        fileName: "[project]/components/FaucetSVG.jsx",
                        lineNumber: 333,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "310",
                        y: "282",
                        width: "108",
                        height: "28",
                        rx: "14",
                        fill: "#f59e0b",
                        filter: "url(#fc_lbl)"
                    }, void 0, false, {
                        fileName: "[project]/components/FaucetSVG.jsx",
                        lineNumber: 334,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "364",
                        y: "301",
                        textAnchor: "middle",
                        fontSize: "14",
                        fill: "white",
                        fontWeight: "bold",
                        children: "нажми ⚙️"
                    }, void 0, false, {
                        fileName: "[project]/components/FaucetSVG.jsx",
                        lineNumber: 335,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M418 296 L408 291 L408 301 Z",
                        fill: "#f59e0b",
                        opacity: "0.9"
                    }, void 0, false, {
                        fileName: "[project]/components/FaucetSVG.jsx",
                        lineNumber: 336,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/FaucetSVG.jsx",
                lineNumber: 328,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "440",
                        cy: "290",
                        rx: "22",
                        ry: "12",
                        fill: "#1e293b",
                        stroke: "#475569",
                        strokeWidth: "2"
                    }, void 0, false, {
                        fileName: "[project]/components/FaucetSVG.jsx",
                        lineNumber: 340,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "440",
                        cy: "290",
                        rx: "16",
                        ry: "7",
                        fill: "#0f172a",
                        opacity: "0.9"
                    }, void 0, false, {
                        fileName: "[project]/components/FaucetSVG.jsx",
                        lineNumber: 341,
                        columnNumber: 11
                    }, this),
                    showAeratorRemovedBadge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "355",
                                y: "350",
                                width: "72",
                                height: "24",
                                rx: "12",
                                fill: "#dcfce7",
                                stroke: "#86efac",
                                strokeWidth: "1.5"
                            }, void 0, false, {
                                fileName: "[project]/components/FaucetSVG.jsx",
                                lineNumber: 344,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "391",
                                y: "366",
                                textAnchor: "middle",
                                fontSize: "12",
                                fill: "#166534",
                                fontWeight: "bold",
                                children: "Снят ✓"
                            }, void 0, false, {
                                fileName: "[project]/components/FaucetSVG.jsx",
                                lineNumber: 345,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    showAeratorRemovedBadge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                cx: "160",
                                cy: "580",
                                rx: "20",
                                ry: "11",
                                fill: "#64748b",
                                stroke: "#475569",
                                strokeWidth: "2",
                                opacity: "0.85"
                            }, void 0, false, {
                                fileName: "[project]/components/FaucetSVG.jsx",
                                lineNumber: 352,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "160",
                                y: "600",
                                textAnchor: "middle",
                                fontSize: "10",
                                fill: "#94a3b8",
                                fontWeight: "600",
                                children: "аэратор"
                            }, void 0, false, {
                                fileName: "[project]/components/FaucetSVG.jsx",
                                lineNumber: 353,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/components/FaucetSVG.jsx",
                lineNumber: 339,
                columnNumber: 9
            }, this),
            spots.map((spot)=>{
                if (spot.id >= spotsLeft) return null;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: spot.cx,
                            cy: spot.cy,
                            r: spot.r + 5,
                            fill: "url(#fc_rust)",
                            opacity: "0.12"
                        }, void 0, false, {
                            fileName: "[project]/components/FaucetSVG.jsx",
                            lineNumber: 363,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: spot.cx,
                            cy: spot.cy,
                            r: spot.r,
                            fill: "url(#fc_rust)",
                            opacity: "0.9",
                            className: canInteract && !isWiping ? 'cursor-pointer' : 'cursor-default',
                            onClick: ()=>canInteract && onWipeSpot(spot.id)
                        }, void 0, false, {
                            fileName: "[project]/components/FaucetSVG.jsx",
                            lineNumber: 364,
                            columnNumber: 13
                        }, this),
                        canInteract && !isWiping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: spot.cx,
                            cy: spot.cy,
                            r: spot.r + 9,
                            fill: "transparent",
                            stroke: "#f59e0b",
                            strokeWidth: "2",
                            strokeDasharray: "4,3",
                            opacity: "0.8",
                            className: "cursor-pointer",
                            onClick: ()=>canInteract && onWipeSpot(spot.id),
                            style: {
                                transformOrigin: `${spot.cx}px ${spot.cy}px`,
                                animation: 'fc_spin 3s linear infinite'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/FaucetSVG.jsx",
                            lineNumber: 368,
                            columnNumber: 15
                        }, this)
                    ]
                }, spot.id, true, {
                    fileName: "[project]/components/FaucetSVG.jsx",
                    lineNumber: 362,
                    columnNumber: 11
                }, this);
            }),
            isFlowing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: `M 440,290 L 440,${waterEndY}`,
                        stroke: waterColor,
                        strokeWidth: outerStrokeWidth,
                        strokeLinecap: "butt",
                        opacity: "0.6"
                    }, void 0, false, {
                        fileName: "[project]/components/FaucetSVG.jsx",
                        lineNumber: 382,
                        columnNumber: 11
                    }, this),
                    flowPercent > 0.70 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        style: {
                            pointerEvents: 'none'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "435",
                                cy: "300",
                                r: "3",
                                fill: "#ffffff",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                                        attributeName: "cy",
                                        from: "300",
                                        to: waterEndY - 8,
                                        dur: "0.7s",
                                        repeatCount: "indefinite"
                                    }, void 0, false, {
                                        fileName: "[project]/components/FaucetSVG.jsx",
                                        lineNumber: 394,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                                        attributeName: "opacity",
                                        values: "0; 0.9; 0.9; 0",
                                        dur: "0.7s",
                                        repeatCount: "indefinite"
                                    }, void 0, false, {
                                        fileName: "[project]/components/FaucetSVG.jsx",
                                        lineNumber: 395,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/FaucetSVG.jsx",
                                lineNumber: 393,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "445",
                                cy: "300",
                                r: "4.5",
                                fill: "#ffffff",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                                        attributeName: "cy",
                                        from: "300",
                                        to: waterEndY - 8,
                                        dur: "0.7s",
                                        begin: "0.15s",
                                        repeatCount: "indefinite"
                                    }, void 0, false, {
                                        fileName: "[project]/components/FaucetSVG.jsx",
                                        lineNumber: 399,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                                        attributeName: "opacity",
                                        values: "0; 0.9; 0.9; 0",
                                        dur: "0.7s",
                                        begin: "0.15s",
                                        repeatCount: "indefinite"
                                    }, void 0, false, {
                                        fileName: "[project]/components/FaucetSVG.jsx",
                                        lineNumber: 400,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/FaucetSVG.jsx",
                                lineNumber: 398,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "438",
                                cy: "300",
                                r: "2.5",
                                fill: "#ffffff",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                                        attributeName: "cy",
                                        from: "300",
                                        to: waterEndY - 8,
                                        dur: "0.7s",
                                        begin: "0.3s",
                                        repeatCount: "indefinite"
                                    }, void 0, false, {
                                        fileName: "[project]/components/FaucetSVG.jsx",
                                        lineNumber: 404,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                                        attributeName: "opacity",
                                        values: "0; 0.9; 0.9; 0",
                                        dur: "0.7s",
                                        begin: "0.3s",
                                        repeatCount: "indefinite"
                                    }, void 0, false, {
                                        fileName: "[project]/components/FaucetSVG.jsx",
                                        lineNumber: 405,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/FaucetSVG.jsx",
                                lineNumber: 403,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "442",
                                cy: "300",
                                r: "3.5",
                                fill: "#ffffff",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                                        attributeName: "cy",
                                        from: "300",
                                        to: waterEndY - 8,
                                        dur: "0.7s",
                                        begin: "0.45s",
                                        repeatCount: "indefinite"
                                    }, void 0, false, {
                                        fileName: "[project]/components/FaucetSVG.jsx",
                                        lineNumber: 409,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                                        attributeName: "opacity",
                                        values: "0; 0.9; 0.9; 0",
                                        dur: "0.7s",
                                        begin: "0.45s",
                                        repeatCount: "indefinite"
                                    }, void 0, false, {
                                        fileName: "[project]/components/FaucetSVG.jsx",
                                        lineNumber: 410,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/FaucetSVG.jsx",
                                lineNumber: 408,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "434",
                                cy: "300",
                                r: "3",
                                fill: "#ffffff",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                                        attributeName: "cy",
                                        from: "300",
                                        to: waterEndY - 8,
                                        dur: "0.7s",
                                        begin: "0.6s",
                                        repeatCount: "indefinite"
                                    }, void 0, false, {
                                        fileName: "[project]/components/FaucetSVG.jsx",
                                        lineNumber: 414,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                                        attributeName: "opacity",
                                        values: "0; 0.9; 0.9; 0",
                                        dur: "0.7s",
                                        begin: "0.6s",
                                        repeatCount: "indefinite"
                                    }, void 0, false, {
                                        fileName: "[project]/components/FaucetSVG.jsx",
                                        lineNumber: 415,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/FaucetSVG.jsx",
                                lineNumber: 413,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FaucetSVG.jsx",
                        lineNumber: 392,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: `M 440,290 L 440,${waterEndY}`,
                        stroke: waterColor,
                        strokeWidth: outerStrokeWidth * 0.4,
                        strokeLinecap: "butt",
                        opacity: "0.4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("animateTransform", {
                            attributeName: "transform",
                            type: "translate",
                            values: "-3,0; 3,0; -3,0",
                            dur: "0.7s",
                            repeatCount: "indefinite"
                        }, void 0, false, {
                            fileName: "[project]/components/FaucetSVG.jsx",
                            lineNumber: 422,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/FaucetSVG.jsx",
                        lineNumber: 421,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: `M 440,290 L 440,${waterEndY}`,
                        stroke: waterColor,
                        strokeWidth: outerStrokeWidth * 0.4,
                        strokeLinecap: "butt",
                        opacity: "0.4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("animateTransform", {
                            attributeName: "transform",
                            type: "translate",
                            values: "3,0; -3,0; 3,0",
                            dur: "1.0s",
                            repeatCount: "indefinite"
                        }, void 0, false, {
                            fileName: "[project]/components/FaucetSVG.jsx",
                            lineNumber: 426,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/FaucetSVG.jsx",
                        lineNumber: 425,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: `M 440,290 L 440,${waterEndY}`,
                        stroke: waterColor,
                        strokeWidth: outerStrokeWidth * 0.4,
                        strokeLinecap: "butt",
                        opacity: "0.4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("animateTransform", {
                            attributeName: "transform",
                            type: "translate",
                            values: "-3,0; 3,0; -3,0",
                            dur: "1.3s",
                            repeatCount: "indefinite"
                        }, void 0, false, {
                            fileName: "[project]/components/FaucetSVG.jsx",
                            lineNumber: 430,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/FaucetSVG.jsx",
                        lineNumber: 429,
                        columnNumber: 11
                    }, this),
                    !bottleUnderSpout && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 440,362 L 440,474",
                        stroke: waterColor,
                        strokeWidth: outerStrokeWidth * 0.4,
                        strokeLinecap: "butt",
                        opacity: "0.4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("animateTransform", {
                            attributeName: "transform",
                            type: "translate",
                            values: "-3,0; 3,0; -3,0",
                            dur: "2s",
                            repeatCount: "indefinite"
                        }, void 0, false, {
                            fileName: "[project]/components/FaucetSVG.jsx",
                            lineNumber: 435,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/FaucetSVG.jsx",
                        lineNumber: 434,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/FaucetSVG.jsx",
                lineNumber: 380,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/FaucetSVG.jsx",
        lineNumber: 155,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/inventory/Avatar.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Avatar",
    ()=>Avatar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// components/inventory/Avatar.jsx
'use client';
;
;
function Avatar({ gogglesOn, glovesType }) {
    const gloveColor = glovesType === 'sterile' ? '#e2e8f0' : glovesType === 'yellow' ? '#fbbf24' : null;
    const gloveBorder = glovesType === 'sterile' ? '#94a3b8' : '#d97706';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 120 220",
        xmlns: "http://www.w3.org/2000/svg",
        className: "w-full h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "av_skin",
                        x1: "0",
                        y1: "0",
                        x2: "0",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "#fcd9b6"
                            }, void 0, false, {
                                fileName: "[project]/components/inventory/Avatar.jsx",
                                lineNumber: 12,
                                columnNumber: 66
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "#f5b88a"
                            }, void 0, false, {
                                fileName: "[project]/components/inventory/Avatar.jsx",
                                lineNumber: 12,
                                columnNumber: 105
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/inventory/Avatar.jsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "av_coat",
                        x1: "0",
                        y1: "0",
                        x2: "0",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "#f8fafc"
                            }, void 0, false, {
                                fileName: "[project]/components/inventory/Avatar.jsx",
                                lineNumber: 13,
                                columnNumber: 66
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "#e2e8f0"
                            }, void 0, false, {
                                fileName: "[project]/components/inventory/Avatar.jsx",
                                lineNumber: 13,
                                columnNumber: 105
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/inventory/Avatar.jsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "av_hair",
                        x1: "0",
                        y1: "0",
                        x2: "0",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "#92400e"
                            }, void 0, false, {
                                fileName: "[project]/components/inventory/Avatar.jsx",
                                lineNumber: 14,
                                columnNumber: 66
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "#78350f"
                            }, void 0, false, {
                                fileName: "[project]/components/inventory/Avatar.jsx",
                                lineNumber: 14,
                                columnNumber: 105
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/inventory/Avatar.jsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/inventory/Avatar.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "22",
                y: "90",
                width: "76",
                height: "90",
                rx: "8",
                fill: "url(#av_coat)",
                stroke: "#cbd5e1",
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/components/inventory/Avatar.jsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M60 90 L45 110 L60 105 Z",
                fill: "#e2e8f0",
                stroke: "#cbd5e1",
                strokeWidth: "1"
            }, void 0, false, {
                fileName: "[project]/components/inventory/Avatar.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M60 90 L75 110 L60 105 Z",
                fill: "#e2e8f0",
                stroke: "#cbd5e1",
                strokeWidth: "1"
            }, void 0, false, {
                fileName: "[project]/components/inventory/Avatar.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "60",
                cy: "118",
                r: "2.5",
                fill: "#94a3b8"
            }, void 0, false, {
                fileName: "[project]/components/inventory/Avatar.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "60",
                cy: "130",
                r: "2.5",
                fill: "#94a3b8"
            }, void 0, false, {
                fileName: "[project]/components/inventory/Avatar.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "60",
                cy: "142",
                r: "2.5",
                fill: "#94a3b8"
            }, void 0, false, {
                fileName: "[project]/components/inventory/Avatar.jsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "30",
                y: "110",
                width: "18",
                height: "14",
                rx: "3",
                fill: "none",
                stroke: "#cbd5e1",
                strokeWidth: "1.2"
            }, void 0, false, {
                fileName: "[project]/components/inventory/Avatar.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "4",
                y: "92",
                width: "20",
                height: "60",
                rx: "8",
                fill: "url(#av_coat)",
                stroke: "#cbd5e1",
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/components/inventory/Avatar.jsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "96",
                y: "92",
                width: "20",
                height: "60",
                rx: "8",
                fill: "url(#av_coat)",
                stroke: "#cbd5e1",
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/components/inventory/Avatar.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            gloveColor ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "14",
                        cy: "158",
                        rx: "10",
                        ry: "12",
                        fill: gloveColor,
                        stroke: gloveBorder,
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/components/inventory/Avatar.jsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this),
                    [
                        0,
                        1,
                        2,
                        3
                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: 7 + i * 3.5,
                            y: 152,
                            width: "2.5",
                            height: "8",
                            rx: "1.2",
                            fill: glovesType === 'sterile' ? '#f1f5f9' : '#fcd34d',
                            opacity: "0.7"
                        }, i, false, {
                            fileName: "[project]/components/inventory/Avatar.jsx",
                            lineNumber: 28,
                            columnNumber: 29
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "106",
                        cy: "158",
                        rx: "10",
                        ry: "12",
                        fill: gloveColor,
                        stroke: gloveBorder,
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/components/inventory/Avatar.jsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this),
                    [
                        0,
                        1,
                        2,
                        3
                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: 99 + i * 3.5,
                            y: 152,
                            width: "2.5",
                            height: "8",
                            rx: "1.2",
                            fill: glovesType === 'sterile' ? '#f1f5f9' : '#fcd34d',
                            opacity: "0.7"
                        }, i, false, {
                            fileName: "[project]/components/inventory/Avatar.jsx",
                            lineNumber: 30,
                            columnNumber: 29
                        }, this))
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "14",
                        cy: "157",
                        rx: "9",
                        ry: "11",
                        fill: "url(#av_skin)",
                        stroke: "#f5b88a",
                        strokeWidth: "1"
                    }, void 0, false, {
                        fileName: "[project]/components/inventory/Avatar.jsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "106",
                        cy: "157",
                        rx: "9",
                        ry: "11",
                        fill: "url(#av_skin)",
                        stroke: "#f5b88a",
                        strokeWidth: "1"
                    }, void 0, false, {
                        fileName: "[project]/components/inventory/Avatar.jsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "30",
                y: "178",
                width: "24",
                height: "38",
                rx: "5",
                fill: "#1e3a5f",
                stroke: "#1e40af",
                strokeWidth: "1"
            }, void 0, false, {
                fileName: "[project]/components/inventory/Avatar.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "66",
                y: "178",
                width: "24",
                height: "38",
                rx: "5",
                fill: "#1e3a5f",
                stroke: "#1e40af",
                strokeWidth: "1"
            }, void 0, false, {
                fileName: "[project]/components/inventory/Avatar.jsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "42",
                cy: "216",
                rx: "14",
                ry: "6",
                fill: "#1e293b"
            }, void 0, false, {
                fileName: "[project]/components/inventory/Avatar.jsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "78",
                cy: "216",
                rx: "14",
                ry: "6",
                fill: "#1e293b"
            }, void 0, false, {
                fileName: "[project]/components/inventory/Avatar.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "52",
                y: "78",
                width: "16",
                height: "16",
                rx: "4",
                fill: "url(#av_skin)"
            }, void 0, false, {
                fileName: "[project]/components/inventory/Avatar.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "60",
                cy: "60",
                rx: "26",
                ry: "28",
                fill: "url(#av_skin)",
                stroke: "#f5b88a",
                strokeWidth: "1"
            }, void 0, false, {
                fileName: "[project]/components/inventory/Avatar.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M34 52 Q36 28 60 26 Q84 28 86 52 Q80 38 60 36 Q40 38 34 52 Z",
                fill: "url(#av_hair)"
            }, void 0, false, {
                fileName: "[project]/components/inventory/Avatar.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "50",
                cy: "58",
                rx: "5",
                ry: "5.5",
                fill: "white",
                stroke: "#cbd5e1",
                strokeWidth: "0.5"
            }, void 0, false, {
                fileName: "[project]/components/inventory/Avatar.jsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "70",
                cy: "58",
                rx: "5",
                ry: "5.5",
                fill: "white",
                stroke: "#cbd5e1",
                strokeWidth: "0.5"
            }, void 0, false, {
                fileName: "[project]/components/inventory/Avatar.jsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "51",
                cy: "59",
                r: "3",
                fill: "#1e293b"
            }, void 0, false, {
                fileName: "[project]/components/inventory/Avatar.jsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "71",
                cy: "59",
                r: "3",
                fill: "#1e293b"
            }, void 0, false, {
                fileName: "[project]/components/inventory/Avatar.jsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "52.2",
                cy: "57.5",
                r: "1",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/components/inventory/Avatar.jsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "72.2",
                cy: "57.5",
                r: "1",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/components/inventory/Avatar.jsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "60",
                cy: "66",
                rx: "3",
                ry: "2",
                fill: "url(#av_skin)",
                stroke: "#e8a070",
                strokeWidth: "0.5"
            }, void 0, false, {
                fileName: "[project]/components/inventory/Avatar.jsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M53 72 Q60 77 67 72",
                stroke: "#c07850",
                strokeWidth: "1.5",
                fill: "none",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/components/inventory/Avatar.jsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "34",
                cy: "60",
                rx: "5",
                ry: "7",
                fill: "url(#av_skin)",
                stroke: "#f5b88a",
                strokeWidth: "0.8"
            }, void 0, false, {
                fileName: "[project]/components/inventory/Avatar.jsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "86",
                cy: "60",
                rx: "5",
                ry: "7",
                fill: "url(#av_skin)",
                stroke: "#f5b88a",
                strokeWidth: "0.8"
            }, void 0, false, {
                fileName: "[project]/components/inventory/Avatar.jsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            gogglesOn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "32",
                        y: "55",
                        width: "56",
                        height: "12",
                        rx: "6",
                        fill: "#1e3a5f",
                        opacity: "0.2"
                    }, void 0, false, {
                        fileName: "[project]/components/inventory/Avatar.jsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "36",
                        y: "53",
                        width: "20",
                        height: "14",
                        rx: "5",
                        fill: "#bfdbfe",
                        stroke: "#3b82f6",
                        strokeWidth: "1.8",
                        opacity: "0.85"
                    }, void 0, false, {
                        fileName: "[project]/components/inventory/Avatar.jsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "38",
                        y: "55",
                        width: "6",
                        height: "5",
                        rx: "2",
                        fill: "white",
                        opacity: "0.4"
                    }, void 0, false, {
                        fileName: "[project]/components/inventory/Avatar.jsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "64",
                        y: "53",
                        width: "20",
                        height: "14",
                        rx: "5",
                        fill: "#bfdbfe",
                        stroke: "#3b82f6",
                        strokeWidth: "1.8",
                        opacity: "0.85"
                    }, void 0, false, {
                        fileName: "[project]/components/inventory/Avatar.jsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "66",
                        y: "55",
                        width: "6",
                        height: "5",
                        rx: "2",
                        fill: "white",
                        opacity: "0.4"
                    }, void 0, false, {
                        fileName: "[project]/components/inventory/Avatar.jsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "56",
                        y: "57",
                        width: "8",
                        height: "4",
                        rx: "2",
                        fill: "#3b82f6",
                        opacity: "0.7"
                    }, void 0, false, {
                        fileName: "[project]/components/inventory/Avatar.jsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/inventory/Avatar.jsx",
                lineNumber: 56,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/inventory/Avatar.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/inventory/InvSlot.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvSlot",
    ()=>InvSlot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/itemRegistry.js [app-ssr] (ecmascript)");
// components/inventory/InvSlot.jsx
'use client';
;
;
;
function InvSlot({ item, isSelected, isEquipSlot, onClick, onRightClick, size = 'md', slotId, isDragging, onDragStart, onDrop, onDragEnd }) {
    const [isDragOver, setIsDragOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const sz = size === 'lg' ? 'w-16 h-16 text-3xl' : size === 'sm' ? 'w-9 h-9 text-lg' : 'w-12 h-12 text-2xl';
    const def = item ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getItemDef"])(item) : null;
    const qty = item?.qty ?? 1;
    const handleContextMenu = (e)=>{
        e.preventDefault(); // подавляем системное контекстное меню браузера
        onRightClick?.(slotId);
    };
    const handleDragStart = (e)=>{
        if (!item) {
            e.preventDefault();
            return;
        }
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', String(slotId));
        onDragStart?.(slotId);
    };
    const handleDragOver = (e)=>{
        e.preventDefault(); // обязательно, иначе onDrop не сработает
        setIsDragOver(true);
    };
    const handleDragLeave = ()=>setIsDragOver(false);
    const handleDrop = (e)=>{
        e.preventDefault();
        setIsDragOver(false);
        onDrop?.(slotId, e.altKey);
    };
    const handleDragEnd = ()=>{
        setIsDragOver(false);
        onDragEnd?.();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        onContextMenu: handleContextMenu,
        draggable: !!item,
        onDragStart: handleDragStart,
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        onDrop: handleDrop,
        onDragEnd: handleDragEnd,
        className: [
            sz,
            'relative rounded-xl border-2 flex items-center justify-center transition-all duration-100 select-none',
            item ? `${def?.bg || 'bg-slate-700'} ${def?.border || 'border-slate-500'} hover:brightness-110` : isEquipSlot ? 'bg-slate-800/60 border-slate-600 hover:border-slate-400' : 'bg-slate-800/40 border-slate-700 hover:border-slate-500',
            isSelected ? 'ring-2 ring-yellow-400 ring-offset-2 ring-offset-slate-900 scale-110 shadow-lg shadow-yellow-400/20' : '',
            isDragging ? 'opacity-30' : '',
            isDragOver ? 'ring-2 ring-sky-400 ring-offset-2 ring-offset-slate-900 scale-105' : '',
            item ? 'cursor-grab active:cursor-grabbing' : ''
        ].join(' '),
        title: def ? `${def.label}${qty > 1 ? ` ×${qty}` : ''}` : '',
        children: [
            item ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["renderItemIcon"])(item, size === 'lg' ? 28 : size === 'sm' ? 16 : 20) : '',
            item && qty > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute bottom-0.5 right-0.5 text-[10px] leading-none font-black text-white px-1 py-0.5 rounded",
                style: {
                    background: 'rgba(0, 0, 0, 0.7)',
                    textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000'
                },
                children: qty
            }, void 0, false, {
                fileName: "[project]/components/inventory/InvSlot.jsx",
                lineNumber: 103,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/inventory/InvSlot.jsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/inventory/MinecraftInventory.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MinecraftInventory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/itemRegistry.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$Avatar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/Avatar.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$InvSlot$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/InvSlot.jsx [app-ssr] (ecmascript)");
// components/inventory/MinecraftInventory.jsx
'use client';
;
;
;
;
;
function MinecraftInventory({ slots, selectedSlot, draggedSlot, equippedHelmet, equippedGloves, onSlotClick, onDragStart, onDrop, onDragEnd, isOpen, onClose }) {
    if (!isOpen) return null;
    const hotbar = slots.slice(0, 9);
    const main = slots.slice(9, 36);
    const helmetItem = equippedHelmet ? {
        id: 'safety_goggles'
    } : null;
    const glovesItem = equippedGloves === 'sterile' ? {
        id: 'sterile_gloves'
    } : equippedGloves === 'yellow' ? {
        id: 'regular_gloves'
    } : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 absolute",
        style: {
            background: 'rgba(0,0,0,0.8)',
            backdropFilter: 'blur(6px)'
        },
        onClick: (e)=>{
            if (e.target === e.currentTarget) onClose?.();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl",
            style: {
                background: '#1a1f2e',
                border: '2px solid #374151'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-6 py-4 border-b border-slate-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-white font-bold text-xl",
                                    children: "🎒 Инвентарь"
                                }, void 0, false, {
                                    fileName: "[project]/components/inventory/MinecraftInventory.jsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-400 text-xs mt-0.5",
                                    children: "Клик: выделите предмет → кликните в нужный слот. Или просто перетащите его мышью."
                                }, void 0, false, {
                                    fileName: "[project]/components/inventory/MinecraftInventory.jsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/inventory/MinecraftInventory.jsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "w-8 h-8 rounded-full bg-slate-700 hover:bg-red-600 text-slate-300 hover:text-white font-bold text-lg flex items-center justify-center transition-all",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/components/inventory/MinecraftInventory.jsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/inventory/MinecraftInventory.jsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-[1fr_auto]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 space-y-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-500 text-xs font-bold uppercase tracking-widest mb-2",
                                            children: "Инвентарь"
                                        }, void 0, false, {
                                            fileName: "[project]/components/inventory/MinecraftInventory.jsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-9 gap-1.5",
                                            children: main.map((item, i)=>{
                                                const slotId = i + 9;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$InvSlot$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvSlot"], {
                                                    item: item,
                                                    slotId: slotId,
                                                    isSelected: selectedSlot === slotId,
                                                    isDragging: draggedSlot === slotId,
                                                    onClick: ()=>onSlotClick(slotId),
                                                    onDragStart: onDragStart,
                                                    onDrop: onDrop,
                                                    onDragEnd: onDragEnd
                                                }, i, false, {
                                                    fileName: "[project]/components/inventory/MinecraftInventory.jsx",
                                                    lineNumber: 81,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/components/inventory/MinecraftInventory.jsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/inventory/MinecraftInventory.jsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-500 text-xs font-bold uppercase tracking-widest mb-2",
                                            children: "Быстрый доступ"
                                        }, void 0, false, {
                                            fileName: "[project]/components/inventory/MinecraftInventory.jsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-9 gap-1.5 p-2 rounded-xl",
                                            style: {
                                                background: '#111827',
                                                border: '2px solid #374151'
                                            },
                                            children: hotbar.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$InvSlot$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvSlot"], {
                                                    item: item,
                                                    slotId: i,
                                                    isSelected: selectedSlot === i,
                                                    isDragging: draggedSlot === i,
                                                    onClick: ()=>onSlotClick(i),
                                                    onDragStart: onDragStart,
                                                    onDrop: onDrop,
                                                    onDragEnd: onDragEnd
                                                }, i, false, {
                                                    fileName: "[project]/components/inventory/MinecraftInventory.jsx",
                                                    lineNumber: 97,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/inventory/MinecraftInventory.jsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/inventory/MinecraftInventory.jsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/inventory/MinecraftInventory.jsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 border-l border-slate-700 flex flex-col items-center gap-4 min-w-[260px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-500 text-xs font-bold uppercase tracking-widest mb-1",
                                            children: "Экипировка"
                                        }, void 0, false, {
                                            fileName: "[project]/components/inventory/MinecraftInventory.jsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 p-3 rounded-xl",
                                            style: {
                                                background: '#111827',
                                                border: '1px solid #374151'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$InvSlot$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvSlot"], {
                                                    item: helmetItem,
                                                    isEquipSlot: true,
                                                    slotId: "helmet",
                                                    isSelected: selectedSlot === 'helmet',
                                                    isDragging: draggedSlot === 'helmet',
                                                    size: "lg",
                                                    onClick: ()=>onSlotClick('helmet'),
                                                    onDragStart: onDragStart,
                                                    onDrop: onDrop,
                                                    onDragEnd: onDragEnd
                                                }, void 0, false, {
                                                    fileName: "[project]/components/inventory/MinecraftInventory.jsx",
                                                    lineNumber: 116,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-slate-300 font-bold text-sm",
                                                            children: "Голова"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/inventory/MinecraftInventory.jsx",
                                                            lineNumber: 125,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-slate-500 text-xs",
                                                            children: helmetItem ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getItemDef"])(helmetItem)?.label : '—'
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/inventory/MinecraftInventory.jsx",
                                                            lineNumber: 126,
                                                            columnNumber: 19
                                                        }, this),
                                                        helmetItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-emerald-400 text-xs font-bold",
                                                            children: "✓ Надеты"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/inventory/MinecraftInventory.jsx",
                                                            lineNumber: 127,
                                                            columnNumber: 34
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/inventory/MinecraftInventory.jsx",
                                                    lineNumber: 124,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/inventory/MinecraftInventory.jsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 p-3 rounded-xl",
                                            style: {
                                                background: '#111827',
                                                border: '1px solid #374151'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$InvSlot$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvSlot"], {
                                                    item: glovesItem,
                                                    isEquipSlot: true,
                                                    slotId: "gloves",
                                                    isSelected: selectedSlot === 'gloves',
                                                    isDragging: draggedSlot === 'gloves',
                                                    size: "lg",
                                                    onClick: ()=>onSlotClick('gloves'),
                                                    onDragStart: onDragStart,
                                                    onDrop: onDrop,
                                                    onDragEnd: onDragEnd
                                                }, void 0, false, {
                                                    fileName: "[project]/components/inventory/MinecraftInventory.jsx",
                                                    lineNumber: 132,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-slate-300 font-bold text-sm",
                                                            children: "Руки"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/inventory/MinecraftInventory.jsx",
                                                            lineNumber: 141,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-slate-500 text-xs",
                                                            children: glovesItem ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getItemDef"])(glovesItem)?.label : '—'
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/inventory/MinecraftInventory.jsx",
                                                            lineNumber: 142,
                                                            columnNumber: 19
                                                        }, this),
                                                        glovesItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `text-xs font-bold ${glovesItem.id === 'sterile_gloves' ? 'text-emerald-400' : 'text-amber-400'}`,
                                                            children: glovesItem.id === 'sterile_gloves' ? '✓ Стерильные' : '⚠ Хозяйственные'
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/inventory/MinecraftInventory.jsx",
                                                            lineNumber: 144,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/inventory/MinecraftInventory.jsx",
                                                    lineNumber: 140,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/inventory/MinecraftInventory.jsx",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/inventory/MinecraftInventory.jsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full rounded-xl overflow-hidden flex flex-col items-center",
                                    style: {
                                        background: 'linear-gradient(180deg,#1e3a5f 0%,#0f172a 100%)',
                                        border: '1px solid #1e40af',
                                        minHeight: 210
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-32 h-48 mt-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$Avatar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                                                gogglesOn: !!equippedHelmet,
                                                glovesType: equippedGloves
                                            }, void 0, false, {
                                                fileName: "[project]/components/inventory/MinecraftInventory.jsx",
                                                lineNumber: 155,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/inventory/MinecraftInventory.jsx",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-400 text-xs pb-3",
                                            children: "Лаборант"
                                        }, void 0, false, {
                                            fileName: "[project]/components/inventory/MinecraftInventory.jsx",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/inventory/MinecraftInventory.jsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-600 text-xs text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                            className: "px-1 py-0.5 rounded bg-slate-700 text-slate-300 font-mono text-[10px]",
                                            children: "Tab"
                                        }, void 0, false, {
                                            fileName: "[project]/components/inventory/MinecraftInventory.jsx",
                                            lineNumber: 161,
                                            columnNumber: 14
                                        }, this),
                                        " / ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                            className: "px-1 py-0.5 rounded bg-slate-700 text-slate-300 font-mono text-[10px]",
                                            children: "Esc"
                                        }, void 0, false, {
                                            fileName: "[project]/components/inventory/MinecraftInventory.jsx",
                                            lineNumber: 161,
                                            columnNumber: 113
                                        }, this),
                                        " — закрыть"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/inventory/MinecraftInventory.jsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/inventory/MinecraftInventory.jsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/inventory/MinecraftInventory.jsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/inventory/MinecraftInventory.jsx",
            lineNumber: 56,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/inventory/MinecraftInventory.jsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/inventory/FollowCursor.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FollowCursor",
    ()=>FollowCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/itemRegistry.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$icons$2f$GasBurnerIcon$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/icons/GasBurnerIcon.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$icons$2f$WipeIcon$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/icons/WipeIcon.jsx [app-ssr] (ecmascript)");
// components/inventory/FollowCursor.jsx
'use client';
;
;
;
;
;
function FollowCursor({ activeItemDef, activeItem, replaceCursor = false, interacting = true, onBurnerFlameProgress }) {
    const [coords, setCoords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [mouseInside, setMouseInside] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Состояния действий
    const [isHolding, setIsHolding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // для горелки (пламя)
    const [flameProgress, setFlameProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isWiping, setIsWiping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // для салфетки (анимация протирки)
    const isBurner = activeItem?.id === 'gas_burner';
    const wipeIds = [
        'ethyl_wipes',
        'isop_wipes',
        'antibact_wipes'
    ];
    const isWipe = activeItem && wipeIds.includes(activeItem.id);
    const isBioBottle = activeItem && activeItem.id && activeItem.id.startsWith('bio_tare_');
    const holdingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const startTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Мгновенное появление предмета в руке (для всех предметов)
    // Принудительно включаем видимость, как только есть activeItemDef
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (activeItemDef) {
            setMouseInside(true);
        } else {
            setMouseInside(false);
            setIsHolding(false);
            setIsWiping(false);
            setFlameProgress(0);
        }
    }, [
        activeItemDef
    ]);
    // Отслеживание мыши (позиция + видимость)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleMouseMove = (e)=>{
            setCoords({
                x: e.clientX,
                y: e.clientY
            });
            if (activeItemDef) setMouseInside(true); // мгновенное появление при движении
        };
        const handleMouseEnter = ()=>setMouseInside(true);
        const handleMouseLeave = ()=>setMouseInside(false);
        window.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseenter', handleMouseEnter);
        document.body.addEventListener('mouseleave', handleMouseLeave);
        return ()=>{
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [
        activeItemDef
    ]);
    // Глобальные обработчики мыши для зажатия ЛКМ
    // Используется и для горелки (пламя), и для салфетки (протирка)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isBurner && !isWipe) {
            setIsHolding(false);
            setIsWiping(false);
            setFlameProgress(0);
            holdingRef.current = false;
            return;
        }
        const handleMouseDown = (e)=>{
            if (e.button === 0) {
                holdingRef.current = true;
                startTimeRef.current = Date.now();
                setIsHolding(true);
                if (isWipe) setIsWiping(true);
            }
        };
        const handleMouseUp = (e)=>{
            if (e.button === 0) {
                holdingRef.current = false;
                setIsHolding(false);
                setIsWiping(false);
                setFlameProgress(0);
            }
        };
        const handleBlur = ()=>{
            holdingRef.current = false;
            setIsHolding(false);
            setIsWiping(false);
            setFlameProgress(0);
        };
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('blur', handleBlur);
        return ()=>{
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('blur', handleBlur);
        };
    }, [
        isBurner,
        isWipe
    ]);
    // Анимация прогресса пламени горелки (оранжевый → синий) пока зажата мышь
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isHolding || !isBurner) {
            setFlameProgress(0);
            if (onBurnerFlameProgress) onBurnerFlameProgress(0);
            return;
        }
        const RAMP_MS = 3800; // время перехода в синий цвет
        let rafId;
        const tick = ()=>{
            const elapsed = Date.now() - startTimeRef.current;
            const progress = Math.min(1, elapsed / RAMP_MS);
            setFlameProgress(progress);
            if (onBurnerFlameProgress) onBurnerFlameProgress(progress);
            rafId = requestAnimationFrame(tick);
        };
        rafId = requestAnimationFrame(tick);
        return ()=>cancelAnimationFrame(rafId);
    }, [
        isHolding,
        isBurner
    ]);
    // Показываем мгновенно, как только предмет взят в руку.
    // Прячем только когда мышь ушла за пределы окна.
    if (!activeItemDef || !mouseInside) return null;
    // Горелка — очень крупная + анимированное пламя при зажатии ЛКМ
    if (isBurner) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: 'fixed',
                left: coords.x,
                top: coords.y,
                pointerEvents: 'none',
                zIndex: 99999,
                userSelect: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: replaceCursor ? 'translate(-50%, -50%)' : 'translate(14px, 14px)'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$icons$2f$GasBurnerIcon$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GasBurnerIcon"], {
                size: 144,
                lit: isHolding && interacting,
                flameProgress: flameProgress
            }, void 0, false, {
                fileName: "[project]/components/inventory/FollowCursor.jsx",
                lineNumber: 158,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/inventory/FollowCursor.jsx",
            lineNumber: 142,
            columnNumber: 7
        }, this);
    }
    // Салфетка — крупная, с анимацией движения при зажатии ЛКМ
    if (isWipe) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: 'fixed',
                left: coords.x,
                top: coords.y,
                pointerEvents: 'none',
                zIndex: 99999,
                userSelect: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: replaceCursor ? 'translate(-50%, -50%)' : 'translate(14px, 14px)'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$icons$2f$WipeIcon$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WipeIcon"], {
                size: 80,
                wiping: isWiping && interacting
            }, void 0, false, {
                fileName: "[project]/components/inventory/FollowCursor.jsx",
                lineNumber: 186,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/inventory/FollowCursor.jsx",
            lineNumber: 170,
            columnNumber: 7
        }, this);
    }
    // Био-флакон — того же размера, что и размещённый под краном (w-40 h-70)
    if (isBioBottle) {
        const w = 40;
        const h = 70;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: 'fixed',
                left: coords.x,
                top: coords.y,
                pointerEvents: 'none',
                zIndex: 99999,
                userSelect: 'none',
                transform: replaceCursor ? 'translate(-50%, -40%)' : 'translate(14px, 14px)'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: `${w}px`,
                    height: `${h}px`,
                    border: '2px solid #94a3b8',
                    borderRadius: '16px 16px 8px 8px',
                    backgroundColor: '#fff',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                    position: 'relative',
                    overflow: 'hidden'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(180deg, rgba(148,163,184,0.08) 0%, transparent 30%, transparent 70%, rgba(15,23,42,0.06) 100%)',
                            pointerEvents: 'none'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/inventory/FollowCursor.jsx",
                        lineNumber: 225,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            top: 0,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '14px',
                            height: '4px',
                            background: '#e2e8f0',
                            borderBottom: '1px solid #94a3b8',
                            borderRadius: '2px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/inventory/FollowCursor.jsx",
                        lineNumber: 232,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            bottom: '2px',
                            right: '2px',
                            fontSize: '4px',
                            fontFamily: 'monospace',
                            color: '#64748b',
                            opacity: 0.5
                        },
                        children: "0.5L"
                    }, void 0, false, {
                        fileName: "[project]/components/inventory/FollowCursor.jsx",
                        lineNumber: 244,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/inventory/FollowCursor.jsx",
                lineNumber: 212,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/inventory/FollowCursor.jsx",
            lineNumber: 199,
            columnNumber: 7
        }, this);
    }
    // Обычные предметы
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            left: coords.x,
            top: coords.y,
            pointerEvents: 'none',
            zIndex: 99999,
            userSelect: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: replaceCursor ? 'translate(-50%, -50%)' : 'translate(14px, 14px)'
        },
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["renderItemIcon"])(activeItemDef, 36)
    }, void 0, false, {
        fileName: "[project]/components/inventory/FollowCursor.jsx",
        lineNumber: 262,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/inventory/InventorySideBar.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InventorySidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$InventoryContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/InventoryContext.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/itemRegistry.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$Avatar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/Avatar.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$MinecraftInventory$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/MinecraftInventory.jsx [app-ssr] (ecmascript)");
// components/inventory/InventorySidebar.jsx
'use client';
;
;
;
;
;
;
;
function InventorySidebar() {
    const inventory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$InventoryContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInventoryContext"])();
    const helmetItem = inventory.equippedHelmet ? {
        id: 'safety_goggles'
    } : null;
    const glovesItem = inventory.equippedGloves === 'sterile' ? {
        id: 'sterile_gloves'
    } : inventory.equippedGloves === 'yellow' ? {
        id: 'regular_gloves'
    } : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "w-75 shrink-0 top-3 ml-15",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$MinecraftInventory$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                slots: inventory.slots,
                selectedSlot: inventory.selectedSlot,
                draggedSlot: inventory.draggedSlot,
                equippedHelmet: inventory.equippedHelmet,
                equippedGloves: inventory.equippedGloves,
                onSlotClick: inventory.handleSlotClick,
                onDragStart: inventory.handleDragStart,
                onDrop: inventory.handleDrop,
                onDragEnd: inventory.handleDragEnd,
                isOpen: inventory.isOpen,
                onClose: inventory.closeInventory
            }, void 0, false, {
                fileName: "[project]/components/inventory/InventorySideBar.jsx",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:col-span-3 step-card flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-br from-slate-800 to-slate-900 px-6 py-5 ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-white font-bold text-lg",
                                children: "🎒 Снаряжение"
                            }, void 0, false, {
                                fileName: "[project]/components/inventory/InventorySideBar.jsx",
                                lineNumber: 42,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-400 text-xs mt-1",
                                children: "Нажмите Tab чтобы открыть инвентарь"
                            }, void 0, false, {
                                fileName: "[project]/components/inventory/InventorySideBar.jsx",
                                lineNumber: 43,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/inventory/InventorySideBar.jsx",
                        lineNumber: 41,
                        columnNumber: 23
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-5 flex flex-col gap-4 flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: inventory.openInventory,
                                className: "w-full py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-md active:scale-95",
                                style: {
                                    background: 'linear-gradient(135deg,#1e3a5f,#1e40af)',
                                    color: 'white'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl",
                                        children: "🗃️"
                                    }, void 0, false, {
                                        fileName: "[project]/components/inventory/InventorySideBar.jsx",
                                        lineNumber: 49,
                                        columnNumber: 27
                                    }, this),
                                    "Открыть инвентарь",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-1 text-xs opacity-60 font-mono bg-white/10 px-1.5 py-0.5 rounded",
                                        children: "Tab"
                                    }, void 0, false, {
                                        fileName: "[project]/components/inventory/InventorySideBar.jsx",
                                        lineNumber: 51,
                                        columnNumber: 27
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/inventory/InventorySideBar.jsx",
                                lineNumber: 46,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl overflow-hidden flex flex-col items-center py-3 px-3",
                                style: {
                                    background: 'linear-gradient(180deg,#1e3a5f 0%,#0f172a 100%)',
                                    border: '1px solid #1e40af'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-24 h-40",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$Avatar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                                        gogglesOn: inventory.equippedHelmet,
                                        glovesType: inventory.equippedGloves
                                    }, void 0, false, {
                                        fileName: "[project]/components/inventory/InventorySideBar.jsx",
                                        lineNumber: 57,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/inventory/InventorySideBar.jsx",
                                    lineNumber: 56,
                                    columnNumber: 27
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/inventory/InventorySideBar.jsx",
                                lineNumber: 54,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    {
                                        label: 'Голова',
                                        equipped: inventory.equippedHelmet,
                                        id: inventory.equippedHelmet ? 'safety_goggles' : null,
                                        okText: 'Очки надеты ✓',
                                        warn: false
                                    },
                                    {
                                        label: 'Руки',
                                        equipped: !!inventory.equippedGloves,
                                        id: inventory.equippedGloves === 'sterile' ? 'sterile_gloves' : inventory.equippedGloves === 'yellow' ? 'regular_gloves' : null,
                                        okText: inventory.equippedGloves === 'sterile' ? 'Стерильные ✓' : 'Хозяйственные ⚠',
                                        warn: inventory.equippedGloves === 'yellow'
                                    }
                                ].map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex items-center gap-3 p-3 rounded-xl border transition-all
                                ${row.equipped ? row.warn ? 'bg-amber-50 border-amber-300' : 'bg-emerald-50 border-emerald-300' : 'bg-slate-50 border-slate-200'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl w-8 text-center",
                                                children: row.id ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getItemDef"])({
                                                    id: row.id
                                                })?.icon || '?' : '—'
                                            }, void 0, false, {
                                                fileName: "[project]/components/inventory/InventorySideBar.jsx",
                                                lineNumber: 74,
                                                columnNumber: 31
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-bold text-slate-600",
                                                        children: row.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/inventory/InventorySideBar.jsx",
                                                        lineNumber: 78,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `text-xs ${row.equipped ? row.warn ? 'text-amber-600 font-semibold' : 'text-emerald-600 font-semibold' : 'text-slate-400'}`,
                                                        children: row.equipped ? row.okText : 'Пусто'
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/inventory/InventorySideBar.jsx",
                                                        lineNumber: 79,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/inventory/InventorySideBar.jsx",
                                                lineNumber: 77,
                                                columnNumber: 31
                                            }, this)
                                        ]
                                    }, row.label, true, {
                                        fileName: "[project]/components/inventory/InventorySideBar.jsx",
                                        lineNumber: 71,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/inventory/InventorySideBar.jsx",
                                lineNumber: 61,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1.5",
                                        children: [
                                            "В руке — ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-300 font-mono",
                                                children: "← →"
                                            }, void 0, false, {
                                                fileName: "[project]/components/inventory/InventorySideBar.jsx",
                                                lineNumber: 93,
                                                columnNumber: 38
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/inventory/InventorySideBar.jsx",
                                        lineNumber: 92,
                                        columnNumber: 27
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-9 gap-1 p-2 rounded-xl bg-slate-900",
                                        children: inventory.slots.slice(0, 9).map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `h-9 rounded-lg border-2 flex items-center justify-center text-base transition-all cursor-pointer
                                  ${i === inventory.hotbarActive ? 'border-yellow-400 bg-slate-700 scale-110 shadow-lg shadow-yellow-400/20' : 'border-slate-700 bg-slate-800'}`,
                                                onClick: ()=>inventory.setHotbarActive(i),
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["renderItemIcon"])(item, 18)
                                            }, i, false, {
                                                fileName: "[project]/components/inventory/InventorySideBar.jsx",
                                                lineNumber: 97,
                                                columnNumber: 31
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/inventory/InventorySideBar.jsx",
                                        lineNumber: 95,
                                        columnNumber: 27
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1.5 text-center text-xs text-slate-400 min-h-[1rem]",
                                        children: inventory.activeItemDef?.label || ''
                                    }, void 0, false, {
                                        fileName: "[project]/components/inventory/InventorySideBar.jsx",
                                        lineNumber: 107,
                                        columnNumber: 27
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/inventory/InventorySideBar.jsx",
                                lineNumber: 91,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/inventory/InventorySideBar.jsx",
                        lineNumber: 45,
                        columnNumber: 23
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/inventory/InventorySideBar.jsx",
                lineNumber: 40,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/inventory/InventorySideBar.jsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=components_0f43q5s._.js.map