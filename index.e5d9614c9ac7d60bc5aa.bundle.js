"use strict";
(self["webpackChunktodo_react"] = self["webpackChunktodo_react"] || []).push([[826],{

/***/ 529:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 18 modules
var es = __webpack_require__(9704);
;// CONCATENATED MODULE: ./src/hooks/index.ts

var useAppDispatch = function () { return (0,es/* useDispatch */.I0)(); };
var useAppSelector = es/* useSelector */.v9;

// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js + 5 modules
var redux_toolkit_esm = __webpack_require__(4399);
;// CONCATENATED MODULE: ./src/store/todosReducer.ts
var _a;

var initialState = [];
var todosSlice = (0,redux_toolkit_esm/* createSlice */.oM)({
    name: 'todos',
    initialState: initialState,
    reducers: {
        create: function (state, action) {
            var newTask = {
                id: new Date().getTime().toString(),
                todo: action.payload,
                checked: false,
            };
            state.push(newTask);
        },
        remove: function (state, action) {
            return state.filter(function (item) { return item.id !== action.payload; });
        },
        complate: function (state, action) {
            var index = state.findIndex(function (item) { return item.id === action.payload.id; });
            state[index].checked = action.payload.checked;
        },
    },
});
var create = (_a = todosSlice.actions, _a.create), remove = _a.remove, complate = _a.complate;
var selectCount = function (state) { return state.todos; };
/* harmony default export */ const todosReducer = (todosSlice.reducer);

// EXTERNAL MODULE: ./node_modules/@mui/material/Button/Button.js + 2 modules
var Button = __webpack_require__(6914);
// EXTERNAL MODULE: ./node_modules/@mui/material/Checkbox/Checkbox.js + 6 modules
var Checkbox = __webpack_require__(2887);
// EXTERNAL MODULE: ./node_modules/@mui/material/TextField/TextField.js + 51 modules
var TextField = __webpack_require__(7004);
// EXTERNAL MODULE: ./node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(6867);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/DeleteForever.js
var DeleteForever = __webpack_require__(8364);
// EXTERNAL MODULE: ./node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(2440);
// EXTERNAL MODULE: ./node_modules/@mui/material/ListItem/ListItem.js + 4 modules
var ListItem = __webpack_require__(799);
// EXTERNAL MODULE: ./node_modules/@mui/material/ListItemText/ListItemText.js + 1 modules
var ListItemText = __webpack_require__(8584);
// EXTERNAL MODULE: ./node_modules/@mui/material/AppBar/AppBar.js + 1 modules
var AppBar = __webpack_require__(3720);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 1 modules
var Box = __webpack_require__(1508);
;// CONCATENATED MODULE: ./src/App.tsx














var App = function () {
    var _a = (0,react.useState)(''), todo = _a[0], setTodo = _a[1];
    var _b = (0,react.useState)(false), validadion = _b[0], setValidadion = _b[1];
    var task = useAppSelector(function (state) { return state.todos; });
    var dispatch = useAppDispatch();
    var handleAddTodo = (0,react.useCallback)(function () {
        if (!todo) {
            setValidadion(true);
        }
        else {
            dispatch(create(todo));
            setValidadion(false);
            setTodo('');
        }
    }, [todo, dispatch]);
    return (react.createElement(Box/* default */.Z, { sx: { backgroundColor: '#f3f3f3', height: '100vh' } },
        react.createElement(AppBar/* default */.Z, { position: "static", sx: { marginBottom: '20px' } },
            react.createElement(Typography/* default */.Z, { variant: "h6", component: "div", sx: { flexGrow: 1 } }, "Todo List")),
        react.createElement(Box/* default */.Z, { sx: { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' } },
            react.createElement(Box/* default */.Z, { sx: { display: 'flex', marginBottom: '20px', width: 360, justifyContent: 'space-between' } },
                react.createElement(TextField/* default */.Z, { value: todo, error: validadion, label: "Todo", placeholder: "Enter your task", onChange: function (e) { return setTodo(e.target.value); } }),
                react.createElement(Button/* default */.Z, { variant: "contained", onClick: handleAddTodo }, "add")),
            task.length > 0 && (react.createElement(List/* default */.Z, { dense: true, sx: { width: 360, maxWidth: 360, bgcolor: 'background.paper' } }, task.map(function (item) { return (react.createElement(ListItem/* default */.ZP, { key: item.id },
                react.createElement(ListItemText/* default */.Z, null, item.todo),
                react.createElement(IconButton/* default */.Z, { color: "error", component: "span", onClick: function () { return dispatch(remove(item.id)); } },
                    react.createElement(DeleteForever/* default */.Z, null)),
                react.createElement(Checkbox/* default */.Z, { onChange: function (e) { return dispatch(complate({ id: item.id, checked: e.target.checked })); } }))); }))))));
};
/* harmony default export */ const src_App = (App);

;// CONCATENATED MODULE: ./src/store/index.ts


var store = (0,redux_toolkit_esm/* configureStore */.xC)({
    reducer: {
        todos: todosReducer,
    },
});

// EXTERNAL MODULE: ./node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js + 2 modules
var ThemeProvider = __webpack_require__(5974);
// EXTERNAL MODULE: ./node_modules/@mui/material/colors/red.js
var red = __webpack_require__(265);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/createTheme.js + 13 modules
var createTheme = __webpack_require__(9927);
;// CONCATENATED MODULE: ./src/theme.ts


var theme = (0,createTheme/* default */.Z)({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red/* default.A400 */.Z.A400,
        },
    },
});
/* harmony default export */ const src_theme = (theme);

;// CONCATENATED MODULE: ./src/index.tsx







react_dom.render(react.createElement(react.StrictMode, null,
    react.createElement(ThemeProvider/* default */.Z, { theme: src_theme },
        react.createElement(es/* Provider */.zt, { store: store },
            react.createElement(src_App, null)))), document.getElementById('root'));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [216], () => (__webpack_exec__(529)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.e5d9614c9ac7d60bc5aa.bundle.js.map