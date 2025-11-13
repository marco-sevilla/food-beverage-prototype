module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateMenuModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateMenuModal",
    ()=>CreateMenuModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/react/Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/js/mdi.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const CreateMenuModal = ({ isOpen, onClose, onCreateMenu })=>{
    const [menuName, setMenuName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const handleSubmit = (e)=>{
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
    const handleClose = ()=>{
        setMenuName('');
        setError('');
        onClose();
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow-xl max-w-md w-full mx-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-6 py-4 border-b border-neutral-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-roboto text-subtitle font-semibold text-canary-black-1",
                            children: "Create new menu"
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateMenuModal.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClose,
                            className: "p-1 hover:bg-gray-100 rounded",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiClose"],
                                size: 1,
                                color: "#666666"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateMenuModal.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateMenuModal.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateMenuModal.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "px-6 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block font-roboto text-body-sm font-medium text-canary-black-1 mb-2",
                                    children: "Menu name"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateMenuModal.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: menuName,
                                    onChange: (e)=>{
                                        setMenuName(e.target.value);
                                        if (error) setError('');
                                    },
                                    placeholder: "Breakfast menu, Lunch menu, Happy hour",
                                    className: `w-full h-12 px-4 border rounded font-roboto text-body-sm text-canary-black-1 focus:outline-none focus:ring-2 focus:ring-canary-blue-1 ${error ? 'border-red-400' : 'border-neutral-200'}`,
                                    autoFocus: true
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateMenuModal.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 font-roboto text-caption text-red-600",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateMenuModal.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateMenuModal.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-end gap-3 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleClose,
                                    className: "flex items-center justify-center gap-2 h-10 px-4 bg-transparent text-canary-black-1 border border-neutral-200 rounded font-roboto text-body-sm font-medium cursor-pointer hover:bg-gray-50",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateMenuModal.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "flex items-center justify-center gap-2 h-10 px-4 bg-canary-blue-1 text-white border-none rounded font-roboto text-body-sm font-medium cursor-pointer hover:opacity-90",
                                    children: "Create menu"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateMenuModal.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateMenuModal.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateMenuModal.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateMenuModal.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateMenuModal.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/DeleteMenuModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeleteMenuModal",
    ()=>DeleteMenuModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/react/Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/js/mdi.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const DeleteMenuModal = ({ isOpen, onClose, onDeleteMenu, menuName })=>{
    const handleDelete = ()=>{
        onDeleteMenu();
        onClose();
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow-xl max-w-md w-full mx-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-6 py-4 border-b border-neutral-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-roboto text-subtitle font-semibold text-canary-black-1",
                            children: "Delete menu"
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/DeleteMenuModal.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-1 hover:bg-gray-100 rounded",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiClose"],
                                size: 1,
                                color: "#666666"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/DeleteMenuModal.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/DeleteMenuModal.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/DeleteMenuModal.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/DeleteMenuModal.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-end gap-3 px-6 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "flex items-center justify-center gap-2 h-10 px-4 bg-transparent text-canary-black-1 border border-neutral-200 rounded font-roboto text-body-sm font-medium cursor-pointer hover:bg-gray-50",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/DeleteMenuModal.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleDelete,
                            className: "flex items-center justify-center gap-2 h-10 px-4 bg-canary-red-1 text-white border-none rounded font-roboto text-body-sm font-medium cursor-pointer hover:opacity-90",
                            children: "Delete menu"
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/DeleteMenuModal.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/DeleteMenuModal.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/DeleteMenuModal.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/DeleteMenuModal.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuManagementPage",
    ()=>MenuManagementPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/react/Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$CreateMenuModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateMenuModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$DeleteMenuModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/DeleteMenuModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/js/mdi.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const Tab = ({ children, active = false, onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-start overflow-hidden cursor-pointer",
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center py-1 px-4 gap-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `font-roboto text-body-sm font-medium ${active ? 'text-canary-blue-1' : 'text-canary-black-2'}`,
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                    lineNumber: 42,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                lineNumber: 41,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `h-1 w-full ${active ? 'bg-canary-blue-1' : 'bg-transparent'}`
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                lineNumber: 48,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
        lineNumber: 40,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const Button = ({ children, variant = 'primary', onClick })=>{
    if (variant === 'icon') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClick,
            className: "flex items-center justify-center p-1.5 rounded bg-transparent border-none cursor-pointer hover:bg-gray-50",
            children: children
        }, void 0, false, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "flex items-center justify-center gap-2 h-10 px-4 bg-canary-blue-1 text-white border-none rounded font-roboto text-body-sm font-medium cursor-pointer hover:opacity-90",
        children: children
    }, void 0, false, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const MenuItem = ({ name, entryPoint, onEdit, onDelete, onPreview, isLast = false })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center justify-between py-4 px-4 pr-6 bg-white ${isLast ? '' : 'border-b border-neutral-200'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-48 lg:w-48 md:w-40 sm:w-32 font-roboto text-body-sm font-medium text-canary-black-1 truncate ml-3",
                children: name
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                lineNumber: 96,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-48 lg:w-48 md:w-40 sm:w-32 hidden sm:block font-roboto text-body-sm font-normal text-canary-black-1 truncate",
                children: entryPoint
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                lineNumber: 101,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 w-24 justify-end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        variant: "icon",
                        onClick: onPreview,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiEye"],
                            size: 0.8
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                            lineNumber: 108,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                        lineNumber: 107,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        variant: "icon",
                        onClick: onEdit,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiPencil"],
                            size: 0.8
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                            lineNumber: 111,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                        lineNumber: 110,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        variant: "icon",
                        onClick: onDelete,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiDelete"],
                            size: 0.8,
                            color: "#E40046"
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                            lineNumber: 114,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                        lineNumber: 113,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                lineNumber: 106,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
        lineNumber: 92,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const NavItem = ({ children, icon, active = false, onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `h-10 w-full relative flex items-center cursor-pointer ${active ? 'bg-white rounded mx-2' : ''}`,
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-4 opacity-50 w-6 h-6 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    path: icon,
                    size: 1,
                    color: active ? '#000000' : '#ffffff'
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                    lineNumber: 136,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                lineNumber: 135,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `absolute left-12 font-roboto text-sm font-normal ${active ? 'text-black' : 'text-white'}`,
                children: children
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                lineNumber: 142,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
        lineNumber: 129,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const MenuManagementPage = ({ menus, onEditMenu, onCreateMenu, onDeleteMenu, onPreviewMenu, onItemLibraryClick })=>{
    const [isCreateModalOpen, setIsCreateModalOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [deleteModalState, setDeleteModalState] = __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState({
        isOpen: false,
        menuName: ''
    });
    const handleCreateMenu = (menuName)=>{
        onCreateMenu?.(menuName);
        setIsCreateModalOpen(false);
    };
    const handleDeleteClick = (menuName)=>{
        setDeleteModalState({
            isOpen: true,
            menuName
        });
    };
    const handleDeleteConfirm = ()=>{
        onDeleteMenu?.(deleteModalState.menuName);
        setDeleteModalState({
            isOpen: false,
            menuName: ''
        });
    };
    const handleDeleteCancel = ()=>{
        setDeleteModalState({
            isOpen: false,
            menuName: ''
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen rounded-xl shadow-canary overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-45 bg-canary-black-2 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-16 w-full relative flex items-center bg-canary-black-1 cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-4 opacity-50 w-6 h-6 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiArrowLeft"],
                                    size: 1,
                                    color: "#ffffff"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute left-12 font-roboto text-sm font-medium text-white",
                                children: "Back"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex flex-col gap-6 pt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 pb-4 font-roboto text-xs font-normal text-white opacity-30 uppercase leading-4",
                                        children: "General Settings"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiHome"],
                                                children: "Property Info"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiBrushVariant"],
                                                children: "Branding"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 215,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiAccountMultiple"],
                                                children: "Staff Members"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 216,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiSecurity"],
                                                children: "Security"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 217,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiCog"],
                                                children: "Integrations"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 218,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                lineNumber: 209,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-px bg-white opacity-20"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                lineNumber: 223,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 pb-4 font-roboto text-xs font-normal text-white opacity-30 uppercase leading-4",
                                        children: "Product settings"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiBook"],
                                                children: "Compendium"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 231,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiFoodForkDrink"],
                                                active: true,
                                                children: "F&B Ordering"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 232,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiTrendingUp"],
                                                children: "Upsells"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 233,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiLoginVariant"],
                                                children: "Check-in"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 234,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiLogoutVariant"],
                                                children: "Checkout"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 235,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiMessage"],
                                                children: "Messages"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 236,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiCurrencyUsd"],
                                                children: "Digital Tips"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 237,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiShieldCheck"],
                                                children: "Authorizations"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 238,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiFileDocument"],
                                                children: "Contracts"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 239,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiLink"],
                                                children: "Payment Links"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 240,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 230,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                lineNumber: 226,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col h-full min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border-b border-neutral-200 flex items-center justify-between py-2 px-6 sm:px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-roboto text-body-sm font-medium text-canary-black-1 truncate",
                                        children: "Statler New York"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 251,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiChevronDown"],
                                        size: 0.8
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 254,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                lineNumber: 250,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-full bg-canary-black-5 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-roboto text-caption font-medium text-canary-black-1",
                                                children: "Theresa Webb"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 261,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-roboto text-caption-sm font-normal text-canary-black-4 uppercase",
                                                children: "Operations manager"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 264,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 260,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiChevronDown"],
                                        size: 0.8
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 268,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                        lineNumber: 249,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border-b border-neutral-200 py-4 px-6 sm:px-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-roboto text-subtitle font-medium text-canary-black-1",
                            children: "Food and Beverage Ordering"
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                            lineNumber: 274,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 bg-white py-8 px-10 sm:px-4 md:px-6 flex flex-col gap-6 overflow-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start overflow-x-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tab, {
                                        active: true,
                                        children: "Menus"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 283,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tab, {
                                        onClick: onItemLibraryClick,
                                        children: "Item library"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 284,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tab, {
                                        children: "Settings"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 285,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                lineNumber: 282,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-roboto text-title font-semibold text-canary-black-1 shrink-0",
                                        children: "Menus"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 290,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        onClick: ()=>setIsCreateModalOpen(true),
                                        children: "Create menu"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 293,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between px-4 pb-0 pr-6 sm:pl-4 font-roboto text-caption-sm font-medium text-canary-black-3 uppercase",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-48 lg:w-48 md:w-40 sm:w-32 ml-3",
                                                children: "Menu name"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 300,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-48 lg:w-48 md:w-40 sm:w-32 hidden sm:block",
                                                children: "Entry Points"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 301,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-24 opacity-0 text-right",
                                                children: "Actions"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 302,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 299,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-neutral-200 rounded-lg overflow-hidden",
                                        children: menus.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuItem, {
                                                name: item.name,
                                                entryPoint: item.entryPoint,
                                                isLast: index === menus.length - 1,
                                                onPreview: ()=>onPreviewMenu?.(item.name, item.entryPoint),
                                                onEdit: ()=>onEditMenu?.(item.name, item.entryPoint),
                                                onDelete: ()=>handleDeleteClick(item.name)
                                            }, item.name, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 308,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 306,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                lineNumber: 297,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$CreateMenuModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateMenuModal"], {
                isOpen: isCreateModalOpen,
                onClose: ()=>setIsCreateModalOpen(false),
                onCreateMenu: handleCreateMenu
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                lineNumber: 324,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$DeleteMenuModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeleteMenuModal"], {
                isOpen: deleteModalState.isOpen,
                onClose: handleDeleteCancel,
                onDeleteMenu: handleDeleteConfirm,
                menuName: deleteModalState.menuName
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                lineNumber: 331,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
        lineNumber: 193,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/lib/design-tokens.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
const colors = {
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
const typography = {
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
const spacing = {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem"
};
const borderRadius = {
    sm: "2px",
    default: "4px",
    lg: "8px",
    xl: "12px"
};
const shadows = {
    md: "0 8px 16px 0 rgba(0, 0, 0, 0.16)"
};
}),
"[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateSectionModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateSectionModal",
    ()=>CreateSectionModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/lib/design-tokens.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const CreateSectionModal = ({ isOpen, onClose, onCreateSection })=>{
    const [sectionName, setSectionName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const handleSubmit = (e)=>{
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
    const handleClose = ()=>{
        setSectionName('');
        setError('');
        onClose();
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 flex items-center justify-center z-50 p-4",
        style: {
            backgroundColor: "rgba(0, 0, 0, 0.5)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg w-full max-w-md flex flex-col max-h-[90vh]",
            style: {
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            },
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-6 py-4 border-b shrink-0",
                    style: {
                        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black6
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-[18px] font-semibold",
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black1
                            },
                            children: "Create new menu section"
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateSectionModal.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClose,
                            className: "p-1 rounded hover:bg-gray-100",
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black4
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M15 5L5 15M5 5L15 15",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateSectionModal.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateSectionModal.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateSectionModal.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateSectionModal.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "px-6 py-4 overflow-y-auto flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-[14px] font-medium mb-2",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black1
                                    },
                                    children: "Menu section name*"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateSectionModal.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: sectionName,
                                    onChange: (e)=>{
                                        setSectionName(e.target.value);
                                        if (error) setError('');
                                    },
                                    placeholder: "Mains",
                                    className: `w-full h-12 px-4 rounded text-[14px] focus:outline-none focus:ring-2 ${error ? 'border-2 border-red-400' : 'border-2'}`,
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black1,
                                        borderColor: error ? '#E40046' : __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black6
                                    },
                                    autoFocus: true
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateSectionModal.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-[12px]",
                                    style: {
                                        color: '#E40046'
                                    },
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateSectionModal.tsx",
                                    lineNumber: 101,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateSectionModal.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-end gap-3 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleClose,
                                    className: "flex items-center justify-center h-10 px-4 rounded text-[14px] font-medium cursor-pointer border hover:bg-gray-50 transition-colors",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black1,
                                        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black6,
                                        backgroundColor: 'transparent'
                                    },
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateSectionModal.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "flex items-center justify-center h-10 px-4 rounded text-[14px] font-medium cursor-pointer border-0 text-white hover:opacity-90 transition-opacity",
                                    style: {
                                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].blueDark1
                                    },
                                    children: "Create section"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateSectionModal.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateSectionModal.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateSectionModal.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateSectionModal.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateSectionModal.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditMenuPage",
    ()=>EditMenuPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/react/Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/js/mdi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$CreateSectionModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateSectionModal.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const NavItem = ({ children, icon, active = false, onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `h-10 w-full relative flex items-center cursor-pointer ${active ? 'bg-white rounded mx-2' : ''}`,
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-4 opacity-50 w-6 h-6 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    path: icon,
                    size: 1,
                    color: active ? '#000000' : '#ffffff'
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                    lineNumber: 48,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                lineNumber: 47,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `absolute left-12 font-roboto text-sm font-normal ${active ? 'text-black' : 'text-white'}`,
                children: children
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                lineNumber: 54,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
        lineNumber: 41,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const Button = ({ children, variant = 'primary', onClick })=>{
    if (variant === 'icon') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClick,
            className: "flex items-center justify-center p-1.5 rounded bg-transparent border-none cursor-pointer hover:bg-gray-50",
            children: children
        }, void 0, false, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
            lineNumber: 72,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (variant === 'secondary') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClick,
            className: "flex items-center justify-center gap-2 h-10 px-4 bg-transparent text-canary-black-1 border border-neutral-200 rounded font-roboto text-body-sm font-medium cursor-pointer hover:bg-gray-50",
            children: children
        }, void 0, false, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "flex items-center justify-center gap-2 h-10 px-4 bg-canary-blue-1 text-white border-none rounded font-roboto text-body-sm font-medium cursor-pointer hover:opacity-90",
        children: children
    }, void 0, false, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const ToggleSwitch = ({ checked, onChange })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>onChange(!checked),
        className: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${checked ? 'bg-canary-blue-1' : 'bg-gray-300'}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${checked ? 'translate-x-6' : 'translate-x-1'}`
        }, void 0, false, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
            lineNumber: 115,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
        lineNumber: 109,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const SectionItem = ({ title, subtitle, enabled, onToggle, onEdit, onDelete })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between py-4 px-4 bg-white border-b border-neutral-200 last:border-b-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cursor-move text-canary-black-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiDrag"],
                            size: 1
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                            lineNumber: 144,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                        lineNumber: 143,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-roboto text-body-sm font-medium text-canary-black-1",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 147,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-roboto text-caption text-canary-black-4",
                                children: subtitle
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 150,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                        lineNumber: 146,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                lineNumber: 142,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleSwitch, {
                        checked: enabled,
                        onChange: onToggle
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                        lineNumber: 156,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        variant: "icon",
                        onClick: onEdit,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiPencil"],
                            size: 0.8
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                            lineNumber: 158,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                        lineNumber: 157,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        variant: "icon",
                        onClick: onDelete,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiDelete"],
                            size: 0.8,
                            color: "#E40046"
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                            lineNumber: 161,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                        lineNumber: 160,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                lineNumber: 155,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
        lineNumber: 141,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const EditMenuPage = ({ onBack, menuName = "Lunch menu", isNewMenu = false, onSave, onEditSection })=>{
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(menuName);
    const [sections, setSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(isNewMenu ? [] : [
        {
            id: 'cold',
            title: 'Cold',
            subtitle: '4 items',
            enabled: true
        },
        {
            id: 'mains',
            title: 'Mains',
            subtitle: '5 items',
            enabled: true
        },
        {
            id: 'sides',
            title: 'Sides',
            subtitle: '5 items',
            enabled: true
        }
    ]);
    const [isCreateSectionModalOpen, setIsCreateSectionModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSectionToggle = (id, enabled)=>{
        setSections(sections.map((section)=>section.id === id ? {
                ...section,
                enabled
            } : section));
    };
    const handleSave = ()=>{
        const success = onSave?.(title, isNewMenu || false);
    // onSave handles showing toast messages
    };
    const handleCreateSection = (sectionName)=>{
        const newSection = {
            id: sectionName.toLowerCase().replace(/\s+/g, '-'),
            title: sectionName,
            subtitle: '0 items',
            enabled: true
        };
        setSections([
            ...sections,
            newSection
        ]);
        setIsCreateSectionModalOpen(false);
    };
    const handleDeleteSection = (id)=>{
        setSections(sections.filter((section)=>section.id !== id));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen rounded-xl shadow-canary overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-45 bg-canary-black-2 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-16 w-full relative flex items-center bg-canary-black-1 cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-4 opacity-50 w-6 h-6 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiArrowLeft"],
                                    size: 1,
                                    color: "#ffffff"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                    lineNumber: 226,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute left-12 font-roboto text-sm font-medium text-white",
                                children: "Back"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex flex-col gap-6 pt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 pb-4 font-roboto text-xs font-normal text-white opacity-30 uppercase leading-4",
                                        children: "General Settings"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                        lineNumber: 237,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiHome"],
                                                children: "Property Info"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 241,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiBrushVariant"],
                                                children: "Branding"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 242,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiAccountMultiple"],
                                                children: "Staff Members"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 243,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiSecurity"],
                                                children: "Security"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 244,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiCog"],
                                                children: "Integrations"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 245,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                        lineNumber: 240,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 236,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-px bg-white opacity-20"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 250,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 pb-4 font-roboto text-xs font-normal text-white opacity-30 uppercase leading-4",
                                        children: "Product settings"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                        lineNumber: 254,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiBook"],
                                                children: "Compendium"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 258,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiFoodForkDrink"],
                                                active: true,
                                                children: "F&B Ordering"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 259,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiTrendingUp"],
                                                children: "Upsells"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 260,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiLoginVariant"],
                                                children: "Check-in"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 261,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiLogoutVariant"],
                                                children: "Checkout"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 262,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiMessage"],
                                                children: "Messages"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 263,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiCurrencyUsd"],
                                                children: "Digital Tips"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 264,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiShieldCheck"],
                                                children: "Authorizations"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 265,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiFileDocument"],
                                                children: "Contracts"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 266,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiLink"],
                                                children: "Payment Links"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 267,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                        lineNumber: 257,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 253,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col h-full min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border-b border-neutral-200 flex items-center justify-between py-2 px-6 sm:px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-roboto text-body-sm font-medium text-canary-black-1 truncate",
                                        children: "Statler New York"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                        lineNumber: 278,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiChevronDown"],
                                        size: 0.8
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                        lineNumber: 281,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 277,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-full bg-canary-black-5 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                        lineNumber: 286,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-roboto text-caption font-medium text-canary-black-1",
                                                children: "Theresa Webb"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 288,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-roboto text-caption-sm font-normal text-canary-black-4 uppercase",
                                                children: "Operations manager"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 291,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                        lineNumber: 287,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiChevronDown"],
                                        size: 0.8
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                        lineNumber: 295,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 285,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex bg-white overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 max-w-lg border-r border-neutral-200 flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-b border-neutral-200 py-4 px-6 flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: onBack,
                                                        className: "flex items-center justify-center p-2 hover:bg-gray-50 rounded",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiArrowLeft"],
                                                            size: 1
                                                        }, void 0, false, {
                                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                            lineNumber: 310,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                        lineNumber: 306,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "font-roboto text-subtitle font-medium text-canary-black-1",
                                                        children: isNewMenu ? title || 'New Menu' : menuName
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                        lineNumber: 312,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 305,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                onClick: handleSave,
                                                children: "Save"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 316,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                        lineNumber: 304,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 overflow-auto py-8 px-6 space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border border-neutral-200 rounded-lg p-6 bg-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "font-roboto text-subtitle font-semibold text-canary-black-1 mb-6",
                                                        children: "Basic info"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                        lineNumber: 323,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block font-roboto text-body-sm font-medium text-canary-black-1 mb-2",
                                                                children: "Title*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                                lineNumber: 327,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: title,
                                                                onChange: (e)=>setTitle(e.target.value),
                                                                className: "w-full h-12 px-4 border border-neutral-200 rounded font-roboto text-body-sm text-canary-black-1 focus:outline-none focus:ring-2 focus:ring-canary-blue-1",
                                                                placeholder: "Enter menu title"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                                lineNumber: 330,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                        lineNumber: 326,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 322,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border border-neutral-200 rounded-lg p-6 bg-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "font-roboto text-subtitle font-semibold text-canary-black-1",
                                                                children: "Sections"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                                lineNumber: 343,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                                variant: "icon",
                                                                onClick: ()=>setIsCreateSectionModalOpen(true),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiPlus"],
                                                                    size: 1
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                                    lineNumber: 347,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                                lineNumber: 346,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                        lineNumber: 342,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border border-neutral-200 rounded-lg overflow-hidden",
                                                        children: sections.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "py-8 px-4 text-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-canary-black-4 font-roboto text-body-sm",
                                                                children: "No sections yet. Click the + button to add your first section."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                                lineNumber: 353,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                            lineNumber: 352,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)) : sections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionItem, {
                                                                title: section.title,
                                                                subtitle: section.subtitle,
                                                                enabled: section.enabled,
                                                                onToggle: (enabled)=>handleSectionToggle(section.id, enabled),
                                                                onEdit: ()=>onEditSection?.(section.id),
                                                                onDelete: ()=>handleDeleteSection(section.id)
                                                            }, section.id, false, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                                lineNumber: 359,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                        lineNumber: 350,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 341,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border border-neutral-200 rounded-lg p-6 bg-white",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "font-roboto text-subtitle font-semibold text-canary-black-1",
                                                            children: "Availability"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                            lineNumber: 376,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "font-roboto text-body-sm text-canary-blue-1 hover:underline",
                                                            children: "Add hours"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                            lineNumber: 379,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 374,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                        lineNumber: 320,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 302,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 bg-canary-black-6 flex items-center justify-center"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 388,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                lineNumber: 274,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$CreateSectionModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateSectionModal"], {
                isOpen: isCreateSectionModalOpen,
                onClose: ()=>setIsCreateSectionModalOpen(false),
                onCreateSection: handleCreateSection
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                lineNumber: 395,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
        lineNumber: 220,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ItemLibraryPage",
    ()=>ItemLibraryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/react/Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/js/mdi.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const Tab = ({ children, active = false, onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-start overflow-hidden cursor-pointer",
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center py-1 px-4 gap-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `font-roboto text-body-sm font-medium ${active ? 'text-canary-blue-1' : 'text-canary-black-2'}`,
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                    lineNumber: 41,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                lineNumber: 40,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `h-1 w-full ${active ? 'bg-canary-blue-1' : 'bg-transparent'}`
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                lineNumber: 47,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const Button = ({ children, variant = 'primary', onClick })=>{
    if (variant === 'icon') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClick,
            className: "flex items-center justify-center p-1.5 rounded bg-transparent border-none cursor-pointer hover:bg-gray-50",
            children: children
        }, void 0, false, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "flex items-center justify-center gap-2 h-10 px-4 bg-canary-blue-1 text-white border-none rounded font-roboto text-body-sm font-medium cursor-pointer hover:opacity-90",
        children: children
    }, void 0, false, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const ToggleSwitch = ({ checked, onChange })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>onChange(!checked),
        className: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${checked ? 'bg-canary-blue-1' : 'bg-gray-300'}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${checked ? 'translate-x-6' : 'translate-x-1'}`
        }, void 0, false, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
            lineNumber: 93,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
        lineNumber: 87,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const FoodItem = ({ id, name, image, menus, price, available, onToggle, onEdit, onDelete, isLast = false })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center justify-between py-4 px-4 pr-6 bg-white ${isLast ? '' : 'border-b border-neutral-200'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 w-72 lg:w-72 md:w-60 sm:w-48",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: image,
                        alt: name,
                        className: "w-10 h-10 rounded object-cover"
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                        lineNumber: 132,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-roboto text-body-sm font-medium text-canary-black-1 truncate",
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                        lineNumber: 137,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                lineNumber: 131,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-56 lg:w-56 md:w-44 sm:w-36 font-roboto text-body-sm font-normal text-canary-black-1 truncate",
                children: menus.join(', ')
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                lineNumber: 143,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-20 font-roboto text-body-sm font-normal text-canary-black-1",
                children: [
                    "$",
                    price.toFixed(2)
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                lineNumber: 148,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 w-32 justify-end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleSwitch, {
                        checked: available,
                        onChange: (checked)=>onToggle(id, checked)
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                        lineNumber: 154,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        variant: "icon",
                        onClick: ()=>onEdit(id),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiPencil"],
                            size: 0.8
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                            lineNumber: 156,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                        lineNumber: 155,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        variant: "icon",
                        onClick: ()=>onDelete(id),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiDelete"],
                            size: 0.8,
                            color: "#E40046"
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                            lineNumber: 159,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                        lineNumber: 158,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                lineNumber: 153,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
        lineNumber: 127,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const NavItem = ({ children, icon, active = false, onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `h-10 w-full relative flex items-center cursor-pointer ${active ? 'bg-white rounded mx-2' : ''}`,
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-4 opacity-50 w-6 h-6 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    path: icon,
                    size: 1,
                    color: active ? '#000000' : '#ffffff'
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                    lineNumber: 181,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                lineNumber: 180,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `absolute left-12 font-roboto text-sm font-normal ${active ? 'text-black' : 'text-white'}`,
                children: children
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                lineNumber: 187,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
        lineNumber: 174,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
// Sample food items data
const sampleFoodItems = [
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
const ItemLibraryPage = ({ onBack, onTabChange, onEditItem })=>{
    const [foodItems, setFoodItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(sampleFoodItems);
    const handleItemToggle = (id, available)=>{
        setFoodItems((items)=>items.map((item)=>item.id === id ? {
                    ...item,
                    available
                } : item));
    };
    const handleItemEdit = (id)=>{
        onEditItem?.(id);
    };
    const handleItemDelete = (id)=>{
        console.log('Delete item:', id);
    };
    const handleCreateItem = ()=>{
        console.log('Create new item');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen rounded-xl shadow-canary overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-45 bg-canary-black-2 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-16 w-full relative flex items-center bg-canary-black-1 cursor-pointer",
                        onClick: onBack,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-4 opacity-50 w-6 h-6 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiArrowLeft"],
                                    size: 1,
                                    color: "#ffffff"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                    lineNumber: 288,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                lineNumber: 287,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute left-12 font-roboto text-sm font-medium text-white",
                                children: "Back"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                lineNumber: 290,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                        lineNumber: 286,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex flex-col gap-6 pt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 pb-4 font-roboto text-xs font-normal text-white opacity-30 uppercase leading-4",
                                        children: "General Settings"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                        lineNumber: 299,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiHome"],
                                                children: "Property Info"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 303,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiBrushVariant"],
                                                children: "Branding"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 304,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiAccountMultiple"],
                                                children: "Staff Members"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 305,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiSecurity"],
                                                children: "Security"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 306,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiCog"],
                                                children: "Integrations"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 307,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                        lineNumber: 302,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                lineNumber: 298,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-px bg-white opacity-20"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                lineNumber: 312,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 pb-4 font-roboto text-xs font-normal text-white opacity-30 uppercase leading-4",
                                        children: "Product settings"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                        lineNumber: 316,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiBook"],
                                                children: "Compendium"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 320,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiFoodForkDrink"],
                                                active: true,
                                                children: "F&B Ordering"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 321,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiTrendingUp"],
                                                children: "Upsells"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 322,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiLoginVariant"],
                                                children: "Check-in"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 323,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiLogoutVariant"],
                                                children: "Checkout"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 324,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiMessage"],
                                                children: "Messages"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 325,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiCurrencyUsd"],
                                                children: "Digital Tips"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 326,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiShieldCheck"],
                                                children: "Authorizations"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 327,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiFileDocument"],
                                                children: "Contracts"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 328,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiLink"],
                                                children: "Payment Links"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 329,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                        lineNumber: 319,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                lineNumber: 315,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                        lineNumber: 296,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                lineNumber: 284,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col h-full min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border-b border-neutral-200 flex items-center justify-between py-2 px-6 sm:px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-roboto text-body-sm font-medium text-canary-black-1 truncate",
                                        children: "Statler New York"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                        lineNumber: 340,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiChevronDown"],
                                        size: 0.8
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                        lineNumber: 343,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                lineNumber: 339,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-full bg-canary-black-5 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                        lineNumber: 348,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-roboto text-caption font-medium text-canary-black-1",
                                                children: "Theresa Webb"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 350,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-roboto text-caption-sm font-normal text-canary-black-4 uppercase",
                                                children: "Operations manager"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 353,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                        lineNumber: 349,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiChevronDown"],
                                        size: 0.8
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                        lineNumber: 357,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                lineNumber: 347,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                        lineNumber: 338,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border-b border-neutral-200 py-4 px-6 sm:px-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-roboto text-subtitle font-medium text-canary-black-1",
                            children: "Food and Beverage Ordering"
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                            lineNumber: 363,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                        lineNumber: 362,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 bg-white py-8 px-10 sm:px-4 md:px-6 flex flex-col gap-6 overflow-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start overflow-x-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tab, {
                                        onClick: ()=>onTabChange?.('menus'),
                                        children: "Menus"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                        lineNumber: 372,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tab, {
                                        active: true,
                                        onClick: ()=>onTabChange?.('item-library'),
                                        children: "Item library"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                        lineNumber: 373,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tab, {
                                        onClick: ()=>onTabChange?.('settings'),
                                        children: "Settings"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                        lineNumber: 374,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                lineNumber: 371,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-roboto text-title font-semibold text-canary-black-1 shrink-0",
                                        children: "Item library"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                        lineNumber: 379,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        onClick: handleCreateItem,
                                        children: "Create new item"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                        lineNumber: 382,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                lineNumber: 378,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between px-4 pb-0 pr-6 sm:pl-4 font-roboto text-caption-sm font-medium text-canary-black-3 uppercase",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-72 lg:w-72 md:w-60 sm:w-48 ml-3",
                                                children: "Item"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 389,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-56 lg:w-56 md:w-44 sm:w-36",
                                                children: "Menus"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 390,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-20",
                                                children: "Price"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 391,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-32 text-right",
                                                children: "Availability"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                                lineNumber: 392,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                        lineNumber: 388,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-neutral-200 rounded-lg overflow-hidden",
                                        children: foodItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FoodItem, {
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
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                        lineNumber: 396,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                                lineNumber: 386,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                        lineNumber: 369,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
                lineNumber: 336,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx",
        lineNumber: 282,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditItemPage",
    ()=>EditItemPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/react/Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/lib/design-tokens.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/js/mdi.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const NavItem = ({ children, icon, active = false, onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `h-10 w-full relative flex items-center cursor-pointer ${active ? 'bg-white rounded mx-2' : ''}`,
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-4 opacity-50 w-6 h-6 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    path: icon,
                    size: 1,
                    color: active ? '#000000' : '#ffffff'
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                    lineNumber: 46,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                lineNumber: 45,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `absolute left-12 font-roboto text-sm font-normal ${active ? 'text-black' : 'text-white'}`,
                children: children
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                lineNumber: 52,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const Button = ({ children, variant = 'primary', onClick, type = 'button' })=>{
    if (variant === 'icon') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: type,
            onClick: onClick,
            className: "flex items-center justify-center p-2 rounded bg-transparent border-none cursor-pointer hover:bg-gray-50",
            children: children
        }, void 0, false, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (variant === 'secondary') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: type,
            onClick: onClick,
            className: "flex items-center justify-center gap-2 h-10 px-4 bg-transparent text-canary-black-1 border border-neutral-200 rounded font-roboto text-body-sm font-medium cursor-pointer hover:bg-gray-50",
            children: children
        }, void 0, false, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        onClick: onClick,
        className: "flex items-center justify-center gap-2 h-10 px-4 bg-canary-blue-1 text-white border-none rounded font-roboto text-body-sm font-medium cursor-pointer hover:opacity-90",
        children: children
    }, void 0, false, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const Input = ({ label, value, onChange, placeholder, required = false, type = 'text' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "font-roboto text-body-sm font-medium text-canary-black-1",
                children: [
                    label,
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-red-500 ml-1",
                        children: "*"
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                        lineNumber: 125,
                        columnNumber: 20
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                lineNumber: 123,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: type,
                value: value,
                onChange: (e)=>onChange(e.target.value),
                placeholder: placeholder,
                className: "w-full h-12 px-4 border border-neutral-200 rounded font-roboto text-body-sm text-canary-black-1 focus:outline-none focus:ring-2 focus:ring-canary-blue-1 focus:border-canary-blue-1"
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                lineNumber: 127,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
        lineNumber: 122,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const Textarea = ({ label, value, onChange, placeholder, rows = 4 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "font-roboto text-body-sm font-medium text-canary-black-1",
                children: label
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                lineNumber: 154,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                value: value,
                onChange: (e)=>onChange(e.target.value),
                placeholder: placeholder,
                rows: rows,
                className: "w-full px-4 py-3 border border-neutral-200 rounded font-roboto text-body-sm text-canary-black-1 focus:outline-none focus:ring-2 focus:ring-canary-blue-1 focus:border-canary-blue-1 resize-vertical"
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                lineNumber: 157,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
        lineNumber: 153,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const ImageUpload = ({ label, image, onImageChange })=>{
    const handleFileChange = (event)=>{
        const file = event.target.files?.[0];
        if (file) {
            // In a real app, you'd upload to a server and get back a URL
            // For now, we'll create a local URL for preview
            const imageUrl = URL.createObjectURL(file);
            onImageChange(imageUrl);
        }
    };
    const handleRemoveImage = ()=>{
        onImageChange(undefined);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "font-roboto text-body-sm font-medium text-canary-black-1",
                children: label
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: image,
                        alt: "Item",
                        className: "w-full h-48 object-cover rounded border border-neutral-200"
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-2 right-2 flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                variant: "icon",
                                onClick: handleRemoveImage,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiDelete"],
                                    size: 0.8,
                                    color: "#E40046"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                    lineNumber: 204,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                lineNumber: 203,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                variant: "icon",
                                onClick: ()=>document.getElementById('image-upload')?.click(),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiPencil"],
                                    size: 0.8
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                    lineNumber: 207,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                lineNumber: 206,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                        lineNumber: 202,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                lineNumber: 196,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-48 border-2 border-dashed border-neutral-300 rounded flex flex-col items-center justify-center cursor-pointer hover:border-canary-blue-1 transition-colors",
                onClick: ()=>document.getElementById('image-upload')?.click(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiUpload"],
                        size: 2,
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black4
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                        lineNumber: 216,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mt-2 font-roboto text-body-sm text-canary-black-4",
                        children: "Click to upload image"
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                        lineNumber: 217,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mt-1 font-roboto text-caption text-canary-black-4",
                        children: "PNG, JPG, GIF up to 10MB"
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                        lineNumber: 220,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                lineNumber: 212,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: "image-upload",
                type: "file",
                accept: "image/*",
                onChange: handleFileChange,
                className: "hidden"
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
        lineNumber: 190,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const EditItemPage = ({ item, onBack, onSave })=>{
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        id: item?.id || '',
        name: item?.name || '',
        description: item?.description || '',
        price: item?.price || 0,
        image: item?.image
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const handleSave = ()=>{
        // Validation
        const newErrors = {};
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
        onSave?.(formData);
    };
    const updateFormData = (field, value)=>{
        setFormData((prev)=>({
                ...prev,
                [field]: value
            }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors((prev)=>({
                    ...prev,
                    [field]: ''
                }));
        }
    };
    const isNewItem = !item || !item.id;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen rounded-xl shadow-canary overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-45 bg-canary-black-2 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-16 w-full relative flex items-center bg-canary-black-1 cursor-pointer",
                        onClick: onBack,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-4 opacity-50 w-6 h-6 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiArrowLeft"],
                                    size: 1,
                                    color: "#ffffff"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                    lineNumber: 313,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                lineNumber: 312,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute left-12 font-roboto text-sm font-medium text-white",
                                children: "Back"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                lineNumber: 315,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                        lineNumber: 311,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex flex-col gap-6 pt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 pb-4 font-roboto text-xs font-normal text-white opacity-30 uppercase leading-4",
                                        children: "General Settings"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                        lineNumber: 324,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiHome"],
                                                children: "Property Info"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 328,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiBrushVariant"],
                                                children: "Branding"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 329,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiAccountMultiple"],
                                                children: "Staff Members"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 330,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiSecurity"],
                                                children: "Security"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 331,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiCog"],
                                                children: "Integrations"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 332,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                        lineNumber: 327,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                lineNumber: 323,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-px bg-white opacity-20"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                lineNumber: 337,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 pb-4 font-roboto text-xs font-normal text-white opacity-30 uppercase leading-4",
                                        children: "Product settings"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                        lineNumber: 341,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiBook"],
                                                children: "Compendium"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 345,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiFoodForkDrink"],
                                                active: true,
                                                children: "F&B Ordering"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 346,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiTrendingUp"],
                                                children: "Upsells"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 347,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiLoginVariant"],
                                                children: "Check-in"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 348,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiLogoutVariant"],
                                                children: "Checkout"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 349,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiMessage"],
                                                children: "Messages"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 350,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiCurrencyUsd"],
                                                children: "Digital Tips"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 351,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiShieldCheck"],
                                                children: "Authorizations"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 352,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiFileDocument"],
                                                children: "Contracts"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 353,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiLink"],
                                                children: "Payment Links"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 354,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                        lineNumber: 344,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                lineNumber: 340,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                        lineNumber: 321,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                lineNumber: 309,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col h-full min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border-b border-neutral-200 flex items-center justify-between py-2 px-6 sm:px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-roboto text-body-sm font-medium text-canary-black-1 truncate",
                                        children: "Statler New York"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                        lineNumber: 365,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiChevronDown"],
                                        size: 0.8
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                        lineNumber: 368,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                lineNumber: 364,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-full bg-canary-black-5 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                        lineNumber: 373,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-roboto text-caption font-medium text-canary-black-1",
                                                children: "Theresa Webb"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 375,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-roboto text-caption-sm font-normal text-canary-black-4 uppercase",
                                                children: "Operations manager"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 378,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                        lineNumber: 374,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiChevronDown"],
                                        size: 0.8
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                        lineNumber: 382,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                lineNumber: 372,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                        lineNumber: 363,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex bg-white overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 max-w-lg border-r border-neutral-200 flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-b border-neutral-200 py-4 px-6 flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: onBack,
                                                        className: "flex items-center justify-center p-2 hover:bg-gray-50 rounded",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiArrowLeft"],
                                                            size: 1
                                                        }, void 0, false, {
                                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                            lineNumber: 397,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                        lineNumber: 393,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "font-roboto text-subtitle font-medium text-canary-black-1",
                                                        children: isNewItem ? 'Create item' : 'Edit item'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                        lineNumber: 399,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 392,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                onClick: handleSave,
                                                children: "Save"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 403,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                        lineNumber: 391,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 overflow-auto py-8 px-6 space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border border-neutral-200 rounded-lg p-6 bg-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "font-roboto text-subtitle font-semibold text-canary-black-1 mb-6",
                                                        children: "Basic info"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                        lineNumber: 410,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                                        label: "Title",
                                                                        value: formData.name,
                                                                        onChange: (value)=>updateFormData('name', value),
                                                                        placeholder: "Enter item title",
                                                                        required: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                                        lineNumber: 417,
                                                                        columnNumber: 21
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-1 text-sm text-red-500",
                                                                        children: errors.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                                        lineNumber: 425,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                                lineNumber: 416,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                                                                label: "Description",
                                                                value: formData.description,
                                                                onChange: (value)=>updateFormData('description', value),
                                                                placeholder: "Enter item description",
                                                                rows: 3
                                                            }, void 0, false, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                                lineNumber: 430,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                                        label: "Price",
                                                                        value: formData.price.toString(),
                                                                        onChange: (value)=>updateFormData('price', parseFloat(value) || 0),
                                                                        placeholder: "0.00",
                                                                        type: "number"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                                        lineNumber: 440,
                                                                        columnNumber: 21
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    errors.price && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-1 text-sm text-red-500",
                                                                        children: errors.price
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                                        lineNumber: 448,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                                lineNumber: 439,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                        lineNumber: 414,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 409,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border border-neutral-200 rounded-lg p-6 bg-white",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageUpload, {
                                                    label: "Image",
                                                    image: formData.image,
                                                    onImageChange: (image)=>updateFormData('image', image)
                                                }, void 0, false, {
                                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                    lineNumber: 456,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                                lineNumber: 455,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                        lineNumber: 407,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                lineNumber: 389,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 bg-canary-black-6 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-canary-black-4 font-roboto text-body-sm",
                                    children: "Mobile preview (coming soon)"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                    lineNumber: 467,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                                lineNumber: 466,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                        lineNumber: 387,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
                lineNumber: 361,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx",
        lineNumber: 307,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileGuestExperience",
    ()=>MobileGuestExperience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/react/Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/js/mdi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/lib/design-tokens.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const MobileGuestExperience = ({ onBack, onOrderClick, menuName = "In-room dining" })=>{
    // Placeholder image URL (hotel breakfast scene)
    const headerImageUrl = "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=430&h=230&fit=crop&crop=center";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-screen bg-gray-100 p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onBack,
                className: "fixed top-8 left-8 z-50 flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 rounded font-roboto text-body-sm font-medium hover:bg-gray-50 shadow-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiArrowLeft"],
                        size: 0.8
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    "Back to Menu Management"
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative bg-white overflow-hidden shadow-xl",
                style: {
                    width: '430px',
                    height: '932px',
                    borderRadius: '44px',
                    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.16)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full h-[230px] overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: headerImageUrl,
                                alt: "In-room dining",
                                className: "w-full h-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-9 left-1/2 transform -translate-x-1/2 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1.5 h-1.5 bg-white/40 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 bg-white rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1.5 h-1.5 bg-white/40 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1.5 h-1.5 bg-white/40 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-4 left-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex items-center justify-center w-12 h-12 bg-white rounded shadow-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiArrowLeft"],
                                        size: 1,
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black1
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-[32px] font-medium leading-[48px]",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black1,
                                                fontFamily: 'Roboto, sans-serif'
                                            },
                                            children: menuName
                                        }, void 0, false, {
                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiMapMarker"],
                                                size: 0.8,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black1
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[14px] font-normal leading-[22px]",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black1,
                                                    fontFamily: 'Roboto, sans-serif'
                                                },
                                                children: "The Statler Hotel New York • Deliver to Room 365"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                lineNumber: 95,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onOrderClick,
                                        className: "w-full h-12 rounded-lg flex items-center justify-between px-2",
                                        style: {
                                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-6 h-6 opacity-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiArrowRight"],
                                                    size: 1,
                                                    color: "white"
                                                }, void 0, false, {
                                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                lineNumber: 112,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-6 h-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiArrowRight"],
                                                    size: 1,
                                                    color: "white"
                                                }, void 0, false, {
                                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                lineNumber: 121,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[16px] font-normal leading-[24px]",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black1,
                                        fontFamily: 'Roboto, sans-serif'
                                    },
                                    children: "Experience in-room dining at its finest with our curated breakfast, lunch, and dinner selections. Enjoy a delightful array of farm-fresh eggs, artisanal pastries, and seasonal fruits, all delivered to your door. Start your day with a gourmet meal that captures the essence of local flavors, all while taking in stunning city skyline views from the comfort of your room."
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 pb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border rounded-lg overflow-hidden",
                                    style: {
                                        borderColor: 'rgba(0,0,0,0.1)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between p-4 border-b",
                                            style: {
                                                borderColor: 'rgba(0,0,0,0.1)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiPhone"],
                                                            size: 0.8,
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black4
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                            lineNumber: 152,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[16px] font-normal leading-[24px]",
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black1,
                                                                fontFamily: 'Roboto, sans-serif'
                                                            },
                                                            children: "(410) 633-9500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                            lineNumber: 153,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiArrowRight"],
                                                    size: 0.8,
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black1
                                                }, void 0, false, {
                                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between p-4 border-b",
                                            style: {
                                                borderColor: 'rgba(0,0,0,0.1)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiEmail"],
                                                            size: 0.8,
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black4
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                            lineNumber: 172,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[16px] font-normal leading-[24px]",
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black1,
                                                                fontFamily: 'Roboto, sans-serif'
                                                            },
                                                            children: "roomservice@statler.com"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                            lineNumber: 173,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiArrowRight"],
                                                    size: 0.8,
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black1
                                                }, void 0, false, {
                                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                            lineNumber: 167,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between p-4 border-b",
                                            style: {
                                                borderColor: 'rgba(0,0,0,0.1)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiOpenInNew"],
                                                            size: 0.8,
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black4
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                            lineNumber: 192,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[16px] font-normal leading-[24px]",
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black1,
                                                                fontFamily: 'Roboto, sans-serif'
                                                            },
                                                            children: "Visit website"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                            lineNumber: 193,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiArrowRight"],
                                                    size: 0.8,
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black1
                                                }, void 0, false, {
                                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                            lineNumber: 187,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between p-4 bg-neutral-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiClockOutline"],
                                                            size: 0.8,
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black4
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                            lineNumber: 209,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[16px] font-normal leading-[24px]",
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black1,
                                                                fontFamily: 'Roboto, sans-serif'
                                                            },
                                                            children: "Open • Closes 05:00 PM"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiArrowRight"],
                                                    size: 0.8,
                                                    style: {
                                                        color: '#8C1836'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                            lineNumber: 207,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 pb-6 flex flex-col items-center gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-32 h-10 border border-gray-300 rounded flex items-center justify-between px-2",
                                        style: {
                                            backgroundColor: 'white'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[14px] font-normal",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black1,
                                                    fontFamily: 'Roboto, sans-serif'
                                                },
                                                children: "English"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                lineNumber: 232,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiUnfoldMoreHorizontal"],
                                                size: 0.8,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black1
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                lineNumber: 241,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                        lineNumber: 228,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-5 h-3 bg-gray-300 rounded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                                lineNumber: 256,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                        lineNumber: 245,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileMenuOrdering",
    ()=>MobileMenuOrdering
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/react/Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/js/mdi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/lib/design-tokens.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const CanaryButton = ({ children, onClick, variant = 'primary', icon, iconPosition = 'left', className = '' })=>{
    const baseClasses = "inline-flex items-center justify-center font-roboto font-medium transition-all duration-200 outline-none";
    const variantClasses = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 rounded",
        outlined: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 h-10 px-4 rounded",
        text: "bg-transparent text-gray-700 hover:text-black h-10 px-4",
        icon: "bg-transparent text-gray-700 hover:text-black w-10 h-10 rounded-full hover:bg-gray-100"
    };
    const iconClasses = variant === 'icon' ? "w-6 h-6" : "w-5 h-5";
    const spacing = variant === 'icon' ? "" : iconPosition === 'left' ? "mr-2" : "ml-2";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(baseClasses, variantClasses[variant], className),
        children: [
            icon && iconPosition === 'left' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(iconClasses, spacing),
                children: icon
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            variant !== 'icon' && children,
            icon && iconPosition === 'right' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(iconClasses, spacing),
                children: icon
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const CanarySelect = ({ options, value, onChange, placeholder })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: value,
                onChange: onChange,
                className: "w-full h-12 px-4 pr-10 bg-white border border-gray-300 rounded font-roboto text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none",
                children: [
                    placeholder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        disabled: true,
                        children: placeholder
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: option.value,
                            children: option.label
                        }, option.value, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiChevronDown"],
                    size: 0.8,
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black3
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const MobileMenuOrdering = ({ onBack, menuName = "Breakfast menu", menus = [] })=>{
    const [selectedMenuName, setSelectedMenuName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(menuName);
    const [selectedSection, setSelectedSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('cold');
    // Convert menus to CanarySelect options format
    const menuOptions = menus.map((menu)=>({
            label: menu.name,
            value: menu.name
        }));
    // Sample menu sections - since item creation flow hasn't been built yet, we'll show empty sections
    const menuSections = [
        {
            id: 'cold',
            name: 'Cold',
            items: []
        },
        {
            id: 'mains',
            name: 'Mains',
            items: []
        },
        {
            id: 'beverages',
            name: 'Beverages',
            items: []
        }
    ];
    const handleMenuSelect = (event)=>{
        setSelectedMenuName(event.target.value);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-screen bg-gray-100 p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-8 left-8 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CanaryButton, {
                    onClick: onBack,
                    variant: "outlined",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiArrowLeft"],
                        size: 0.8
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                        lineNumber: 150,
                        columnNumber: 17
                    }, void 0),
                    iconPosition: "left",
                    children: "Back to Mobile Landing"
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative bg-white overflow-hidden shadow-xl",
                style: {
                    width: '430px',
                    height: '932px',
                    borderRadius: '44px',
                    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.16)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-4 py-3 bg-white border-b border-neutral-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CanaryButton, {
                                onClick: onBack,
                                variant: "icon",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiArrowLeft"],
                                    size: 1
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                    lineNumber: 172,
                                    columnNumber: 19
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-roboto text-[16px] font-semibold text-center",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black1
                                },
                                children: "In-room dining"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-4 border-b border-neutral-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CanarySelect, {
                            options: menuOptions,
                            value: selectedMenuName,
                            onChange: handleMenuSelect,
                            placeholder: "Select a menu"
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-roboto text-[24px] font-semibold",
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black1
                            },
                            children: selectedMenuName
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 pb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex border-b border-neutral-200",
                            children: menuSections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CanaryButton, {
                                    onClick: ()=>setSelectedSection(section.id),
                                    variant: "text",
                                    className: `flex-1 border-b-2 transition-colors !rounded-none ${selectedSection === section.id ? 'border-black !text-black' : 'border-transparent !text-gray-600 hover:!text-black'}`,
                                    children: section.name
                                }, section.id, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                    lineNumber: 209,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                            lineNumber: 207,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 px-4 pb-4 overflow-y-auto",
                        children: (()=>{
                            const currentSection = menuSections.find((section)=>section.id === selectedSection);
                            if (!currentSection || currentSection.items.length === 0) {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center justify-center py-16 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-16 rounded-full mb-4 flex items-center justify-center",
                                            style: {
                                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black6
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiClose"],
                                                size: 1.5,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black4
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                                lineNumber: 237,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                            lineNumber: 233,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-roboto text-[18px] font-semibold mb-2",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black1
                                            },
                                            children: [
                                                "No items in ",
                                                currentSection?.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                            lineNumber: 239,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-roboto text-[14px] max-w-64",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black4
                                            },
                                            children: "This section doesn't have any items yet. Check back later for delicious options!"
                                        }, void 0, false, {
                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                            lineNumber: 245,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                    lineNumber: 232,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0));
                            }
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: currentSection.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3 p-3 border border-neutral-200 rounded-lg",
                                        children: [
                                            item.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: item.image,
                                                alt: item.name,
                                                className: "w-16 h-16 rounded-lg object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                                lineNumber: 260,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-roboto text-[16px] font-semibold mb-1",
                                                        style: {
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black1
                                                        },
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                                        lineNumber: 267,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-roboto text-[14px] mb-2",
                                                        style: {
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black4
                                                        },
                                                        children: item.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                                        lineNumber: 273,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-roboto text-[16px] font-semibold",
                                                        style: {
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black1
                                                        },
                                                        children: [
                                                            "$",
                                                            item.price.toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                                lineNumber: 266,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                        lineNumber: 258,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                lineNumber: 256,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        })()
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
        lineNumber: 144,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddItemsModal",
    ()=>AddItemsModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/react/Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/js/mdi.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const Button = ({ children, variant = 'primary', onClick, disabled = false })=>{
    if (variant === 'secondary') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClick,
            disabled: disabled,
            className: `flex items-center justify-center gap-2 h-10 px-4 bg-transparent text-canary-blue-1 border border-canary-blue-1 rounded font-roboto text-body-sm font-medium cursor-pointer hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed`,
            children: children
        }, void 0, false, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        disabled: disabled,
        className: `flex items-center justify-center gap-2 h-10 px-4 bg-canary-blue-1 text-white border-none rounded font-roboto text-body-sm font-medium cursor-pointer hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed`,
        children: children
    }, void 0, false, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const Checkbox = ({ checked, onChange, disabled = false })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>!disabled && onChange(!checked),
        disabled: disabled,
        className: `flex items-center justify-center w-6 h-6 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 ${checked ? 'bg-canary-blue-1 border-canary-blue-1' : disabled ? 'border-gray-300' : 'border-gray-400'} border-2 rounded`,
        children: checked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiCheck"],
            size: 0.75,
            color: "white"
        }, void 0, false, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
            lineNumber: 69,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
        lineNumber: 57,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const ItemRow = ({ item, isSelected, isDisabled, onSelectionChange, isLast = false })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center justify-between py-4 px-4 bg-white ${isLast ? '' : 'border-b border-neutral-200'} ${isDisabled ? 'opacity-50' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 w-36",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: item.image,
                        alt: item.name,
                        className: "w-8 h-8 rounded object-cover"
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                        lineNumber: 99,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-roboto text-body-sm font-medium text-canary-black-1 truncate",
                        children: item.name
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                        lineNumber: 104,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                lineNumber: 98,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-36 font-roboto text-body-sm font-normal text-canary-black-1 truncate",
                children: item.menus.join(', ')
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                lineNumber: 110,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-16 font-roboto text-body-sm font-normal text-canary-black-1",
                children: [
                    "$",
                    item.price.toFixed(2)
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                lineNumber: 115,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-6 flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Checkbox, {
                    checked: isSelected,
                    onChange: (checked)=>onSelectionChange(item.id, checked),
                    disabled: isDisabled
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                    lineNumber: 121,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                lineNumber: 120,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
        lineNumber: 94,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const AddItemsModal = ({ isOpen, onClose, onAddItems, onGoToItemLibrary, availableItems, existingItemIds })=>{
    const [selectedItemIds, setSelectedItemIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    if (!isOpen) return null;
    const handleSelectionChange = (itemId, selected)=>{
        const newSelection = new Set(selectedItemIds);
        if (selected) {
            newSelection.add(itemId);
        } else {
            newSelection.delete(itemId);
        }
        setSelectedItemIds(newSelection);
    };
    const handleAddItems = ()=>{
        const selectedItems = availableItems.filter((item)=>selectedItemIds.has(item.id));
        onAddItems(selectedItems);
        setSelectedItemIds(new Set()); // Reset selection
        onClose();
    };
    const handleCancel = ()=>{
        setSelectedItemIds(new Set()); // Reset selection
        onClose();
    };
    const selectedCount = selectedItemIds.size;
    const addButtonText = selectedCount === 0 ? 'Add items' : `Add ${selectedCount} item${selectedCount > 1 ? 's' : ''}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between py-6 px-6 border-b border-neutral-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-roboto text-subtitle font-medium text-canary-black-1",
                            children: "Add items"
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                            lineNumber: 184,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "flex items-center justify-center p-2.5 rounded bg-transparent border-none cursor-pointer hover:bg-gray-50",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiClose"],
                                size: 0.67
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                                lineNumber: 191,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                    lineNumber: 183,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-hidden px-6 pt-6 pb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-4 pb-1 font-roboto text-caption-sm font-medium text-canary-black-3 uppercase",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-36",
                                    children: "Item"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-36",
                                    children: "Menus"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16",
                                    children: "Price"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-6"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border border-neutral-200 rounded-lg overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-h-[600px] overflow-y-auto",
                                children: availableItems.map((item, index)=>{
                                    const isDisabled = existingItemIds.includes(item.id);
                                    const isSelected = selectedItemIds.has(item.id);
                                    const isLast = index === availableItems.length - 1;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemRow, {
                                        item: item,
                                        isSelected: isSelected,
                                        isDisabled: isDisabled,
                                        onSelectionChange: handleSelectionChange,
                                        isLast: isLast
                                    }, item.id, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                                        lineNumber: 214,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0));
                                })
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                            lineNumber: 206,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                    lineNumber: 196,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-6 py-6 border-t border-neutral-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                            variant: "secondary",
                            onClick: onGoToItemLibrary,
                            children: "Go to Item Library"
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                    variant: "secondary",
                                    onClick: handleCancel,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                                    lineNumber: 235,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                    onClick: handleAddItems,
                                    disabled: selectedCount === 0,
                                    children: addButtonText
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
                    lineNumber: 229,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
            lineNumber: 181,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx",
        lineNumber: 180,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditSectionPage",
    ()=>EditSectionPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/react/Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/js/mdi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$AddItemsModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AddItemsModal.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const NavItem = ({ children, icon, active = false, onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `h-10 w-full relative flex items-center cursor-pointer ${active ? 'bg-white rounded mx-2' : ''}`,
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-4 opacity-50 w-6 h-6 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    path: icon,
                    size: 1,
                    color: active ? '#000000' : '#ffffff'
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                    lineNumber: 48,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                lineNumber: 47,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `absolute left-12 font-roboto text-sm font-normal ${active ? 'text-black' : 'text-white'}`,
                children: children
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                lineNumber: 54,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
        lineNumber: 41,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const Button = ({ children, variant = 'primary', onClick, type = 'button' })=>{
    if (variant === 'icon') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: type,
            onClick: onClick,
            className: "flex items-center justify-center p-1.5 rounded bg-transparent border-none cursor-pointer hover:bg-gray-50",
            children: children
        }, void 0, false, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
            lineNumber: 73,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (variant === 'secondary') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: type,
            onClick: onClick,
            className: "flex items-center justify-center gap-2 h-10 px-4 bg-transparent text-canary-black-1 border border-neutral-200 rounded font-roboto text-body-sm font-medium cursor-pointer hover:bg-gray-50",
            children: children
        }, void 0, false, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
            lineNumber: 85,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        onClick: onClick,
        className: "flex items-center justify-center gap-2 h-10 px-4 bg-canary-blue-1 text-white border-none rounded font-roboto text-body-sm font-medium cursor-pointer hover:opacity-90",
        children: children
    }, void 0, false, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const Input = ({ label, value, onChange, placeholder, required = false })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "font-roboto text-body-sm font-medium text-canary-black-1",
                children: [
                    label,
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-red-500 ml-1",
                        children: "*"
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                        lineNumber: 125,
                        columnNumber: 20
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                lineNumber: 123,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                value: value,
                onChange: (e)=>onChange(e.target.value),
                placeholder: placeholder,
                className: "w-full h-12 px-4 border border-neutral-200 rounded font-roboto text-body-sm text-canary-black-1 focus:outline-none focus:ring-2 focus:ring-canary-blue-1 focus:border-canary-blue-1"
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                lineNumber: 127,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
        lineNumber: 122,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const SectionItem = ({ id, name, image, onEdit, onDelete })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3 py-3 px-3 bg-white border border-neutral-200 rounded-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cursor-move text-canary-black-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiDrag"],
                    size: 1
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                    lineNumber: 156,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                lineNumber: 155,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: image,
                alt: name,
                className: "w-10 h-10 rounded object-cover"
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                lineNumber: 160,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex-1 font-roboto text-body-sm font-medium text-canary-black-1",
                children: name
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                lineNumber: 167,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        variant: "icon",
                        onClick: ()=>onEdit(id),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiPencil"],
                            size: 0.8
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                            lineNumber: 174,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                        lineNumber: 173,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        variant: "icon",
                        onClick: ()=>onDelete(id),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiDelete"],
                            size: 0.8,
                            color: "#E40046"
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                            lineNumber: 177,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                        lineNumber: 176,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                lineNumber: 172,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
        lineNumber: 153,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
// Sample items data
const sampleItems = [
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
const sampleFoodItems = [
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
const EditSectionPage = ({ section, onBack, onSave })=>{
    const [sectionData, setSectionData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        id: section?.id || '',
        title: section?.title || 'Mains',
        items: section?.items || sampleItems
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [isAddItemsModalOpen, setIsAddItemsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSave = ()=>{
        // Validation
        const newErrors = {};
        if (!sectionData.title.trim()) {
            newErrors.title = 'Section title is required';
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setErrors({});
        onSave?.(sectionData);
    };
    const updateTitle = (title)=>{
        setSectionData((prev)=>({
                ...prev,
                title
            }));
        // Clear error when user starts typing
        if (errors.title) {
            setErrors((prev)=>({
                    ...prev,
                    title: ''
                }));
        }
    };
    const handleAddItem = ()=>{
        setIsAddItemsModalOpen(true);
    };
    const handleEditItem = (itemId)=>{
        console.log('Edit item:', itemId);
    };
    const handleDeleteItem = (itemId)=>{
        setSectionData((prev)=>({
                ...prev,
                items: prev.items.filter((item)=>item.id !== itemId)
            }));
    };
    const handleAddItemsFromLibrary = (selectedItems)=>{
        // Convert FoodItems to SectionItems and add to section
        const newSectionItems = selectedItems.map((item)=>({
                id: item.id,
                name: item.name,
                image: item.image
            }));
        setSectionData((prev)=>({
                ...prev,
                items: [
                    ...prev.items,
                    ...newSectionItems
                ]
            }));
    };
    const handleGoToItemLibrary = ()=>{
        // In a real app, this would navigate to the Item Library
        console.log('Navigate to Item Library');
    };
    // Get existing item IDs to disable in modal
    const existingItemIds = sectionData.items.map((item)=>item.id);
    const isNewSection = !section || !section.id;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen rounded-xl shadow-canary overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-45 bg-canary-black-2 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-16 w-full relative flex items-center bg-canary-black-1 cursor-pointer",
                        onClick: onBack,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-4 opacity-50 w-6 h-6 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiArrowLeft"],
                                    size: 1,
                                    color: "#ffffff"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                    lineNumber: 426,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                lineNumber: 425,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute left-12 font-roboto text-sm font-medium text-white",
                                children: "Back"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                lineNumber: 428,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                        lineNumber: 424,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex flex-col gap-6 pt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 pb-4 font-roboto text-xs font-normal text-white opacity-30 uppercase leading-4",
                                        children: "General Settings"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                        lineNumber: 437,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiHome"],
                                                children: "Property Info"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 441,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiBrushVariant"],
                                                children: "Branding"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 442,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiAccountMultiple"],
                                                children: "Staff Members"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 443,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiSecurity"],
                                                children: "Security"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 444,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiCog"],
                                                children: "Integrations"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 445,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                        lineNumber: 440,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                lineNumber: 436,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-px bg-white opacity-20"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                lineNumber: 450,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 pb-4 font-roboto text-xs font-normal text-white opacity-30 uppercase leading-4",
                                        children: "Product settings"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                        lineNumber: 454,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiBook"],
                                                children: "Compendium"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 458,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiFoodForkDrink"],
                                                active: true,
                                                children: "F&B Ordering"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 459,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiTrendingUp"],
                                                children: "Upsells"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 460,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiLoginVariant"],
                                                children: "Check-in"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 461,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiLogoutVariant"],
                                                children: "Checkout"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 462,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiMessage"],
                                                children: "Messages"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 463,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiCurrencyUsd"],
                                                children: "Digital Tips"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 464,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiShieldCheck"],
                                                children: "Authorizations"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 465,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiFileDocument"],
                                                children: "Contracts"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 466,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiLink"],
                                                children: "Payment Links"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 467,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                        lineNumber: 457,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                lineNumber: 453,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                        lineNumber: 434,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                lineNumber: 422,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col h-full min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border-b border-neutral-200 flex items-center justify-between py-2 px-6 sm:px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-roboto text-body-sm font-medium text-canary-black-1 truncate",
                                        children: "Statler New York"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                        lineNumber: 478,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiChevronDown"],
                                        size: 0.8
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                        lineNumber: 481,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                lineNumber: 477,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-full bg-canary-black-5 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                        lineNumber: 486,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-roboto text-caption font-medium text-canary-black-1",
                                                children: "Theresa Webb"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 488,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-roboto text-caption-sm font-normal text-canary-black-4 uppercase",
                                                children: "Operations manager"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 491,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                        lineNumber: 487,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiChevronDown"],
                                        size: 0.8
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                        lineNumber: 495,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                lineNumber: 485,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                        lineNumber: 476,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex bg-white overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 max-w-lg border-r border-neutral-200 flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-b border-neutral-200 py-4 px-6 flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: onBack,
                                                        className: "flex items-center justify-center p-2 hover:bg-gray-50 rounded",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiArrowLeft"],
                                                            size: 1
                                                        }, void 0, false, {
                                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                            lineNumber: 510,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                        lineNumber: 506,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "font-roboto text-subtitle font-medium text-canary-black-1",
                                                        children: "Section details"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                        lineNumber: 512,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 505,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                onClick: handleSave,
                                                children: "Save"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 516,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                        lineNumber: 504,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 overflow-auto py-8 px-6 space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border border-neutral-200 rounded-lg p-6 bg-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "font-roboto text-subtitle font-semibold text-canary-black-1 mb-6",
                                                        children: "Basic info"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                        lineNumber: 523,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                                label: "Title",
                                                                value: sectionData.title,
                                                                onChange: updateTitle,
                                                                placeholder: "Enter section title",
                                                                required: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                                lineNumber: 528,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            errors.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 text-sm text-red-500",
                                                                children: errors.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                                lineNumber: 536,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                        lineNumber: 527,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 522,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border border-neutral-200 rounded-lg p-6 bg-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "font-roboto text-subtitle font-semibold text-canary-black-1",
                                                                children: "Items"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                                lineNumber: 544,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                                variant: "icon",
                                                                onClick: handleAddItem,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiPlus"],
                                                                    size: 1
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                                    lineNumber: 548,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                                lineNumber: 547,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                        lineNumber: 543,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    sectionData.items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center py-8",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-canary-black-4 font-roboto text-body-sm mb-4",
                                                                children: "No items in this section yet"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                                lineNumber: 555,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                                variant: "secondary",
                                                                onClick: handleAddItem,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiPlus"],
                                                                        size: 0.8
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                                        lineNumber: 559,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    "Add first item"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                                lineNumber: 558,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                        lineNumber: 554,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3",
                                                        children: sectionData.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionItem, {
                                                                id: item.id,
                                                                name: item.name,
                                                                image: item.image,
                                                                onEdit: handleEditItem,
                                                                onDelete: handleDeleteItem
                                                            }, item.id, false, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                                lineNumber: 566,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                        lineNumber: 564,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                                lineNumber: 542,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                        lineNumber: 520,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                lineNumber: 502,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 bg-canary-black-6 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-canary-black-4 font-roboto text-body-sm",
                                    children: "Mobile preview (coming soon)"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                    lineNumber: 583,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                                lineNumber: 582,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                        lineNumber: 500,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                lineNumber: 474,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$AddItemsModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AddItemsModal"], {
                isOpen: isAddItemsModalOpen,
                onClose: ()=>setIsAddItemsModalOpen(false),
                onAddItems: handleAddItemsFromLibrary,
                onGoToItemLibrary: handleGoToItemLibrary,
                availableItems: sampleFoodItems,
                existingItemIds: existingItemIds
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
                lineNumber: 591,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx",
        lineNumber: 420,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/Toast.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toast",
    ()=>Toast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/react/Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/@mdi/js/mdi.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const Toast = ({ message, type, isVisible, onClose, duration = 3000 })=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isVisible && duration > 0) {
            const timer = setTimeout(()=>{
                onClose();
            }, duration);
            return ()=>clearTimeout(timer);
        }
    }, [
        isVisible,
        duration,
        onClose
    ]);
    if (!isVisible) return null;
    const typeStyles = {
        success: {
            bg: 'bg-green-50',
            border: 'border-green-200',
            icon: 'text-green-600',
            text: 'text-green-800',
            iconPath: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiCheck"]
        },
        error: {
            bg: 'bg-red-50',
            border: 'border-red-200',
            icon: 'text-red-600',
            text: 'text-red-800',
            iconPath: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiAlert"]
        },
        warning: {
            bg: 'bg-yellow-50',
            border: 'border-yellow-200',
            icon: 'text-yellow-600',
            text: 'text-yellow-800',
            iconPath: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiAlert"]
        }
    };
    const style = typeStyles[type];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-4 right-4 z-50 animate-slide-in-right",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `
        flex items-center gap-3 px-4 py-3 rounded-lg border shadow-lg max-w-md
        ${style.bg} ${style.border}
      `,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    path: style.iconPath,
                    size: 1,
                    className: style.icon
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/Toast.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `font-roboto text-body-sm font-medium ${style.text} flex-1`,
                    children: message
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/Toast.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: `p-1 hover:bg-black/5 rounded ${style.icon}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiClose"],
                        size: 0.8
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/Toast.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/Toast.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/Toast.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/Toast.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppRouter",
    ()=>AppRouter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$MenuManagementPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$EditMenuPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$ItemLibraryPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/ItemLibraryPage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$EditItemPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditItemPage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$MobileGuestExperience$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$MobileMenuOrdering$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$EditSectionPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/Toast.tsx [app-ssr] (ecmascript)");
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
const AppRouter = ()=>{
    const [appState, setAppState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        currentPage: 'menu-management',
        menus: [
            {
                name: 'Breakfast menu',
                entryPoint: 'In-room dining'
            },
            {
                name: 'Lunch menu',
                entryPoint: 'In-room dining'
            },
            {
                name: 'Dinner menu',
                entryPoint: 'In-room dining'
            },
            {
                name: 'Happy hour menu',
                entryPoint: 'In-room dining'
            },
            {
                name: 'Dessert menu',
                entryPoint: 'In-room dining'
            }
        ],
        toast: {
            isVisible: false,
            message: '',
            type: 'success'
        }
    });
    const navigateToEditMenu = (menuName, entryPoint)=>{
        const menu = appState.menus.find((m)=>m.name === menuName);
        setAppState((prev)=>({
                ...prev,
                currentPage: 'edit-menu',
                editingMenu: menu || {
                    name: menuName,
                    entryPoint
                }
            }));
    };
    const navigateToMenuManagement = ()=>{
        setAppState((prev)=>({
                ...prev,
                currentPage: 'menu-management'
            }));
    };
    const navigateToMobilePreview = (menuName, entryPoint)=>{
        const menu = appState.menus.find((m)=>m.name === menuName);
        setAppState((prev)=>({
                ...prev,
                currentPage: 'mobile-preview',
                previewingMenu: menu || {
                    name: menuName,
                    entryPoint
                }
            }));
    };
    const navigateToMobileMenuOrdering = ()=>{
        setAppState((prev)=>({
                ...prev,
                currentPage: 'mobile-menu-ordering'
            }));
    };
    const navigateBackToMobilePreview = ()=>{
        setAppState((prev)=>({
                ...prev,
                currentPage: 'mobile-preview'
            }));
    };
    const navigateToItemLibrary = ()=>{
        setAppState((prev)=>({
                ...prev,
                currentPage: 'item-library'
            }));
    };
    const navigateToEditItem = (itemId)=>{
        // In a real app, you'd fetch the item data from an API
        // For now, we'll create a mock item based on the sample data
        const sampleItems = [
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
        const item = sampleItems.find((i)=>i.id === itemId) || sampleItems[0];
        setAppState((prev)=>({
                ...prev,
                currentPage: 'edit-item',
                editingItem: item
            }));
    };
    const saveItem = (item)=>{
        // In a real app, you'd save to an API
        setAppState((prev)=>({
                ...prev,
                currentPage: 'item-library',
                editingItem: undefined
            }));
        showToast('Item saved successfully', 'success');
    };
    const navigateToEditSection = (sectionId)=>{
        // In a real app, you'd fetch the section data from an API
        // For now, we'll create a mock section based on sample data
        const mockSection = {
            id: sectionId,
            title: 'Mains',
            items: [
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
            ]
        };
        setAppState((prev)=>({
                ...prev,
                currentPage: 'edit-section',
                editingSection: mockSection
            }));
    };
    const navigateBackToEditMenu = ()=>{
        setAppState((prev)=>({
                ...prev,
                currentPage: 'edit-menu'
            }));
    };
    const saveSection = (section)=>{
        // In a real app, you'd save to an API
        setAppState((prev)=>({
                ...prev,
                currentPage: 'edit-menu',
                editingSection: undefined
            }));
        showToast('Section saved successfully', 'success');
    };
    const navigateToMenuAvailability = ()=>{
        setAppState((prev)=>({
                ...prev,
                currentPage: 'menu-availability'
            }));
    };
    const saveMenuAvailability = (availability)=>{
        // In a real app, you'd save to an API
        setAppState((prev)=>({
                ...prev,
                currentPage: 'edit-menu'
            }));
        showToast('Menu availability saved successfully', 'success');
    };
    const createNewMenu = (menuName)=>{
        const newMenu = {
            name: menuName,
            entryPoint: 'In-room dining',
            isNew: true
        };
        setAppState((prev)=>({
                ...prev,
                menus: [
                    ...prev.menus,
                    newMenu
                ],
                currentPage: 'edit-menu',
                editingMenu: newMenu
            }));
    };
    const saveMenu = (menuName, isNew)=>{
        if (!menuName.trim()) {
            showToast('Menu name is required', 'error');
            return false;
        }
        if (isNew) {
            setAppState((prev)=>({
                    ...prev,
                    menus: prev.menus.map((menu)=>menu.isNew && menu.name === prev.editingMenu?.name ? {
                            ...menu,
                            name: menuName,
                            isNew: false
                        } : menu),
                    editingMenu: prev.editingMenu ? {
                        ...prev.editingMenu,
                        name: menuName,
                        isNew: false
                    } : undefined
                }));
            showToast('Menu created successfully', 'success');
        } else {
            showToast('Menu saved successfully', 'success');
        }
        return true;
    };
    const deleteMenu = (menuName)=>{
        setAppState((prev)=>({
                ...prev,
                menus: prev.menus.filter((menu)=>menu.name !== menuName)
            }));
        showToast('Menu deleted successfully', 'success');
    };
    const showToast = (message, type)=>{
        setAppState((prev)=>({
                ...prev,
                toast: {
                    isVisible: true,
                    message,
                    type
                }
            }));
    };
    const hideToast = ()=>{
        setAppState((prev)=>({
                ...prev,
                toast: {
                    ...prev.toast,
                    isVisible: false
                }
            }));
    };
    switch(appState.currentPage){
        case 'edit-section':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$EditSectionPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditSectionPage"], {
                        section: appState.editingSection,
                        onBack: navigateBackToEditMenu,
                        onSave: saveSection
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 296,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toast"], {
                        message: appState.toast.message,
                        type: appState.toast.type,
                        isVisible: appState.toast.isVisible,
                        onClose: hideToast
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 301,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true);
        case 'edit-item':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$EditItemPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditItemPage"], {
                        item: appState.editingItem,
                        onBack: navigateToItemLibrary,
                        onSave: saveItem
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 312,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toast"], {
                        message: appState.toast.message,
                        type: appState.toast.type,
                        isVisible: appState.toast.isVisible,
                        onClose: hideToast
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 317,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true);
        case 'item-library':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$ItemLibraryPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemLibraryPage"], {
                        onBack: navigateToMenuManagement,
                        onTabChange: (tab)=>{
                            if (tab === 'menus') navigateToMenuManagement();
                            if (tab === 'item-library') navigateToItemLibrary();
                        // settings tab will be added later
                        },
                        onEditItem: navigateToEditItem
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 328,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toast"], {
                        message: appState.toast.message,
                        type: appState.toast.type,
                        isVisible: appState.toast.isVisible,
                        onClose: hideToast
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 337,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true);
        case 'mobile-menu-ordering':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$MobileMenuOrdering$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MobileMenuOrdering"], {
                        menuName: appState.previewingMenu?.name,
                        menus: appState.menus,
                        onBack: navigateBackToMobilePreview
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 348,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toast"], {
                        message: appState.toast.message,
                        type: appState.toast.type,
                        isVisible: appState.toast.isVisible,
                        onClose: hideToast
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 353,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true);
        case 'mobile-preview':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$MobileGuestExperience$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MobileGuestExperience"], {
                        menuName: appState.previewingMenu?.name,
                        onBack: navigateToMenuManagement,
                        onOrderClick: navigateToMobileMenuOrdering
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 364,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toast"], {
                        message: appState.toast.message,
                        type: appState.toast.type,
                        isVisible: appState.toast.isVisible,
                        onClose: hideToast
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 369,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true);
        case 'edit-menu':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$EditMenuPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditMenuPage"], {
                        menuName: appState.editingMenu?.name,
                        isNewMenu: appState.editingMenu?.isNew,
                        onBack: navigateToMenuManagement,
                        onSave: saveMenu,
                        onEditSection: navigateToEditSection
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 380,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toast"], {
                        message: appState.toast.message,
                        type: appState.toast.type,
                        isVisible: appState.toast.isVisible,
                        onClose: hideToast
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 387,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true);
        case 'menu-management':
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$MenuManagementPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuManagementPage"], {
                        menus: appState.menus,
                        onEditMenu: navigateToEditMenu,
                        onCreateMenu: createNewMenu,
                        onDeleteMenu: deleteMenu,
                        onPreviewMenu: navigateToMobilePreview,
                        onItemLibraryClick: navigateToItemLibrary
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 399,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toast"], {
                        message: appState.toast.message,
                        type: appState.toast.type,
                        isVisible: appState.toast.isVisible,
                        onClose: hideToast
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 407,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true);
    }
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__26e0fa25._.js.map