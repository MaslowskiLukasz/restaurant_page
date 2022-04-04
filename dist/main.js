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
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");


function openMenuPage() {
  console.log('menu');
  const content = document.getElementById('content');
  const top = document.createElement('section');
  top.id = 'top';
  top.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createNavbar)(1));
  content.appendChild(top);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRjJDOztBQUUzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix3REFBWTtBQUNsQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIseUJBQXlCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUV3Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZIaUI7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isc0RBQVk7QUFDOUI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O1VDbEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ055QztBQUNBO0FBQ007O0FBRS9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHNEQUFZO0FBQ2hCO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBSSxzREFBWTtBQUNoQjtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUksNERBQWU7QUFDbkI7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsc0RBQVk7QUFDWixrQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIG9wZW5Db250YWN0UGFnZSgpIHtcbiAgY29uc29sZS5sb2coJ2NvbnRhY3QnKTtcbn1cblxuZXhwb3J0IHsgb3BlbkNvbnRhY3RQYWdlIH0iLCJpbXBvcnQgeyBjcmVhdGVOYXZiYXIgfSBmcm9tICcuL25hdmJhci5qcyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvcENvbnRlbnQoKSB7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgaGVhZGluZy5pZCA9ICdoZWFkaW5nJztcbiAgdGl0bGUudGV4dENvbnRlbnQgPSAnQmVzdCBidXJnZXJzIGluIHRvd24hJztcbiAgYnRuLmlkID0gJ2NhbGwtdG8tYWN0aW9uLWJ0bic7XG4gIGJ0bi50ZXh0Q29udGVudCA9ICdDaGVjayBpdCBvdXQhJztcbiAgaGVhZGluZy5hcHBlbmRDaGlsZChjcmVhdGVOYXZiYXIoMCkpO1xuICBoZWFkaW5nLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgaGVhZGluZy5hcHBlbmRDaGlsZChidG4pO1xuXG4gIHJldHVybiBoZWFkaW5nO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICBjb25zdCBidXJnZXJzTmFtZXMgPSBbJ0t1cmEnLCAnQmVrb24nLCAnTWnEmcWbbmlhaycsICdOYWNob3MnXTtcbiAgY29uc3QgcHJpY2VzID0gWycyMy41MCB6xYInLCAnMjQsMDAgesWCJywgJzIyLDUwIHrFgicsICcyNSwwMCB6xYInXTtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51LmlkID0gJ21lbnUnO1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBidXJnZXJzTmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgXG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICBuYW1lLnRleHRDb250ZW50ID0gYnVyZ2Vyc05hbWVzW2ldO1xuICAgIHByaWNlLmNsYXNzTGlzdC5hZGQoJ3ByaWNlJyk7XG4gICAgcHJpY2UudGV4dENvbnRlbnQgPSBwcmljZXNbaV07XG5cbiAgICBpdGVtLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQocHJpY2UpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gIH1cblxuICByZXR1cm4gbWVudTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWlkZGxlQ29udGVudCgpIHtcbiAgY29uc3QgbWVudVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29uc3QgYnRuUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBcbiAgbWVudVNlY3Rpb24uaWQgPSAnbWVudS1zZWN0aW9uJztcbiAgYnRuLmlkID0gJ2Z1bGwtbWVudS1idG4nO1xuICBidG4udGV4dENvbnRlbnQgPSAnU2VlIGZ1bGwgbWVudSdcbiAgdGl0bGUudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gIGJ0blJvdy5jbGFzc0xpc3QuYWRkKCdidG4tcm93Jyk7XG5cbiAgYnRuUm93LmFwcGVuZENoaWxkKGJ0bik7XG4gIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcbiAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQoYnRuUm93KTtcblxuICByZXR1cm4gbWVudVNlY3Rpb247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluZm8oeCkge1xuICBjb25zdCBjb250YWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBzdHJlZXRzID0gWydVbC4gUGllcndzenkgQWRyZXMgMycsICdVbC4gRHJ1Z2kgQWRyZXMgNDIvMSddO1xuICBjb25zdCBwaG9uZXMgPSBbJzEyMyA0NTYgNjc4JywgJzk4NyA2NTQgMzIxJ107XG4gIGNvbnN0IG9wZW5pbmcgPSBbJ1BuLU5kOiAxMjowMCAtIDIyOjAwJywgJ1BuLU5kOiAxMjowMCAtIDIxOjAwJ107XG4gIFxuICBjb25zdCBzdHJlZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3Qgb3BlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgXG4gIHN0cmVldC50ZXh0Q29udGVudCA9IHN0cmVldHNbeF07XG4gIHBob25lLnRleHRDb250ZW50ID0gcGhvbmVzW3hdO1xuICBvcGVuLnRleHRDb250ZW50ID0gb3BlbmluZ1t4XTtcblxuICBjb250YWN0SW5mby5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWluZm8nKTtcbiAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoc3RyZWV0KTtcbiAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQocGhvbmUpO1xuICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChvcGVuKTtcblxuICByZXR1cm4gY29udGFjdEluZm87XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJvdHRvbUNvbnRlbnQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuXG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBcbiAgZm9yKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSW5mbyhpKSk7XG4gIH1cblxuICByZXR1cm4gY29udGVudDtcblxufVxuXG5sZXQgb3Blbk1haW5QYWdlID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCB0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIGNvbnN0IG1pZGRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgY29uc3QgYm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuXG4gIHRvcC5pZCA9ICd0b3AnO1xuICBtaWRkbGUuaWQgPSAnbWlkZGxlJztcbiAgYm90dG9tLmlkID0gJ2JvdHRvbSc7XG5cbiAgdG9wLmFwcGVuZENoaWxkKGNyZWF0ZVRvcENvbnRlbnQoKSk7XG4gIG1pZGRsZS5hcHBlbmRDaGlsZChjcmVhdGVNaWRkbGVDb250ZW50KCkpO1xuICBib3R0b20uYXBwZW5kQ2hpbGQoY3JlYXRlQm90dG9tQ29udGVudCgpKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKHRvcCk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWlkZGxlKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChib3R0b20pO1xufVxuXG5leHBvcnQgeyBvcGVuTWFpblBhZ2UgfTtcbmV4cG9ydCB7IGNyZWF0ZU5hdmJhciB9OyIsImltcG9ydCB7IGNyZWF0ZU5hdmJhciB9IGZyb20gJy4vaG9tZS5qcyc7XG5cbmZ1bmN0aW9uIG9wZW5NZW51UGFnZSgpIHtcbiAgY29uc29sZS5sb2coJ21lbnUnKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IHRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgdG9wLmlkID0gJ3RvcCc7XG4gIHRvcC5hcHBlbmRDaGlsZChjcmVhdGVOYXZiYXIoMSkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRvcCk7XG59XG5cbmV4cG9ydCB7IG9wZW5NZW51UGFnZSB9IiwiZnVuY3Rpb24gY3JlYXRlTmF2YmFyKHNlbGVjdGVkKSB7XG4gIGNvbnN0IG1lbnVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIGNvbnN0IG1lbnVJdGVtcyA9IFsnSG9tZScsICdNZW51JywgJ0NvbnRhY3QnXTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgbWVudUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0nKTtcbiAgICBpdGVtLnRleHRDb250ZW50ID0gbWVudUl0ZW1zW2ldO1xuICAgIGl0ZW0uaWQgPSBgJHttZW51SXRlbXNbaV0udG9Mb3dlckNhc2UoKX0tbmF2YDtcbiAgICBpZiAoaSA9PT0gc2VsZWN0ZWQpIHtcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0tc2VsZWN0ZWQnKTtcbiAgICB9XG5cbiAgICBtZW51U2VjdGlvbi5hcHBlbmRDaGlsZChpdGVtKTtcbiAgfVxuXG4gIHJldHVybiBtZW51U2VjdGlvbjtcbn1cblxuZXhwb3J0IHtjcmVhdGVOYXZiYXIgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IG9wZW5NYWluUGFnZSB9IGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgeyBvcGVuTWVudVBhZ2UgfSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IHsgb3BlbkNvbnRhY3RQYWdlIH0gZnJvbSAnLi9jb250YWN0LmpzJztcblxuZnVuY3Rpb24gY2xlYXJQYWdlKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29udGVudC50ZXh0Q29udGVudCA9ICcnO1xufVxuXG5mdW5jdGlvbiBzZXROYXZMaXN0ZW5lcnMoKSB7XG4gIGNvbnN0IGhvbWVOYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS1uYXYnKTtcbiAgY29uc3QgbWVudU5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LW5hdicpO1xuICBjb25zdCBjb250YWN0TmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtbmF2Jyk7XG5cbiAgaG9tZU5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhclBhZ2UoKTtcbiAgICBvcGVuTWFpblBhZ2UoKTtcbiAgICBzZXROYXZMaXN0ZW5lcnMoKTtcbiAgfSk7XG5cbiAgbWVudU5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhclBhZ2UoKTtcbiAgICBvcGVuTWVudVBhZ2UoKTtcbiAgICBzZXROYXZMaXN0ZW5lcnMoKTtcbiAgfSk7XG5cbiAgY29udGFjdE5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhclBhZ2UoKTtcbiAgICBvcGVuQ29udGFjdFBhZ2UoKTtcbiAgICBzZXROYXZMaXN0ZW5lcnMoKTtcbiAgfSk7XG59XG5cbm9wZW5NYWluUGFnZSgpO1xuc2V0TmF2TGlzdGVuZXJzKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9