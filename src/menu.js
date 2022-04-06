import { createNavbar } from './navbar.js';

function createTopContent() {
  const heading = document.createElement('section');
  heading.id = 'heading';
  heading.appendChild(createNavbar(1));
  
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

function openMenuPage() {
  const content = document.getElementById('content');
  const top = document.createElement('section');

  top.id = 'top';
  top.appendChild(createTopContent());
  content.appendChild(top);
  content.appendChild(createMiddleContent());
}

export { createMenu };
export { openMenuPage };