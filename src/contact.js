import { createNavbar } from './navbar.js';

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

function createTopContent() {
  const heading = document.createElement('section');
  heading.id = 'heading';
  heading.appendChild(createNavbar(2));
  
  return heading;
}

function openContactPage() {
  const content = document.getElementById('content');
  const top = document.createElement('section');

  top.id = 'top';
  top.appendChild(createTopContent());
  content.appendChild(top);
}

export { openContactPage };
export { createInfo };