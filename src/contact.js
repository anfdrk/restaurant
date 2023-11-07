import { main, createHtmlElement } from './index';

function renderContact() {
  main.innerHTML = '';
  main.className = '';
  main.classList.add('contact');

  const phoneNumber = createHtmlElement('p', [], '📞 123 456 789');
  const address = createHtmlElement('p', [], '🏠 Meteor Street 11, Ventura Bay, Liberty Land');
  
  const location = document.createElement('img');
  location.src = 'images/location.jpg';
  location.alt = 'Restaurant location';

  main.append(phoneNumber, address, location);
}

export { renderContact };