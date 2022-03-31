function createHeadingContent() {
  const heading = document.createElement('section');
  const title = document.createElement('h1');
  const btn = document.createElement('button');

  heading.id = 'heading';
  title.textContent = 'Best burgers in town!';
  btn.id = 'call-to-action-btn';
  btn.textContent = 'Check it out!';
  heading.appendChild(title);
  heading.appendChild(btn);

  return heading;
}

function createMiddleContent() {
  const menuSection = document.createElement('section');
  const menu = document.createElement('div');
  const title = document.createElement('h2');
  const btnRow = document.createElement('div');
  const btn = document.createElement('button');
  const burgersNames = ['Kura', 'Bekon', 'Mięśniak', 'Nachos'];
  
  menuSection.id = 'menu-section';
  menu.id = 'menu';
  btn.id = 'full-menu-btn';
  btn.textContent = 'See full menu'
  title.textContent = 'Menu';
  btnRow.classList.add('btn-row');

  for(let i = 0; i < burgersNames.length; i++) {
    const item = document.createElement('div');
    const name = document.createElement('h3');
    const price = document.createElement('p');
    

    item.classList.add('menu-item');
    name.textContent = burgersNames[i];
    price.classList.add('price');
    price.textContent = '23.50 zł';

    item.appendChild(name);
    item.appendChild(price);

    menu.appendChild(item);
  }

  btnRow.appendChild(btn);
  menuSection.appendChild(title);
  menuSection.appendChild(menu);
  menuSection.appendChild(btnRow);

  return menuSection;
}

function createBottomContent() {
  const tmp = document.createElement('h2');
  tmp.textContent = 'test';
  return tmp;
}

let openMainPage = function() {
  const content = document.getElementById('content');
  const top = document.createElement('section');
  const middle = document.createElement('section');
  const bottom = document.createElement('section');

  top.id = 'top';
  middle.id = 'middle';
  bottom.id = 'bottom';
  top.appendChild(createHeadingContent());
  middle.appendChild(createMiddleContent());
  bottom.appendChild(createBottomContent());
  content.appendChild(top);
  content.appendChild(middle);
  content.appendChild(bottom);
}

export { openMainPage };