module.exports = [
"[project]/steps/Stage1/Step1_ChemTare.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Step1_ChemTare
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$constants$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/constants.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function Step1_ChemTare({ savedData, onUpdate, onComplete }) {
    // Инициализируем корзину данными из savedData, чтобы она не пропадала при переключении шагов
    const [chemCart, setChemCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(savedData.chemCart || []);
    const [chemMat, setChemMat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [chemCol, setChemCol] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [chemCap, setChemCap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [chemVol, setChemVol] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0.5);
    const [validationWarning, setValidationWarning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const handleAddChem = ()=>{
        if (!chemMat || !chemCol || !chemCap) {
            setValidationWarning("Выберите материал, цвет и крышку для добавления.");
            return;
        }
        setValidationWarning("");
        const newCart = [
            ...chemCart,
            {
                mat: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$constants$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHEM_MATERIALS"].find((m)=>m.id === chemMat),
                col: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$constants$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHEM_COLORS"].find((c)=>c.id === chemCol),
                cap: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$constants$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHEM_CAPS"].find((c)=>c.id === chemCap),
                vol: chemVol
            }
        ];
        setChemCart(newCart);
        if (typeof onUpdate === 'function') {
            onUpdate({
                chemCart: newCart
            });
        }
    };
    const handleCompleteChem = ()=>{
        if (chemCart.length === 0) {
            setValidationWarning("Добавьте хотя бы один вариант тары в список ответов.");
            return;
        }
        let score = 0;
        let f1 = false;
        let f2 = false;
        let results = [];
        chemCart.forEach((item, idx)=>{
            let errs = [];
            if (item.vol !== 2.0) errs.push(`Объем ${item.vol} л. (нужно 2.0 л).`);
            if (!item.mat.isCorrect) errs.push(item.mat.error);
            if (!item.col.isCorrect) errs.push(item.col.error);
            if (!item.cap.isCorrect) errs.push(item.cap.error);
            // 🟢 УНИКАЛЬНЫЙ КЛЮЧ КОНФИГУРАЦИИ
            const configKey = `${item.mat.id}_${item.col.id}_${item.cap.id}_${item.vol}`;
            if (errs.length === 0) {
                if (item.mat.id === 'hdpe') f1 = true;
                if (item.mat.id === 'pp') f2 = true;
                results.push({
                    id: idx + 1,
                    configKey,
                    name: item.mat.name,
                    vol: item.vol,
                    isPerfect: true,
                    errs: []
                });
            } else {
                results.push({
                    id: idx + 1,
                    configKey,
                    name: item.mat.name,
                    vol: item.vol,
                    isPerfect: false,
                    errs
                });
            }
        });
        if (f1 || f2) score = f1 && f2 ? 100 : 80;
        // 🟢 Штрафуем за уникальные ошибочные конфигурации, а не за каждую банку
        const uniqueErrorKeys = new Set(results.filter((r)=>!r.isPerfect).map((r)=>r.configKey));
        score -= uniqueErrorKeys.size * 15;
        onComplete({
            chemCart,
            chemResults: results,
            chemScore: Math.max(0, score),
            chemFound1: f1,
            chemFound2: f2
        });
    };
    // 🟢 Группировка корзины для отображения
    const groupedCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const map = new Map();
        chemCart.forEach((item)=>{
            const key = `${item.mat.id}_${item.col.id}_${item.cap.id}_${item.vol}`;
            if (!map.has(key)) {
                map.set(key, {
                    ...item,
                    qty: 1
                });
            } else {
                const existing = map.get(key);
                map.set(key, {
                    ...existing,
                    qty: existing.qty + 1
                });
            }
        });
        return Array.from(map.values());
    }, [
        chemCart
    ]);
    // Убрать ровно 1 банку из стека
    const handleRemoveOne = (key)=>{
        let removed = false;
        const newCart = chemCart.filter((item)=>{
            const itemKey = `${item.mat.id}_${item.col.id}_${item.cap.id}_${item.vol}`;
            if (!removed && itemKey === key) {
                removed = true;
                return false;
            }
            return true;
        });
        setChemCart(newCart);
        if (typeof onUpdate === 'function') onUpdate({
            chemCart: newCart
        });
    };
    // Убрать всю конфигурацию целиком
    const handleRemoveAll = (key)=>{
        const newCart = chemCart.filter((item)=>{
            const itemKey = `${item.mat.id}_${item.col.id}_${item.cap.id}_${item.vol}`;
            return itemKey !== key;
        });
        setChemCart(newCart);
        if (typeof onUpdate === 'function') onUpdate({
            chemCart: newCart
        });
    };
    const actChemMat = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$constants$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHEM_MATERIALS"].find((m)=>m.id === chemMat);
    const actChemCol = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$constants$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHEM_COLORS"].find((c)=>c.id === chemCol);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white w-full max-w-6xl rounded-b-xl rounded-tr-xl shadow-xl border border-slate-200 flex flex-col xl:flex-row mb-6 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full xl:w-2/3 p-8 border-r border-slate-100 bg-slate-50 flex flex-col gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-blue-900 mb-1",
                                children: "Конструктор (Химия)"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 text-sm",
                                children: "Соберите подходящую тару и добавьте её в список ответов."
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-5 rounded-xl border border-slate-200 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-slate-800 mb-3 block",
                                children: "1. Полимерный материал:"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$constants$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHEM_MATERIALS"].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setChemMat(m.id);
                                            setValidationWarning("");
                                        },
                                        className: `p-3 text-sm rounded-lg border-2 text-left ${chemMat === m.id ? 'bg-blue-50 border-blue-500 text-blue-900 font-bold' : 'border-slate-200 text-slate-600 hover:border-blue-300'}`,
                                        children: m.name
                                    }, m.id, false, {
                                        fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-5 rounded-xl border border-slate-200 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-slate-800 mb-3 block",
                                children: "2. Цвет тары:"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-3 gap-3",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$constants$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHEM_COLORS"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setChemCol(c.id);
                                            setValidationWarning("");
                                        },
                                        className: `p-3 text-sm rounded-lg border-2 text-center flex flex-col items-center ${chemCol === c.id ? 'bg-blue-50 border-blue-500 font-bold text-blue-900' : 'border-slate-200 text-slate-600'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-8 h-8 rounded-full border border-slate-300 mb-2 ${c.visual}`
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                                lineNumber: 146,
                                                columnNumber: 16
                                            }, this),
                                            c.name
                                        ]
                                    }, c.id, true, {
                                        fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-5 rounded-xl border border-slate-200 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-slate-800 mb-3 block",
                                children: "3. Крышка:"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$constants$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHEM_CAPS"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setChemCap(c.id);
                                            setValidationWarning("");
                                        },
                                        className: `flex-1 p-3 text-sm rounded-lg border-2 text-left ${chemCap === c.id ? 'bg-blue-50 border-blue-500 font-bold text-blue-900' : 'border-slate-200 text-slate-600'}`,
                                        children: c.name
                                    }, c.id, false, {
                                        fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-slate-800 block mb-2",
                                        children: [
                                            "4. Вместимость: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-blue-600 ml-2",
                                                children: [
                                                    chemVol.toFixed(1),
                                                    " л"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                                lineNumber: 164,
                                                columnNumber: 87
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                        lineNumber: 164,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: "0.5",
                                        max: "5.0",
                                        step: "0.5",
                                        value: chemVol,
                                        onChange: (e)=>setChemVol(parseFloat(e.target.value)),
                                        className: "w-full h-3 bg-slate-200 rounded-lg cursor-pointer accent-blue-600"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleAddChem,
                                className: "w-full md:w-1/3 bg-blue-100 hover:bg-blue-200 text-blue-800 font-bold py-4 rounded-xl",
                                children: "+ Добавить"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full xl:w-1/3 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-8 bg-white border-b border-slate-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-bold text-slate-800 mb-4",
                                children: "🔬 Превью (Химия)"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-24 h-36 border-4 border-slate-300 rounded-xl bg-slate-50 flex items-center justify-center overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `absolute -top-1 left-1/2 transform -translate-x-1/2 w-10 h-4 rounded-t-md z-10 ${chemCap === 'rubber' ? 'bg-slate-800' : 'bg-blue-400'}`
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                            lineNumber: 177,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-full h-full ${actChemCol ? actChemCol.visual : 'bg-transparent'}`
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                            lineNumber: 178,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-4 bg-white/90 px-2 rounded text-[10px] font-black",
                                            children: [
                                                chemVol.toFixed(1),
                                                "L"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                            lineNumber: 179,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-8 bg-slate-50 flex-1 flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-bold text-slate-800 mb-4 flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "📋 Ваши ответы"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-blue-600 text-white text-xs px-2 py-1 rounded-full",
                                        children: chemCart.length
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                        lineNumber: 187,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 space-y-2 mb-6",
                                children: groupedCart.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center text-slate-400 text-sm p-4 border-2 border-dashed border-slate-200 rounded-lg",
                                    children: "Нет добавленных вариантов."
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                    lineNumber: 191,
                                    columnNumber: 15
                                }, this) : groupedCart.map((item, idx)=>{
                                    const key = `${item.mat.id}_${item.col.id}_${item.cap.id}_${item.vol}`;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-3 rounded border border-slate-200 text-xs relative",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1.5 flex-wrap",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                    children: [
                                                                        "Конфиг. ",
                                                                        idx + 1,
                                                                        ":"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                                                    lineNumber: 200,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "truncate",
                                                                    children: [
                                                                        item.mat?.name ?? 'Неизвестно',
                                                                        ", ",
                                                                        item.col?.name ?? 'Неизвестно',
                                                                        ", ",
                                                                        item.vol,
                                                                        " л."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                                                    lineNumber: 201,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                                            lineNumber: 199,
                                                            columnNumber: 25
                                                        }, this),
                                                        item.qty > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1 flex items-center gap-1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] font-mono bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-bold",
                                                                children: [
                                                                    "Количество: ",
                                                                    item.qty,
                                                                    " шт."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                                                lineNumber: 207,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                                            lineNumber: 206,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                                    lineNumber: 198,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1 shrink-0 mt-0.5",
                                                    children: [
                                                        item.qty > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleRemoveOne(key),
                                                            title: "Убрать одну банку",
                                                            className: "text-slate-400 hover:text-slate-600 text-sm w-6 h-6 flex items-center justify-center rounded hover:bg-slate-100 border border-slate-200",
                                                            children: "−"
                                                        }, void 0, false, {
                                                            fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                                            lineNumber: 215,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleRemoveAll(key),
                                                            title: "Убрать всю конфигурацию",
                                                            className: "text-red-400 hover:text-red-600 text-base w-6 h-6 flex items-center justify-center rounded hover:bg-red-50",
                                                            children: "✖"
                                                        }, void 0, false, {
                                                            fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                                            lineNumber: 223,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                                    lineNumber: 213,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                            lineNumber: 197,
                                            columnNumber: 21
                                        }, this)
                                    }, key, false, {
                                        fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                        lineNumber: 196,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-auto",
                                children: [
                                    validationWarning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-500 text-xs font-bold mb-2 text-center",
                                        children: validationWarning
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                        lineNumber: 238,
                                        columnNumber: 35
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleCompleteChem,
                                        className: "w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-4 rounded-xl shadow-md transition-all",
                                        children: "Завершить Химию →"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                        lineNumber: 239,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
                lineNumber: 172,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/steps/Stage1/Step1_ChemTare.jsx",
        lineNumber: 120,
        columnNumber: 5
    }, this);
}
}),
"[project]/steps/Stage1/Step2_BioTare.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Step2_BioTare
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$constants$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/constants.jsx [app-ssr] (ecmascript)");
// steps/Stage1/Step2_BioTare.jsx
'use client';
;
;
;
// Функция для перемешивания элементов
const shuffleArray = (array)=>[
        ...array
    ].sort(()=>Math.random() - 0.5);
function Step2_BioTare({ savedData, onUpdate, onComplete }) {
    // Перемешиваем массивы только один раз при загрузке экрана
    const [shuffledMaterials, setShuffledMaterials] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$constants$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BIO_MATERIALS"]);
    const [shuffledCaps, setShuffledCaps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$constants$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BIO_CAPS"]);
    const [shuffledAdditives, setShuffledAdditives] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$constants$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BIO_ADDITIVES"]);
    const [bioMat, setBioMat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [bioCap, setBioCap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [bioAdd, setBioAdd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [bioVol, setBioVol] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0.1);
    const [validationWarning, setValidationWarning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [bioCart, setBioCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(savedData.bioCart || []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setShuffledMaterials(shuffleArray(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$constants$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BIO_MATERIALS"]));
        setShuffledCaps(shuffleArray(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$constants$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BIO_CAPS"]));
        setShuffledAdditives(shuffleArray(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$constants$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BIO_ADDITIVES"]));
    }, []);
    const handleAddBio = ()=>{
        if (!bioMat || !bioCap || !bioAdd) {
            setValidationWarning("Выберите материал, герметизацию и добавку.");
            return;
        }
        setValidationWarning("");
        const newCart = [
            ...bioCart,
            {
                mat: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$constants$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BIO_MATERIALS"].find((m)=>m.id === bioMat),
                cap: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$constants$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BIO_CAPS"].find((c)=>c.id === bioCap),
                add: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$constants$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BIO_ADDITIVES"].find((a)=>a.id === bioAdd),
                vol: bioVol
            }
        ];
        setBioCart(newCart);
        if (typeof onUpdate === 'function') {
            onUpdate({
                bioCart: newCart
            });
        }
    };
    const handleCompleteBio = ()=>{
        if (bioCart.length === 0) {
            setValidationWarning("Добавьте хотя бы один вариант тары в список ответов.");
            return;
        }
        let score = 0;
        let f1 = false;
        let f2 = false;
        let results = [];
        bioCart.forEach((item, idx)=>{
            let errs = [];
            if (item.vol !== 0.5) errs.push(`Объем ${item.vol} л. (по ГОСТу требуется 0.5 л).`);
            if (!item.mat.isCorrect) errs.push(item.mat.error);
            if (!item.cap.isCorrect) errs.push(item.cap.error);
            if (!item.add.isCorrect) errs.push(item.add.error);
            // 🟢 УНИКАЛЬНЫЙ КЛЮЧ КОНФИГУРАЦИИ (с учетом добавки)
            const configKey = `${item.mat.id}_${item.cap.id}_${item.add.id}_${item.vol}`;
            if (errs.length === 0) {
                if (item.mat.id === 'glass_boro') f1 = true;
                if (item.mat.id === 'plastic_thermo') f2 = true;
                results.push({
                    id: idx + 1,
                    configKey,
                    name: item.mat.name,
                    vol: item.vol,
                    isPerfect: true,
                    errs: []
                });
            } else {
                results.push({
                    id: idx + 1,
                    configKey,
                    name: item.mat.name,
                    vol: item.vol,
                    isPerfect: false,
                    errs
                });
            }
        });
        if (f1 || f2) score = f1 && f2 ? 100 : 80;
        const uniqueErrorKeys = new Set(results.filter((r)=>!r.isPerfect).map((r)=>r.configKey));
        score -= uniqueErrorKeys.size * 15;
        onComplete({
            bioCart,
            bioResults: results,
            bioScore: Math.max(0, score),
            bioFound1: f1,
            bioFound2: f2
        });
    };
    // 🟢 Группировка корзины для отображения
    const groupedCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const map = new Map();
        bioCart.forEach((item)=>{
            const key = `${item.mat.id}_${item.cap.id}_${item.add.id}_${item.vol}`;
            if (!map.has(key)) {
                map.set(key, {
                    ...item,
                    qty: 1
                });
            } else {
                const existing = map.get(key);
                map.set(key, {
                    ...existing,
                    qty: existing.qty + 1
                });
            }
        });
        return Array.from(map.values());
    }, [
        bioCart
    ]);
    const handleRemoveOne = (key)=>{
        let removed = false;
        const newCart = bioCart.filter((item)=>{
            const itemKey = `${item.mat.id}_${item.cap.id}_${item.add.id}_${item.vol}`;
            if (!removed && itemKey === key) {
                removed = true;
                return false;
            }
            return true;
        });
        setBioCart(newCart);
        if (typeof onUpdate === 'function') onUpdate({
            bioCart: newCart
        });
    };
    const handleRemoveAll = (key)=>{
        const newCart = bioCart.filter((item)=>{
            const itemKey = `${item.mat.id}_${item.cap.id}_${item.add.id}_${item.vol}`;
            return itemKey !== key;
        });
        setBioCart(newCart);
        if (typeof onUpdate === 'function') onUpdate({
            bioCart: newCart
        });
    };
    const actBioMat = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$constants$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BIO_MATERIALS"].find((m)=>m.id === bioMat);
    const actBioAdd = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$constants$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BIO_ADDITIVES"].find((a)=>a.id === bioAdd);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white w-full max-w-6xl rounded-b-xl rounded-tr-xl shadow-xl border border-slate-200 flex flex-col xl:flex-row mb-6 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full xl:w-2/3 p-8 border-r border-slate-100 bg-cyan-50/30 flex flex-col gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-cyan-900 mb-1",
                                children: "Конструктор (Бактериология)"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 text-sm",
                                children: "Внимание: для бактериологии критична стерильность и сохранение микроорганизмов во время транспортировки."
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-5 rounded-xl border border-slate-200 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-slate-800 mb-3 block",
                                children: "1. Материал флакона:"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: shuffledMaterials.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setBioMat(m.id);
                                            setValidationWarning("");
                                        },
                                        className: `p-3 text-sm rounded-lg border-2 text-left ${bioMat === m.id ? 'bg-cyan-50 border-cyan-500 text-cyan-900 font-bold' : 'border-slate-200 text-slate-600 hover:border-cyan-300'}`,
                                        children: m.name
                                    }, m.id, false, {
                                        fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-5 rounded-xl border border-slate-200 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-slate-800 mb-3 block",
                                children: "2. Герметизация:"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3",
                                children: shuffledCaps.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setBioCap(c.id);
                                            setValidationWarning("");
                                        },
                                        className: `flex-1 p-3 text-sm rounded-lg border-2 text-left ${bioCap === c.id ? 'bg-cyan-50 border-cyan-500 font-bold text-cyan-900' : 'border-slate-200 text-slate-600'}`,
                                        children: c.name
                                    }, c.id, false, {
                                        fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-5 rounded-xl border border-slate-200 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-slate-800 mb-3 block",
                                children: "3. Добавка внутрь флакона:"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-3 gap-3",
                                children: shuffledAdditives.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setBioAdd(a.id);
                                            setValidationWarning("");
                                        },
                                        className: `p-3 text-xs rounded-lg border-2 text-center flex flex-col items-center justify-center ${bioAdd === a.id ? 'bg-cyan-50 border-cyan-500 font-bold' : 'border-slate-200 text-slate-600'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mb-1 text-cyan-900",
                                                children: a.name
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                                lineNumber: 168,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-state-400 text-cyan-900",
                                                children: [
                                                    "(",
                                                    a.desc,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                                lineNumber: 169,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, a.id, true, {
                                        fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                        lineNumber: 165,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-slate-800 block mb-2",
                                        children: [
                                            "4. Вместимость: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-cyan-600 ml-2",
                                                children: [
                                                    bioVol.toFixed(1),
                                                    " л"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                                lineNumber: 177,
                                                columnNumber: 87
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                        lineNumber: 177,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: "0.1",
                                        max: "1.0",
                                        step: "0.1",
                                        value: bioVol,
                                        onChange: (e)=>setBioVol(parseFloat(e.target.value)),
                                        className: "w-full h-3 bg-slate-200 rounded-lg cursor-pointer accent-cyan-600"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleAddBio,
                                className: "w-full md:w-1/3 bg-cyan-100 hover:bg-cyan-200 text-cyan-800 font-bold py-4 rounded-xl",
                                children: "+ Добавить"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full xl:w-1/3 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-8 bg-white border-b border-slate-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-bold text-slate-800 mb-4",
                                children: "🧫 Превью (Био)"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                lineNumber: 187,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-20 h-32 border-4 border-slate-300 rounded-t-3xl rounded-b-xl bg-slate-50 flex flex-col justify-end overflow-hidden",
                                    children: [
                                        bioCap === 'silicone_foil' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-0 w-full h-6 bg-gray-300 border-b-2 border-gray-400 shadow-md z-10"
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                            lineNumber: 190,
                                            columnNumber: 46
                                        }, this),
                                        bioCap === 'screw_plastic' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-0 w-full h-4 bg-blue-500 z-10"
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                            lineNumber: 191,
                                            columnNumber: 46
                                        }, this),
                                        bioCap === 'cotton' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-0 w-full h-6 bg-yellow-50 opacity-80 border-b border-dashed border-yellow-200 z-10"
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                            lineNumber: 192,
                                            columnNumber: 39
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `absolute top-0 w-full h-full ${actBioMat ? actBioMat.visual : 'bg-transparent'}`
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                            lineNumber: 194,
                                            columnNumber: 15
                                        }, this),
                                        actBioAdd && actBioAdd.id !== 'none' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-full h-4 z-20 flex items-center justify-center border-t border-slate-200 ${actBioAdd.visual}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[8px] font-bold opacity-60",
                                                children: actBioAdd.id === 'thiosulfate' ? 'Na₂S₂O₃' : 'HNO₃'
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                                lineNumber: 198,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                            lineNumber: 197,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-6 left-1 bg-white/90 px-1 rounded text-[10px] font-black z-20 border border-slate-300",
                                            children: [
                                                bioVol.toFixed(1),
                                                "L"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                            lineNumber: 202,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-8 bg-slate-50 flex-1 flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-bold text-slate-800 mb-4 flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "📋 Ваши ответы"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                        lineNumber: 209,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-cyan-600 text-white text-xs px-2 py-1 rounded-full",
                                        children: bioCart.length
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                        lineNumber: 210,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                lineNumber: 208,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 space-y-2 mb-6",
                                children: groupedCart.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center text-slate-400 text-sm p-4 border-2 border-dashed border-slate-200 rounded-lg",
                                    children: "Нет добавленных вариантов."
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                    lineNumber: 214,
                                    columnNumber: 15
                                }, this) : groupedCart.map((item, idx)=>{
                                    const key = `${item.mat.id}_${item.cap.id}_${item.add.id}_${item.vol}`;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-3 rounded border border-slate-200 text-xs relative",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1.5 flex-wrap",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                    children: [
                                                                        "Конфиг. ",
                                                                        idx + 1,
                                                                        ":"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                                                    lineNumber: 223,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "truncate",
                                                                    children: [
                                                                        item.mat?.name ?? 'Неизвестно',
                                                                        ", ",
                                                                        item.add?.name ?? 'Неизвестно',
                                                                        ", ",
                                                                        item.vol,
                                                                        " л."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                                                    lineNumber: 224,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                                            lineNumber: 222,
                                                            columnNumber: 25
                                                        }, this),
                                                        item.qty > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1 flex items-center gap-1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] font-mono bg-cyan-100 text-cyan-700 px-2 py-0.5 rounded font-bold",
                                                                children: [
                                                                    "Количество: ",
                                                                    item.qty,
                                                                    " шт."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                                                lineNumber: 230,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                                            lineNumber: 229,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                                    lineNumber: 221,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1 shrink-0 mt-0.5",
                                                    children: [
                                                        item.qty > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleRemoveOne(key),
                                                            title: "Убрать один флакон",
                                                            className: "text-slate-400 hover:text-slate-600 text-sm w-6 h-6 flex items-center justify-center rounded hover:bg-slate-100 border border-slate-200",
                                                            children: "−"
                                                        }, void 0, false, {
                                                            fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                                            lineNumber: 238,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleRemoveAll(key),
                                                            title: "Убрать всю конфигурацию",
                                                            className: "text-red-400 hover:text-red-600 text-base w-6 h-6 flex items-center justify-center rounded hover:bg-red-50",
                                                            children: "✖"
                                                        }, void 0, false, {
                                                            fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                                            lineNumber: 246,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                                    lineNumber: 236,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                            lineNumber: 220,
                                            columnNumber: 21
                                        }, this)
                                    }, key, false, {
                                        fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                        lineNumber: 219,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-auto",
                                children: [
                                    validationWarning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-500 text-xs font-bold mb-2 text-center",
                                        children: validationWarning
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                        lineNumber: 261,
                                        columnNumber: 35
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleCompleteBio,
                                        className: "w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-4 rounded-xl shadow-md transition-all",
                                        children: "Завершить Бактериологию→"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                        lineNumber: 262,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                                lineNumber: 260,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
                lineNumber: 185,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/steps/Stage1/Step2_BioTare.jsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
}),
"[project]/steps/Stage1/Step3_FieldKit.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Step3_FieldKit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$constants$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/constants.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/itemRegistry.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$icons$2f$GasBurnerIcon$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/icons/GasBurnerIcon.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$icons$2f$WipeIcon$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/icons/WipeIcon.jsx [app-ssr] (ecmascript)");
// steps/Stage1/Step3_FieldKit.jsx
'use client';
;
;
;
;
;
;
// Объединяем все предметы склада в единую поисковую базу
// (добавлены перегородки и "прочее" — иначе они не найдутся в поиске)
const SEARCH_DATABASE = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$constants$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CABINET_ITEMS"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$constants$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FREEZER_ITEMS"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$constants$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DIVIDER_ITEMS"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$constants$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOME_STUFF"]
];
const CATEGORY_ICON = {
    disinfection: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$icons$2f$WipeIcon$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WipeIcon"], {
        size: 20
    }, void 0, false, {
        fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
        lineNumber: 14,
        columnNumber: 17
    }, ("TURBOPACK compile-time value", void 0)),
    burner: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$icons$2f$GasBurnerIcon$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GasBurnerIcon"], {
        size: 20
    }, void 0, false, {
        fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
        lineNumber: 15,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    safety: '🧤',
    safety_goggles: '👓',
    marking: '✏️',
    transport: '❄️',
    tools: '🔧',
    divider: '🧱',
    some_stuff: '📎'
};
// Расходники, для которых студенту разумно взять больше 1 шт (но не слишком много).
// Порог "нормы" — если взято больше этого числа, отчёт отметит избыточный запас.
const REASONABLE_QTY = {
    ethyl_wipes: 3,
    isop_wipes: 3,
    antibact_wipes: 3,
    sterile_gloves: 3,
    regular_gloves: 2
};
function Step3_FieldKit({ savedData, onUpdate, onComplete }) {
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [packedItems, setPackedItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(savedData.kitResults || []);
    const [validationWarning, setValidationWarning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const REQUIRED_FREEZER_TEMP = -24;
    const [freezerTemp, setFreezerTemp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-2);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (typeof onUpdate === 'function') {
            onUpdate({
                kitResults: packedItems
            });
        }
    }, [
        packedItems,
        onUpdate
    ]);
    const [hoveredItem, setHoveredItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const hoverTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const getSearchResults = ()=>{
        const trimmedQuery = searchQuery.trim();
        if (trimmedQuery.length <= 3) return [];
        const query = trimmedQuery.toLowerCase();
        return SEARCH_DATABASE.filter((item)=>item.name.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query));
    };
    const searchResults = getSearchResults();
    /**
   * Положить предмет в сумку. Расходники (maxStack > 1) можно класть
   * повторно — увеличивается qty, вплоть до maxStack. Уникальные предметы
   * (maxStack === 1, например горелка) кладутся один раз, повторный клик
   * по уже уложенному просто не делает ничего нового (без ошибки).
   */ const handlePack = (item)=>{
        const maxStack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMaxStack"])(item.id);
        const existingIndex = packedItems.findIndex((i)=>i.id === item.id);
        if (existingIndex === -1) {
            // Предмета ещё нет в сумке — кладём первую единицу
            const newItem = {
                ...item,
                qty: 1
            };
            // 🟢 Сохраняем температуру морозилки, если это хладоэлемент
            if (item.category === 'transport') {
                const existingTransport = packedItems.find((i)=>i.category === 'transport');
                if (existingTransport) {
                    setValidationWarning("В сумке уже есть хладоэлемент! Выложите старый перед заменой.");
                    return;
                }
                const newItems = [
                    ...packedItems,
                    {
                        ...item,
                        packedAtTemp: freezerTemp
                    }
                ];
                setPackedItems(newItems);
                if (typeof onUpdate === 'function') {
                    onUpdate({
                        kitResults: newItems
                    });
                }
            } else if (item.category === 'divider') {
                // Перегородка — расходник, не ограничиваем количество в сумке-укладчике,
                // но один и тот же id дважды не кладём (аналогично прочим неуникальным предметам)
                const existing = packedItems.some((i)=>i.id === item.id);
                if (existing) {
                    setValidationWarning("");
                    return;
                }
                const newItems = [
                    ...packedItems,
                    item
                ];
                setPackedItems(newItems);
                if (typeof onUpdate === 'function') {
                    onUpdate({
                        kitResults: newItems
                    });
                }
            } else {
                const existing = packedItems.some((i)=>i.id === item.id);
                if (existing) {
                    setValidationWarning("");
                    return;
                }
                const newItems = [
                    ...packedItems,
                    item
                ];
                setPackedItems(newItems);
                if (typeof onUpdate === 'function') {
                    onUpdate({
                        kitResults: newItems
                    });
                }
                newItem.packedAtTemp = freezerTemp;
            }
            const newItems = [
                ...packedItems,
                newItem
            ];
            setPackedItems(newItems);
            setValidationWarning("");
            return;
        }
        // Предмет уже есть — пытаемся добавить ещё одну штуку (если maxStack позволяет)
        const current = packedItems[existingIndex];
        if (current.qty >= maxStack) {
            setValidationWarning(`Достигнут предел: больше ${maxStack} шт. этого предмета в сумку не положить.`);
            return;
        }
        const newItems = packedItems.map((i, idx)=>idx === existingIndex ? {
                ...i,
                qty: i.qty + 1
            } : i);
        setPackedItems(newItems);
        setValidationWarning("");
    };
    // Убрать ровно 1 штуку (а не весь стек) — удобно, если случайно перебрал
    const handleUnpackOne = (itemId)=>{
        setPackedItems((prev)=>{
            const next = prev.map((i)=>i.id === itemId ? {
                    ...i,
                    qty: i.qty - 1
                } : i).filter((i)=>i.qty > 0);
            return next;
        });
    };
    const handleUnpack = (itemId)=>{
        const newItems = packedItems.filter((i)=>i.id !== itemId);
        setPackedItems(newItems);
    };
    const handleRowClick = (item)=>{
        handlePack(item);
    };
    const handleContextMenu = (e, item)=>{
        e.preventDefault(); // Отключаем стандартное контекстное меню браузера
        const isPacked = packedItems.some((i)=>i.id === item.id);
        // Если предмет уже есть в сумке, убавляем его количество на 1
        if (isPacked) {
            handleUnpackOne(item.id);
        }
    };
    const handleMouseEnter = (item, e)=>{
        clearTimeout(hoverTimeout.current);
        const rect = e.currentTarget.getBoundingClientRect();
        setHoveredItem({
            item,
            rect
        });
    };
    const handleMouseLeave = ()=>{
        hoverTimeout.current = setTimeout(()=>setHoveredItem(null), 80);
    };
    const handleCompleteKit = ()=>{
        if (packedItems.length === 0) {
            setValidationWarning("Ваша сумка пуста! Соберите необходимый инвентарь перед выездом.");
            return;
        }
        setValidationWarning("");
        let score = 100;
        let errors = [];
        const packedCategories = packedItems.map((i)=>i.category);
        if (!packedCategories.includes('disinfection')) {
            errors.push("Критическая ошибка: Вы забыли взять спиртовые салфетки для дезинфекции крана!");
            score -= 20;
        }
        if (!packedCategories.includes('burner')) {
            errors.push("Критическая ошибка: Вы забыли инструменты для прокаливания крана (горелку)!");
            score -= 20;
        }
        if (!packedCategories.includes('safety')) {
            errors.push("Критическая ошибка: Вы забыли взять стерильные перчатки!");
            score -= 20;
        }
        if (!packedCategories.includes('safety_goggles')) {
            errors.push("Нарушение ТБ: Вы оставили в лаборатории защитные очки при работе с горелкой.");
            score -= 10;
        }
        if (!packedCategories.includes('marking')) {
            errors.push("Ошибка маркировки: Вы не взяли пишущий инструмент для подписи флаконов.");
            score -= 10;
        }
        if (!packedCategories.includes('transport')) {
            errors.push("Критическая ошибка: Вы забыли сумку-холодильник с хладоэлементами!");
            score -= 20;
        }
        // НОВАЯ ПРОВЕРКА НА ИНСТРУМЕНТ ДЛЯ АЭРАТОРА:
        if (!packedCategories.includes('tools')) {
            errors.push("Критическая ошибка: Вы забыли взять инструмент для демонтажа сеточки-аэратора с водопроводного крана.");
            score -= 15;
        }
        // ПРОВЕРКА НА ИЗОЛИРУЮЩУЮ ПЕРЕГОРОДКУ (Stage4 потребует её для упаковки):
        if (!packedCategories.includes('divider')) {
            errors.push("Критическая ошибка: Вы не взяли материал для теплоизолирующей перегородки между хладоэлементом и пробами — без неё пробы при транспортировке могут переохладиться или замёрзнуть.");
            score -= 15;
        }
        packedItems.forEach((item)=>{
            if (item.category === 'transport') {
                if (!item.isCorrect) {
                    errors.push(item.error);
                    score -= 15;
                }
                if (item.packedAtTemp > REQUIRED_FREEZER_TEMP) {
                    errors.push(`Температурный режим: Вы уложили хладоэлементы из камеры при ${item.packedAtTemp}°C (требуется ${REQUIRED_FREEZER_TEMP}°C и ниже, режим «Суперзаморозка», 12–24+ ч). Элементы быстро растаяли, пробы нагрелись.`);
                    score -= 20;
                }
            } else if (!item.isCorrect) {
                errors.push(item.error);
                score -= 15;
            }
            // Мягкая проверка на избыточный запас расходников — не критично,
            // но отражает нерациональный расход материалов лаборатории.
            const reasonableQty = REASONABLE_QTY[item.id];
            if (reasonableQty && item.qty > reasonableQty) {
                errors.push(`Нерациональный расход: вы взяли ${item.qty} шт. «${item.name}», хотя по протоколу обычно достаточно ${reasonableQty}. Избыточный запас расходников — лишняя нагрузка на бюджет лаборатории.`);
                score -= 5;
            }
        });
        onComplete({
            kitResults: packedItems,
            kitErrors: errors,
            kitScore: Math.max(0, score)
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white w-full max-w-6xl rounded-b-xl rounded-tr-xl shadow-xl border border-slate-200 overflow-hidden mb-6 flex flex-col lg:flex-row relative",
        children: [
            hoveredItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemTooltip, {
                item: hoveredItem.item,
                rect: hoveredItem.rect,
                freezerTemp: freezerTemp,
                setFreezerTemp: setFreezerTemp,
                requiredTemp: REQUIRED_FREEZER_TEMP,
                onMouseEnter: ()=>clearTimeout(hoverTimeout.current),
                onMouseLeave: handleMouseLeave
            }, void 0, false, {
                fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                lineNumber: 232,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full lg:w-1/2 p-8 border-r border-slate-100 bg-slate-50 flex flex-col gap-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-slate-800",
                                    children: "Поиск на складе лаборатории"
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                                    lineNumber: 248,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-500 text-xs mt-1",
                                    children: "Наведите курсор, чтобы увидеть описание. Клик — положить в сумку (повторный клик добавит ещё одну штуку, если предмет можно взять в нескольких экземплярах)."
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                                    lineNumber: 249,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                            lineNumber: 247,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400",
                                    children: "🔍"
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                                    lineNumber: 255,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Начните вводить название...",
                                    value: searchQuery,
                                    onChange: (e)=>setSearchQuery(e.target.value),
                                    className: "w-full pl-10 pr-10 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all text-black"
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                                    lineNumber: 256,
                                    columnNumber: 13
                                }, this),
                                searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSearchQuery(""),
                                    className: "absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                                    lineNumber: 264,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                            lineNumber: 254,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 max-h-[420px] overflow-y-auto border-t border-slate-100 pt-2 empty:hidden",
                            children: [
                                searchQuery && searchResults.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-slate-400 italic text-center py-4",
                                    children: "Ничего не найдено. Нужно минимум 4 символа. Попробуйте другой запрос."
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                                    lineNumber: 275,
                                    columnNumber: 15
                                }, this),
                                searchResults.map((item)=>{
                                    const packedEntry = packedItems.find((i)=>i.id === item.id);
                                    const isPacked = !!packedEntry;
                                    const maxStack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMaxStack"])(item.id);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleRowClick(item),
                                        onContextMenu: (e)=>handleContextMenu(e, item),
                                        onMouseEnter: (e)=>handleMouseEnter(item, e),
                                        onMouseLeave: handleMouseLeave,
                                        className: `w-full text-left p-3 rounded-lg border mb-1.5 flex items-center justify-between text-sm transition-all
                    ${isPacked ? 'border-emerald-300 bg-emerald-50 font-bold' : 'border-slate-100 bg-slate-50 hover:bg-blue-50 hover:border-blue-300'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2.5 truncate",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-lg",
                                                        children: CATEGORY_ICON[item.category]
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                                                        lineNumber: 295,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-slate-700 truncate",
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                                                        lineNumber: 296,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                                                lineNumber: 294,
                                                columnNumber: 19
                                            }, this),
                                            isPacked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[9px] font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full shrink-0",
                                                children: [
                                                    "В сумке ",
                                                    maxStack > 1 ? `×${packedEntry.qty}` : '✓'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                                                lineNumber: 299,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[9px] font-bold text-blue-500 px-2 py-0.5 rounded-full shrink-0 opacity-0 group-hover:opacity-100",
                                                children: "Клик → в сумку"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                                                lineNumber: 303,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                                        lineNumber: 285,
                                        columnNumber: 17
                                    }, this);
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                            lineNumber: 273,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                    lineNumber: 246,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                lineNumber: 244,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full lg:w-1/2 p-8 bg-slate-50 flex flex-col justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-bold text-slate-800 mb-4 border-b pb-2 flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "👜 Сумка-укладчик"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                                        lineNumber: 319,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-blue-600 text-white text-xs px-2.5 py-1 rounded-full font-bold",
                                        children: packedItems.reduce((sum, i)=>sum + (i.qty || 1), 0)
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                                        lineNumber: 320,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                                lineNumber: 318,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 max-h-[460px] overflow-y-auto",
                                children: packedItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center text-slate-400 text-sm p-8 border-2 border-dashed border-slate-200 rounded-xl bg-white",
                                    children: "Сумка пуста. Найдите и кликните на предметы слева."
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                                    lineNumber: 327,
                                    columnNumber: 15
                                }, this) : packedItems.map((item)=>{
                                    const maxStack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMaxStack"])(item.id);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onMouseEnter: (e)=>handleMouseEnter(item, e),
                                        onMouseLeave: handleMouseLeave,
                                        className: "bg-white p-3 rounded-lg border border-slate-200 text-xs flex justify-between items-center shadow-sm hover:border-blue-300 transition-all cursor-default",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-2 font-semibold text-slate-700 truncate pr-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-base",
                                                        children: CATEGORY_ICON[item.category]
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                                                        lineNumber: 339,
                                                        columnNumber: 23
                                                    }, this),
                                                    item.name,
                                                    maxStack > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] font-mono bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-bold",
                                                        children: [
                                                            "×",
                                                            item.qty
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                                                        lineNumber: 342,
                                                        columnNumber: 25
                                                    }, this),
                                                    item.category === 'transport' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded",
                                                        children: [
                                                            item.packedAtTemp,
                                                            "°C"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                                                        lineNumber: 347,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                                                lineNumber: 338,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1 shrink-0",
                                                children: [
                                                    maxStack > 1 && item.qty > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleUnpackOne(item.id),
                                                        title: "Убрать одну штуку",
                                                        className: "text-slate-400 hover:text-slate-600 text-sm w-5 h-5 flex items-center justify-center rounded hover:bg-slate-100",
                                                        children: "−"
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                                                        lineNumber: 354,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleUnpack(item.id),
                                                        title: "Убрать всё",
                                                        className: "text-red-400 hover:text-red-600 text-base",
                                                        children: "✖"
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                                                        lineNumber: 360,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                                                lineNumber: 352,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                                        lineNumber: 334,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                                lineNumber: 325,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                        lineNumber: 317,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8",
                        children: [
                            validationWarning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-xs font-bold mb-2 text-center bg-red-50 p-2 rounded",
                                children: validationWarning
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                                lineNumber: 371,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleCompleteKit,
                                className: "w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-4 rounded-xl shadow-md transition-all transform hover:-translate-y-1",
                                children: "Подтвердить укладку →"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                                lineNumber: 372,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                        lineNumber: 370,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                lineNumber: 316,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
        lineNumber: 229,
        columnNumber: 5
    }, this);
}
function ItemTooltip({ item, rect, freezerTemp, setFreezerTemp, requiredTemp, onMouseEnter, onMouseLeave }) {
    if (!rect) return null;
    const isTransport = item.category === 'transport';
    const tooltipWidth = isTransport ? 320 : 280;
    const viewportWidth = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 1200;
    const spaceOnRight = viewportWidth - rect.right;
    const placeLeft = spaceOnRight < tooltipWidth + 24;
    const style = {
        position: 'fixed',
        top: Math.max(12, rect.top + rect.height / 2 - 90),
        left: placeLeft ? Math.max(12, rect.left - tooltipWidth - 12) : rect.right + 12,
        width: tooltipWidth,
        zIndex: 60
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: style,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        className: "rounded-xl border border-slate-200 bg-white shadow-2xl p-4 animate-fade-in pointer-events-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-2 mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xl shrink-0",
                        children: CATEGORY_ICON[item.category]
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                        lineNumber: 411,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "font-bold text-slate-800 text-sm leading-snug",
                        children: item.name
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                        lineNumber: 412,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                lineNumber: 410,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-slate-600 text-xs leading-relaxed",
                children: item.desc
            }, void 0, false, {
                fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                lineNumber: 414,
                columnNumber: 7
            }, this),
            isTransport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 pt-3 border-t border-slate-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-900 rounded-xl p-4 border-2 border-slate-800 text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center mb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-400 text-[10px] font-mono",
                                    children: "МЕДИЦИНСКИЙ МОРОЗИЛЬНИК"
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                                    lineNumber: 420,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                                lineNumber: 419,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl font-mono font-bold tracking-wider text-slate-100 mb-2",
                                children: [
                                    freezerTemp,
                                    "°C"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                                lineNumber: 422,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: "-30",
                                max: "0",
                                step: "1",
                                value: freezerTemp,
                                onChange: (e)=>setFreezerTemp(parseInt(e.target.value)),
                                className: "w-full cursor-pointer accent-blue-500",
                                onClick: (e)=>e.stopPropagation()
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                                lineNumber: 425,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-[8px] text-slate-500 mt-1 font-mono",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "-30°C"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                                        lineNumber: 433,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "0°C"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                                        lineNumber: 433,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                                lineNumber: 432,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                        lineNumber: 418,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] text-slate-500 leading-relaxed mt-2",
                        children: [
                            "Требуется ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "12–24+ часов"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                                lineNumber: 437,
                                columnNumber: 23
                            }, this),
                            " охлаждения."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                        lineNumber: 436,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
                lineNumber: 417,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/steps/Stage1/Step3_FieldKit.jsx",
        lineNumber: 404,
        columnNumber: 5
    }, this);
}
}),
"[project]/steps/Stage1/Report.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Stage1Report
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// steps/Stage1/Report.js
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$InventoryContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/InventoryContext.jsx [app-ssr] (ecmascript)");
;
;
;
function Stage1Report({ logs, onContinue }) {
    const inventory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$InventoryContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInventoryContext"])();
    const [notification, setNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [missingItemsList, setMissingItemsList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Используем useRef вместо useState для отслеживания добавления
    const itemsAddedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Проверяем, есть ли правильные конфигурации
    const hasCorrectChem = logs.chemResults?.some((res)=>res.isPerfect === true) || false;
    const hasCorrectBio = logs.bioResults?.some((res)=>res.isPerfect === true) || false;
    // Новая система оценок: 100 если есть правильный вариант, иначе 0
    const chemScore = hasCorrectChem ? 100 : 0;
    const bioScore = hasCorrectBio ? 100 : 0;
    const kitScore = logs.kitScore || 0;
    // Пересчитываем средний балл
    const averageScore = Math.round((chemScore + bioScore + kitScore) / 3);
    // Функция для определения забытых предметов
    const getMissingItems = ()=>{
        const missing = [];
        // ========== 1. ПРОВЕРКА ХИМИЧЕСКОЙ ТАРЫ ==========
        if (logs.chemResults && logs.chemResults.length > 0) {
            // Проверяем, есть ли правильные конфигурации
            const hasCorrectChem = logs.chemResults.some((res)=>res.isPerfect === true);
            if (!hasCorrectChem) {
                // Если нет ни одной правильной конфигурации - даем обе
                missing.push({
                    id: 'chem_tare_hdpe',
                    name: 'Тара Хим. — HDPE (Полиэтилен низкого давления) (2л)',
                    qty: 1,
                    reason: 'Для химического анализа (HDPE)',
                    emoji: '🧪'
                });
                missing.push({
                    id: 'chem_tare_pp',
                    name: 'Тара Хим. — PP (Полипропилен) (2л)',
                    qty: 1,
                    reason: 'Для химического анализа (PP)',
                    emoji: '🧪'
                });
            } else {
                // Если есть правильная конфигурация - проверяем каждую отдельно
                const hasHDPE = logs.chemResults.some((res)=>res.isPerfect && res.configKey?.includes('hdpe'));
                const hasPP = logs.chemResults.some((res)=>res.isPerfect && res.configKey?.includes('pp'));
                if (!hasHDPE) {
                    missing.push({
                        id: 'chem_tare_hdpe',
                        name: 'Тара Хим. — HDPE (Полиэтилен низкого давления) (2л)',
                        qty: 1,
                        reason: 'Для химического анализа (HDPE)',
                        emoji: '🧪'
                    });
                }
                if (!hasPP) {
                    missing.push({
                        id: 'chem_tare_pp',
                        name: 'Тара Хим. — PP (Полипропилен) (2л)',
                        qty: 1,
                        reason: 'Для химического анализа (PP)',
                        emoji: '🧪'
                    });
                }
            }
        } else {
            // Если нет результатов химии - даем обе
            missing.push({
                id: 'chem_tare_hdpe',
                name: 'Тара Хим. — HDPE (Полиэтилен низкого давления) (2л)',
                qty: 1,
                reason: 'Для химического анализа (HDPE)',
                emoji: '🧪'
            });
            missing.push({
                id: 'chem_tare_pp',
                name: 'Тара Хим. — PP (Полипропилен) (2л)',
                qty: 1,
                reason: 'Для химического анализа (PP)',
                emoji: '🧪'
            });
        }
        // ========== 2. ПРОВЕРКА БАКТЕРИОЛОГИЧЕСКОЙ ТАРЫ ==========
        if (logs.bioResults && logs.bioResults.length > 0) {
            // Проверяем, есть ли правильные конфигурации
            const hasCorrectBio = logs.bioResults.some((res)=>res.isPerfect === true);
            if (!hasCorrectBio) {
                // Если нет ни одной правильной конфигурации - даем обе
                missing.push({
                    id: 'bio_tare_glass_boro',
                    name: 'Тара Био — Боросиликатное стекло (0.5л)',
                    qty: 1,
                    reason: 'Для бактериологического анализа (боросиликатное стекло)',
                    emoji: '🧫'
                });
                missing.push({
                    id: 'bio_tare_plastic_thermo',
                    name: 'Тара Био — Термостойкий пластик (PC/PP) (0.5л)',
                    qty: 1,
                    reason: 'Для бактериологического анализа (термостойкий пластик)',
                    emoji: '🧫'
                });
            } else {
                // Если есть правильная конфигурация - проверяем каждую отдельно
                const hasGlassBoro = logs.bioResults.some((res)=>res.isPerfect && res.configKey?.includes('glass_boro'));
                const hasPlasticThermo = logs.bioResults.some((res)=>res.isPerfect && res.configKey?.includes('plastic_thermo'));
                if (!hasGlassBoro) {
                    missing.push({
                        id: 'bio_tare_glass_boro',
                        name: 'Тара Био — Боросиликатное стекло (0.5л)',
                        qty: 1,
                        reason: 'Для бактериологического анализа (боросиликатное стекло)',
                        emoji: '🧫'
                    });
                }
                if (!hasPlasticThermo) {
                    missing.push({
                        id: 'bio_tare_plastic_thermo',
                        name: 'Тара Био — Термостойкий пластик (PC/PP) (0.5л)',
                        qty: 1,
                        reason: 'Для бактериологического анализа (термостойкий пластик)',
                        emoji: '🧫'
                    });
                }
            }
        } else {
            // Если нет результатов бактериологии - даем обе
            missing.push({
                id: 'bio_tare_glass_boro',
                name: 'Тара Био — Боросиликатное стекло (0.5л)',
                qty: 1,
                reason: 'Для бактериологического анализа (боросиликатное стекло)',
                emoji: '🧫'
            });
            missing.push({
                id: 'bio_tare_plastic_thermo',
                name: 'Тара Био — Термостойкий пластик (PC/PP) (0.5л)',
                qty: 1,
                reason: 'Для бактериологического анализа (термостойкий пластик)',
                emoji: '🧫'
            });
        }
        // ========== 3. ПРОВЕРКА ПОЛЕВОЙ СУМКИ ==========
        if (!logs.kitResults || logs.kitResults.length === 0) {
            // Если сумка пуста - добавляем все критические предметы
            missing.push({
                id: 'ethyl_wipes',
                name: 'Салфетки этиловые',
                qty: 3,
                reason: 'Для дезинфекции крана',
                emoji: '🧻'
            }, {
                id: 'gas_burner',
                name: 'Портативная горелка',
                qty: 1,
                reason: 'Для прокаливания крана',
                emoji: '🔥'
            }, {
                id: 'sterile_gloves',
                name: 'Перчатки стерильные',
                qty: 2,
                reason: 'Для работы на объекте',
                emoji: '🧤'
            }, {
                id: 'safety_goggles',
                name: 'Очки защитные',
                qty: 1,
                reason: 'Для безопасности при работе с горелкой',
                emoji: '🥽'
            }, {
                id: 'waterproof_marker',
                name: 'Маркер перманентный',
                qty: 1,
                reason: 'Для маркировки проб',
                emoji: '🖊️'
            }, {
                id: 'ice_eutectic',
                name: 'Эвтектический хладоэлемент',
                qty: 5,
                reason: 'Для охлаждения проб при транспортировке',
                emoji: '🧊'
            }, {
                id: 'aerator_key_special',
                name: 'Специальный ключ для скрытых аэраторов',
                qty: 1,
                reason: 'Для демонтажа сеточки-аэратора',
                emoji: '🔧'
            }, {
                id: 'divider_foam',
                name: 'Перегородка из пенопласта',
                qty: 5,
                reason: 'Для теплоизоляции проб от хладоэлементов',
                emoji: '📦'
            });
            return missing;
        }
        const packedItems = logs.kitResults;
        // Функция для подсчета количества конкретного предмета
        const getItemQty = (id)=>{
            const item = packedItems.find((i)=>i.id === id);
            return item ? item.qty || 1 : 0;
        };
        // Проверяем наличие по ID
        const hasId = (id)=>packedItems.some((i)=>i.id === id);
        // 3.1 Салфетки - если нет ни одного вида, даем 3 этиловых
        if (!hasId('ethyl_wipes') && !hasId('isop_wipes')) {
            missing.push({
                id: 'ethyl_wipes',
                name: 'Салфетки этиловые',
                qty: 3,
                reason: 'Для дезинфекции крана',
                emoji: '🧻'
            });
        }
        // 3.2 Горелка - если нет, даем 1
        if (!hasId('gas_burner')) {
            missing.push({
                id: 'gas_burner',
                name: 'Портативная горелка',
                qty: 1,
                reason: 'Для прокаливания крана',
                emoji: '🔥'
            });
        }
        // 3.3 Перчатки - если меньше 2, добавляем до 2
        const glovesQty = getItemQty('sterile_gloves');
        if (glovesQty < 2) {
            missing.push({
                id: 'sterile_gloves',
                name: 'Перчатки стерильные',
                qty: 2 - glovesQty,
                reason: `Взято ${glovesQty} шт., нужно 2 шт. для работы на объекте`,
                emoji: '🧤'
            });
        }
        // 3.4 Очки - если нет, даем 1
        if (!hasId('safety_goggles')) {
            missing.push({
                id: 'safety_goggles',
                name: 'Очки защитные',
                qty: 1,
                reason: 'Для безопасности при работе с горелкой',
                emoji: '🥽'
            });
        }
        // 3.5 Маркер - если нет, даем 1
        if (!hasId('waterproof_marker')) {
            missing.push({
                id: 'waterproof_marker',
                name: 'Маркер перманентный',
                qty: 1,
                reason: 'Для маркировки проб',
                emoji: '🖊️'
            });
        }
        // 3.6 Хладоэлементы - должно быть 5
        const iceQty = getItemQty('ice_eutectic') + getItemQty('ice_gel') + getItemQty('ice_silicone');
        if (iceQty < 5) {
            missing.push({
                id: 'ice_eutectic',
                name: 'Эвтектический хладоэлемент',
                qty: 5 - iceQty,
                reason: `Взято ${iceQty} шт., нужно 5 шт. для охлаждения проб при транспортировке`,
                emoji: '🧊'
            });
        }
        // 3.7 Инструменты для аэратора - если нет, даем 1
        const hasTool = hasId('aerator_key_special') || hasId('adjustable_wrench');
        if (!hasTool) {
            missing.push({
                id: 'aerator_key_special',
                name: 'Специальный ключ для скрытых аэраторов',
                qty: 1,
                reason: 'Для демонтажа сеточки-аэратора',
                emoji: '🔧'
            });
        }
        // 3.8 Перегородки - должно быть 5
        const dividerQty = getItemQty('divider_cardboard') + getItemQty('divider_foam');
        if (dividerQty < 5) {
            missing.push({
                id: 'divider_foam',
                name: 'Перегородка из пенопласта',
                qty: 5 - dividerQty,
                reason: `Взято ${dividerQty} шт., нужно 5 шт. для теплоизоляции проб от хладоэлементов`,
                emoji: '📦'
            });
        }
        return missing;
    };
    // Автоматически добавляем забытые предметы при загрузке
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Проверяем, были ли уже добавлены предметы
        if (itemsAddedRef.current) {
            return; // Уже добавили - выходим
        }
        const missing = getMissingItems();
        setMissingItemsList(missing);
        if (missing.length > 0) {
            // Подготавливаем все предметы для добавления
            const itemsToAdd = missing.map((item)=>({
                    id: item.id,
                    name: item.name,
                    qty: item.qty || 1
                }));
            // Добавляем все за один раз
            inventory.addMultipleItems(itemsToAdd);
            // Отмечаем, что предметы добавлены
            itemsAddedRef.current = true;
            setNotification({
                type: 'warning',
                message: `📦 В инвентарь добавлены забытые предметы: ${missing.map((i)=>`${i.emoji} ${i.name} (${i.qty} шт.)`).join(', ')}`
            });
            // Автоматически скрываем уведомление через 7 секунд
            setTimeout(()=>{
                setNotification(null);
            }, 7000);
        } else {
            setNotification({
                type: 'success',
                message: '✅ Все необходимые предметы собраны! Можно переходить на объект.'
            });
            // Автоматически скрываем уведомление через 3 секунды
            setTimeout(()=>{
                setNotification(null);
            }, 3000);
        }
    }, []); // Пустой массив - только при монтировании
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white w-full max-w-5xl rounded-xl shadow-xl border border-slate-200 overflow-hidden mb-6 animate-fade-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-blue-50 px-8 py-6 border-b border-blue-100 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-5xl block mb-4",
                        children: "📋"
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage1/Report.jsx",
                        lineNumber: 328,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold text-blue-900",
                        children: "Промежуточный отчет - Этап 1"
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage1/Report.jsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-blue-700 mt-2 font-medium",
                        children: "Результаты предвыездной подготовки в лаборатории"
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage1/Report.jsx",
                        lineNumber: 330,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage1/Report.jsx",
                lineNumber: 327,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-8",
                children: [
                    notification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `mb-6 p-4 rounded-xl border ${notification.type === 'success' ? 'bg-green-50 border-green-200 text-green-800' : notification.type === 'warning' ? 'bg-amber-50 border-amber-200 text-amber-800' : 'bg-blue-50 border-blue-200 text-blue-800'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-medium",
                            children: notification.message
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage1/Report.jsx",
                            lineNumber: 342,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage1/Report.jsx",
                        lineNumber: 337,
                        columnNumber: 11
                    }, this),
                    missingItemsList.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 p-4 rounded-xl border border-red-200 bg-red-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-bold text-red-800 mb-2 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "⚠️"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage1/Report.jsx",
                                        lineNumber: 350,
                                        columnNumber: 15
                                    }, this),
                                    "Забытые предметы (автоматически добавлены в инвентарь)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage1/Report.jsx",
                                lineNumber: 349,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-1",
                                children: missingItemsList.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center gap-2 text-sm text-red-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: item.emoji
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage1/Report.jsx",
                                                lineNumber: 356,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage1/Report.jsx",
                                                lineNumber: 357,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs bg-red-100 px-2 py-0.5 rounded",
                                                children: [
                                                    "+",
                                                    item.qty
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/steps/Stage1/Report.jsx",
                                                lineNumber: 358,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-red-500",
                                                children: [
                                                    "— ",
                                                    item.reason
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/steps/Stage1/Report.jsx",
                                                lineNumber: 359,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/steps/Stage1/Report.jsx",
                                        lineNumber: 355,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage1/Report.jsx",
                                lineNumber: 353,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage1/Report.jsx",
                        lineNumber: 348,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap justify-center gap-4 mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-50 border-2 border-slate-200 rounded-2xl p-5 text-center w-full sm:w-44 shadow-inner",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-500 font-bold mb-1 text-[10px] uppercase tracking-wider",
                                        children: "Хим. Анализ"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage1/Report.jsx",
                                        lineNumber: 370,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `text-3xl font-black ${chemScore === 100 ? 'text-green-600' : 'text-red-600'}`,
                                        children: [
                                            chemScore,
                                            "/100"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage1/Report.jsx",
                                        lineNumber: 371,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-semibold mt-2 text-slate-600",
                                        children: hasCorrectChem ? "✅ Есть правильный вариант" : "❌ Нет правильных"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage1/Report.jsx",
                                        lineNumber: 374,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage1/Report.jsx",
                                lineNumber: 369,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-50 border-2 border-slate-200 rounded-2xl p-5 text-center w-full sm:w-44 shadow-inner",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-500 font-bold mb-1 text-[10px] uppercase tracking-wider",
                                        children: "Бактериология"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage1/Report.jsx",
                                        lineNumber: 380,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `text-3xl font-black ${bioScore === 100 ? 'text-green-600' : 'text-red-600'}`,
                                        children: [
                                            bioScore,
                                            "/100"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage1/Report.jsx",
                                        lineNumber: 381,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-semibold mt-2 text-slate-600",
                                        children: hasCorrectBio ? "✅ Есть правильный вариант" : "❌ Нет правильных"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage1/Report.jsx",
                                        lineNumber: 384,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage1/Report.jsx",
                                lineNumber: 379,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-50 border-2 border-slate-200 rounded-2xl p-5 text-center w-full sm:w-44 shadow-inner",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-500 font-bold mb-1 text-[10px] uppercase tracking-wider",
                                        children: "Полевая сумка"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage1/Report.jsx",
                                        lineNumber: 390,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `text-3xl font-black ${kitScore === 100 ? 'text-green-600' : kitScore >= 50 ? 'text-amber-500' : 'text-red-600'}`,
                                        children: [
                                            kitScore,
                                            "/100"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage1/Report.jsx",
                                        lineNumber: 391,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-semibold mt-2 text-slate-600",
                                        children: logs.kitErrors?.length === 0 ? "🌟 Без ошибок" : `Ошибок: ${logs.kitErrors?.length || 0}`
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage1/Report.jsx",
                                        lineNumber: 394,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage1/Report.jsx",
                                lineNumber: 389,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-blue-900 border-2 border-blue-950 rounded-2xl p-5 text-center w-full sm:w-44 shadow-md text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-blue-300 font-bold mb-1 text-[10px] uppercase tracking-wider",
                                        children: "Средний балл"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage1/Report.jsx",
                                        lineNumber: 400,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-4xl font-black",
                                        children: averageScore
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage1/Report.jsx",
                                        lineNumber: 401,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-semibold mt-2 text-blue-200",
                                        children: averageScore >= 80 ? "🎓 Отлично" : averageScore >= 50 ? "⚠️ Требует внимания" : "❌ Требуется пересдача"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage1/Report.jsx",
                                        lineNumber: 404,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage1/Report.jsx",
                                lineNumber: 399,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage1/Report.jsx",
                        lineNumber: 367,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-slate-800 mb-4 border-b pb-2",
                        children: "1. Химический анализ:"
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage1/Report.jsx",
                        lineNumber: 412,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3 mb-8",
                        children: logs.chemResults && logs.chemResults.length > 0 ? logs.chemResults.map((res, idx)=>{
                            // Если есть хотя бы одна правильная - все зачтено
                            const isSuccess = hasCorrectChem;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-4 rounded-xl border ${isSuccess ? 'bg-green-50 border-green-200' : res.isPerfect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `font-bold text-md mb-2 flex items-center ${isSuccess ? 'text-green-800' : res.isPerfect ? 'text-green-800' : 'text-red-800'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2",
                                                children: isSuccess ? '✅' : res.isPerfect ? '✅' : '❌'
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage1/Report.jsx",
                                                lineNumber: 422,
                                                columnNumber: 21
                                            }, this),
                                            "Вариант ",
                                            res.id,
                                            ": ",
                                            res.name,
                                            isSuccess && !res.isPerfect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 text-xs text-green-600 font-normal",
                                                children: "(зачтено, есть правильный вариант)"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage1/Report.jsx",
                                                lineNumber: 424,
                                                columnNumber: 53
                                            }, this),
                                            isSuccess && res.isPerfect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 text-xs text-green-600 font-normal",
                                                children: "(✅ правильный)"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage1/Report.jsx",
                                                lineNumber: 425,
                                                columnNumber: 52
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage1/Report.jsx",
                                        lineNumber: 421,
                                        columnNumber: 19
                                    }, this),
                                    !isSuccess && !res.isPerfect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-1",
                                        children: (res.errs || []).map((err, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start text-sm text-slate-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-500 mr-2",
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage1/Report.jsx",
                                                        lineNumber: 431,
                                                        columnNumber: 27
                                                    }, this),
                                                    err
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/steps/Stage1/Report.jsx",
                                                lineNumber: 430,
                                                columnNumber: 25
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage1/Report.jsx",
                                        lineNumber: 428,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, `chem-${res.id}-${idx}`, true, {
                                fileName: "[project]/steps/Stage1/Report.jsx",
                                lineNumber: 420,
                                columnNumber: 17
                            }, this);
                        }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-500 italic",
                            children: "Нет данных"
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage1/Report.jsx",
                            lineNumber: 440,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage1/Report.jsx",
                        lineNumber: 413,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-slate-800 mb-4 border-b pb-2",
                        children: "2. Бактериологический анализ:"
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage1/Report.jsx",
                        lineNumber: 445,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3 mb-8",
                        children: logs.bioResults && logs.bioResults.length > 0 ? logs.bioResults.map((res, idx)=>{
                            // Если есть хотя бы одна правильная - все зачтено
                            const isSuccess = hasCorrectBio;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-4 rounded-xl border ${isSuccess ? 'bg-green-50 border-green-200' : res.isPerfect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `font-bold text-md mb-2 flex items-center ${isSuccess ? 'text-green-800' : res.isPerfect ? 'text-green-800' : 'text-red-800'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2",
                                                children: isSuccess ? '✅' : res.isPerfect ? '✅' : '❌'
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage1/Report.jsx",
                                                lineNumber: 455,
                                                columnNumber: 21
                                            }, this),
                                            "Вариант ",
                                            res.id,
                                            ": ",
                                            res.name,
                                            isSuccess && !res.isPerfect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 text-xs text-green-600 font-normal",
                                                children: "(зачтено, есть правильный вариант)"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage1/Report.jsx",
                                                lineNumber: 457,
                                                columnNumber: 53
                                            }, this),
                                            isSuccess && res.isPerfect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 text-xs text-green-600 font-normal",
                                                children: "(✅ правильный)"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage1/Report.jsx",
                                                lineNumber: 458,
                                                columnNumber: 52
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage1/Report.jsx",
                                        lineNumber: 454,
                                        columnNumber: 19
                                    }, this),
                                    !isSuccess && !res.isPerfect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-1",
                                        children: (res.errs || []).map((err, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start text-sm text-slate-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-500 mr-2",
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage1/Report.jsx",
                                                        lineNumber: 464,
                                                        columnNumber: 27
                                                    }, this),
                                                    err
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/steps/Stage1/Report.jsx",
                                                lineNumber: 463,
                                                columnNumber: 25
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage1/Report.jsx",
                                        lineNumber: 461,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, `bio-${res.id}-${idx}`, true, {
                                fileName: "[project]/steps/Stage1/Report.jsx",
                                lineNumber: 453,
                                columnNumber: 17
                            }, this);
                        }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-500 italic",
                            children: "Нет данных"
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage1/Report.jsx",
                            lineNumber: 473,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage1/Report.jsx",
                        lineNumber: 446,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-slate-800 mb-4 border-b pb-2",
                        children: "3. Комплектация полевой сумки:"
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage1/Report.jsx",
                        lineNumber: 478,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3 mb-8",
                        children: logs.kitErrors && logs.kitErrors.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-green-50 border border-green-200 p-5 rounded-xl text-green-800 flex items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl mr-3",
                                    children: "✅"
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage1/Report.jsx",
                                    lineNumber: 482,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-bold text-lg",
                                            children: "Сумка укомплектована верно"
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage1/Report.jsx",
                                            lineNumber: 484,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm",
                                            children: "Вы взяли все средства дезинфекции, безопасности, контроля температуры и маркировки строго по стандартам."
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage1/Report.jsx",
                                            lineNumber: 485,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/steps/Stage1/Report.jsx",
                                    lineNumber: 483,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/steps/Stage1/Report.jsx",
                            lineNumber: 481,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-red-50 border border-red-200 p-5 rounded-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold text-red-800 text-lg mb-3 flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mr-2",
                                            children: "❌"
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage1/Report.jsx",
                                            lineNumber: 491,
                                            columnNumber: 17
                                        }, this),
                                        " Обнаружены ошибки при сборе сумки:"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/steps/Stage1/Report.jsx",
                                    lineNumber: 490,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2",
                                    children: (logs.kitErrors || []).map((err, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start bg-white p-3 rounded-lg border border-red-100 shadow-sm text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500 font-bold mr-3",
                                                    children: "•"
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage1/Report.jsx",
                                                    lineNumber: 496,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-700 font-medium",
                                                    children: err
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage1/Report.jsx",
                                                    lineNumber: 497,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/steps/Stage1/Report.jsx",
                                            lineNumber: 495,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage1/Report.jsx",
                                    lineNumber: 493,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/steps/Stage1/Report.jsx",
                            lineNumber: 489,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage1/Report.jsx",
                        lineNumber: 479,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center border-t pt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onContinue,
                            className: "bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-md transition-all transform hover:-translate-y-1",
                            children: "✅ Продолжить на Этап 2"
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage1/Report.jsx",
                            lineNumber: 507,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage1/Report.jsx",
                        lineNumber: 506,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage1/Report.jsx",
                lineNumber: 333,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/steps/Stage1/Report.jsx",
        lineNumber: 324,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=steps_Stage1_0wdvrv4._.js.map