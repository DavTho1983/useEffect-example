webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/childComponent.js":
false,

/***/ "./src/parentComponent.js":
/*!********************************!*\
  !*** ./src/parentComponent.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _thing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thing */ "./src/thing.js");
var _jsxFileName = "C:\\Users\\david\\ReactProjects\\hello-next\\src\\parentComponent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ParentComponent = function ParentComponent() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      inputText = _useState[0],
      setInputText = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(inputText);
  }, [inputText]);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("input", {
    onChange: function onChange(e) {
      setInputText(e.target.value);
    },
    placeholder: "Enter some more text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(_thing__WEBPACK_IMPORTED_MODULE_1__["default"], {
    inputText: inputText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ParentComponent);

/***/ }),

/***/ "./src/thing.js":
/*!**********************!*\
  !*** ./src/thing.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\david\\ReactProjects\\hello-next\\src\\thing.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Thing = function Thing(inputText) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, inputText);
};

/* harmony default export */ __webpack_exports__["default"] = (Thing);

/***/ })

})
//# sourceMappingURL=index.js.a55742ea55f8ecfb9327.hot-update.js.map