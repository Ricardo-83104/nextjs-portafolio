"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile */ \"./profile.js\");\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Post = function(param) {\n    var post1 = param.post;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(router.query.title);\n    var currentPost = _profile__WEBPACK_IMPORTED_MODULE_3__.posts.filter(function(post) {\n        return post.title === router.query.title;\n    })[0];\n    console.log(currentPost);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        footer: false,\n        title: router.query.title,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: currentPost.imageURL,\n                    alt: \"\",\n                    className: \"img-fluid\",\n                    style: {\n                        width: '50'\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/ricardotellez/Downloads/NEXTPORTAFOLIO/pages/post.js\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: currentPost.content\n                }, void 0, false, {\n                    fileName: \"/Users/ricardotellez/Downloads/NEXTPORTAFOLIO/pages/post.js\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Post\"\n                }, void 0, false, {\n                    fileName: \"/Users/ricardotellez/Downloads/NEXTPORTAFOLIO/pages/post.js\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ricardotellez/Downloads/NEXTPORTAFOLIO/pages/post.js\",\n            lineNumber: 17,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/ricardotellez/Downloads/NEXTPORTAFOLIO/pages/post.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, _this));\n};\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXlDO0FBQ0Y7QUFDTDs7O0FBRWxDLEdBQUssQ0FBQ0csSUFBSSxHQUFHLFFBQVEsUUFBSSxDQUFDO1FBQVhDLEtBQUksU0FBSkEsSUFBSTs7SUFFZixHQUFLLENBQUNDLE1BQU0sR0FBR0osc0RBQVM7SUFFeEJLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixNQUFNLENBQUNHLEtBQUssQ0FBQ0MsS0FBSztJQUc5QixHQUFLLENBQUNDLFdBQVcsR0FBR1Isa0RBQVksQ0FBQ0UsUUFBUUEsQ0FBUkEsSUFBSTtRQUFJQSxNQUFNLENBQU5BLElBQUksQ0FBQ0ssS0FBSyxLQUFLSixNQUFNLENBQUNHLEtBQUssQ0FBQ0MsS0FBSztPQUFFLENBQUM7SUFDN0VILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxXQUFXO0lBRXZCLE1BQU0sNkVBQ0RWLDBEQUFNO1FBQUNZLE1BQU0sRUFBRSxLQUFLO1FBQUVILEtBQUssRUFBRUosTUFBTSxDQUFDRyxLQUFLLENBQUNDLEtBQUs7OEZBQzNDSSxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFhOzs0RkFDdkJDLENBQUc7b0JBQUNDLEdBQUcsRUFBRU4sV0FBVyxDQUFDTyxRQUFRO29CQUFFQyxHQUFHLEVBQUMsQ0FBRTtvQkFBQ0osU0FBUyxFQUFDLENBQVc7b0JBQUNLLEtBQUssRUFBRSxDQUFDQzt3QkFBQUEsS0FBSyxFQUFFLENBQUk7b0JBQUEsQ0FBQzs7Ozs7OzRGQUNoRkMsQ0FBQzs4QkFBRVgsV0FBVyxDQUFDWSxPQUFPOzs7Ozs7NEZBQ3RCQyxDQUFFOzhCQUFDLENBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXhCLENBQUM7R0FuQktwQixJQUFJOztRQUVTRixrREFBUzs7O0tBRnRCRSxJQUFJO0FBcUJWLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3QuanM/MjU2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgcG9zdHMgfSBmcm9tICcuLi9wcm9maWxlJztcblxuY29uc3QgUG9zdCA9ICh7cG9zdH0pID0+IHtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgY29uc29sZS5sb2cocm91dGVyLnF1ZXJ5LnRpdGxlKTtcblxuXG4gICAgY29uc3QgY3VycmVudFBvc3QgPSBwb3N0cy5maWx0ZXIocG9zdCA9PiBwb3N0LnRpdGxlID09PSByb3V0ZXIucXVlcnkudGl0bGUpWzBdO1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQb3N0KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQgZm9vdGVyPXtmYWxzZX0gdGl0bGU9e3JvdXRlci5xdWVyeS50aXRsZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjdXJyZW50UG9zdC5pbWFnZVVSTH0gYWx0PVwiXCIgY2xhc3NOYW1lPSdpbWctZmx1aWQnIHN0eWxlPXt7d2lkdGg6ICc1MCd9fS8+XG4gICAgICAgICAgICAgICAgPHA+e2N1cnJlbnRQb3N0LmNvbnRlbnR9PC9wPlxuICAgICAgICAgICAgICAgIDxoMT5Qb3N0PC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0Il0sIm5hbWVzIjpbIkxheW91dCIsInVzZVJvdXRlciIsInBvc3RzIiwiUG9zdCIsInBvc3QiLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJ0aXRsZSIsImN1cnJlbnRQb3N0IiwiZmlsdGVyIiwiZm9vdGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaW1hZ2VVUkwiLCJhbHQiLCJzdHlsZSIsIndpZHRoIiwicCIsImNvbnRlbnQiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post.js\n");

/***/ })

});