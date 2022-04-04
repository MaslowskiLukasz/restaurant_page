import { openMainPage } from './home.js';
import { openMenuPage } from './menu.js';
import { openContactPage } from './contact.js';

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
    openMainPage();
    setNavListeners();
  });

  menuNav.addEventListener('click', () => {
    clearPage();
    openMenuPage();
    setNavListeners();
  });

  contactNav.addEventListener('click', () => {
    clearPage();
    openContactPage();
    setNavListeners();
  });
}

openMainPage();
setNavListeners();