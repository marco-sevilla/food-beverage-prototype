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
const Tab = ({ children, active = false })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-start overflow-hidden cursor-pointer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center py-1 px-4 gap-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `font-roboto text-body-sm font-medium ${active ? 'text-canary-blue-1' : 'text-canary-black-2'}`,
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                    lineNumber: 41,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                lineNumber: 40,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `h-1 w-full ${active ? 'bg-canary-blue-1' : 'bg-transparent'}`
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                lineNumber: 47,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
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
            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "flex items-center justify-center gap-2 h-10 px-4 bg-canary-blue-1 text-white border-none rounded font-roboto text-body-sm font-medium cursor-pointer hover:opacity-90",
        children: children
    }, void 0, false, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
        lineNumber: 71,
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
                lineNumber: 95,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-48 lg:w-48 md:w-40 sm:w-32 hidden sm:block font-roboto text-body-sm font-normal text-canary-black-1 truncate",
                children: entryPoint
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                lineNumber: 100,
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
                            lineNumber: 107,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                        lineNumber: 106,
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
                            lineNumber: 110,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                        lineNumber: 109,
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
                            lineNumber: 113,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                        lineNumber: 112,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                lineNumber: 105,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
        lineNumber: 91,
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
                    lineNumber: 135,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                lineNumber: 134,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `absolute left-12 font-roboto text-sm font-normal ${active ? 'text-black' : 'text-white'}`,
                children: children
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                lineNumber: 141,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
        lineNumber: 128,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const MenuManagementPage = ({ menus, onEditMenu, onCreateMenu, onDeleteMenu, onPreviewMenu })=>{
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
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute left-12 font-roboto text-sm font-medium text-white",
                                children: "Back"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                        lineNumber: 194,
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
                                        lineNumber: 207,
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
                                                lineNumber: 211,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiBrushVariant"],
                                                children: "Branding"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 212,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiAccountMultiple"],
                                                children: "Staff Members"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 213,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiSecurity"],
                                                children: "Security"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiCog"],
                                                children: "Integrations"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 215,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                lineNumber: 206,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-px bg-white opacity-20"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                lineNumber: 220,
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
                                        lineNumber: 224,
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
                                                lineNumber: 228,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiFoodForkDrink"],
                                                active: true,
                                                children: "F&B Ordering"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 229,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiTrendingUp"],
                                                children: "Upsells"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 230,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiLoginVariant"],
                                                children: "Check-in"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 231,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiLogoutVariant"],
                                                children: "Checkout"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 232,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiMessage"],
                                                children: "Messages"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 233,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiCurrencyUsd"],
                                                children: "Digital Tips"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 234,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiShieldCheck"],
                                                children: "Authorizations"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 235,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiFileDocument"],
                                                children: "Contracts"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 236,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiLink"],
                                                children: "Payment Links"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 237,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                lineNumber: 223,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                lineNumber: 192,
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
                                        lineNumber: 248,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiChevronDown"],
                                        size: 0.8
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 251,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                lineNumber: 247,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-full bg-canary-black-5 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 256,
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
                                                lineNumber: 258,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-roboto text-caption-sm font-normal text-canary-black-4 uppercase",
                                                children: "Operations manager"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 261,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 257,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiChevronDown"],
                                        size: 0.8
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 265,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                lineNumber: 255,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border-b border-neutral-200 py-4 px-6 sm:px-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-roboto text-subtitle font-medium text-canary-black-1",
                            children: "Food and Beverage Ordering"
                        }, void 0, false, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                            lineNumber: 271,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                        lineNumber: 270,
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
                                        lineNumber: 280,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tab, {
                                        children: "Item library"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 281,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tab, {
                                        children: "Settings"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 282,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                lineNumber: 279,
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
                                        lineNumber: 287,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        onClick: ()=>setIsCreateModalOpen(true),
                                        children: "Create menu"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 290,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                lineNumber: 286,
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
                                                lineNumber: 297,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-48 lg:w-48 md:w-40 sm:w-32 hidden sm:block",
                                                children: "Entry Points"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 298,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-24 opacity-0 text-right",
                                                children: "Actions"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                                lineNumber: 299,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 296,
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
                                                lineNumber: 305,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                        lineNumber: 303,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                                lineNumber: 294,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                lineNumber: 244,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$CreateMenuModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateMenuModal"], {
                isOpen: isCreateModalOpen,
                onClose: ()=>setIsCreateModalOpen(false),
                onCreateMenu: handleCreateMenu
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                lineNumber: 321,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$DeleteMenuModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeleteMenuModal"], {
                isOpen: deleteModalState.isOpen,
                onClose: handleDeleteCancel,
                onDeleteMenu: handleDeleteConfirm,
                menuName: deleteModalState.menuName
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
                lineNumber: 328,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MenuManagementPage.tsx",
        lineNumber: 190,
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
                                        borderColor: error ? '#E40046' : __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].black6,
                                        focusBorderColor: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$lib$2f$design$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].blueDark1
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
                                    lineNumber: 102,
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
                                    lineNumber: 113,
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
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/CreateSectionModal.tsx",
                            lineNumber: 112,
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
const EditMenuPage = ({ onBack, menuName = "Lunch menu", isNewMenu = false, onSave })=>{
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
                                    lineNumber: 224,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute left-12 font-roboto text-sm font-medium text-white",
                                children: "Back"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                        lineNumber: 222,
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
                                        lineNumber: 235,
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
                                                lineNumber: 239,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiBrushVariant"],
                                                children: "Branding"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 240,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiAccountMultiple"],
                                                children: "Staff Members"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 241,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiSecurity"],
                                                children: "Security"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 242,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiCog"],
                                                children: "Integrations"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 243,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                        lineNumber: 238,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-px bg-white opacity-20"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 248,
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
                                        lineNumber: 252,
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
                                                lineNumber: 256,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiFoodForkDrink"],
                                                active: true,
                                                children: "F&B Ordering"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 257,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiTrendingUp"],
                                                children: "Upsells"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 258,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiLoginVariant"],
                                                children: "Check-in"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 259,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiLogoutVariant"],
                                                children: "Checkout"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 260,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiMessage"],
                                                children: "Messages"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 261,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiCurrencyUsd"],
                                                children: "Digital Tips"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 262,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiShieldCheck"],
                                                children: "Authorizations"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 263,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiFileDocument"],
                                                children: "Contracts"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 264,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiLink"],
                                                children: "Payment Links"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 265,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                        lineNumber: 255,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 251,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                lineNumber: 220,
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
                                        lineNumber: 276,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiChevronDown"],
                                        size: 0.8
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                        lineNumber: 279,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-full bg-canary-black-5 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                        lineNumber: 284,
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
                                                lineNumber: 286,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-roboto text-caption-sm font-normal text-canary-black-4 uppercase",
                                                children: "Operations manager"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 289,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                        lineNumber: 285,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$react$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f40$mdi$2f$js$2f$mdi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdiChevronDown"],
                                        size: 0.8
                                    }, void 0, false, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                        lineNumber: 293,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 283,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                        lineNumber: 274,
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
                                                            lineNumber: 308,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                        lineNumber: 304,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "font-roboto text-subtitle font-medium text-canary-black-1",
                                                        children: isNewMenu ? title || 'New Menu' : menuName
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 303,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                onClick: handleSave,
                                                children: "Save"
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 314,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                        lineNumber: 302,
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
                                                        lineNumber: 321,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block font-roboto text-body-sm font-medium text-canary-black-1 mb-2",
                                                                children: "Title*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                                lineNumber: 325,
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
                                                                lineNumber: 328,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                        lineNumber: 324,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 320,
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
                                                                lineNumber: 341,
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
                                                                    lineNumber: 345,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                                lineNumber: 344,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                        lineNumber: 340,
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
                                                                lineNumber: 351,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                            lineNumber: 350,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)) : sections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionItem, {
                                                                title: section.title,
                                                                subtitle: section.subtitle,
                                                                enabled: section.enabled,
                                                                onToggle: (enabled)=>handleSectionToggle(section.id, enabled),
                                                                onEdit: ()=>console.log('Edit section', section.id),
                                                                onDelete: ()=>handleDeleteSection(section.id)
                                                            }, section.id, false, {
                                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                                lineNumber: 357,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                        lineNumber: 348,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 339,
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
                                                            lineNumber: 374,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "font-roboto text-body-sm text-canary-blue-1 hover:underline",
                                                            children: "Add hours"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                            lineNumber: 377,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                    lineNumber: 373,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                                lineNumber: 372,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                        lineNumber: 318,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 300,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 bg-canary-black-6 flex items-center justify-center"
                            }, void 0, false, {
                                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                                lineNumber: 386,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                lineNumber: 272,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$CreateSectionModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateSectionModal"], {
                isOpen: isCreateSectionModalOpen,
                onClose: ()=>setIsCreateSectionModalOpen(false),
                onCreateSection: handleCreateSection
            }, void 0, false, {
                fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
                lineNumber: 393,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/EditMenuPage.tsx",
        lineNumber: 218,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$MobileGuestExperience$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/MobileGuestExperience.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/Toast.tsx [app-ssr] (ecmascript)");
'use client';
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
        case 'mobile-preview':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$MobileGuestExperience$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MobileGuestExperience"], {
                        menuName: appState.previewingMenu?.name,
                        onBack: navigateToMenuManagement
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 157,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toast"], {
                        message: appState.toast.message,
                        type: appState.toast.type,
                        isVisible: appState.toast.isVisible,
                        onClose: hideToast
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 161,
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
                        onSave: saveMenu
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toast"], {
                        message: appState.toast.message,
                        type: appState.toast.type,
                        isVisible: appState.toast.isVisible,
                        onClose: hideToast
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 178,
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
                        onPreviewMenu: navigateToMobilePreview
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 190,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Claude$2d$Projects$2f$canary$2d$foodandbeverage$2d$prototype$2f$food__and__beverage__prototype$2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toast"], {
                        message: appState.toast.message,
                        type: appState.toast.type,
                        isVisible: appState.toast.isVisible,
                        onClose: hideToast
                    }, void 0, false, {
                        fileName: "[project]/Claude-Projects/canary-foodandbeverage-prototype/food and beverage prototype/src/components/AppRouter.tsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true);
    }
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4c03ca25._.js.map