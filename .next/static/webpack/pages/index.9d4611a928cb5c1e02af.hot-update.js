webpackHotUpdate_N_E("pages/index",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\su\\Desktop\\nodebird\\front\\components\\LoginForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var LoginForm = function LoginForm() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      id = _useState[0],
      setId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      password = _useState2[0],
      setPassword = _useState2[1];

  var onChangeId = function onChangeId(e) {
    e.preventdfault();
    console.log(e.target.value);
  };

  var onChangePassword = function onChangePassword(e) {
    e.preventdfault();
    console.log(e.target.value);
  };

  return __jsx("div", {
    style: {
      margin: 'auto'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 1
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("label", {
    htmlFor: "user-id",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, "Id"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user-id",
    value: id,
    onChange: onChangeId,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("label", {
    htmlFor: "user-password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, "Password"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user-password",
    value: password,
    onChange: onChangePassword,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, "Login"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 26
    }
  }, "sign up")))));
};

_s(LoginForm, "lFo7AmkhWx8EEJDiRdbe480WaWo=");

_c = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

var _c;

$RefreshReg$(_c, "LoginForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiTG9naW5Gb3JtIiwidXNlU3RhdGUiLCJpZCIsInNldElkIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIm9uQ2hhbmdlSWQiLCJlIiwicHJldmVudGRmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUUsU0FBWEEsU0FBVyxHQUFNO0FBQUE7O0FBQ25CLGtCQUFrQkMsc0RBQVEsQ0FBQyxFQUFELENBQTFCO0FBQUEsTUFBT0MsRUFBUDtBQUFBLE1BQVVDLEtBQVY7O0FBQ0EsbUJBQThCRixzREFBUSxDQUFDLEVBQUQsQ0FBdEM7QUFBQSxNQUFPRyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUVBLE1BQU1DLFVBQVUsR0FBRSxTQUFaQSxVQUFZLENBQUNDLENBQUQsRUFBSztBQUNuQkEsS0FBQyxDQUFDQyxhQUFGO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxDQUFDLENBQUNJLE1BQUYsQ0FBU0MsS0FBckI7QUFDSCxHQUhEOztBQUtBLE1BQU1DLGdCQUFnQixHQUFFLFNBQWxCQSxnQkFBa0IsQ0FBQ04sQ0FBRCxFQUFLO0FBQ3pCQSxLQUFDLENBQUNDLGFBQUY7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlILENBQUMsQ0FBQ0ksTUFBRixDQUFTQyxLQUFyQjtBQUNILEdBSEQ7O0FBS0gsU0FDRDtBQUFLLFNBQUssRUFBRTtBQUFFRSxZQUFNLEVBQUU7QUFBVixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHlDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxXQUFPLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSSxNQUFDLDBDQUFEO0FBQ0ksUUFBSSxFQUFDLFNBRFQ7QUFFSSxTQUFLLEVBQUVaLEVBRlg7QUFHSSxZQUFRLEVBQUVJLFVBSGQ7QUFJSSxZQUFRLE1BSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLENBREEsRUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBTyxXQUFPLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0ksTUFBQywwQ0FBRDtBQUNJLFFBQUksRUFBQyxlQURUO0FBRUksU0FBSyxFQUFFRixRQUZYO0FBR0ksWUFBUSxFQUFFUyxnQkFIZDtBQUlJLFlBQVEsTUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0FWQSxFQW1CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQywyQ0FBRDtBQUNJLFFBQUksRUFBQyxTQURUO0FBRUksWUFBUSxFQUFDLFFBRmI7QUFHSSxXQUFPLEVBQUUsS0FIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsRUFNQSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFxQixNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBckIsQ0FOQSxDQW5CQSxDQURKLENBREM7QUFnQ0EsQ0E5Q0Q7O0dBQU1iLFM7O0tBQUFBLFM7QUFnRFNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjlkNDYxMWE5MjhjYjVjMWUwMmFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtGb3JtLElucHV0LEJ1dHRvbn0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IExvZ2luRm9ybSA9KCkgPT4ge1xyXG4gICAgY29uc3QgW2lkLHNldElkXSA9dXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXT11c2VTdGF0ZSgnJylcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZUlkID0oZSk9PntcclxuICAgICAgICBlLnByZXZlbnRkZmF1bHQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkID0oZSk9PntcclxuICAgICAgICBlLnByZXZlbnRkZmF1bHQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiByZXR1cm4oXHJcbjxkaXYgc3R5bGU9e3sgbWFyZ2luOiAnYXV0byd9fT5cclxuICAgIDxGb3JtPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj0ndXNlci1pZCc+SWQ8L2xhYmVsPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICBuYW1lPVwidXNlci1pZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpZH0gXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUlkfSBcclxuICAgICAgICAgICAgcmVxdWlyZWQgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgIDxsYWJlbCBodG1sRm9yPSd1c2VyLXBhc3N3b3JkJz5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgIG5hbWU9XCJ1c2VyLXBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH0gXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfSBcclxuICAgICAgICAgICAgcmVxdWlyZWQgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgIDxCdXR0b24gXHJcbiAgICAgICAgdHlwZT1cInByaW1hcnlcIiBcclxuICAgICAgICBodG1sVHlwZT0nc3VibWl0JyBcclxuICAgICAgICBsb2FkaW5nPXtmYWxzZX0+TG9naW5cclxuICAgIDwvQnV0dG9uPlxyXG4gICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj48QnV0dG9uPnNpZ24gdXA8L0J1dHRvbj48L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvRm9ybT5cclxuPC9kaXY+XHJcbiApIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==