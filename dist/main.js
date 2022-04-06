/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openContactPage": () => (/* binding */ openContactPage)
/* harmony export */ });
/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.js */ "./src/navbar.js");


function openContactPage() {
  console.log('contact');
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenu": () => (/* binding */ createMenu),
/* harmony export */   "createNavbar": () => (/* reexport safe */ _navbar_js__WEBPACK_IMPORTED_MODULE_0__.createNavbar),
/* harmony export */   "openMainPage": () => (/* binding */ openMainPage)
/* harmony export */ });
/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.js */ "./src/navbar.js");


function createTopContent() {
  const heading = document.createElement('section');
  const title = document.createElement('h1');
  const btn = document.createElement('button');

  heading.id = 'heading';
  title.textContent = 'Best burgers in town!';
  btn.id = 'call-to-action-btn';
  btn.textContent = 'Check it out!';
  heading.appendChild((0,_navbar_js__WEBPACK_IMPORTED_MODULE_0__.createNavbar)(0));
  heading.appendChild(title);
  heading.appendChild(btn);

  return heading;
}

function createMenu() {
  const burgersNames = ['Kura', 'Bekon', 'Mięśniak', 'Nachos'];
  const prices = ['23.50 zł', '24,00 zł', '22,50 zł', '25,00 zł'];
  const menu = document.createElement('div');
  menu.id = 'menu';

  for(let i = 0; i < burgersNames.length; i++) {
    const item = document.createElement('div');
    const name = document.createElement('h3');
    const price = document.createElement('p');
    
    item.classList.add('menu-item');
    name.textContent = burgersNames[i];
    price.classList.add('price');
    price.textContent = prices[i];

    item.appendChild(name);
    item.appendChild(price);
    menu.appendChild(item);
  }

  return menu;
}

function createMiddleContent() {
  const menuSection = document.createElement('section');
  const title = document.createElement('h2');
  const btnRow = document.createElement('div');
  const btn = document.createElement('button');
  
  menuSection.id = 'menu-section';
  btn.id = 'full-menu-btn';
  btn.textContent = 'See full menu'
  title.textContent = 'Menu';
  btnRow.classList.add('btn-row');

  btnRow.appendChild(btn);
  menuSection.appendChild(title);
  menuSection.appendChild(createMenu());
  menuSection.appendChild(btnRow);

  return menuSection;
}

function createInfo(x) {
  const contactInfo = document.createElement('div');
  const streets = ['Ul. Pierwszy Adres 3', 'Ul. Drugi Adres 42/1'];
  const phones = ['123 456 678', '987 654 321'];
  const opening = ['Pn-Nd: 12:00 - 22:00', 'Pn-Nd: 12:00 - 21:00'];
  
  const street = document.createElement('h3');
  const phone = document.createElement('p');
  const open = document.createElement('p');
  
  street.textContent = streets[x];
  phone.textContent = phones[x];
  open.textContent = opening[x];

  contactInfo.classList.add('contact-info');
  contactInfo.appendChild(street);
  contactInfo.appendChild(phone);
  contactInfo.appendChild(open);

  return contactInfo;
}

function createBottomContent() {
  const content = document.createElement('div');
  const title = document.createElement('h2');

  title.textContent = 'Contact';

  content.appendChild(title);
  
  for(let i = 0; i < 2; i++) {
    content.appendChild(createInfo(i));
  }

  return content;

}

let openMainPage = function() {
  const content = document.getElementById('content');
  const top = document.createElement('section');
  const middle = document.createElement('section');
  const bottom = document.createElement('section');

  top.id = 'top';
  middle.id = 'middle';
  bottom.id = 'bottom';

  top.appendChild(createTopContent());
  middle.appendChild(createMiddleContent());
  bottom.appendChild(createBottomContent());

  content.appendChild(top);
  content.appendChild(middle);
  content.appendChild(bottom);
}





/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openMenuPage": () => (/* binding */ openMenuPage)
/* harmony export */ });
/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.js */ "./src/navbar.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");



function createTopContent() {
  const heading = document.createElement('section');
  heading.id = 'heading';
  heading.appendChild((0,_navbar_js__WEBPACK_IMPORTED_MODULE_0__.createNavbar)(1));
  
  return heading;
}

function createMainItem() {
  const div = document.createElement('div');
  const item = document.createElement('div');
  const name = document.createElement('h3');
  const price = document.createElement('p');

  item.classList.add('menu-item');
  price.classList.add('price');

  name.textContent = 'Kogut';
  price.textContent = '25,50 zł';
  
  item.appendChild(name);
  item.appendChild(price);
  div.appendChild(item);

  return div;
}

function createMiddleContent() {
  const middle = document.createElement('section');
  const heading = document.createElement('div');
  const title = document.createElement('h2');

  middle.id = 'middle';
  title.textContent = 'Menu';
  heading.appendChild(title);
  middle.appendChild(heading);
  middle.appendChild(createMainItem());
  middle.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__.createMenu)());

  return middle;
}

function openMenuPage() {
  const content = document.getElementById('content');
  const top = document.createElement('section');

  top.id = 'top';
  top.appendChild(createTopContent());
  content.appendChild(top);
  content.appendChild(createMiddleContent());
}



/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNavbar": () => (/* binding */ createNavbar)
/* harmony export */ });
function createNavbar(selected) {
  const menuSection = document.createElement('nav');
  const menuItems = ['Home', 'Menu', 'Contact'];

  for(let i = 0; i < menuItems.length; i++) {
    const item = document.createElement('p');

    item.classList.add('nav-item');
    item.textContent = menuItems[i];
    item.id = `${menuItems[i].toLowerCase()}-nav`;
    if (i === selected) {
      item.classList.add('nav-item-selected');
    }

    menuSection.appendChild(item);
  }

  return menuSection;
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");




function clearPage() {
  const content = document.getElementById('content');
  content.textContent = '';
}

function setNavListeners() {
  const homeNav = document.getElementById('home-nav');
  const menuNav = document.getElementById('menu-nav');
  const contactNav = document.getElementById('contact-nav');

  homeNav.addEventListener('click', () => {
    clearPage();
    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.openMainPage)();
    setNavListeners();
  });

  menuNav.addEventListener('click', () => {
    clearPage();
    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.openMenuPage)();
    setNavListeners();
  });

  contactNav.addEventListener('click', () => {
    clearPage();
    (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.openContactPage)();
    setNavListeners();
  });
}

(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.openMainPage)();
setNavListeners();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7O0FBRTNDO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0oyQzs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isd0RBQVk7QUFDbEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHlCQUF5QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFd0I7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SG1CO0FBQ0o7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix3REFBWTtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsb0RBQVU7O0FBRS9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7VUNsQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnlDO0FBQ0E7QUFDTTs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksc0RBQVk7QUFDaEI7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFJLHNEQUFZO0FBQ2hCO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBSSw0REFBZTtBQUNuQjtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzREFBWTtBQUNaLGtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL25hdmJhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTmF2YmFyIH0gZnJvbSAnLi9uYXZiYXIuanMnO1xuXG5mdW5jdGlvbiBvcGVuQ29udGFjdFBhZ2UoKSB7XG4gIGNvbnNvbGUubG9nKCdjb250YWN0Jyk7XG59XG5cbmV4cG9ydCB7IG9wZW5Db250YWN0UGFnZSB9IiwiaW1wb3J0IHsgY3JlYXRlTmF2YmFyIH0gZnJvbSAnLi9uYXZiYXIuanMnO1xuXG5mdW5jdGlvbiBjcmVhdGVUb3BDb250ZW50KCkge1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gIGhlYWRpbmcuaWQgPSAnaGVhZGluZyc7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ0Jlc3QgYnVyZ2VycyBpbiB0b3duISc7XG4gIGJ0bi5pZCA9ICdjYWxsLXRvLWFjdGlvbi1idG4nO1xuICBidG4udGV4dENvbnRlbnQgPSAnQ2hlY2sgaXQgb3V0ISc7XG4gIGhlYWRpbmcuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2YmFyKDApKTtcbiAgaGVhZGluZy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGhlYWRpbmcuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICByZXR1cm4gaGVhZGluZztcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcbiAgY29uc3QgYnVyZ2Vyc05hbWVzID0gWydLdXJhJywgJ0Jla29uJywgJ01pxJnFm25pYWsnLCAnTmFjaG9zJ107XG4gIGNvbnN0IHByaWNlcyA9IFsnMjMuNTAgesWCJywgJzI0LDAwIHrFgicsICcyMiw1MCB6xYInLCAnMjUsMDAgesWCJ107XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudS5pZCA9ICdtZW51JztcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgYnVyZ2Vyc05hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIFxuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgbmFtZS50ZXh0Q29udGVudCA9IGJ1cmdlcnNOYW1lc1tpXTtcbiAgICBwcmljZS5jbGFzc0xpc3QuYWRkKCdwcmljZScpO1xuICAgIHByaWNlLnRleHRDb250ZW50ID0gcHJpY2VzW2ldO1xuXG4gICAgaXRlbS5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKHByaWNlKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGl0ZW0pO1xuICB9XG5cbiAgcmV0dXJuIG1lbnU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1pZGRsZUNvbnRlbnQoKSB7XG4gIGNvbnN0IG1lbnVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNvbnN0IGJ0blJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgXG4gIG1lbnVTZWN0aW9uLmlkID0gJ21lbnUtc2VjdGlvbic7XG4gIGJ0bi5pZCA9ICdmdWxsLW1lbnUtYnRuJztcbiAgYnRuLnRleHRDb250ZW50ID0gJ1NlZSBmdWxsIG1lbnUnXG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICBidG5Sb3cuY2xhc3NMaXN0LmFkZCgnYnRuLXJvdycpO1xuXG4gIGJ0blJvdy5hcHBlbmRDaGlsZChidG4pO1xuICBtZW51U2VjdGlvbi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSk7XG4gIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKGJ0blJvdyk7XG5cbiAgcmV0dXJuIG1lbnVTZWN0aW9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbmZvKHgpIHtcbiAgY29uc3QgY29udGFjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3Qgc3RyZWV0cyA9IFsnVWwuIFBpZXJ3c3p5IEFkcmVzIDMnLCAnVWwuIERydWdpIEFkcmVzIDQyLzEnXTtcbiAgY29uc3QgcGhvbmVzID0gWycxMjMgNDU2IDY3OCcsICc5ODcgNjU0IDMyMSddO1xuICBjb25zdCBvcGVuaW5nID0gWydQbi1OZDogMTI6MDAgLSAyMjowMCcsICdQbi1OZDogMTI6MDAgLSAyMTowMCddO1xuICBcbiAgY29uc3Qgc3RyZWV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IG9wZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIFxuICBzdHJlZXQudGV4dENvbnRlbnQgPSBzdHJlZXRzW3hdO1xuICBwaG9uZS50ZXh0Q29udGVudCA9IHBob25lc1t4XTtcbiAgb3Blbi50ZXh0Q29udGVudCA9IG9wZW5pbmdbeF07XG5cbiAgY29udGFjdEluZm8uY2xhc3NMaXN0LmFkZCgnY29udGFjdC1pbmZvJyk7XG4gIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKHN0cmVldCk7XG4gIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKHBob25lKTtcbiAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQob3Blbik7XG5cbiAgcmV0dXJuIGNvbnRhY3RJbmZvO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCb3R0b21Db250ZW50KCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblxuICB0aXRsZS50ZXh0Q29udGVudCA9ICdDb250YWN0JztcblxuICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgXG4gIGZvcihsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUluZm8oaSkpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG5cbn1cblxubGV0IG9wZW5NYWluUGFnZSA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29uc3QgdG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBjb25zdCBtaWRkbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIGNvbnN0IGJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcblxuICB0b3AuaWQgPSAndG9wJztcbiAgbWlkZGxlLmlkID0gJ21pZGRsZSc7XG4gIGJvdHRvbS5pZCA9ICdib3R0b20nO1xuXG4gIHRvcC5hcHBlbmRDaGlsZChjcmVhdGVUb3BDb250ZW50KCkpO1xuICBtaWRkbGUuYXBwZW5kQ2hpbGQoY3JlYXRlTWlkZGxlQ29udGVudCgpKTtcbiAgYm90dG9tLmFwcGVuZENoaWxkKGNyZWF0ZUJvdHRvbUNvbnRlbnQoKSk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZCh0b3ApO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1pZGRsZSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYm90dG9tKTtcbn1cblxuZXhwb3J0IHsgb3Blbk1haW5QYWdlIH07XG5leHBvcnQgeyBjcmVhdGVOYXZiYXIgfTtcbmV4cG9ydCB7IGNyZWF0ZU1lbnUgfTsiLCJpbXBvcnQgeyBjcmVhdGVOYXZiYXIgfSBmcm9tICcuL25hdmJhci5qcyc7XG5pbXBvcnQgeyBjcmVhdGVNZW51IH0gZnJvbSAnLi9ob21lLmpzJztcblxuZnVuY3Rpb24gY3JlYXRlVG9wQ29udGVudCgpIHtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgaGVhZGluZy5pZCA9ICdoZWFkaW5nJztcbiAgaGVhZGluZy5hcHBlbmRDaGlsZChjcmVhdGVOYXZiYXIoMSkpO1xuICBcbiAgcmV0dXJuIGhlYWRpbmc7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW5JdGVtKCkge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgaXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgcHJpY2UuY2xhc3NMaXN0LmFkZCgncHJpY2UnKTtcblxuICBuYW1lLnRleHRDb250ZW50ID0gJ0tvZ3V0JztcbiAgcHJpY2UudGV4dENvbnRlbnQgPSAnMjUsNTAgesWCJztcbiAgXG4gIGl0ZW0uYXBwZW5kQ2hpbGQobmFtZSk7XG4gIGl0ZW0uYXBwZW5kQ2hpbGQocHJpY2UpO1xuICBkaXYuYXBwZW5kQ2hpbGQoaXRlbSk7XG5cbiAgcmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWlkZGxlQ29udGVudCgpIHtcbiAgY29uc3QgbWlkZGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblxuICBtaWRkbGUuaWQgPSAnbWlkZGxlJztcbiAgdGl0bGUudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gIGhlYWRpbmcuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBtaWRkbGUuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIG1pZGRsZS5hcHBlbmRDaGlsZChjcmVhdGVNYWluSXRlbSgpKTtcbiAgbWlkZGxlLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSk7XG5cbiAgcmV0dXJuIG1pZGRsZTtcbn1cblxuZnVuY3Rpb24gb3Blbk1lbnVQYWdlKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29uc3QgdG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuXG4gIHRvcC5pZCA9ICd0b3AnO1xuICB0b3AuYXBwZW5kQ2hpbGQoY3JlYXRlVG9wQ29udGVudCgpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0b3ApO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1pZGRsZUNvbnRlbnQoKSk7XG59XG5cbmV4cG9ydCB7IG9wZW5NZW51UGFnZSB9IiwiZnVuY3Rpb24gY3JlYXRlTmF2YmFyKHNlbGVjdGVkKSB7XG4gIGNvbnN0IG1lbnVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIGNvbnN0IG1lbnVJdGVtcyA9IFsnSG9tZScsICdNZW51JywgJ0NvbnRhY3QnXTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgbWVudUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0nKTtcbiAgICBpdGVtLnRleHRDb250ZW50ID0gbWVudUl0ZW1zW2ldO1xuICAgIGl0ZW0uaWQgPSBgJHttZW51SXRlbXNbaV0udG9Mb3dlckNhc2UoKX0tbmF2YDtcbiAgICBpZiAoaSA9PT0gc2VsZWN0ZWQpIHtcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0tc2VsZWN0ZWQnKTtcbiAgICB9XG5cbiAgICBtZW51U2VjdGlvbi5hcHBlbmRDaGlsZChpdGVtKTtcbiAgfVxuXG4gIHJldHVybiBtZW51U2VjdGlvbjtcbn1cblxuZXhwb3J0IHtjcmVhdGVOYXZiYXIgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IG9wZW5NYWluUGFnZSB9IGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgeyBvcGVuTWVudVBhZ2UgfSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IHsgb3BlbkNvbnRhY3RQYWdlIH0gZnJvbSAnLi9jb250YWN0LmpzJztcblxuZnVuY3Rpb24gY2xlYXJQYWdlKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29udGVudC50ZXh0Q29udGVudCA9ICcnO1xufVxuXG5mdW5jdGlvbiBzZXROYXZMaXN0ZW5lcnMoKSB7XG4gIGNvbnN0IGhvbWVOYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS1uYXYnKTtcbiAgY29uc3QgbWVudU5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LW5hdicpO1xuICBjb25zdCBjb250YWN0TmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtbmF2Jyk7XG5cbiAgaG9tZU5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhclBhZ2UoKTtcbiAgICBvcGVuTWFpblBhZ2UoKTtcbiAgICBzZXROYXZMaXN0ZW5lcnMoKTtcbiAgfSk7XG5cbiAgbWVudU5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhclBhZ2UoKTtcbiAgICBvcGVuTWVudVBhZ2UoKTtcbiAgICBzZXROYXZMaXN0ZW5lcnMoKTtcbiAgfSk7XG5cbiAgY29udGFjdE5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhclBhZ2UoKTtcbiAgICBvcGVuQ29udGFjdFBhZ2UoKTtcbiAgICBzZXROYXZMaXN0ZW5lcnMoKTtcbiAgfSk7XG59XG5cbm9wZW5NYWluUGFnZSgpO1xuc2V0TmF2TGlzdGVuZXJzKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9