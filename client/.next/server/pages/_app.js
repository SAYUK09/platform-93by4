(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/feature/store.ts":
/*!******************************!*\
  !*** ./src/feature/store.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeStore": function() { return /* binding */ makeStore; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

function makeStore() {
  return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
    reducer: {}
  });
}
const store = makeStore();
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _feature_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../feature/store */ "./src/feature/store.ts");

var _jsxFileName = "D:\\Github\\platform-93by4\\client\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {
    resetCSS: true,
    theme: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.theme,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
      store: _feature_store__WEBPACK_IMPORTED_MODULE_3__.default,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/react");;

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@reduxjs/toolkit");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQtdHlwZXNjcmlwdC8uL3NyYy9mZWF0dXJlL3N0b3JlLnRzIiwid2VicGFjazovL3dpdGgtcmVkdXgtdG9vbGtpdC10eXBlc2NyaXB0Ly4vc3JjL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL3dpdGgtcmVkdXgtdG9vbGtpdC10eXBlc2NyaXB0L2V4dGVybmFsIFwiQGNoYWtyYS11aS9yZWFjdFwiIiwid2VicGFjazovL3dpdGgtcmVkdXgtdG9vbGtpdC10eXBlc2NyaXB0L2V4dGVybmFsIFwiQHJlZHV4anMvdG9vbGtpdFwiIiwid2VicGFjazovL3dpdGgtcmVkdXgtdG9vbGtpdC10eXBlc2NyaXB0L2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQtdHlwZXNjcmlwdC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIm1ha2VTdG9yZSIsImNvbmZpZ3VyZVN0b3JlIiwicmVkdWNlciIsInN0b3JlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aGVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sU0FBU0EsU0FBVCxHQUFxQjtBQUMxQixTQUFPQyxnRUFBYyxDQUFDO0FBQ3BCQyxXQUFPLEVBQUM7QUFEWSxHQUFELENBQXJCO0FBR0Q7QUFDRCxNQUFNQyxLQUFLLEdBQUdILFNBQVMsRUFBdkI7QUFNQSwrREFBZUcsS0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUdBOztBQUVBLFNBQVNDLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUFtRDtBQUNqRCxzQkFDRSw4REFBQyw0REFBRDtBQUFnQixZQUFRLE1BQXhCO0FBQXlCLFNBQUssRUFBRUMsbURBQWhDO0FBQUEsMkJBQ0EsOERBQUMsaURBQUQ7QUFBVSxXQUFLLEVBQUVKLG1EQUFqQjtBQUFBLDZCQUNFLDhEQUFDLFNBQUQsb0JBQWVHLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRDs7QUFFRCwrREFBZUYsS0FBZixFOzs7Ozs7Ozs7OztBQ2hCQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTdG9yZSgpIHtcclxuICByZXR1cm4gY29uZmlndXJlU3RvcmUoe1xyXG4gICAgcmVkdWNlcjp7fVxyXG4gIH0pXHJcbn1cclxuY29uc3Qgc3RvcmUgPSBtYWtlU3RvcmUoKVxyXG5cclxuZXhwb3J0IHR5cGUgQXBwU3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiBzdG9yZS5nZXRTdGF0ZT5cclxuXHJcbmV4cG9ydCB0eXBlIEFwcERpc3BhdGNoID0gdHlwZW9mIHN0b3JlLmRpc3BhdGNoXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZVxyXG4iLCJpbXBvcnQgeyBDaGFrcmFQcm92aWRlciwgdGhlbWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXHJcblxyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi8uLi9mZWF0dXJlL3N0b3JlJ1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2hha3JhUHJvdmlkZXIgcmVzZXRDU1MgdGhlbWU9e3RoZW1lfT5cclxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L1Byb3ZpZGVyPlxyXG4gICAgPC9DaGFrcmFQcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eGpzL3Rvb2xraXRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=