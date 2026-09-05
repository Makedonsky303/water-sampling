(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/steps/Stage4/Step1_PackBag.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Step1_PackBag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$MinecraftInventory$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/MinecraftInventory.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$InventoryContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/InventoryContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$InvSlot$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/InvSlot.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inventory/itemRegistry.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Step1_PackBag({ onComplete }) {
    _s();
    const inv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$InventoryContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInventoryContext"])();
    const [placed, setPlaced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [draggedFromHotbar, setDraggedFromHotbar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dragOverZone, setDragOverZone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const hotbar = inv.slots.slice(0, 9);
    const handleDragStartFromHotbar = (slotIndex)=>{
        const item = hotbar[slotIndex];
        if (!item) return;
        const def = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItemDef"])(item);
        const isUnlimited = def?.unlimited || false;
        setDraggedFromHotbar({
            item,
            slotIndex,
            isUnlimited
        });
        inv.handleDragStart(slotIndex);
    };
    const handleDragOver = (e, zoneId)=>{
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        setDragOverZone(zoneId);
    };
    const handleDragLeave = ()=>{
        setDragOverZone(null);
    };
    const handleDrop = (e, zoneId)=>{
        e.preventDefault();
        setDragOverZone(null);
        if (!draggedFromHotbar) return;
        const { item, slotIndex, isUnlimited } = draggedFromHotbar;
        if (placed[zoneId]) {
            inv.handleDragEnd();
            setDraggedFromHotbar(null);
            return;
        }
        const newPlaced = {
            ...placed
        };
        if (!isUnlimited) {
            Object.keys(newPlaced).forEach((key)=>{
                if (newPlaced[key]?.sourceSlot === slotIndex) {
                    delete newPlaced[key];
                }
            });
        }
        newPlaced[zoneId] = {
            ...item,
            sourceSlot: slotIndex,
            isUnlimited
        };
        setPlaced(newPlaced);
        if (!isUnlimited) {
            inv.removeFromSlot(slotIndex);
        }
        inv.handleDragEnd();
        setDraggedFromHotbar(null);
    };
    const handleZoneClick = (zoneId)=>{
        const item = placed[zoneId];
        if (!item) return;
        const def = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItemDef"])(item);
        const newPlaced = {
            ...placed
        };
        delete newPlaced[zoneId];
        setPlaced(newPlaced);
        if (!def?.unlimited && item.sourceSlot !== undefined) {
            inv.returnItemToSlot(item.sourceSlot, {
                id: item.id,
                name: item.name
            });
        }
    };
    const checkPacking = ()=>{
        const errors = [];
        let scorePenalty = 0;
        const hasIceLeft = placed.leftWall && [
            '🧊',
            '🫙',
            '💧'
        ].includes((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItemDef"])(placed.leftWall)?.icon);
        const hasIceRight = placed.rightWall && [
            '🧊',
            '🫙',
            '💧'
        ].includes((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItemDef"])(placed.rightWall)?.icon);
        const hasIceBottom = placed.bottomCenter && [
            '🧊',
            '🫙',
            '💧'
        ].includes((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItemDef"])(placed.bottomCenter)?.icon);
        const iceCount = [
            hasIceLeft,
            hasIceRight,
            hasIceBottom
        ].filter(Boolean).length;
        if (iceCount < 2) {
            errors.push('Недостаточно хладоэлементов. Нарушение температурного режима.');
            scorePenalty += 20;
        }
        const hasDividerLeft = placed.leftDivider && (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItemDef"])(placed.leftDivider)?.icon === '📦';
        const hasDividerRight = placed.rightDivider && (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItemDef"])(placed.rightDivider)?.icon === '📦';
        const hasDividerBottom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItemDef"])(placed.bottomDivider)?.icon === '📦';
        if (!hasDividerLeft) {
            errors.push('Левая изолирующая перегородка отсутствует.');
            scorePenalty += 10;
        }
        if (!hasDividerRight) {
            errors.push('Правая изолирующая перегородка отсутствует.');
            scorePenalty += 10;
        }
        if (!hasDividerBottom) {
            errors.push('Нижняя перегородка отсутствует.');
            scorePenalty += 10;
        }
        const isSample = (item)=>{
            if (!item) return false;
            return item.id?.startsWith('chem_tare_') || item.id?.startsWith('bio_tare_');
        };
        const hasLeftSample = isSample(placed.leftSample);
        const hasRightSample = isSample(placed.rightSample);
        onComplete({
            packingErrors: errors,
            packingScorePenalty: scorePenalty,
            packingData: placed
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full max-w-7xl mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
      .bag-zone { transition: all 0.2s; }
      .bag-zone:hover { background: rgba(59, 130, 246, 0.1); }
    `
            }, void 0, false, {
                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                lineNumber: 132,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$MinecraftInventory$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                slots: inv.slots,
                selectedSlot: inv.selectedSlot,
                draggedSlot: inv.draggedSlot,
                equippedHelmet: inv.equippedHelmet,
                equippedGloves: inv.equippedGloves,
                onSlotClick: inv.handleSlotClick,
                onDragStart: inv.handleDragStart,
                onDrop: inv.handleDrop,
                onDragEnd: inv.handleDragEnd,
                isOpen: inv.isOpen,
                onClose: inv.closeInventory
            }, void 0, false, {
                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                lineNumber: 137,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-12 gap-4 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-4 bg-white rounded-2xl border border-slate-200 shadow-lg flex flex-col overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-slate-800 to-slate-900 px-6 py-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-white font-bold text-lg",
                                        children: "🎒 Снаряжение"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                        lineNumber: 156,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400 text-xs mt-1",
                                        children: "Нажмите Tab чтобы открыть инвентарь"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                        lineNumber: 157,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                lineNumber: 155,
                                columnNumber: 9
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
                                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                lineNumber: 165,
                                                columnNumber: 13
                                            }, this),
                                            "Открыть инвентарь",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-1 text-xs opacity-60 font-mono bg-white/10 px-1.5 py-0.5 rounded",
                                                children: "Tab"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                lineNumber: 167,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                        lineNumber: 160,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1.5",
                                                children: "Быстрый доступ"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                lineNumber: 171,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-9 gap-4 p-3 rounded-xl bg-slate-900",
                                                children: hotbar.map((item, i)=>{
                                                    const def = item ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItemDef"])(item) : null;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$InvSlot$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvSlot"], {
                                                                item: item,
                                                                slotId: i,
                                                                isSelected: i === inv.hotbarActive,
                                                                isDragging: draggedFromHotbar?.slotIndex === i,
                                                                onClick: ()=>inv.setHotbarActive(i),
                                                                onDragStart: ()=>handleDragStartFromHotbar(i),
                                                                onDrop: ()=>{},
                                                                onDragEnd: ()=>{
                                                                    inv.handleDragEnd();
                                                                    setDraggedFromHotbar(null);
                                                                },
                                                                size: "sm"
                                                            }, void 0, false, {
                                                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                                lineNumber: 179,
                                                                columnNumber: 21
                                                            }, this),
                                                            def?.unlimited && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute -top-1 -right-1 bg-emerald-500 text-white text-[8px] font-bold rounded-full w-3 h-3 flex items-center justify-center",
                                                                children: "∞"
                                                            }, void 0, false, {
                                                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                                lineNumber: 191,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                        lineNumber: 178,
                                                        columnNumber: 19
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                lineNumber: 174,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1.5 text-center text-xs text-slate-400 min-h-[1rem]",
                                                children: inv.activeItemDef?.label || ''
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                lineNumber: 199,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                        lineNumber: 170,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-blue-50 border border-blue-200 rounded-xl p-3 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-blue-800 mb-1",
                                                children: "💡 Подсказка:"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                lineNumber: 205,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-blue-700",
                                                children: "Перетаскивайте предметы из быстрого доступа в сумку. ∞ = неограниченно"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                lineNumber: 206,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                        lineNumber: 204,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                lineNumber: 159,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                        lineNumber: 154,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-8 bg-white rounded-2xl border border-slate-200 shadow-lg flex flex-col overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 px-6 py-5 flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-white font-bold text-lg",
                                                children: "🧊 Термосумка (вид сверху)"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                lineNumber: 217,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-300 text-xs mt-1",
                                                children: "Разместите предметы правильно"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                lineNumber: 218,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                        lineNumber: 216,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: checkPacking,
                                        className: "bg-white hover:bg-slate-100 text-blue-800 font-bold py-2 px-4 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 text-sm",
                                        children: "Завершить укладку →"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                        lineNumber: 221,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                lineNumber: 215,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 flex-1 flex items-center justify-center bg-gradient-to-b from-slate-50 to-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full max-w-2xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 400 300",
                                        className: "w-full h-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "40",
                                                y: "40",
                                                width: "320",
                                                height: "220",
                                                fill: "#e0f2fe",
                                                stroke: "#0369a1",
                                                strokeWidth: "3",
                                                rx: "8"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                lineNumber: 232,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: "200",
                                                y: "25",
                                                textAnchor: "middle",
                                                fill: "#334155",
                                                fontSize: "14",
                                                fontWeight: "bold",
                                                children: "Термосумка"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                lineNumber: 233,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                onDragOver: (e)=>handleDragOver(e, 'leftWall'),
                                                onDragLeave: handleDragLeave,
                                                onDrop: (e)=>handleDrop(e, 'leftWall'),
                                                onClick: ()=>handleZoneClick('leftWall'),
                                                style: {
                                                    cursor: 'pointer'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "50",
                                                        y: "60",
                                                        width: "60",
                                                        height: "100",
                                                        fill: placed.leftWall ? '#bfdbfe' : dragOverZone === 'leftWall' ? '#dbeafe' : '#fff',
                                                        stroke: "#3b82f6",
                                                        strokeWidth: "2",
                                                        strokeDasharray: "5,5",
                                                        className: "bag-zone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                        lineNumber: 245,
                                                        columnNumber: 17
                                                    }, this),
                                                    placed.leftWall && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                x: "80",
                                                                y: "105",
                                                                textAnchor: "middle",
                                                                fill: "#1e40af",
                                                                fontSize: "28",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItemDef"])(placed.leftWall)?.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                                lineNumber: 250,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                x: "80",
                                                                y: "125",
                                                                textAnchor: "middle",
                                                                fill: "#64748b",
                                                                fontSize: "8",
                                                                fontWeight: "bold",
                                                                children: "Клик — убрать"
                                                            }, void 0, false, {
                                                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                                lineNumber: 253,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                lineNumber: 238,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                onDragOver: (e)=>handleDragOver(e, 'leftDivider'),
                                                onDragLeave: handleDragLeave,
                                                onDrop: (e)=>handleDrop(e, 'leftDivider'),
                                                onClick: ()=>handleZoneClick('leftDivider'),
                                                style: {
                                                    cursor: 'pointer'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "115",
                                                        y: "60",
                                                        width: "12",
                                                        height: "100",
                                                        fill: placed.leftDivider ? '#bfdbfe' : dragOverZone === 'leftDivider' ? '#dbeafe' : '#f1f5f9',
                                                        stroke: "#3b82f6",
                                                        strokeWidth: "2",
                                                        strokeDasharray: "5,5",
                                                        className: "bag-zone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                        lineNumber: 268,
                                                        columnNumber: 17
                                                    }, this),
                                                    placed.leftDivider && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                        x: "121",
                                                        y: "110",
                                                        textAnchor: "middle",
                                                        fill: "#1e40af",
                                                        fontSize: "18",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItemDef"])(placed.leftDivider)?.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                        lineNumber: 272,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                lineNumber: 261,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                onDragOver: (e)=>handleDragOver(e, 'leftSample'),
                                                onDragLeave: handleDragLeave,
                                                onDrop: (e)=>handleDrop(e, 'leftSample'),
                                                onClick: ()=>handleZoneClick('leftSample'),
                                                style: {
                                                    cursor: 'pointer'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "132",
                                                        y: "60",
                                                        width: "55",
                                                        height: "100",
                                                        fill: placed.leftSample ? '#bfdbfe' : dragOverZone === 'leftSample' ? '#dbeafe' : '#fff',
                                                        stroke: "#3b82f6",
                                                        strokeWidth: "2",
                                                        strokeDasharray: "5,5",
                                                        className: "bag-zone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                        lineNumber: 286,
                                                        columnNumber: 17
                                                    }, this),
                                                    placed.leftSample && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                x: "159.5",
                                                                y: "105",
                                                                textAnchor: "middle",
                                                                fill: "#1e40af",
                                                                fontSize: "28",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItemDef"])(placed.leftSample)?.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                                lineNumber: 291,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                x: "159.5",
                                                                y: "125",
                                                                textAnchor: "middle",
                                                                fill: "#64748b",
                                                                fontSize: "8",
                                                                fontWeight: "bold",
                                                                children: "Клик — убрать"
                                                            }, void 0, false, {
                                                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                                lineNumber: 294,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                lineNumber: 279,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                onDragOver: (e)=>handleDragOver(e, 'rightSample'),
                                                onDragLeave: handleDragLeave,
                                                onDrop: (e)=>handleDrop(e, 'rightSample'),
                                                onClick: ()=>handleZoneClick('rightSample'),
                                                style: {
                                                    cursor: 'pointer'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "213",
                                                        y: "60",
                                                        width: "55",
                                                        height: "100",
                                                        fill: placed.rightSample ? '#bfdbfe' : dragOverZone === 'rightSample' ? '#dbeafe' : '#fff',
                                                        stroke: "#3b82f6",
                                                        strokeWidth: "2",
                                                        strokeDasharray: "5,5",
                                                        className: "bag-zone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                        lineNumber: 309,
                                                        columnNumber: 17
                                                    }, this),
                                                    placed.rightSample && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                x: "240.5",
                                                                y: "105",
                                                                textAnchor: "middle",
                                                                fill: "#1e40af",
                                                                fontSize: "28",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItemDef"])(placed.rightSample)?.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                                lineNumber: 314,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                x: "240.5",
                                                                y: "125",
                                                                textAnchor: "middle",
                                                                fill: "#64748b",
                                                                fontSize: "8",
                                                                fontWeight: "bold",
                                                                children: "Клик — убрать"
                                                            }, void 0, false, {
                                                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                                lineNumber: 317,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                lineNumber: 302,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                onDragOver: (e)=>handleDragOver(e, 'rightDivider'),
                                                onDragLeave: handleDragLeave,
                                                onDrop: (e)=>handleDrop(e, 'rightDivider'),
                                                onClick: ()=>handleZoneClick('rightDivider'),
                                                style: {
                                                    cursor: 'pointer'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "273",
                                                        y: "60",
                                                        width: "12",
                                                        height: "100",
                                                        fill: placed.rightDivider ? '#bfdbfe' : dragOverZone === 'rightDivider' ? '#dbeafe' : '#f1f5f9',
                                                        stroke: "#3b82f6",
                                                        strokeWidth: "2",
                                                        strokeDasharray: "5,5",
                                                        className: "bag-zone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                        lineNumber: 332,
                                                        columnNumber: 17
                                                    }, this),
                                                    placed.rightDivider && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                        x: "279",
                                                        y: "110",
                                                        textAnchor: "middle",
                                                        fill: "#1e40af",
                                                        fontSize: "18",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItemDef"])(placed.rightDivider)?.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                        lineNumber: 336,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                lineNumber: 325,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                onDragOver: (e)=>handleDragOver(e, 'rightWall'),
                                                onDragLeave: handleDragLeave,
                                                onDrop: (e)=>handleDrop(e, 'rightWall'),
                                                onClick: ()=>handleZoneClick('rightWall'),
                                                style: {
                                                    cursor: 'pointer'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "290",
                                                        y: "60",
                                                        width: "60",
                                                        height: "100",
                                                        fill: placed.rightWall ? '#bfdbfe' : dragOverZone === 'rightWall' ? '#dbeafe' : '#fff',
                                                        stroke: "#3b82f6",
                                                        strokeWidth: "2",
                                                        strokeDasharray: "5,5",
                                                        className: "bag-zone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                        lineNumber: 350,
                                                        columnNumber: 17
                                                    }, this),
                                                    placed.rightWall && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                x: "320",
                                                                y: "105",
                                                                textAnchor: "middle",
                                                                fill: "#1e40af",
                                                                fontSize: "28",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItemDef"])(placed.rightWall)?.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                                lineNumber: 355,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                x: "320",
                                                                y: "125",
                                                                textAnchor: "middle",
                                                                fill: "#64748b",
                                                                fontSize: "8",
                                                                fontWeight: "bold",
                                                                children: "Клик — убрать"
                                                            }, void 0, false, {
                                                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                                lineNumber: 358,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                lineNumber: 343,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                onDragOver: (e)=>handleDragOver(e, 'bottomDivider'),
                                                onDragLeave: handleDragLeave,
                                                onDrop: (e)=>handleDrop(e, 'bottomDivider'),
                                                onClick: ()=>handleZoneClick('bottomDivider'),
                                                style: {
                                                    cursor: 'pointer'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "110",
                                                        y: "170",
                                                        width: "180",
                                                        height: "12",
                                                        fill: placed.bottomDivider ? '#bfdbfe' : dragOverZone === 'bottomDivider' ? '#dbeafe' : '#f1f5f9',
                                                        stroke: "#3b82f6",
                                                        strokeWidth: "2",
                                                        strokeDasharray: "5,5",
                                                        className: "bag-zone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                        lineNumber: 373,
                                                        columnNumber: 17
                                                    }, this),
                                                    placed.bottomDivider && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                        x: "200",
                                                        y: "181",
                                                        textAnchor: "middle",
                                                        fill: "#1e40af",
                                                        fontSize: "12",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItemDef"])(placed.bottomDivider)?.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                        lineNumber: 377,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                lineNumber: 366,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                onDragOver: (e)=>handleDragOver(e, 'bottomCenter'),
                                                onDragLeave: handleDragLeave,
                                                onDrop: (e)=>handleDrop(e, 'bottomCenter'),
                                                onClick: ()=>handleZoneClick('bottomCenter'),
                                                style: {
                                                    cursor: 'pointer'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "100",
                                                        y: "190",
                                                        width: "200",
                                                        height: "50",
                                                        fill: placed.bottomCenter ? '#bfdbfe' : dragOverZone === 'bottomCenter' ? '#dbeafe' : '#f8fafc',
                                                        stroke: "#3b82f6",
                                                        strokeWidth: "2",
                                                        strokeDasharray: "5,5",
                                                        className: "bag-zone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                        lineNumber: 391,
                                                        columnNumber: 17
                                                    }, this),
                                                    placed.bottomCenter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                        x: "200",
                                                        y: "220",
                                                        textAnchor: "middle",
                                                        fill: "#1e40af",
                                                        fontSize: "28",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$itemRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItemDef"])(placed.bottomCenter)?.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                        lineNumber: 395,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                lineNumber: 384,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: "80",
                                                y: "52",
                                                textAnchor: "middle",
                                                fill: "#64748b",
                                                fontSize: "9",
                                                children: "🧊 Лёд"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                lineNumber: 402,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: "121",
                                                y: "52",
                                                textAnchor: "middle",
                                                fill: "#64748b",
                                                fontSize: "9",
                                                children: "⚡"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                lineNumber: 403,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: "159.5",
                                                y: "52",
                                                textAnchor: "middle",
                                                fill: "#64748b",
                                                fontSize: "9",
                                                children: "Образец"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                lineNumber: 404,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: "240.5",
                                                y: "52",
                                                textAnchor: "middle",
                                                fill: "#64748b",
                                                fontSize: "9",
                                                children: "Образец"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                lineNumber: 405,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: "279",
                                                y: "52",
                                                textAnchor: "middle",
                                                fill: "#64748b",
                                                fontSize: "9",
                                                children: "⚡"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                lineNumber: 406,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: "320",
                                                y: "52",
                                                textAnchor: "middle",
                                                fill: "#64748b",
                                                fontSize: "9",
                                                children: "🧊 Лёд"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                lineNumber: 407,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: "80",
                                                y: "255",
                                                textAnchor: "middle",
                                                fill: "#64748b",
                                                fontSize: "9",
                                                children: "Дно"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                lineNumber: 408,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: "320",
                                                y: "255",
                                                textAnchor: "middle",
                                                fill: "#64748b",
                                                fontSize: "9",
                                                children: "Дно"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                                lineNumber: 409,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                        lineNumber: 230,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                    lineNumber: 229,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                                lineNumber: 228,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                        lineNumber: 214,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
                lineNumber: 152,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/steps/Stage4/Step1_PackBag.jsx",
        lineNumber: 131,
        columnNumber: 3
    }, this);
}
_s(Step1_PackBag, "Xctd2bh/6eLFqaZMR0x07NMyF6w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inventory$2f$InventoryContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInventoryContext"]
    ];
});
_c = Step1_PackBag;
var _c;
__turbopack_context__.k.register(_c, "Step1_PackBag");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/steps/Stage4/Step2_SealBag.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Step2_SealBag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function Step2_SealBag({ onComplete }) {
    _s();
    const [zipperProgress, setZipperProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [leftClipClosed, setLeftClipClosed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [rightClipClosed, setRightClipClosed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDraggingZipper, setIsDraggingZipper] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Путь молнии (прямая линия)
    const zipperPath = "M 80 170 L 320 170";
    const zipperLength = 240;
    const handleZipperInteraction = (clientX)=>{
        if (!svgRef.current) return;
        const svg = svgRef.current;
        const rect = svg.getBoundingClientRect();
        const x = clientX - rect.left;
        const progress = Math.max(0, Math.min(1, (x - 80) / zipperLength));
        setZipperProgress(progress);
    };
    const handleMouseDown = (e)=>{
        e.preventDefault();
        setIsDraggingZipper(true);
    // НЕ вызываем handleZipperInteraction здесь - только при движении
    };
    const handleMouseMove = (e)=>{
        if (!isDraggingZipper) return;
        handleZipperInteraction(e.clientX);
    };
    const handleMouseUp = ()=>{
        setIsDraggingZipper(false);
    };
    const handleTouchStart = (e)=>{
        e.preventDefault();
        setIsDraggingZipper(true);
    // НЕ вызываем handleZipperInteraction здесь - только при движении
    };
    const handleTouchMove = (e)=>{
        if (!isDraggingZipper || !e.touches[0]) return;
        handleZipperInteraction(e.touches[0].clientX);
    };
    const handleTouchEnd = ()=>{
        setIsDraggingZipper(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Step2_SealBag.useEffect": ()=>{
            if (isDraggingZipper) {
                window.addEventListener('mousemove', handleMouseMove);
                window.addEventListener('mouseup', handleMouseUp);
                return ({
                    "Step2_SealBag.useEffect": ()=>{
                        window.removeEventListener('mousemove', handleMouseMove);
                        window.removeEventListener('mouseup', handleMouseUp);
                    }
                })["Step2_SealBag.useEffect"];
            }
        }
    }["Step2_SealBag.useEffect"], [
        isDraggingZipper
    ]);
    const zipperX = 80 + zipperProgress * zipperLength;
    const checkSealing = ()=>{
        const errors = [];
        let scorePenalty = 0;
        if (zipperProgress < 0.98) {
            errors.push('Молния застёгнута не полностью. Нарушение герметичности.');
            scorePenalty += 20;
        }
        if (!leftClipClosed) {
            errors.push('Левый фиксатор не закрыт. Риск разгерметизации при транспортировке.');
            scorePenalty += 15;
        }
        if (!rightClipClosed) {
            errors.push('Правый фиксатор не закрыт. Риск разгерметизации при транспортировке.');
            scorePenalty += 15;
        }
        onComplete({
            sealingErrors: errors,
            sealingScorePenalty: scorePenalty,
            sealingData: {
                zipperProgress,
                leftClipClosed,
                rightClipClosed
            }
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full max-w-6xl mb-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-12 gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:col-span-3 bg-white rounded-2xl border border-slate-200 shadow-lg flex flex-col overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-br from-slate-800 to-slate-900 px-6 py-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-white font-bold text-lg",
                                    children: "✅ Статус герметизации"
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-400 text-xs mt-1",
                                    children: "Проверьте все элементы"
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-5 flex-1 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-4 rounded-xl border-2 transition-all ${zipperProgress >= 0.98 ? 'bg-emerald-50 border-emerald-300' : 'bg-red-50 border-red-300'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-sm text-slate-700",
                                                    children: "Молния"
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                                    lineNumber: 110,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-xs font-bold ${zipperProgress >= 0.98 ? 'text-emerald-600' : 'text-red-600'}`,
                                                    children: [
                                                        Math.round(zipperProgress * 100),
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                                    lineNumber: 111,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full bg-slate-200 rounded-full h-2 overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `h-full transition-all ${zipperProgress >= 0.98 ? 'bg-emerald-500' : 'bg-red-500'}`,
                                                style: {
                                                    width: `${zipperProgress * 100}%`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-4 rounded-xl border-2 transition-all ${leftClipClosed ? 'bg-emerald-50 border-emerald-300' : 'bg-amber-50 border-amber-300'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl",
                                                children: leftClipClosed ? '🔒' : '🔓'
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-bold text-sm text-slate-700",
                                                        children: "Левый фиксатор"
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                                        lineNumber: 135,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `text-xs font-semibold ${leftClipClosed ? 'text-emerald-600' : 'text-amber-600'}`,
                                                        children: leftClipClosed ? 'Закрыт ✓' : 'Открыт'
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                                        lineNumber: 136,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-4 rounded-xl border-2 transition-all ${rightClipClosed ? 'bg-emerald-50 border-emerald-300' : 'bg-amber-50 border-amber-300'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl",
                                                children: rightClipClosed ? '🔒' : '🔓'
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                                lineNumber: 151,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-bold text-sm text-slate-700",
                                                        children: "Правый фиксатор"
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                                        lineNumber: 153,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `text-xs font-semibold ${rightClipClosed ? 'text-emerald-600' : 'text-amber-600'}`,
                                                        children: rightClipClosed ? 'Закрыт ✓' : 'Открыт'
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                                        lineNumber: 154,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                                lineNumber: 152,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs text-blue-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-bold mb-1",
                                            children: "📖 ГОСТ Р 59024‑2020"
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                            lineNumber: 164,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "leading-relaxed text-blue-700",
                                            children: "Термосумка должна быть полностью герметизирована: молния застёгнута до конца, все фиксаторы защёлкнуты."
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:col-span-6 bg-white rounded-2xl border border-slate-200 shadow-lg flex flex-col overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 px-6 py-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-white font-bold text-lg",
                                    children: "🧳 Герметизация термосумки"
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-300 text-xs mt-1",
                                    children: "Перетащите бегунок молнии до конца, затем закройте оба фиксатора"
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 flex-1 flex items-center justify-center bg-gradient-to-b from-slate-50 to-white",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full max-w-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    ref: svgRef,
                                    viewBox: "0 0 400 320",
                                    className: "w-full h-auto",
                                    style: {
                                        userSelect: 'none'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                    id: "bagGradient",
                                                    x1: "0%",
                                                    y1: "0%",
                                                    x2: "0%",
                                                    y2: "100%",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                            offset: "0%",
                                                            stopColor: "#bfdbfe"
                                                        }, void 0, false, {
                                                            fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                                            lineNumber: 192,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                            offset: "100%",
                                                            stopColor: "#93c5fd"
                                                        }, void 0, false, {
                                                            fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                                            lineNumber: 193,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                                    lineNumber: 191,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                                    id: "shadow",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDropShadow", {
                                                        dx: "0",
                                                        dy: "2",
                                                        stdDeviation: "3",
                                                        floodOpacity: "0.3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                                        lineNumber: 196,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                                    lineNumber: 195,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                            lineNumber: 190,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "30",
                                            y: "80",
                                            width: "340",
                                            height: "200",
                                            fill: "url(#bagGradient)",
                                            stroke: "#1e40af",
                                            strokeWidth: "4",
                                            rx: "16",
                                            filter: "url(#shadow)"
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                            lineNumber: 201,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M 120 80 Q 120 50 150 50 Q 180 50 180 80",
                                            fill: "none",
                                            stroke: "#1e40af",
                                            strokeWidth: "6",
                                            strokeLinecap: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                            lineNumber: 205,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M 220 80 Q 220 50 250 50 Q 280 50 280 80",
                                            fill: "none",
                                            stroke: "#1e40af",
                                            strokeWidth: "6",
                                            strokeLinecap: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                            lineNumber: 207,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "200",
                                            y: "40",
                                            textAnchor: "middle",
                                            fill: "#1e293b",
                                            fontSize: "16",
                                            fontWeight: "bold",
                                            children: "Термосумка"
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                            lineNumber: 210,
                                            columnNumber: 17
                                        }, this),
                                        Array.from({
                                            length: 24
                                        }).map((_, i)=>{
                                            const x = 80 + i * 10;
                                            const isZipped = x < zipperX;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: x,
                                                        y: "165",
                                                        width: "4",
                                                        height: "5",
                                                        fill: isZipped ? '#10b981' : '#94a3b8',
                                                        rx: "1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                                        lineNumber: 220,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: x,
                                                        y: "175",
                                                        width: "4",
                                                        height: "5",
                                                        fill: isZipped ? '#10b981' : '#94a3b8',
                                                        rx: "1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                                        lineNumber: 222,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                                lineNumber: 219,
                                                columnNumber: 21
                                            }, this);
                                        }),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "80",
                                            y1: "170",
                                            x2: zipperX,
                                            y2: "170",
                                            stroke: "#059669",
                                            strokeWidth: "3"
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                            lineNumber: 229,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: zipperX,
                                            y1: "170",
                                            x2: "320",
                                            y2: "170",
                                            stroke: "#cbd5e1",
                                            strokeWidth: "3",
                                            strokeDasharray: "4,4"
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                            lineNumber: 231,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            onMouseDown: handleMouseDown,
                                            onTouchStart: handleTouchStart,
                                            style: {
                                                cursor: isDraggingZipper ? 'grabbing' : 'grab'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: zipperX - 25,
                                                    y: "145",
                                                    width: "50",
                                                    height: "50",
                                                    fill: "transparent"
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                                    lineNumber: 241,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: zipperX - 12,
                                                    y: "155",
                                                    width: "24",
                                                    height: "30",
                                                    fill: isDraggingZipper ? '#fbbf24' : '#f97316',
                                                    stroke: "#1e293b",
                                                    strokeWidth: "3",
                                                    rx: "4"
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                                    lineNumber: 250,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: zipperX,
                                                    cy: "165",
                                                    r: "4",
                                                    fill: "#fff"
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                                    lineNumber: 253,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: zipperX,
                                                    cy: "175",
                                                    r: "4",
                                                    fill: "#fff"
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                                    lineNumber: 254,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: zipperX - 4,
                                                    y: "182",
                                                    width: "8",
                                                    height: "8",
                                                    fill: "#1e293b",
                                                    rx: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                                    lineNumber: 255,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                            lineNumber: 235,
                                            columnNumber: 17
                                        }, this),
                                        zipperProgress < 0.5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: zipperX,
                                            y: "210",
                                            textAnchor: "middle",
                                            fill: "#64748b",
                                            fontSize: "12",
                                            fontWeight: "bold",
                                            children: "← Тащите вправо →"
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                            lineNumber: 261,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            onClick: ()=>setLeftClipClosed(!leftClipClosed),
                                            style: {
                                                cursor: 'pointer'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "85",
                                                    y: "110",
                                                    width: "50",
                                                    height: "28",
                                                    fill: leftClipClosed ? '#10b981' : '#ef4444',
                                                    stroke: "#1e293b",
                                                    strokeWidth: "3",
                                                    rx: "8"
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                                    lineNumber: 273,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "95",
                                                    y: "115",
                                                    width: "12",
                                                    height: "18",
                                                    fill: leftClipClosed ? '#059669' : '#dc2626',
                                                    stroke: "#1e293b",
                                                    strokeWidth: "2",
                                                    rx: "3"
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                                    lineNumber: 278,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "113",
                                                    y: "115",
                                                    width: "12",
                                                    height: "18",
                                                    fill: leftClipClosed ? '#059669' : '#dc2626',
                                                    stroke: "#1e293b",
                                                    strokeWidth: "2",
                                                    rx: "3"
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                                    lineNumber: 281,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "110",
                                                    y: "127",
                                                    textAnchor: "middle",
                                                    dominantBaseline: "middle",
                                                    fill: "#fff",
                                                    fontSize: "16",
                                                    fontWeight: "bold",
                                                    children: leftClipClosed ? '✓' : '○'
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                                    lineNumber: 286,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "110",
                                                    y: "98",
                                                    textAnchor: "middle",
                                                    fill: "#475569",
                                                    fontSize: "13",
                                                    fontWeight: "bold",
                                                    children: "Левый"
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                                    lineNumber: 291,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                            lineNumber: 268,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            onClick: ()=>setRightClipClosed(!rightClipClosed),
                                            style: {
                                                cursor: 'pointer'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "265",
                                                    y: "110",
                                                    width: "50",
                                                    height: "28",
                                                    fill: rightClipClosed ? '#10b981' : '#ef4444',
                                                    stroke: "#1e293b",
                                                    strokeWidth: "3",
                                                    rx: "8"
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                                    lineNumber: 302,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "275",
                                                    y: "115",
                                                    width: "12",
                                                    height: "18",
                                                    fill: rightClipClosed ? '#059669' : '#dc2626',
                                                    stroke: "#1e293b",
                                                    strokeWidth: "2",
                                                    rx: "3"
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                                    lineNumber: 306,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "293",
                                                    y: "115",
                                                    width: "12",
                                                    height: "18",
                                                    fill: rightClipClosed ? '#059669' : '#dc2626',
                                                    stroke: "#1e293b",
                                                    strokeWidth: "2",
                                                    rx: "3"
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                                    lineNumber: 309,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "290",
                                                    y: "127",
                                                    textAnchor: "middle",
                                                    dominantBaseline: "middle",
                                                    fill: "#fff",
                                                    fontSize: "16",
                                                    fontWeight: "bold",
                                                    children: rightClipClosed ? '✓' : '○'
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                                    lineNumber: 313,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "290",
                                                    y: "98",
                                                    textAnchor: "middle",
                                                    fill: "#475569",
                                                    fontSize: "13",
                                                    fontWeight: "bold",
                                                    children: "Правый"
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                                    lineNumber: 318,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                            lineNumber: 298,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                    lineNumber: 183,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                    lineNumber: 174,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:col-span-3 bg-white rounded-2xl border border-slate-200 shadow-lg flex flex-col overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-br from-emerald-700 to-emerald-900 px-6 py-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-white font-bold text-lg",
                                    children: "📋 Чек-лист"
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                    lineNumber: 331,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-emerald-300 text-xs mt-1",
                                    children: "Порядок действий"
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                    lineNumber: 332,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                            lineNumber: 330,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-5 flex-1 flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        {
                                            done: zipperProgress >= 0.98,
                                            label: 'Застегнуть молнию до конца'
                                        },
                                        {
                                            done: leftClipClosed,
                                            label: 'Закрыть левый фиксатор'
                                        },
                                        {
                                            done: rightClipClosed,
                                            label: 'Закрыть правый фиксатор'
                                        }
                                    ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `flex items-start gap-3 p-3.5 rounded-xl border transition-all ${item.done ? 'bg-emerald-50 border-emerald-200' : 'bg-slate-50 border-slate-200'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold border-2 ${item.done ? 'bg-emerald-500 border-emerald-500 text-white' : 'bg-white border-slate-300 text-slate-400'}`,
                                                    children: item.done ? '✓' : i + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                                    lineNumber: 349,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-xs font-semibold leading-snug ${item.done ? 'text-emerald-800 line-through decoration-emerald-400' : 'text-slate-600'}`,
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                                    lineNumber: 358,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                            lineNumber: 341,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                    lineNumber: 335,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: checkSealing,
                                        className: "w-full bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-4 rounded-2xl shadow-lg transition-all transform hover:-translate-y-0.5 text-sm",
                                        children: "Подтвердить герметизацию →"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                        lineNumber: 372,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                                    lineNumber: 371,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                            lineNumber: 334,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
                    lineNumber: 329,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
            lineNumber: 95,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/steps/Stage4/Step2_SealBag.jsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
_s(Step2_SealBag, "pezGUMuBZHa8MsGvdpC2JMDT5HY=");
_c = Step2_SealBag;
var _c;
__turbopack_context__.k.register(_c, "Step2_SealBag");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/steps/Stage4/Step3_Transport.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Step3_Transport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
// Сценарии транспортировки с разными условиями
const SCENARIOS = [
    {
        id: 'short',
        label: 'Маршрут A: Короткий (1.5 часа)',
        duration: 90,
        events: [
            {
                minute: 30,
                text: 'Едем по городу, пробок нет',
                alert: false
            },
            {
                minute: 60,
                text: 'Приближаемся к лаборатории',
                alert: false
            }
        ],
        tempCurve: [
            {
                minute: 0,
                temp: 3.5
            },
            {
                minute: 45,
                temp: 4.2
            },
            {
                minute: 90,
                temp: 5.1
            }
        ],
        needsReport: false
    },
    {
        id: 'medium',
        label: 'Маршрут B: Средний (4 часа)',
        duration: 240,
        events: [
            {
                minute: 60,
                text: 'Движемся по трассе',
                alert: false
            },
            {
                minute: 120,
                text: 'Половина пути пройдена',
                alert: false
            },
            {
                minute: 180,
                text: 'Приближаемся к городу',
                alert: false
            }
        ],
        tempCurve: [
            {
                minute: 0,
                temp: 3.5
            },
            {
                minute: 120,
                temp: 5.8
            },
            {
                minute: 240,
                temp: 7.2
            }
        ],
        needsReport: false
    },
    {
        id: 'long',
        label: 'Маршрут C: Длинный с затором (6.5 часов)',
        duration: 390,
        events: [
            {
                minute: 60,
                text: 'Движемся по трассе',
                alert: false
            },
            {
                minute: 180,
                text: '⚠️ Попали в затор! Стоим на месте',
                alert: true
            },
            {
                minute: 240,
                text: '⚠️ Затор продолжается, температура растёт',
                alert: true
            },
            {
                minute: 300,
                text: 'Затор рассосался, едем дальше',
                alert: false
            },
            {
                minute: 360,
                text: '⚠️ Температура достигла +9°C!',
                alert: true
            }
        ],
        tempCurve: [
            {
                minute: 0,
                temp: 3.5
            },
            {
                minute: 180,
                temp: 6.5
            },
            {
                minute: 240,
                temp: 8.1
            },
            {
                minute: 300,
                temp: 9.2
            },
            {
                minute: 390,
                temp: 9.8
            }
        ],
        needsReport: true
    }
];
function Step3_Transport({ onComplete }) {
    _s();
    const [selectedScenario, setSelectedScenario] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isTransporting, setIsTransporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentMinute, setCurrentMinute] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentTemp, setCurrentTemp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3.5);
    const [eventLog, setEventLog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [reportedToLab, setReportedToLab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Интерполяция температуры по tempCurve
    const interpolateTemp = (minute, curve)=>{
        for(let i = 0; i < curve.length - 1; i++){
            const p1 = curve[i];
            const p2 = curve[i + 1];
            if (minute >= p1.minute && minute <= p2.minute) {
                const ratio = (minute - p1.minute) / (p2.minute - p1.minute);
                return p1.temp + ratio * (p2.temp - p1.temp);
            }
        }
        return curve[curve.length - 1].temp;
    };
    const startTransport = (scenario)=>{
        setSelectedScenario(scenario);
        setIsTransporting(true);
        setCurrentMinute(0);
        setCurrentTemp(3.5);
        setEventLog([
            {
                minute: 0,
                text: '🚗 Начинаем движение к лаборатории'
            }
        ]);
        setReportedToLab(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Step3_Transport.useEffect": ()=>{
            if (!isTransporting || !selectedScenario) return;
            const processedMinutes = new Set(); // Отслеживаем обработанные минуты
            timerRef.current = setInterval({
                "Step3_Transport.useEffect": ()=>{
                    setCurrentMinute({
                        "Step3_Transport.useEffect": (prev)=>{
                            const next = prev + 1;
                            // Обновляем температуру
                            const temp = interpolateTemp(next, selectedScenario.tempCurve);
                            setCurrentTemp(temp);
                            // Проверяем события (только если ещё не обработали эту минуту)
                            if (!processedMinutes.has(next)) {
                                const event = selectedScenario.events.find({
                                    "Step3_Transport.useEffect.event": (e)=>e.minute === next
                                }["Step3_Transport.useEffect.event"]);
                                if (event) {
                                    setEventLog({
                                        "Step3_Transport.useEffect": (log)=>[
                                                ...log,
                                                {
                                                    minute: next,
                                                    text: event.text,
                                                    alert: event.alert
                                                }
                                            ]
                                    }["Step3_Transport.useEffect"]);
                                    processedMinutes.add(next);
                                }
                            }
                            // Завершение маршрута
                            if (next >= selectedScenario.duration) {
                                setIsTransporting(false);
                                if (!processedMinutes.has(next)) {
                                    setEventLog({
                                        "Step3_Transport.useEffect": (log)=>[
                                                ...log,
                                                {
                                                    minute: next,
                                                    text: '🏁 Прибыли в лабораторию'
                                                }
                                            ]
                                    }["Step3_Transport.useEffect"]);
                                    processedMinutes.add(next);
                                }
                                clearInterval(timerRef.current);
                            }
                            return next;
                        }
                    }["Step3_Transport.useEffect"]);
                }
            }["Step3_Transport.useEffect"], 100); // 100 мс = 1 "минута" симуляции (ускорено)
            return ({
                "Step3_Transport.useEffect": ()=>{
                    if (timerRef.current) clearInterval(timerRef.current);
                }
            })["Step3_Transport.useEffect"];
        }
    }["Step3_Transport.useEffect"], [
        isTransporting,
        selectedScenario
    ]);
    const handleComplete = ()=>{
        const errors = [];
        let scorePenalty = 0;
        // Проверка: если маршрут > 5 часов, нужен доклад
        if (selectedScenario.needsReport && !reportedToLab) {
            errors.push('Транспортировка заняла более 5 часов, но лаборатория не была предупреждена. Нарушение СП 1.3.3118-13.');
            scorePenalty += 25;
        }
        // Примечание: температура зависит от выбранного маршрута, студент на неё не влияет,
        // поэтому штраф не начисляется
        onComplete({
            transportErrors: errors,
            transportScorePenalty: scorePenalty,
            transportData: {
                scenario: selectedScenario.id,
                duration: currentMinute,
                finalTemp: currentTemp,
                reportedToLab
            }
        });
    };
    const progressPercent = selectedScenario ? Math.min(100, currentMinute / selectedScenario.duration * 100) : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full max-w-6xl mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes drive { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(4px); } }
        .driving { animation: drive 0.3s infinite; }
      `
            }, void 0, false, {
                fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-12 gap-4",
                children: [
                    !isTransporting && !selectedScenario && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-12 bg-white rounded-2xl border border-slate-200 shadow-lg flex flex-col overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-slate-800 to-slate-900 px-6 py-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-white font-bold text-lg",
                                        children: "🚗 Выбор маршрута"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                        lineNumber: 175,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400 text-xs mt-1",
                                        children: "Выберите условия транспортировки"
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                        lineNumber: 176,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 grid grid-cols-1 md:grid-cols-3 gap-4",
                                children: SCENARIOS.map((scenario)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-5 rounded-xl border-2 border-slate-200 hover:border-blue-400 cursor-pointer transition-all hover:shadow-lg",
                                        onClick: ()=>startTransport(scenario),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-base text-slate-800 mb-2",
                                                children: scenario.label
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                                lineNumber: 185,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-600 mb-3",
                                                children: [
                                                    "Продолжительность: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold",
                                                        children: [
                                                            scenario.duration,
                                                            " мин"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                                        lineNumber: 187,
                                                        columnNumber: 40
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                                lineNumber: 186,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-500 leading-relaxed",
                                                children: scenario.needsReport ? '⚠️ Требуется доклад лаборатории (>5 часов)' : '✓ Доклад не требуется'
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                                lineNumber: 189,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "mt-4 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-sm transition-colors",
                                                children: "Выбрать маршрут →"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                                lineNumber: 194,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, scenario.id, true, {
                                        fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                        lineNumber: 180,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this),
                    selectedScenario && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-6 bg-white rounded-2xl border border-slate-200 shadow-lg flex flex-col overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 px-6 py-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-white font-bold text-lg",
                                                children: "🚗 Транспортировка"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                                lineNumber: 209,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-300 text-xs mt-1",
                                                children: selectedScenario.label
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                                lineNumber: 210,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 flex-1 flex flex-col gap-4 bg-gradient-to-b from-slate-50 to-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-bold text-slate-700",
                                                                children: "Прогресс маршрута"
                                                            }, void 0, false, {
                                                                fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                                                lineNumber: 216,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-mono text-slate-600",
                                                                children: [
                                                                    currentMinute,
                                                                    " / ",
                                                                    selectedScenario.duration,
                                                                    " мин"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                                                lineNumber: 217,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                                        lineNumber: 215,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full bg-slate-200 rounded-full h-3 overflow-hidden",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300",
                                                            style: {
                                                                width: `${progressPercent}%`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                                            lineNumber: 222,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                                        lineNumber: 221,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative bg-slate-100 rounded-xl p-8 border border-slate-200 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `text-6xl ${isTransporting ? 'driving' : ''}`,
                                                    children: "🚙"
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                                    lineNumber: 231,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                                lineNumber: 230,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `p-4 rounded-xl border-2 ${currentTemp <= 5 ? 'bg-emerald-50 border-emerald-300' : currentTemp <= 8 ? 'bg-amber-50 border-amber-300' : 'bg-red-50 border-red-300'}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-slate-600 mb-1",
                                                                children: "Температура"
                                                            }, void 0, false, {
                                                                fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                                                lineNumber: 243,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `text-2xl font-bold ${currentTemp <= 5 ? 'text-emerald-600' : currentTemp <= 8 ? 'text-amber-600' : 'text-red-600'}`,
                                                                children: [
                                                                    currentTemp.toFixed(1),
                                                                    "°C"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                                                lineNumber: 244,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                                        lineNumber: 236,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4 bg-blue-50 border-2 border-blue-300 rounded-xl",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-slate-600 mb-1",
                                                                children: "Время в пути"
                                                            }, void 0, false, {
                                                                fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                                                lineNumber: 256,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-2xl font-bold text-blue-600",
                                                                children: [
                                                                    Math.floor(currentMinute / 60),
                                                                    "ч ",
                                                                    currentMinute % 60,
                                                                    "м"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                                                lineNumber: 257,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                                        lineNumber: 255,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                                lineNumber: 235,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                        lineNumber: 212,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-6 bg-white rounded-2xl border border-slate-200 shadow-lg flex flex-col overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gradient-to-br from-emerald-700 to-emerald-900 px-6 py-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-white font-bold text-lg",
                                                children: "📋 Журнал событий"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                                lineNumber: 268,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-emerald-300 text-xs mt-1",
                                                children: "Следите за условиями"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                                lineNumber: 269,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                        lineNumber: 267,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-5 flex-1 flex flex-col gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 bg-slate-50 rounded-xl p-4 border border-slate-200 overflow-y-auto max-h-64",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: eventLog.map((event, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `p-3 rounded-lg text-xs ${event.alert ? 'bg-red-100 border border-red-300 text-red-800 font-semibold' : 'bg-white border border-slate-200 text-slate-700'}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-mono text-[10px] text-slate-500",
                                                                    children: [
                                                                        "[",
                                                                        Math.floor(event.minute / 60),
                                                                        ":",
                                                                        String(event.minute % 60).padStart(2, '0'),
                                                                        "]"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                                                    lineNumber: 283,
                                                                    columnNumber: 25
                                                                }, this),
                                                                ' ',
                                                                event.text
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                                            lineNumber: 275,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                                    lineNumber: 273,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                                lineNumber: 272,
                                                columnNumber: 17
                                            }, this),
                                            selectedScenario.needsReport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-amber-50 border-2 border-amber-300 rounded-xl p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-bold text-amber-800 mb-2",
                                                        children: "⚠️ Маршрут долгий (>5 часов)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                                        lineNumber: 295,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-amber-700 mb-3 leading-relaxed",
                                                        children: "Согласно СП 1.3.3118-13, при транспортировке более 5 часов необходимо сообщить в лабораторию."
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                                        lineNumber: 298,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setReportedToLab(true),
                                                        disabled: reportedToLab,
                                                        className: `w-full py-2 rounded-lg font-bold text-sm transition-colors ${reportedToLab ? 'bg-emerald-100 text-emerald-700 cursor-not-allowed' : 'bg-amber-500 hover:bg-amber-600 text-white'}`,
                                                        children: reportedToLab ? '✓ Лаборатория уведомлена' : '📞 Сообщить в лабораторию'
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                                        lineNumber: 301,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                                lineNumber: 294,
                                                columnNumber: 19
                                            }, this),
                                            !isTransporting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleComplete,
                                                className: "w-full bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-4 rounded-2xl shadow-lg transition-all transform hover:-translate-y-0.5 text-sm",
                                                children: "Завершить транспортировку →"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                                lineNumber: 316,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                        lineNumber: 271,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                                lineNumber: 266,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
                lineNumber: 169,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/steps/Stage4/Step3_Transport.jsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
}
_s(Step3_Transport, "h+6imMLLkDfD3ejPabOUMsrsVQY=");
_c = Step3_Transport;
var _c;
__turbopack_context__.k.register(_c, "Step3_Transport");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/steps/Stage4/Step4_LabReception.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Step4_LabReception
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function Step4_LabReception({ transportData, onComplete }) {
    _s();
    const [visualObservations, setVisualObservations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        tempReading: null,
        bottlesIntact: null,
        sealIntact: null,
        labelReadable: null
    });
    const [reportFilled, setReportFilled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Рандомное состояние (генерируется один раз при монтировании)
    // Шанс повреждения зависит от времени в пути
    const [actualState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Step4_LabReception.useState": ()=>{
            const duration = transportData?.duration || 90; // минуты
            // Базовый шанс повреждения увеличивается с временем
            const damageChanceMultiplier = Math.min(duration / 90, 3); // макс 3x при длинном маршруте
            const bottlesOk = Math.random() > 0.1 * damageChanceMultiplier; // 10-30% шанс повреждения
            const sealOk = Math.random() > 0.15 * damageChanceMultiplier; // 15-45% шанс нарушения
            const labelsOk = Math.random() > 0.05 * damageChanceMultiplier; // 5-15% шанс размытия
            return {
                temp: transportData?.finalTemp || 5.5,
                bottlesOk,
                sealOk,
                labelsOk
            };
        }
    }["Step4_LabReception.useState"]);
    const handleTempInput = (value)=>{
        setVisualObservations((prev)=>({
                ...prev,
                tempReading: parseFloat(value) || null
            }));
    };
    const handleCheckboxChange = (field, value)=>{
        setVisualObservations((prev)=>({
                ...prev,
                [field]: value
            }));
    };
    const handleSubmitReport = ()=>{
        setReportFilled(true);
    };
    const checkReception = ()=>{
        const errors = [];
        let scorePenalty = 0;
        // Проверка: правильно ли считана температура
        if (!visualObservations.tempReading) {
            errors.push('Температура не зафиксирована в акте приёмки.');
            scorePenalty += 15;
        } else if (Math.abs(visualObservations.tempReading - actualState.temp) > 0.5) {
            errors.push(`Температура зафиксирована неверно (указано ${visualObservations.tempReading}°C, фактически ${actualState.temp.toFixed(1)}°C).`);
            scorePenalty += 10;
        }
        // Проверка: визуальный осмотр флаконов
        if (visualObservations.bottlesIntact === null) {
            errors.push('Не проверена целостность флаконов.');
            scorePenalty += 15;
        } else if (visualObservations.bottlesIntact === false && actualState.bottlesOk) {
            errors.push('Флаконы отмечены как повреждённые, хотя они целы. Ошибка осмотра.');
            scorePenalty += 10;
        }
        // Проверка: герметичность
        if (visualObservations.sealIntact === null) {
            errors.push('Не проверена герметичность упаковки.');
            scorePenalty += 15;
        } else if (visualObservations.sealIntact === false && actualState.sealOk) {
            errors.push('Герметичность отмечена как нарушенная, хотя она сохранена. Ошибка осмотра.');
            scorePenalty += 10;
        }
        // Проверка: этикетки
        if (visualObservations.labelReadable === null) {
            errors.push('Не проверена читаемость этикеток.');
            scorePenalty += 10;
        }
        // Проверка: заполнен ли акт приёмки
        if (!reportFilled) {
            errors.push('Акт приёмки не заполнен. Образцы не могут быть переданы в лабораторию.');
            scorePenalty += 20;
        }
        // Критичная температура
        if (actualState.temp > 10) {
            errors.push('Температура превысила +10°C. Образцы должны быть отклонены.');
            scorePenalty += 30;
        }
        onComplete({
            receptionErrors: errors,
            receptionScorePenalty: scorePenalty,
            receptionData: visualObservations
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full max-w-6xl mb-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-12 gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-lg flex flex-col overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-br from-slate-800 to-slate-900 px-6 py-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-white font-bold text-lg",
                                    children: "🔍 Визуальный осмотр"
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-400 text-xs mt-1",
                                    children: "Осмотрите образцы и зафиксируйте состояние"
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-5 flex-1 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-50 border-2 border-slate-200 rounded-xl p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-4xl",
                                                children: "🌡️"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                lineNumber: 122,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-bold text-slate-800 mb-1",
                                                        children: "Показания термометра"
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                        lineNumber: 124,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-white border-2 border-slate-300 rounded-lg p-3 mb-3 text-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `text-3xl font-mono font-bold ${actualState.temp <= 5 ? 'text-emerald-600' : actualState.temp <= 8 ? 'text-amber-600' : 'text-red-600'}`,
                                                            children: [
                                                                actualState.temp.toFixed(1),
                                                                "°C"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                            lineNumber: 126,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                        lineNumber: 125,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-slate-700 mb-2",
                                                        children: "Введите показания в акт приёмки:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                        lineNumber: 136,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        step: "0.1",
                                                        placeholder: "Например: 5.5",
                                                        onChange: (e)=>handleTempInput(e.target.value),
                                                        className: "w-full px-3 py-2 border-2 border-slate-300 rounded-lg text-sm font-mono focus:border-blue-500 outline-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                        lineNumber: 137,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                lineNumber: 123,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-50 border-2 border-slate-200 rounded-xl p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-bold text-slate-800 mb-3",
                                                    children: "Состояние флаконов"
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                    lineNumber: 152,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white border-2 border-slate-300 rounded-lg p-4 mb-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 200 120",
                                                        className: "w-full h-auto",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                        x: "30",
                                                                        y: "40",
                                                                        width: "30",
                                                                        height: "60",
                                                                        fill: "#e0f2fe",
                                                                        stroke: "#0369a1",
                                                                        strokeWidth: "2",
                                                                        rx: "3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                        lineNumber: 157,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                        x: "35",
                                                                        y: "35",
                                                                        width: "20",
                                                                        height: "8",
                                                                        fill: "#0369a1",
                                                                        rx: "2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                        lineNumber: 158,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                        x: "45",
                                                                        y: "75",
                                                                        textAnchor: "middle",
                                                                        fill: "#0369a1",
                                                                        fontSize: "20",
                                                                        children: "🧪"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                        lineNumber: 159,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    !actualState.bottlesOk && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M 45 45 L 50 60 L 45 75 L 48 90",
                                                                                stroke: "#ef4444",
                                                                                strokeWidth: "2",
                                                                                fill: "none"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                                lineNumber: 163,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                cx: "47",
                                                                                cy: "85",
                                                                                r: "3",
                                                                                fill: "#ef4444"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                                lineNumber: 164,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                lineNumber: 156,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                        x: "140",
                                                                        y: "40",
                                                                        width: "30",
                                                                        height: "60",
                                                                        fill: "#dbeafe",
                                                                        stroke: "#0369a1",
                                                                        strokeWidth: "2",
                                                                        rx: "3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                        lineNumber: 171,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                        x: "145",
                                                                        y: "35",
                                                                        width: "20",
                                                                        height: "8",
                                                                        fill: "#0369a1",
                                                                        rx: "2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                        lineNumber: 172,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                        x: "155",
                                                                        y: "75",
                                                                        textAnchor: "middle",
                                                                        fill: "#0369a1",
                                                                        fontSize: "20",
                                                                        children: "🦠"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                        lineNumber: 173,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    !actualState.bottlesOk && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M 155 50 L 150 65 L 155 80",
                                                                                stroke: "#ef4444",
                                                                                strokeWidth: "2",
                                                                                fill: "none"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                                lineNumber: 177,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                cx: "152",
                                                                                cy: "70",
                                                                                r: "2",
                                                                                fill: "#ef4444"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                                lineNumber: 178,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                lineNumber: 170,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                        lineNumber: 154,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                    lineNumber: 153,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-700 mb-2",
                                                    children: "Ваша оценка:"
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                    lineNumber: 184,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-2 cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "radio",
                                                                    name: "bottles",
                                                                    onChange: ()=>handleCheckboxChange('bottlesIntact', true),
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                    lineNumber: 187,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-slate-700",
                                                                    children: "Целые, без повреждений"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                    lineNumber: 193,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                            lineNumber: 186,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-2 cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "radio",
                                                                    name: "bottles",
                                                                    onChange: ()=>handleCheckboxChange('bottlesIntact', false),
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                    lineNumber: 196,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-slate-700",
                                                                    children: "Повреждены / треснуты"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                    lineNumber: 202,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                            lineNumber: 195,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                    lineNumber: 185,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                            lineNumber: 151,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-50 border-2 border-slate-200 rounded-xl p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-bold text-slate-800 mb-3",
                                                    children: "Герметичность упаковки"
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                    lineNumber: 213,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white border-2 border-slate-300 rounded-lg p-4 mb-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 200 100",
                                                        className: "w-full h-auto",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                x: "40",
                                                                y: "30",
                                                                width: "120",
                                                                height: "60",
                                                                fill: "#e0f2fe",
                                                                stroke: "#0369a1",
                                                                strokeWidth: "3",
                                                                rx: "6"
                                                            }, void 0, false, {
                                                                fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                lineNumber: 217,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "50",
                                                                y1: "60",
                                                                x2: "150",
                                                                y2: "60",
                                                                stroke: actualState.sealOk ? '#10b981' : '#cbd5e1',
                                                                strokeWidth: "3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                lineNumber: 220,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                x: "60",
                                                                y: "45",
                                                                width: "15",
                                                                height: "8",
                                                                fill: actualState.sealOk ? '#10b981' : '#ef4444',
                                                                stroke: "#1e293b",
                                                                strokeWidth: "1.5",
                                                                rx: "2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                lineNumber: 223,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                x: "125",
                                                                y: "45",
                                                                width: "15",
                                                                height: "8",
                                                                fill: actualState.sealOk ? '#10b981' : '#ef4444',
                                                                stroke: "#1e293b",
                                                                strokeWidth: "1.5",
                                                                rx: "2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                lineNumber: 224,
                                                                columnNumber: 23
                                                            }, this),
                                                            !actualState.sealOk && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M 95 60 L 105 60",
                                                                        stroke: "none"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                        lineNumber: 229,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                        cx: "100",
                                                                        cy: "60",
                                                                        r: "4",
                                                                        fill: "#ef4444"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                        lineNumber: 230,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                        x: "100",
                                                                        y: "80",
                                                                        textAnchor: "middle",
                                                                        fill: "#ef4444",
                                                                        fontSize: "16",
                                                                        children: "⚠️"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                        lineNumber: 232,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true),
                                                            actualState.sealOk && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                x: "100",
                                                                y: "80",
                                                                textAnchor: "middle",
                                                                fill: "#10b981",
                                                                fontSize: "16",
                                                                children: "✓"
                                                            }, void 0, false, {
                                                                fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                lineNumber: 237,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                        lineNumber: 215,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                    lineNumber: 214,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-700 mb-2",
                                                    children: "Ваша оценка:"
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                    lineNumber: 241,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-2 cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "radio",
                                                                    name: "seal",
                                                                    onChange: ()=>handleCheckboxChange('sealIntact', true),
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                    lineNumber: 244,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-slate-700",
                                                                    children: "Герметична"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                    lineNumber: 250,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                            lineNumber: 243,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-2 cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "radio",
                                                                    name: "seal",
                                                                    onChange: ()=>handleCheckboxChange('sealIntact', false),
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                    lineNumber: 253,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-slate-700",
                                                                    children: "Нарушена"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                    lineNumber: 259,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                            lineNumber: 252,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                    lineNumber: 242,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                            lineNumber: 212,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-50 border-2 border-slate-200 rounded-xl p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-bold text-slate-800 mb-3",
                                                    children: "Читаемость этикеток"
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                    lineNumber: 270,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white border-2 border-slate-300 rounded-lg p-4 mb-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 200 80",
                                                        className: "w-full h-auto",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                x: "50",
                                                                y: "20",
                                                                width: "100",
                                                                height: "40",
                                                                fill: "#fff",
                                                                stroke: "#64748b",
                                                                strokeWidth: "2",
                                                                rx: "3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                lineNumber: 274,
                                                                columnNumber: 23
                                                            }, this),
                                                            actualState.labelsOk ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                        x: "100",
                                                                        y: "32",
                                                                        textAnchor: "middle",
                                                                        fill: "#1e293b",
                                                                        fontSize: "8",
                                                                        fontWeight: "bold",
                                                                        children: "ПРОБА ВОДЫ"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                        lineNumber: 279,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                        x: "100",
                                                                        y: "42",
                                                                        textAnchor: "middle",
                                                                        fill: "#64748b",
                                                                        fontSize: "6",
                                                                        children: "Дата: 22.06.2026"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                        lineNumber: 282,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                        x: "100",
                                                                        y: "50",
                                                                        textAnchor: "middle",
                                                                        fill: "#64748b",
                                                                        fontSize: "6",
                                                                        children: "№: 12345"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                        lineNumber: 285,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                        x: "60",
                                                                        y: "25",
                                                                        width: "80",
                                                                        height: "4",
                                                                        fill: "#cbd5e1",
                                                                        opacity: "0.5",
                                                                        rx: "1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                        lineNumber: 292,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                        x: "65",
                                                                        y: "33",
                                                                        width: "70",
                                                                        height: "3",
                                                                        fill: "#cbd5e1",
                                                                        opacity: "0.4",
                                                                        rx: "1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                        lineNumber: 293,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                        x: "70",
                                                                        y: "40",
                                                                        width: "60",
                                                                        height: "3",
                                                                        fill: "#cbd5e1",
                                                                        opacity: "0.3",
                                                                        rx: "1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                        lineNumber: 294,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                        x: "60",
                                                                        y: "48",
                                                                        width: "50",
                                                                        height: "3",
                                                                        fill: "#cbd5e1",
                                                                        opacity: "0.3",
                                                                        rx: "1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                        lineNumber: 295,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                                                        cx: "120",
                                                                        cy: "45",
                                                                        rx: "15",
                                                                        ry: "10",
                                                                        fill: "#94a3b8",
                                                                        opacity: "0.4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                        lineNumber: 297,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                        lineNumber: 272,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                    lineNumber: 271,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-700 mb-2",
                                                    children: "Ваша оценка:"
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                    lineNumber: 302,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-2 cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "radio",
                                                                    name: "labels",
                                                                    onChange: ()=>handleCheckboxChange('labelReadable', true),
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                    lineNumber: 305,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-slate-700",
                                                                    children: "Читаемы"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                    lineNumber: 311,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                            lineNumber: 304,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-2 cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "radio",
                                                                    name: "labels",
                                                                    onChange: ()=>handleCheckboxChange('labelReadable', false),
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                    lineNumber: 314,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-slate-700",
                                                                    children: "Повреждены/нечитаемы"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                                    lineNumber: 320,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                            lineNumber: 313,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                    lineNumber: 303,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                            lineNumber: 269,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                        lineNumber: 268,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                    lineNumber: 267,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-lg flex flex-col overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-br from-emerald-700 to-emerald-900 px-6 py-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-white font-bold text-lg",
                                    children: "📋 Акт приёмки образцов"
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                    lineNumber: 332,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-emerald-300 text-xs mt-1",
                                    children: "Заполните форму на основе осмотра"
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                    lineNumber: 333,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                            lineNumber: 331,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-5 flex-1 flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-3 flex-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-x-4 gap-y-2 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-slate-600",
                                                children: "Дата приёмки:"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                lineNumber: 338,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-bold text-slate-800",
                                                children: new Date().toLocaleDateString('ru-RU')
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                lineNumber: 339,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-slate-600",
                                                children: "Время:"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                lineNumber: 343,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-bold text-slate-800",
                                                children: new Date().toLocaleTimeString('ru-RU', {
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                lineNumber: 344,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-slate-600",
                                                children: "Температура при приёмке:"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                lineNumber: 351,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `font-bold font-mono ${visualObservations.tempReading ? 'text-blue-600' : 'text-slate-400'}`,
                                                children: visualObservations.tempReading ? `${visualObservations.tempReading}°C` : 'Не указана'
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                lineNumber: 352,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-slate-600",
                                                children: "Флаконы:"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                lineNumber: 364,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `font-bold ${visualObservations.bottlesIntact === null ? 'text-slate-400' : visualObservations.bottlesIntact ? 'text-emerald-600' : 'text-red-600'}`,
                                                children: visualObservations.bottlesIntact === null ? 'Не проверено' : visualObservations.bottlesIntact ? 'Целые ✓' : 'Повреждены ✗'
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                lineNumber: 365,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-slate-600",
                                                children: "Герметичность:"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                lineNumber: 381,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `font-bold ${visualObservations.sealIntact === null ? 'text-slate-400' : visualObservations.sealIntact ? 'text-emerald-600' : 'text-red-600'}`,
                                                children: visualObservations.sealIntact === null ? 'Не проверено' : visualObservations.sealIntact ? 'Сохранена ✓' : 'Нарушена ✗'
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                lineNumber: 382,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-slate-600",
                                                children: "Этикетки:"
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                lineNumber: 398,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `font-bold ${visualObservations.labelReadable === null ? 'text-slate-400' : visualObservations.labelReadable ? 'text-emerald-600' : 'text-red-600'}`,
                                                children: visualObservations.labelReadable === null ? 'Не проверено' : visualObservations.labelReadable ? 'Читаемы ✓' : 'Повреждены ✗'
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                                lineNumber: 399,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                        lineNumber: 337,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                    lineNumber: 336,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs text-blue-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-bold mb-1",
                                            children: "📖 ГОСТ Р 59024‑2020"
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                            lineNumber: 418,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "leading-relaxed text-blue-700",
                                            children: "При приёмке образцов необходимо зафиксировать температуру, проверить целостность флаконов, герметичность упаковки и читаемость этикеток."
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                            lineNumber: 419,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                    lineNumber: 417,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSubmitReport,
                                    disabled: reportFilled,
                                    className: `w-full py-3 rounded-xl font-bold text-sm transition-all ${reportFilled ? 'bg-emerald-100 text-emerald-700 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`,
                                    children: reportFilled ? '✓ Акт заполнен' : 'Заполнить акт приёмки'
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                    lineNumber: 425,
                                    columnNumber: 13
                                }, this),
                                reportFilled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: checkReception,
                                    className: "w-full bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-4 rounded-2xl shadow-lg transition-all transform hover:-translate-y-0.5 text-sm",
                                    children: "Завершить приёмку →"
                                }, void 0, false, {
                                    fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                                    lineNumber: 438,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                            lineNumber: 335,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
                    lineNumber: 330,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
            lineNumber: 108,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/steps/Stage4/Step4_LabReception.jsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_s(Step4_LabReception, "emA2B2viDnYbVyKHNkxVUuOsd5E=");
_c = Step4_LabReception;
var _c;
__turbopack_context__.k.register(_c, "Step4_LabReception");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/steps/Stage4/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Stage4Simulator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage4$2f$Step1_PackBag$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage4/Step1_PackBag.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage4$2f$Step2_SealBag$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage4/Step2_SealBag.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage4$2f$Step3_Transport$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage4/Step3_Transport.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage4$2f$Step4_LabReception$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/steps/Stage4/Step4_LabReception.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Stage4Simulator({ onComplete }) {
    _s();
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        step1: null,
        step2: null,
        step3: null,
        step4: null
    });
    const handleStepComplete = (stepNumber, data)=>{
        setResults((prev)=>({
                ...prev,
                [`step${stepNumber}`]: data
            }));
        if (stepNumber < 4) {
            setCurrentStep(stepNumber + 1);
        } else {
            // Все шаги завершены, показываем финальный отчёт
            setCurrentStep(5);
        }
    };
    const calculateTotalScore = ()=>{
        let totalPenalty = 0;
        if (results.step1) totalPenalty += results.step1.packingScorePenalty || 0;
        if (results.step2) totalPenalty += results.step2.sealingScorePenalty || 0;
        if (results.step3) totalPenalty += results.step3.transportScorePenalty || 0;
        if (results.step4) totalPenalty += results.step4.receptionScorePenalty || 0;
        return Math.max(0, 100 - totalPenalty);
    };
    const getAllErrors = ()=>{
        const allErrors = [];
        if (results.step1?.packingErrors) {
            allErrors.push({
                step: 'Укладка',
                errors: results.step1.packingErrors
            });
        }
        if (results.step2?.sealingErrors) {
            allErrors.push({
                step: 'Герметизация',
                errors: results.step2.sealingErrors
            });
        }
        if (results.step3?.transportErrors) {
            allErrors.push({
                step: 'Транспортировка',
                errors: results.step3.transportErrors
            });
        }
        if (results.step4?.receptionErrors) {
            allErrors.push({
                step: 'Приёмка',
                errors: results.step4.receptionErrors
            });
        }
        return allErrors;
    };
    const handleRestart = ()=>{
        setCurrentStep(1);
        setResults({
            step1: null,
            step2: null,
            step3: null,
            step4: null
        });
    };
    const steps = [
        {
            num: 1,
            label: 'Укладка',
            completed: !!results.step1
        },
        {
            num: 2,
            label: 'Герметизация',
            completed: !!results.step2
        },
        {
            num: 3,
            label: 'Транспортировка',
            completed: !!results.step3
        },
        {
            num: 4,
            label: 'Приёмка',
            completed: !!results.step4
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-8 px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                currentStep < 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-xl p-6 mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-4",
                        children: steps.map((step, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${step.num === currentStep ? 'bg-blue-600 text-white scale-110 shadow-lg' : step.completed ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-500'}`,
                                                children: step.completed ? '✓' : step.num
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/index.jsx",
                                                lineNumber: 86,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-semibold text-slate-700 mt-2",
                                                children: step.label
                                            }, void 0, false, {
                                                fileName: "[project]/steps/Stage4/index.jsx",
                                                lineNumber: 97,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/steps/Stage4/index.jsx",
                                        lineNumber: 85,
                                        columnNumber: 19
                                    }, this),
                                    idx < steps.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex-1 h-1 mx-2 rounded transition-all ${step.completed ? 'bg-emerald-500' : 'bg-slate-200'}`
                                    }, void 0, false, {
                                        fileName: "[project]/steps/Stage4/index.jsx",
                                        lineNumber: 102,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, step.num, true, {
                                fileName: "[project]/steps/Stage4/index.jsx",
                                lineNumber: 84,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/steps/Stage4/index.jsx",
                        lineNumber: 82,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/steps/Stage4/index.jsx",
                    lineNumber: 81,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6",
                    children: [
                        currentStep === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage4$2f$Step1_PackBag$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onComplete: (data)=>handleStepComplete(1, data)
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage4/index.jsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this),
                        currentStep === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage4$2f$Step2_SealBag$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onComplete: (data)=>handleStepComplete(2, data)
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage4/index.jsx",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this),
                        currentStep === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage4$2f$Step3_Transport$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onComplete: (data)=>handleStepComplete(3, data)
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage4/index.jsx",
                            lineNumber: 123,
                            columnNumber: 13
                        }, this),
                        currentStep === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$steps$2f$Stage4$2f$Step4_LabReception$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            transportData: results.step3?.transportData,
                            onComplete: (data)=>handleStepComplete(4, data)
                        }, void 0, false, {
                            fileName: "[project]/steps/Stage4/index.jsx",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this),
                        currentStep === 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-2xl shadow-xl overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 px-8 py-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-white font-bold text-2xl mb-2",
                                            children: "📊 Итоговый отчёт"
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage4/index.jsx",
                                            lineNumber: 136,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-300 text-sm",
                                            children: "Результаты прохождения этапа 4"
                                        }, void 0, false, {
                                            fileName: "[project]/steps/Stage4/index.jsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/steps/Stage4/index.jsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-8 space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-5xl font-bold text-blue-600 mb-2",
                                                    children: calculateTotalScore()
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/index.jsx",
                                                    lineNumber: 145,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-slate-600",
                                                    children: "баллов из 100"
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/index.jsx",
                                                    lineNumber: 148,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4",
                                                    children: [
                                                        calculateTotalScore() >= 90 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-block px-4 py-2 bg-emerald-500 text-white font-bold rounded-full text-sm",
                                                            children: "Отлично ✓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/steps/Stage4/index.jsx",
                                                            lineNumber: 151,
                                                            columnNumber: 23
                                                        }, this),
                                                        calculateTotalScore() >= 70 && calculateTotalScore() < 90 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-block px-4 py-2 bg-blue-500 text-white font-bold rounded-full text-sm",
                                                            children: "Хорошо"
                                                        }, void 0, false, {
                                                            fileName: "[project]/steps/Stage4/index.jsx",
                                                            lineNumber: 156,
                                                            columnNumber: 23
                                                        }, this),
                                                        calculateTotalScore() >= 50 && calculateTotalScore() < 70 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-block px-4 py-2 bg-amber-500 text-white font-bold rounded-full text-sm",
                                                            children: "Удовлетворительно"
                                                        }, void 0, false, {
                                                            fileName: "[project]/steps/Stage4/index.jsx",
                                                            lineNumber: 161,
                                                            columnNumber: 23
                                                        }, this),
                                                        calculateTotalScore() < 50 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-block px-4 py-2 bg-red-500 text-white font-bold rounded-full text-sm",
                                                            children: "Требуется повторение"
                                                        }, void 0, false, {
                                                            fileName: "[project]/steps/Stage4/index.jsx",
                                                            lineNumber: 166,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/steps/Stage4/index.jsx",
                                                    lineNumber: 149,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/steps/Stage4/index.jsx",
                                            lineNumber: 144,
                                            columnNumber: 17
                                        }, this),
                                        getAllErrors().length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-bold text-slate-800 mb-4",
                                                    children: "Обнаруженные нарушения:"
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/index.jsx",
                                                    lineNumber: 176,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: getAllErrors().map((stepErrors, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-red-50 border border-red-200 rounded-xl p-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-bold text-red-800 mb-2",
                                                                    children: stepErrors.step
                                                                }, void 0, false, {
                                                                    fileName: "[project]/steps/Stage4/index.jsx",
                                                                    lineNumber: 185,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "space-y-1",
                                                                    children: stepErrors.errors.map((error, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "text-sm text-red-700 leading-relaxed",
                                                                            children: [
                                                                                "• ",
                                                                                error
                                                                            ]
                                                                        }, i, true, {
                                                                            fileName: "[project]/steps/Stage4/index.jsx",
                                                                            lineNumber: 190,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/steps/Stage4/index.jsx",
                                                                    lineNumber: 188,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, idx, true, {
                                                            fileName: "[project]/steps/Stage4/index.jsx",
                                                            lineNumber: 181,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/index.jsx",
                                                    lineNumber: 179,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/steps/Stage4/index.jsx",
                                            lineNumber: 175,
                                            columnNumber: 19
                                        }, this),
                                        getAllErrors().length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-4xl mb-2",
                                                    children: "🎉"
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/index.jsx",
                                                    lineNumber: 203,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-lg font-bold text-emerald-800",
                                                    children: "Все этапы выполнены без нарушений!"
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/index.jsx",
                                                    lineNumber: 204,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-emerald-700 mt-2",
                                                    children: "Вы успешно завершили транспортировку и приёмку образцов."
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/index.jsx",
                                                    lineNumber: 207,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/steps/Stage4/index.jsx",
                                            lineNumber: 202,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-bold text-slate-800 mb-4",
                                                    children: "Детализация по шагам:"
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/index.jsx",
                                                    lineNumber: 215,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                    children: [
                                                        {
                                                            label: 'Укладка',
                                                            penalty: results.step1?.packingScorePenalty || 0
                                                        },
                                                        {
                                                            label: 'Герметизация',
                                                            penalty: results.step2?.sealingScorePenalty || 0
                                                        },
                                                        {
                                                            label: 'Транспортировка',
                                                            penalty: results.step3?.transportScorePenalty || 0
                                                        },
                                                        {
                                                            label: 'Приёмка',
                                                            penalty: results.step4?.receptionScorePenalty || 0
                                                        }
                                                    ].map((step, idx)=>{
                                                        const score = Math.max(0, 100 - step.penalty);
                                                        const bgColor = score >= 90 ? 'bg-emerald-50' : score >= 70 ? 'bg-blue-50' : score >= 50 ? 'bg-amber-50' : 'bg-red-50';
                                                        const borderColor = score >= 90 ? 'border-emerald-300' : score >= 70 ? 'border-blue-300' : score >= 50 ? 'border-amber-300' : 'border-red-300';
                                                        const textColor = score >= 90 ? 'text-emerald-600' : score >= 70 ? 'text-blue-600' : score >= 50 ? 'text-amber-600' : 'text-red-600';
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `${bgColor} border-2 ${borderColor} rounded-xl p-4 flex justify-between items-center`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm font-semibold text-slate-700",
                                                                    children: step.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/steps/Stage4/index.jsx",
                                                                    lineNumber: 235,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `text-lg font-bold ${textColor}`,
                                                                    children: score
                                                                }, void 0, false, {
                                                                    fileName: "[project]/steps/Stage4/index.jsx",
                                                                    lineNumber: 238,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, idx, true, {
                                                            fileName: "[project]/steps/Stage4/index.jsx",
                                                            lineNumber: 231,
                                                            columnNumber: 25
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/index.jsx",
                                                    lineNumber: 218,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/steps/Stage4/index.jsx",
                                            lineNumber: 214,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-blue-50 border border-blue-200 rounded-xl p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-bold text-blue-900 mb-3",
                                                    children: "📚 Нормативные документы:"
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/index.jsx",
                                                    lineNumber: 249,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-2 text-xs text-blue-800",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "• ГОСТ Р 59024‑2020 — Отбор проб питьевой воды"
                                                        }, void 0, false, {
                                                            fileName: "[project]/steps/Stage4/index.jsx",
                                                            lineNumber: 253,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "• СП 1.3.3118-13 — Безопасность работы с микроорганизмами"
                                                        }, void 0, false, {
                                                            fileName: "[project]/steps/Stage4/index.jsx",
                                                            lineNumber: 254,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "• МУК 4.2.1018-01 — Организация и проведение микробиологического мониторинга"
                                                        }, void 0, false, {
                                                            fileName: "[project]/steps/Stage4/index.jsx",
                                                            lineNumber: 255,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/steps/Stage4/index.jsx",
                                                    lineNumber: 252,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/steps/Stage4/index.jsx",
                                            lineNumber: 248,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleRestart,
                                                    className: "flex-1 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 rounded-2xl shadow-lg transition-all transform hover:-translate-y-0.5",
                                                    children: "🔄 Пройти заново"
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/index.jsx",
                                                    lineNumber: 263,
                                                    columnNumber: 19
                                                }, this),
                                                onComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>onComplete(results),
                                                    className: "flex-1 bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-4 rounded-2xl shadow-lg transition-all transform hover:-translate-y-0.5",
                                                    children: "Завершить этап 4 →"
                                                }, void 0, false, {
                                                    fileName: "[project]/steps/Stage4/index.jsx",
                                                    lineNumber: 270,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/steps/Stage4/index.jsx",
                                            lineNumber: 262,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/steps/Stage4/index.jsx",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/steps/Stage4/index.jsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/steps/Stage4/index.jsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/steps/Stage4/index.jsx",
            lineNumber: 77,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/steps/Stage4/index.jsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(Stage4Simulator, "lHk9AB5k7in4TfPFLlwQzduXDFE=");
_c = Stage4Simulator;
var _c;
__turbopack_context__.k.register(_c, "Stage4Simulator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=steps_Stage4_1wszo2r._.js.map