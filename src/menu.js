import { main, createHtmlElement } from './index';

function renderMenu() {
  main.innerHTML = '';
  main.className = '';
  main.classList.add('menu');

  main.appendChild(createMenuItem(
    'Sushi Roll',
    '10.99 $'
  ));
  main.appendChild(createMenuItem(
    'Onigiri',
    '15.99 $'
  ));
  main.appendChild(createMenuItem(
    'Spring Roll',
    '19.99 $'
  ));
}

function createMenuItem(name, price) {
  const menuItem = createHtmlElement('div', ['menu-item']);
  const foodName = createHtmlElement('h2', [], name);
  const foodPrice = createHtmlElement('p', [], price);
  
  const foodImage = createHtmlElement('img');
  foodImage.src = `images/${name.toLowerCase().replace(/\s+/g, '-')}.png`;
  foodImage.alt = `${name}`;

  menuItem.append(foodImage, foodName, foodPrice);

  return menuItem;
}

export { renderMenu };