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
const EditMenuPage = ({ onBack, menuName = "Lunch menu", isNewMenu = false, sections, onSave, onEditSection, onAddAvailabilityHours })=>{
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(menuName);
    const [localSections, setLocalSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(isNewMenu ? [] : (sections || []).map((section)=>({
            id: section.id,
            title: section.title,
            subtitle: `${section.items.length} item${section.items.length !== 1 ? 's' : ''}`,
            enabled: true
        })));
    const [isCreateSectionModalOpen, setIsCreateSectionModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSectionToggle = (id, enabled)=>{
        setLocalSections(localSections.map((section)=>section.id === id ? {
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
        setLocalSections([
            ...localSections,
            newSection
        ]);
        setIsCreateSectionModalOpen(false);
    };
    const handleDeleteSection = (id)=>{
        setLocalSections(localSections.filter((section)=>section.id !== id));
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
                                    lineNumber: 237,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 236,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute left-12 font-roboto text-sm font-medium text-white",
                                children: "Back"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 239,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                        lineNumber: 235,
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
                                        lineNumber: 248,
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
                                                lineNumber: 252,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiBrushVariant"],
                                                children: "Branding"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 253,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiAccountMultiple"],
                                                children: "Staff Members"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 254,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiSecurity"],
                                                children: "Security"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 255,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiCog"],
                                                children: "Integrations"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 256,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                        lineNumber: 251,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 247,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-px bg-white opacity-20"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 261,
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
                                        lineNumber: 265,
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
                                                lineNumber: 269,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiFoodForkDrink"],
                                                active: true,
                                                children: "F&B Ordering"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 270,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiTrendingUp"],
                                                children: "Upsells"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 271,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiLoginVariant"],
                                                children: "Check-in"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 272,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiLogoutVariant"],
                                                children: "Checkout"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 273,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiMessage"],
                                                children: "Messages"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 274,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiCurrencyUsd"],
                                                children: "Digital Tips"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 275,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiShieldCheck"],
                                                children: "Authorizations"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 276,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiFileDocument"],
                                                children: "Contracts"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 277,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiLink"],
                                                children: "Payment Links"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 278,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                        lineNumber: 268,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 264,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                        lineNumber: 245,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                lineNumber: 233,
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
                                        lineNumber: 289,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiChevronDown"],
                                        size: 0.8
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                        lineNumber: 292,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 288,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-full bg-canary-black-5 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                        lineNumber: 297,
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
                                                lineNumber: 299,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-roboto text-caption-sm font-normal text-canary-black-4 uppercase",
                                                children: "Operations manager"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 302,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                        lineNumber: 298,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiChevronDown"],
                                        size: 0.8
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                        lineNumber: 306,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 296,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                        lineNumber: 287,
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
                                                            lineNumber: 321,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                        lineNumber: 317,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "font-roboto text-subtitle font-medium text-canary-black-1",
                                                        children: isNewMenu ? title || 'New Menu' : menuName
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                        lineNumber: 323,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 316,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                onClick: handleSave,
                                                children: "Save"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 327,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                        lineNumber: 315,
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
                                                        lineNumber: 334,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block font-roboto text-body-sm font-medium text-canary-black-1 mb-2",
                                                                children: "Title*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                                lineNumber: 338,
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
                                                                lineNumber: 341,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 333,
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
                                                                lineNumber: 354,
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
                                                                    lineNumber: 358,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                                lineNumber: 357,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                        lineNumber: 353,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border border-neutral-200 rounded-lg overflow-hidden",
                                                        children: localSections.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "py-8 px-4 text-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-canary-black-4 font-roboto text-body-sm",
                                                                children: "No sections yet. Click the + button to add your first section."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                                lineNumber: 364,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                            lineNumber: 363,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)) : localSections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionItem, {
                                                                title: section.title,
                                                                subtitle: section.subtitle,
                                                                enabled: section.enabled,
                                                                onToggle: (enabled)=>handleSectionToggle(section.id, enabled),
                                                                onEdit: ()=>onEditSection?.(section.id),
                                                                onDelete: ()=>handleDeleteSection(section.id)
                                                            }, section.id, false, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                                lineNumber: 370,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                        lineNumber: 361,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 352,
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
                                                            lineNumber: 387,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: onAddAvailabilityHours,
                                                            className: "font-roboto text-body-sm text-canary-blue-1 hover:underline",
                                                            children: "Add hours"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                            lineNumber: 390,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                    lineNumber: 386,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 385,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                        lineNumber: 331,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 bg-canary-black-6 flex items-center justify-center"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 402,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                        lineNumber: 311,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                lineNumber: 285,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$CreateSectionModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateSectionModal"], {
                isOpen: isCreateSectionModalOpen,
                onClose: ()=>setIsCreateSectionModalOpen(false),
                onCreateSection: handleCreateSection
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                lineNumber: 409,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
        lineNumber: 231,
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
"[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuItemDetails",
    ()=>MenuItemDetails
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
const MenuItemDetails = ({ item, isOpen, onClose, onAddToCart, initialQuantity = 1 })=>{
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialQuantity);
    const [specialRequests, setSpecialRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Reset state when item changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (item) {
            setQuantity(initialQuantity);
            setSpecialRequests('');
        }
    }, [
        item,
        initialQuantity
    ]);
    // Handle animation timing
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            // Start in closed position
            setIsAnimating(true);
            // Trigger slide-up animation on next frame
            requestAnimationFrame(()=>{
                setIsAnimating(false);
            });
        }
    }, [
        isOpen
    ]);
    const handleClose = ()=>{
        setIsAnimating(true);
        // Trigger slide-down animation
        setTimeout(()=>{
            onClose();
            setIsAnimating(false);
        }, 600);
    };
    const handleAddToCart = ()=>{
        if (item) {
            onAddToCart(item, quantity, specialRequests);
            handleClose();
        }
    };
    const handleQuantityChange = (newQuantity)=>{
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
        }
    };
    if (!isOpen || !item) return null;
    // Generate consistent mock price and description
    const mockPrice = Math.floor((item.name.length * 7 + item.id.length * 3) % 30) + 15;
    const mockDescription = `Indulge in our ${item.name}, a luxurious blend of fresh ingredients crafted with exquisite attention to detail.`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 z-50 flex items-end justify-center",
        style: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            transition: 'opacity 600ms ease-out',
            opacity: isAnimating ? 0 : 1,
            borderRadius: '44px',
            overflow: 'hidden'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-t-xl shadow-xl w-full h-full max-h-[90vh] flex flex-col overflow-hidden",
            style: {
                transform: isAnimating ? 'translateY(100%)' : 'translateY(0%)',
                transition: 'transform 600ms cubic-bezier(0.4, 0.0, 0.2, 1)',
                willChange: 'transform'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-58 w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: item.image,
                            alt: item.name,
                            className: "w-full h-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClose,
                            className: "absolute top-4 left-4 bg-white shadow-md rounded p-3 hover:bg-gray-50 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiClose"],
                                size: 1,
                                color: "#000"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col px-4 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-roboto text-[28px] font-medium text-black leading-[42px] mb-3",
                                    children: item.name
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-roboto text-base font-normal text-black leading-6 mb-3",
                                    children: mockDescription
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-roboto text-base font-normal text-black leading-6",
                                    children: [
                                        "$",
                                        mockPrice
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleQuantityChange(quantity - 1),
                                        disabled: quantity <= 1,
                                        className: `w-12 h-12 flex items-center justify-center rounded transition-opacity ${quantity <= 1 ? 'bg-black opacity-50 cursor-not-allowed' : 'bg-black hover:opacity-90'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiMinus"],
                                            size: 1,
                                            color: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                                            lineNumber: 150,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-roboto font-bold text-lg text-black text-center w-8",
                                        children: quantity
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleQuantityChange(quantity + 1),
                                        className: "bg-black text-white w-12 h-12 flex items-center justify-center rounded hover:opacity-90 transition-opacity",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiPlus"],
                                            size: 1,
                                            color: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                                            lineNumber: 161,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                                lineNumber: 140,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block font-roboto text-sm font-normal text-black mb-2",
                                    children: "Special requests"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: specialRequests,
                                    onChange: (e)=>setSpecialRequests(e.target.value),
                                    placeholder: "Special requests",
                                    className: "w-full h-24 p-3 border border-gray-600 rounded font-roboto text-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none",
                                    rows: 3
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white border-t border-gray-200 p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
                    lineNumber: 182,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
            lineNumber: 96,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx",
        lineNumber: 85,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$MenuItemDetails$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuItemDetails.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const Button = ({ children, onClick, variant = 'primary', icon, iconPosition = 'left', className = '', disabled = false })=>{
    const baseClasses = "inline-flex items-center justify-center font-roboto font-medium transition-all duration-200 outline-none";
    const variantClasses = {
        primary: "bg-black text-white hover:opacity-90 h-12 px-4 rounded",
        outlined: "bg-white border border-gray-600 text-gray-900 hover:bg-gray-50 h-12 px-2 rounded",
        text: "bg-transparent text-gray-700 hover:text-black h-10 px-4",
        icon: "bg-transparent text-gray-700 hover:text-black w-10 h-10 rounded-full hover:bg-gray-100"
    };
    const iconClasses = variant === 'icon' ? "w-6 h-6" : "w-4 h-4";
    const spacing = variant === 'icon' ? "" : iconPosition === 'left' ? "mr-2" : "ml-2";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        disabled: disabled,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(baseClasses, variantClasses[variant], className, {
            'opacity-50 cursor-not-allowed': disabled
        }),
        children: [
            icon && iconPosition === 'left' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(iconClasses, spacing),
                children: icon
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                lineNumber: 84,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            variant !== 'icon' && children,
            icon && iconPosition === 'right' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(iconClasses, spacing),
                children: icon
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                lineNumber: 88,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const Select = ({ options, value, onChange, placeholder })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: value,
                onChange: onChange,
                className: "w-full h-12 px-3 pr-10 bg-white border border-gray-600 rounded font-roboto text-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none",
                children: [
                    placeholder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        disabled: true,
                        children: placeholder
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: option.value,
                            children: option.label
                        }, option.value, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiChevronDown"],
                    size: 1,
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black3
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const Tab = ({ children, active = false, onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: `flex-1 px-4 py-2 font-roboto text-base font-medium transition-colors border-b-2 ${active ? 'text-black border-black' : 'text-gray-600 border-transparent hover:text-black'}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
        lineNumber: 141,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const MenuItem = ({ item, onAddToCart, quantity = 0, onUpdateQuantity, onItemClick })=>{
    const handleAdd = ()=>{
        if (quantity === 0 && onAddToCart) {
            onAddToCart(item);
        } else if (onUpdateQuantity) {
            onUpdateQuantity(item, quantity + 1);
        }
    };
    const handleRemove = ()=>{
        if (onUpdateQuantity && quantity > 0) {
            onUpdateQuantity(item, quantity - 1);
        }
    };
    // Generate a consistent mock price based on item name hash
    const mockPrice = Math.floor((item.name.length * 7 + item.id.length * 3) % 30) + 15;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-4 p-3 border-b border-neutral-200 last:border-b-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: item.image,
                alt: item.name,
                className: "w-16 h-16 rounded-lg object-cover shrink-0 cursor-pointer",
                onClick: ()=>onItemClick?.(item)
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0 cursor-pointer",
                onClick: ()=>onItemClick?.(item),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "font-roboto text-sm font-medium text-black mb-0.5 truncate",
                        children: item.name
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-roboto text-sm font-normal text-black",
                        children: [
                            "$",
                            mockPrice
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shrink-0",
                children: quantity === 0 ? // Default state: Just a "+" button
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleAdd,
                    className: "bg-black text-white w-9 h-9 flex items-center justify-center rounded hover:opacity-90 transition-opacity",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiPlus"],
                        size: 0.7,
                        color: "white"
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                        lineNumber: 217,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                    lineNumber: 213,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : // Counter state: trash/minus + number + plus
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 bg-transparent rounded overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleRemove,
                            className: "bg-black text-white w-9 h-9 flex items-center justify-center rounded hover:opacity-90 transition-opacity",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                path: quantity === 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiDelete"] : __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiMinus"],
                                size: 0.7,
                                color: "white"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                lineNumber: 226,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                            lineNumber: 222,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-roboto font-bold text-base text-black text-center w-8 tracking-wide",
                            children: quantity
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                            lineNumber: 232,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleAdd,
                            className: "bg-black text-white w-9 h-9 flex items-center justify-center rounded hover:opacity-90 transition-opacity",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiPlus"],
                                size: 0.7,
                                color: "white"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                lineNumber: 239,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                            lineNumber: 235,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                    lineNumber: 221,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
        lineNumber: 187,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const MobileMenuOrdering = ({ onBack, onViewCart, menuName = "Breakfast menu", menus = [], cart = {}, onUpdateQuantity })=>{
    const [selectedMenuName, setSelectedMenuName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(menuName);
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedItem, setSelectedItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isItemDetailsOpen, setIsItemDetailsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const scrollContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sectionRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    // Convert menus to select options format
    const menuOptions = menus.map((menu)=>({
            label: menu.name,
            value: menu.name
        }));
    // Get current selected menu and its sections
    const currentMenu = menus.find((menu)=>menu.name === selectedMenuName);
    const menuSections = currentMenu?.sections || [];
    // Set initial active section
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (menuSections.length > 0 && !activeSection) {
            setActiveSection(menuSections[0].id);
        }
    }, [
        menuSections,
        activeSection
    ]);
    // Intersection Observer for auto-updating active tab
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!scrollContainerRef.current || menuSections.length === 0) return;
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute('data-section-id');
                    if (sectionId) {
                        setActiveSection(sectionId);
                    }
                }
            });
        }, {
            root: scrollContainerRef.current,
            rootMargin: '-50px 0px -50% 0px',
            threshold: 0
        });
        // Observe all section elements
        Object.values(sectionRefs.current).forEach((element)=>{
            if (element) {
                observer.observe(element);
            }
        });
        return ()=>{
            observer.disconnect();
        };
    }, [
        menuSections
    ]);
    const handleMenuSelect = (event)=>{
        const newMenuName = event.target.value;
        setSelectedMenuName(newMenuName);
        // Reset active section to first section of the new menu
        const newMenu = menus.find((menu)=>menu.name === newMenuName);
        const newMenuSections = newMenu?.sections || [];
        setActiveSection(newMenuSections.length > 0 ? newMenuSections[0].id : '');
    };
    const scrollToSection = (sectionId)=>{
        const sectionElement = sectionRefs.current[sectionId];
        if (sectionElement && scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const containerRect = container.getBoundingClientRect();
            const sectionRect = sectionElement.getBoundingClientRect();
            const scrollTop = container.scrollTop + (sectionRect.top - containerRect.top) - 20; // 20px offset for better positioning
            container.scrollTo({
                top: scrollTop,
                behavior: 'smooth'
            });
        }
        setActiveSection(sectionId);
    };
    const handleAddToCart = (item)=>{
        if (onUpdateQuantity) {
            onUpdateQuantity(item, 1);
        }
    };
    const handleUpdateQuantity = (item, quantity)=>{
        if (onUpdateQuantity) {
            onUpdateQuantity(item, quantity);
        }
    };
    const handleItemClick = (item)=>{
        setSelectedItem(item);
        setIsItemDetailsOpen(true);
    };
    const handleItemDetailsClose = ()=>{
        setIsItemDetailsOpen(false);
        setSelectedItem(null);
    };
    const handleAddToCartFromDetails = (item, quantity, specialRequests)=>{
        if (onUpdateQuantity) {
            onUpdateQuantity(item, (cart[item.id] || 0) + quantity);
        }
        // You could also store special requests in a separate state if needed
        console.log('Special requests:', specialRequests);
    };
    const totalCartItems = Object.values(cart).reduce((sum, qty)=>sum + qty, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-screen bg-gray-100 p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-8 left-8 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                    onClick: onBack,
                    variant: "outlined",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiArrowLeft"],
                        size: 0.8
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                        lineNumber: 380,
                        columnNumber: 17
                    }, void 0),
                    iconPosition: "left",
                    children: "Back to Mobile Landing"
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                    lineNumber: 377,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                lineNumber: 376,
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
                        className: "flex items-center justify-between px-4 py-4 bg-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                onClick: onBack,
                                variant: "icon",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiArrowLeft"],
                                    size: 1
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                    lineNumber: 402,
                                    columnNumber: 19
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                lineNumber: 399,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-roboto text-2xl font-semibold text-black text-center",
                                children: "In-room dining"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                lineNumber: 405,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 opacity-0"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                lineNumber: 409,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                        lineNumber: 398,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                            options: menuOptions,
                            value: selectedMenuName,
                            onChange: handleMenuSelect,
                            placeholder: "Select a menu"
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                            lineNumber: 414,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                        lineNumber: 413,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-roboto text-[32px] font-medium text-black leading-[48px]",
                            children: selectedMenuName
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                            lineNumber: 424,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                        lineNumber: 423,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 border-b border-neutral-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex",
                            children: menuSections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tab, {
                                    active: activeSection === section.id,
                                    onClick: ()=>scrollToSection(section.id),
                                    children: section.title
                                }, section.id, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                    lineNumber: 433,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                            lineNumber: 431,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                        lineNumber: 430,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: scrollContainerRef,
                        className: "flex-1 overflow-y-auto px-4 py-6",
                        style: {
                            height: 'calc(100% - 240px)'
                        },
                        children: menuSections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: (el)=>{
                                    sectionRefs.current[section.id] = el;
                                },
                                "data-section-id": section.id,
                                className: "mb-6 last:mb-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-roboto text-xl font-medium text-black mb-3",
                                        children: section.title
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                        lineNumber: 458,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-neutral-200 rounded-lg overflow-hidden",
                                        children: section.items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-8 text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-500 font-roboto text-sm",
                                                children: "No items in this section yet"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                                lineNumber: 466,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                            lineNumber: 465,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)) : section.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuItem, {
                                                item: item,
                                                quantity: cart[item.id] || 0,
                                                onAddToCart: handleAddToCart,
                                                onUpdateQuantity: handleUpdateQuantity,
                                                onItemClick: handleItemClick
                                            }, item.id, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                                lineNumber: 472,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                        lineNumber: 463,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, section.id, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                                lineNumber: 451,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                        lineNumber: 445,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    totalCartItems > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 right-0 bg-white border-t border-neutral-200 p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                            className: "w-full",
                            onClick: ()=>{
                                console.log('🔥 View cart clicked!');
                                console.log('📦 Total cart items:', totalCartItems);
                                console.log('🛍️ Cart state:', cart);
                                onViewCart?.();
                            },
                            children: [
                                "View cart (",
                                totalCartItems,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                            lineNumber: 490,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                        lineNumber: 489,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$MenuItemDetails$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuItemDetails"], {
                        item: selectedItem,
                        isOpen: isItemDetailsOpen,
                        onClose: handleItemDetailsClose,
                        onAddToCart: handleAddToCartFromDetails,
                        initialQuantity: selectedItem ? cart[selectedItem.id] || 1 : 1
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                        lineNumber: 505,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
                lineNumber: 388,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileMenuOrdering.tsx",
        lineNumber: 374,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderSummary",
    ()=>OrderSummary
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
const Button = ({ children, onClick, variant = 'primary', icon, iconPosition = 'left', className = '', disabled = false })=>{
    const baseClasses = "inline-flex items-center justify-center font-roboto font-medium transition-all duration-200 outline-none";
    const variantClasses = {
        primary: "bg-black text-white hover:opacity-90 h-12 px-4 rounded",
        outlined: "bg-white border border-gray-600 text-gray-900 hover:bg-gray-50 h-10 px-4 rounded",
        text: "bg-transparent text-gray-700 hover:text-black h-10 px-4",
        icon: "bg-transparent text-gray-700 hover:text-black w-10 h-10 rounded-full hover:bg-gray-100"
    };
    const iconClasses = variant === 'icon' ? "w-6 h-6" : "w-4 h-4";
    const spacing = variant === 'icon' ? "" : iconPosition === 'left' ? "mr-2" : "ml-2";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        disabled: disabled,
        className: `${baseClasses} ${variantClasses[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`,
        children: [
            icon && iconPosition === 'left' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `${iconClasses} ${spacing}`,
                children: icon
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            variant !== 'icon' && children,
            icon && iconPosition === 'right' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `${iconClasses} ${spacing}`,
                children: icon
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                lineNumber: 78,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const CartItemRow = ({ item, onUpdateQuantity })=>{
    const handleAdd = ()=>{
        onUpdateQuantity(item, item.quantity + 1);
    };
    const handleRemove = ()=>{
        if (item.quantity > 0) {
            onUpdateQuantity(item, item.quantity - 1);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border border-neutral-200 rounded-lg overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4 p-3 border-b border-neutral-200 last:border-b-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: item.image,
                    alt: item.name,
                    className: "w-16 h-16 rounded-lg object-cover shrink-0"
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 min-w-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-roboto text-sm font-medium text-black mb-0.5 truncate",
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    item.specialRequests && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-roboto text-xs text-gray-600 mb-1",
                                        children: [
                                            "Special request: ",
                                            item.specialRequests
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                        lineNumber: 119,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-roboto text-sm font-normal text-black",
                                        children: [
                                            "$",
                                            item.price
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 ml-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleRemove,
                                        className: "bg-black text-white w-9 h-9 flex items-center justify-center rounded hover:opacity-90 transition-opacity",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            path: item.quantity === 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiDelete"] : __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiMinus"],
                                            size: 0.7,
                                            color: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                            lineNumber: 134,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-roboto font-bold text-base text-black text-center w-8 tracking-wide",
                                        children: item.quantity
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleAdd,
                                        className: "bg-black text-white w-9 h-9 flex items-center justify-center rounded hover:opacity-90 transition-opacity",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiPlus"],
                                            size: 0.7,
                                            color: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                            lineNumber: 147,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
            lineNumber: 103,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const OrderSummary = ({ onBack, onAddMoreItems, onSubmitOrder, cart, onUpdateQuantity, cartItems = [] })=>{
    const [localCartItems, setLocalCartItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Convert cart and items to local cart items with prices
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const items = [];
        Object.entries(cart).forEach(([itemId, quantity])=>{
            if (quantity > 0) {
                const item = cartItems.find((i)=>i.id === itemId);
                if (item) {
                    // Generate consistent mock price based on item name hash
                    const mockPrice = Math.floor((item.name.length * 7 + item.id.length * 3) % 30) + 15;
                    // Add some mock special requests for demo
                    let specialRequests = undefined;
                    if (item.name.toLowerCase().includes('toro') || item.name.toLowerCase().includes('tartare')) {
                        specialRequests = 'please remove the toro';
                    }
                    items.push({
                        ...item,
                        quantity,
                        price: mockPrice,
                        specialRequests
                    });
                }
            }
        });
        setLocalCartItems(items);
    }, [
        cart,
        cartItems
    ]);
    // Redirect to menu if cart is empty (but wait for initial load)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (localCartItems.length === 0 && Object.keys(cart).length === 0) {
            // Only redirect if both local items and original cart are empty
            // This prevents redirecting during the initial loading phase
            onBack();
        }
    }, [
        localCartItems,
        cart,
        onBack
    ]);
    // Calculate total
    const estimatedTotal = localCartItems.reduce((total, item)=>total + item.price * item.quantity, 0);
    // Header image URL
    const headerImageUrl = "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=430&h=230&fit=crop&crop=center";
    if (localCartItems.length === 0) {
        return null; // Will redirect via useEffect
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-screen bg-gray-100 p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-8 left-8 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                    onClick: onBack,
                    variant: "outlined",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiArrowLeft"],
                        size: 0.8
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                        lineNumber: 223,
                        columnNumber: 17
                    }, void 0),
                    iconPosition: "left",
                    children: "Back to Menu"
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                    lineNumber: 220,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                lineNumber: 219,
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
                                alt: "Order summary header",
                                className: "w-full h-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                lineNumber: 242,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-9 left-1/2 transform -translate-x-1/2 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1.5 h-1.5 bg-white/40 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                        lineNumber: 250,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 bg-white rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                        lineNumber: 251,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1.5 h-1.5 bg-white/40 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                        lineNumber: 252,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1.5 h-1.5 bg-white/40 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                        lineNumber: 253,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                lineNumber: 249,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-4 left-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onBack,
                                    className: "flex items-center justify-center w-12 h-12 bg-white rounded shadow-md hover:bg-gray-50 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiArrowLeft"],
                                        size: 1,
                                        color: "#000"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                        lineNumber: 262,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                lineNumber: 257,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto px-4 py-6 pb-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-roboto text-[28px] font-medium text-black leading-[42px] mb-4",
                                children: "Review your cart"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                lineNumber: 270,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-neutral-200 rounded-lg p-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-roboto text-sm font-medium text-black",
                                                children: "Guest"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                                lineNumber: 277,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-roboto text-sm font-normal text-gray-600",
                                                children: "Emily Smith"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                                lineNumber: 278,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                        lineNumber: 276,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-roboto text-sm font-medium text-black",
                                                children: "Room"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                                lineNumber: 281,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-roboto text-sm font-normal text-gray-600",
                                                children: "365"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                                lineNumber: 282,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                        lineNumber: 280,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 mb-6",
                                children: localCartItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CartItemRow, {
                                        item: item,
                                        onUpdateQuantity: onUpdateQuantity
                                    }, item.id, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                        lineNumber: 289,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                lineNumber: 287,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-roboto text-base font-normal text-black",
                                        children: "Estimated total"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                        lineNumber: 299,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-roboto text-base font-medium text-black",
                                        children: [
                                            "$",
                                            estimatedTotal
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                        lineNumber: 300,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                lineNumber: 298,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onAddMoreItems,
                                className: "w-full h-10 border border-neutral-200 rounded-lg flex items-center justify-center gap-2 mb-6 hover:bg-gray-50 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiPlus"],
                                        size: 0.8,
                                        color: "#000"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                        lineNumber: 308,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-roboto text-sm font-medium text-black",
                                        children: "Add more items"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                        lineNumber: 309,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                lineNumber: 304,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-roboto text-base font-medium text-black mb-1",
                                        children: "Please note"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                        lineNumber: 314,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-1 text-sm font-roboto font-normal text-black leading-[22px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mr-2",
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                                        lineNumber: 319,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Your final bill will be delivered with your food order which will include tax and service fees."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                                        lineNumber: 320,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                                lineNumber: 318,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mr-2",
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                                        lineNumber: 323,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Estimated order time will be 30 minutes."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                                        lineNumber: 324,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                                lineNumber: 322,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                        lineNumber: 317,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 right-0 bg-white border-t border-neutral-200 p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                            className: "w-full h-12 text-lg",
                            onClick: onSubmitOrder,
                            children: "Submit order"
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                            lineNumber: 332,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                        lineNumber: 331,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx",
        lineNumber: 217,
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
"[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuAvailabilityPage",
    ()=>MenuAvailabilityPage
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
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                    lineNumber: 43,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                lineNumber: 42,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `absolute left-12 font-roboto text-sm font-normal ${active ? 'text-black' : 'text-white'}`,
                children: children
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                lineNumber: 49,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
        lineNumber: 36,
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
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
            lineNumber: 68,
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
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
            lineNumber: 80,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        onClick: onClick,
        className: "flex items-center justify-center gap-2 h-10 px-4 bg-canary-blue-1 text-white border-none rounded font-roboto text-body-sm font-medium cursor-pointer hover:opacity-90",
        children: children
    }, void 0, false, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const RadioButton = ({ checked, onChange, children, name })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2 px-1 py-2 cursor-pointer",
        onClick: onChange,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                path: checked ? __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiRadioboxMarked"] : __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiRadioboxBlank"],
                size: 1,
                color: checked ? '#2858C4' : '#666666'
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                lineNumber: 111,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-roboto text-body-sm font-normal text-canary-black-1",
                children: children
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                lineNumber: 116,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
        lineNumber: 110,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const DayRow = ({ day, selectedType, onTypeChange, isLast = false })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center gap-4 p-4 ${isLast ? '' : 'border-b border-neutral-200'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-30 font-roboto text-body font-medium text-canary-black-1",
                children: day
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                lineNumber: 140,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioButton, {
                        checked: selectedType === 'set-hours',
                        onChange: ()=>onTypeChange(day, 'set-hours'),
                        name: `${day}-availability`,
                        children: "Set hours"
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                        lineNumber: 144,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioButton, {
                        checked: selectedType === 'open-24',
                        onChange: ()=>onTypeChange(day, 'open-24'),
                        name: `${day}-availability`,
                        children: "Open 24 hours"
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                        lineNumber: 151,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RadioButton, {
                        checked: selectedType === 'closed',
                        onChange: ()=>onTypeChange(day, 'closed'),
                        name: `${day}-availability`,
                        children: "Closed"
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                        lineNumber: 158,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                lineNumber: 143,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
        lineNumber: 139,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const MenuAvailabilityPage = ({ menuName = "Menu", onBack, onSave })=>{
    const [availability, setAvailability] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
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
    ]);
    const handleTypeChange = (day, type)=>{
        setAvailability((prev)=>prev.map((item)=>item.day === day ? {
                    ...item,
                    type
                } : item));
    };
    const handleSave = ()=>{
        onSave?.(availability);
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
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute left-12 font-roboto text-sm font-medium text-white",
                                children: "Back"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                        lineNumber: 208,
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
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                        lineNumber: 221,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiHome"],
                                                children: "Property Info"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                lineNumber: 225,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiBrushVariant"],
                                                children: "Branding"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                lineNumber: 226,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiAccountMultiple"],
                                                children: "Staff Members"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                lineNumber: 227,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiSecurity"],
                                                children: "Security"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                lineNumber: 228,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiCog"],
                                                children: "Integrations"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                lineNumber: 229,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                        lineNumber: 224,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-px bg-white opacity-20"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 pb-4 font-roboto text-xs font-normal text-white opacity-30 uppercase leading-4",
                                        children: "Product settings"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                        lineNumber: 238,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiBook"],
                                                children: "Compendium"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                lineNumber: 242,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiFoodForkDrink"],
                                                active: true,
                                                children: "F&B Ordering"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                lineNumber: 243,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiTrendingUp"],
                                                children: "Upsells"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                lineNumber: 244,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiLoginVariant"],
                                                children: "Check-in"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                lineNumber: 245,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiLogoutVariant"],
                                                children: "Checkout"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                lineNumber: 246,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiMessage"],
                                                children: "Messages"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                lineNumber: 247,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiCurrencyUsd"],
                                                children: "Digital Tips"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                lineNumber: 248,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiShieldCheck"],
                                                children: "Authorizations"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                lineNumber: 249,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiFileDocument"],
                                                children: "Contracts"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                lineNumber: 250,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiLink"],
                                                children: "Payment Links"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                lineNumber: 251,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                        lineNumber: 241,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                lineNumber: 206,
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
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                        lineNumber: 262,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiChevronDown"],
                                        size: 0.8
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                        lineNumber: 265,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                lineNumber: 261,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-full bg-canary-black-5 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                        lineNumber: 270,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-roboto text-caption font-medium text-canary-black-1",
                                                children: "Theresa Webb"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                lineNumber: 272,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-roboto text-caption-sm font-normal text-canary-black-4 uppercase",
                                                children: "Operations manager"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                lineNumber: 275,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                        lineNumber: 271,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiChevronDown"],
                                        size: 0.8
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                        lineNumber: 279,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                lineNumber: 269,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                        lineNumber: 260,
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
                                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                            lineNumber: 294,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                        lineNumber: 290,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "font-roboto text-subtitle font-medium text-canary-black-1",
                                                        children: "Menu availability"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                lineNumber: 289,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                onClick: handleSave,
                                                children: "Save"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                lineNumber: 300,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                        lineNumber: 288,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 overflow-auto py-8 px-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border border-neutral-200 rounded-lg bg-white",
                                            children: availability.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DayRow, {
                                                    day: item.day,
                                                    selectedType: item.type,
                                                    onTypeChange: handleTypeChange,
                                                    isLast: index === availability.length - 1
                                                }, item.day, false, {
                                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                                    lineNumber: 308,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                            lineNumber: 306,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                        lineNumber: 304,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                lineNumber: 286,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 bg-canary-black-6 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-canary-black-4 font-roboto text-body-sm",
                                    children: "Mobile preview (coming soon)"
                                }, void 0, false, {
                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                    lineNumber: 322,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                                lineNumber: 321,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
                lineNumber: 258,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx",
        lineNumber: 204,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$OrderSummary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/OrderSummary.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$EditSectionPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditSectionPage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$MenuAvailabilityPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuAvailabilityPage.tsx [app-ssr] (ecmascript)");
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
;
;
const AppRouter = ()=>{
    // Initialize menus with actual section data
    const initialMenus = [
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
    const [appState, setAppState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        currentPage: 'menu-management',
        menus: initialMenus,
        cart: {},
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
    const navigateToOrderSummary = ()=>{
        console.log('🛒 Navigating to order summary...');
        console.log('📊 Current cart state:', appState.cart);
        setAppState((prev)=>({
                ...prev,
                currentPage: 'order-summary'
            }));
    };
    const navigateBackToMobileMenuOrdering = ()=>{
        setAppState((prev)=>({
                ...prev,
                currentPage: 'mobile-menu-ordering'
            }));
    };
    const navigateToOrderLoading = ()=>{
        setAppState((prev)=>({
                ...prev,
                currentPage: 'order-loading'
            }));
        // After 3 seconds, navigate to confirmation
        setTimeout(()=>{
            setAppState((prev)=>({
                    ...prev,
                    currentPage: 'order-confirmation'
                }));
        }, 3000);
    };
    const navigateToOrderConfirmation = ()=>{
        setAppState((prev)=>({
                ...prev,
                currentPage: 'order-confirmation'
            }));
    };
    const closeOrderFlow = ()=>{
        setAppState((prev)=>({
                ...prev,
                currentPage: 'mobile-menu-ordering',
                cart: {} // Clear the cart after order completion
            }));
    };
    const handleUpdateQuantity = (item, quantity)=>{
        console.log('➕ Updating cart quantity:', item.name, 'to', quantity);
        setAppState((prev)=>{
            if (quantity <= 0) {
                const { [item.id]: removed, ...rest } = prev.cart;
                console.log('🗑️ Removing item from cart:', item.name);
                console.log('📊 New cart:', rest);
                return {
                    ...prev,
                    cart: rest
                };
            }
            const newCart = {
                ...prev.cart,
                [item.id]: quantity
            };
            console.log('📊 New cart state:', newCart);
            return {
                ...prev,
                cart: newCart
            };
        });
    };
    // Get all cart items from menus
    const getAllCartItems = ()=>{
        const items = [];
        appState.menus.forEach((menu)=>{
            menu.sections?.forEach((section)=>{
                section.items.forEach((item)=>{
                    if (appState.cart[item.id]) {
                        items.push(item);
                    }
                });
            });
        });
        return items;
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
        // Find the actual section from the current menu
        const currentMenu = appState.editingMenu;
        const section = currentMenu?.sections?.find((s)=>s.id === sectionId);
        if (section) {
            setAppState((prev)=>({
                    ...prev,
                    currentPage: 'edit-section',
                    editingSection: section
                }));
        } else {
            // Create new section if not found
            const newSection = {
                id: sectionId,
                title: sectionId.charAt(0).toUpperCase() + sectionId.slice(1),
                items: []
            };
            setAppState((prev)=>({
                    ...prev,
                    currentPage: 'edit-section',
                    editingSection: newSection
                }));
        }
    };
    const navigateBackToEditMenu = ()=>{
        setAppState((prev)=>({
                ...prev,
                currentPage: 'edit-menu'
            }));
    };
    const saveSection = (section)=>{
        // Update the section in the current menu
        setAppState((prev)=>{
            if (!prev.editingMenu) return prev;
            const updatedMenus = prev.menus.map((menu)=>{
                if (menu.name === prev.editingMenu?.name) {
                    const updatedSections = menu.sections ? menu.sections.map((s)=>s.id === section.id ? section : s) : [
                        section
                    ];
                    // If section doesn't exist, add it
                    if (!menu.sections?.some((s)=>s.id === section.id)) {
                        updatedSections.push(section);
                    }
                    return {
                        ...menu,
                        sections: updatedSections
                    };
                }
                return menu;
            });
            return {
                ...prev,
                currentPage: 'edit-menu',
                editingSection: undefined,
                menus: updatedMenus,
                editingMenu: updatedMenus.find((m)=>m.name === prev.editingMenu?.name)
            };
        });
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
    console.log('🎯 Current page:', appState.currentPage);
    console.log('📋 App state:', {
        currentPage: appState.currentPage,
        cartSize: Object.keys(appState.cart).length,
        cart: appState.cart
    });
    switch(appState.currentPage){
        case 'menu-availability':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$MenuAvailabilityPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuAvailabilityPage"], {
                        menuName: appState.editingMenu?.name,
                        onBack: navigateBackToEditMenu,
                        onSave: saveMenuAvailability
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 461,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toast"], {
                        message: appState.toast.message,
                        type: appState.toast.type,
                        isVisible: appState.toast.isVisible,
                        onClose: hideToast
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 466,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true);
        case 'edit-section':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$EditSectionPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditSectionPage"], {
                        section: appState.editingSection,
                        onBack: navigateBackToEditMenu,
                        onSave: saveSection
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 477,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toast"], {
                        message: appState.toast.message,
                        type: appState.toast.type,
                        isVisible: appState.toast.isVisible,
                        onClose: hideToast
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 482,
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
                        lineNumber: 493,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toast"], {
                        message: appState.toast.message,
                        type: appState.toast.type,
                        isVisible: appState.toast.isVisible,
                        onClose: hideToast
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 498,
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
                        lineNumber: 509,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toast"], {
                        message: appState.toast.message,
                        type: appState.toast.type,
                        isVisible: appState.toast.isVisible,
                        onClose: hideToast
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 518,
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
                        cart: appState.cart,
                        onBack: navigateBackToMobilePreview,
                        onViewCart: navigateToOrderSummary,
                        onUpdateQuantity: handleUpdateQuantity
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 529,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toast"], {
                        message: appState.toast.message,
                        type: appState.toast.type,
                        isVisible: appState.toast.isVisible,
                        onClose: hideToast
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 537,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true);
        case 'order-summary':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$OrderSummary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrderSummary"], {
                        cart: appState.cart,
                        cartItems: getAllCartItems(),
                        onBack: navigateBackToMobileMenuOrdering,
                        onAddMoreItems: navigateBackToMobileMenuOrdering,
                        onUpdateQuantity: handleUpdateQuantity,
                        onSubmitOrder: navigateToOrderLoading
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 548,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toast"], {
                        message: appState.toast.message,
                        type: appState.toast.type,
                        isVisible: appState.toast.isVisible,
                        onClose: hideToast
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 556,
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
                        lineNumber: 567,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toast"], {
                        message: appState.toast.message,
                        type: appState.toast.type,
                        isVisible: appState.toast.isVisible,
                        onClose: hideToast
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 572,
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
                        sections: appState.editingMenu?.sections,
                        onBack: navigateToMenuManagement,
                        onSave: saveMenu,
                        onEditSection: navigateToEditSection,
                        onAddAvailabilityHours: navigateToMenuAvailability
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 583,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toast"], {
                        message: appState.toast.message,
                        type: appState.toast.type,
                        isVisible: appState.toast.isVisible,
                        onClose: hideToast
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 592,
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
                        lineNumber: 604,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toast"], {
                        message: appState.toast.message,
                        type: appState.toast.type,
                        isVisible: appState.toast.isVisible,
                        onClose: hideToast
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 612,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true);
    }
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__36d0e054._.js.map