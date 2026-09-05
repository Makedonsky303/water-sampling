(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/steps/Stage2/Step1_SitePrep.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Step1_SitePrep
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FaucetSVG$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/FaucetSVG.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$MinecraftInventory$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/MinecraftInventory.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$InventoryContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/InventoryContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$Avatar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/Avatar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/itemRegistry.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// steps/Stage2/Step1_SitePrep.jsx
'use client';
;
;
;
;
;
;
function Step1_SitePrep({ logs, onComplete }) {
    _s();
    // Получаем состояние инвентаря из глобального Provider (который обернут вокруг всех шагов)
    const inv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$InventoryContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInventoryContext"])();
    const equippedHelmet = inv.equippedHelmet;
    const equippedGloves = inv.equippedGloves; // null | 'sterile' | 'yellow'
    // Faucet states
    const [aeratorRemoved, setAeratorRemoved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [spotsLeft, setSpotsLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3);
    const [isWiping, setIsWiping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [warning, setWarning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // ── Faucet handlers ──
    const handleWipeSpot = ()=>{
        if (!equippedGloves) {
            setWarning('⚠️ Нельзя чистить кран голыми руками! Наденьте перчатки через инвентарь (E).');
            return;
        }
        if (isWiping || spotsLeft === 0) return;
        setWarning('');
        setIsWiping(true);
        setTimeout(()=>{
            setSpotsLeft((p)=>Math.max(0, p - 1));
            setIsWiping(false);
        }, 500);
    };
    const handleCompletePrep = ()=>{
        if (!aeratorRemoved) {
            setWarning('Необходимо демонтировать аэратор (кликните по сеточке на кране).');
            return;
        }
        if (spotsLeft > 0) {
            setWarning('Очистите носик крана от всех видимых загрязнений.');
            return;
        }
        const errors = [];
        let scorePenalty = 0;
        if (!equippedHelmet) {
            errors.push('Нарушение ТБ: Вы работали без защитных очков.');
            scorePenalty += 10;
        }
        if (!equippedGloves) {
            errors.push('Нарушение стерильности: Вы работали голыми руками.');
            scorePenalty += 20;
        } else if (equippedGloves === 'yellow') {
            errors.push('Нарушение стерильности: Использованы хозяйственные перчатки вместо стерильных.');
            scorePenalty += 15;
        }
        onComplete({
            prepErrors: errors,
            prepScorePenalty: scorePenalty,
            gogglesEquipped: equippedHelmet,
            glovesEquipped: equippedGloves
        });
    };
    const checklist = [
        {
            done: equippedHelmet && !!equippedGloves,
            label: 'Надеть СИЗ (очки + перчатки)'
        },
        {
            done: aeratorRemoved,
            label: 'Демонтировать аэратор (клик по ⚙)'
        },
        {
            done: spotsLeft === 0,
            label: 'Очистить носик крана от ржавчины'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full max-w-6xl mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes drip { 0%{transform:translateY(0);opacity:.7} 80%{transform:translateY(60px);opacity:.4} 100%{transform:translateY(70px);opacity:0} } 
        @keyframes fc_spin { to{transform:rotate(360deg)} } 
        .step-card { background:white; border-radius:20px; border:1.5px solid #e2e8f0; box-shadow:0 4px 24px rgba(0,0,0,0.07); overflow:hidden }
      `
            }, void 0, false, {
                fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$MinecraftInventory$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                slots: inv.slots,
                selectedSlot: inv.selectedSlot,
                draggedSlot: inv.draggedSlot,
                equippedHelmet: inv.equippedHelmet,
                equippedGloves: inv.equippedGloves,
                onSlotClick: inv.handleSlotClick,
                onSlotRightClick: inv.handleSlotRightClick,
                onDragStart: inv.handleDragStart,
                onDrop: inv.handleDrop,
                onDragEnd: inv.handleDragEnd,
                isOpen: inv.isOpen,
                onClose: inv.closeInventory
            }, void 0, false, {
                fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-12 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-3 step-card flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-slate-800 to-slate-900 px-6 py-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-white font-bold text-lg",
                                        children: "🎒 Снаряжение"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400 text-xs mt-1",
                                        children: "Нажмите Tab чтобы открыть инвентарь"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 flex flex-col gap-4 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: inv.openInventory,
                                        className: "w-full py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-md active:scale-95",
                                        style: {
                                            background: 'linear-gradient(135deg,#1e3a5f,#1e40af)',
                                            color: 'white'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl",
                                                children: "🗃️"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                                lineNumber: 115,
                                                columnNumber: 15
                                            }, this),
                                            "Открыть инвентарь",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-1 text-xs opacity-60 font-mono bg-white/10 px-1.5 py-0.5 rounded",
                                                children: "Tab"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                                lineNumber: 117,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl overflow-hidden flex flex-col items-center py-3 px-3",
                                        style: {
                                            background: 'linear-gradient(180deg,#1e3a5f 0%,#0f172a 100%)',
                                            border: '1px solid #1e40af'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-24 h-40",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$Avatar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                gogglesOn: equippedHelmet,
                                                glovesType: equippedGloves
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                                lineNumber: 125,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                            lineNumber: 124,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            {
                                                label: 'Голова',
                                                equipped: equippedHelmet,
                                                id: equippedHelmet ? 'safety_goggles' : null,
                                                okText: 'Очки надеты ✓',
                                                warn: false
                                            },
                                            {
                                                label: 'Руки',
                                                equipped: !!equippedGloves,
                                                id: equippedGloves === 'sterile' ? 'sterile_gloves' : equippedGloves === 'yellow' ? 'regular_gloves' : null,
                                                okText: equippedGloves === 'sterile' ? 'Стерильные ✓' : 'Хозяйственные ⚠',
                                                warn: equippedGloves === 'yellow'
                                            }
                                        ].map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `flex items-center gap-3 p-3 rounded-xl border transition-all
                    ${row.equipped ? row.warn ? 'bg-amber-50 border-amber-300' : 'bg-emerald-50 border-emerald-300' : 'bg-slate-50 border-slate-200'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl w-8 text-center",
                                                        children: row.id ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItemDef"])({
                                                            id: row.id
                                                        })?.icon || '?' : '—'
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                                        lineNumber: 144,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs font-bold text-slate-600",
                                                                children: row.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                                                lineNumber: 148,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `text-xs ${row.equipped ? row.warn ? 'text-amber-600 font-semibold' : 'text-emerald-600 font-semibold' : 'text-slate-400'}`,
                                                                children: row.equipped ? row.okText : 'Пусто'
                                                            }, void 0, false, {
                                                                fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                                                lineNumber: 149,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                                        lineNumber: 147,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, row.label, true, {
                                                fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                                lineNumber: 139,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1.5",
                                                children: [
                                                    "В руке — ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-300 font-mono",
                                                        children: "← →"
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                                        lineNumber: 160,
                                                        columnNumber: 26
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                                lineNumber: 159,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-9 gap-1 p-2 rounded-xl bg-slate-900",
                                                children: inv.slots.slice(0, 9).map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `h-9 rounded-lg border-2 flex items-center justify-center text-base transition-all cursor-pointer
                      ${i === inv.hotbarActive ? 'border-yellow-400 bg-slate-700 scale-110 shadow-lg shadow-yellow-400/20' : 'border-slate-700 bg-slate-800'}`,
                                                        onClick: ()=>inv.setHotbarActive(i),
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderItemIcon"])(item, 18)
                                                    }, i, false, {
                                                        fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                                        lineNumber: 164,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                                lineNumber: 162,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1.5 text-center text-xs text-slate-400 min-h-[1rem]",
                                                children: inv.activeItemDef?.label || ''
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                                lineNumber: 176,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-6 step-card flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 px-6 py-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-white font-bold text-lg",
                                        children: "🚰 Кран на объекте — крупный план"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400 text-xs mt-1",
                                        children: "Снимите аэратор и протрите носик чистой салфеткой перед обжигом"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                        lineNumber: 187,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 flex flex-col items-center justify-between p-4 bg-gradient-to-b from-slate-50 to-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full flex justify-between items-start mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `text-xs font-bold px-3 py-1.5 rounded-full border
                ${aeratorRemoved ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-amber-50 text-amber-700 border-amber-200 animate-pulse'}`,
                                                children: aeratorRemoved ? '✓ Аэратор снят' : '⚙ Кликните по сеточке'
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                                lineNumber: 191,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `text-xs font-bold px-3 py-1.5 rounded-full border
                ${spotsLeft === 0 ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-orange-50 text-orange-700 border-orange-200'}`,
                                                children: spotsLeft === 0 ? '✓ Носик чистый' : `Загрязнений: ${spotsLeft}/3`
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                                lineNumber: 195,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                        lineNumber: 190,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full flex-1 flex items-center justify-center min-h-[380px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FaucetSVG$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaucetSVG"], {
                                            aeratorRemoved: aeratorRemoved,
                                            showAeratorRemovedBadge: true,
                                            spotsLeft: spotsLeft,
                                            isWiping: isWiping,
                                            onRemoveAerator: ()=>setAeratorRemoved(true),
                                            onWipeSpot: handleWipeSpot,
                                            glovesEquipped: equippedGloves,
                                            blocked: true
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                            lineNumber: 202,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                        lineNumber: 201,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-full flex items-center gap-4 rounded-2xl p-4 border-2 mt-2 transition-all
              ${spotsLeft === 0 ? 'bg-emerald-50 border-emerald-200' : equippedGloves ? 'bg-white border-slate-200 hover:border-amber-300' : 'bg-slate-50 border-slate-200 opacity-60'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-3xl select-none",
                                                children: "🧻"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                                lineNumber: 216,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-bold text-sm text-slate-800",
                                                        children: spotsLeft === 0 ? 'Носик очищен' : 'Чистая салфетка'
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                                        lineNumber: 218,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-500",
                                                        children: spotsLeft === 0 ? 'Поверхность готова к обжигу горелкой' : 'Кликайте по пятнам ржавчины, чтобы удалить их'
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                                        lineNumber: 219,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                                lineNumber: 217,
                                                columnNumber: 15
                                            }, this),
                                            spotsLeft > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                disabled: !equippedGloves || isWiping,
                                                onClick: handleWipeSpot,
                                                className: `px-4 py-2.5 rounded-xl font-bold text-xs transition-all
                    ${!equippedGloves ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : isWiping ? 'bg-amber-200 text-amber-800 cursor-wait' : 'bg-amber-100 hover:bg-amber-200 text-amber-800 shadow-sm'}`,
                                                children: isWiping ? '⏳ Протирка...' : `Протереть (${3 - spotsLeft}/3)`
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                                lineNumber: 222,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-3 step-card flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-emerald-700 to-emerald-900 px-6 py-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-white font-bold text-lg",
                                        children: "📋 Задачи"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                        lineNumber: 238,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-emerald-300 text-xs mt-1",
                                        children: "Чек-лист подготовки крана"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                        lineNumber: 239,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 flex flex-col gap-4 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: checklist.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `flex items-start gap-3 p-3.5 rounded-xl border transition-all
                    ${item.done ? 'bg-emerald-50 border-emerald-200' : 'bg-slate-50 border-slate-200'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold border-2
                    ${item.done ? 'bg-emerald-500 border-emerald-500 text-white' : 'bg-white border-slate-300 text-slate-400'}`,
                                                        children: item.done ? '✓' : i + 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                                        lineNumber: 249,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `text-xs font-semibold leading-snug ${item.done ? 'text-emerald-800 line-through decoration-emerald-400' : 'text-slate-600'}`,
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                                        lineNumber: 253,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                                lineNumber: 244,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                        lineNumber: 242,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-slate-900 rounded-xl p-4 text-white text-xs space-y-2 border border-slate-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-slate-300 uppercase tracking-wider text-[10px]",
                                                children: "Статус защиты"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                                lineNumber: 261,
                                                columnNumber: 15
                                            }, this),
                                            [
                                                {
                                                    icon: '🥽',
                                                    label: 'Очки',
                                                    val: equippedHelmet ? 'Надеты' : 'Сняты',
                                                    ok: equippedHelmet
                                                },
                                                {
                                                    icon: '🧤',
                                                    label: 'Перчатки',
                                                    val: equippedGloves === 'sterile' ? 'Стерильные ✓' : equippedGloves === 'yellow' ? 'Хозяйственные ⚠' : 'Нет',
                                                    ok: !!equippedGloves
                                                },
                                                {
                                                    icon: '⚙️',
                                                    label: 'Аэратор',
                                                    val: aeratorRemoved ? 'Снят ✓' : 'На месте',
                                                    ok: aeratorRemoved
                                                },
                                                {
                                                    icon: '🧹',
                                                    label: 'Носик',
                                                    val: spotsLeft === 0 ? 'Чистый ✓' : `Грязь ${spotsLeft}/3`,
                                                    ok: spotsLeft === 0
                                                }
                                            ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-400",
                                                            children: [
                                                                r.icon,
                                                                " ",
                                                                r.label,
                                                                ":"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                                            lineNumber: 269,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `font-bold ${r.ok ? 'text-emerald-400' : 'text-red-400'}`,
                                                            children: r.val
                                                        }, void 0, false, {
                                                            fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                                            lineNumber: 270,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, r.label, true, {
                                                    fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                                    lineNumber: 268,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                        lineNumber: 260,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs text-blue-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold mb-1",
                                                children: "📖 ГОСТ Р 59024‑2020"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                                lineNumber: 276,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "leading-relaxed text-blue-700",
                                                children: "Снять аэратор, прочистить излив, продезинфицировать горелкой и дать воде слиться 5–10 мин."
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                                lineNumber: 277,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                        lineNumber: 275,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-auto",
                                        children: [
                                            warning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-3 bg-red-50 border border-red-200 rounded-xl p-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-red-600 text-xs font-bold text-center",
                                                    children: warning
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                                    lineNumber: 283,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                                lineNumber: 282,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleCompletePrep,
                                                className: "w-full bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-4 rounded-2xl shadow-lg transition-all transform hover:-translate-y-0.5 text-sm",
                                                children: "Подтвердить подготовку →"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                                lineNumber: 286,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                        lineNumber: 280,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                                lineNumber: 241,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
                lineNumber: 102,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/steps/Stage2/Step1_SitePrep.jsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s(Step1_SitePrep, "p0DuhYFwcP/jxTxxwC2Cdh6/948=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$InventoryContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInventoryContext"]
    ];
});
_c = Step1_SitePrep;
var _c;
__turbopack_context__.k.register(_c, "Step1_SitePrep");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/steps/Stage2/Step2_WaterDrain.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Step2_WaterDrain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FaucetSVG$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/FaucetSVG.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$MinecraftInventory$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/MinecraftInventory.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$InventoryContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/InventoryContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/itemRegistry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$FollowCursor$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/FollowCursor.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const REAL_TIMER_MS = 5000;
const DRAIN_REQUIREMENTS = {
    chem: {
        minSec: 120,
        maxSec: 180,
        label: '2–3 минуты'
    },
    bio: {
        minSec: 600,
        maxSec: null,
        label: 'не менее 10 минут на максимальном напоре'
    }
};
function Step2_WaterDrain({ logs, onComplete }) {
    _s();
    const inv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$InventoryContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInventoryContext"])();
    const [analysisGoal, setAnalysisGoal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // 'leaching' (металлы) или 'network' (качество в сети)
    const [analysisType, setAnalysisType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // 'chem' или 'bio'
    const [currentFlow, setCurrentFlow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [timerRunning, setTimerRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [secondsLeft, setSecondsLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [totalDuration, setTotalDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [drainComplete, setDrainComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [drainDurationSet, setDrainDurationSet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [warningMessage, setWarningWarning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timerStartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const durationAtStartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const minFlowDuringDrainRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(1);
    const currentFlowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(currentFlow);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Step2_WaterDrain.useEffect": ()=>{
            currentFlowRef.current = currentFlow;
        }
    }["Step2_WaterDrain.useEffect"], [
        currentFlow
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Step2_WaterDrain.useEffect": ()=>{
            // Inventory disabled in this step - always show normal cursor
            document.body.style.cursor = 'auto';
            return ({
                "Step2_WaterDrain.useEffect": ()=>{
                    document.body.style.cursor = 'auto';
                }
            })["Step2_WaterDrain.useEffect"];
        }
    }["Step2_WaterDrain.useEffect"], []);
    const clampDuration = (secs)=>Math.max(0, Math.min(99 * 60 + 59, secs));
    const setDurationParts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Step2_WaterDrain.useCallback[setDurationParts]": (minutes, seconds)=>{
            const total = clampDuration(minutes * 60 + seconds);
            setSecondsLeft(total);
            setTotalDuration(total);
            setTimerRunning(false);
            setDrainComplete(false);
            setDrainDurationSet(null);
            setWarningWarning("");
        }
    }["Step2_WaterDrain.useCallback[setDurationParts]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Step2_WaterDrain.useEffect": ()=>{
            if (analysisType) {
                setDrainDurationSet(null);
                setDurationParts(0, 0);
            }
        }
    }["Step2_WaterDrain.useEffect"], [
        analysisType,
        setDurationParts
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Step2_WaterDrain.useEffect": ()=>{
            if (!timerRunning) {
                clearInterval(intervalRef.current);
                return;
            }
            timerStartRef.current = Date.now();
            const durationAtStart = durationAtStartRef.current;
            intervalRef.current = setInterval({
                "Step2_WaterDrain.useEffect": ()=>{
                    const flow = currentFlowRef.current;
                    const type = analysisType;
                    if (flow < 0.1) {
                        setTimerRunning(false);
                        setWarningWarning("⚠️ Вода перекрыта! Слив приостановлен.");
                        return;
                    }
                    if (type === 'bio' && flow < 0.8) {
                        setTimerRunning(false);
                        setWarningWarning("⚠️ Напор снижен! Для бактериологии сливайте на максимальном напоре.");
                        return;
                    }
                    minFlowDuringDrainRef.current = Math.min(minFlowDuringDrainRef.current, flow);
                    setWarningWarning("");
                    const elapsed = Date.now() - timerStartRef.current;
                    const progress = Math.min(elapsed / REAL_TIMER_MS, 1);
                    const remaining = Math.max(0, Math.ceil(durationAtStart * (1 - progress)));
                    setSecondsLeft(remaining);
                    if (progress >= 1) {
                        clearInterval(intervalRef.current);
                        setTimerRunning(false);
                        setSecondsLeft(0);
                        setDrainComplete(true);
                    }
                }
            }["Step2_WaterDrain.useEffect"], 50);
            return ({
                "Step2_WaterDrain.useEffect": ()=>clearInterval(intervalRef.current)
            })["Step2_WaterDrain.useEffect"];
        }
    }["Step2_WaterDrain.useEffect"], [
        timerRunning,
        analysisType
    ]);
    const adjustMinutes = (delta)=>{
        if (timerRunning || drainComplete) return;
        const mins = Math.floor(secondsLeft / 60);
        const secs = secondsLeft % 60;
        setDurationParts(mins + delta, secs);
    };
    const adjustSeconds = (delta)=>{
        if (timerRunning || drainComplete) return;
        const mins = Math.floor(secondsLeft / 60);
        const secs = secondsLeft % 60;
        let nextSecs = secs + delta;
        let nextMins = mins;
        if (nextSecs >= 60) {
            nextMins += 1;
            nextSecs = 0;
        }
        if (nextSecs < 0) {
            nextMins -= 1;
            nextSecs = 59;
        }
        setDurationParts(nextMins, nextSecs);
    };
    const handleStartTimer = ()=>{
        if (currentFlow < 0.1) {
            setWarningWarning("⚠️ Сначала откройте кран смесителя!");
            return;
        }
        if (analysisType === 'bio' && currentFlow < 0.8) {
            setWarningWarning("⚠️ Откройте кран на максимум! Бактериологический слив требует полного напора.");
            return;
        }
        if (secondsLeft <= 0) {
            setWarningWarning("⚠️ Задайте время слива на таймере с помощью стрелочек!");
            return;
        }
        setWarningWarning("");
        durationAtStartRef.current = secondsLeft;
        minFlowDuringDrainRef.current = currentFlow;
        setDrainDurationSet(secondsLeft);
        setTotalDuration(secondsLeft);
        setTimerRunning(true);
    };
    const handlePauseTimer = ()=>{
        setTimerRunning(false);
    };
    const handleResetTimer = ()=>{
        setTimerRunning(false);
        setSecondsLeft(totalDuration);
        setDrainComplete(false);
        setDrainDurationSet(null);
        setWarningWarning("");
    };
    const formatTime = (secs)=>{
        const minutes = Math.floor(secs / 60);
        const seconds = secs % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };
    const validateDrainTime = (type, durationSec, minFlow)=>{
        const errs = [];
        let penalty = 0;
        const req = DRAIN_REQUIREMENTS[type];
        if (!req || durationSec == null) return {
            errs,
            penalty
        };
        if (durationSec < req.minSec) {
            errs.push(`Неверное время слива: для ${type === 'chem' ? 'химического' : 'бактериологического'} анализа нужно ${req.label}. Вы задали ${formatTime(durationSec)}.`);
            penalty += type === 'bio' ? 25 : 15;
        } else if (req.maxSec && durationSec > req.maxSec) {
            errs.push(`Слишком долгий слив: для химического анализа достаточно ${req.label}. Вы задали ${formatTime(durationSec)}.`);
            penalty += 10;
        }
        if (type === 'bio' && minFlow < 0.8) {
            errs.push('Нарушение регламента: бактериологический слив должен выполняться на максимальном напоре (кран открыт полностью).');
            penalty += 15;
        }
        return {
            errs,
            penalty
        };
    };
    const handleCompleteStep = ()=>{
        let scorePenalty = 0;
        let errors = [];
        if (analysisGoal === 'leaching') {
            // Сценарий А: Контроль вымывания металлов
            if (currentFlow > 0.05 && !drainComplete) {
                // Отлично: пользователь приоткрыл кран и сразу набрал первую застойную струю
                if (currentFlow > 0.6) {
                    errors.push("Нарушение отбора: При оценке вымывания металлов первую струю нужно отбирать при слабом или умеренном напоре, чтобы не смыть налет со стенок труб.");
                    scorePenalty += 15;
                }
            } else if (drainComplete) {
                errors.push("Критическая ошибка: Вы выполнили предварительный слив при оценке вымывания металлов! Вся застойная вода с вымытыми металлами ушла в канализацию, анализ будет ложным.");
                scorePenalty += 40;
            } else {
                errors.push("Ошибка: Вы не открыли кран для отбора первой застойной струи.");
                scorePenalty += 20;
            }
        } else {
            // Сценарий Б: Оценка качества воды в сети (нужен слив)
            if (!drainComplete) {
                errors.push("Критическая ошибка: Вы не выполнили или не завершили предварительный слив воды! В бутыль попадет застоявшаяся вода из труб квартиры, а не чистая вода из городской сети.");
                scorePenalty += 40;
            } else {
                const { errs, penalty } = validateDrainTime(analysisType, drainDurationSet, minFlowDuringDrainRef.current);
                errors.push(...errs);
                scorePenalty += penalty;
            }
        }
        onComplete({
            drainErrors: errors,
            drainScorePenalty: scorePenalty,
            drainGoal: analysisGoal,
            drainType: analysisType,
            drainDurationSet,
            drainSuccess: scorePenalty === 0
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white w-full max-w-6xl rounded-xl shadow-xl border border-slate-200 overflow-hidden mb-6 flex flex-col lg:flex-row animate-fade-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full lg:w-1/3 p-8 border-r border-slate-100 bg-slate-50 flex flex-col gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200",
                                        children: "ШАГ 2.2"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                        lineNumber: 242,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-slate-800 mt-3",
                                        children: "Слив и застойный фактор"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                        lineNumber: 243,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-500 text-xs mt-1",
                                        children: "Определите цель вашего исследования и подготовьте воду к отбору проб."
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                        lineNumber: 244,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                lineNumber: 241,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                disabled: true,
                                className: "w-full py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 opacity-50 cursor-not-allowed bg-gradient-to-r from-slate-500 to-slate-600 text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl",
                                        children: "🗃️"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                        lineNumber: 250,
                                        columnNumber: 13
                                    }, this),
                                    "Инвентарь недоступен на этом этапе"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                lineNumber: 246,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1.5",
                                        children: [
                                            "В руке — ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-300 font-mono",
                                                children: "← →"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                                lineNumber: 256,
                                                columnNumber: 107
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                        lineNumber: 256,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-9 gap-1 p-2 rounded-xl bg-slate-900",
                                        children: inv.slots.slice(0, 9).map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `h-9 rounded-lg border-2 flex items-center justify-center text-base transition-all opacity-50 cursor-not-allowed
                    ${i === inv.hotbarActive ? 'border-yellow-400 bg-slate-700 scale-110 shadow-lg shadow-yellow-400/20' : 'border-slate-700 bg-slate-800'}`,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderItemIcon"])(item, 18)
                                            }, i, false, {
                                                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                                lineNumber: 259,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                        lineNumber: 257,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1.5 text-center text-xs text-slate-400 min-h-[1rem]",
                                        children: inv.activeItemDef?.label || ''
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                        lineNumber: 269,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                lineNumber: 255,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-xs font-bold text-slate-400 uppercase tracking-widest block",
                                children: "1. Выберите цель анализа:"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setAnalysisGoal('leaching');
                                    setAnalysisType(null);
                                },
                                className: `w-full p-4 rounded-xl border text-left transition-all flex items-start gap-3
              ${analysisGoal === 'leaching' ? 'bg-amber-50 border-amber-400 shadow-md scale-[1.01]' : 'bg-white border-slate-200 hover:border-amber-200'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl",
                                        children: "🧱"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                        lineNumber: 282,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-sm text-slate-800",
                                                children: "Вымывание металлов из труб"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                                lineNumber: 284,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-slate-500 mt-0.5",
                                                children: "Оцениваем, выделяют ли трубы свинец, медь или цинк в воду. Нужна ПЕРВАЯ («застойная») струя."
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                                lineNumber: 285,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                        lineNumber: 283,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                lineNumber: 277,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setAnalysisGoal('network');
                                },
                                className: `w-full p-4 rounded-xl border text-left transition-all flex items-start gap-3
              ${analysisGoal === 'network' ? 'bg-sky-50 border-blue-400 shadow-md scale-[1.01]' : 'bg-white border-slate-200 hover:border-blue-200'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl",
                                        children: "🌍"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                        lineNumber: 294,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-sm text-slate-800",
                                                children: "Качество воды в городской сети"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                                lineNumber: 296,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-slate-500 mt-0.5",
                                                children: "Оцениваем воду, поступающую с водоканала. Застойную воду из труб квартиры нужно полностью СЛИТЬ."
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                                lineNumber: 297,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                        lineNumber: 295,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this),
                    analysisGoal === 'network' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 animate-fade-in",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-xs font-bold text-slate-400 uppercase tracking-widest block",
                                children: "2. Выберите тип проводимого анализа:"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                lineNumber: 305,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setAnalysisType('chem'),
                                        className: `py-3 rounded-lg border font-bold text-xs transition-all
                  ${analysisType === 'chem' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-600 border-slate-200'}`,
                                        children: "🧪 Химический"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                        lineNumber: 307,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setAnalysisType('bio'),
                                        className: `py-3 rounded-lg border font-bold text-xs transition-all
                  ${analysisType === 'bio' ? 'bg-cyan-600 text-white border-cyan-600' : 'bg-white text-slate-600 border-slate-200'}`,
                                        children: "🧫 Бактериологический"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                        lineNumber: 314,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                lineNumber: 306,
                                columnNumber: 13
                            }, this),
                            analysisType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-slate-500 leading-relaxed",
                                children: analysisType === 'chem' ? 'Откройте кран, задайте таймер на 2–3 минуты и запустите слив.' : 'Откройте кран полностью, задайте таймер не менее 10 минут и запустите слив.'
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                lineNumber: 323,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                        lineNumber: 304,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                lineNumber: 239,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full lg:w-1/3 p-6 bg-white flex flex-col items-center justify-center border-r border-slate-100 min-h-[450px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex justify-between items-center mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-bold text-slate-400",
                                children: "ИНТЕРАКТИВНЫЙ СМЕСИТЕЛЬ"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                lineNumber: 337,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                    lineNumber: 339,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                lineNumber: 338,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                        lineNumber: 336,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex-1 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FaucetSVG$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaucetSVG"], {
                            aeratorRemoved: true,
                            showAeratorRemovedBadge: false,
                            spotsLeft: 0,
                            isWiping: false,
                            onRemoveAerator: ()=>{},
                            onWipeSpot: ()=>{},
                            glovesEquipped: true,
                            blocked: !analysisGoal,
                            onFlowChange: (flow)=>setCurrentFlow(flow)
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                            lineNumber: 344,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                        lineNumber: 343,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                lineNumber: 335,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$MinecraftInventory$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                slots: inv.slots,
                selectedSlot: inv.selectedSlot,
                draggedSlot: inv.draggedSlot,
                equippedHelmet: inv.equippedHelmet,
                equippedGloves: inv.equippedGloves,
                onSlotClick: inv.handleSlotClick,
                onSlotRightClick: inv.handleSlotRightClick,
                onDragStart: inv.handleDragStart,
                onDrop: inv.handleDrop,
                onDragEnd: inv.handleDragEnd,
                isOpen: inv.isOpen,
                onClose: inv.closeInventory
            }, void 0, false, {
                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                lineNumber: 358,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full lg:w-1/3 p-8 bg-slate-50 flex flex-col justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 w-full",
                        children: "3. Контроль времени (Смартфон)"
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                        lineNumber: 375,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-64 h-[350px] bg-slate-900 rounded-[36px] p-3 shadow-2xl border-4 border-slate-800 flex flex-col relative overflow-hidden my-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-1 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-slate-800 rounded-b-xl z-20"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                lineNumber: 380,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-950 flex-1 rounded-[28px] p-4 flex flex-col justify-between items-center text-center border border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[9px] font-mono text-slate-500 tracking-widest uppercase block",
                                                children: "ТАЙМЕР СЛИВА"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                                lineNumber: 384,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-semibold text-sky-400 mt-1 block",
                                                children: [
                                                    analysisType === 'chem' && "🧪 ХИМИЧЕСКИЙ АНАЛИЗ",
                                                    analysisType === 'bio' && "🧫 БАКТЕРИОЛОГИЯ",
                                                    !analysisType && "ОЖИДАНИЕ ВЫБОРА"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                                lineNumber: 385,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                        lineNumber: 383,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "my-auto w-full",
                                        children: [
                                            !timerRunning && !drainComplete && analysisType ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-center gap-0.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>adjustMinutes(1),
                                                                className: "text-slate-400 hover:text-white text-xs px-2 py-0.5 transition-colors",
                                                                children: "▲"
                                                            }, void 0, false, {
                                                                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                                                lineNumber: 397,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-4xl font-mono font-black text-white w-14 text-center",
                                                                children: Math.floor(secondsLeft / 60).toString().padStart(2, '0')
                                                            }, void 0, false, {
                                                                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                                                lineNumber: 399,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>adjustMinutes(-1),
                                                                className: "text-slate-400 hover:text-white text-xs px-2 py-0.5 transition-colors",
                                                                children: "▼"
                                                            }, void 0, false, {
                                                                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                                                lineNumber: 402,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                                        lineNumber: 396,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-4xl font-mono font-black text-slate-500",
                                                        children: ":"
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                                        lineNumber: 405,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-center gap-0.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>adjustSeconds(15),
                                                                className: "text-slate-400 hover:text-white text-xs px-2 py-0.5 transition-colors",
                                                                children: "▲"
                                                            }, void 0, false, {
                                                                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                                                lineNumber: 407,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-4xl font-mono font-black text-white w-14 text-center",
                                                                children: (secondsLeft % 60).toString().padStart(2, '0')
                                                            }, void 0, false, {
                                                                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                                                lineNumber: 409,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>adjustSeconds(-15),
                                                                className: "text-slate-400 hover:text-white text-xs px-2 py-0.5 transition-colors",
                                                                children: "▼"
                                                            }, void 0, false, {
                                                                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                                                lineNumber: 412,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                                        lineNumber: 406,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                                lineNumber: 395,
                                                columnNumber: 17
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-5xl font-mono font-black text-white tracking-widest text-center",
                                                children: formatTime(secondsLeft)
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                                lineNumber: 417,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-3 max-w-[140px] mx-auto",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-sky-500 h-full transition-all duration-300",
                                                    style: {
                                                        width: `${totalDuration ? secondsLeft / totalDuration * 100 : 0}%`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                                    lineNumber: 422,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                                lineNumber: 421,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                        lineNumber: 393,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full space-y-2 mb-2",
                                        children: [
                                            warningMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[9px] font-bold text-rose-400 leading-tight bg-rose-950/40 p-2 rounded border border-rose-900/50 animate-bounce",
                                                children: warningMessage
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                                lineNumber: 432,
                                                columnNumber: 17
                                            }, this),
                                            drainComplete ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-emerald-950/60 border border-emerald-800 p-2 rounded-lg text-emerald-400 font-bold text-[10px] tracking-wide",
                                                children: "✓ СЛИВ ВОДЫ ЗАВЕРШЕН"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                                lineNumber: 438,
                                                columnNumber: 17
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        disabled: !analysisType || timerRunning,
                                                        onClick: handleStartTimer,
                                                        className: "bg-sky-600 hover:bg-sky-500 text-white font-bold py-2 rounded-lg text-[10px] uppercase transition-all disabled:opacity-40",
                                                        children: "Старт"
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                                        lineNumber: 443,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        disabled: !timerRunning,
                                                        onClick: handlePauseTimer,
                                                        className: "bg-amber-600 hover:bg-amber-500 text-white font-bold py-2 rounded-lg text-[10px] uppercase transition-all disabled:opacity-40",
                                                        children: "Пауза"
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                                        lineNumber: 450,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                                lineNumber: 442,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                disabled: !analysisType || secondsLeft === totalDuration,
                                                onClick: handleResetTimer,
                                                className: "w-full text-slate-500 hover:text-slate-300 font-bold text-[9px] uppercase tracking-wider transition-all",
                                                children: "Сбросить таймер"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                                lineNumber: 460,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                        lineNumber: 430,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                                lineNumber: 382,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                        lineNumber: 378,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full mt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            disabled: !analysisGoal,
                            onClick: handleCompleteStep,
                            className: "w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-4 rounded-xl shadow-md transition-all disabled:opacity-40",
                            children: analysisGoal === 'leaching' ? 'Отобрать первую струю →' : 'Завершить этап слива →'
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                            lineNumber: 473,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                        lineNumber: 472,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                lineNumber: 374,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$FollowCursor$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FollowCursor"], {
                activeItemDef: null,
                activeItem: null,
                replaceCursor: true
            }, void 0, false, {
                fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
                lineNumber: 483,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/steps/Stage2/Step2_WaterDrain.jsx",
        lineNumber: 236,
        columnNumber: 5
    }, this);
}
_s(Step2_WaterDrain, "6oplfR8xlnwhDz74aDWQhLjdEhs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$InventoryContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInventoryContext"]
    ];
});
_c = Step2_WaterDrain;
var _c;
__turbopack_context__.k.register(_c, "Step2_WaterDrain");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/steps/Stage2/Step3_FaucetSterilize.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Step3_FaucetSterilize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FaucetSVG$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/FaucetSVG.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$MinecraftInventory$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/MinecraftInventory.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$InventoryContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/InventoryContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/itemRegistry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$FollowCursor$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/FollowCursor.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// steps/Stage2/Step3_FaucetSterilize.jsx
'use client';
;
;
;
;
;
;
const REAL_TIMER_MS = 5000;
const STERILIZE_REQUIREMENTS = {
    metal: {
        minSec: 20,
        maxSec: 30,
        label: '20–30 секунд'
    },
    plastic: {
        minSec: 15,
        maxSec: null,
        label: 'интенсивная обработка салфеткой'
    }
};
const COOLING_REQUIREMENT = {
    targetSec: 60,
    label: '1 минута'
};
const hasItemInInventory = (slots, itemId)=>slots.some((item)=>item?.id === itemId);
const wipeIds = [
    'ethyl_wipes',
    'isop_wipes',
    'antibact_wipes'
];
function Step3_FaucetSterilize({ logs, onComplete }) {
    _s();
    const inv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$InventoryContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInventoryContext"])();
    const [faucetType, setFaucetType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentFlow, setCurrentFlow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // selection → sterilize_ready → sterilizing → cooling_ready → cooling → done
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('selection');
    const [isFlameOn, setIsFlameOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isWipeApplied, setIsWipeActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [timerRunning, setTimerRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [secondsLeft, setSecondsLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [totalDuration, setTotalDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [sterilizeDurationSet, setSterilizeDurationSet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [coolingDurationSet, setCoolingDurationSet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [warningMessage, setWarningMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Новые состояния для ручного использования без кнопок
    const [isFlameActive, setIsFlameActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isWipeWiping, setIsWipeWiping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [burnSeconds, setBurnSeconds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [hasUsedWipe, setHasUsedWipe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [burnerFlameProgress, setBurnerFlameProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [wipeHoldProgress, setWipeHoldProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0); // 0 to 1 for 3s hold
    const [mouseOverFaucet, setMouseOverFaucet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [burnCompleted, setBurnCompleted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Сбрасывать анимацию при убирании предмета из руки в инвентарь
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Step3_FaucetSterilize.useEffect": ()=>{
            if (!inv.activeItem) {
                setIsFlameActive(false);
                setIsWipeWiping(false);
            } else if (!wipeIds.includes(inv.activeItem.id)) {
                setIsWipeWiping(false);
            } else if (inv.activeItem.id !== 'gas_burner') {
                setIsFlameActive(false);
            }
        }
    }["Step3_FaucetSterilize.useEffect"], [
        inv.activeItem
    ]);
    // Флаконы (chem_tare_*, bio_tare_*) не должны браться в руки на этапе 2.3 (как горелка/салфетки в 2.4)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Step3_FaucetSterilize.useEffect": ()=>{
            const active = inv.activeItem;
            if (active && (active.id?.startsWith('chem_tare_') || active.id?.startsWith('bio_tare_'))) {
                const idx = inv.hotbarActive;
                if (inv.slots[idx] && (inv.slots[idx].id?.startsWith('chem_tare_') || inv.slots[idx].id?.startsWith('bio_tare_'))) {
                    inv.setHotbarActive(idx); // toggle isHoldingActive off
                }
            }
        }
    }["Step3_FaucetSterilize.useEffect"], [
        inv.activeItem?.id,
        inv.hotbarActive
    ]);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timerStartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const durationAtStartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const phaseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(phase);
    const minFlowDuringCoolingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(1);
    const currentFlowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(currentFlow);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Step3_FaucetSterilize.useEffect": ()=>{
            currentFlowRef.current = currentFlow;
        }
    }["Step3_FaucetSterilize.useEffect"], [
        currentFlow
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Step3_FaucetSterilize.useEffect": ()=>{
            phaseRef.current = phase;
        }
    }["Step3_FaucetSterilize.useEffect"], [
        phase
    ]);
    // Автоматическая активация использования предметов и запуск таймера
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Step3_FaucetSterilize.useEffect": ()=>{
            if (!faucetType || phase === 'done') return;
            if (faucetType === 'metal') {
                const canUseFlame = inv.activeItem?.id === 'gas_burner' && currentFlow < 0.02 && isFlameActive && mouseOverFaucet;
                setIsFlameOn(canUseFlame);
                if (canUseFlame) {
                    if (phase === 'sterilize_ready') {
                        setPhase('sterilizing');
                        setTimerRunning(true);
                        durationAtStartRef.current = 0;
                        setBurnSeconds(0);
                        setSterilizeDurationSet(0);
                        setTotalDuration(25);
                    }
                }
            }
            if (faucetType === 'plastic') {
                const canWipe = wipeIds.includes(inv.activeItem?.id || '') && isWipeWiping && mouseOverFaucet;
                setIsWipeActive(canWipe);
            }
        }
    }["Step3_FaucetSterilize.useEffect"], [
        isFlameActive,
        isWipeWiping,
        inv.activeItem,
        currentFlow,
        faucetType,
        phase
    ]);
    // Накопление времени обжига (только для металла, ускорено)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Step3_FaucetSterilize.useEffect": ()=>{
            if (phase !== 'sterilizing' || faucetType !== 'metal' || !isFlameOn || burnerFlameProgress < 1) {
                return;
            }
            const accInterval = setInterval({
                "Step3_FaucetSterilize.useEffect.accInterval": ()=>{
                    setBurnSeconds({
                        "Step3_FaucetSterilize.useEffect.accInterval": (prev)=>{
                            const next = Math.min(30, prev + 0.25); // ~4x ускорение, 25с ~ за 6-7 реальных сек
                            setSecondsLeft(Math.floor(next));
                            if (next >= 20) {
                                // достаточно для завершения
                                setBurnCompleted(true);
                                setSterilizeDurationSet(next);
                                setTimerRunning(false);
                                setIsFlameOn(false);
                                setPhase('cooling_ready');
                                resetTimerUi(COOLING_REQUIREMENT.targetSec);
                                return next;
                            }
                            return next;
                        }
                    }["Step3_FaucetSterilize.useEffect.accInterval"]);
                }
            }["Step3_FaucetSterilize.useEffect.accInterval"], 50);
            return ({
                "Step3_FaucetSterilize.useEffect": ()=>clearInterval(accInterval)
            })["Step3_FaucetSterilize.useEffect"];
        }
    }["Step3_FaucetSterilize.useEffect"], [
        phase,
        faucetType,
        isFlameOn,
        burnerFlameProgress
    ]);
    // Обработка салфеткой требует 3 секунды удержания (для пластика)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Step3_FaucetSterilize.useEffect": ()=>{
            if (faucetType !== 'plastic' || phase !== 'sterilize_ready') {
                setWipeHoldProgress(0);
                return;
            }
            const holdingWipe = wipeIds.includes(inv.activeItem?.id || '') && isWipeWiping && mouseOverFaucet;
            setIsWipeActive(holdingWipe);
            if (!holdingWipe) {
                setWipeHoldProgress(0);
                return;
            }
            const WIPE_MS = 3000;
            const interval = setInterval({
                "Step3_FaucetSterilize.useEffect.interval": ()=>{
                    setWipeHoldProgress({
                        "Step3_FaucetSterilize.useEffect.interval": (prev)=>{
                            const next = Math.min(WIPE_MS, prev + 50);
                            if (next >= WIPE_MS) {
                                setHasUsedWipe(true);
                                setPhase('done');
                                setIsWipeActive(false);
                                setWipeHoldProgress(WIPE_MS);
                                return WIPE_MS;
                            }
                            return next;
                        }
                    }["Step3_FaucetSterilize.useEffect.interval"]);
                }
            }["Step3_FaucetSterilize.useEffect.interval"], 50);
            return ({
                "Step3_FaucetSterilize.useEffect": ()=>clearInterval(interval)
            })["Step3_FaucetSterilize.useEffect"];
        }
    }["Step3_FaucetSterilize.useEffect"], [
        isWipeWiping,
        inv.activeItem,
        faucetType,
        phase,
        mouseOverFaucet
    ]);
    // Курсор скрываем только для предметов, которые можно брать в руки (горелка/салфетки). Флаконы заблокированы.
    const isHoldingValidTool = !!inv.activeItem && (inv.activeItem.id === 'gas_burner' || wipeIds.includes(inv.activeItem.id));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Step3_FaucetSterilize.useEffect": ()=>{
            if (isHoldingValidTool) {
                document.body.style.cursor = 'none';
            } else {
                document.body.style.cursor = 'auto';
            }
            return ({
                "Step3_FaucetSterilize.useEffect": ()=>{
                    document.body.style.cursor = 'auto';
                }
            })["Step3_FaucetSterilize.useEffect"];
        }
    }["Step3_FaucetSterilize.useEffect"], [
        isHoldingValidTool
    ]);
    // Слушаем зажатие ЛКМ для ручного использования предметов (горелка / салфетка)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Step3_FaucetSterilize.useEffect": ()=>{
            const handleDown = {
                "Step3_FaucetSterilize.useEffect.handleDown": (e)=>{
                    if (e.button !== 0) return;
                    // Only activate if over the faucet area (actions only at the crane)
                    if (!mouseOverFaucet) return;
                    if (inv.activeItem?.id === 'gas_burner') {
                        setIsFlameActive(true);
                    }
                    if (wipeIds.includes(inv.activeItem?.id || '')) {
                        setIsWipeWiping(true);
                    }
                }
            }["Step3_FaucetSterilize.useEffect.handleDown"];
            const handleUp = {
                "Step3_FaucetSterilize.useEffect.handleUp": ()=>{
                    setIsFlameActive(false);
                    setIsWipeWiping(false);
                }
            }["Step3_FaucetSterilize.useEffect.handleUp"];
            document.addEventListener('mousedown', handleDown);
            document.addEventListener('mouseup', handleUp);
            window.addEventListener('blur', handleUp);
            return ({
                "Step3_FaucetSterilize.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleDown);
                    document.removeEventListener('mouseup', handleUp);
                    window.removeEventListener('blur', handleUp);
                }
            })["Step3_FaucetSterilize.useEffect"];
        }
    }["Step3_FaucetSterilize.useEffect"], [
        inv.activeItem,
        mouseOverFaucet
    ]);
    const formatTime = (secs)=>{
        const minutes = Math.floor(secs / 60);
        const seconds = secs % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };
    const clampSeconds = (secs, min = 1, max = 99 * 60 + 59)=>Math.max(min, Math.min(max, secs));
    const resetTimerUi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Step3_FaucetSterilize.useCallback[resetTimerUi]": (duration)=>{
            setSecondsLeft(duration);
            setTotalDuration(duration);
            setTimerRunning(false);
            setWarningMessage('');
        }
    }["Step3_FaucetSterilize.useCallback[resetTimerUi]"], []);
    const finishTimerPhase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Step3_FaucetSterilize.useCallback[finishTimerPhase]": ()=>{
            const currentPhase = phaseRef.current;
            setTimerRunning(false);
            setIsFlameOn(false);
            setIsWipeActive(false);
            setSecondsLeft(0);
            if (currentPhase === 'sterilizing') {
                if (faucetType === 'metal') {
                    setSterilizeDurationSet(burnSeconds);
                    setPhase('cooling_ready');
                    resetTimerUi(COOLING_REQUIREMENT.targetSec);
                } else {
                    setPhase('done');
                }
                return;
            }
            if (currentPhase === 'cooling') {
                setPhase('done');
            }
        }
    }["Step3_FaucetSterilize.useCallback[finishTimerPhase]"], [
        faucetType,
        resetTimerUi,
        burnSeconds
    ]);
    // Авто-старт и возобновление охлаждения при правильном напоре
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Step3_FaucetSterilize.useEffect": ()=>{
            const flowOk = currentFlow >= 0.35 && currentFlow <= 0.7;
            if (!flowOk || timerRunning) return;
            if (phase === 'cooling_ready') {
                setPhase('cooling');
                setTimerRunning(true);
                durationAtStartRef.current = COOLING_REQUIREMENT.targetSec;
                timerStartRef.current = Date.now();
                minFlowDuringCoolingRef.current = currentFlow;
                setCoolingDurationSet(COOLING_REQUIREMENT.targetSec);
                setTotalDuration(COOLING_REQUIREMENT.targetSec);
                setWarningMessage('');
            } else if (phase === 'cooling') {
                // Возобновить таймер после изменения напора (resume с текущего remaining)
                setTimerRunning(true);
                durationAtStartRef.current = secondsLeft > 0 ? secondsLeft : COOLING_REQUIREMENT.targetSec;
                timerStartRef.current = Date.now();
                setWarningMessage('');
            }
        }
    }["Step3_FaucetSterilize.useEffect"], [
        phase,
        currentFlow,
        timerRunning,
        secondsLeft
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Step3_FaucetSterilize.useEffect": ()=>{
            if (!timerRunning) {
                clearInterval(intervalRef.current);
                return;
            }
            timerStartRef.current = Date.now();
            const durationAtStart = durationAtStartRef.current;
            intervalRef.current = setInterval({
                "Step3_FaucetSterilize.useEffect": ()=>{
                    const flow = currentFlowRef.current;
                    const currentPhase = phaseRef.current;
                    if (currentPhase === 'sterilizing' && flow > 0.02) {
                        setTimerRunning(false);
                        setIsFlameOn(false);
                        setIsWipeActive(false);
                        setWarningMessage('⚠️ Вода не должна течь во время стерилизации! Закройте кран.');
                        return;
                    }
                    if (currentPhase === 'sterilizing' && faucetType === 'metal') {
                        // Для металла время накапливается отдельно в burn accumulator
                        return;
                    }
                    if (currentPhase === 'cooling') {
                        if (flow < 0.35) {
                            setTimerRunning(false);
                            setWarningMessage('⚠️ Откройте кран наполовину (слабой струей), чтобы охладить металл!');
                            return;
                        }
                        if (flow > 0.7) {
                            setTimerRunning(false);
                            setWarningMessage('⚠️ Напор слишком сильный! Приоткройте кран наполовину.');
                            return;
                        }
                        minFlowDuringCoolingRef.current = Math.min(minFlowDuringCoolingRef.current, flow);
                    }
                    setWarningMessage('');
                    const elapsed = Date.now() - timerStartRef.current;
                    const progress = Math.min(elapsed / REAL_TIMER_MS, 1);
                    const remaining = Math.max(0, Math.ceil(durationAtStart * (1 - progress)));
                    setSecondsLeft(remaining);
                    if (progress >= 1) {
                        clearInterval(intervalRef.current);
                        finishTimerPhase();
                    }
                }
            }["Step3_FaucetSterilize.useEffect"], 50);
            return ({
                "Step3_FaucetSterilize.useEffect": ()=>clearInterval(intervalRef.current)
            })["Step3_FaucetSterilize.useEffect"];
        }
    }["Step3_FaucetSterilize.useEffect"], [
        timerRunning,
        finishTimerPhase
    ]);
    const handleSelectType = (type)=>{
        setFaucetType(type);
        setPhase('sterilize_ready');
        setIsFlameOn(false);
        setIsWipeActive(false);
        setBurnSeconds(0);
        setBurnCompleted(false);
        setHasUsedWipe(false);
        setWipeHoldProgress(0);
        setBurnerFlameProgress(0);
        setSterilizeDurationSet(null);
        setCoolingDurationSet(null);
        setWarningMessage('');
        // Для металла таймер накопительный, для пластика без таймера на протирку
        resetTimerUi(type === 'metal' ? 0 : 0);
    };
    // handleLightBurner удалён — теперь включается автоматически при зажатии ЛКМ с горелкой в руке
    // adjustSterilizeSeconds удалён — время теперь накапливается автоматически при использовании горелки
    // adjustCoolingTime удалён — таймер охлаждения запускается автоматически при правильном напоре
    // handleStartSterilization удалён — всё запускается автоматически при правильном использовании предмета в руке + ЛКМ
    // handleStartCooling удалён — охлаждение запускается автоматически при открытии крана наполовину (0.35–0.7)
    const handleReset = ()=>{
        clearInterval(intervalRef.current);
        setTimerRunning(false);
        setIsFlameOn(false);
        setIsWipeActive(false);
        setIsFlameActive(false);
        setIsWipeWiping(false);
        setBurnSeconds(0);
        setBurnCompleted(false);
        setHasUsedWipe(false);
        setWipeHoldProgress(0);
        setBurnerFlameProgress(0);
        setFaucetType(null);
        setPhase('selection');
        setSecondsLeft(0);
        setTotalDuration(0);
        setSterilizeDurationSet(null);
        setCoolingDurationSet(null);
        setWarningMessage('');
    };
    const handleCompleteStep = ()=>{
        const errors = [];
        let scorePenalty = 0;
        if (phase !== 'done') {
            errors.push('Критическая ошибка: Технологический процесс стерилизации крана не был завершён.');
            scorePenalty += 40;
        }
        if (faucetType === 'metal') {
            const burnTime = sterilizeDurationSet || burnSeconds;
            if (burnTime < 20 || burnTime > 30) {
                errors.push(`Недостаточное / неправильное время обжига: нужно 20–30 секунд тщательного воздействия пламенем. Было ${Math.floor(burnTime)} с.`);
                scorePenalty += 15;
            }
            if (coolingDurationSet !== COOLING_REQUIREMENT.targetSec) {
                errors.push(`Неверное время охлаждения: нужно ${COOLING_REQUIREMENT.label} слабой струёй.`);
                scorePenalty += 15;
            }
        }
        if (faucetType === 'plastic' && !hasUsedWipe) {
            errors.push('Не использовали салфетку для интенсивной обработки носика крана (изнутри и снаружи).');
            scorePenalty += 25;
        }
        onComplete({
            sterilizeErrors: errors,
            sterilizeScorePenalty: scorePenalty,
            faucetType,
            sterilizeSuccess: scorePenalty === 0
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white w-full max-w-6xl rounded-xl shadow-xl border border-slate-200 overflow-hidden mb-6 flex flex-col lg:flex-row animate-fade-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full lg:w-1/3 p-8 border-r border-slate-100 bg-slate-50 flex flex-col gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200",
                                        children: "ШАГ 2.3"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                        lineNumber: 423,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-slate-800 mt-3",
                                        children: "Стерилизация крана"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                        lineNumber: 424,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-500 text-xs mt-1",
                                        children: "Обеззаразьте точку отбора перед взятием бактериологической пробы."
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                        lineNumber: 425,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                lineNumber: 422,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: inv.openInventory,
                                className: "w-full py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-md active:scale-95",
                                style: {
                                    background: 'linear-gradient(135deg,#1e3a5f,#1e40af)',
                                    color: 'white'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl",
                                        children: "🗃️"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                        lineNumber: 430,
                                        columnNumber: 13
                                    }, this),
                                    "Открыть инвентарь",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-1 text-xs opacity-60 font-mono bg-white/10 px-1.5 py-0.5 rounded",
                                        children: "Tab"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                        lineNumber: 432,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                lineNumber: 427,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1.5",
                                        children: [
                                            "В руке — ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-300 font-mono",
                                                children: "← →"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                                lineNumber: 436,
                                                columnNumber: 107
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                        lineNumber: 436,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-9 gap-1 p-2 rounded-xl bg-slate-900",
                                        children: inv.slots.slice(0, 9).map((item, i)=>{
                                            const isFlask = item && (item.id?.startsWith('chem_tare_') || item.id?.startsWith('bio_tare_'));
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `h-9 rounded-lg border-2 flex items-center justify-center text-base transition-all ${isFlask ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
                      ${i === inv.hotbarActive ? 'border-yellow-400 bg-slate-700 scale-110 shadow-lg shadow-yellow-400/20' : 'border-slate-700 bg-slate-800'}`,
                                                onClick: ()=>{
                                                    if (isFlask) return;
                                                    inv.setHotbarActive(i);
                                                },
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderItemIcon"])(item, 18)
                                            }, i, false, {
                                                fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                                lineNumber: 441,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                        lineNumber: 437,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1.5 text-center text-xs text-slate-400 min-h-[1rem]",
                                        children: inv.activeItemDef?.label || ''
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                        lineNumber: 455,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                lineNumber: 435,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                        lineNumber: 421,
                        columnNumber: 9
                    }, this),
                    faucetType === null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-slate-800 text-sm block",
                                children: "1. Из какого материала сделан кран?"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                lineNumber: 461,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleSelectType('metal'),
                                        className: "p-3 text-xs rounded-lg border-2 text-center transition-all border-slate-200 text-slate-600 hover:border-amber-300",
                                        children: "⚙️ Металлический"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                        lineNumber: 463,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleSelectType('plastic'),
                                        className: "p-3 text-xs rounded-lg border-2 text-center transition-all border-slate-200 text-slate-600 hover:border-sky-300",
                                        children: "🧪 Пластиковый"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                        lineNumber: 467,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                lineNumber: 462,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                        lineNumber: 460,
                        columnNumber: 11
                    }, this),
                    faucetType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3 animate-fade-in",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center border-b pb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-xs text-slate-400",
                                        children: "ПОРЯДОК ДЕЙСТВИЙ"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                        lineNumber: 478,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleReset,
                                        className: "text-[10px] text-slate-400 hover:text-red-500 font-bold",
                                        children: "Изменить кран 🔄"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                        lineNumber: 479,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                lineNumber: 477,
                                columnNumber: 13
                            }, this),
                            faucetType === 'metal' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                className: "list-decimal pl-4 space-y-1.5 text-xs text-slate-600 leading-relaxed",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Закройте кран. Возьмите портативную газовую горелку в руку (из инвентаря)."
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                        lineNumber: 484,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "Зажмите ЛКМ и поднесите пламя к краю излива (носок). Держите ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "20–30 секунд"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                                lineNumber: 485,
                                                columnNumber: 82
                                            }, this),
                                            " до прекращения шипения."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                        lineNumber: 485,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Приоткройте кран наполовину (0.35–0.7) — вода потечёт автоматически для охлаждения (1 мин)."
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                        lineNumber: 486,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                lineNumber: 483,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                className: "list-decimal pl-4 space-y-1.5 text-xs text-slate-600 leading-relaxed",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Закройте кран. Возьмите спиртовую салфетку (70%) в руку."
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                        lineNumber: 490,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Зажмите ЛКМ и интенсивно протрите носик крана изнутри и снаружи."
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                        lineNumber: 491,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                lineNumber: 489,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                        lineNumber: 476,
                        columnNumber: 11
                    }, this),
                    faucetType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-4 rounded-xl border border-slate-200 space-y-2 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold text-slate-800",
                                children: "Чек-лист:"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                lineNumber: 499,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5 font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: (faucetType === 'metal' ? burnCompleted : phase !== 'selection' && phase !== 'sterilize_ready' && phase !== 'sterilizing') ? 'text-emerald-500 font-bold' : 'text-slate-300',
                                                children: (faucetType === 'metal' ? burnCompleted : phase !== 'selection' && phase !== 'sterilize_ready' && phase !== 'sterilizing') ? '✓' : '○'
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                                lineNumber: 502,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: (faucetType === 'metal' ? burnCompleted : phase !== 'selection' && phase !== 'sterilize_ready' && phase !== 'sterilizing') ? 'line-through text-slate-400' : 'text-slate-600',
                                                children: faucetType === 'metal' ? 'Обжиг носка крана (20–30 с)' : 'Обработка салфеткой 70%'
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                                lineNumber: 505,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                        lineNumber: 501,
                                        columnNumber: 15
                                    }, this),
                                    faucetType === 'metal' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: phase === 'done' ? 'text-emerald-500 font-bold' : 'text-slate-300',
                                                children: phase === 'done' ? '✓' : '○'
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                                lineNumber: 511,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: phase === 'done' ? 'line-through text-slate-400' : 'text-slate-600',
                                                children: "Охлаждение слабой струёй (1 мин)"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                                lineNumber: 512,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                        lineNumber: 510,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                lineNumber: 500,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                        lineNumber: 498,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                lineNumber: 420,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full lg:w-1/3 p-6 bg-white flex flex-col items-center justify-center border-r border-slate-100 min-h-[450px] relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex justify-between items-center mb-4 z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-bold text-slate-400",
                                children: "КОНТРОЛЬ СМЕСИТЕЛЯ"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                lineNumber: 525,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-mono text-slate-500 font-bold bg-slate-100 px-2 py-1 rounded",
                                children: [
                                    "НАПОР: ",
                                    Math.round(currentFlow * 100),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                lineNumber: 526,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                        lineNumber: 524,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex-1 flex items-center justify-center relative",
                        onMouseEnter: ()=>setMouseOverFaucet(true),
                        onMouseLeave: ()=>setMouseOverFaucet(false),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FaucetSVG$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaucetSVG"], {
                                aeratorRemoved: true,
                                showAeratorRemovedBadge: false,
                                spotsLeft: 0,
                                isWiping: isWipeWiping && mouseOverFaucet,
                                onRemoveAerator: ()=>{},
                                onWipeSpot: ()=>{},
                                glovesEquipped: true,
                                blocked: phase === 'selection',
                                onFlowChange: (flow)=>setCurrentFlow(flow)
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                lineNumber: 536,
                                columnNumber: 11
                            }, this),
                            isWipeWiping && mouseOverFaucet && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-[240px] right-[110px] bg-sky-100 border border-sky-300 text-sky-800 text-[10px] font-bold px-2 py-1 rounded-full shadow flex flex-col items-center gap-0.5 pointer-events-none min-w-[90px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "🧴 Обработка салфеткой..."
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                        lineNumber: 550,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-1 bg-sky-200 rounded overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-1 bg-sky-600 transition-all duration-75",
                                            style: {
                                                width: `${Math.min(100, wipeHoldProgress / 3000 * 100)}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                            lineNumber: 552,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                        lineNumber: 551,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                lineNumber: 549,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                        lineNumber: 531,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                lineNumber: 523,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$MinecraftInventory$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                slots: inv.slots,
                selectedSlot: inv.selectedSlot,
                draggedSlot: inv.draggedSlot,
                equippedHelmet: inv.equippedHelmet,
                equippedGloves: inv.equippedGloves,
                onSlotClick: inv.handleSlotClick,
                onSlotRightClick: inv.handleSlotRightClick,
                onDragStart: inv.handleDragStart,
                onDrop: inv.handleDrop,
                onDragEnd: inv.handleDragEnd,
                isOpen: inv.isOpen,
                onClose: inv.closeInventory
            }, void 0, false, {
                fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                lineNumber: 562,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full lg:w-1/3 p-8 bg-slate-50 flex flex-col justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 w-full text-center",
                        children: "Смартфон — таймер"
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                        lineNumber: 579,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-64 h-[350px] bg-slate-900 rounded-[36px] p-3 shadow-2xl border-4 border-slate-800 flex flex-col relative overflow-hidden my-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-1 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-slate-800 rounded-b-xl z-20"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                lineNumber: 582,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-950 flex-1 rounded-[28px] p-4 flex flex-col justify-between items-center text-center border border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[9px] font-mono text-slate-500 tracking-widest uppercase block",
                                                children: "ТАЙМЕР СТЕРИЛИЗАЦИИ"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                                lineNumber: 586,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-semibold text-emerald-400 mt-1 block",
                                                children: [
                                                    phase === 'selection' && 'Выберите материал крана',
                                                    phase === 'sterilize_ready' && (faucetType === 'metal' ? '🔥 ПОДГОТОВКА К ОБЖИГУ' : '🧴 ПОДГОТОВКА К ОБРАБОТКЕ'),
                                                    phase === 'sterilizing' && (faucetType === 'metal' ? '🔥 ОБЖИГ НОСИКА' : '🧴 ОБРАБОТКА САЛФЕТКОЙ'),
                                                    phase === 'cooling_ready' && '💧 ГОТОВ К ОХЛАЖДЕНИЮ',
                                                    phase === 'cooling' && '💧 ОХЛАЖДЕНИЕ МЕТАЛЛА',
                                                    phase === 'done' && '✅ ПРОЦЕСС ЗАВЕРШЁН'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                                lineNumber: 587,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                        lineNumber: 585,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "my-auto w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-5xl font-mono font-black text-white tracking-widest text-center",
                                                children: faucetType === 'metal' && phase === 'sterilizing' ? `00:${Math.floor(burnSeconds).toString().padStart(2, '0')}` : formatTime(secondsLeft)
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                                lineNumber: 598,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-3 max-w-[140px] mx-auto",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-emerald-500 h-full transition-all duration-300",
                                                    style: {
                                                        width: `${totalDuration ? secondsLeft / totalDuration * 100 : 0}%`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                                    lineNumber: 604,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                                lineNumber: 603,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                        lineNumber: 597,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full space-y-2 mb-2",
                                        children: [
                                            warningMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[9px] font-bold text-rose-400 leading-tight bg-rose-950/40 p-2 rounded border border-rose-900/50",
                                                children: warningMessage
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                                lineNumber: 613,
                                                columnNumber: 17
                                            }, this),
                                            phase === 'cooling_ready' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-sky-900/60 border border-sky-700 p-2 rounded-lg text-sky-300 font-bold text-[10px] tracking-wide",
                                                children: "Приоткройте кран наполовину (0.35–0.7) — охлаждение запустится автоматически"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                                lineNumber: 621,
                                                columnNumber: 17
                                            }, this),
                                            (phase === 'sterilizing' || phase === 'cooling') && timerRunning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-slate-900 border border-slate-700 p-2 rounded-lg text-slate-400 font-bold text-[10px] tracking-wide animate-pulse",
                                                children: "⏳ Идёт процесс..."
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                                lineNumber: 627,
                                                columnNumber: 17
                                            }, this),
                                            phase === 'done' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-emerald-950/60 border border-emerald-800 p-2 rounded-lg text-emerald-400 font-bold text-[10px] tracking-wide",
                                                children: "✓ СТЕРИЛИЗАЦИЯ ВЫПОЛНЕНА"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                                lineNumber: 633,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                        lineNumber: 611,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                                lineNumber: 584,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                        lineNumber: 581,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full mt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            disabled: phase !== 'done',
                            onClick: handleCompleteStep,
                            className: "w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-4 rounded-xl shadow-md transition-all disabled:opacity-40",
                            children: "Подтвердить стерилизацию →"
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                            lineNumber: 642,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                        lineNumber: 641,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                lineNumber: 578,
                columnNumber: 7
            }, this),
            isHoldingValidTool && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$FollowCursor$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FollowCursor"], {
                activeItemDef: inv.activeItemDef,
                activeItem: inv.activeItem,
                replaceCursor: true,
                interacting: mouseOverFaucet,
                onBurnerFlameProgress: setBurnerFlameProgress
            }, void 0, false, {
                fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
                lineNumber: 653,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/steps/Stage2/Step3_FaucetSterilize.jsx",
        lineNumber: 417,
        columnNumber: 5
    }, this);
}
_s(Step3_FaucetSterilize, "UPpUYyQ7DdiBrfX15BPjPr5OX8c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$InventoryContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInventoryContext"]
    ];
});
_c = Step3_FaucetSterilize;
var _c;
__turbopack_context__.k.register(_c, "Step3_FaucetSterilize");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/steps/Stage2/Step4_BioSampling.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Step4_BioSampling
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FaucetSVG$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/FaucetSVG.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$MinecraftInventory$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/MinecraftInventory.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$InventoryContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/InventoryContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/itemRegistry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$FollowCursor$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/FollowCursor.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function Step4_BioSampling({ logs, onComplete }) {
    _s();
    const inv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$InventoryContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInventoryContext"])();
    const [currentFlow, setCurrentFlow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [bottleInPosition, setBottleInPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [removeModalOpen, setRemoveModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [closeModalOpen, setCloseModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [foilRemoved, setFoilRemoved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [stopperRemoved, setStopperRemoved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [foilOn, setFoilOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [stopperOn, setStopperOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fillLevel, setFillLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0); // 0 to 1
    const [stepCompleted, setStepCompleted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasWrongOrder, setHasWrongOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [airGapOk, setAirGapOk] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [hasOverflowed, setHasOverflowed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fillInterval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const errors = [];
    let scorePenalty = 0;
    const isHoldingBioBottle = inv.activeItem && inv.activeItem.id && inv.activeItem.id.startsWith('bio_tare_');
    // Флакон открыт и стоит под краном — вода набирается внутрь
    const bottleOpenUnderTap = bottleInPosition && foilRemoved && stopperRemoved && !foilOn && !stopperOn;
    const sideStreamWidth = Math.max(2, currentFlow * 5);
    // Fill logic: allow filling to the brim (1.0). When at brim and still flowing -> overflow (error)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Step4_BioSampling.useEffect": ()=>{
            const effectiveFlow = currentFlow > 0.05 ? currentFlow : 0;
            const shouldFill = bottleOpenUnderTap && effectiveFlow > 0 && fillLevel < 1.0;
            if (shouldFill) {
                if (!fillInterval.current) {
                    fillInterval.current = setInterval({
                        "Step4_BioSampling.useEffect": ()=>{
                            setFillLevel({
                                "Step4_BioSampling.useEffect": (prev)=>{
                                    const increment = effectiveFlow * 0.025;
                                    const newLevel = Math.min(1.0, prev + increment);
                                    return newLevel;
                                }
                            }["Step4_BioSampling.useEffect"]);
                        }
                    }["Step4_BioSampling.useEffect"], 250);
                }
            } else if (fillInterval.current) {
                clearInterval(fillInterval.current);
                fillInterval.current = null;
            }
            return ({
                "Step4_BioSampling.useEffect": ()=>{
                    if (fillInterval.current) {
                        clearInterval(fillInterval.current);
                        fillInterval.current = null;
                    }
                }
            })["Step4_BioSampling.useEffect"];
        }
    }["Step4_BioSampling.useEffect"], [
        bottleInPosition,
        currentFlow,
        foilRemoved,
        stopperRemoved,
        foilOn,
        stopperOn,
        fillLevel
    ]);
    // Detect overflow when full and still flowing (during open phase)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Step4_BioSampling.useEffect": ()=>{
            if (bottleOpenUnderTap && currentFlow > 0.05 && fillLevel >= 1.0) {
                setHasOverflowed(true);
            }
        }
    }["Step4_BioSampling.useEffect"], [
        bottleOpenUnderTap,
        currentFlow,
        fillLevel
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Step4_BioSampling.useEffect": ()=>{
            const shouldHide = isHoldingBioBottle && !bottleInPosition;
            if (shouldHide) {
                document.body.style.cursor = 'none';
            } else {
                document.body.style.cursor = 'auto';
            }
            return ({
                "Step4_BioSampling.useEffect": ()=>{
                    document.body.style.cursor = 'auto';
                }
            })["Step4_BioSampling.useEffect"];
        }
    }["Step4_BioSampling.useEffect"], [
        isHoldingBioBottle,
        bottleInPosition
    ]);
    const removeFoil = ()=>{
        if (!foilRemoved) setFoilRemoved(true);
    };
    const removeStopper = ()=>{
        if (!foilRemoved || stopperRemoved) return;
        setStopperRemoved(true);
    };
    const closeRemoveModal = ()=>{
        setRemoveModalOpen(false);
    };
    const placeStopper = ()=>{
        if (stopperOn) return;
        if (foilOn) {
            setHasWrongOrder(true);
        }
        setStopperOn(true);
    };
    const placeFoil = ()=>{
        if (foilOn) return;
        if (!stopperOn) {
            setHasWrongOrder(true);
        }
        setFoilOn(true);
    };
    const removeFoilFromClose = ()=>{
        setFoilOn(false);
    };
    const closeBottle = ()=>{
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
            bioSampleOverflowed: hasOverflowed
        });
    };
    const isBioBottleActive = isHoldingBioBottle;
    const handlePlaceBottle = ()=>{
        if (isHoldingBioBottle && !bottleInPosition) {
            setBottleInPosition(true);
            if (!foilRemoved || !stopperRemoved) {
                setRemoveModalOpen(true);
            } else {
                setCloseModalOpen(true);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white w-full max-w-6xl rounded-xl shadow-xl border border-slate-200 overflow-hidden mb-6 flex flex-col lg:flex-row animate-fade-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full lg:w-1/3 p-8 border-r border-slate-100 bg-slate-50 flex flex-col gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200",
                                children: "ШАГ 2.4"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-slate-800 mt-3",
                                children: "Отбор на бактериологический анализ"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 text-xs mt-1",
                                children: "Наберите пробу в стерильный флакон с тиосульфатом."
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                className: "list-decimal pl-4 space-y-1.5 text-slate-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Возьмите стерильный флакон 0.5 дм³ в руку из инвентаря (курсор заменится на флакон)."
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                        lineNumber: 174,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Кликните по крану, чтобы вручную поднести флакон под струю, тогда откроется окно."
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "В окошке снимите колпачок и пробку (не касайтесь горлышка и внутренней поверхности пробки)."
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                        lineNumber: 176,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Закройте окно. Откройте воду. Наберите с воздушным зазором ~1-2 см."
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                        lineNumber: 177,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Закройте воду. Кликните по флакону, чтобы закрыть."
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "В окошке сначала наденьте пробку, затем колпачок."
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] text-amber-600",
                                children: "⚠️ Не ополаскивайте флакон. Тиосульфат внутри сухой."
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: inv.openInventory,
                        className: "w-full py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-700 to-emerald-800 text-white hover:brightness-110 transition-all",
                        children: "🗃️ Открыть инвентарь"
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1.5",
                                children: "В руке — ← →"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-9 gap-1 p-2 rounded-xl bg-slate-900",
                                children: inv.slots.slice(0, 9).map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `h-9 rounded-lg border-2 flex items-center justify-center text-base transition-all ${item?.id === 'gas_burner' || item?.id?.includes('wipes') || item?.id?.includes('wipe') ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'} ${i === inv.hotbarActive ? 'border-yellow-400 bg-slate-700 scale-110' : 'border-slate-700 bg-slate-800'}`,
                                        onClick: ()=>{
                                            if (item?.id === 'gas_burner' || item?.id?.includes('wipes') || item?.id?.includes('wipe')) return;
                                            inv.setHotbarActive(i);
                                        },
                                        children: item ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderItemIcon"])(item, 18) : ''
                                    }, i, false, {
                                        fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                        lineNumber: 196,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1.5 text-center text-xs text-slate-400 min-h-[1rem]",
                                children: inv.activeItemDef?.label || ''
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                lineNumber: 208,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full lg:w-1/3 p-6 bg-white flex flex-col items-center border-r border-slate-100 min-h-[520px] relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex justify-between items-center mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-bold text-slate-400",
                                children: "СТЕРИЛЬНЫЙ КРАН"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                lineNumber: 215,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded",
                                children: [
                                    "НАПОР: ",
                                    Math.round(currentFlow * 100),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex-1 flex items-center justify-center relative",
                        onClick: handlePlaceBottle,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FaucetSVG$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaucetSVG"], {
                                aeratorRemoved: true,
                                spotsLeft: 0,
                                isWiping: false,
                                onRemoveAerator: ()=>{},
                                onWipeSpot: ()=>{},
                                glovesEquipped: true,
                                blocked: false,
                                onFlowChange: setCurrentFlow,
                                bottleUnderSpout: bottleInPosition
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this),
                            bottleInPosition && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-[325px] right-[calc(20%+3px)] w-[40px] h-[70px] border-2 border-slate-400 rounded-t-lg rounded-b-lg bg-white shadow-md z-10 cursor-pointer flex flex-col overflow-hidden",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    if (!foilRemoved || !stopperRemoved) {
                                        setRemoveModalOpen(true);
                                    } else {
                                        setCloseModalOpen(true);
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 left-0 w-full bg-sky-400 transition-all duration-300 ease-out rounded-t-lg rounded-b-lg",
                                        style: {
                                            height: `${fillLevel * 100}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                        lineNumber: 248,
                                        columnNumber: 15
                                    }, this),
                                    stopperOn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-[0.3px] left-1/2 -translate-x-1/2 w-[17px] h-[6px] bg-gray-400 rounded-sm border border-gray-500 z-20"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                        lineNumber: 254,
                                        columnNumber: 17
                                    }, this),
                                    foilOn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-[1.25px] left-1/2 -translate-x-1/2 w-[22px] h-[4px] bg-gray-300 border border-gray-400 z-30"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                        lineNumber: 258,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-1 right-0.5 text-[4px] text-slate-500 font-mono",
                                        children: "0.5L"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                        lineNumber: 260,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                lineNumber: 237,
                                columnNumber: 13
                            }, this),
                            bottleInPosition && currentFlow > 0.05 && (foilOn && stopperOn || hasOverflowed) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bg-sky-400/70 rounded-t-lg pointer-events-none animate-pulse",
                                        style: {
                                            top: '320px',
                                            right: `calc(20% + 3px - ${sideStreamWidth}px)`,
                                            width: `${40 + 2 * sideStreamWidth}px`,
                                            height: '12px',
                                            zIndex: 5
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                        lineNumber: 270,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bg-sky-400/70 rounded-full pointer-events-none animate-pulse",
                                        style: {
                                            top: '325px',
                                            right: 'calc(20% + 3px + 40px)',
                                            width: `${sideStreamWidth}px`,
                                            height: '155px',
                                            zIndex: 5,
                                            boxShadow: '0 0 4px rgba(56, 189, 248, 0.6)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                        lineNumber: 284,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bg-sky-400/70 rounded-full pointer-events-none animate-pulse",
                                        style: {
                                            top: '325px',
                                            right: `calc(20% + 3px - ${sideStreamWidth}px)`,
                                            width: `${sideStreamWidth}px`,
                                            height: '155px',
                                            zIndex: 5,
                                            boxShadow: '0 0 4px rgba(56, 189, 248, 0.6)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                        lineNumber: 296,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true),
                            isBioBottleActive && !bottleInPosition && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs px-3 py-1 rounded-full shadow pointer-events-none",
                                children: "Кликните по крану, чтобы поднести флакон"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                lineNumber: 312,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full lg:w-1/3 p-8 bg-slate-50 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xs font-bold text-slate-400 uppercase mb-3",
                                children: "Процесс отбора"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                lineNumber: 322,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-3 rounded-xl border ${bottleInPosition ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-slate-200'}`,
                                        children: [
                                            "1. Флакон поднесён к крану ",
                                            bottleInPosition && '✓'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                        lineNumber: 324,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-3 rounded-xl border ${foilRemoved && stopperRemoved ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-slate-200'}`,
                                        children: [
                                            "2. Сняты колпачок и пробка ",
                                            foilRemoved && stopperRemoved && '✓'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                        lineNumber: 327,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-3 rounded-xl border ${fillLevel > 0.1 ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-slate-200'}`,
                                        children: [
                                            "3. Набранная вода: ",
                                            (fillLevel * 100).toFixed(0),
                                            "% (воздушный зазор ~",
                                            Math.max(0, 100 - fillLevel * 100).toFixed(0),
                                            "% ",
                                            fillLevel >= 1 ? '⚠️ переполнен' : '',
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                        lineNumber: 330,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-3 rounded-xl border ${stepCompleted ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-slate-200'}`,
                                        children: [
                                            "4. Флакон закрыт ",
                                            stepCompleted && '✓'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                        lineNumber: 333,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                lineNumber: 323,
                                columnNumber: 11
                            }, this),
                            hasWrongOrder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 p-3 bg-amber-100 border border-amber-300 rounded-xl text-xs text-amber-700",
                                children: "⚠️ Была нарушена последовательность. Это снизит оценку."
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                lineNumber: 339,
                                columnNumber: 13
                            }, this),
                            hasOverflowed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 p-3 bg-red-100 border border-red-300 rounded-xl text-xs text-red-700",
                                children: "⚠️ Флакон переполнен — вода выливалась через край. Это ошибка и снизит оценку."
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                lineNumber: 344,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                        lineNumber: 321,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                if (stepCompleted) {
                                    const finalErrors = [
                                        ...errors
                                    ];
                                    if (hasWrongOrder) finalErrors.push('Нарушена последовательность закрытия флакона.');
                                    if (!airGapOk) {
                                        if (hasOverflowed) finalErrors.push('Флакон переполнен — вода выливалась через край.');
                                        else finalErrors.push('Неправильный воздушный зазор.');
                                    }
                                    const penalty = (hasWrongOrder ? 20 : 0) + (hasOverflowed ? 10 : 0) + (!airGapOk && !hasOverflowed ? 15 : 0);
                                    onComplete({
                                        bioSampleErrors: finalErrors,
                                        bioSampleScorePenalty: penalty,
                                        bioSampleSuccess: !hasWrongOrder && airGapOk && !hasOverflowed
                                    });
                                }
                            },
                            disabled: !stepCompleted,
                            className: "w-full py-4 rounded-2xl font-bold text-sm bg-emerald-700 text-white disabled:bg-slate-300 disabled:text-slate-500 transition-all",
                            children: stepCompleted ? 'Завершить отбор пробы →' : 'Выполните все действия с флаконом'
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                            lineNumber: 351,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                        lineNumber: 350,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                lineNumber: 320,
                columnNumber: 7
            }, this),
            removeModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/70",
                onClick: closeRemoveModal,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl p-8 w-full max-w-md mx-4 relative",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-bold text-lg mb-2",
                            children: "Стерильный флакон 0.5 дм³"
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                            lineNumber: 380,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-slate-600 mb-6",
                            children: "Сначала снимите колпачок из фольги, потом пробку. Снятые предметы переместятся рядом с флаконом."
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                            lineNumber: 381,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center gap-6 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-40 h-64 border-4 border-slate-300 rounded-t-3xl rounded-b-xl bg-slate-50 overflow-hidden flex-shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-b from-transparent via-sky-100/30 to-sky-200/30"
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                            lineNumber: 386,
                                            columnNumber: 17
                                        }, this),
                                        !foilRemoved && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: removeFoil,
                                            className: "absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-300 border-b-2 border-gray-400 shadow cursor-pointer hover:brightness-95 transition-all",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center text-[10px] text-gray-600 font-bold pt-0.5",
                                                children: "ФОЛЬГА"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                                lineNumber: 394,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                            lineNumber: 390,
                                            columnNumber: 19
                                        }, this),
                                        !stopperRemoved && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: removeStopper,
                                            className: `absolute top-4 left-1/2 -translate-x-1/2 w-16 h-5 bg-gray-400 rounded cursor-pointer hover:brightness-95 transition-all ${!foilRemoved ? 'opacity-40 cursor-not-allowed' : ''}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center text-[9px] text-white font-bold",
                                                children: "ПРОБКА"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                                lineNumber: 404,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                            lineNumber: 400,
                                            columnNumber: 19
                                        }, this),
                                        foilRemoved && stopperRemoved && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-2 left-1/2 -translate-x-1/2 text-xs text-emerald-600 font-bold",
                                            children: "ГОРЛЫШКО ОТКРЫТО"
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                            lineNumber: 409,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                    lineNumber: 385,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-2 mt-8",
                                    children: [
                                        foilRemoved && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-20 h-6 bg-gray-300 border-b-2 border-gray-400 shadow flex items-center justify-center text-[10px] text-gray-700 font-bold",
                                            children: "ФОЛЬГА"
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                            lineNumber: 416,
                                            columnNumber: 19
                                        }, this),
                                        stopperRemoved && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-5 bg-gray-400 rounded shadow flex items-center justify-center text-[9px] text-white font-bold",
                                            children: "ПРОБКА"
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                            lineNumber: 421,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                    lineNumber: 414,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                            lineNumber: 383,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: closeRemoveModal,
                            className: "absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-2xl leading-none text-slate-400 hover:text-slate-600 transition-colors",
                            "aria-label": "Закрыть",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                            lineNumber: 428,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] text-center text-slate-500 mt-3",
                            children: "Кликните по колпачку и пробке, чтобы снять."
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                            lineNumber: 435,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                    lineNumber: 379,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                lineNumber: 378,
                columnNumber: 9
            }, this),
            closeModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/70",
                onClick: ()=>setCloseModalOpen(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl p-8 w-full max-w-lg mx-4 relative",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setCloseModalOpen(false),
                            className: "absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-2xl leading-none text-slate-400 hover:text-slate-600 transition-colors",
                            "aria-label": "Закрыть",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                            lineNumber: 444,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-bold text-lg mb-1",
                            children: "Закрытие стерильного флакона"
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                            lineNumber: 451,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-slate-600 mb-4",
                            children: "Сначала наденьте пробку, затем колпачок. Нажмите на предметы рядом с флаконом."
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                            lineNumber: 452,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center gap-8 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-40 h-64 border-4 border-slate-300 rounded-t-3xl rounded-b-xl bg-slate-50 overflow-hidden flex-shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-0 left-0 w-full bg-sky-400 transition-all duration-300 ease-out rounded-b-lg",
                                            style: {
                                                height: `${fillLevel * 100}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                            lineNumber: 457,
                                            columnNumber: 17
                                        }, this),
                                        stopperOn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -top-0.5 left-1/2 -translate-x-1/2 w-8 h-3 bg-gray-400 rounded-sm border border-gray-500 z-20"
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                            lineNumber: 463,
                                            columnNumber: 19
                                        }, this),
                                        foilOn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-2 bg-gray-300 border border-gray-400 z-30"
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                            lineNumber: 467,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                    lineNumber: 456,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-4 text-center",
                                    children: [
                                        !stopperOn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: placeStopper,
                                            className: "w-20 h-6 bg-gray-400 rounded-sm border border-gray-500 cursor-pointer hover:scale-105 transition-all flex items-center justify-center shadow",
                                            title: "Надеть пробку",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-white font-bold",
                                                children: "ПРОБКА"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                                lineNumber: 480,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                            lineNumber: 475,
                                            columnNumber: 19
                                        }, this),
                                        stopperOn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-20 h-6 bg-gray-400 rounded-sm border border-gray-500 opacity-40 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-white font-bold",
                                                children: "ПРОБКА ✓"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                                lineNumber: 483,
                                                columnNumber: 147
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                            lineNumber: 483,
                                            columnNumber: 31
                                        }, this),
                                        !foilOn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: placeFoil,
                                            className: "w-24 h-3 bg-gray-300 border border-gray-400 cursor-pointer hover:scale-105 transition-all flex items-center justify-center shadow",
                                            title: "Надеть колпачок из фольги",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[9px] text-gray-700 font-bold",
                                                children: "ФОЛЬГА"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                                lineNumber: 492,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                            lineNumber: 487,
                                            columnNumber: 19
                                        }, this),
                                        foilOn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-24 h-3 bg-gray-300 border border-gray-400 opacity-40 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[9px] text-gray-700 font-bold",
                                                children: "ФОЛЬГА ✓"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                                lineNumber: 495,
                                                columnNumber: 133
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                            lineNumber: 495,
                                            columnNumber: 28
                                        }, this),
                                        hasWrongOrder && foilOn && !stopperOn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: removeFoilFromClose,
                                            className: "text-xs bg-amber-500 text-white px-3 py-1 rounded hover:bg-amber-600",
                                            children: "Снять колпачок"
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                            lineNumber: 498,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                                    lineNumber: 472,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                            lineNumber: 454,
                            columnNumber: 13
                        }, this),
                        stopperOn && foilOn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: closeBottle,
                            className: "w-full py-3 bg-emerald-700 text-white rounded-2xl font-bold hover:bg-emerald-800 transition-all",
                            children: "Завершить закрытие флакона"
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                            lineNumber: 509,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] text-center text-slate-500 mt-3",
                            children: "Сначала пробка, потом колпачок. Неправильный порядок снизит оценку."
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                            lineNumber: 516,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                    lineNumber: 443,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                lineNumber: 442,
                columnNumber: 9
            }, this),
            isHoldingBioBottle && !bottleInPosition && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$FollowCursor$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FollowCursor"], {
                activeItemDef: inv.activeItemDef,
                activeItem: inv.activeItem,
                replaceCursor: true
            }, void 0, false, {
                fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
                lineNumber: 522,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/steps/Stage2/Step4_BioSampling.jsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
}
_s(Step4_BioSampling, "Hz9lTfR1s3EpkrWitOZQc/+nyVw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$InventoryContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInventoryContext"]
    ];
});
_c = Step4_BioSampling;
var _c;
__turbopack_context__.k.register(_c, "Step4_BioSampling");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/steps/Stage2/Step5_ChemSampling.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Step5_ChemSampling
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FaucetSVG$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/FaucetSVG.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Step5_ChemSampling({ logs, onComplete }) {
    _s();
    const [currentFlow, setCurrentFlow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [rinseCount, setRinseCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [containerPos, setContainerPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        left: 380,
        top: 160
    });
    const [fillLevel, setFillLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [tiltAngle, setTiltAngle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTilting, setIsTilting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPouring, setIsPouring] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dragOffset, setDragOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [hint, setHint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [completed, setCompleted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('rinsing'); // 'rinsing' | 'sampling'
    const [lidAttached, setLidAttached] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [closeModalOpen, setCloseModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tiltStartX, setTiltStartX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fillIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pourIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const CONTAINER_W = 33;
    const CONTAINER_H = 73;
    const SINK_Y = 308;
    const sideStreamWidth = Math.max(2, currentFlow * 5);
    // Добавьте этот реф и эффект синхронизации
    const fillLevelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Step5_ChemSampling.useEffect": ()=>{
            fillLevelRef.current = fillLevel;
        }
    }["Step5_ChemSampling.useEffect"], [
        fillLevel
    ]);
    const isUnderStream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Step5_ChemSampling.useCallback[isUnderStream]": ()=>{
            const neckX = containerPos.left + CONTAINER_W / 2;
            return currentFlow > 0.05 && neckX > 155 && neckX < 255;
        }
    }["Step5_ChemSampling.useCallback[isUnderStream]"], [
        containerPos,
        currentFlow
    ]);
    const getHint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Step5_ChemSampling.useCallback[getHint]": ()=>{
            if (phase === 'sampling') {
                if (fillLevel < 1) return 'Опустите емкость под струю, наклонив под углом';
                if (!lidAttached) return 'Кликните по емкости, чтобы закрутить крышку';
                return 'Нажмите кнопку для завершения';
            }
            if (completed || rinseCount >= 3) return 'Этап ополаскивания завершен';
            if (fillLevel < 0.99) return 'Перетащите емкость под струю воды';
            if (isUnderStream()) return 'Отведите емкость в сторону';
            return 'Возьмите емкость за нижнюю часть и наклоните для слива';
        }
    }["Step5_ChemSampling.useCallback[getHint]"], [
        phase,
        fillLevel,
        lidAttached,
        completed,
        rinseCount,
        isUnderStream
    ]);
    // Update hint
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Step5_ChemSampling.useEffect": ()=>{
            setHint(getHint());
        }
    }["Step5_ChemSampling.useEffect"], [
        getHint
    ]);
    // Fill logic
    const startFill = ()=>{
        if (fillIntervalRef.current || isPouring || completed) return;
        fillIntervalRef.current = setInterval(()=>{
            // Рассчитываем значение напрямую через реф
            const currentVal = fillLevelRef.current;
            const next = Math.min(1, currentVal + 0.07);
            fillLevelRef.current = next; // Синхронно обновляем реф
            setFillLevel(next); // Безопасное плоское обновление стейта
            if (next >= 1) {
                if (fillIntervalRef.current) {
                    clearInterval(fillIntervalRef.current);
                    fillIntervalRef.current = null;
                }
            }
        }, 110);
    };
    const stopFill = ()=>{
        if (fillIntervalRef.current) {
            clearInterval(fillIntervalRef.current);
            fillIntervalRef.current = null;
        }
    };
    // Pour logic
    const isPouringRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const startPour = ()=>{
        if (pourIntervalRef.current || isPouringRef.current || completed) return;
        isPouringRef.current = true;
        setIsPouring(true);
        pourIntervalRef.current = setInterval(()=>{
            // Рассчитываем значение напрямую через реф
            const currentVal = fillLevelRef.current;
            const next = Math.max(0, currentVal - 0.1);
            fillLevelRef.current = next; // Синхронно обновляем реф
            setFillLevel(next); // Безопасное плоское обновление стейта
            if (next <= 0) {
                if (pourIntervalRef.current) {
                    clearInterval(pourIntervalRef.current);
                    pourIntervalRef.current = null;
                }
                isPouringRef.current = false;
                setIsPouring(false);
                setTiltAngle(0);
                // Сработает строго один раз, так как находится вне коллбека prev => ...
                setRinseCount((prevCount)=>prevCount + 1);
            }
        }, 90);
    };
    // Эффект переключения фазы при достижении 3 ополаскиваний
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Step5_ChemSampling.useEffect": ()=>{
            if (rinseCount >= 3) {
                setPhase('sampling');
                setFillLevel(0);
                fillLevelRef.current = 0; // Сбрасываем реф синхронно
                setTiltAngle(0);
                setLidAttached(false);
            }
        }
    }["Step5_ChemSampling.useEffect"], [
        rinseCount
    ]);
    // Mouse handlers
    const handleContainerMouseDown = (e)=>{
        if (isPouring || completed) return;
        const rect = containerRef.current ? containerRef.current.getBoundingClientRect() : {
            top: 0,
            left: 0,
            height: CONTAINER_H,
            width: CONTAINER_W
        };
        const relY = e.clientY - rect.top;
        const isBottomGrab = relY > rect.height * 0.55;
        // В фазе sampling разрешаем наклон при любом уровне наполнения, если схватились за нижнюю часть
        if (phase === 'sampling') {
            if (isBottomGrab) {
                setIsTilting(true);
                setIsDragging(false);
                setTiltStartX(e.clientX); // Фиксируем начальную точку для расчета наклона
            } else {
                setIsDragging(true);
                setIsTilting(false);
                setDragOffset({
                    x: e.clientX - containerPos.left,
                    y: e.clientY - containerPos.top
                });
            }
            return;
        }
        // Для фазы rinsing (ополаскивание) сохраняем старую логику:
        // наклон для слива доступен только при полной емкости вне струи
        if (fillLevel >= 0.99 && !isUnderStream() && isBottomGrab) {
            setIsTilting(true);
            setIsDragging(false);
            setTiltStartX(e.clientX); // Также инициализируем для корректности
        } else {
            setIsDragging(true);
            setIsTilting(false);
            setDragOffset({
                x: e.clientX - containerPos.left,
                y: e.clientY - containerPos.top
            });
        }
    };
    const handleContainerClick = (e)=>{
        e.stopPropagation();
        if (phase === 'sampling' && fillLevel >= 1 && !lidAttached && !isPouring && !isTilting && !isDragging) {
            setCloseModalOpen(true);
        }
    };
    const handleMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Step5_ChemSampling.useCallback[handleMouseMove]": (e)=>{
            if (isDragging) {
                const newLeft = Math.max(60, Math.min(520, e.clientX - dragOffset.x));
                const newTop = Math.max(60, Math.min(380, e.clientY - dragOffset.y));
                setContainerPos({
                    left: newLeft,
                    top: newTop
                });
                const neckXCheck = newLeft + CONTAINER_W / 2;
                const under = currentFlow > 0.05 && neckXCheck > 155 && neckXCheck < 255;
                const properForSampling = phase !== 'sampling' || Math.abs(tiltAngle) > 10;
                if (under && properForSampling && fillLevel < 1 && !isPouring && !completed) {
                    startFill();
                }
            }
            if (isTilting) {
                if (!containerRef.current) return;
                // 1. Получаем стабильные координаты родительского контейнера
                const parentRect = containerRef.current.parentElement.getBoundingClientRect();
                // 2. Рассчитываем стабильную точку опоры (горлышко) в глобальных координатах
                const neckX = parentRect.left + containerPos.left + CONTAINER_W / 2;
                const neckY = parentRect.top + containerPos.top;
                // 3. Вычисляем вектор от горлышка до мыши
                const dx = e.clientX - neckX;
                const dy = e.clientY - neckY;
                // 4. Математический маятник: рассчитываем угол так, чтобы дно тянулось за курсором
                let angle = -Math.atan2(dx, Math.abs(dy)) * (180 / Math.PI);
                if (phase === 'sampling') {
                    // Мягкий наклон без слива на протяжении всей фазы sampling (ограничение до 30 градусов)
                    angle = Math.max(-30, Math.min(30, angle));
                    setTiltAngle(angle);
                    const neckXCheck = containerPos.left + CONTAINER_W / 2;
                    const under = currentFlow > 0.05 && neckXCheck > 155 && neckXCheck < 255;
                    if (under && Math.abs(angle) > 10 && fillLevel < 1 && !isPouring && !completed) {
                        startFill();
                    }
                    return;
                }
                // РАСЧЕТ ДЛЯ ФАЗЫ ОПОЛАСКИВАНИЯ (RINSING):
                angle = Math.max(-120, Math.min(120, angle));
                setTiltAngle(angle);
                if (Math.abs(angle) > 75 && fillLevelRef.current > 0.01 && !isPouringRef.current) {
                    startPour();
                }
            }
        }
    }["Step5_ChemSampling.useCallback[handleMouseMove]"], [
        isDragging,
        isTilting,
        dragOffset,
        currentFlow,
        fillLevel,
        isPouring,
        completed,
        phase,
        tiltAngle,
        tiltStartX,
        containerPos
    ]);
    const handleMouseUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Step5_ChemSampling.useCallback[handleMouseUp]": ()=>{
            setIsDragging(false);
            if (isTilting) {
                setIsTilting(false);
                if (!isPouring) {
                    setTiltAngle(0);
                }
            }
        }
    }["Step5_ChemSampling.useCallback[handleMouseUp]"], [
        isTilting,
        isPouring
    ]);
    // Global listeners
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Step5_ChemSampling.useEffect": ()=>{
            if (isDragging || isTilting) {
                window.addEventListener('mousemove', handleMouseMove);
                window.addEventListener('mouseup', handleMouseUp);
            }
            return ({
                "Step5_ChemSampling.useEffect": ()=>{
                    window.removeEventListener('mousemove', handleMouseMove);
                    window.removeEventListener('mouseup', handleMouseUp);
                }
            })["Step5_ChemSampling.useEffect"];
        }
    }["Step5_ChemSampling.useEffect"], [
        isDragging,
        isTilting,
        handleMouseMove,
        handleMouseUp
    ]);
    // Auto fill / stop based on position
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Step5_ChemSampling.useEffect": ()=>{
            const neckXCheck = containerPos.left + CONTAINER_W / 2;
            const under = currentFlow > 0.05 && neckXCheck > 155 && neckXCheck < 255;
            const properTilt = phase !== 'sampling' || Math.abs(tiltAngle) > 10;
            if (under && properTilt && fillLevel < 1 && !isPouring && !completed) {
                startFill();
            } else if (!under || !properTilt) {
                stopFill();
            }
        }
    }["Step5_ChemSampling.useEffect"], [
        containerPos,
        currentFlow,
        fillLevel,
        isPouring,
        completed,
        CONTAINER_W,
        phase,
        tiltAngle
    ]);
    // Cleanup
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Step5_ChemSampling.useEffect": ()=>{
            return ({
                "Step5_ChemSampling.useEffect": ()=>{
                    if (fillIntervalRef.current) clearInterval(fillIntervalRef.current);
                    if (pourIntervalRef.current) clearInterval(pourIntervalRef.current);
                }
            })["Step5_ChemSampling.useEffect"];
        }
    }["Step5_ChemSampling.useEffect"], []);
    const handleComplete = ()=>{
        if (phase === 'sampling' && lidAttached) {
            onComplete({
                chemRinseCompleted: true,
                chemRinseCount: rinseCount,
                chemSampleFilled: true,
                chemSampleSuccess: true
            });
        }
    };
    const underStream = isUnderStream();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white w-full max-w-6xl rounded-xl shadow-xl border border-slate-200 overflow-hidden mb-6 flex flex-col lg:flex-row animate-fade-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full lg:w-1/3 p-8 border-r border-slate-100 bg-slate-50 flex flex-col gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200",
                                children: "ШАГ 2.5"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-slate-800 mt-3",
                                children: "Набор пробы на химический анализ"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                lineNumber: 290,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 text-xs mt-1",
                                children: phase === 'rinsing' ? 'Ополосните полимерную емкость 2.0 дм³ три раза.' : 'Наберите пробу до краев, вытеснив воздух.'
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                lineNumber: 291,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3 text-xs",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                            className: "list-decimal pl-4 space-y-1.5 text-slate-600",
                            children: phase === 'rinsing' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Возьмите полимерную емкость (2.0 дм³)."
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                        lineNumber: 298,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Ополосните емкость и крышку отбираемой водой из крана 3 раза."
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                        lineNumber: 299,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Опустите емкость под струю, наклонив под углом."
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                        lineNumber: 300,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Наберите воду под пробку (до краев), вытесняя воздух."
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                        lineNumber: 301,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Опустите емкость под струю, наклонив под углом."
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                        lineNumber: 305,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Наберите воду до краев, вытесняя воздух."
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                        lineNumber: 306,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Плотно закрутите крышку."
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                        lineNumber: 307,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                            lineNumber: 295,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                        lineNumber: 294,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                lineNumber: 287,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full lg:w-1/3 p-6 bg-white flex flex-col items-center border-r border-slate-100 min-h-[520px] relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex justify-between items-center mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-bold text-slate-400",
                                children: "КРАН"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                lineNumber: 317,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded",
                                children: [
                                    "НАПОР: ",
                                    Math.round(currentFlow * 100),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                lineNumber: 318,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                        lineNumber: 316,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex-1 flex items-center justify-center relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FaucetSVG$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaucetSVG"], {
                                aeratorRemoved: true,
                                spotsLeft: 0,
                                isWiping: false,
                                onRemoveAerator: ()=>{},
                                onWipeSpot: ()=>{},
                                glovesEquipped: true,
                                blocked: false,
                                onFlowChange: setCurrentFlow
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                lineNumber: 322,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: containerRef,
                                className: `absolute border-[3px] border-slate-500 bg-white shadow-lg flex flex-col overflow-hidden select-none ${phase === 'sampling' && fillLevel >= 1 && !lidAttached ? 'cursor-pointer' : 'cursor-grab'}`,
                                style: {
                                    left: containerPos.left,
                                    top: containerPos.top,
                                    width: CONTAINER_W,
                                    height: CONTAINER_H,
                                    borderRadius: '6px 6px 10px 10px',
                                    transform: `rotate(${tiltAngle}deg)`,
                                    transformOrigin: '50% 0%',
                                    zIndex: 10,
                                    transition: isTilting || isPouring ? 'none' : 'transform 0.15s ease-out'
                                },
                                onMouseDown: handleContainerMouseDown,
                                onClick: handleContainerClick,
                                onMouseEnter: ()=>setHint(getHint()),
                                onMouseLeave: ()=>setHint(''),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 left-0 w-full bg-sky-400",
                                        style: {
                                            height: `${fillLevel * 100}%`,
                                            transition: isPouring ? 'none' : 'height 0.1s linear'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                        lineNumber: 354,
                                        columnNumber: 13
                                    }, this),
                                    lidAttached && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-1 left-1/2 -translate-x-1/2 w-5 h-2 bg-gray-300 border border-slate-500 rounded z-20"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                        lineNumber: 363,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-1 right-1 text-[5px] text-slate-600 font-mono",
                                        children: "2.0L"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                        lineNumber: 365,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                lineNumber: 334,
                                columnNumber: 11
                            }, this),
                            isPouring && fillLevel > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bg-sky-400/80 pointer-events-none",
                                style: {
                                    left: containerPos.left + CONTAINER_W / 2 - 2,
                                    top: containerPos.top + 8,
                                    width: 4,
                                    // Вычисляем высоту динамически: край раковины минус текущая высота горлышка
                                    height: Math.max(0, SINK_Y - (containerPos.top + 8)),
                                    zIndex: 4
                                }
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                lineNumber: 370,
                                columnNumber: 13
                            }, this),
                            hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[10px] px-3 py-0.5 rounded-full shadow pointer-events-none z-20 whitespace-nowrap",
                                children: hint
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                lineNumber: 385,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                        lineNumber: 321,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                lineNumber: 315,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full lg:w-1/3 p-8 bg-slate-50 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xs font-bold text-slate-400 uppercase mb-3",
                                children: "Чек-лист этапа"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                lineNumber: 395,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-3 rounded-xl border flex items-center justify-between ${rinseCount >= 3 ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-slate-200'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "1. Ополаскивание емкости"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                                lineNumber: 398,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-xs",
                                                children: [
                                                    rinseCount,
                                                    "/3 ",
                                                    rinseCount >= 3 ? '✓' : ''
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                                lineNumber: 399,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                        lineNumber: 397,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-3 rounded-xl border flex items-center justify-between ${phase === 'sampling' && fillLevel >= 1 ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-slate-200'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "2. Набор пробы воды"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                                lineNumber: 402,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: phase === 'sampling' && fillLevel >= 1 ? '✓' : ''
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                                lineNumber: 403,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                        lineNumber: 401,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-3 rounded-xl border flex items-center justify-between ${lidAttached ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-slate-200'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "3. Закручивание крышки"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                                lineNumber: 406,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: lidAttached ? '✓' : ''
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                                lineNumber: 407,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                        lineNumber: 405,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                lineNumber: 396,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                        lineNumber: 394,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: [
                            phase === 'rinsing' && rinseCount >= 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setPhase('sampling'),
                                className: "w-full py-4 rounded-2xl font-bold text-sm bg-emerald-700 text-white",
                                children: "Начать набор пробы →"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                lineNumber: 414,
                                columnNumber: 13
                            }, this),
                            phase === 'sampling' && lidAttached && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleComplete,
                                className: "w-full py-4 rounded-2xl font-bold text-sm bg-emerald-700 text-white",
                                children: "Завершить отбор пробы →"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                lineNumber: 422,
                                columnNumber: 13
                            }, this),
                            phase === 'sampling' && !lidAttached && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center text-xs text-slate-500",
                                children: "Наполните емкость и закрутите крышку"
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                lineNumber: 430,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                        lineNumber: 412,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                lineNumber: 393,
                columnNumber: 7
            }, this),
            closeModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/70",
                onClick: ()=>setCloseModalOpen(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl p-8 w-full max-w-md mx-4 relative",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setCloseModalOpen(false),
                            className: "absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-2xl leading-none text-slate-400 hover:text-slate-600 transition-colors",
                            "aria-label": "Закрыть",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                            lineNumber: 439,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-bold text-lg mb-1",
                            children: "Закрытие полимерной емкости"
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                            lineNumber: 446,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-slate-600 mb-6",
                            children: "Плотно закрутите крышку, чтобы вытеснить остатки воздуха и предотвратить контаминацию."
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                            lineNumber: 447,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center gap-8 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-40 h-64 border-4 border-slate-500 bg-white overflow-hidden flex-shrink-0",
                                    style: {
                                        borderRadius: '10px 10px 16px 16px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-0 left-0 w-full bg-sky-400",
                                            style: {
                                                height: `${fillLevel * 100}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                            lineNumber: 452,
                                            columnNumber: 17
                                        }, this),
                                        lidAttached && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -top-1 left-1/2 -translate-x-1/2 w-16 h-5 bg-gray-300 border-2 border-slate-500 rounded z-20"
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                            lineNumber: 457,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-2 right-2 text-[9px] text-slate-600 font-mono",
                                            children: "2.0L"
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                            lineNumber: 459,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                    lineNumber: 451,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-4 text-center",
                                    children: [
                                        !lidAttached && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>setLidAttached(true),
                                            className: "w-24 h-7 bg-gray-300 border-2 border-slate-500 rounded cursor-pointer hover:scale-105 transition-all flex items-center justify-center shadow",
                                            title: "Надеть крышку",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-slate-700 font-bold",
                                                children: "КРЫШКА"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                                lineNumber: 470,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                            lineNumber: 465,
                                            columnNumber: 19
                                        }, this),
                                        lidAttached && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-24 h-7 bg-gray-300 border-2 border-slate-500 rounded opacity-40 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-slate-700 font-bold",
                                                children: "КРЫШКА ✓"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                                lineNumber: 475,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                            lineNumber: 474,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                                    lineNumber: 463,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                            lineNumber: 449,
                            columnNumber: 13
                        }, this),
                        lidAttached && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setCloseModalOpen(false),
                            className: "w-full py-3 bg-emerald-700 text-white rounded-2xl font-bold hover:bg-emerald-800 transition-all",
                            children: "Завершить закрытие емкости"
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                            lineNumber: 482,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] text-center text-slate-500 mt-3",
                            children: "Кликните по крышке, чтобы плотно закрутить ее на горлышке."
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                            lineNumber: 489,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                    lineNumber: 438,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
                lineNumber: 437,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/steps/Stage2/Step5_ChemSampling.jsx",
        lineNumber: 285,
        columnNumber: 5
    }, this);
}
_s(Step5_ChemSampling, "09YLaFqFRxdApzx+aTJNcpDYNcg=");
_c = Step5_ChemSampling;
var _c;
__turbopack_context__.k.register(_c, "Step5_ChemSampling");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=steps_Stage2_0b_f0_6._.js.map