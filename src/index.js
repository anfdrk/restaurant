import { addBackground } from './background';
import { renderHeader } from './header';
import { renderHome } from './home';
import { renderMenu } from './menu';

const content = document.getElementById('content');

addBackground();
renderHeader();
const main = document.createElement('main');
content.append(main);
renderHome();

function handleButtonClick(button, buttonText) {
  const allButtons = document.querySelectorAll('.nav-btn span');
  allButtons.forEach(b => b.classList.remove('active'));

  button.querySelector('span').classList.add('active');

  if (buttonText === 'Home') renderHome();
  if (buttonText === 'Menu') renderMenu();
}

function createHtmlElement(type, classes, content) {
  const element = document.createElement(type);
  if (classes)
    classes.forEach(c => element.classList.add(c));
  if (content) element.innerText = content;
  
  return element;
}

export { content, main, createHtmlElement, handleButtonClick };