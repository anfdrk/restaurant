/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contactBtn: () => (/* binding */ contactBtn),
/* harmony export */   homeBtn: () => (/* binding */ homeBtn),
/* harmony export */   menuBtn: () => (/* binding */ menuBtn),
/* harmony export */   renderHeader: () => (/* binding */ renderHeader)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


const homeBtn = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('button', ['nav-btn']);
const homeBtnText = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('span', [], 'Home');
homeBtn.append(homeBtnText);

const menuBtn = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('button', ['nav-btn']);
const menuBtnText = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('span', [], 'Menu');
menuBtn.append(menuBtnText);

const contactBtn = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('button', ['nav-btn']);
const contactBtnText = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('span', [], 'Contact');
contactBtn.append(contactBtnText);

function createNav() {
  const nav = document.createElement('nav');
  nav.append(homeBtn, menuBtn, contactBtn);
  return nav;
}

function renderHeader() {
  const header = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('header', ['header'], null);
  const logo = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('h3', ['logo'], 'SUSHI');
  
  header.append(logo, createNav());
  _index__WEBPACK_IMPORTED_MODULE_0__.content.append(header);

  return header;
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


function renderHome() {
  const main = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('main', ['home']);
  const container = document.createElement('div');
  const title = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('h1', [], 'Taste of Japan');
  const paragraph = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('p', [], 
  'Enjoy a good dinner with the best dishes in the restourant and improve your day.');
  const img = document.createElement('img');
  img.src = 'images/sushi-rolls-1.png';
  const orderBtn = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('button', ['order-btn'], 'Order'); // добавить обработчик

  container.append(title, paragraph, orderBtn);
  main.append(container, img);
  _index_js__WEBPACK_IMPORTED_MODULE_0__.content.append(main);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHome);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   content: () => (/* binding */ content),
/* harmony export */   createHtmlElement: () => (/* binding */ createHtmlElement)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");

 

const content = document.getElementById('content');
const branch1 = createHtmlElement('div', ['branch', 'branch-left']);
const branch2 = createHtmlElement('div', ['branch', 'branch-right']);
const branch3 = createHtmlElement('div', ['branch', 'branch-right']);
const body = document.querySelector('body');
body.append(branch1, branch2, branch3);

function createHtmlElement(type, arrayClasses, content) {
  const element = document.createElement(type);
  if (arrayClasses)
    arrayClasses.forEach((myClass) => element.classList.add(myClass));
  if (content) element.innerText = content;

  return element;
}

(0,_header__WEBPACK_IMPORTED_MODULE_0__.renderHeader)();
(0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();



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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDckQ7QUFDQSxnQkFBZ0IseURBQWlCO0FBQ2pDLG9CQUFvQix5REFBaUI7QUFDckM7QUFDQTtBQUNBLGdCQUFnQix5REFBaUI7QUFDakMsb0JBQW9CLHlEQUFpQjtBQUNyQztBQUNBO0FBQ0EsbUJBQW1CLHlEQUFpQjtBQUNwQyx1QkFBdUIseURBQWlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix5REFBaUI7QUFDbEMsZUFBZSx5REFBaUI7QUFDaEM7QUFDQTtBQUNBLEVBQUUsMkNBQU87QUFDVDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdCd0Q7QUFDeEQ7QUFDQTtBQUNBLGVBQWUsNERBQWlCO0FBQ2hDO0FBQ0EsZ0JBQWdCLDREQUFpQjtBQUNqQyxvQkFBb0IsNERBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw0REFBaUIsb0NBQW9DO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOENBQU87QUFDVDtBQUNBO0FBQ0EsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQjZDO0FBQ25DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBWTtBQUNaLG9EQUFVO0FBQ1Y7Ozs7Ozs7VUNyQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbnRlbnQsIGNyZWF0ZUh0bWxFbGVtZW50IH0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5jb25zdCBob21lQnRuID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2J1dHRvbicsIFsnbmF2LWJ0biddKTtcclxuY29uc3QgaG9tZUJ0blRleHQgPSBjcmVhdGVIdG1sRWxlbWVudCgnc3BhbicsIFtdLCAnSG9tZScpO1xyXG5ob21lQnRuLmFwcGVuZChob21lQnRuVGV4dCk7XHJcblxyXG5jb25zdCBtZW51QnRuID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2J1dHRvbicsIFsnbmF2LWJ0biddKTtcclxuY29uc3QgbWVudUJ0blRleHQgPSBjcmVhdGVIdG1sRWxlbWVudCgnc3BhbicsIFtdLCAnTWVudScpO1xyXG5tZW51QnRuLmFwcGVuZChtZW51QnRuVGV4dCk7XHJcblxyXG5jb25zdCBjb250YWN0QnRuID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2J1dHRvbicsIFsnbmF2LWJ0biddKTtcclxuY29uc3QgY29udGFjdEJ0blRleHQgPSBjcmVhdGVIdG1sRWxlbWVudCgnc3BhbicsIFtdLCAnQ29udGFjdCcpO1xyXG5jb250YWN0QnRuLmFwcGVuZChjb250YWN0QnRuVGV4dCk7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XHJcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgbmF2LmFwcGVuZChob21lQnRuLCBtZW51QnRuLCBjb250YWN0QnRuKTtcclxuICByZXR1cm4gbmF2O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJIZWFkZXIoKSB7XHJcbiAgY29uc3QgaGVhZGVyID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2hlYWRlcicsIFsnaGVhZGVyJ10sIG51bGwpO1xyXG4gIGNvbnN0IGxvZ28gPSBjcmVhdGVIdG1sRWxlbWVudCgnaDMnLCBbJ2xvZ28nXSwgJ1NVU0hJJyk7XHJcbiAgXHJcbiAgaGVhZGVyLmFwcGVuZChsb2dvLCBjcmVhdGVOYXYoKSk7XHJcbiAgY29udGVudC5hcHBlbmQoaGVhZGVyKTtcclxuXHJcbiAgcmV0dXJuIGhlYWRlcjtcclxufVxyXG5cclxuZXhwb3J0IHsgaG9tZUJ0biwgbWVudUJ0biwgY29udGFjdEJ0biwgcmVuZGVySGVhZGVyIH07IiwiaW1wb3J0IHsgY29udGVudCwgY3JlYXRlSHRtbEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LmpzJztcclxuXHJcbmZ1bmN0aW9uIHJlbmRlckhvbWUoKSB7XHJcbiAgY29uc3QgbWFpbiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdtYWluJywgWydob21lJ10pO1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHRpdGxlID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2gxJywgW10sICdUYXN0ZSBvZiBKYXBhbicpO1xyXG4gIGNvbnN0IHBhcmFncmFwaCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgW10sIFxyXG4gICdFbmpveSBhIGdvb2QgZGlubmVyIHdpdGggdGhlIGJlc3QgZGlzaGVzIGluIHRoZSByZXN0b3VyYW50IGFuZCBpbXByb3ZlIHlvdXIgZGF5LicpO1xyXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGltZy5zcmMgPSAnaW1hZ2VzL3N1c2hpLXJvbGxzLTEucG5nJztcclxuICBjb25zdCBvcmRlckJ0biA9IGNyZWF0ZUh0bWxFbGVtZW50KCdidXR0b24nLCBbJ29yZGVyLWJ0biddLCAnT3JkZXInKTsgLy8g0LTQvtCx0LDQstC40YLRjCDQvtCx0YDQsNCx0L7RgtGH0LjQulxyXG5cclxuICBjb250YWluZXIuYXBwZW5kKHRpdGxlLCBwYXJhZ3JhcGgsIG9yZGVyQnRuKTtcclxuICBtYWluLmFwcGVuZChjb250YWluZXIsIGltZyk7XHJcbiAgY29udGVudC5hcHBlbmQobWFpbik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlbmRlckhvbWU7IiwiaW1wb3J0IHsgaG9tZUJ0biwgbWVudUJ0biwgY29udGFjdEJ0biwgcmVuZGVySGVhZGVyIH0gZnJvbSAnLi9oZWFkZXInO1xyXG5pbXBvcnQgcmVuZGVySG9tZSBmcm9tICcuL2hvbWUuanMnOyBcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG5jb25zdCBicmFuY2gxID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsIFsnYnJhbmNoJywgJ2JyYW5jaC1sZWZ0J10pO1xyXG5jb25zdCBicmFuY2gyID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsIFsnYnJhbmNoJywgJ2JyYW5jaC1yaWdodCddKTtcclxuY29uc3QgYnJhbmNoMyA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCBbJ2JyYW5jaCcsICdicmFuY2gtcmlnaHQnXSk7XHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbmJvZHkuYXBwZW5kKGJyYW5jaDEsIGJyYW5jaDIsIGJyYW5jaDMpO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlSHRtbEVsZW1lbnQodHlwZSwgYXJyYXlDbGFzc2VzLCBjb250ZW50KSB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XHJcbiAgaWYgKGFycmF5Q2xhc3NlcylcclxuICAgIGFycmF5Q2xhc3Nlcy5mb3JFYWNoKChteUNsYXNzKSA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQobXlDbGFzcykpO1xyXG4gIGlmIChjb250ZW50KSBlbGVtZW50LmlubmVyVGV4dCA9IGNvbnRlbnQ7XHJcblxyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5yZW5kZXJIZWFkZXIoKTtcclxucmVuZGVySG9tZSgpO1xyXG5cclxuZXhwb3J0IHsgY29udGVudCwgY3JlYXRlSHRtbEVsZW1lbnQgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9