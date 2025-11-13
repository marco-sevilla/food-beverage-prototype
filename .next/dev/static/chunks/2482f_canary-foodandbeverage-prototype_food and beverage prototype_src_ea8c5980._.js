(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateMenuModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateMenuModal",
    ()=>CreateMenuModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/react/Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/js/mdi.js [app-client] (ecmascript)");
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
var CreateMenuModal = function(param) {
    var isOpen = param.isOpen, onClose = param.onClose, onCreateMenu = param.onCreateMenu;
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), 2), menuName = _useState[0], setMenuName = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), 2), error = _useState1[0], setError = _useState1[1];
    var handleSubmit = function(e) {
        e.preventDefault();
        if (!menuName.trim()) {
            setError('Menu name is required');
            return;
        }
        onCreateMenu(menuName.trim());
        setMenuName('');
        setError('');
        onClose();
    };
    var handleClose = function() {
        setMenuName('');
        setError('');
        onClose();
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow-xl max-w-md w-full mx-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-6 py-4 border-b border-neutral-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-roboto text-subtitle font-semibold text-canary-black-1",
                            children: "Create new menu"
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateMenuModal.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClose,
                            className: "p-1 hover:bg-gray-100 rounded",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiClose"],
                                size: 1,
                                color: "#666666"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateMenuModal.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, _this)
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateMenuModal.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateMenuModal.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "px-6 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block font-roboto text-body-sm font-medium text-canary-black-1 mb-2",
                                    children: "Menu name"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateMenuModal.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: menuName,
                                    onChange: function(e) {
                                        setMenuName(e.target.value);
                                        if (error) setError('');
                                    },
                                    placeholder: "Breakfast menu, Lunch menu, Happy hour",
                                    className: "w-full h-12 px-4 border rounded font-roboto text-body-sm text-canary-black-1 focus:outline-none focus:ring-2 focus:ring-canary-blue-1 ".concat(error ? 'border-red-400' : 'border-neutral-200'),
                                    autoFocus: true
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateMenuModal.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, _this),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 font-roboto text-caption text-red-600",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateMenuModal.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateMenuModal.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-end gap-3 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleClose,
                                    className: "flex items-center justify-center gap-2 h-10 px-4 bg-transparent text-canary-black-1 border border-neutral-200 rounded font-roboto text-body-sm font-medium cursor-pointer hover:bg-gray-50",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateMenuModal.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "flex items-center justify-center gap-2 h-10 px-4 bg-canary-blue-1 text-white border-none rounded font-roboto text-body-sm font-medium cursor-pointer hover:opacity-90",
                                    children: "Create menu"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateMenuModal.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateMenuModal.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateMenuModal.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, _this)
            ]
        }, void 0, true, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateMenuModal.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateMenuModal.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, _this);
};
_s(CreateMenuModal, "xPnVkyBvkBU5cEYzQLGwR6nJBSY=");
_c = CreateMenuModal;
var _c;
__turbopack_context__.k.register(_c, "CreateMenuModal");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/DeleteMenuModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeleteMenuModal",
    ()=>DeleteMenuModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/react/Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/js/mdi.js [app-client] (ecmascript)");
'use client';
;
var _this = ("TURBOPACK compile-time value", void 0);
;
;
;
var DeleteMenuModal = function(param) {
    var isOpen = param.isOpen, onClose = param.onClose, onDeleteMenu = param.onDeleteMenu, menuName = param.menuName;
    var handleDelete = function() {
        onDeleteMenu();
        onClose();
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow-xl max-w-md w-full mx-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-6 py-4 border-b border-neutral-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-roboto text-subtitle font-semibold text-canary-black-1",
                            children: "Delete menu"
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/DeleteMenuModal.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-1 hover:bg-gray-100 rounded",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiClose"],
                                size: 1,
                                color: "#666666"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/DeleteMenuModal.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, _this)
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/DeleteMenuModal.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/DeleteMenuModal.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-roboto text-body-sm text-canary-black-1",
                        children: [
                            "Are you sure you want to delete ",
                            menuName,
                            "? This action cannot be undone."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/DeleteMenuModal.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/DeleteMenuModal.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-end gap-3 px-6 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "flex items-center justify-center gap-2 h-10 px-4 bg-transparent text-canary-black-1 border border-neutral-200 rounded font-roboto text-body-sm font-medium cursor-pointer hover:bg-gray-50",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/DeleteMenuModal.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleDelete,
                            className: "flex items-center justify-center gap-2 h-10 px-4 bg-canary-red-1 text-white border-none rounded font-roboto text-body-sm font-medium cursor-pointer hover:opacity-90",
                            children: "Delete menu"
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/DeleteMenuModal.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/DeleteMenuModal.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, _this)
            ]
        }, void 0, true, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/DeleteMenuModal.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/DeleteMenuModal.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, _this);
};
_c = DeleteMenuModal;
var _c;
__turbopack_context__.k.register(_c, "DeleteMenuModal");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuManagementPage",
    ()=>MenuManagementPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/react/Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$CreateMenuModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateMenuModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$DeleteMenuModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/DeleteMenuModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/js/mdi.js [app-client] (ecmascript)");
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
var Tab = function(param) {
    var children = param.children, _param_active = param.active, active = _param_active === void 0 ? false : _param_active, onClick = param.onClick;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-start overflow-hidden cursor-pointer",
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center py-1 px-4 gap-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-roboto text-body-sm font-medium ".concat(active ? 'text-canary-blue-1' : 'text-canary-black-2'),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                    lineNumber: 42,
                    columnNumber: 7
                }, _this)
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                lineNumber: 41,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-1 w-full ".concat(active ? 'bg-canary-blue-1' : 'bg-transparent')
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                lineNumber: 48,
                columnNumber: 5
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
        lineNumber: 40,
        columnNumber: 3
    }, _this);
};
_c = Tab;
var Button = function(param) {
    var children = param.children, _param_variant = param.variant, variant = _param_variant === void 0 ? 'primary' : _param_variant, onClick = param.onClick;
    if (variant === 'icon') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClick,
            className: "flex items-center justify-center p-1.5 rounded bg-transparent border-none cursor-pointer hover:bg-gray-50",
            children: children
        }, void 0, false, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, _this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "flex items-center justify-center gap-2 h-10 px-4 bg-canary-blue-1 text-white border-none rounded font-roboto text-body-sm font-medium cursor-pointer hover:opacity-90",
        children: children
    }, void 0, false, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, _this);
};
_c1 = Button;
var MenuItem = function(param) {
    var name = param.name, entryPoint = param.entryPoint, onEdit = param.onEdit, onDelete = param.onDelete, onPreview = param.onPreview, _param_isLast = param.isLast, isLast = _param_isLast === void 0 ? false : _param_isLast;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between py-4 px-4 pr-6 bg-white ".concat(isLast ? '' : 'border-b border-neutral-200'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-48 lg:w-48 md:w-40 sm:w-32 font-roboto text-body-sm font-medium text-canary-black-1 truncate ml-3",
                children: name
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                lineNumber: 96,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-48 lg:w-48 md:w-40 sm:w-32 hidden sm:block font-roboto text-body-sm font-normal text-canary-black-1 truncate",
                children: entryPoint
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                lineNumber: 101,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 w-24 justify-end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        variant: "icon",
                        onClick: onPreview,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiEye"],
                            size: 0.8
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                            lineNumber: 108,
                            columnNumber: 9
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                        lineNumber: 107,
                        columnNumber: 7
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        variant: "icon",
                        onClick: onEdit,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiPencil"],
                            size: 0.8
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                            lineNumber: 111,
                            columnNumber: 9
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                        lineNumber: 110,
                        columnNumber: 7
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        variant: "icon",
                        onClick: onDelete,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiDelete"],
                            size: 0.8,
                            color: "#E40046"
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                            lineNumber: 114,
                            columnNumber: 9
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                        lineNumber: 113,
                        columnNumber: 7
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                lineNumber: 106,
                columnNumber: 5
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
        lineNumber: 92,
        columnNumber: 3
    }, _this);
};
_c2 = MenuItem;
var NavItem = function(param) {
    var children = param.children, icon = param.icon, _param_active = param.active, active = _param_active === void 0 ? false : _param_active, onClick = param.onClick;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-10 w-full relative flex items-center cursor-pointer ".concat(active ? 'bg-white rounded mx-2' : ''),
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-4 opacity-50 w-6 h-6 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    path: icon,
                    size: 1,
                    color: active ? '#000000' : '#ffffff'
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                    lineNumber: 136,
                    columnNumber: 7
                }, _this)
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                lineNumber: 135,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-12 font-roboto text-sm font-normal ".concat(active ? 'text-black' : 'text-white'),
                children: children
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                lineNumber: 142,
                columnNumber: 5
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
        lineNumber: 129,
        columnNumber: 3
    }, _this);
};
_c3 = NavItem;
var MenuManagementPage = function(param) {
    var menus = param.menus, onEditMenu = param.onEditMenu, onCreateMenu = param.onCreateMenu, onDeleteMenu = param.onDeleteMenu, onPreviewMenu = param.onPreviewMenu, onItemLibraryClick = param.onItemLibraryClick;
    _s();
    var _React_useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false), 2), isCreateModalOpen = _React_useState[0], setIsCreateModalOpen = _React_useState[1];
    var _React_useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState({
        isOpen: false,
        menuName: ''
    }), 2), deleteModalState = _React_useState1[0], setDeleteModalState = _React_useState1[1];
    var handleCreateMenu = function(menuName) {
        onCreateMenu === null || onCreateMenu === void 0 ? void 0 : onCreateMenu(menuName);
        setIsCreateModalOpen(false);
    };
    var handleDeleteClick = function(menuName) {
        setDeleteModalState({
            isOpen: true,
            menuName: menuName
        });
    };
    var handleDeleteConfirm = function() {
        onDeleteMenu === null || onDeleteMenu === void 0 ? void 0 : onDeleteMenu(deleteModalState.menuName);
        setDeleteModalState({
            isOpen: false,
            menuName: ''
        });
    };
    var handleDeleteCancel = function() {
        setDeleteModalState({
            isOpen: false,
            menuName: ''
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen rounded-xl shadow-canary overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-45 bg-canary-black-2 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-16 w-full relative flex items-center bg-canary-black-1 cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-4 opacity-50 w-6 h-6 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiArrowLeft"],
                                    size: 1,
                                    color: "#ffffff"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute left-12 font-roboto text-sm font-medium text-white",
                                children: "Back"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex flex-col gap-6 pt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 pb-4 font-roboto text-xs font-normal text-white opacity-30 uppercase leading-4",
                                        children: "General Settings"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiHome"],
                                                children: "Property Info"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiBrushVariant"],
                                                children: "Branding"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 215,
                                                columnNumber: 17
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiAccountMultiple"],
                                                children: "Staff Members"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 216,
                                                columnNumber: 17
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiSecurity"],
                                                children: "Security"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 217,
                                                columnNumber: 17
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiCog"],
                                                children: "Integrations"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 218,
                                                columnNumber: 17
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                lineNumber: 209,
                                columnNumber: 13
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-px bg-white opacity-20"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                lineNumber: 223,
                                columnNumber: 13
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 pb-4 font-roboto text-xs font-normal text-white opacity-30 uppercase leading-4",
                                        children: "Product settings"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiBook"],
                                                children: "Compendium"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 231,
                                                columnNumber: 17
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiFoodForkDrink"],
                                                active: true,
                                                children: "F&B Ordering"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 232,
                                                columnNumber: 17
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiTrendingUp"],
                                                children: "Upsells"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 233,
                                                columnNumber: 17
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiLoginVariant"],
                                                children: "Check-in"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 234,
                                                columnNumber: 17
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiLogoutVariant"],
                                                children: "Checkout"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 235,
                                                columnNumber: 17
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiMessage"],
                                                children: "Messages"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 236,
                                                columnNumber: 17
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiCurrencyUsd"],
                                                children: "Digital Tips"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 237,
                                                columnNumber: 17
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiShieldCheck"],
                                                children: "Authorizations"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 238,
                                                columnNumber: 17
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiFileDocument"],
                                                children: "Contracts"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 239,
                                                columnNumber: 17
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiLink"],
                                                children: "Payment Links"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 240,
                                                columnNumber: 17
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 230,
                                        columnNumber: 15
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                lineNumber: 226,
                                columnNumber: 13
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col h-full min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border-b border-neutral-200 flex items-center justify-between py-2 px-6 sm:px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-roboto text-body-sm font-medium text-canary-black-1 truncate",
                                        children: "Statler New York"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 251,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiChevronDown"],
                                        size: 0.8
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 254,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                lineNumber: 250,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-full bg-canary-black-5 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-roboto text-caption font-medium text-canary-black-1",
                                                children: "Theresa Webb"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 261,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-roboto text-caption-sm font-normal text-canary-black-4 uppercase",
                                                children: "Operations manager"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 264,
                                                columnNumber: 15
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 260,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiChevronDown"],
                                        size: 0.8
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 268,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                        lineNumber: 249,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border-b border-neutral-200 py-4 px-6 sm:px-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-roboto text-subtitle font-medium text-canary-black-1",
                            children: "Food and Beverage Ordering"
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                            lineNumber: 274,
                            columnNumber: 11
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 bg-white py-8 px-10 sm:px-4 md:px-6 flex flex-col gap-6 overflow-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start overflow-x-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tab, {
                                        active: true,
                                        children: "Menus"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 283,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tab, {
                                        onClick: onItemLibraryClick,
                                        children: "Item library"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 284,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tab, {
                                        children: "Settings"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 285,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                lineNumber: 282,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-roboto text-title font-semibold text-canary-black-1 shrink-0",
                                        children: "Menus"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 290,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        onClick: function() {
                                            return setIsCreateModalOpen(true);
                                        },
                                        children: "Create menu"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 293,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between px-4 pb-0 pr-6 sm:pl-4 font-roboto text-caption-sm font-medium text-canary-black-3 uppercase",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-48 lg:w-48 md:w-40 sm:w-32 ml-3",
                                                children: "Menu name"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 300,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-48 lg:w-48 md:w-40 sm:w-32 hidden sm:block",
                                                children: "Entry Points"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 301,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-24 opacity-0 text-right",
                                                children: "Actions"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 302,
                                                columnNumber: 15
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 299,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-neutral-200 rounded-lg overflow-hidden",
                                        children: menus.map(function(item, index) {
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuItem, {
                                                name: item.name,
                                                entryPoint: item.entryPoint,
                                                isLast: index === menus.length - 1,
                                                onPreview: function() {
                                                    return onPreviewMenu === null || onPreviewMenu === void 0 ? void 0 : onPreviewMenu(item.name, item.entryPoint);
                                                },
                                                onEdit: function() {
                                                    return onEditMenu === null || onEditMenu === void 0 ? void 0 : onEditMenu(item.name, item.entryPoint);
                                                },
                                                onDelete: function() {
                                                    return handleDeleteClick(item.name);
                                                }
                                            }, item.name, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 308,
                                                columnNumber: 17
                                            }, _this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 306,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                lineNumber: 297,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$CreateMenuModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateMenuModal"], {
                isOpen: isCreateModalOpen,
                onClose: function() {
                    return setIsCreateModalOpen(false);
                },
                onCreateMenu: handleCreateMenu
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                lineNumber: 324,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$DeleteMenuModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeleteMenuModal"], {
                isOpen: deleteModalState.isOpen,
                onClose: handleDeleteCancel,
                onDeleteMenu: handleDeleteConfirm,
                menuName: deleteModalState.menuName
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                lineNumber: 331,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
        lineNumber: 193,
        columnNumber: 5
    }, _this);
};
_s(MenuManagementPage, "AtafuBwXFdleygm3oEFkNqV7Gbs=");
_c4 = MenuManagementPage;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Tab");
__turbopack_context__.k.register(_c1, "Button");
__turbopack_context__.k.register(_c2, "MenuItem");
__turbopack_context__.k.register(_c3, "NavItem");
__turbopack_context__.k.register(_c4, "MenuManagementPage");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/lib/design-tokens.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Canary Design System - Design Tokens
 * 
 * These tokens match the component library design system
 * and are used throughout the Food & Beverage prototype
 */ __turbopack_context__.s([
    "borderRadius",
    ()=>borderRadius,
    "colors",
    ()=>colors,
    "shadows",
    ()=>shadows,
    "spacing",
    ()=>spacing,
    "typography",
    ()=>typography
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
var colors = {
    // Base colors
    white: "#FFFFFF",
    black1: "#000000",
    black2: "#333333",
    black3: "#666666",
    black4: "#999999",
    black5: "#CCCCCC",
    black6: "#E5E5E5",
    black7: "#F0F0F0",
    black8: "#FAFAFA",
    // Brand colors
    blueDark1: "#2858C4",
    blueCanary1: "#1C91FA",
    // Status colors
    red1: "#E40046",
    pink1: "#F16682",
    success: "#008040",
    warning: "#FAB541",
    // Neutral colors for borders
    neutral200: "#E5E5E5"
};
var typography = {
    fontFamily: {
        primary: '"Roboto", sans-serif'
    },
    fontSize: {
        captionSm: "0.625rem",
        caption: "0.75rem",
        bodySm: "0.875rem",
        body: "1rem",
        subtitle: "1.125rem",
        title: "1.5rem"
    },
    lineHeight: {
        captionSm: "1rem",
        caption: "1.125rem",
        bodySm: "1.375rem",
        body: "1.5rem",
        subtitle: "1.75rem",
        title: "2.25rem"
    },
    fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600
    }
};
var spacing = {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem"
};
var borderRadius = {
    sm: "2px",
    "default": "4px",
    lg: "8px",
    xl: "12px"
};
var shadows = {
    md: "0 8px 16px 0 rgba(0, 0, 0, 0.16)"
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateSectionModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateSectionModal",
    ()=>CreateSectionModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/lib/design-tokens.ts [app-client] (ecmascript)");
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
var CreateSectionModal = function(param) {
    var isOpen = param.isOpen, onClose = param.onClose, onCreateSection = param.onCreateSection;
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), 2), sectionName = _useState[0], setSectionName = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), 2), error = _useState1[0], setError = _useState1[1];
    var handleSubmit = function(e) {
        e.preventDefault();
        if (!sectionName.trim()) {
            setError('Menu section name is required');
            return;
        }
        onCreateSection(sectionName.trim());
        setSectionName('');
        setError('');
        onClose();
    };
    var handleClose = function() {
        setSectionName('');
        setError('');
        onClose();
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 flex items-center justify-center z-50 p-4",
        style: {
            backgroundColor: "rgba(0, 0, 0, 0.5)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg w-full max-w-md flex flex-col max-h-[90vh]",
            style: {
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            },
            onClick: function(e) {
                return e.stopPropagation();
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-6 py-4 border-b shrink-0",
                    style: {
                        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].black6
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-[18px] font-semibold",
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].black1
                            },
                            children: "Create new menu section"
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateSectionModal.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClose,
                            className: "p-1 rounded hover:bg-gray-100",
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].black4
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M15 5L5 15M5 5L15 15",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateSectionModal.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateSectionModal.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, _this)
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateSectionModal.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateSectionModal.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "px-6 py-4 overflow-y-auto flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-[14px] font-medium mb-2",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].black1
                                    },
                                    children: "Menu section name*"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateSectionModal.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: sectionName,
                                    onChange: function(e) {
                                        setSectionName(e.target.value);
                                        if (error) setError('');
                                    },
                                    placeholder: "Mains",
                                    className: "w-full h-12 px-4 rounded text-[14px] focus:outline-none focus:ring-2 ".concat(error ? 'border-2 border-red-400' : 'border-2'),
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].black1,
                                        borderColor: error ? '#E40046' : __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].black6
                                    },
                                    autoFocus: true
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateSectionModal.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, _this),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-[12px]",
                                    style: {
                                        color: '#E40046'
                                    },
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateSectionModal.tsx",
                                    lineNumber: 101,
                                    columnNumber: 15
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateSectionModal.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-end gap-3 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleClose,
                                    className: "flex items-center justify-center h-10 px-4 rounded text-[14px] font-medium cursor-pointer border hover:bg-gray-50 transition-colors",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].black1,
                                        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].black6,
                                        backgroundColor: 'transparent'
                                    },
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateSectionModal.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "flex items-center justify-center h-10 px-4 rounded text-[14px] font-medium cursor-pointer border-0 text-white hover:opacity-90 transition-opacity",
                                    style: {
                                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].blueDark1
                                    },
                                    children: "Create section"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateSectionModal.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateSectionModal.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateSectionModal.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, _this)
            ]
        }, void 0, true, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateSectionModal.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateSectionModal.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, _this);
};
_s(CreateSectionModal, "1NoRNLyfTigfGeM+P/kF5QMQDC4=");
_c = CreateSectionModal;
var _c;
__turbopack_context__.k.register(_c, "CreateSectionModal");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditMenuPage",
    ()=>EditMenuPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/react/Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/js/mdi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$CreateSectionModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateSectionModal.tsx [app-client] (ecmascript)");
;
;
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
var NavItem = function(param) {
    var children = param.children, icon = param.icon, _param_active = param.active, active = _param_active === void 0 ? false : _param_active, onClick = param.onClick;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-10 w-full relative flex items-center cursor-pointer ".concat(active ? 'bg-white rounded mx-2' : ''),
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-4 opacity-50 w-6 h-6 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    path: icon,
                    size: 1,
                    color: active ? '#000000' : '#ffffff'
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                    lineNumber: 48,
                    columnNumber: 7
                }, _this)
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                lineNumber: 47,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-12 font-roboto text-sm font-normal ".concat(active ? 'text-black' : 'text-white'),
                children: children
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                lineNumber: 54,
                columnNumber: 5
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
        lineNumber: 41,
        columnNumber: 3
    }, _this);
};
_c = NavItem;
var Button = function(param) {
    var children = param.children, _param_variant = param.variant, variant = _param_variant === void 0 ? 'primary' : _param_variant, onClick = param.onClick;
    if (variant === 'icon') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClick,
            className: "flex items-center justify-center p-1.5 rounded bg-transparent border-none cursor-pointer hover:bg-gray-50",
            children: children
        }, void 0, false, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
            lineNumber: 72,
            columnNumber: 7
        }, _this);
    }
    if (variant === 'secondary') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClick,
            className: "flex items-center justify-center gap-2 h-10 px-4 bg-transparent text-canary-black-1 border border-neutral-200 rounded font-roboto text-body-sm font-medium cursor-pointer hover:bg-gray-50",
            children: children
        }, void 0, false, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, _this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "flex items-center justify-center gap-2 h-10 px-4 bg-canary-blue-1 text-white border-none rounded font-roboto text-body-sm font-medium cursor-pointer hover:opacity-90",
        children: children
    }, void 0, false, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, _this);
};
_c1 = Button;
var ToggleSwitch = function(param) {
    var checked = param.checked, onChange = param.onChange;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: function() {
            return onChange(!checked);
        },
        className: "relative inline-flex h-6 w-11 items-center rounded-full transition-colors ".concat(checked ? 'bg-canary-blue-1' : 'bg-gray-300'),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-block h-4 w-4 transform rounded-full bg-white transition-transform ".concat(checked ? 'translate-x-6' : 'translate-x-1')
        }, void 0, false, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
            lineNumber: 115,
            columnNumber: 5
        }, _this)
    }, void 0, false, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
        lineNumber: 109,
        columnNumber: 3
    }, _this);
};
_c2 = ToggleSwitch;
var SectionItem = function(param) {
    var title = param.title, subtitle = param.subtitle, enabled = param.enabled, onToggle = param.onToggle, onEdit = param.onEdit, onDelete = param.onDelete;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between py-4 px-4 bg-white border-b border-neutral-200 last:border-b-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cursor-move text-canary-black-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiDrag"],
                            size: 1
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                            lineNumber: 144,
                            columnNumber: 9
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                        lineNumber: 143,
                        columnNumber: 7
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-roboto text-body-sm font-medium text-canary-black-1",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 147,
                                columnNumber: 9
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-roboto text-caption text-canary-black-4",
                                children: subtitle
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 150,
                                columnNumber: 9
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                        lineNumber: 146,
                        columnNumber: 7
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                lineNumber: 142,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleSwitch, {
                        checked: enabled,
                        onChange: onToggle
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                        lineNumber: 156,
                        columnNumber: 7
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        variant: "icon",
                        onClick: onEdit,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiPencil"],
                            size: 0.8
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                            lineNumber: 158,
                            columnNumber: 9
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                        lineNumber: 157,
                        columnNumber: 7
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        variant: "icon",
                        onClick: onDelete,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiDelete"],
                            size: 0.8,
                            color: "#E40046"
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                            lineNumber: 161,
                            columnNumber: 9
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                        lineNumber: 160,
                        columnNumber: 7
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                lineNumber: 155,
                columnNumber: 5
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
        lineNumber: 141,
        columnNumber: 3
    }, _this);
};
_c3 = SectionItem;
var EditMenuPage = function(param) {
    var onBack = param.onBack, _param_menuName = param.menuName, menuName = _param_menuName === void 0 ? "Lunch menu" : _param_menuName, _param_isNewMenu = param.isNewMenu, isNewMenu = _param_isNewMenu === void 0 ? false : _param_isNewMenu, sections = param.sections, onSave = param.onSave, onEditSection = param.onEditSection, onAddAvailabilityHours = param.onAddAvailabilityHours;
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(menuName), 2), title = _useState[0], setTitle = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isNewMenu ? [] : (sections || []).map({
        "EditMenuPage._useState.useState": function(section) {
            return {
                id: section.id,
                title: section.title,
                subtitle: "".concat(section.items.length, " item").concat(section.items.length !== 1 ? 's' : ''),
                enabled: true
            };
        }
    }["EditMenuPage._useState.useState"])), 2), localSections = _useState1[0], setLocalSections = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isCreateSectionModalOpen = _useState2[0], setIsCreateSectionModalOpen = _useState2[1];
    var handleSectionToggle = function(id, enabled) {
        setLocalSections(localSections.map(function(section) {
            return section.id === id ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, section), {
                enabled: enabled
            }) : section;
        }));
    };
    var handleSave = function() {
        var success = onSave === null || onSave === void 0 ? void 0 : onSave(title, isNewMenu || false);
    // onSave handles showing toast messages
    };
    var handleCreateSection = function(sectionName) {
        var newSection = {
            id: sectionName.toLowerCase().replace(/\s+/g, '-'),
            title: sectionName,
            subtitle: '0 items',
            enabled: true
        };
        setLocalSections((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(localSections).concat([
            newSection
        ]));
        setIsCreateSectionModalOpen(false);
    };
    var handleDeleteSection = function(id) {
        setLocalSections(localSections.filter(function(section) {
            return section.id !== id;
        }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen rounded-xl shadow-canary overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-45 bg-canary-black-2 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-16 w-full relative flex items-center bg-canary-black-1 cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-4 opacity-50 w-6 h-6 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiArrowLeft"],
                                    size: 1,
                                    color: "#ffffff"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                    lineNumber: 237,
                                    columnNumber: 13
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 236,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute left-12 font-roboto text-sm font-medium text-white",
                                children: "Back"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 239,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex flex-col gap-6 pt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 pb-4 font-roboto text-xs font-normal text-white opacity-30 uppercase leading-4",
                                        children: "General Settings"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                        lineNumber: 248,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiHome"],
                                                children: "Property Info"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 252,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiBrushVariant"],
                                                children: "Branding"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 253,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiAccountMultiple"],
                                                children: "Staff Members"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 254,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiSecurity"],
                                                children: "Security"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 255,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiCog"],
                                                children: "Integrations"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 256,
                                                columnNumber: 15
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                        lineNumber: 251,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 247,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-px bg-white opacity-20"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 261,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 pb-4 font-roboto text-xs font-normal text-white opacity-30 uppercase leading-4",
                                        children: "Product settings"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                        lineNumber: 265,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiBook"],
                                                children: "Compendium"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 269,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiFoodForkDrink"],
                                                active: true,
                                                children: "F&B Ordering"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 270,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiTrendingUp"],
                                                children: "Upsells"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 271,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiLoginVariant"],
                                                children: "Check-in"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 272,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiLogoutVariant"],
                                                children: "Checkout"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 273,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiMessage"],
                                                children: "Messages"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 274,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiCurrencyUsd"],
                                                children: "Digital Tips"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 275,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiShieldCheck"],
                                                children: "Authorizations"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 276,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiFileDocument"],
                                                children: "Contracts"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 277,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiLink"],
                                                children: "Payment Links"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 278,
                                                columnNumber: 15
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                        lineNumber: 268,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 264,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                        lineNumber: 245,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                lineNumber: 233,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col h-full min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border-b border-neutral-200 flex items-center justify-between py-2 px-6 sm:px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-roboto text-body-sm font-medium text-canary-black-1 truncate",
                                        children: "Statler New York"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                        lineNumber: 289,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiChevronDown"],
                                        size: 0.8
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                        lineNumber: 292,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 288,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-full bg-canary-black-5 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                        lineNumber: 297,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-roboto text-caption font-medium text-canary-black-1",
                                                children: "Theresa Webb"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 299,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-roboto text-caption-sm font-normal text-canary-black-4 uppercase",
                                                children: "Operations manager"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 302,
                                                columnNumber: 15
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                        lineNumber: 298,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiChevronDown"],
                                        size: 0.8
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                        lineNumber: 306,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 296,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                        lineNumber: 287,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex bg-white overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 max-w-lg border-r border-neutral-200 flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-b border-neutral-200 py-4 px-6 flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: onBack,
                                                        className: "flex items-center justify-center p-2 hover:bg-gray-50 rounded",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiArrowLeft"],
                                                            size: 1
                                                        }, void 0, false, {
                                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                            lineNumber: 321,
                                                            columnNumber: 19
                                                        }, _this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                        lineNumber: 317,
                                                        columnNumber: 17
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "font-roboto text-subtitle font-medium text-canary-black-1",
                                                        children: isNewMenu ? title || 'New Menu' : menuName
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                        lineNumber: 323,
                                                        columnNumber: 17
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 316,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                onClick: handleSave,
                                                children: "Save"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 327,
                                                columnNumber: 15
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                        lineNumber: 315,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 overflow-auto py-8 px-6 space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border border-neutral-200 rounded-lg p-6 bg-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "font-roboto text-subtitle font-semibold text-canary-black-1 mb-6",
                                                        children: "Basic info"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                        lineNumber: 334,
                                                        columnNumber: 17
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block font-roboto text-body-sm font-medium text-canary-black-1 mb-2",
                                                                children: "Title*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                                lineNumber: 338,
                                                                columnNumber: 19
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: title,
                                                                onChange: function(e) {
                                                                    return setTitle(e.target.value);
                                                                },
                                                                className: "w-full h-12 px-4 border border-neutral-200 rounded font-roboto text-body-sm text-canary-black-1 focus:outline-none focus:ring-2 focus:ring-canary-blue-1",
                                                                placeholder: "Enter menu title"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                                lineNumber: 341,
                                                                columnNumber: 19
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 17
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 333,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border border-neutral-200 rounded-lg p-6 bg-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "font-roboto text-subtitle font-semibold text-canary-black-1",
                                                                children: "Sections"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                                lineNumber: 354,
                                                                columnNumber: 19
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                                variant: "icon",
                                                                onClick: function() {
                                                                    return setIsCreateSectionModalOpen(true);
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiPlus"],
                                                                    size: 1
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                                    lineNumber: 358,
                                                                    columnNumber: 21
                                                                }, _this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                                lineNumber: 357,
                                                                columnNumber: 19
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                        lineNumber: 353,
                                                        columnNumber: 17
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border border-neutral-200 rounded-lg overflow-hidden",
                                                        children: localSections.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "py-8 px-4 text-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-canary-black-4 font-roboto text-body-sm",
                                                                children: "No sections yet. Click the + button to add your first section."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                                lineNumber: 364,
                                                                columnNumber: 23
                                                            }, _this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                            lineNumber: 363,
                                                            columnNumber: 21
                                                        }, _this) : localSections.map(function(section) {
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionItem, {
                                                                title: section.title,
                                                                subtitle: section.subtitle,
                                                                enabled: section.enabled,
                                                                onToggle: function(enabled) {
                                                                    return handleSectionToggle(section.id, enabled);
                                                                },
                                                                onEdit: function() {
                                                                    return onEditSection === null || onEditSection === void 0 ? void 0 : onEditSection(section.id);
                                                                },
                                                                onDelete: function() {
                                                                    return handleDeleteSection(section.id);
                                                                }
                                                            }, section.id, false, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                                lineNumber: 370,
                                                                columnNumber: 23
                                                            }, _this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                        lineNumber: 361,
                                                        columnNumber: 17
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 352,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border border-neutral-200 rounded-lg p-6 bg-white",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "font-roboto text-subtitle font-semibold text-canary-black-1",
                                                            children: "Availability"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                            lineNumber: 387,
                                                            columnNumber: 19
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: onAddAvailabilityHours,
                                                            className: "font-roboto text-body-sm text-canary-blue-1 hover:underline",
                                                            children: "Add hours"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                            lineNumber: 390,
                                                            columnNumber: 19
                                                        }, _this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                    lineNumber: 386,
                                                    columnNumber: 17
                                                }, _this)
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 385,
                                                columnNumber: 15
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                        lineNumber: 331,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 bg-canary-black-6 flex items-center justify-center"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 402,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                        lineNumber: 311,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                lineNumber: 285,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$CreateSectionModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateSectionModal"], {
                isOpen: isCreateSectionModalOpen,
                onClose: function() {
                    return setIsCreateSectionModalOpen(false);
                },
                onCreateSection: handleCreateSection
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                lineNumber: 409,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
        lineNumber: 231,
        columnNumber: 5
    }, _this);
};
_s(EditMenuPage, "CFuoDivxvVKqSk/vhQQPWoHBOJI=");
_c4 = EditMenuPage;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "NavItem");
__turbopack_context__.k.register(_c1, "Button");
__turbopack_context__.k.register(_c2, "ToggleSwitch");
__turbopack_context__.k.register(_c3, "SectionItem");
__turbopack_context__.k.register(_c4, "EditMenuPage");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ItemLibraryPage",
    ()=>ItemLibraryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/react/Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/js/mdi.js [app-client] (ecmascript)");
;
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
var Tab = function(param) {
    var children = param.children, _param_active = param.active, active = _param_active === void 0 ? false : _param_active, onClick = param.onClick;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-start overflow-hidden cursor-pointer",
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center py-1 px-4 gap-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-roboto text-body-sm font-medium ".concat(active ? 'text-canary-blue-1' : 'text-canary-black-2'),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                    lineNumber: 41,
                    columnNumber: 7
                }, _this)
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                lineNumber: 40,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-1 w-full ".concat(active ? 'bg-canary-blue-1' : 'bg-transparent')
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                lineNumber: 47,
                columnNumber: 5
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, _this);
};
_c = Tab;
var Button = function(param) {
    var children = param.children, _param_variant = param.variant, variant = _param_variant === void 0 ? 'primary' : _param_variant, onClick = param.onClick;
    if (variant === 'icon') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClick,
            className: "flex items-center justify-center p-1.5 rounded bg-transparent border-none cursor-pointer hover:bg-gray-50",
            children: children
        }, void 0, false, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, _this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "flex items-center justify-center gap-2 h-10 px-4 bg-canary-blue-1 text-white border-none rounded font-roboto text-body-sm font-medium cursor-pointer hover:opacity-90",
        children: children
    }, void 0, false, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, _this);
};
_c1 = Button;
var ToggleSwitch = function(param) {
    var checked = param.checked, onChange = param.onChange;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: function() {
            return onChange(!checked);
        },
        className: "relative inline-flex h-6 w-11 items-center rounded-full transition-colors ".concat(checked ? 'bg-canary-blue-1' : 'bg-gray-300'),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-block h-4 w-4 transform rounded-full bg-white transition-transform ".concat(checked ? 'translate-x-6' : 'translate-x-1')
        }, void 0, false, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
            lineNumber: 93,
            columnNumber: 5
        }, _this)
    }, void 0, false, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
        lineNumber: 87,
        columnNumber: 3
    }, _this);
};
_c2 = ToggleSwitch;
var FoodItem = function(param) {
    var id = param.id, name = param.name, image = param.image, menus = param.menus, price = param.price, available = param.available, onToggle = param.onToggle, onEdit = param.onEdit, onDelete = param.onDelete, _param_isLast = param.isLast, isLast = _param_isLast === void 0 ? false : _param_isLast;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between py-4 px-4 pr-6 bg-white ".concat(isLast ? '' : 'border-b border-neutral-200'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 w-72 lg:w-72 md:w-60 sm:w-48",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: image,
                        alt: name,
                        className: "w-10 h-10 rounded object-cover"
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                        lineNumber: 132,
                        columnNumber: 7
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-roboto text-body-sm font-medium text-canary-black-1 truncate",
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                        lineNumber: 137,
                        columnNumber: 7
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                lineNumber: 131,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-56 lg:w-56 md:w-44 sm:w-36 font-roboto text-body-sm font-normal text-canary-black-1 truncate",
                children: menus.join(', ')
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                lineNumber: 143,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-20 font-roboto text-body-sm font-normal text-canary-black-1",
                children: [
                    "$",
                    price.toFixed(2)
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                lineNumber: 148,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 w-32 justify-end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleSwitch, {
                        checked: available,
                        onChange: function(checked) {
                            return onToggle(id, checked);
                        }
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                        lineNumber: 154,
                        columnNumber: 7
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        variant: "icon",
                        onClick: function() {
                            return onEdit(id);
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiPencil"],
                            size: 0.8
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                            lineNumber: 156,
                            columnNumber: 9
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                        lineNumber: 155,
                        columnNumber: 7
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        variant: "icon",
                        onClick: function() {
                            return onDelete(id);
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiDelete"],
                            size: 0.8,
                            color: "#E40046"
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                            lineNumber: 159,
                            columnNumber: 9
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                        lineNumber: 158,
                        columnNumber: 7
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                lineNumber: 153,
                columnNumber: 5
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
        lineNumber: 127,
        columnNumber: 3
    }, _this);
};
_c3 = FoodItem;
var NavItem = function(param) {
    var children = param.children, icon = param.icon, _param_active = param.active, active = _param_active === void 0 ? false : _param_active, onClick = param.onClick;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-10 w-full relative flex items-center cursor-pointer ".concat(active ? 'bg-white rounded mx-2' : ''),
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-4 opacity-50 w-6 h-6 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    path: icon,
                    size: 1,
                    color: active ? '#000000' : '#ffffff'
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                    lineNumber: 181,
                    columnNumber: 7
                }, _this)
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                lineNumber: 180,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-12 font-roboto text-sm font-normal ".concat(active ? 'text-black' : 'text-white'),
                children: children
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                lineNumber: 187,
                columnNumber: 5
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
        lineNumber: 174,
        columnNumber: 3
    }, _this);
};
_c4 = NavItem;
// Sample food items data
var sampleFoodItems = [
    {
        id: '1',
        name: 'Burrito',
        image: 'https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?w=40&h=40&fit=crop&crop=center',
        menus: [
            'Lunch',
            'Dinner'
        ],
        price: 17.00,
        available: true
    },
    {
        id: '2',
        name: 'Brownie',
        image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=40&h=40&fit=crop&crop=center',
        menus: [
            'Desserts'
        ],
        price: 5.00,
        available: true
    },
    {
        id: '3',
        name: 'Croissant',
        image: 'https://images.unsplash.com/photo-1555507036-ab794f4eeecb?w=40&h=40&fit=crop&crop=center',
        menus: [
            'Breakfast',
            'Lunch'
        ],
        price: 8.00,
        available: true
    },
    {
        id: '4',
        name: 'Dumplings',
        image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=40&h=40&fit=crop&crop=center',
        menus: [
            'Lunch',
            'Dinner',
            '+2 more'
        ],
        price: 15.00,
        available: true
    },
    {
        id: '5',
        name: 'Frittata',
        image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=40&h=40&fit=crop&crop=center',
        menus: [
            'Breakfast',
            '+3 more'
        ],
        price: 10.00,
        available: true
    },
    {
        id: '6',
        name: 'Salad',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=40&h=40&fit=crop&crop=center',
        menus: [
            'Lunch',
            'Dinner'
        ],
        price: 15.00,
        available: true
    }
];
var ItemLibraryPage = function(param) {
    var onBack = param.onBack, onTabChange = param.onTabChange, onEditItem = param.onEditItem;
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(sampleFoodItems), 2), foodItems = _useState[0], setFoodItems = _useState[1];
    var handleItemToggle = function(id, available) {
        setFoodItems(function(items) {
            return items.map(function(item) {
                return item.id === id ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, item), {
                    available: available
                }) : item;
            });
        });
    };
    var handleItemEdit = function(id) {
        onEditItem === null || onEditItem === void 0 ? void 0 : onEditItem(id);
    };
    var handleItemDelete = function(id) {
        console.log('Delete item:', id);
    };
    var handleCreateItem = function() {
        console.log('Create new item');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen rounded-xl shadow-canary overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-45 bg-canary-black-2 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-16 w-full relative flex items-center bg-canary-black-1 cursor-pointer",
                        onClick: onBack,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-4 opacity-50 w-6 h-6 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiArrowLeft"],
                                    size: 1,
                                    color: "#ffffff"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                    lineNumber: 288,
                                    columnNumber: 13
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                lineNumber: 287,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute left-12 font-roboto text-sm font-medium text-white",
                                children: "Back"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                lineNumber: 290,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                        lineNumber: 286,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex flex-col gap-6 pt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 pb-4 font-roboto text-xs font-normal text-white opacity-30 uppercase leading-4",
                                        children: "General Settings"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                        lineNumber: 299,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiHome"],
                                                children: "Property Info"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 303,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiBrushVariant"],
                                                children: "Branding"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 304,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiAccountMultiple"],
                                                children: "Staff Members"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 305,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiSecurity"],
                                                children: "Security"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 306,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiCog"],
                                                children: "Integrations"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 307,
                                                columnNumber: 15
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                        lineNumber: 302,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                lineNumber: 298,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-px bg-white opacity-20"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                lineNumber: 312,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 pb-4 font-roboto text-xs font-normal text-white opacity-30 uppercase leading-4",
                                        children: "Product settings"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                        lineNumber: 316,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiBook"],
                                                children: "Compendium"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 320,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiFoodForkDrink"],
                                                active: true,
                                                children: "F&B Ordering"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 321,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiTrendingUp"],
                                                children: "Upsells"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 322,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiLoginVariant"],
                                                children: "Check-in"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 323,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiLogoutVariant"],
                                                children: "Checkout"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 324,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiMessage"],
                                                children: "Messages"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 325,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiCurrencyUsd"],
                                                children: "Digital Tips"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 326,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiShieldCheck"],
                                                children: "Authorizations"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 327,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiFileDocument"],
                                                children: "Contracts"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 328,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiLink"],
                                                children: "Payment Links"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 329,
                                                columnNumber: 15
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                        lineNumber: 319,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                lineNumber: 315,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                        lineNumber: 296,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                lineNumber: 284,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col h-full min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border-b border-neutral-200 flex items-center justify-between py-2 px-6 sm:px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-roboto text-body-sm font-medium text-canary-black-1 truncate",
                                        children: "Statler New York"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                        lineNumber: 340,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiChevronDown"],
                                        size: 0.8
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                        lineNumber: 343,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                lineNumber: 339,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-full bg-canary-black-5 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                        lineNumber: 348,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-roboto text-caption font-medium text-canary-black-1",
                                                children: "Theresa Webb"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 350,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-roboto text-caption-sm font-normal text-canary-black-4 uppercase",
                                                children: "Operations manager"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 353,
                                                columnNumber: 15
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                        lineNumber: 349,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiChevronDown"],
                                        size: 0.8
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                        lineNumber: 357,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                lineNumber: 347,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                        lineNumber: 338,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border-b border-neutral-200 py-4 px-6 sm:px-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-roboto text-subtitle font-medium text-canary-black-1",
                            children: "Food and Beverage Ordering"
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                            lineNumber: 363,
                            columnNumber: 11
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                        lineNumber: 362,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 bg-white py-8 px-10 sm:px-4 md:px-6 flex flex-col gap-6 overflow-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start overflow-x-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tab, {
                                        onClick: function() {
                                            return onTabChange === null || onTabChange === void 0 ? void 0 : onTabChange('menus');
                                        },
                                        children: "Menus"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                        lineNumber: 372,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tab, {
                                        active: true,
                                        onClick: function() {
                                            return onTabChange === null || onTabChange === void 0 ? void 0 : onTabChange('item-library');
                                        },
                                        children: "Item library"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                        lineNumber: 373,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tab, {
                                        onClick: function() {
                                            return onTabChange === null || onTabChange === void 0 ? void 0 : onTabChange('settings');
                                        },
                                        children: "Settings"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                        lineNumber: 374,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                lineNumber: 371,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-roboto text-title font-semibold text-canary-black-1 shrink-0",
                                        children: "Item library"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                        lineNumber: 379,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        onClick: handleCreateItem,
                                        children: "Create new item"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                        lineNumber: 382,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                lineNumber: 378,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between px-4 pb-0 pr-6 sm:pl-4 font-roboto text-caption-sm font-medium text-canary-black-3 uppercase",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-72 lg:w-72 md:w-60 sm:w-48 ml-3",
                                                children: "Item"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 389,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-56 lg:w-56 md:w-44 sm:w-36",
                                                children: "Menus"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 390,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-20",
                                                children: "Price"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 391,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-32 text-right",
                                                children: "Availability"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 392,
                                                columnNumber: 15
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                        lineNumber: 388,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-neutral-200 rounded-lg overflow-hidden",
                                        children: foodItems.map(function(item, index) {
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FoodItem, {
                                                id: item.id,
                                                name: item.name,
                                                image: item.image,
                                                menus: item.menus,
                                                price: item.price,
                                                available: item.available,
                                                onToggle: handleItemToggle,
                                                onEdit: handleItemEdit,
                                                onDelete: handleItemDelete,
                                                isLast: index === foodItems.length - 1
                                            }, item.id, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 398,
                                                columnNumber: 17
                                            }, _this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                        lineNumber: 396,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                lineNumber: 386,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                        lineNumber: 369,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                lineNumber: 336,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
        lineNumber: 282,
        columnNumber: 5
    }, _this);
};
_s(ItemLibraryPage, "nyepeuUnmCz2CMKclqWo09rKk8U=");
_c5 = ItemLibraryPage;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Tab");
__turbopack_context__.k.register(_c1, "Button");
__turbopack_context__.k.register(_c2, "ToggleSwitch");
__turbopack_context__.k.register(_c3, "FoodItem");
__turbopack_context__.k.register(_c4, "NavItem");
__turbopack_context__.k.register(_c5, "ItemLibraryPage");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditItemPage",
    ()=>EditItemPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/react/Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/lib/design-tokens.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/js/mdi.js [app-client] (ecmascript)");
;
;
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
var NavItem = function(param) {
    var children = param.children, icon = param.icon, _param_active = param.active, active = _param_active === void 0 ? false : _param_active, onClick = param.onClick;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-10 w-full relative flex items-center cursor-pointer ".concat(active ? 'bg-white rounded mx-2' : ''),
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-4 opacity-50 w-6 h-6 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    path: icon,
                    size: 1,
                    color: active ? '#000000' : '#ffffff'
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                    lineNumber: 46,
                    columnNumber: 7
                }, _this)
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                lineNumber: 45,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-12 font-roboto text-sm font-normal ".concat(active ? 'text-black' : 'text-white'),
                children: children
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                lineNumber: 52,
                columnNumber: 5
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, _this);
};
_c = NavItem;
var Button = function(param) {
    var children = param.children, _param_variant = param.variant, variant = _param_variant === void 0 ? 'primary' : _param_variant, onClick = param.onClick, _param_type = param.type, type = _param_type === void 0 ? 'button' : _param_type;
    if (variant === 'icon') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: type,
            onClick: onClick,
            className: "flex items-center justify-center p-2 rounded bg-transparent border-none cursor-pointer hover:bg-gray-50",
            children: children
        }, void 0, false, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, _this);
    }
    if (variant === 'secondary') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: type,
            onClick: onClick,
            className: "flex items-center justify-center gap-2 h-10 px-4 bg-transparent text-canary-black-1 border border-neutral-200 rounded font-roboto text-body-sm font-medium cursor-pointer hover:bg-gray-50",
            children: children
        }, void 0, false, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, _this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        onClick: onClick,
        className: "flex items-center justify-center gap-2 h-10 px-4 bg-canary-blue-1 text-white border-none rounded font-roboto text-body-sm font-medium cursor-pointer hover:opacity-90",
        children: children
    }, void 0, false, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, _this);
};
_c1 = Button;
var Input = function(param) {
    var label = param.label, value = param.value, onChange = param.onChange, placeholder = param.placeholder, _param_required = param.required, required = _param_required === void 0 ? false : _param_required, _param_type = param.type, type = _param_type === void 0 ? 'text' : _param_type;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "font-roboto text-body-sm font-medium text-canary-black-1",
                children: [
                    label,
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-red-500 ml-1",
                        children: "*"
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                        lineNumber: 125,
                        columnNumber: 20
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                lineNumber: 123,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: type,
                value: value,
                onChange: function(e) {
                    return onChange(e.target.value);
                },
                placeholder: placeholder,
                className: "w-full h-12 px-4 border border-neutral-200 rounded font-roboto text-body-sm text-canary-black-1 focus:outline-none focus:ring-2 focus:ring-canary-blue-1 focus:border-canary-blue-1"
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                lineNumber: 127,
                columnNumber: 5
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
        lineNumber: 122,
        columnNumber: 3
    }, _this);
};
_c2 = Input;
var Textarea = function(param) {
    var label = param.label, value = param.value, onChange = param.onChange, placeholder = param.placeholder, _param_rows = param.rows, rows = _param_rows === void 0 ? 4 : _param_rows;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "font-roboto text-body-sm font-medium text-canary-black-1",
                children: label
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                lineNumber: 154,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                value: value,
                onChange: function(e) {
                    return onChange(e.target.value);
                },
                placeholder: placeholder,
                rows: rows,
                className: "w-full px-4 py-3 border border-neutral-200 rounded font-roboto text-body-sm text-canary-black-1 focus:outline-none focus:ring-2 focus:ring-canary-blue-1 focus:border-canary-blue-1 resize-vertical"
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                lineNumber: 157,
                columnNumber: 5
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
        lineNumber: 153,
        columnNumber: 3
    }, _this);
};
_c3 = Textarea;
var ImageUpload = function(param) {
    var label = param.label, image = param.image, onImageChange = param.onImageChange;
    var handleFileChange = function(event) {
        var _event_target_files;
        var file = (_event_target_files = event.target.files) === null || _event_target_files === void 0 ? void 0 : _event_target_files[0];
        if (file) {
            // In a real app, you'd upload to a server and get back a URL
            // For now, we'll create a local URL for preview
            var imageUrl = URL.createObjectURL(file);
            onImageChange(imageUrl);
        }
    };
    var handleRemoveImage = function() {
        onImageChange(undefined);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "font-roboto text-body-sm font-medium text-canary-black-1",
                children: label
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, _this),
            image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: image,
                        alt: "Item",
                        className: "w-full h-48 object-cover rounded border border-neutral-200"
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-2 right-2 flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                variant: "icon",
                                onClick: handleRemoveImage,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiDelete"],
                                    size: 0.8,
                                    color: "#E40046"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                    lineNumber: 204,
                                    columnNumber: 15
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                lineNumber: 203,
                                columnNumber: 13
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                variant: "icon",
                                onClick: function() {
                                    var _document_getElementById;
                                    return (_document_getElementById = document.getElementById('image-upload')) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.click();
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiPencil"],
                                    size: 0.8
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                    lineNumber: 207,
                                    columnNumber: 15
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                lineNumber: 206,
                                columnNumber: 13
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                        lineNumber: 202,
                        columnNumber: 11
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                lineNumber: 196,
                columnNumber: 9
            }, _this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-48 border-2 border-dashed border-neutral-300 rounded flex flex-col items-center justify-center cursor-pointer hover:border-canary-blue-1 transition-colors",
                onClick: function() {
                    var _document_getElementById;
                    return (_document_getElementById = document.getElementById('image-upload')) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.click();
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiUpload"],
                        size: 2,
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].black4
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                        lineNumber: 216,
                        columnNumber: 11
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mt-2 font-roboto text-body-sm text-canary-black-4",
                        children: "Click to upload image"
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                        lineNumber: 217,
                        columnNumber: 11
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mt-1 font-roboto text-caption text-canary-black-4",
                        children: "PNG, JPG, GIF up to 10MB"
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                        lineNumber: 220,
                        columnNumber: 11
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                lineNumber: 212,
                columnNumber: 9
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: "image-upload",
                type: "file",
                accept: "image/*",
                onChange: handleFileChange,
                className: "hidden"
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
        lineNumber: 190,
        columnNumber: 5
    }, _this);
};
_c4 = ImageUpload;
var EditItemPage = function(param) {
    var item = param.item, onBack = param.onBack, onSave = param.onSave;
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        id: (item === null || item === void 0 ? void 0 : item.id) || '',
        name: (item === null || item === void 0 ? void 0 : item.name) || '',
        description: (item === null || item === void 0 ? void 0 : item.description) || '',
        price: (item === null || item === void 0 ? void 0 : item.price) || 0,
        image: item === null || item === void 0 ? void 0 : item.image
    }), 2), formData = _useState[0], setFormData = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({}), 2), errors = _useState1[0], setErrors = _useState1[1];
    var handleSave = function() {
        // Validation
        var newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'Title is required';
        }
        if (formData.price <= 0) {
            newErrors.price = 'Price must be greater than 0';
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setErrors({});
        onSave === null || onSave === void 0 ? void 0 : onSave(formData);
    };
    var updateFormData = function(field, value) {
        setFormData(function(prev) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, field, value));
        });
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(function(prev) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, field, ''));
            });
        }
    };
    var isNewItem = !item || !item.id;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen rounded-xl shadow-canary overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-45 bg-canary-black-2 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-16 w-full relative flex items-center bg-canary-black-1 cursor-pointer",
                        onClick: onBack,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-4 opacity-50 w-6 h-6 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiArrowLeft"],
                                    size: 1,
                                    color: "#ffffff"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                    lineNumber: 313,
                                    columnNumber: 13
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                lineNumber: 312,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute left-12 font-roboto text-sm font-medium text-white",
                                children: "Back"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                lineNumber: 315,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                        lineNumber: 311,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex flex-col gap-6 pt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 pb-4 font-roboto text-xs font-normal text-white opacity-30 uppercase leading-4",
                                        children: "General Settings"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                        lineNumber: 324,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiHome"],
                                                children: "Property Info"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 328,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiBrushVariant"],
                                                children: "Branding"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 329,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiAccountMultiple"],
                                                children: "Staff Members"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 330,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiSecurity"],
                                                children: "Security"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 331,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiCog"],
                                                children: "Integrations"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 332,
                                                columnNumber: 15
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                        lineNumber: 327,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                lineNumber: 323,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-px bg-white opacity-20"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                lineNumber: 337,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 pb-4 font-roboto text-xs font-normal text-white opacity-30 uppercase leading-4",
                                        children: "Product settings"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                        lineNumber: 341,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiBook"],
                                                children: "Compendium"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 345,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiFoodForkDrink"],
                                                active: true,
                                                children: "F&B Ordering"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 346,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiTrendingUp"],
                                                children: "Upsells"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 347,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiLoginVariant"],
                                                children: "Check-in"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 348,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiLogoutVariant"],
                                                children: "Checkout"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 349,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiMessage"],
                                                children: "Messages"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 350,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiCurrencyUsd"],
                                                children: "Digital Tips"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 351,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiShieldCheck"],
                                                children: "Authorizations"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 352,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiFileDocument"],
                                                children: "Contracts"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 353,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiLink"],
                                                children: "Payment Links"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 354,
                                                columnNumber: 15
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                        lineNumber: 344,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                lineNumber: 340,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                        lineNumber: 321,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                lineNumber: 309,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col h-full min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border-b border-neutral-200 flex items-center justify-between py-2 px-6 sm:px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-roboto text-body-sm font-medium text-canary-black-1 truncate",
                                        children: "Statler New York"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                        lineNumber: 365,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiChevronDown"],
                                        size: 0.8
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                        lineNumber: 368,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                lineNumber: 364,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-full bg-canary-black-5 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                        lineNumber: 373,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-roboto text-caption font-medium text-canary-black-1",
                                                children: "Theresa Webb"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 375,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-roboto text-caption-sm font-normal text-canary-black-4 uppercase",
                                                children: "Operations manager"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 378,
                                                columnNumber: 15
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                        lineNumber: 374,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiChevronDown"],
                                        size: 0.8
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                        lineNumber: 382,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                lineNumber: 372,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                        lineNumber: 363,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex bg-white overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 max-w-lg border-r border-neutral-200 flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-b border-neutral-200 py-4 px-6 flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: onBack,
                                                        className: "flex items-center justify-center p-2 hover:bg-gray-50 rounded",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiArrowLeft"],
                                                            size: 1
                                                        }, void 0, false, {
                                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                            lineNumber: 397,
                                                            columnNumber: 19
                                                        }, _this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                        lineNumber: 393,
                                                        columnNumber: 17
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "font-roboto text-subtitle font-medium text-canary-black-1",
                                                        children: isNewItem ? 'Create item' : 'Edit item'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                        lineNumber: 399,
                                                        columnNumber: 17
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 392,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                onClick: handleSave,
                                                children: "Save"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 403,
                                                columnNumber: 15
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                        lineNumber: 391,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 overflow-auto py-8 px-6 space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border border-neutral-200 rounded-lg p-6 bg-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "font-roboto text-subtitle font-semibold text-canary-black-1 mb-6",
                                                        children: "Basic info"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                        lineNumber: 410,
                                                        columnNumber: 17
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                                        label: "Title",
                                                                        value: formData.name,
                                                                        onChange: function(value) {
                                                                            return updateFormData('name', value);
                                                                        },
                                                                        placeholder: "Enter item title",
                                                                        required: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                                        lineNumber: 417,
                                                                        columnNumber: 21
                                                                    }, _this),
                                                                    errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-1 text-sm text-red-500",
                                                                        children: errors.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                                        lineNumber: 425,
                                                                        columnNumber: 23
                                                                    }, _this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                                lineNumber: 416,
                                                                columnNumber: 19
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                                                                label: "Description",
                                                                value: formData.description,
                                                                onChange: function(value) {
                                                                    return updateFormData('description', value);
                                                                },
                                                                placeholder: "Enter item description",
                                                                rows: 3
                                                            }, void 0, false, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                                lineNumber: 430,
                                                                columnNumber: 19
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                                        label: "Price",
                                                                        value: formData.price.toString(),
                                                                        onChange: function(value) {
                                                                            return updateFormData('price', parseFloat(value) || 0);
                                                                        },
                                                                        placeholder: "0.00",
                                                                        type: "number"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                                        lineNumber: 440,
                                                                        columnNumber: 21
                                                                    }, _this),
                                                                    errors.price && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-1 text-sm text-red-500",
                                                                        children: errors.price
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                                        lineNumber: 448,
                                                                        columnNumber: 23
                                                                    }, _this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                                lineNumber: 439,
                                                                columnNumber: 19
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                        lineNumber: 414,
                                                        columnNumber: 17
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 409,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border border-neutral-200 rounded-lg p-6 bg-white",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageUpload, {
                                                    label: "Image",
                                                    image: formData.image,
                                                    onImageChange: function(image) {
                                                        return updateFormData('image', image);
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                    lineNumber: 456,
                                                    columnNumber: 17
                                                }, _this)
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 455,
                                                columnNumber: 15
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                        lineNumber: 407,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                lineNumber: 389,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 bg-canary-black-6 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-canary-black-4 font-roboto text-body-sm",
                                    children: "Mobile preview (coming soon)"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                    lineNumber: 467,
                                    columnNumber: 13
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                lineNumber: 466,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                        lineNumber: 387,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                lineNumber: 361,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
        lineNumber: 307,
        columnNumber: 5
    }, _this);
};
_s(EditItemPage, "3C7FRv0JW039VQTYNV9UtTdyYa0=");
_c5 = EditItemPage;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "NavItem");
__turbopack_context__.k.register(_c1, "Button");
__turbopack_context__.k.register(_c2, "Input");
__turbopack_context__.k.register(_c3, "Textarea");
__turbopack_context__.k.register(_c4, "ImageUpload");
__turbopack_context__.k.register(_c5, "EditItemPage");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileGuestExperience",
    ()=>MobileGuestExperience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/react/Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/js/mdi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/lib/design-tokens.ts [app-client] (ecmascript)");
'use client';
;
var _this = ("TURBOPACK compile-time value", void 0);
;
;
;
;
var MobileGuestExperience = function(param) {
    var onBack = param.onBack, onOrderClick = param.onOrderClick, _param_menuName = param.menuName, menuName = _param_menuName === void 0 ? "In-room dining" : _param_menuName;
    // Placeholder image URL (hotel breakfast scene)
    var headerImageUrl = "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=430&h=230&fit=crop&crop=center";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-screen bg-gray-100 p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onBack,
                className: "fixed top-8 left-8 z-50 flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 rounded font-roboto text-body-sm font-medium hover:bg-gray-50 shadow-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiArrowLeft"],
                        size: 0.8
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, _this),
                    "Back to Menu Management"
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative bg-white overflow-hidden shadow-xl",
                style: {
                    width: '430px',
                    height: '932px',
                    borderRadius: '44px',
                    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.16)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full h-[230px] overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: headerImageUrl,
                                alt: "In-room dining",
                                className: "w-full h-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-9 left-1/2 transform -translate-x-1/2 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1.5 h-1.5 bg-white/40 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 bg-white rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1.5 h-1.5 bg-white/40 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1.5 h-1.5 bg-white/40 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-4 left-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex items-center justify-center w-12 h-12 bg-white rounded shadow-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiArrowLeft"],
                                        size: 1,
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].black1
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, _this)
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-[32px] font-medium leading-[48px]",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].black1,
                                                fontFamily: 'Roboto, sans-serif'
                                            },
                                            children: menuName
                                        }, void 0, false, {
                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, _this)
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiMapMarker"],
                                                size: 0.8,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].black1
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[14px] font-normal leading-[22px]",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].black1,
                                                    fontFamily: 'Roboto, sans-serif'
                                                },
                                                children: "The Statler Hotel New York • Deliver to Room 365"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                lineNumber: 95,
                                                columnNumber: 15
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onOrderClick,
                                        className: "w-full h-12 rounded-lg flex items-center justify-between px-2",
                                        style: {
                                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].black1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-6 h-6 opacity-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiArrowRight"],
                                                    size: 1,
                                                    color: "white"
                                                }, void 0, false, {
                                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 17
                                                }, _this)
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                lineNumber: 112,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[16px] font-medium text-white leading-[24px]",
                                                style: {
                                                    fontFamily: 'Roboto, sans-serif'
                                                },
                                                children: [
                                                    "Order ",
                                                    menuName.toLowerCase()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                lineNumber: 115,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-6 h-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiArrowRight"],
                                                    size: 1,
                                                    color: "white"
                                                }, void 0, false, {
                                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 17
                                                }, _this)
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                lineNumber: 121,
                                                columnNumber: 15
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[16px] font-normal leading-[24px]",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].black1,
                                        fontFamily: 'Roboto, sans-serif'
                                    },
                                    children: "Experience in-room dining at its finest with our curated breakfast, lunch, and dinner selections. Enjoy a delightful array of farm-fresh eggs, artisanal pastries, and seasonal fruits, all delivered to your door. Start your day with a gourmet meal that captures the essence of local flavors, all while taking in stunning city skyline views from the comfort of your room."
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 pb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border rounded-lg overflow-hidden",
                                    style: {
                                        borderColor: 'rgba(0,0,0,0.1)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between p-4 border-b",
                                            style: {
                                                borderColor: 'rgba(0,0,0,0.1)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiPhone"],
                                                            size: 0.8,
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].black4
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                            lineNumber: 152,
                                                            columnNumber: 19
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[16px] font-normal leading-[24px]",
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].black1,
                                                                fontFamily: 'Roboto, sans-serif'
                                                            },
                                                            children: "(410) 633-9500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                            lineNumber: 153,
                                                            columnNumber: 19
                                                        }, _this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 17
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiArrowRight"],
                                                    size: 0.8,
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].black1
                                                }, void 0, false, {
                                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 17
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between p-4 border-b",
                                            style: {
                                                borderColor: 'rgba(0,0,0,0.1)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiEmail"],
                                                            size: 0.8,
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].black4
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                            lineNumber: 172,
                                                            columnNumber: 19
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[16px] font-normal leading-[24px]",
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].black1,
                                                                fontFamily: 'Roboto, sans-serif'
                                                            },
                                                            children: "roomservice@statler.com"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                            lineNumber: 173,
                                                            columnNumber: 19
                                                        }, _this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 17
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiArrowRight"],
                                                    size: 0.8,
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].black1
                                                }, void 0, false, {
                                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 17
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                            lineNumber: 167,
                                            columnNumber: 15
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between p-4 border-b",
                                            style: {
                                                borderColor: 'rgba(0,0,0,0.1)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiOpenInNew"],
                                                            size: 0.8,
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].black4
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                            lineNumber: 192,
                                                            columnNumber: 19
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[16px] font-normal leading-[24px]",
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].black1,
                                                                fontFamily: 'Roboto, sans-serif'
                                                            },
                                                            children: "Visit website"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                            lineNumber: 193,
                                                            columnNumber: 19
                                                        }, _this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 17
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiArrowRight"],
                                                    size: 0.8,
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].black1
                                                }, void 0, false, {
                                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 17
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                            lineNumber: 187,
                                            columnNumber: 15
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between p-4 bg-neutral-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiClockOutline"],
                                                            size: 0.8,
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].black4
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                            lineNumber: 209,
                                                            columnNumber: 19
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[16px] font-normal leading-[24px]",
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].black1,
                                                                fontFamily: 'Roboto, sans-serif'
                                                            },
                                                            children: "Open • Closes 05:00 PM"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 19
                                                        }, _this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 17
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiArrowRight"],
                                                    size: 0.8,
                                                    style: {
                                                        color: '#8C1836'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 17
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                            lineNumber: 207,
                                            columnNumber: 15
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 pb-6 flex flex-col items-center gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-32 h-10 border border-gray-300 rounded flex items-center justify-between px-2",
                                        style: {
                                            backgroundColor: 'white'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[14px] font-normal",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].black1,
                                                    fontFamily: 'Roboto, sans-serif'
                                                },
                                                children: "English"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                lineNumber: 232,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiUnfoldMoreHorizontal"],
                                                size: 0.8,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].black1
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                lineNumber: 241,
                                                columnNumber: 15
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                        lineNumber: 228,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[12px] font-medium mb-2",
                                                style: {
                                                    color: '#414141',
                                                    fontFamily: 'Roboto, sans-serif'
                                                },
                                                children: "Privacy Policy • Terms & Conditions"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                lineNumber: 246,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-5 h-3 bg-gray-300 rounded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 17
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[12px] font-normal",
                                                        style: {
                                                            color: '#9f9f9f',
                                                            fontFamily: 'Roboto, sans-serif'
                                                        },
                                                        children: "Powered by Canary Technologies"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 17
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                lineNumber: 256,
                                                columnNumber: 15
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                        lineNumber: 245,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, _this);
};
_c = MobileGuestExperience;
var _c;
__turbopack_context__.k.register(_c, "MobileGuestExperience");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuItemDetails",
    ()=>MenuItemDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/react/Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/js/mdi.js [app-client] (ecmascript)");
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
var MenuItemDetails = function(param) {
    var item = param.item, isOpen = param.isOpen, onClose = param.onClose, onAddToCart = param.onAddToCart, _param_initialQuantity = param.initialQuantity, initialQuantity = _param_initialQuantity === void 0 ? 1 : _param_initialQuantity;
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialQuantity), 2), quantity = _useState[0], setQuantity = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), 2), specialRequests = _useState1[0], setSpecialRequests = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isAnimating = _useState2[0], setIsAnimating = _useState2[1];
    // Reset state when item changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MenuItemDetails.useEffect": function() {
            if (item) {
                setQuantity(initialQuantity);
                setSpecialRequests('');
            }
        }
    }["MenuItemDetails.useEffect"], [
        item,
        initialQuantity
    ]);
    // Handle animation timing
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MenuItemDetails.useEffect": function() {
            if (isOpen) {
                // Start in closed position
                setIsAnimating(true);
                // Trigger slide-up animation on next frame
                requestAnimationFrame({
                    "MenuItemDetails.useEffect": function() {
                        setIsAnimating(false);
                    }
                }["MenuItemDetails.useEffect"]);
            }
        }
    }["MenuItemDetails.useEffect"], [
        isOpen
    ]);
    var handleClose = function() {
        setIsAnimating(true);
        // Trigger slide-down animation
        setTimeout(function() {
            onClose();
            setIsAnimating(false);
        }, 600);
    };
    var handleAddToCart = function() {
        if (item) {
            onAddToCart(item, quantity, specialRequests);
            handleClose();
        }
    };
    var handleQuantityChange = function(newQuantity) {
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
        }
    };
    if (!isOpen || !item) return null;
    // Generate consistent mock price and description
    var mockPrice = Math.floor((item.name.length * 7 + item.id.length * 3) % 30) + 15;
    var mockDescription = "Indulge in our ".concat(item.name, ", a luxurious blend of fresh ingredients crafted with exquisite attention to detail.");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 z-50 flex items-end justify-center",
        style: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            transition: 'opacity 600ms ease-out',
            opacity: isAnimating ? 0 : 1,
            borderRadius: '44px',
            overflow: 'hidden'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-t-xl shadow-xl w-full h-full max-h-[90vh] flex flex-col overflow-hidden",
            style: {
                transform: isAnimating ? 'translateY(100%)' : 'translateY(0%)',
                transition: 'transform 600ms cubic-bezier(0.4, 0.0, 0.2, 1)',
                willChange: 'transform'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-58 w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: item.image,
                            alt: item.name,
                            className: "w-full h-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClose,
                            className: "absolute top-4 left-4 bg-white shadow-md rounded p-3 hover:bg-gray-50 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiClose"],
                                size: 1,
                                color: "#000"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, _this)
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col px-4 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-roboto text-[28px] font-medium text-black leading-[42px] mb-3",
                                    children: item.name
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-roboto text-base font-normal text-black leading-6 mb-3",
                                    children: mockDescription
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-roboto text-base font-normal text-black leading-6",
                                    children: [
                                        "$",
                                        mockPrice
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: function() {
                                            return handleQuantityChange(quantity - 1);
                                        },
                                        disabled: quantity <= 1,
                                        className: "w-12 h-12 flex items-center justify-center rounded transition-opacity ".concat(quantity <= 1 ? 'bg-black opacity-50 cursor-not-allowed' : 'bg-black hover:opacity-90'),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiMinus"],
                                            size: 1,
                                            color: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                                            lineNumber: 150,
                                            columnNumber: 17
                                        }, _this)
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-roboto font-bold text-lg text-black text-center w-8",
                                        children: quantity
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: function() {
                                            return handleQuantityChange(quantity + 1);
                                        },
                                        className: "bg-black text-white w-12 h-12 flex items-center justify-center rounded hover:opacity-90 transition-opacity",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiPlus"],
                                            size: 1,
                                            color: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                                            lineNumber: 161,
                                            columnNumber: 17
                                        }, _this)
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                                lineNumber: 140,
                                columnNumber: 13
                            }, _this)
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block font-roboto text-sm font-normal text-black mb-2",
                                    children: "Special requests"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: specialRequests,
                                    onChange: function(e) {
                                        return setSpecialRequests(e.target.value);
                                    },
                                    placeholder: "Special requests",
                                    className: "w-full h-24 p-3 border border-gray-600 rounded font-roboto text-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none",
                                    rows: 3
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white border-t border-gray-200 p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleAddToCart,
                        className: "w-full bg-black text-white h-12 rounded font-roboto text-lg font-medium hover:opacity-90 transition-opacity",
                        children: [
                            "Add to cart $",
                            mockPrice * quantity
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                        lineNumber: 183,
                        columnNumber: 11
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                    lineNumber: 182,
                    columnNumber: 9
                }, _this)
            ]
        }, void 0, true, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
            lineNumber: 96,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, _this);
};
_s(MenuItemDetails, "gROr/6fsPqXva2KBKOtxBaS7fiQ=");
_c = MenuItemDetails;
var _c;
__turbopack_context__.k.register(_c, "MenuItemDetails");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileMenuOrdering",
    ()=>MobileMenuOrdering
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_object_without_properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_property_key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_to_property_key.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/react/Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/js/mdi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/lib/design-tokens.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$MenuItemDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
var Button = function(param) {
    var children = param.children, onClick = param.onClick, _param_variant = param.variant, variant = _param_variant === void 0 ? 'primary' : _param_variant, icon = param.icon, _param_iconPosition = param.iconPosition, iconPosition = _param_iconPosition === void 0 ? 'left' : _param_iconPosition, _param_className = param.className, className = _param_className === void 0 ? '' : _param_className, _param_disabled = param.disabled, disabled = _param_disabled === void 0 ? false : _param_disabled;
    var baseClasses = "inline-flex items-center justify-center font-roboto font-medium transition-all duration-200 outline-none";
    var variantClasses = {
        primary: "bg-black text-white hover:opacity-90 h-12 px-4 rounded",
        outlined: "bg-white border border-gray-600 text-gray-900 hover:bg-gray-50 h-12 px-2 rounded",
        text: "bg-transparent text-gray-700 hover:text-black h-10 px-4",
        icon: "bg-transparent text-gray-700 hover:text-black w-10 h-10 rounded-full hover:bg-gray-100"
    };
    var iconClasses = variant === 'icon' ? "w-6 h-6" : "w-4 h-4";
    var spacing = variant === 'icon' ? "" : iconPosition === 'left' ? "mr-2" : "ml-2";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        disabled: disabled,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(baseClasses, variantClasses[variant], className, {
            'opacity-50 cursor-not-allowed': disabled
        }),
        children: [
            icon && iconPosition === 'left' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(iconClasses, spacing),
                children: icon
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, _this),
            variant !== 'icon' && children,
            icon && iconPosition === 'right' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(iconClasses, spacing),
                children: icon
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, _this);
};
_c = Button;
var Select = function(param) {
    var options = param.options, value = param.value, onChange = param.onChange, placeholder = param.placeholder;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: value,
                onChange: onChange,
                className: "w-full h-12 px-3 pr-10 bg-white border border-gray-600 rounded font-roboto text-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none",
                children: [
                    placeholder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        disabled: true,
                        children: placeholder
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, _this),
                    options.map(function(option) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: option.value,
                            children: option.label
                        }, option.value, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, _this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiChevronDown"],
                    size: 1,
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].black3
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, _this)
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, _this);
};
_c1 = Select;
var Tab = function(param) {
    var children = param.children, _param_active = param.active, active = _param_active === void 0 ? false : _param_active, onClick = param.onClick;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "flex-1 px-4 py-2 font-roboto text-base font-medium transition-colors border-b-2 ".concat(active ? 'text-black border-black' : 'text-gray-600 border-transparent hover:text-black'),
        children: children
    }, void 0, false, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
        lineNumber: 139,
        columnNumber: 3
    }, _this);
};
_c2 = Tab;
var MenuItem = function(param) {
    var item = param.item, onAddToCart = param.onAddToCart, _param_quantity = param.quantity, quantity = _param_quantity === void 0 ? 0 : _param_quantity, onUpdateQuantity = param.onUpdateQuantity, onItemClick = param.onItemClick;
    var handleAdd = function() {
        if (quantity === 0 && onAddToCart) {
            onAddToCart(item);
        } else if (onUpdateQuantity) {
            onUpdateQuantity(item, quantity + 1);
        }
    };
    var handleRemove = function() {
        if (onUpdateQuantity && quantity > 0) {
            onUpdateQuantity(item, quantity - 1);
        }
    };
    // Generate a consistent mock price based on item name hash
    var mockPrice = Math.floor((item.name.length * 7 + item.id.length * 3) % 30) + 15;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-4 p-3 border-b border-neutral-200 last:border-b-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: item.image,
                alt: item.name,
                className: "w-16 h-16 rounded-lg object-cover shrink-0 cursor-pointer",
                onClick: function() {
                    return onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(item);
                }
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0 cursor-pointer",
                onClick: function() {
                    return onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(item);
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "font-roboto text-sm font-medium text-black mb-0.5 truncate",
                        children: item.name
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-roboto text-sm font-normal text-black",
                        children: [
                            "$",
                            mockPrice
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shrink-0",
                children: quantity === 0 ? // Default state: Just a "+" button
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleAdd,
                    className: "bg-black text-white w-9 h-9 flex items-center justify-center rounded hover:opacity-90 transition-opacity",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiPlus"],
                        size: 0.7,
                        color: "white"
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                        lineNumber: 215,
                        columnNumber: 13
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                    lineNumber: 211,
                    columnNumber: 11
                }, _this) : // Counter state: trash/minus + number + plus
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 bg-transparent rounded overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleRemove,
                            className: "bg-black text-white w-9 h-9 flex items-center justify-center rounded hover:opacity-90 transition-opacity",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                path: quantity === 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiDelete"] : __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiMinus"],
                                size: 0.7,
                                color: "white"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                lineNumber: 224,
                                columnNumber: 15
                            }, _this)
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                            lineNumber: 220,
                            columnNumber: 13
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-roboto font-bold text-base text-black text-center w-8 tracking-wide",
                            children: quantity
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                            lineNumber: 230,
                            columnNumber: 13
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleAdd,
                            className: "bg-black text-white w-9 h-9 flex items-center justify-center rounded hover:opacity-90 transition-opacity",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiPlus"],
                                size: 0.7,
                                color: "white"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                lineNumber: 237,
                                columnNumber: 15
                            }, _this)
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                            lineNumber: 233,
                            columnNumber: 13
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                    lineNumber: 219,
                    columnNumber: 11
                }, _this)
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
        lineNumber: 185,
        columnNumber: 5
    }, _this);
};
_c3 = MenuItem;
var MobileMenuOrdering = function(param) {
    var onBack = param.onBack, onViewCart = param.onViewCart, _param_menuName = param.menuName, menuName = _param_menuName === void 0 ? "Breakfast menu" : _param_menuName, _param_menus = param.menus, menus = _param_menus === void 0 ? [] : _param_menus;
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(menuName), 2), selectedMenuName = _useState[0], setSelectedMenuName = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), 2), activeSection = _useState1[0], setActiveSection = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({}), 2), cart = _useState2[0], setCart = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), selectedItem = _useState3[0], setSelectedItem = _useState3[1];
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isItemDetailsOpen = _useState4[0], setIsItemDetailsOpen = _useState4[1];
    var scrollContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var sectionRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    // Convert menus to select options format
    var menuOptions = menus.map(function(menu) {
        return {
            label: menu.name,
            value: menu.name
        };
    });
    // Get current selected menu and its sections
    var currentMenu = menus.find(function(menu) {
        return menu.name === selectedMenuName;
    });
    var menuSections = (currentMenu === null || currentMenu === void 0 ? void 0 : currentMenu.sections) || [];
    // Set initial active section
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobileMenuOrdering.useEffect": function() {
            if (menuSections.length > 0 && !activeSection) {
                setActiveSection(menuSections[0].id);
            }
        }
    }["MobileMenuOrdering.useEffect"], [
        menuSections,
        activeSection
    ]);
    // Intersection Observer for auto-updating active tab
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobileMenuOrdering.useEffect": function() {
            if (!scrollContainerRef.current || menuSections.length === 0) return;
            var observer = new IntersectionObserver({
                "MobileMenuOrdering.useEffect": function(entries) {
                    entries.forEach({
                        "MobileMenuOrdering.useEffect": function(entry) {
                            if (entry.isIntersecting) {
                                var sectionId = entry.target.getAttribute('data-section-id');
                                if (sectionId) {
                                    setActiveSection(sectionId);
                                }
                            }
                        }
                    }["MobileMenuOrdering.useEffect"]);
                }
            }["MobileMenuOrdering.useEffect"], {
                root: scrollContainerRef.current,
                rootMargin: '-50px 0px -50% 0px',
                threshold: 0
            });
            // Observe all section elements
            Object.values(sectionRefs.current).forEach({
                "MobileMenuOrdering.useEffect": function(element) {
                    if (element) {
                        observer.observe(element);
                    }
                }
            }["MobileMenuOrdering.useEffect"]);
            return ({
                "MobileMenuOrdering.useEffect": function() {
                    observer.disconnect();
                }
            })["MobileMenuOrdering.useEffect"];
        }
    }["MobileMenuOrdering.useEffect"], [
        menuSections
    ]);
    var handleMenuSelect = function(event) {
        var newMenuName = event.target.value;
        setSelectedMenuName(newMenuName);
        // Reset active section to first section of the new menu
        var newMenu = menus.find(function(menu) {
            return menu.name === newMenuName;
        });
        var newMenuSections = (newMenu === null || newMenu === void 0 ? void 0 : newMenu.sections) || [];
        setActiveSection(newMenuSections.length > 0 ? newMenuSections[0].id : '');
    };
    var scrollToSection = function(sectionId) {
        var sectionElement = sectionRefs.current[sectionId];
        if (sectionElement && scrollContainerRef.current) {
            var container = scrollContainerRef.current;
            var containerRect = container.getBoundingClientRect();
            var sectionRect = sectionElement.getBoundingClientRect();
            var scrollTop = container.scrollTop + (sectionRect.top - containerRect.top) - 20; // 20px offset for better positioning
            container.scrollTo({
                top: scrollTop,
                behavior: 'smooth'
            });
        }
        setActiveSection(sectionId);
    };
    var handleAddToCart = function(item) {
        setCart(function(prev) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, item.id, 1));
        });
    };
    var handleUpdateQuantity = function(item, quantity) {
        setCart(function(prev) {
            if (quantity <= 0) {
                var _item_id = item.id, removed = prev[_item_id], rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(prev, [
                    _item_id
                ].map(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_property_key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"]));
                return rest;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, item.id, quantity));
        });
    };
    var handleItemClick = function(item) {
        setSelectedItem(item);
        setIsItemDetailsOpen(true);
    };
    var handleItemDetailsClose = function() {
        setIsItemDetailsOpen(false);
        setSelectedItem(null);
    };
    var handleAddToCartFromDetails = function(item, quantity, specialRequests) {
        setCart(function(prev) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, item.id, (prev[item.id] || 0) + quantity));
        });
        // You could also store special requests in a separate state if needed
        console.log('Special requests:', specialRequests);
    };
    var totalCartItems = Object.values(cart).reduce(function(sum, qty) {
        return sum + qty;
    }, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-screen bg-gray-100 p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-8 left-8 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                    onClick: onBack,
                    variant: "outlined",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiArrowLeft"],
                        size: 0.8
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                        lineNumber: 377,
                        columnNumber: 17
                    }, void 0),
                    iconPosition: "left",
                    children: "Back to Mobile Landing"
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                    lineNumber: 374,
                    columnNumber: 9
                }, _this)
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                lineNumber: 373,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative bg-white overflow-hidden shadow-xl",
                style: {
                    width: '430px',
                    height: '932px',
                    borderRadius: '44px',
                    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.16)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-4 py-4 bg-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                onClick: onBack,
                                variant: "icon",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiArrowLeft"],
                                    size: 1
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                    lineNumber: 399,
                                    columnNumber: 19
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                lineNumber: 396,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-roboto text-2xl font-semibold text-black text-center",
                                children: "In-room dining"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                lineNumber: 402,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 opacity-0"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                lineNumber: 406,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                        lineNumber: 395,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                            options: menuOptions,
                            value: selectedMenuName,
                            onChange: handleMenuSelect,
                            placeholder: "Select a menu"
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                            lineNumber: 411,
                            columnNumber: 11
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                        lineNumber: 410,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-roboto text-[32px] font-medium text-black leading-[48px]",
                            children: selectedMenuName
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                            lineNumber: 421,
                            columnNumber: 11
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                        lineNumber: 420,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 border-b border-neutral-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex",
                            children: menuSections.map(function(section) {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tab, {
                                    active: activeSection === section.id,
                                    onClick: function() {
                                        return scrollToSection(section.id);
                                    },
                                    children: section.title
                                }, section.id, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                    lineNumber: 430,
                                    columnNumber: 15
                                }, _this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                            lineNumber: 428,
                            columnNumber: 11
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                        lineNumber: 427,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: scrollContainerRef,
                        className: "flex-1 overflow-y-auto px-4 py-6",
                        style: {
                            height: 'calc(100% - 240px)'
                        },
                        children: menuSections.map(function(section) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: function(el) {
                                    sectionRefs.current[section.id] = el;
                                },
                                "data-section-id": section.id,
                                className: "mb-6 last:mb-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-roboto text-xl font-medium text-black mb-3",
                                        children: section.title
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                        lineNumber: 455,
                                        columnNumber: 15
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-neutral-200 rounded-lg overflow-hidden",
                                        children: section.items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-8 text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-500 font-roboto text-sm",
                                                children: "No items in this section yet"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                                lineNumber: 463,
                                                columnNumber: 21
                                            }, _this)
                                        }, void 0, false, {
                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                            lineNumber: 462,
                                            columnNumber: 19
                                        }, _this) : section.items.map(function(item) {
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuItem, {
                                                item: item,
                                                quantity: cart[item.id] || 0,
                                                onAddToCart: handleAddToCart,
                                                onUpdateQuantity: handleUpdateQuantity,
                                                onItemClick: handleItemClick
                                            }, item.id, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                                lineNumber: 469,
                                                columnNumber: 21
                                            }, _this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                        lineNumber: 460,
                                        columnNumber: 15
                                    }, _this)
                                ]
                            }, section.id, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                lineNumber: 448,
                                columnNumber: 13
                            }, _this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                        lineNumber: 442,
                        columnNumber: 9
                    }, _this),
                    totalCartItems > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 right-0 bg-white border-t border-neutral-200 p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                            className: "w-full",
                            onClick: onViewCart,
                            children: [
                                "View cart (",
                                totalCartItems,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                            lineNumber: 487,
                            columnNumber: 13
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                        lineNumber: 486,
                        columnNumber: 11
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$MenuItemDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItemDetails"], {
                        item: selectedItem,
                        isOpen: isItemDetailsOpen,
                        onClose: handleItemDetailsClose,
                        onAddToCart: handleAddToCartFromDetails,
                        initialQuantity: selectedItem ? cart[selectedItem.id] || 1 : 1
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                        lineNumber: 494,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                lineNumber: 385,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
        lineNumber: 371,
        columnNumber: 5
    }, _this);
};
_s(MobileMenuOrdering, "t1fG9Wbwn8XOTDG0L6wEaODSrlo=");
_c4 = MobileMenuOrdering;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Button");
__turbopack_context__.k.register(_c1, "Select");
__turbopack_context__.k.register(_c2, "Tab");
__turbopack_context__.k.register(_c3, "MenuItem");
__turbopack_context__.k.register(_c4, "MobileMenuOrdering");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddItemsModal",
    ()=>AddItemsModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/react/Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/js/mdi.js [app-client] (ecmascript)");
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
var Button = function(param) {
    var children = param.children, _param_variant = param.variant, variant = _param_variant === void 0 ? 'primary' : _param_variant, onClick = param.onClick, _param_disabled = param.disabled, disabled = _param_disabled === void 0 ? false : _param_disabled;
    if (variant === 'secondary') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClick,
            disabled: disabled,
            className: "flex items-center justify-center gap-2 h-10 px-4 bg-transparent text-canary-blue-1 border border-canary-blue-1 rounded font-roboto text-body-sm font-medium cursor-pointer hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed",
            children: children
        }, void 0, false, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, _this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        disabled: disabled,
        className: "flex items-center justify-center gap-2 h-10 px-4 bg-canary-blue-1 text-white border-none rounded font-roboto text-body-sm font-medium cursor-pointer hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed",
        children: children
    }, void 0, false, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, _this);
};
_c = Button;
var Checkbox = function(param) {
    var checked = param.checked, onChange = param.onChange, _param_disabled = param.disabled, disabled = _param_disabled === void 0 ? false : _param_disabled;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: function() {
            return !disabled && onChange(!checked);
        },
        disabled: disabled,
        className: "flex items-center justify-center w-6 h-6 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 ".concat(checked ? 'bg-canary-blue-1 border-canary-blue-1' : disabled ? 'border-gray-300' : 'border-gray-400', " border-2 rounded"),
        children: checked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiCheck"],
            size: 0.75,
            color: "white"
        }, void 0, false, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
            lineNumber: 69,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
        lineNumber: 57,
        columnNumber: 3
    }, _this);
};
_c1 = Checkbox;
var ItemRow = function(param) {
    var item = param.item, isSelected = param.isSelected, isDisabled = param.isDisabled, onSelectionChange = param.onSelectionChange, _param_isLast = param.isLast, isLast = _param_isLast === void 0 ? false : _param_isLast;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between py-4 px-4 bg-white ".concat(isLast ? '' : 'border-b border-neutral-200', " ").concat(isDisabled ? 'opacity-50' : ''),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 w-36",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: item.image,
                        alt: item.name,
                        className: "w-8 h-8 rounded object-cover"
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                        lineNumber: 99,
                        columnNumber: 7
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-roboto text-body-sm font-medium text-canary-black-1 truncate",
                        children: item.name
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                        lineNumber: 104,
                        columnNumber: 7
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                lineNumber: 98,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-36 font-roboto text-body-sm font-normal text-canary-black-1 truncate",
                children: item.menus.join(', ')
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                lineNumber: 110,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-16 font-roboto text-body-sm font-normal text-canary-black-1",
                children: [
                    "$",
                    item.price.toFixed(2)
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                lineNumber: 115,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-6 flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                    checked: isSelected,
                    onChange: function(checked) {
                        return onSelectionChange(item.id, checked);
                    },
                    disabled: isDisabled
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                    lineNumber: 121,
                    columnNumber: 7
                }, _this)
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                lineNumber: 120,
                columnNumber: 5
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
        lineNumber: 94,
        columnNumber: 3
    }, _this);
};
_c2 = ItemRow;
var AddItemsModal = function(param) {
    var isOpen = param.isOpen, onClose = param.onClose, onAddItems = param.onAddItems, onGoToItemLibrary = param.onGoToItemLibrary, availableItems = param.availableItems, existingItemIds = param.existingItemIds;
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set()), 2), selectedItemIds = _useState[0], setSelectedItemIds = _useState[1];
    if (!isOpen) return null;
    var handleSelectionChange = function(itemId, selected) {
        var newSelection = new Set(selectedItemIds);
        if (selected) {
            newSelection.add(itemId);
        } else {
            newSelection["delete"](itemId);
        }
        setSelectedItemIds(newSelection);
    };
    var handleAddItems = function() {
        var selectedItems = availableItems.filter(function(item) {
            return selectedItemIds.has(item.id);
        });
        onAddItems(selectedItems);
        setSelectedItemIds(new Set()); // Reset selection
        onClose();
    };
    var handleCancel = function() {
        setSelectedItemIds(new Set()); // Reset selection
        onClose();
    };
    var selectedCount = selectedItemIds.size;
    var addButtonText = selectedCount === 0 ? 'Add items' : "Add ".concat(selectedCount, " item").concat(selectedCount > 1 ? 's' : '');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between py-6 px-6 border-b border-neutral-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-roboto text-subtitle font-medium text-canary-black-1",
                            children: "Add items"
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                            lineNumber: 184,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "flex items-center justify-center p-2.5 rounded bg-transparent border-none cursor-pointer hover:bg-gray-50",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiClose"],
                                size: 0.67
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                                lineNumber: 191,
                                columnNumber: 13
                            }, _this)
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                    lineNumber: 183,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-hidden px-6 pt-6 pb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-4 pb-1 font-roboto text-caption-sm font-medium text-canary-black-3 uppercase",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-36",
                                    children: "Item"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-36",
                                    children: "Menus"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16",
                                    children: "Price"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-6"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border border-neutral-200 rounded-lg overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-h-[600px] overflow-y-auto",
                                children: availableItems.map(function(item, index) {
                                    var isDisabled = existingItemIds.includes(item.id);
                                    var isSelected = selectedItemIds.has(item.id);
                                    var isLast = index === availableItems.length - 1;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemRow, {
                                        item: item,
                                        isSelected: isSelected,
                                        isDisabled: isDisabled,
                                        onSelectionChange: handleSelectionChange,
                                        isLast: isLast
                                    }, item.id, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                                        lineNumber: 214,
                                        columnNumber: 19
                                    }, _this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, _this)
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                            lineNumber: 206,
                            columnNumber: 11
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                    lineNumber: 196,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-6 py-6 border-t border-neutral-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                            variant: "secondary",
                            onClick: onGoToItemLibrary,
                            children: "Go to Item Library"
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                    variant: "secondary",
                                    onClick: handleCancel,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                                    lineNumber: 235,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                    onClick: handleAddItems,
                                    disabled: selectedCount === 0,
                                    children: addButtonText
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                    lineNumber: 229,
                    columnNumber: 9
                }, _this)
            ]
        }, void 0, true, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
            lineNumber: 181,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
        lineNumber: 180,
        columnNumber: 5
    }, _this);
};
_s(AddItemsModal, "HM7mjDmnRbvW5YkveSuvdvwHHfk=");
_c3 = AddItemsModal;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Button");
__turbopack_context__.k.register(_c1, "Checkbox");
__turbopack_context__.k.register(_c2, "ItemRow");
__turbopack_context__.k.register(_c3, "AddItemsModal");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditSectionPage",
    ()=>EditSectionPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/react/Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/js/mdi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$AddItemsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx [app-client] (ecmascript)");
;
;
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
var NavItem = function(param) {
    var children = param.children, icon = param.icon, _param_active = param.active, active = _param_active === void 0 ? false : _param_active, onClick = param.onClick;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-10 w-full relative flex items-center cursor-pointer ".concat(active ? 'bg-white rounded mx-2' : ''),
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-4 opacity-50 w-6 h-6 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    path: icon,
                    size: 1,
                    color: active ? '#000000' : '#ffffff'
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                    lineNumber: 48,
                    columnNumber: 7
                }, _this)
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                lineNumber: 47,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-12 font-roboto text-sm font-normal ".concat(active ? 'text-black' : 'text-white'),
                children: children
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                lineNumber: 54,
                columnNumber: 5
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
        lineNumber: 41,
        columnNumber: 3
    }, _this);
};
_c = NavItem;
var Button = function(param) {
    var children = param.children, _param_variant = param.variant, variant = _param_variant === void 0 ? 'primary' : _param_variant, onClick = param.onClick, _param_type = param.type, type = _param_type === void 0 ? 'button' : _param_type;
    if (variant === 'icon') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: type,
            onClick: onClick,
            className: "flex items-center justify-center p-1.5 rounded bg-transparent border-none cursor-pointer hover:bg-gray-50",
            children: children
        }, void 0, false, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
            lineNumber: 73,
            columnNumber: 7
        }, _this);
    }
    if (variant === 'secondary') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: type,
            onClick: onClick,
            className: "flex items-center justify-center gap-2 h-10 px-4 bg-transparent text-canary-black-1 border border-neutral-200 rounded font-roboto text-body-sm font-medium cursor-pointer hover:bg-gray-50",
            children: children
        }, void 0, false, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
            lineNumber: 85,
            columnNumber: 7
        }, _this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        onClick: onClick,
        className: "flex items-center justify-center gap-2 h-10 px-4 bg-canary-blue-1 text-white border-none rounded font-roboto text-body-sm font-medium cursor-pointer hover:opacity-90",
        children: children
    }, void 0, false, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, _this);
};
_c1 = Button;
var Input = function(param) {
    var label = param.label, value = param.value, onChange = param.onChange, placeholder = param.placeholder, _param_required = param.required, required = _param_required === void 0 ? false : _param_required;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "font-roboto text-body-sm font-medium text-canary-black-1",
                children: [
                    label,
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-red-500 ml-1",
                        children: "*"
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                        lineNumber: 125,
                        columnNumber: 20
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                lineNumber: 123,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                value: value,
                onChange: function(e) {
                    return onChange(e.target.value);
                },
                placeholder: placeholder,
                className: "w-full h-12 px-4 border border-neutral-200 rounded font-roboto text-body-sm text-canary-black-1 focus:outline-none focus:ring-2 focus:ring-canary-blue-1 focus:border-canary-blue-1"
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                lineNumber: 127,
                columnNumber: 5
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
        lineNumber: 122,
        columnNumber: 3
    }, _this);
};
_c2 = Input;
var SectionItem = function(param) {
    var id = param.id, name = param.name, image = param.image, onEdit = param.onEdit, onDelete = param.onDelete;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3 py-3 px-3 bg-white border border-neutral-200 rounded-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cursor-move text-canary-black-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiDrag"],
                    size: 1
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                    lineNumber: 156,
                    columnNumber: 7
                }, _this)
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                lineNumber: 155,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: image,
                alt: name,
                className: "w-10 h-10 rounded object-cover"
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                lineNumber: 160,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex-1 font-roboto text-body-sm font-medium text-canary-black-1",
                children: name
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                lineNumber: 167,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        variant: "icon",
                        onClick: function() {
                            return onEdit(id);
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiPencil"],
                            size: 0.8
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                            lineNumber: 174,
                            columnNumber: 9
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                        lineNumber: 173,
                        columnNumber: 7
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        variant: "icon",
                        onClick: function() {
                            return onDelete(id);
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiDelete"],
                            size: 0.8,
                            color: "#E40046"
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                            lineNumber: 177,
                            columnNumber: 9
                        }, _this)
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                        lineNumber: 176,
                        columnNumber: 7
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                lineNumber: 172,
                columnNumber: 5
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
        lineNumber: 153,
        columnNumber: 3
    }, _this);
};
_c3 = SectionItem;
// Sample items data
var sampleItems = [
    {
        id: '1',
        name: 'Croissant',
        image: 'https://images.unsplash.com/photo-1555507036-ab794f4eeecb?w=40&h=40&fit=crop&crop=center'
    },
    {
        id: '2',
        name: 'Frittata',
        image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=40&h=40&fit=crop&crop=center'
    }
];
// Sample food items from Item Library (matching ItemLibraryPage data)
var sampleFoodItems = [
    {
        id: '1',
        name: 'Burrito',
        image: 'https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?w=40&h=40&fit=crop&crop=center',
        menus: [
            'Lunch',
            'Dinner'
        ],
        price: 17.00,
        available: true
    },
    {
        id: '2',
        name: 'Brownie',
        image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=40&h=40&fit=crop&crop=center',
        menus: [
            'Desserts'
        ],
        price: 5.00,
        available: true
    },
    {
        id: '3',
        name: 'Croissant',
        image: 'https://images.unsplash.com/photo-1555507036-ab794f4eeecb?w=40&h=40&fit=crop&crop=center',
        menus: [
            'Breakfast',
            'Lunch'
        ],
        price: 8.00,
        available: true
    },
    {
        id: '4',
        name: 'Dumplings',
        image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=40&h=40&fit=crop&crop=center',
        menus: [
            'Lunch',
            'Dinner',
            '+ 2 more'
        ],
        price: 15.00,
        available: true
    },
    {
        id: '5',
        name: 'Frittata',
        image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=40&h=40&fit=crop&crop=center',
        menus: [
            'Breakfast',
            '+ 3 more'
        ],
        price: 10.00,
        available: true
    },
    {
        id: '6',
        name: 'Salad',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=40&h=40&fit=crop&crop=center',
        menus: [
            'Lunch',
            'Dinner'
        ],
        price: 15.00,
        available: true
    },
    {
        id: '7',
        name: 'Sushi',
        image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=40&h=40&fit=crop&crop=center',
        menus: [
            'Lunch',
            'Dinner',
            '+ 2 more'
        ],
        price: 24.00,
        available: true
    },
    {
        id: '8',
        name: 'Pancake',
        image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=40&h=40&fit=crop&crop=center',
        menus: [
            'Breakfast',
            'Lunch'
        ],
        price: 15.00,
        available: true
    },
    {
        id: '9',
        name: 'Pasta',
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=40&h=40&fit=crop&crop=center',
        menus: [
            'Lunch',
            'Dinner',
            '+ 2 more'
        ],
        price: 18.00,
        available: true
    },
    {
        id: '10',
        name: 'Pizza',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=40&h=40&fit=crop&crop=center',
        menus: [
            'Lunch',
            'Dinner',
            '+ 2 more'
        ],
        price: 24.00,
        available: true
    },
    {
        id: '11',
        name: 'Taco',
        image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=40&h=40&fit=crop&crop=center',
        menus: [
            'Lunch',
            'Dinner',
            '+ 2 more'
        ],
        price: 12.00,
        available: true
    },
    {
        id: '12',
        name: 'Waffle',
        image: 'https://images.unsplash.com/photo-1562376552-0d160a2f1e18?w=40&h=40&fit=crop&crop=center',
        menus: [
            'Breakfast',
            'Lunch'
        ],
        price: 14.00,
        available: true
    },
    {
        id: '13',
        name: 'Quiche',
        image: 'https://images.unsplash.com/photo-1601314002957-d0613c0f4c27?w=40&h=40&fit=crop&crop=center',
        menus: [
            'Breakfast'
        ],
        price: 10.00,
        available: true
    }
];
var EditSectionPage = function(param) {
    var section = param.section, onBack = param.onBack, onSave = param.onSave;
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        id: (section === null || section === void 0 ? void 0 : section.id) || '',
        title: (section === null || section === void 0 ? void 0 : section.title) || 'Mains',
        items: (section === null || section === void 0 ? void 0 : section.items) || sampleItems
    }), 2), sectionData = _useState[0], setSectionData = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({}), 2), errors = _useState1[0], setErrors = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isAddItemsModalOpen = _useState2[0], setIsAddItemsModalOpen = _useState2[1];
    var handleSave = function() {
        // Validation
        var newErrors = {};
        if (!sectionData.title.trim()) {
            newErrors.title = 'Section title is required';
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setErrors({});
        onSave === null || onSave === void 0 ? void 0 : onSave(sectionData);
    };
    var updateTitle = function(title) {
        setSectionData(function(prev) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev), {
                title: title
            });
        });
        // Clear error when user starts typing
        if (errors.title) {
            setErrors(function(prev) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev), {
                    title: ''
                });
            });
        }
    };
    var handleAddItem = function() {
        setIsAddItemsModalOpen(true);
    };
    var handleEditItem = function(itemId) {
        console.log('Edit item:', itemId);
    };
    var handleDeleteItem = function(itemId) {
        setSectionData(function(prev) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev), {
                items: prev.items.filter(function(item) {
                    return item.id !== itemId;
                })
            });
        });
    };
    var handleAddItemsFromLibrary = function(selectedItems) {
        // Convert FoodItems to SectionItems and add to section
        var newSectionItems = selectedItems.map(function(item) {
            return {
                id: item.id,
                name: item.name,
                image: item.image
            };
        });
        setSectionData(function(prev) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev), {
                items: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(prev.items).concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(newSectionItems))
            });
        });
    };
    var handleGoToItemLibrary = function() {
        // In a real app, this would navigate to the Item Library
        console.log('Navigate to Item Library');
    };
    // Get existing item IDs to disable in modal
    var existingItemIds = sectionData.items.map(function(item) {
        return item.id;
    });
    var isNewSection = !section || !section.id;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen rounded-xl shadow-canary overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-45 bg-canary-black-2 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-16 w-full relative flex items-center bg-canary-black-1 cursor-pointer",
                        onClick: onBack,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-4 opacity-50 w-6 h-6 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiArrowLeft"],
                                    size: 1,
                                    color: "#ffffff"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                    lineNumber: 426,
                                    columnNumber: 13
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                lineNumber: 425,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute left-12 font-roboto text-sm font-medium text-white",
                                children: "Back"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                lineNumber: 428,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                        lineNumber: 424,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex flex-col gap-6 pt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 pb-4 font-roboto text-xs font-normal text-white opacity-30 uppercase leading-4",
                                        children: "General Settings"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                        lineNumber: 437,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiHome"],
                                                children: "Property Info"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 441,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiBrushVariant"],
                                                children: "Branding"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 442,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiAccountMultiple"],
                                                children: "Staff Members"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 443,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiSecurity"],
                                                children: "Security"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 444,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiCog"],
                                                children: "Integrations"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 445,
                                                columnNumber: 15
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                        lineNumber: 440,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                lineNumber: 436,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-px bg-white opacity-20"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                lineNumber: 450,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 pb-4 font-roboto text-xs font-normal text-white opacity-30 uppercase leading-4",
                                        children: "Product settings"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                        lineNumber: 454,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiBook"],
                                                children: "Compendium"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 458,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiFoodForkDrink"],
                                                active: true,
                                                children: "F&B Ordering"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 459,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiTrendingUp"],
                                                children: "Upsells"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 460,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiLoginVariant"],
                                                children: "Check-in"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 461,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiLogoutVariant"],
                                                children: "Checkout"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 462,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiMessage"],
                                                children: "Messages"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 463,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiCurrencyUsd"],
                                                children: "Digital Tips"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 464,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiShieldCheck"],
                                                children: "Authorizations"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 465,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiFileDocument"],
                                                children: "Contracts"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 466,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiLink"],
                                                children: "Payment Links"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 467,
                                                columnNumber: 15
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                        lineNumber: 457,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                lineNumber: 453,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                        lineNumber: 434,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                lineNumber: 422,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col h-full min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border-b border-neutral-200 flex items-center justify-between py-2 px-6 sm:px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-roboto text-body-sm font-medium text-canary-black-1 truncate",
                                        children: "Statler New York"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                        lineNumber: 478,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiChevronDown"],
                                        size: 0.8
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                        lineNumber: 481,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                lineNumber: 477,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-full bg-canary-black-5 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                        lineNumber: 486,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-roboto text-caption font-medium text-canary-black-1",
                                                children: "Theresa Webb"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 488,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-roboto text-caption-sm font-normal text-canary-black-4 uppercase",
                                                children: "Operations manager"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 491,
                                                columnNumber: 15
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                        lineNumber: 487,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiChevronDown"],
                                        size: 0.8
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                        lineNumber: 495,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                lineNumber: 485,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                        lineNumber: 476,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex bg-white overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 max-w-lg border-r border-neutral-200 flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-b border-neutral-200 py-4 px-6 flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: onBack,
                                                        className: "flex items-center justify-center p-2 hover:bg-gray-50 rounded",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiArrowLeft"],
                                                            size: 1
                                                        }, void 0, false, {
                                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                            lineNumber: 510,
                                                            columnNumber: 19
                                                        }, _this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                        lineNumber: 506,
                                                        columnNumber: 17
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "font-roboto text-subtitle font-medium text-canary-black-1",
                                                        children: "Section details"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                        lineNumber: 512,
                                                        columnNumber: 17
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 505,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                onClick: handleSave,
                                                children: "Save"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 516,
                                                columnNumber: 15
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                        lineNumber: 504,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 overflow-auto py-8 px-6 space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border border-neutral-200 rounded-lg p-6 bg-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "font-roboto text-subtitle font-semibold text-canary-black-1 mb-6",
                                                        children: "Basic info"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                        lineNumber: 523,
                                                        columnNumber: 17
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                                label: "Title",
                                                                value: sectionData.title,
                                                                onChange: updateTitle,
                                                                placeholder: "Enter section title",
                                                                required: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                                lineNumber: 528,
                                                                columnNumber: 19
                                                            }, _this),
                                                            errors.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 text-sm text-red-500",
                                                                children: errors.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                                lineNumber: 536,
                                                                columnNumber: 21
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                        lineNumber: 527,
                                                        columnNumber: 17
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 522,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border border-neutral-200 rounded-lg p-6 bg-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "font-roboto text-subtitle font-semibold text-canary-black-1",
                                                                children: "Items"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                                lineNumber: 544,
                                                                columnNumber: 19
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                                variant: "icon",
                                                                onClick: handleAddItem,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiPlus"],
                                                                    size: 1
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                                    lineNumber: 548,
                                                                    columnNumber: 21
                                                                }, _this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                                lineNumber: 547,
                                                                columnNumber: 19
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                        lineNumber: 543,
                                                        columnNumber: 17
                                                    }, _this),
                                                    sectionData.items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center py-8",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-canary-black-4 font-roboto text-body-sm mb-4",
                                                                children: "No items in this section yet"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                                lineNumber: 555,
                                                                columnNumber: 21
                                                            }, _this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                                variant: "secondary",
                                                                onClick: handleAddItem,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiPlus"],
                                                                        size: 0.8
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                                        lineNumber: 559,
                                                                        columnNumber: 23
                                                                    }, _this),
                                                                    "Add first item"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                                lineNumber: 558,
                                                                columnNumber: 21
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                        lineNumber: 554,
                                                        columnNumber: 19
                                                    }, _this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3",
                                                        children: sectionData.items.map(function(item) {
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionItem, {
                                                                id: item.id,
                                                                name: item.name,
                                                                image: item.image,
                                                                onEdit: handleEditItem,
                                                                onDelete: handleDeleteItem
                                                            }, item.id, false, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                                lineNumber: 566,
                                                                columnNumber: 23
                                                            }, _this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                        lineNumber: 564,
                                                        columnNumber: 19
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 542,
                                                columnNumber: 15
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                        lineNumber: 520,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                lineNumber: 502,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 bg-canary-black-6 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-canary-black-4 font-roboto text-body-sm",
                                    children: "Mobile preview (coming soon)"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                    lineNumber: 583,
                                    columnNumber: 13
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                lineNumber: 582,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                        lineNumber: 500,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                lineNumber: 474,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$AddItemsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddItemsModal"], {
                isOpen: isAddItemsModalOpen,
                onClose: function() {
                    return setIsAddItemsModalOpen(false);
                },
                onAddItems: handleAddItemsFromLibrary,
                onGoToItemLibrary: handleGoToItemLibrary,
                availableItems: sampleFoodItems,
                existingItemIds: existingItemIds
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                lineNumber: 591,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
        lineNumber: 420,
        columnNumber: 5
    }, _this);
};
_s(EditSectionPage, "U4K2aXjoaUkl0oU/4MEBXc/SkXo=");
_c4 = EditSectionPage;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "NavItem");
__turbopack_context__.k.register(_c1, "Button");
__turbopack_context__.k.register(_c2, "Input");
__turbopack_context__.k.register(_c3, "SectionItem");
__turbopack_context__.k.register(_c4, "EditSectionPage");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuAvailabilityPage",
    ()=>MenuAvailabilityPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/react/Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/js/mdi.js [app-client] (ecmascript)");
;
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
var NavItem = function(param) {
    var children = param.children, icon = param.icon, _param_active = param.active, active = _param_active === void 0 ? false : _param_active, onClick = param.onClick;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-10 w-full relative flex items-center cursor-pointer ".concat(active ? 'bg-white rounded mx-2' : ''),
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-4 opacity-50 w-6 h-6 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    path: icon,
                    size: 1,
                    color: active ? '#000000' : '#ffffff'
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                    lineNumber: 43,
                    columnNumber: 7
                }, _this)
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                lineNumber: 42,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-12 font-roboto text-sm font-normal ".concat(active ? 'text-black' : 'text-white'),
                children: children
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                lineNumber: 49,
                columnNumber: 5
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, _this);
};
_c = NavItem;
var Button = function(param) {
    var children = param.children, _param_variant = param.variant, variant = _param_variant === void 0 ? 'primary' : _param_variant, onClick = param.onClick, _param_type = param.type, type = _param_type === void 0 ? 'button' : _param_type;
    if (variant === 'icon') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: type,
            onClick: onClick,
            className: "flex items-center justify-center p-2 rounded bg-transparent border-none cursor-pointer hover:bg-gray-50",
            children: children
        }, void 0, false, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
            lineNumber: 68,
            columnNumber: 7
        }, _this);
    }
    if (variant === 'secondary') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: type,
            onClick: onClick,
            className: "flex items-center justify-center gap-2 h-10 px-4 bg-transparent text-canary-black-1 border border-neutral-200 rounded font-roboto text-body-sm font-medium cursor-pointer hover:bg-gray-50",
            children: children
        }, void 0, false, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
            lineNumber: 80,
            columnNumber: 7
        }, _this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        onClick: onClick,
        className: "flex items-center justify-center gap-2 h-10 px-4 bg-canary-blue-1 text-white border-none rounded font-roboto text-body-sm font-medium cursor-pointer hover:opacity-90",
        children: children
    }, void 0, false, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, _this);
};
_c1 = Button;
var RadioButton = function(param) {
    var checked = param.checked, onChange = param.onChange, children = param.children, name = param.name;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2 px-1 py-2 cursor-pointer",
        onClick: onChange,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                path: checked ? __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiRadioboxMarked"] : __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiRadioboxBlank"],
                size: 1,
                color: checked ? '#2858C4' : '#666666'
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                lineNumber: 111,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-roboto text-body-sm font-normal text-canary-black-1",
                children: children
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                lineNumber: 116,
                columnNumber: 5
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
        lineNumber: 110,
        columnNumber: 3
    }, _this);
};
_c2 = RadioButton;
var DayRow = function(param) {
    var day = param.day, selectedType = param.selectedType, onTypeChange = param.onTypeChange, _param_isLast = param.isLast, isLast = _param_isLast === void 0 ? false : _param_isLast;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-4 p-4 ".concat(isLast ? '' : 'border-b border-neutral-200'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-30 font-roboto text-body font-medium text-canary-black-1",
                children: day
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                lineNumber: 140,
                columnNumber: 5
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioButton, {
                        checked: selectedType === 'set-hours',
                        onChange: function() {
                            return onTypeChange(day, 'set-hours');
                        },
                        name: "".concat(day, "-availability"),
                        children: "Set hours"
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                        lineNumber: 144,
                        columnNumber: 7
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioButton, {
                        checked: selectedType === 'open-24',
                        onChange: function() {
                            return onTypeChange(day, 'open-24');
                        },
                        name: "".concat(day, "-availability"),
                        children: "Open 24 hours"
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                        lineNumber: 151,
                        columnNumber: 7
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioButton, {
                        checked: selectedType === 'closed',
                        onChange: function() {
                            return onTypeChange(day, 'closed');
                        },
                        name: "".concat(day, "-availability"),
                        children: "Closed"
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                        lineNumber: 158,
                        columnNumber: 7
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                lineNumber: 143,
                columnNumber: 5
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
        lineNumber: 139,
        columnNumber: 3
    }, _this);
};
_c3 = DayRow;
var MenuAvailabilityPage = function(param) {
    var _param_menuName = param.menuName, menuName = _param_menuName === void 0 ? "Menu" : _param_menuName, onBack = param.onBack, onSave = param.onSave;
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            day: 'Monday',
            type: 'open-24'
        },
        {
            day: 'Tuesday',
            type: 'open-24'
        },
        {
            day: 'Wednesday',
            type: 'open-24'
        },
        {
            day: 'Thursday',
            type: 'open-24'
        },
        {
            day: 'Friday',
            type: 'open-24'
        },
        {
            day: 'Saturday',
            type: 'open-24'
        },
        {
            day: 'Sunday',
            type: 'open-24'
        }
    ]), 2), availability = _useState[0], setAvailability = _useState[1];
    var handleTypeChange = function(day, type) {
        setAvailability(function(prev) {
            return prev.map(function(item) {
                return item.day === day ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, item), {
                    type: type
                }) : item;
            });
        });
    };
    var handleSave = function() {
        onSave === null || onSave === void 0 ? void 0 : onSave(availability);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen rounded-xl shadow-canary overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-45 bg-canary-black-2 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-16 w-full relative flex items-center bg-canary-black-1 cursor-pointer",
                        onClick: onBack,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-4 opacity-50 w-6 h-6 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiArrowLeft"],
                                    size: 1,
                                    color: "#ffffff"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute left-12 font-roboto text-sm font-medium text-white",
                                children: "Back"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex flex-col gap-6 pt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 pb-4 font-roboto text-xs font-normal text-white opacity-30 uppercase leading-4",
                                        children: "General Settings"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                        lineNumber: 221,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiHome"],
                                                children: "Property Info"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                lineNumber: 225,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiBrushVariant"],
                                                children: "Branding"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                lineNumber: 226,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiAccountMultiple"],
                                                children: "Staff Members"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                lineNumber: 227,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiSecurity"],
                                                children: "Security"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                lineNumber: 228,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiCog"],
                                                children: "Integrations"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                lineNumber: 229,
                                                columnNumber: 15
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                        lineNumber: 224,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-px bg-white opacity-20"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 pb-4 font-roboto text-xs font-normal text-white opacity-30 uppercase leading-4",
                                        children: "Product settings"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                        lineNumber: 238,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiBook"],
                                                children: "Compendium"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                lineNumber: 242,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiFoodForkDrink"],
                                                active: true,
                                                children: "F&B Ordering"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                lineNumber: 243,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiTrendingUp"],
                                                children: "Upsells"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                lineNumber: 244,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiLoginVariant"],
                                                children: "Check-in"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                lineNumber: 245,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiLogoutVariant"],
                                                children: "Checkout"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                lineNumber: 246,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiMessage"],
                                                children: "Messages"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                lineNumber: 247,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiCurrencyUsd"],
                                                children: "Digital Tips"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                lineNumber: 248,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiShieldCheck"],
                                                children: "Authorizations"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                lineNumber: 249,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiFileDocument"],
                                                children: "Contracts"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                lineNumber: 250,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiLink"],
                                                children: "Payment Links"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                lineNumber: 251,
                                                columnNumber: 15
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                        lineNumber: 241,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col h-full min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border-b border-neutral-200 flex items-center justify-between py-2 px-6 sm:px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-roboto text-body-sm font-medium text-canary-black-1 truncate",
                                        children: "Statler New York"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                        lineNumber: 262,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiChevronDown"],
                                        size: 0.8
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                        lineNumber: 265,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                lineNumber: 261,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-full bg-canary-black-5 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                        lineNumber: 270,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-roboto text-caption font-medium text-canary-black-1",
                                                children: "Theresa Webb"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                lineNumber: 272,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-roboto text-caption-sm font-normal text-canary-black-4 uppercase",
                                                children: "Operations manager"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                lineNumber: 275,
                                                columnNumber: 15
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                        lineNumber: 271,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiChevronDown"],
                                        size: 0.8
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                        lineNumber: 279,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                lineNumber: 269,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                        lineNumber: 260,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex bg-white overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 max-w-lg border-r border-neutral-200 flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-b border-neutral-200 py-4 px-6 flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: onBack,
                                                        className: "flex items-center justify-center p-2 hover:bg-gray-50 rounded",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiArrowLeft"],
                                                            size: 1
                                                        }, void 0, false, {
                                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                            lineNumber: 294,
                                                            columnNumber: 19
                                                        }, _this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                        lineNumber: 290,
                                                        columnNumber: 17
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "font-roboto text-subtitle font-medium text-canary-black-1",
                                                        children: "Menu availability"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 17
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                lineNumber: 289,
                                                columnNumber: 15
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                onClick: handleSave,
                                                children: "Save"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                lineNumber: 300,
                                                columnNumber: 15
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                        lineNumber: 288,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 overflow-auto py-8 px-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border border-neutral-200 rounded-lg bg-white",
                                            children: availability.map(function(item, index) {
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DayRow, {
                                                    day: item.day,
                                                    selectedType: item.type,
                                                    onTypeChange: handleTypeChange,
                                                    isLast: index === availability.length - 1
                                                }, item.day, false, {
                                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                    lineNumber: 308,
                                                    columnNumber: 19
                                                }, _this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                            lineNumber: 306,
                                            columnNumber: 15
                                        }, _this)
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                        lineNumber: 304,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                lineNumber: 286,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 bg-canary-black-6 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-canary-black-4 font-roboto text-body-sm",
                                    children: "Mobile preview (coming soon)"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                    lineNumber: 322,
                                    columnNumber: 13
                                }, _this)
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                lineNumber: 321,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                lineNumber: 258,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
        lineNumber: 204,
        columnNumber: 5
    }, _this);
};
_s(MenuAvailabilityPage, "FdeXj4H1BtxNLAkrIzL5XPn1ONs=");
_c4 = MenuAvailabilityPage;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "NavItem");
__turbopack_context__.k.register(_c1, "Button");
__turbopack_context__.k.register(_c2, "RadioButton");
__turbopack_context__.k.register(_c3, "DayRow");
__turbopack_context__.k.register(_c4, "MenuAvailabilityPage");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/Toast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toast",
    ()=>Toast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/react/Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/js/mdi.js [app-client] (ecmascript)");
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
var Toast = function(param) {
    var message = param.message, type = param.type, isVisible = param.isVisible, onClose = param.onClose, _param_duration = param.duration, duration = _param_duration === void 0 ? 3000 : _param_duration;
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Toast.useEffect": function() {
            if (isVisible && duration > 0) {
                var timer = setTimeout({
                    "Toast.useEffect.timer": function() {
                        onClose();
                    }
                }["Toast.useEffect.timer"], duration);
                return ({
                    "Toast.useEffect": function() {
                        return clearTimeout(timer);
                    }
                })["Toast.useEffect"];
            }
        }
    }["Toast.useEffect"], [
        isVisible,
        duration,
        onClose
    ]);
    if (!isVisible) return null;
    var typeStyles = {
        success: {
            bg: 'bg-green-50',
            border: 'border-green-200',
            icon: 'text-green-600',
            text: 'text-green-800',
            iconPath: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiCheck"]
        },
        error: {
            bg: 'bg-red-50',
            border: 'border-red-200',
            icon: 'text-red-600',
            text: 'text-red-800',
            iconPath: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiAlert"]
        },
        warning: {
            bg: 'bg-yellow-50',
            border: 'border-yellow-200',
            icon: 'text-yellow-600',
            text: 'text-yellow-800',
            iconPath: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiAlert"]
        }
    };
    var style = typeStyles[type];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-4 right-4 z-50 animate-slide-in-right",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "\n        flex items-center gap-3 px-4 py-3 rounded-lg border shadow-lg max-w-md\n        ".concat(style.bg, " ").concat(style.border, "\n      "),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    path: style.iconPath,
                    size: 1,
                    className: style.icon
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/Toast.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-roboto text-body-sm font-medium ".concat(style.text, " flex-1"),
                    children: message
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/Toast.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "p-1 hover:bg-black/5 rounded ".concat(style.icon),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdiClose"],
                        size: 0.8
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/Toast.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, _this)
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/Toast.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, _this)
            ]
        }, void 0, true, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/Toast.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/Toast.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, _this);
};
_s(Toast, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Toast;
var _c;
__turbopack_context__.k.register(_c, "Toast");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppRouter",
    ()=>AppRouter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_object_without_properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_property_key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_to_property_key.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$MenuManagementPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$EditMenuPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$ItemLibraryPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$EditItemPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$MobileGuestExperience$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$MobileMenuOrdering$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$EditSectionPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$MenuAvailabilityPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/Toast.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
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
var AppRouter = function() {
    _s();
    // Initialize menus with actual section data
    var initialMenus = [
        {
            name: 'Breakfast menu',
            entryPoint: 'In-room dining',
            sections: [
                {
                    id: 'mains',
                    title: 'Mains',
                    items: [
                        {
                            id: '3',
                            name: 'Croissant',
                            image: 'https://images.unsplash.com/photo-1555507036-ab794f4eeecb?w=40&h=40&fit=crop&crop=center'
                        },
                        {
                            id: '5',
                            name: 'Frittata',
                            image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=40&h=40&fit=crop&crop=center'
                        }
                    ]
                }
            ]
        },
        {
            name: 'Lunch menu',
            entryPoint: 'In-room dining',
            sections: [
                {
                    id: 'cold',
                    title: 'Cold',
                    items: [
                        {
                            id: '6',
                            name: 'Salad',
                            image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=40&h=40&fit=crop&crop=center'
                        }
                    ]
                },
                {
                    id: 'mains',
                    title: 'Mains',
                    items: [
                        {
                            id: '1',
                            name: 'Burrito',
                            image: 'https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?w=40&h=40&fit=crop&crop=center'
                        },
                        {
                            id: '3',
                            name: 'Croissant',
                            image: 'https://images.unsplash.com/photo-1555507036-ab794f4eeecb?w=40&h=40&fit=crop&crop=center'
                        },
                        {
                            id: '4',
                            name: 'Dumplings',
                            image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=40&h=40&fit=crop&crop=center'
                        },
                        {
                            id: '9',
                            name: 'Pasta',
                            image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=40&h=40&fit=crop&crop=center'
                        },
                        {
                            id: '10',
                            name: 'Pizza',
                            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=40&h=40&fit=crop&crop=center'
                        }
                    ]
                },
                {
                    id: 'sides',
                    title: 'Sides',
                    items: [
                        {
                            id: '11',
                            name: 'Taco',
                            image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=40&h=40&fit=crop&crop=center'
                        }
                    ]
                }
            ]
        },
        {
            name: 'Dinner menu',
            entryPoint: 'In-room dining',
            sections: []
        },
        {
            name: 'Happy hour menu',
            entryPoint: 'In-room dining',
            sections: []
        },
        {
            name: 'Dessert menu',
            entryPoint: 'In-room dining',
            sections: []
        }
    ];
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        currentPage: 'menu-management',
        menus: initialMenus,
        cart: {},
        toast: {
            isVisible: false,
            message: '',
            type: 'success'
        }
    }), 2), appState = _useState[0], setAppState = _useState[1];
    var navigateToEditMenu = function(menuName, entryPoint) {
        var menu = appState.menus.find(function(m) {
            return m.name === menuName;
        });
        setAppState(function(prev) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev), {
                currentPage: 'edit-menu',
                editingMenu: menu || {
                    name: menuName,
                    entryPoint: entryPoint
                }
            });
        });
    };
    var navigateToMenuManagement = function() {
        setAppState(function(prev) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev), {
                currentPage: 'menu-management'
            });
        });
    };
    var navigateToMobilePreview = function(menuName, entryPoint) {
        var menu = appState.menus.find(function(m) {
            return m.name === menuName;
        });
        setAppState(function(prev) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev), {
                currentPage: 'mobile-preview',
                previewingMenu: menu || {
                    name: menuName,
                    entryPoint: entryPoint
                }
            });
        });
    };
    var navigateToMobileMenuOrdering = function() {
        setAppState(function(prev) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev), {
                currentPage: 'mobile-menu-ordering'
            });
        });
    };
    var navigateBackToMobilePreview = function() {
        setAppState(function(prev) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev), {
                currentPage: 'mobile-preview'
            });
        });
    };
    var navigateToOrderSummary = function() {
        setAppState(function(prev) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev), {
                currentPage: 'order-summary'
            });
        });
    };
    var navigateBackToMobileMenuOrdering = function() {
        setAppState(function(prev) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev), {
                currentPage: 'mobile-menu-ordering'
            });
        });
    };
    var handleUpdateQuantity = function(item, quantity) {
        setAppState(function(prev) {
            if (quantity <= 0) {
                var _prev_cart = prev.cart, _item_id = item.id, removed = _prev_cart[_item_id], rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_prev_cart, [
                    _item_id
                ].map(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_property_key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"]));
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev), {
                    cart: rest
                });
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev), {
                cart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev.cart), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, item.id, quantity))
            });
        });
    };
    // Get all cart items from menus
    var getAllCartItems = function() {
        var items = [];
        appState.menus.forEach(function(menu) {
            var _menu_sections;
            (_menu_sections = menu.sections) === null || _menu_sections === void 0 ? void 0 : _menu_sections.forEach(function(section) {
                section.items.forEach(function(item) {
                    if (appState.cart[item.id]) {
                        items.push(item);
                    }
                });
            });
        });
        return items;
    };
    var navigateToItemLibrary = function() {
        setAppState(function(prev) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev), {
                currentPage: 'item-library'
            });
        });
    };
    var navigateToEditItem = function(itemId) {
        // In a real app, you'd fetch the item data from an API
        // For now, we'll create a mock item based on the sample data
        var sampleItems = [
            {
                id: '1',
                name: 'Burrito',
                description: 'Delicious burrito with fresh ingredients',
                price: 17.00,
                image: 'https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?w=400&h=300&fit=crop&crop=center'
            },
            {
                id: '2',
                name: 'Brownie',
                description: 'Rich chocolate brownie with fudge',
                price: 5.00,
                image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&h=300&fit=crop&crop=center'
            },
            {
                id: '3',
                name: 'Croissant',
                description: 'Flaky, buttery croissant fresh from the oven',
                price: 8.00,
                image: 'https://images.unsplash.com/photo-1555507036-ab794f4eeecb?w=400&h=300&fit=crop&crop=center'
            }
        ];
        var item = sampleItems.find(function(i) {
            return i.id === itemId;
        }) || sampleItems[0];
        setAppState(function(prev) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev), {
                currentPage: 'edit-item',
                editingItem: item
            });
        });
    };
    var saveItem = function(item) {
        // In a real app, you'd save to an API
        setAppState(function(prev) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev), {
                currentPage: 'item-library',
                editingItem: undefined
            });
        });
        showToast('Item saved successfully', 'success');
    };
    var navigateToEditSection = function(sectionId) {
        var _currentMenu_sections;
        // Find the actual section from the current menu
        var currentMenu = appState.editingMenu;
        var section = currentMenu === null || currentMenu === void 0 ? void 0 : (_currentMenu_sections = currentMenu.sections) === null || _currentMenu_sections === void 0 ? void 0 : _currentMenu_sections.find(function(s) {
            return s.id === sectionId;
        });
        if (section) {
            setAppState(function(prev) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev), {
                    currentPage: 'edit-section',
                    editingSection: section
                });
            });
        } else {
            // Create new section if not found
            var newSection = {
                id: sectionId,
                title: sectionId.charAt(0).toUpperCase() + sectionId.slice(1),
                items: []
            };
            setAppState(function(prev) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev), {
                    currentPage: 'edit-section',
                    editingSection: newSection
                });
            });
        }
    };
    var navigateBackToEditMenu = function() {
        setAppState(function(prev) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev), {
                currentPage: 'edit-menu'
            });
        });
    };
    var saveSection = function(section) {
        // Update the section in the current menu
        setAppState(function(prev) {
            if (!prev.editingMenu) return prev;
            var updatedMenus = prev.menus.map(function(menu) {
                var _prev_editingMenu;
                if (menu.name === ((_prev_editingMenu = prev.editingMenu) === null || _prev_editingMenu === void 0 ? void 0 : _prev_editingMenu.name)) {
                    var _menu_sections;
                    var updatedSections = menu.sections ? menu.sections.map(function(s) {
                        return s.id === section.id ? section : s;
                    }) : [
                        section
                    ];
                    // If section doesn't exist, add it
                    if (!((_menu_sections = menu.sections) === null || _menu_sections === void 0 ? void 0 : _menu_sections.some(function(s) {
                        return s.id === section.id;
                    }))) {
                        updatedSections.push(section);
                    }
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, menu), {
                        sections: updatedSections
                    });
                }
                return menu;
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev), {
                currentPage: 'edit-menu',
                editingSection: undefined,
                menus: updatedMenus,
                editingMenu: updatedMenus.find(function(m) {
                    var _prev_editingMenu;
                    return m.name === ((_prev_editingMenu = prev.editingMenu) === null || _prev_editingMenu === void 0 ? void 0 : _prev_editingMenu.name);
                })
            });
        });
        showToast('Section saved successfully', 'success');
    };
    var navigateToMenuAvailability = function() {
        setAppState(function(prev) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev), {
                currentPage: 'menu-availability'
            });
        });
    };
    var saveMenuAvailability = function(availability) {
        // In a real app, you'd save to an API
        setAppState(function(prev) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev), {
                currentPage: 'edit-menu'
            });
        });
        showToast('Menu availability saved successfully', 'success');
    };
    var createNewMenu = function(menuName) {
        var newMenu = {
            name: menuName,
            entryPoint: 'In-room dining',
            isNew: true
        };
        setAppState(function(prev) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev), {
                menus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(prev.menus).concat([
                    newMenu
                ]),
                currentPage: 'edit-menu',
                editingMenu: newMenu
            });
        });
    };
    var saveMenu = function(menuName, isNew) {
        if (!menuName.trim()) {
            showToast('Menu name is required', 'error');
            return false;
        }
        if (isNew) {
            setAppState(function(prev) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev), {
                    menus: prev.menus.map(function(menu) {
                        var _prev_editingMenu;
                        return menu.isNew && menu.name === ((_prev_editingMenu = prev.editingMenu) === null || _prev_editingMenu === void 0 ? void 0 : _prev_editingMenu.name) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, menu), {
                            name: menuName,
                            isNew: false
                        }) : menu;
                    }),
                    editingMenu: prev.editingMenu ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev.editingMenu), {
                        name: menuName,
                        isNew: false
                    }) : undefined
                });
            });
            showToast('Menu created successfully', 'success');
        } else {
            showToast('Menu saved successfully', 'success');
        }
        return true;
    };
    var deleteMenu = function(menuName) {
        setAppState(function(prev) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev), {
                menus: prev.menus.filter(function(menu) {
                    return menu.name !== menuName;
                })
            });
        });
        showToast('Menu deleted successfully', 'success');
    };
    var showToast = function(message, type) {
        setAppState(function(prev) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev), {
                toast: {
                    isVisible: true,
                    message: message,
                    type: type
                }
            });
        });
    };
    var hideToast = function() {
        setAppState(function(prev) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev), {
                toast: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev.toast), {
                    isVisible: false
                })
            });
        });
    };
    switch(appState.currentPage){
        case 'menu-availability':
            var _appState_editingMenu;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$MenuAvailabilityPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuAvailabilityPage"], {
                        menuName: (_appState_editingMenu = appState.editingMenu) === null || _appState_editingMenu === void 0 ? void 0 : _appState_editingMenu.name,
                        onBack: navigateBackToEditMenu,
                        onSave: saveMenuAvailability
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 415,
                        columnNumber: 11
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                        message: appState.toast.message,
                        type: appState.toast.type,
                        isVisible: appState.toast.isVisible,
                        onClose: hideToast
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 420,
                        columnNumber: 11
                    }, _this)
                ]
            }, void 0, true);
        case 'edit-section':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$EditSectionPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditSectionPage"], {
                        section: appState.editingSection,
                        onBack: navigateBackToEditMenu,
                        onSave: saveSection
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 431,
                        columnNumber: 11
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                        message: appState.toast.message,
                        type: appState.toast.type,
                        isVisible: appState.toast.isVisible,
                        onClose: hideToast
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 436,
                        columnNumber: 11
                    }, _this)
                ]
            }, void 0, true);
        case 'edit-item':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$EditItemPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditItemPage"], {
                        item: appState.editingItem,
                        onBack: navigateToItemLibrary,
                        onSave: saveItem
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 447,
                        columnNumber: 11
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                        message: appState.toast.message,
                        type: appState.toast.type,
                        isVisible: appState.toast.isVisible,
                        onClose: hideToast
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 452,
                        columnNumber: 11
                    }, _this)
                ]
            }, void 0, true);
        case 'item-library':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$ItemLibraryPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemLibraryPage"], {
                        onBack: navigateToMenuManagement,
                        onTabChange: function(tab) {
                            if (tab === 'menus') navigateToMenuManagement();
                            if (tab === 'item-library') navigateToItemLibrary();
                        // settings tab will be added later
                        },
                        onEditItem: navigateToEditItem
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 463,
                        columnNumber: 11
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                        message: appState.toast.message,
                        type: appState.toast.type,
                        isVisible: appState.toast.isVisible,
                        onClose: hideToast
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 472,
                        columnNumber: 11
                    }, _this)
                ]
            }, void 0, true);
        case 'mobile-menu-ordering':
            var _appState_previewingMenu;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$MobileMenuOrdering$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MobileMenuOrdering"], {
                        menuName: (_appState_previewingMenu = appState.previewingMenu) === null || _appState_previewingMenu === void 0 ? void 0 : _appState_previewingMenu.name,
                        menus: appState.menus,
                        onBack: navigateBackToMobilePreview
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 483,
                        columnNumber: 11
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                        message: appState.toast.message,
                        type: appState.toast.type,
                        isVisible: appState.toast.isVisible,
                        onClose: hideToast
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 488,
                        columnNumber: 11
                    }, _this)
                ]
            }, void 0, true);
        case 'mobile-preview':
            var _appState_previewingMenu1;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$MobileGuestExperience$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MobileGuestExperience"], {
                        menuName: (_appState_previewingMenu1 = appState.previewingMenu) === null || _appState_previewingMenu1 === void 0 ? void 0 : _appState_previewingMenu1.name,
                        onBack: navigateToMenuManagement,
                        onOrderClick: navigateToMobileMenuOrdering
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 499,
                        columnNumber: 11
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                        message: appState.toast.message,
                        type: appState.toast.type,
                        isVisible: appState.toast.isVisible,
                        onClose: hideToast
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 504,
                        columnNumber: 11
                    }, _this)
                ]
            }, void 0, true);
        case 'edit-menu':
            var _appState_editingMenu1, _appState_editingMenu2, _appState_editingMenu3;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$EditMenuPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditMenuPage"], {
                        menuName: (_appState_editingMenu1 = appState.editingMenu) === null || _appState_editingMenu1 === void 0 ? void 0 : _appState_editingMenu1.name,
                        isNewMenu: (_appState_editingMenu2 = appState.editingMenu) === null || _appState_editingMenu2 === void 0 ? void 0 : _appState_editingMenu2.isNew,
                        sections: (_appState_editingMenu3 = appState.editingMenu) === null || _appState_editingMenu3 === void 0 ? void 0 : _appState_editingMenu3.sections,
                        onBack: navigateToMenuManagement,
                        onSave: saveMenu,
                        onEditSection: navigateToEditSection,
                        onAddAvailabilityHours: navigateToMenuAvailability
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 515,
                        columnNumber: 11
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                        message: appState.toast.message,
                        type: appState.toast.type,
                        isVisible: appState.toast.isVisible,
                        onClose: hideToast
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 524,
                        columnNumber: 11
                    }, _this)
                ]
            }, void 0, true);
        case 'menu-management':
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$MenuManagementPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuManagementPage"], {
                        menus: appState.menus,
                        onEditMenu: navigateToEditMenu,
                        onCreateMenu: createNewMenu,
                        onDeleteMenu: deleteMenu,
                        onPreviewMenu: navigateToMobilePreview,
                        onItemLibraryClick: navigateToItemLibrary
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 536,
                        columnNumber: 11
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                        message: appState.toast.message,
                        type: appState.toast.type,
                        isVisible: appState.toast.isVisible,
                        onClose: hideToast
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 544,
                        columnNumber: 11
                    }, _this)
                ]
            }, void 0, true);
    }
};
_s(AppRouter, "8Z0+HUNMRpKosxfvpnDJft51+D0=");
_c = AppRouter;
var _c;
__turbopack_context__.k.register(_c, "AppRouter");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=2482f_canary-foodandbeverage-prototype_food%20and%20beverage%20prototype_src_ea8c5980._.js.map