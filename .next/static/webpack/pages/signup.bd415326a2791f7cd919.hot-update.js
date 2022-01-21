webpackHotUpdate_N_E("pages/signup",{

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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('skfk1320@naver.com'),
      id = _useState[0],
      setId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('7009900'),
      password = _useState2[0],
      setPassword = _useState2[1];

  var onChangeId = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setId(e.target.value);
  }, []);
  var onChangePassword = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setPassword(e.target.value);
  }, []);
  return __jsx("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 1
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx("label", {
    htmlFor: "user-id",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "Id"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
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
      lineNumber: 23,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx("label", {
    htmlFor: "user-password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, "Password"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user-password",
    type: "password",
    value: password,
    onChange: onChangePassword,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  })), __jsx("div", {
    style: {
      marginTop: '10px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, "Login"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 26
    }
  }, "sign up")))));
};

_s(LoginForm, "W56pZ6iBkqFdn3F44dvNjQsbN60=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiTG9naW5Gb3JtIiwidXNlU3RhdGUiLCJpZCIsInNldElkIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIm9uQ2hhbmdlSWQiLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUUsU0FBWEEsU0FBVyxHQUFNO0FBQUE7O0FBQ25CLGtCQUFrQkMsc0RBQVEsQ0FBQyxvQkFBRCxDQUExQjtBQUFBLE1BQU9DLEVBQVA7QUFBQSxNQUFVQyxLQUFWOztBQUNBLG1CQUE4QkYsc0RBQVEsQ0FBQyxTQUFELENBQXRDO0FBQUEsTUFBT0csUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFFQSxNQUFNQyxVQUFVLEdBQUVDLHlEQUFXLENBQUMsVUFBQ0MsQ0FBRCxFQUFLO0FBQ2hDTCxTQUFLLENBQUNLLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQUw7QUFDRixHQUY0QixFQUUzQixFQUYyQixDQUE3QjtBQUlBLE1BQU1DLGdCQUFnQixHQUFFSix5REFBVyxDQUFDLFVBQUNDLENBQUQsRUFBSztBQUNyQ0gsZUFBVyxDQUFDRyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFYO0FBQ0gsR0FGa0MsRUFFakMsRUFGaUMsQ0FBbkM7QUFJSCxTQUNEO0FBQUssU0FBSyxFQUFFO0FBQUNFLGFBQU8sRUFBQyxNQUFUO0FBQWlCQyxvQkFBYyxFQUFDO0FBQWhDLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMseUNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFPLFdBQU8sRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJLE1BQUMsMENBQUQ7QUFDSSxRQUFJLEVBQUMsU0FEVDtBQUVJLFNBQUssRUFBRVgsRUFGWDtBQUdJLFlBQVEsRUFBRUksVUFIZDtBQUlJLFlBQVEsTUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0FEQSxFQVVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFPLFdBQU8sRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSSxNQUFDLDBDQUFEO0FBQ0ksUUFBSSxFQUFDLGVBRFQ7QUFFSSxRQUFJLEVBQUMsVUFGVDtBQUdJLFNBQUssRUFBRUYsUUFIWDtBQUlJLFlBQVEsRUFBRU8sZ0JBSmQ7QUFLSSxZQUFRLE1BTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLENBVkEsRUFvQkE7QUFBSyxTQUFLLEVBQUU7QUFBQ0csZUFBUyxFQUFDO0FBQVgsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQywyQ0FBRDtBQUNJLFFBQUksRUFBQyxTQURUO0FBRUksWUFBUSxFQUFDLFFBRmI7QUFHSSxXQUFPLEVBQUUsS0FIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsRUFNQSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFxQixNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBckIsQ0FOQSxDQXBCQSxDQURKLENBREM7QUFpQ0EsQ0E3Q0Q7O0dBQU1kLFM7O0tBQUFBLFM7QUErQ1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ251cC5iZDQxNTMyNmEyNzkxZjdjZDkxOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Rm9ybSxJbnB1dCxCdXR0b259IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCBMb2dpbkZvcm0gPSgpID0+IHtcclxuICAgIGNvbnN0IFtpZCxzZXRJZF0gPXVzZVN0YXRlKCdza2ZrMTMyMEBuYXZlci5jb20nKVxyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF09dXNlU3RhdGUoJzcwMDk5MDAnKVxyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlSWQgPXVzZUNhbGxiYWNrKChlKT0+eyAgXHJcbiAgICAgICBzZXRJZChlLnRhcmdldC52YWx1ZSlcclxuICAgIH0sW10pXHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VQYXNzd29yZCA9dXNlQ2FsbGJhY2soKGUpPT57ICAgIFxyXG4gICAgICAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfSxbXSlcclxuXHJcbiByZXR1cm4oXHJcbjxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JywganVzdGlmeUNvbnRlbnQ6J2NlbnRlcicgfX0+XHJcbiAgICA8Rm9ybT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3VzZXItaWQnPklkPC9sYWJlbD5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgbmFtZT1cInVzZXItaWRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17aWR9IFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJZH0gXHJcbiAgICAgICAgICAgIHJlcXVpcmVkIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICA8bGFiZWwgaHRtbEZvcj0ndXNlci1wYXNzd29yZCc+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICBuYW1lPVwidXNlci1wYXNzd29yZFwiIFxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9IFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH0gXHJcbiAgICAgICAgICAgIHJlcXVpcmVkIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6JzEwcHgnfX0+XHJcbiAgICA8QnV0dG9uIFxyXG4gICAgICAgIHR5cGU9XCJwcmltYXJ5XCIgXHJcbiAgICAgICAgaHRtbFR5cGU9J3N1Ym1pdCcgXHJcbiAgICAgICAgbG9hZGluZz17ZmFsc2V9PkxvZ2luXHJcbiAgICA8L0J1dHRvbj5cclxuICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+PEJ1dHRvbj5zaWduIHVwPC9CdXR0b24+PC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L0Zvcm0+XHJcbjwvZGl2PlxyXG4gKSBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=