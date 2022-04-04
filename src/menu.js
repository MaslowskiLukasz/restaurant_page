import { createNavbar } from './navbar.js';

function openMenuPage() {
  console.log('menu');
  const content = document.getElementById('content');
  const top = document.createElement('section');
  top.id = 'top';
  top.appendChild(createNavbar(1));
  content.appendChild(top);
}

export { openMenuPage }