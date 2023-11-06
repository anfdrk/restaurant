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
  img.src = 'images/sushi-rolls-home.png';
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
  (0,_menu__WEBPACK_IMPORTED_MODULE_3__.renderMenu)();
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

  _index__WEBPACK_IMPORTED_MODULE_0__.main.appendChild(createMenuItem(
    'Sushi Roll',
    '10.99 $'
  ));
  _index__WEBPACK_IMPORTED_MODULE_0__.main.appendChild(createMenuItem(
    'Onigiri',
    '15.99 $'
  ));
  _index__WEBPACK_IMPORTED_MODULE_0__.main.appendChild(createMenuItem(
    'Spring Roll',
    '19.99 $'
  ));
}

function createMenuItem(name, price) {
  const menuItem = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('div', ['menu-item']);
  const foodName = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('h2', [], name);
  const foodPrice = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('p', [], price);
  
  const foodImage = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('img');
  foodImage.src = `images/${name.toLowerCase().replace(/\s+/g, '-')}.png`;
  foodImage.alt = `${name}`;

  menuItem.append(foodImage, foodName, foodPrice);

  return menuItem;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDNUM7QUFDQTtBQUNBLGtCQUFrQix5REFBaUI7QUFDbkMsa0JBQWtCLHlEQUFpQjtBQUNuQyxrQkFBa0IseURBQWlCO0FBQ25DO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1J3RTtBQUN4RTtBQUNBO0FBQ0EsaUJBQWlCLHlEQUFpQjtBQUNsQyxlQUFlLHlEQUFpQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwyQ0FBTztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHlEQUFpQjtBQUNsQyxxQkFBcUIseURBQWlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQWlCO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQmtEO0FBQ2Q7QUFDcEM7QUFDQTtBQUNBLEVBQUUsd0NBQUk7QUFDTixFQUFFLHdDQUFJO0FBQ04sRUFBRSx3Q0FBSTtBQUNOO0FBQ0E7QUFDQSxnQkFBZ0IseURBQWlCO0FBQ2pDLG9CQUFvQix5REFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHlEQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLGlEQUFVO0FBQ2QsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFLHdDQUFJO0FBQ047QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CNkM7QUFDTDtBQUNKO0FBQ0E7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMERBQWE7QUFDZixFQUFFLHFEQUFZO0FBQ2Q7QUFDQSxFQUFFLGlEQUFVO0FBQ1osRUFBRSxpREFBVTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixpREFBVTtBQUN2Qyw2QkFBNkIsaURBQVU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ2tEO0FBQ2xEO0FBQ0E7QUFDQSxFQUFFLHdDQUFJO0FBQ04sRUFBRSx3Q0FBSTtBQUNOLEVBQUUsd0NBQUk7QUFDTjtBQUNBLEVBQUUsd0NBQUk7QUFDTjtBQUNBO0FBQ0E7QUFDQSxFQUFFLHdDQUFJO0FBQ047QUFDQTtBQUNBO0FBQ0EsRUFBRSx3Q0FBSTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix5REFBaUI7QUFDcEMsbUJBQW1CLHlEQUFpQjtBQUNwQyxvQkFBb0IseURBQWlCO0FBQ3JDO0FBQ0Esb0JBQW9CLHlEQUFpQjtBQUNyQyw0QkFBNEIsd0NBQXdDO0FBQ3BFLHFCQUFxQixLQUFLO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2xDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVIdG1sRWxlbWVudCB9IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuZnVuY3Rpb24gYWRkQmFja2dyb3VuZCgpIHtcclxuICBjb25zdCBicmFuY2gxID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2RpdicsIFsnYnJhbmNoJywgJ2JyYW5jaC1sZWZ0J10pO1xyXG4gIGNvbnN0IGJyYW5jaDIgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgWydicmFuY2gnLCAnYnJhbmNoLXJpZ2h0J10pO1xyXG4gIGNvbnN0IGJyYW5jaDMgPSBjcmVhdGVIdG1sRWxlbWVudCgnZGl2JywgWydicmFuY2gnLCAnYnJhbmNoLXJpZ2h0J10pO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKGJyYW5jaDEsIGJyYW5jaDIsIGJyYW5jaDMpO1xyXG59XHJcblxyXG5leHBvcnQgeyBhZGRCYWNrZ3JvdW5kIH07IiwiaW1wb3J0IHsgY29udGVudCwgY3JlYXRlSHRtbEVsZW1lbnQsIGhhbmRsZUJ1dHRvbkNsaWNrIH0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJIZWFkZXIoKSB7XHJcbiAgY29uc3QgaGVhZGVyID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2hlYWRlcicsIFsnaGVhZGVyJ10pO1xyXG4gIGNvbnN0IGxvZ28gPSBjcmVhdGVIdG1sRWxlbWVudCgnaDMnLCBbJ2xvZ28nXSwgJ1NVU0hJJyk7XHJcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgY29uc3QgW2hvbWVCdG4sIG1lbnVCdG4sIGNvbnRhY3RCdG5dID0gY3JlYXRlTmF2QnV0dG9ucygpO1xyXG5cclxuICBuYXYuYXBwZW5kKGhvbWVCdG4sIG1lbnVCdG4sIGNvbnRhY3RCdG4pO1xyXG4gIGhlYWRlci5hcHBlbmQobG9nbywgbmF2KTtcclxuICBjb250ZW50LmFwcGVuZChoZWFkZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOYXZCdXR0b25zKCkge1xyXG4gIGNvbnN0IGhvbWVCdG4gPSBjcmVhdGVCdXR0b24oJ0hvbWUnKTtcclxuICBjb25zdCBtZW51QnRuID0gY3JlYXRlQnV0dG9uKCdNZW51Jyk7XHJcbiAgY29uc3QgY29udGFjdEJ0biA9IGNyZWF0ZUJ1dHRvbignQ29udGFjdCcpO1xyXG4gIHJldHVybiBbaG9tZUJ0biwgbWVudUJ0biwgY29udGFjdEJ0bl07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbih0ZXh0KSB7XHJcbiAgY29uc3QgYnV0dG9uID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2J1dHRvbicsIFsnbmF2LWJ0biddKTtcclxuICBjb25zdCBidXR0b25UZXh0ID0gY3JlYXRlSHRtbEVsZW1lbnQoJ3NwYW4nLCBbXSwgdGV4dCk7XHJcbiAgYnV0dG9uLmFwcGVuZChidXR0b25UZXh0KTtcclxuICBcclxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBoYW5kbGVCdXR0b25DbGljayhidXR0b24sIHRleHQpO1xyXG4gIH0pO1xyXG4gIFxyXG4gIHJldHVybiBidXR0b247XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlbmRlckhlYWRlciB9OyIsImltcG9ydCB7IG1haW4sIGNyZWF0ZUh0bWxFbGVtZW50IH0gZnJvbSAnLi9pbmRleCc7XHJcbmltcG9ydCB7IHJlbmRlck1lbnUgfSBmcm9tICcuL21lbnUnO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVySG9tZSgpIHtcclxuICBtYWluLmlubmVySFRNTCA9ICcnO1xyXG4gIG1haW4uY2xhc3NOYW1lID0gJyc7XHJcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKCdob21lJyk7XHJcblxyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHRpdGxlID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2gxJywgW10sICdUYXN0ZSBvZiBKYXBhbicpO1xyXG4gIGNvbnN0IHBhcmFncmFwaCA9IGNyZWF0ZUh0bWxFbGVtZW50KCdwJywgW10sIFxyXG4gICdFbmpveSBhIGdvb2QgZGlubmVyIHdpdGggdGhlIGJlc3QgZGlzaGVzIGluIHRoZSByZXN0b3VyYW50IGFuZCBpbXByb3ZlIHlvdXIgZGF5LicpO1xyXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGltZy5zcmMgPSAnaW1hZ2VzL3N1c2hpLXJvbGxzLWhvbWUucG5nJztcclxuICBjb25zdCBvcmRlckJ0biA9IGNyZWF0ZUh0bWxFbGVtZW50KCdidXR0b24nLCBbJ29yZGVyLWJ0biddLCAnT3JkZXInKTtcclxuXHJcbiAgb3JkZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBuYXZCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1idG4gc3BhbicpO1xyXG4gICAgbmF2QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgIGlmIChidXR0b24udGV4dENvbnRlbnQgIT09ICdNZW51Jykge1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmVuZGVyTWVudSgpO1xyXG4gIH0pXHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmQodGl0bGUsIHBhcmFncmFwaCwgb3JkZXJCdG4pO1xyXG4gIG1haW4uYXBwZW5kKGNvbnRhaW5lciwgaW1nKTtcclxufVxyXG5cclxuZXhwb3J0IHsgcmVuZGVySG9tZSB9OyIsImltcG9ydCB7IGFkZEJhY2tncm91bmQgfSBmcm9tICcuL2JhY2tncm91bmQnO1xyXG5pbXBvcnQgeyByZW5kZXJIZWFkZXIgfSBmcm9tICcuL2hlYWRlcic7XHJcbmltcG9ydCB7IHJlbmRlckhvbWUgfSBmcm9tICcuL2hvbWUnO1xyXG5pbXBvcnQgeyByZW5kZXJNZW51IH0gZnJvbSAnLi9tZW51JztcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG5jb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZVdlYnNpdGUoKSB7XHJcbiAgYWRkQmFja2dyb3VuZCgpO1xyXG4gIHJlbmRlckhlYWRlcigpO1xyXG4gIGNvbnRlbnQuYXBwZW5kKG1haW4pO1xyXG4gIHJlbmRlckhvbWUoKTtcclxuICByZW5kZXJNZW51KCk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1idG4gc3BhbicpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVCdXR0b25DbGljayhidXR0b24sIGJ1dHRvblRleHQpIHtcclxuICBjb25zdCBhbGxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1idG4gc3BhbicpO1xyXG4gIGFsbEJ1dHRvbnMuZm9yRWFjaChiID0+IGIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG5cclxuICBidXR0b24ucXVlcnlTZWxlY3Rvcignc3BhbicpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuICBpZiAoYnV0dG9uVGV4dCA9PT0gJ0hvbWUnKSByZW5kZXJIb21lKCk7XHJcbiAgaWYgKGJ1dHRvblRleHQgPT09ICdNZW51JykgcmVuZGVyTWVudSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIdG1sRWxlbWVudCh0eXBlLCBjbGFzc2VzLCBjb250ZW50KSB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XHJcbiAgaWYgKGNsYXNzZXMpXHJcbiAgICBjbGFzc2VzLmZvckVhY2goYyA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYykpO1xyXG4gIGlmIChjb250ZW50KSBlbGVtZW50LmlubmVyVGV4dCA9IGNvbnRlbnQ7XHJcbiAgXHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmluaXRpYWxpemVXZWJzaXRlKCk7XHJcblxyXG5leHBvcnQgeyBjb250ZW50LCBtYWluLCBjcmVhdGVIdG1sRWxlbWVudCwgaGFuZGxlQnV0dG9uQ2xpY2sgfTsiLCJpbXBvcnQgeyBtYWluLCBjcmVhdGVIdG1sRWxlbWVudCB9IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyTWVudSgpIHtcclxuICBtYWluLmlubmVySFRNTCA9ICcnO1xyXG4gIG1haW4uY2xhc3NOYW1lID0gJyc7XHJcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XHJcblxyXG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oXHJcbiAgICAnU3VzaGkgUm9sbCcsXHJcbiAgICAnMTAuOTkgJCdcclxuICApKTtcclxuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgJ09uaWdpcmknLFxyXG4gICAgJzE1Ljk5ICQnXHJcbiAgKSk7XHJcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShcclxuICAgICdTcHJpbmcgUm9sbCcsXHJcbiAgICAnMTkuOTkgJCdcclxuICApKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0obmFtZSwgcHJpY2UpIHtcclxuICBjb25zdCBtZW51SXRlbSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdkaXYnLCBbJ21lbnUtaXRlbSddKTtcclxuICBjb25zdCBmb29kTmFtZSA9IGNyZWF0ZUh0bWxFbGVtZW50KCdoMicsIFtdLCBuYW1lKTtcclxuICBjb25zdCBmb29kUHJpY2UgPSBjcmVhdGVIdG1sRWxlbWVudCgncCcsIFtdLCBwcmljZSk7XHJcbiAgXHJcbiAgY29uc3QgZm9vZEltYWdlID0gY3JlYXRlSHRtbEVsZW1lbnQoJ2ltZycpO1xyXG4gIGZvb2RJbWFnZS5zcmMgPSBgaW1hZ2VzLyR7bmFtZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgJy0nKX0ucG5nYDtcclxuICBmb29kSW1hZ2UuYWx0ID0gYCR7bmFtZX1gO1xyXG5cclxuICBtZW51SXRlbS5hcHBlbmQoZm9vZEltYWdlLCBmb29kTmFtZSwgZm9vZFByaWNlKTtcclxuXHJcbiAgcmV0dXJuIG1lbnVJdGVtO1xyXG59XHJcblxyXG5leHBvcnQgeyByZW5kZXJNZW51IH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==