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
/* harmony export */   "createInfo": () => (/* binding */ createInfo),
/* harmony export */   "openContactPage": () => (/* binding */ openContactPage)
/* harmony export */ });
/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.js */ "./src/navbar.js");


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
/* harmony export */   "createBottomContent": () => (/* binding */ createBottomContent),
/* harmony export */   "createNavbar": () => (/* reexport safe */ _navbar_js__WEBPACK_IMPORTED_MODULE_0__.createNavbar),
/* harmony export */   "openMainPage": () => (/* binding */ openMainPage)
/* harmony export */ });
/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.js */ "./src/navbar.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");




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
  menuSection.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.createMenu)());
  menuSection.appendChild(btnRow);

  return menuSection;
}

function createBottomContent() {
  const content = document.createElement('div');
  const title = document.createElement('h2');

  title.textContent = 'Contact';

  content.appendChild(title);
  
  for(let i = 0; i < 2; i++) {
    content.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.createInfo)(i));
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
/* harmony export */   "createMenu": () => (/* binding */ createMenu),
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
  const middle = document.createElement('section');
  const heading = document.createElement('div');
  const title = document.createElement('h2');

  middle.id = 'middle';
  title.textContent = 'Menu';
  heading.appendChild(title);
  middle.appendChild(heading);
  middle.appendChild(createMainItem());
  middle.appendChild(createMenu());

  return middle;
}

function createBottom() {
  const bottom = document.createElement('section');
  
  bottom.id = 'bottom';
  bottom.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__.createBottomContent)());

  return bottom;
}

function openMenuPage() {
  const content = document.getElementById('content');
  const top = document.createElement('section');

  top.id = 'top';
  top.appendChild(createTopContent());
  content.appendChild(top);
  content.appendChild(createMiddleContent());
  content.appendChild(createBottom());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJnQjtBQUNKO0FBQ0c7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHdEQUFZO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsb0RBQVU7QUFDcEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCLHdCQUF3Qix1REFBVTtBQUNsQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFd0I7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0VtQjtBQUNLOztBQUVoRDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isd0RBQVk7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQix5QkFBeUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZEQUFtQjs7QUFFeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVzQjs7Ozs7Ozs7Ozs7Ozs7O0FDekZ0QjtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztVQ2xCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOeUM7QUFDQTtBQUNNOztBQUUvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxzREFBWTtBQUNoQjtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUksc0RBQVk7QUFDaEI7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFJLDREQUFlO0FBQ25CO0FBQ0EsR0FBRztBQUNIOztBQUVBLHNEQUFZO0FBQ1osa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbmF2YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVOYXZiYXIgfSBmcm9tICcuL25hdmJhci5qcyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUluZm8oeCkge1xuICBjb25zdCBjb250YWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBzdHJlZXRzID0gWydVbC4gUGllcndzenkgQWRyZXMgMycsICdVbC4gRHJ1Z2kgQWRyZXMgNDIvMSddO1xuICBjb25zdCBwaG9uZXMgPSBbJzEyMyA0NTYgNjc4JywgJzk4NyA2NTQgMzIxJ107XG4gIGNvbnN0IG9wZW5pbmcgPSBbJ1BuLU5kOiAxMjowMCAtIDIyOjAwJywgJ1BuLU5kOiAxMjowMCAtIDIxOjAwJ107XG4gIFxuICBjb25zdCBzdHJlZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3Qgb3BlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgXG4gIHN0cmVldC50ZXh0Q29udGVudCA9IHN0cmVldHNbeF07XG4gIHBob25lLnRleHRDb250ZW50ID0gcGhvbmVzW3hdO1xuICBvcGVuLnRleHRDb250ZW50ID0gb3BlbmluZ1t4XTtcblxuICBjb250YWN0SW5mby5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWluZm8nKTtcbiAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoc3RyZWV0KTtcbiAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQocGhvbmUpO1xuICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChvcGVuKTtcblxuICByZXR1cm4gY29udGFjdEluZm87XG59XG5cbmZ1bmN0aW9uIG9wZW5Db250YWN0UGFnZSgpIHtcbiAgY29uc29sZS5sb2coJ2NvbnRhY3QnKTtcbn1cblxuZXhwb3J0IHsgb3BlbkNvbnRhY3RQYWdlIH07XG5leHBvcnQgeyBjcmVhdGVJbmZvIH07IiwiaW1wb3J0IHsgY3JlYXRlTmF2YmFyIH0gZnJvbSAnLi9uYXZiYXIuanMnO1xuaW1wb3J0IHsgY3JlYXRlTWVudSB9IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgeyBjcmVhdGVJbmZvIH0gZnJvbSAnLi9jb250YWN0LmpzJztcblxuZnVuY3Rpb24gY3JlYXRlVG9wQ29udGVudCgpIHtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICBoZWFkaW5nLmlkID0gJ2hlYWRpbmcnO1xuICB0aXRsZS50ZXh0Q29udGVudCA9ICdCZXN0IGJ1cmdlcnMgaW4gdG93biEnO1xuICBidG4uaWQgPSAnY2FsbC10by1hY3Rpb24tYnRuJztcbiAgYnRuLnRleHRDb250ZW50ID0gJ0NoZWNrIGl0IG91dCEnO1xuICBoZWFkaW5nLmFwcGVuZENoaWxkKGNyZWF0ZU5hdmJhcigwKSk7XG4gIGhlYWRpbmcuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBoZWFkaW5nLmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgcmV0dXJuIGhlYWRpbmc7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1pZGRsZUNvbnRlbnQoKSB7XG4gIGNvbnN0IG1lbnVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNvbnN0IGJ0blJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgXG4gIG1lbnVTZWN0aW9uLmlkID0gJ21lbnUtc2VjdGlvbic7XG4gIGJ0bi5pZCA9ICdmdWxsLW1lbnUtYnRuJztcbiAgYnRuLnRleHRDb250ZW50ID0gJ1NlZSBmdWxsIG1lbnUnXG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICBidG5Sb3cuY2xhc3NMaXN0LmFkZCgnYnRuLXJvdycpO1xuXG4gIGJ0blJvdy5hcHBlbmRDaGlsZChidG4pO1xuICBtZW51U2VjdGlvbi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSk7XG4gIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKGJ0blJvdyk7XG5cbiAgcmV0dXJuIG1lbnVTZWN0aW9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCb3R0b21Db250ZW50KCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblxuICB0aXRsZS50ZXh0Q29udGVudCA9ICdDb250YWN0JztcblxuICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgXG4gIGZvcihsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUluZm8oaSkpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmxldCBvcGVuTWFpblBhZ2UgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IHRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgY29uc3QgbWlkZGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBjb25zdCBib3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5cbiAgdG9wLmlkID0gJ3RvcCc7XG4gIG1pZGRsZS5pZCA9ICdtaWRkbGUnO1xuICBib3R0b20uaWQgPSAnYm90dG9tJztcblxuICB0b3AuYXBwZW5kQ2hpbGQoY3JlYXRlVG9wQ29udGVudCgpKTtcbiAgbWlkZGxlLmFwcGVuZENoaWxkKGNyZWF0ZU1pZGRsZUNvbnRlbnQoKSk7XG4gIGJvdHRvbS5hcHBlbmRDaGlsZChjcmVhdGVCb3R0b21Db250ZW50KCkpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9wKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtaWRkbGUpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGJvdHRvbSk7XG59XG5cbmV4cG9ydCB7IG9wZW5NYWluUGFnZSB9O1xuZXhwb3J0IHsgY3JlYXRlTmF2YmFyIH07XG5leHBvcnQgeyBjcmVhdGVCb3R0b21Db250ZW50IH07IiwiaW1wb3J0IHsgY3JlYXRlTmF2YmFyIH0gZnJvbSAnLi9uYXZiYXIuanMnO1xuaW1wb3J0IHsgY3JlYXRlQm90dG9tQ29udGVudCB9IGZyb20gJy4vaG9tZS5qcyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvcENvbnRlbnQoKSB7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIGhlYWRpbmcuaWQgPSAnaGVhZGluZyc7XG4gIGhlYWRpbmcuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2YmFyKDEpKTtcbiAgXG4gIHJldHVybiBoZWFkaW5nO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluSXRlbSgpIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIGl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gIHByaWNlLmNsYXNzTGlzdC5hZGQoJ3ByaWNlJyk7XG5cbiAgbmFtZS50ZXh0Q29udGVudCA9ICdLb2d1dCc7XG4gIHByaWNlLnRleHRDb250ZW50ID0gJzI1LDUwIHrFgic7XG4gIFxuICBpdGVtLmFwcGVuZENoaWxkKG5hbWUpO1xuICBpdGVtLmFwcGVuZENoaWxkKHByaWNlKTtcbiAgZGl2LmFwcGVuZENoaWxkKGl0ZW0pO1xuXG4gIHJldHVybiBkaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gIGNvbnN0IGJ1cmdlcnNOYW1lcyA9IFsnS3VyYScsICdCZWtvbicsICdNacSZxZtuaWFrJywgJ05hY2hvcyddO1xuICBjb25zdCBwcmljZXMgPSBbJzIzLjUwIHrFgicsICcyNCwwMCB6xYInLCAnMjIsNTAgesWCJywgJzI1LDAwIHrFgiddO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnUuaWQgPSAnbWVudSc7XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IGJ1cmdlcnNOYW1lcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSBidXJnZXJzTmFtZXNbaV07XG4gICAgcHJpY2UuY2xhc3NMaXN0LmFkZCgncHJpY2UnKTtcbiAgICBwcmljZS50ZXh0Q29udGVudCA9IHByaWNlc1tpXTtcblxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgaXRlbS5hcHBlbmRDaGlsZChwcmljZSk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChpdGVtKTtcbiAgfVxuXG4gIHJldHVybiBtZW51O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNaWRkbGVDb250ZW50KCkge1xuICBjb25zdCBtaWRkbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuXG4gIG1pZGRsZS5pZCA9ICdtaWRkbGUnO1xuICB0aXRsZS50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgaGVhZGluZy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIG1pZGRsZS5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgbWlkZGxlLmFwcGVuZENoaWxkKGNyZWF0ZU1haW5JdGVtKCkpO1xuICBtaWRkbGUuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcblxuICByZXR1cm4gbWlkZGxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCb3R0b20oKSB7XG4gIGNvbnN0IGJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgXG4gIGJvdHRvbS5pZCA9ICdib3R0b20nO1xuICBib3R0b20uYXBwZW5kQ2hpbGQoY3JlYXRlQm90dG9tQ29udGVudCgpKTtcblxuICByZXR1cm4gYm90dG9tO1xufVxuXG5mdW5jdGlvbiBvcGVuTWVudVBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCB0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5cbiAgdG9wLmlkID0gJ3RvcCc7XG4gIHRvcC5hcHBlbmRDaGlsZChjcmVhdGVUb3BDb250ZW50KCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRvcCk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWlkZGxlQ29udGVudCgpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVCb3R0b20oKSk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZU1lbnUgfTtcbmV4cG9ydCB7IG9wZW5NZW51UGFnZSB9OyIsImZ1bmN0aW9uIGNyZWF0ZU5hdmJhcihzZWxlY3RlZCkge1xuICBjb25zdCBtZW51U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBjb25zdCBtZW51SXRlbXMgPSBbJ0hvbWUnLCAnTWVudScsICdDb250YWN0J107XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IG1lbnVJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ25hdi1pdGVtJyk7XG4gICAgaXRlbS50ZXh0Q29udGVudCA9IG1lbnVJdGVtc1tpXTtcbiAgICBpdGVtLmlkID0gYCR7bWVudUl0ZW1zW2ldLnRvTG93ZXJDYXNlKCl9LW5hdmA7XG4gICAgaWYgKGkgPT09IHNlbGVjdGVkKSB7XG4gICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ25hdi1pdGVtLXNlbGVjdGVkJyk7XG4gICAgfVxuXG4gICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQoaXRlbSk7XG4gIH1cblxuICByZXR1cm4gbWVudVNlY3Rpb247XG59XG5cbmV4cG9ydCB7Y3JlYXRlTmF2YmFyIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBvcGVuTWFpblBhZ2UgfSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IHsgb3Blbk1lbnVQYWdlIH0gZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCB7IG9wZW5Db250YWN0UGFnZSB9IGZyb20gJy4vY29udGFjdC5qcyc7XG5cbmZ1bmN0aW9uIGNsZWFyUGFnZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbn1cblxuZnVuY3Rpb24gc2V0TmF2TGlzdGVuZXJzKCkge1xuICBjb25zdCBob21lTmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUtbmF2Jyk7XG4gIGNvbnN0IG1lbnVOYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1uYXYnKTtcbiAgY29uc3QgY29udGFjdE5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LW5hdicpO1xuXG4gIGhvbWVOYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJQYWdlKCk7XG4gICAgb3Blbk1haW5QYWdlKCk7XG4gICAgc2V0TmF2TGlzdGVuZXJzKCk7XG4gIH0pO1xuXG4gIG1lbnVOYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJQYWdlKCk7XG4gICAgb3Blbk1lbnVQYWdlKCk7XG4gICAgc2V0TmF2TGlzdGVuZXJzKCk7XG4gIH0pO1xuXG4gIGNvbnRhY3ROYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJQYWdlKCk7XG4gICAgb3BlbkNvbnRhY3RQYWdlKCk7XG4gICAgc2V0TmF2TGlzdGVuZXJzKCk7XG4gIH0pO1xufVxuXG5vcGVuTWFpblBhZ2UoKTtcbnNldE5hdkxpc3RlbmVycygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==