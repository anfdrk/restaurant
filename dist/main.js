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
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");



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
  const orderBtn = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('button', ['order-btn'], 'Order');

  orderBtn.addEventListener('click', () => {
    const navButtons = document.querySelectorAll('.nav-btn span');
    navButtons.forEach(button => {
      if (button.textContent !== 'Menu') {
        button.classList.remove('active');
      } else {
        button.classList.add('active');
      }
    });
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__.renderMenu)();
  })

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
const main = document.createElement('main');

function initializeWebsite() {
  (0,_background__WEBPACK_IMPORTED_MODULE_0__.addBackground)();
  (0,_header__WEBPACK_IMPORTED_MODULE_1__.renderHeader)();
  content.append(main);
  (0,_home__WEBPACK_IMPORTED_MODULE_2__.renderHome)();
  document.querySelector('.nav-btn span').classList.add('active');
}

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

initializeWebsite();



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDNUM7QUFDQTtBQUNBLGtCQUFrQix5REFBaUI7QUFDbkMsa0JBQWtCLHlEQUFpQjtBQUNuQyxrQkFBa0IseURBQWlCO0FBQ25DO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1J3RTtBQUN4RTtBQUNBO0FBQ0EsaUJBQWlCLHlEQUFpQjtBQUNsQyxlQUFlLHlEQUFpQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwyQ0FBTztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHlEQUFpQjtBQUNsQyxxQkFBcUIseURBQWlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQWlCO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQmtEO0FBQ2Q7QUFDcEM7QUFDQTtBQUNBLEVBQUUsd0NBQUk7QUFDTixFQUFFLHdDQUFJO0FBQ04sRUFBRSx3Q0FBSTtBQUNOO0FBQ0E7QUFDQSxnQkFBZ0IseURBQWlCO0FBQ2pDLG9CQUFvQix5REFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHlEQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLGlEQUFVO0FBQ2QsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFLHdDQUFJO0FBQ047QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CNkM7QUFDTDtBQUNKO0FBQ0E7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMERBQWE7QUFDZixFQUFFLHFEQUFZO0FBQ2Q7QUFDQSxFQUFFLGlEQUFVO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGlEQUFVO0FBQ3ZDLDZCQUE2QixpREFBVTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDa0Q7QUFDbEQ7QUFDQTtBQUNBLEVBQUUsd0NBQUk7QUFDTixFQUFFLHdDQUFJO0FBQ04sRUFBRSx3Q0FBSTtBQUNOO0FBQ0EsWUFBWSx5REFBaUI7QUFDN0I7QUFDQTtBQUNBLEVBQUUsd0NBQUk7QUFDTjtBQUNBOzs7Ozs7O1VDWkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlSHRtbEVsZW1lbnQgfSBmcm9tICcuL2luZGV4JztcclxuXHJcbmZ1bmN0aW9uIGFkZEJhY2tncm91bmQoKSB7XHJcbiAgY29uc3QgYnJhbmNoMSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCBbJ2JyYW5jaCcsICdicmFuY2gtbGVmdCddKTtcclxuICBjb25zdCBicmFuY2gyID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsIFsnYnJhbmNoJywgJ2JyYW5jaC1yaWdodCddKTtcclxuICBjb25zdCBicmFuY2gzID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsIFsnYnJhbmNoJywgJ2JyYW5jaC1yaWdodCddKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZChicmFuY2gxLCBicmFuY2gyLCBicmFuY2gzKTtcclxufVxyXG5cclxuZXhwb3J0IHsgYWRkQmFja2dyb3VuZCB9OyIsImltcG9ydCB7IGNvbnRlbnQsIGNyZWF0ZUh0bWxFbGVtZW50LCBoYW5kbGVCdXR0b25DbGljayB9IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVySGVhZGVyKCkge1xyXG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUh0bWxFbGVtZW50KCdoZWFkZXInLCBbJ2hlYWRlciddKTtcclxuICBjb25zdCBsb2dvID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2gzJywgWydsb2dvJ10sICdTVVNISScpO1xyXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gIGNvbnN0IFtob21lQnRuLCBtZW51QnRuLCBjb250YWN0QnRuXSA9IGNyZWF0ZU5hdkJ1dHRvbnMoKTtcclxuXHJcbiAgbmF2LmFwcGVuZChob21lQnRuLCBtZW51QnRuLCBjb250YWN0QnRuKTtcclxuICBoZWFkZXIuYXBwZW5kKGxvZ28sIG5hdik7XHJcbiAgY29udGVudC5hcHBlbmQoaGVhZGVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmF2QnV0dG9ucygpIHtcclxuICBjb25zdCBob21lQnRuID0gY3JlYXRlQnV0dG9uKCdIb21lJyk7XHJcbiAgY29uc3QgbWVudUJ0biA9IGNyZWF0ZUJ1dHRvbignTWVudScpO1xyXG4gIGNvbnN0IGNvbnRhY3RCdG4gPSBjcmVhdGVCdXR0b24oJ0NvbnRhY3QnKTtcclxuICByZXR1cm4gW2hvbWVCdG4sIG1lbnVCdG4sIGNvbnRhY3RCdG5dO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVCdXR0b24odGV4dCkge1xyXG4gIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUh0bWxFbGVtZW50KCdidXR0b24nLCBbJ25hdi1idG4nXSk7XHJcbiAgY29uc3QgYnV0dG9uVGV4dCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdzcGFuJywgW10sIHRleHQpO1xyXG4gIGJ1dHRvbi5hcHBlbmQoYnV0dG9uVGV4dCk7XHJcbiAgXHJcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaGFuZGxlQnV0dG9uQ2xpY2soYnV0dG9uLCB0ZXh0KTtcclxuICB9KTtcclxuICBcclxuICByZXR1cm4gYnV0dG9uO1xyXG59XHJcblxyXG5leHBvcnQgeyByZW5kZXJIZWFkZXIgfTsiLCJpbXBvcnQgeyBtYWluLCBjcmVhdGVIdG1sRWxlbWVudCB9IGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgeyByZW5kZXJNZW51IH0gZnJvbSAnLi9tZW51JztcclxuXHJcbmZ1bmN0aW9uIHJlbmRlckhvbWUoKSB7XHJcbiAgbWFpbi5pbm5lckhUTUwgPSAnJztcclxuICBtYWluLmNsYXNzTmFtZSA9ICcnO1xyXG4gIG1haW4uY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xyXG5cclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCB0aXRsZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdoMScsIFtdLCAnVGFzdGUgb2YgSmFwYW4nKTtcclxuICBjb25zdCBwYXJhZ3JhcGggPSBjcmVhdGVIdG1sRWxlbWVudCgncCcsIFtdLCBcclxuICAnRW5qb3kgYSBnb29kIGRpbm5lciB3aXRoIHRoZSBiZXN0IGRpc2hlcyBpbiB0aGUgcmVzdG91cmFudCBhbmQgaW1wcm92ZSB5b3VyIGRheS4nKTtcclxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBpbWcuc3JjID0gJ2ltYWdlcy9zdXNoaS1yb2xscy0xLnBuZyc7XHJcbiAgY29uc3Qgb3JkZXJCdG4gPSBjcmVhdGVIdG1sRWxlbWVudCgnYnV0dG9uJywgWydvcmRlci1idG4nXSwgJ09yZGVyJyk7XHJcblxyXG4gIG9yZGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc3QgbmF2QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtYnRuIHNwYW4nKTtcclxuICAgIG5hdkJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICBpZiAoYnV0dG9uLnRleHRDb250ZW50ICE9PSAnTWVudScpIHtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJlbmRlck1lbnUoKTtcclxuICB9KVxyXG5cclxuICBjb250YWluZXIuYXBwZW5kKHRpdGxlLCBwYXJhZ3JhcGgsIG9yZGVyQnRuKTtcclxuICBtYWluLmFwcGVuZChjb250YWluZXIsIGltZyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlbmRlckhvbWUgfTsiLCJpbXBvcnQgeyBhZGRCYWNrZ3JvdW5kIH0gZnJvbSAnLi9iYWNrZ3JvdW5kJztcclxuaW1wb3J0IHsgcmVuZGVySGVhZGVyIH0gZnJvbSAnLi9oZWFkZXInO1xyXG5pbXBvcnQgeyByZW5kZXJIb21lIH0gZnJvbSAnLi9ob21lJztcclxuaW1wb3J0IHsgcmVuZGVyTWVudSB9IGZyb20gJy4vbWVudSc7XHJcblxyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVXZWJzaXRlKCkge1xyXG4gIGFkZEJhY2tncm91bmQoKTtcclxuICByZW5kZXJIZWFkZXIoKTtcclxuICBjb250ZW50LmFwcGVuZChtYWluKTtcclxuICByZW5kZXJIb21lKCk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1idG4gc3BhbicpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVCdXR0b25DbGljayhidXR0b24sIGJ1dHRvblRleHQpIHtcclxuICBjb25zdCBhbGxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1idG4gc3BhbicpO1xyXG4gIGFsbEJ1dHRvbnMuZm9yRWFjaChiID0+IGIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG5cclxuICBidXR0b24ucXVlcnlTZWxlY3Rvcignc3BhbicpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuICBpZiAoYnV0dG9uVGV4dCA9PT0gJ0hvbWUnKSByZW5kZXJIb21lKCk7XHJcbiAgaWYgKGJ1dHRvblRleHQgPT09ICdNZW51JykgcmVuZGVyTWVudSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIdG1sRWxlbWVudCh0eXBlLCBjbGFzc2VzLCBjb250ZW50KSB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XHJcbiAgaWYgKGNsYXNzZXMpXHJcbiAgICBjbGFzc2VzLmZvckVhY2goYyA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYykpO1xyXG4gIGlmIChjb250ZW50KSBlbGVtZW50LmlubmVyVGV4dCA9IGNvbnRlbnQ7XHJcbiAgXHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmluaXRpYWxpemVXZWJzaXRlKCk7XHJcblxyXG5leHBvcnQgeyBjb250ZW50LCBtYWluLCBjcmVhdGVIdG1sRWxlbWVudCwgaGFuZGxlQnV0dG9uQ2xpY2sgfTsiLCJpbXBvcnQgeyBtYWluLCBjcmVhdGVIdG1sRWxlbWVudCB9IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyTWVudSgpIHtcclxuICBtYWluLmlubmVySFRNTCA9ICcnO1xyXG4gIG1haW4uY2xhc3NOYW1lID0gJyc7XHJcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XHJcbiAgXHJcbiAgY29uc3QgcCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgW10sIFxyXG4gICdMb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSGljIHF1byBhcmNoaXRlY3RvIGlwc3VtIG1hZ25hbSBldW0gYWRpcGlzY2kgZGljdGEgYmxhbmRpdGlpcyBuYW0hIFZvbHVwdGF0ZSBkb2xvcmlidXMgcXVpIGFsaXF1aWQgdXQgbWluaW1hIGZ1Z2l0IGRpc3RpbmN0aW8gbmVxdWUgYmVhdGFlIG51bXF1YW0gcmVjdXNhbmRhZS4nKTtcclxuXHJcbiAgbWFpbi5hcHBlbmQocCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlbmRlck1lbnUgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9