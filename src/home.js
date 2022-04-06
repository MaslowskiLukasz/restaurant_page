import { createNavbar } from './navbar.js';
import { createMenu } from './menu.js';
import { createInfo } from './contact.js';

function createTopContent() {
  const heading = document.createElement('section');
  const title = document.createElement('h1');
  const btn = document.createElement('button');

  heading.id = 'heading';
  title.textContent = 'Best burgers in town!';
  btn.id = 'call-to-action-btn';
  btn.textContent = 'Check it out!';
  heading.appendChild(createNavbar(0));
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
  menuSection.appendChild(createMenu());
  menuSection.appendChild(btnRow);

  return menuSection;
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

export { openMainPage };
export { createNavbar };
export { createBottomContent };