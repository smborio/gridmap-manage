/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_gridUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/gridUtils.js */ \"./src/utils/gridUtils.js\");\n// Define the XML namespace for SVG\r\nconst svgNS = \"http://www.w3.org/2000/svg\";\r\n\r\n// Get the SVG element with the ID \"grid\" from the HTML document\r\nconst svg = document.getElementById(\"grid\");\r\n\r\n// Define the size of the grid\r\nconst gridWidth = 10;\r\nconst gridHeight = 15;\r\n\r\n// Define the size of each grid square\r\nconst squareSize = 50;\r\n\r\n// Define the padding around the grid\r\nconst padding = 5;\r\n\r\n// Create grid\r\nfor (let i = 0; i <= gridWidth; i++) {\r\n    const verticalLine = document.createElementNS(svgNS, \"line\");\r\n    verticalLine.setAttribute(\"x1\", padding + i * squareSize);\r\n    verticalLine.setAttribute(\"y1\", padding);\r\n    verticalLine.setAttribute(\"x2\", padding + i * squareSize);\r\n    verticalLine.setAttribute(\"y2\", padding + gridHeight * squareSize);\r\n    svg.appendChild(verticalLine);\r\n}\r\n\r\nfor (let i = 0; i <= gridHeight; i++) {\r\n    const horizontalLine = document.createElementNS(svgNS, \"line\");\r\n    horizontalLine.setAttribute(\"x1\", padding);\r\n    horizontalLine.setAttribute(\"y1\", padding + i * squareSize);\r\n    horizontalLine.setAttribute(\"x2\", padding + gridWidth * squareSize);\r\n    horizontalLine.setAttribute(\"y2\", padding + i * squareSize);\r\n    svg.appendChild(horizontalLine);\r\n}\r\n\r\n// src/index.js\r\n\r\n\r\n// Call the function\r\n(0,_utils_gridUtils_js__WEBPACK_IMPORTED_MODULE_0__.makeLineRoughOnClick)();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils/gridUtils.js":
/*!********************************!*\
  !*** ./src/utils/gridUtils.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeLineRoughOnClick: () => (/* binding */ makeLineRoughOnClick)\n/* harmony export */ });\n// function that makes a line rough on click\r\nfunction makeLineRoughOnClick() {\r\n    // Wait for the DOM to be fully loaded\r\n    document.addEventListener('DOMContentLoaded', function() {\r\n        // Select all line elements\r\n        var lines = document.querySelectorAll('line');\r\n\r\n        // Add a click event listener to each line\r\n        lines.forEach(function(line) {\r\n            line.addEventListener('click', function() {\r\n                // Add the filter to the clicked line\r\n                line.setAttribute('filter', 'url(#rough)');\r\n            });\r\n        });\r\n    });\r\n}\r\n\r\n// Export the function so it can be used in other files\r\n\n\n//# sourceURL=webpack:///./src/utils/gridUtils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;