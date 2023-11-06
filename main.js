/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addBackground: () => (/* binding */ addBackground)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


function addBackground() {
  const branch1 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('div', ['branch', 'branch-left']);
  const branch2 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('div', ['branch', 'branch-right']);
  const branch3 = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('div', ['branch', 'branch-right']);
  document.body.append(branch1, branch2, branch3);
}



/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderHeader: () => (/* binding */ renderHeader)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


function renderHeader() {
  const header = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('header', ['header']);
  const logo = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('h3', ['logo'], 'SUSHI');
  const nav = document.createElement('nav');
  const [homeBtn, menuBtn, contactBtn] = createNavButtons();

  nav.append(homeBtn, menuBtn, contactBtn);
  header.append(logo, nav);
  _index__WEBPACK_IMPORTED_MODULE_0__.content.append(header);

  return header;
}

function createNavButtons() {
  const homeBtn = createButton('Home');
  const menuBtn = createButton('Menu');
  const contactBtn = createButton('Contact');
  return [homeBtn, menuBtn, contactBtn];
}

function createButton(text) {
  const button = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('button', ['nav-btn']);
  const buttonText = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('span', [], text);
  button.append(buttonText);
  
  button.addEventListener('click', () => {
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.handleButtonClick)(button, text);
  });
  
  return button;
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderHome: () => (/* binding */ renderHome)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


function renderHome() {
  _index__WEBPACK_IMPORTED_MODULE_0__.main.innerHTML = '';
  _index__WEBPACK_IMPORTED_MODULE_0__.main.className = '';
  _index__WEBPACK_IMPORTED_MODULE_0__.main.classList.add('home');

  const container = document.createElement('div');
  const title = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('h1', [], 'Taste of Japan');
  const paragraph = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('p', [], 
  'Enjoy a good dinner with the best dishes in the restourant and improve your day.');
  const img = document.createElement('img');
  img.src = 'images/sushi-rolls-1.png';
  const orderBtn = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('button', ['order-btn'], 'Order'); // добавить обработчик

  container.append(title, paragraph, orderBtn);
  _index__WEBPACK_IMPORTED_MODULE_0__.main.append(container, img);
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   content: () => (/* binding */ content),
/* harmony export */   createHtmlElement: () => (/* binding */ createHtmlElement),
/* harmony export */   handleButtonClick: () => (/* binding */ handleButtonClick),
/* harmony export */   main: () => (/* binding */ main)
/* harmony export */ });
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background */ "./src/background.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");





const content = document.getElementById('content');

(0,_background__WEBPACK_IMPORTED_MODULE_0__.addBackground)();
(0,_header__WEBPACK_IMPORTED_MODULE_1__.renderHeader)();
const main = document.createElement('main');
content.append(main);
(0,_home__WEBPACK_IMPORTED_MODULE_2__.renderHome)();

function handleButtonClick(button, buttonText) {
  const allButtons = document.querySelectorAll('.nav-btn span');
  allButtons.forEach(b => b.classList.remove('active'));

  button.querySelector('span').classList.add('active');

  if (buttonText === 'Home') (0,_home__WEBPACK_IMPORTED_MODULE_2__.renderHome)();
  if (buttonText === 'Menu') (0,_menu__WEBPACK_IMPORTED_MODULE_3__.renderMenu)();
}

function createHtmlElement(type, classes, content) {
  const element = document.createElement(type);
  if (classes)
    classes.forEach(c => element.classList.add(c));
  if (content) element.innerText = content;
  
  return element;
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderMenu: () => (/* binding */ renderMenu)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


function renderMenu() {
  _index__WEBPACK_IMPORTED_MODULE_0__.main.innerHTML = '';
  _index__WEBPACK_IMPORTED_MODULE_0__.main.className = '';
  _index__WEBPACK_IMPORTED_MODULE_0__.main.classList.add('menu');
  
  const p = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('p', [], 
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic quo architecto ipsum magnam eum adipisci dicta blanditiis nam! Voluptate doloribus qui aliquid ut minima fugit distinctio neque beatae numquam recusandae.');

  _index__WEBPACK_IMPORTED_MODULE_0__.main.append(p);
}



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDNUM7QUFDQTtBQUNBLGtCQUFrQix5REFBaUI7QUFDbkMsa0JBQWtCLHlEQUFpQjtBQUNuQyxrQkFBa0IseURBQWlCO0FBQ25DO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1J3RTtBQUN4RTtBQUNBO0FBQ0EsaUJBQWlCLHlEQUFpQjtBQUNsQyxlQUFlLHlEQUFpQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwyQ0FBTztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix5REFBaUI7QUFDbEMscUJBQXFCLHlEQUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFpQjtBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQzJEO0FBQzNEO0FBQ0E7QUFDQSxFQUFFLHdDQUFJO0FBQ04sRUFBRSx3Q0FBSTtBQUNOLEVBQUUsd0NBQUk7QUFDTjtBQUNBO0FBQ0EsZ0JBQWdCLHlEQUFpQjtBQUNqQyxvQkFBb0IseURBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix5REFBaUIsb0NBQW9DO0FBQ3hFO0FBQ0E7QUFDQSxFQUFFLHdDQUFJO0FBQ047QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCNkM7QUFDTDtBQUNKO0FBQ0E7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsMERBQWE7QUFDYixxREFBWTtBQUNaO0FBQ0E7QUFDQSxpREFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGlEQUFVO0FBQ3ZDLDZCQUE2QixpREFBVTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0IyRDtBQUMzRDtBQUNBO0FBQ0EsRUFBRSx3Q0FBSTtBQUNOLEVBQUUsd0NBQUk7QUFDTixFQUFFLHdDQUFJO0FBQ047QUFDQSxZQUFZLHlEQUFpQjtBQUM3QjtBQUNBO0FBQ0EsRUFBRSx3Q0FBSTtBQUNOO0FBQ0E7Ozs7Ozs7VUNaQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVIdG1sRWxlbWVudCB9IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuZnVuY3Rpb24gYWRkQmFja2dyb3VuZCgpIHtcclxuICBjb25zdCBicmFuY2gxID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsIFsnYnJhbmNoJywgJ2JyYW5jaC1sZWZ0J10pO1xyXG4gIGNvbnN0IGJyYW5jaDIgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgWydicmFuY2gnLCAnYnJhbmNoLXJpZ2h0J10pO1xyXG4gIGNvbnN0IGJyYW5jaDMgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgWydicmFuY2gnLCAnYnJhbmNoLXJpZ2h0J10pO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKGJyYW5jaDEsIGJyYW5jaDIsIGJyYW5jaDMpO1xyXG59XHJcblxyXG5leHBvcnQgeyBhZGRCYWNrZ3JvdW5kIH07IiwiaW1wb3J0IHsgY29udGVudCwgY3JlYXRlSHRtbEVsZW1lbnQsIGhhbmRsZUJ1dHRvbkNsaWNrIH0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJIZWFkZXIoKSB7XHJcbiAgY29uc3QgaGVhZGVyID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2hlYWRlcicsIFsnaGVhZGVyJ10pO1xyXG4gIGNvbnN0IGxvZ28gPSBjcmVhdGVIdG1sRWxlbWVudCgnaDMnLCBbJ2xvZ28nXSwgJ1NVU0hJJyk7XHJcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgY29uc3QgW2hvbWVCdG4sIG1lbnVCdG4sIGNvbnRhY3RCdG5dID0gY3JlYXRlTmF2QnV0dG9ucygpO1xyXG5cclxuICBuYXYuYXBwZW5kKGhvbWVCdG4sIG1lbnVCdG4sIGNvbnRhY3RCdG4pO1xyXG4gIGhlYWRlci5hcHBlbmQobG9nbywgbmF2KTtcclxuICBjb250ZW50LmFwcGVuZChoZWFkZXIpO1xyXG5cclxuICByZXR1cm4gaGVhZGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOYXZCdXR0b25zKCkge1xyXG4gIGNvbnN0IGhvbWVCdG4gPSBjcmVhdGVCdXR0b24oJ0hvbWUnKTtcclxuICBjb25zdCBtZW51QnRuID0gY3JlYXRlQnV0dG9uKCdNZW51Jyk7XHJcbiAgY29uc3QgY29udGFjdEJ0biA9IGNyZWF0ZUJ1dHRvbignQ29udGFjdCcpO1xyXG4gIHJldHVybiBbaG9tZUJ0biwgbWVudUJ0biwgY29udGFjdEJ0bl07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbih0ZXh0KSB7XHJcbiAgY29uc3QgYnV0dG9uID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2J1dHRvbicsIFsnbmF2LWJ0biddKTtcclxuICBjb25zdCBidXR0b25UZXh0ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3NwYW4nLCBbXSwgdGV4dCk7XHJcbiAgYnV0dG9uLmFwcGVuZChidXR0b25UZXh0KTtcclxuICBcclxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBoYW5kbGVCdXR0b25DbGljayhidXR0b24sIHRleHQpO1xyXG4gIH0pO1xyXG4gIFxyXG4gIHJldHVybiBidXR0b247XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlbmRlckhlYWRlciB9OyIsImltcG9ydCB7IGNvbnRlbnQsIG1haW4sIGNyZWF0ZUh0bWxFbGVtZW50IH0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJIb21lKCkge1xyXG4gIG1haW4uaW5uZXJIVE1MID0gJyc7XHJcbiAgbWFpbi5jbGFzc05hbWUgPSAnJztcclxuICBtYWluLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcclxuXHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgdGl0bGUgPSBjcmVhdGVIdG1sRWxlbWVudCgnaDEnLCBbXSwgJ1Rhc3RlIG9mIEphcGFuJyk7XHJcbiAgY29uc3QgcGFyYWdyYXBoID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3AnLCBbXSwgXHJcbiAgJ0Vuam95IGEgZ29vZCBkaW5uZXIgd2l0aCB0aGUgYmVzdCBkaXNoZXMgaW4gdGhlIHJlc3RvdXJhbnQgYW5kIGltcHJvdmUgeW91ciBkYXkuJyk7XHJcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgaW1nLnNyYyA9ICdpbWFnZXMvc3VzaGktcm9sbHMtMS5wbmcnO1xyXG4gIGNvbnN0IG9yZGVyQnRuID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2J1dHRvbicsIFsnb3JkZXItYnRuJ10sICdPcmRlcicpOyAvLyDQtNC+0LHQsNCy0LjRgtGMINC+0LHRgNCw0LHQvtGC0YfQuNC6XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmQodGl0bGUsIHBhcmFncmFwaCwgb3JkZXJCdG4pO1xyXG4gIG1haW4uYXBwZW5kKGNvbnRhaW5lciwgaW1nKTtcclxufVxyXG5cclxuZXhwb3J0IHsgcmVuZGVySG9tZSB9OyIsImltcG9ydCB7IGFkZEJhY2tncm91bmQgfSBmcm9tICcuL2JhY2tncm91bmQnO1xyXG5pbXBvcnQgeyByZW5kZXJIZWFkZXIgfSBmcm9tICcuL2hlYWRlcic7XHJcbmltcG9ydCB7IHJlbmRlckhvbWUgfSBmcm9tICcuL2hvbWUnO1xyXG5pbXBvcnQgeyByZW5kZXJNZW51IH0gZnJvbSAnLi9tZW51JztcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG5cclxuYWRkQmFja2dyb3VuZCgpO1xyXG5yZW5kZXJIZWFkZXIoKTtcclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuY29udGVudC5hcHBlbmQobWFpbik7XHJcbnJlbmRlckhvbWUoKTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUJ1dHRvbkNsaWNrKGJ1dHRvbiwgYnV0dG9uVGV4dCkge1xyXG4gIGNvbnN0IGFsbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWJ0biBzcGFuJyk7XHJcbiAgYWxsQnV0dG9ucy5mb3JFYWNoKGIgPT4gYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcblxyXG4gIGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCdzcGFuJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG4gIGlmIChidXR0b25UZXh0ID09PSAnSG9tZScpIHJlbmRlckhvbWUoKTtcclxuICBpZiAoYnV0dG9uVGV4dCA9PT0gJ01lbnUnKSByZW5kZXJNZW51KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUh0bWxFbGVtZW50KHR5cGUsIGNsYXNzZXMsIGNvbnRlbnQpIHtcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuICBpZiAoY2xhc3NlcylcclxuICAgIGNsYXNzZXMuZm9yRWFjaChjID0+IGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjKSk7XHJcbiAgaWYgKGNvbnRlbnQpIGVsZW1lbnQuaW5uZXJUZXh0ID0gY29udGVudDtcclxuICBcclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IHsgY29udGVudCwgbWFpbiwgY3JlYXRlSHRtbEVsZW1lbnQsIGhhbmRsZUJ1dHRvbkNsaWNrIH07IiwiaW1wb3J0IHsgY29udGVudCwgbWFpbiwgY3JlYXRlSHRtbEVsZW1lbnQgfSBmcm9tICcuL2luZGV4JztcclxuXHJcbmZ1bmN0aW9uIHJlbmRlck1lbnUoKSB7XHJcbiAgbWFpbi5pbm5lckhUTUwgPSAnJztcclxuICBtYWluLmNsYXNzTmFtZSA9ICcnO1xyXG4gIG1haW4uY2xhc3NMaXN0LmFkZCgnbWVudScpO1xyXG4gIFxyXG4gIGNvbnN0IHAgPSBjcmVhdGVIdG1sRWxlbWVudCgncCcsIFtdLCBcclxuICAnTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEhpYyBxdW8gYXJjaGl0ZWN0byBpcHN1bSBtYWduYW0gZXVtIGFkaXBpc2NpIGRpY3RhIGJsYW5kaXRpaXMgbmFtISBWb2x1cHRhdGUgZG9sb3JpYnVzIHF1aSBhbGlxdWlkIHV0IG1pbmltYSBmdWdpdCBkaXN0aW5jdGlvIG5lcXVlIGJlYXRhZSBudW1xdWFtIHJlY3VzYW5kYWUuJyk7XHJcblxyXG4gIG1haW4uYXBwZW5kKHApO1xyXG59XHJcblxyXG5leHBvcnQgeyByZW5kZXJNZW51IH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==