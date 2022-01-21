webpackHotUpdate_N_E("pages/index",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject,
    _templateObject2,
    _templateObject3,
    _this = undefined,
    _jsxFileName = "C:\\Users\\su\\Desktop\\nodebird\\front\\components\\LoginForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n margin-top: 10px;\n display : flex;\n justify-content :center;\n"])));
_c = ButtonWrapper;
var DivWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\ndisplay:flex;\njustify-content:center; \n"])));
_c2 = DivWrapper;
var FormWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"])(_templateObject3 || (_templateObject3 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding: 10px;\n"])));
_c3 = FormWrapper;

var LoginForm = function LoginForm(_ref) {
  _s();

  var setIsLoggedIn = _ref.setIsLoggedIn;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('skfk1320@naver.com'),
      id = _useState[0],
      setId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('7009900'),
      password = _useState2[0],
      setPassword = _useState2[1];

  var onChangeId = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setId(e.target.value);
  }, []);
  var onChangePassword = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setPassword(e.target.value);
  }, []);
  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    console.log(id, password);
    setIsLoggedIn(true);
  }, [id, password]);
  return __jsx(DivWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 1
    }
  }, __jsx(FormWrapper, {
    onFinish: onSubmitForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx("label", {
    htmlFor: "user-id",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, "Id"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-id",
    value: id,
    onChange: onChangeId,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx("label", {
    htmlFor: "user-password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, "Password"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-password",
    type: "password",
    value: password,
    onChange: onChangePassword,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  })), __jsx(ButtonWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, "Login"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/signup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 26
    }
  }, "sign up")))));
};

_s(LoginForm, "Zyp1mNkbVe+Hv7GCRFNX7LaDT38=");

_c4 = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "ButtonWrapper");
$RefreshReg$(_c2, "DivWrapper");
$RefreshReg$(_c3, "FormWrapper");
$RefreshReg$(_c4, "LoginForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiQnV0dG9uV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkRpdldyYXBwZXIiLCJGb3JtV3JhcHBlciIsIkZvcm0iLCJMb2dpbkZvcm0iLCJzZXRJc0xvZ2dlZEluIiwidXNlU3RhdGUiLCJpZCIsInNldElkIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIm9uQ2hhbmdlSWQiLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJvblN1Ym1pdEZvcm0iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsa05BQW5CO0tBQU1GLGE7QUFNTixJQUFNRyxVQUFVLEdBQUdGLHlEQUFNLENBQUNDLEdBQVYsNExBQWhCO01BQU1DLFU7QUFLTixJQUFNQyxXQUFXLEdBQUdILGlFQUFNLENBQUNJLHlDQUFELENBQVQsdUtBQWpCO01BQU1ELFc7O0FBSU4sSUFBTUUsU0FBUyxHQUFFLFNBQVhBLFNBQVcsT0FBcUI7QUFBQTs7QUFBQSxNQUFuQkMsYUFBbUIsUUFBbkJBLGFBQW1COztBQUNsQyxrQkFBa0JDLHNEQUFRLENBQUMsb0JBQUQsQ0FBMUI7QUFBQSxNQUFPQyxFQUFQO0FBQUEsTUFBVUMsS0FBVjs7QUFDQSxtQkFBOEJGLHNEQUFRLENBQUMsU0FBRCxDQUF0QztBQUFBLE1BQU9HLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBRUEsTUFBTUMsVUFBVSxHQUFFQyx5REFBVyxDQUFDLFVBQUNDLENBQUQsRUFBSztBQUNoQ0wsU0FBSyxDQUFDSyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFMO0FBQ0YsR0FGNEIsRUFFM0IsRUFGMkIsQ0FBN0I7QUFJQSxNQUFNQyxnQkFBZ0IsR0FBRUoseURBQVcsQ0FBQyxVQUFDQyxDQUFELEVBQUs7QUFDckNILGVBQVcsQ0FBQ0csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUNILEdBRmtDLEVBRWpDLEVBRmlDLENBQW5DO0FBSUEsTUFBTUUsWUFBWSxHQUFHTCx5REFBVyxDQUFDLFlBQUk7QUFDakNNLFdBQU8sQ0FBQ0MsR0FBUixDQUFZWixFQUFaLEVBQWVFLFFBQWY7QUFDQUosaUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDSCxHQUgrQixFQUc5QixDQUFDRSxFQUFELEVBQUlFLFFBQUosQ0FIOEIsQ0FBaEM7QUFLSCxTQUNELE1BQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxXQUFEO0FBQWEsWUFBUSxFQUFFUSxZQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sV0FBTyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0ksTUFBQywwQ0FBRDtBQUNJLFFBQUksRUFBQyxTQURUO0FBRUksU0FBSyxFQUFFVixFQUZYO0FBR0ksWUFBUSxFQUFFSSxVQUhkO0FBSUksWUFBUSxNQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixDQURBLEVBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQU8sV0FBTyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQSxFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJLE1BQUMsMENBQUQ7QUFDSSxRQUFJLEVBQUMsZUFEVDtBQUVJLFFBQUksRUFBQyxVQUZUO0FBR0ksU0FBSyxFQUFFRixRQUhYO0FBSUksWUFBUSxFQUFFTyxnQkFKZDtBQUtJLFlBQVEsTUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0FWQSxFQW9CQSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsMkNBQUQ7QUFDSSxRQUFJLEVBQUMsU0FEVDtBQUVJLFlBQVEsRUFBQyxRQUZiO0FBR0ksV0FBTyxFQUFFLEtBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLEVBTUEsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBcUIsTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXJCLENBTkEsQ0FwQkEsQ0FESixDQURDO0FBaUNBLENBbEREOztHQUFNWixTOztNQUFBQSxTO0FBb0RTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wODU5NDU1M2EyMDFkYzM5OTIzZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Rm9ybSxJbnB1dCxCdXR0b259IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBCdXR0b25XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuIG1hcmdpbi10b3A6IDEwcHg7XHJcbiBkaXNwbGF5IDogZmxleDtcclxuIGp1c3RpZnktY29udGVudCA6Y2VudGVyO1xyXG5gXHJcblxyXG5jb25zdCBEaXZXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBcclxuYFxyXG5cclxuY29uc3QgRm9ybVdyYXBwZXIgPSBzdHlsZWQoRm9ybSlgXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5gXHJcblxyXG5jb25zdCBMb2dpbkZvcm0gPSh7c2V0SXNMb2dnZWRJbn0pID0+IHtcclxuICAgIGNvbnN0IFtpZCxzZXRJZF0gPXVzZVN0YXRlKCdza2ZrMTMyMEBuYXZlci5jb20nKVxyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF09dXNlU3RhdGUoJzcwMDk5MDAnKVxyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlSWQgPXVzZUNhbGxiYWNrKChlKT0+eyAgXHJcbiAgICAgICBzZXRJZChlLnRhcmdldC52YWx1ZSlcclxuICAgIH0sW10pXHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VQYXNzd29yZCA9dXNlQ2FsbGJhY2soKGUpPT57ICAgIFxyXG4gICAgICAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkLHBhc3N3b3JkKVxyXG4gICAgICAgIHNldElzTG9nZ2VkSW4odHJ1ZSlcclxuICAgIH0sW2lkLHBhc3N3b3JkXSlcclxuXHJcbiByZXR1cm4oXHJcbjxEaXZXcmFwcGVyPlxyXG4gICAgPEZvcm1XcmFwcGVyIG9uRmluaXNoPXtvblN1Ym1pdEZvcm19PlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj0ndXNlci1pZCc+SWQ8L2xhYmVsPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICBuYW1lPVwidXNlci1pZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpZH0gXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUlkfSBcclxuICAgICAgICAgICAgcmVxdWlyZWQgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgIDxsYWJlbCBodG1sRm9yPSd1c2VyLXBhc3N3b3JkJz5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgIG5hbWU9XCJ1c2VyLXBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH0gXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfSBcclxuICAgICAgICAgICAgcmVxdWlyZWQgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPEJ1dHRvbldyYXBwZXI+XHJcbiAgICA8QnV0dG9uIFxyXG4gICAgICAgIHR5cGU9XCJwcmltYXJ5XCIgXHJcbiAgICAgICAgaHRtbFR5cGU9J3N1Ym1pdCcgXHJcbiAgICAgICAgbG9hZGluZz17ZmFsc2V9PkxvZ2luXHJcbiAgICA8L0J1dHRvbj5cclxuICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+PEJ1dHRvbj5zaWduIHVwPC9CdXR0b24+PC9MaW5rPlxyXG4gICAgPC9CdXR0b25XcmFwcGVyPlxyXG4gICAgPC9Gb3JtV3JhcHBlcj5cclxuPC9EaXZXcmFwcGVyPlxyXG4gKSBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=