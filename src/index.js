import { homeBtn, menuBtn, contactBtn, renderHeader } from './header';
import renderHome from './home.js'; 

const content = document.getElementById('content');
const branch1 = createHtmlElement('div', ['branch', 'branch-left']);
const branch2 = createHtmlElement('div', ['branch', 'branch-right']);
const branch3 = createHtmlElement('div', ['branch', 'branch-right']);
const body = document.querySelector('body');
body.append(branch1, branch2, branch3);

function createHtmlElement(type, arrayClasses, content) {
  const element = document.createElement(type);
  if (arrayClasses)
    arrayClasses.forEach((myClass) => element.classList.add(myClass));
  if (content) element.innerText = content;

  return element;
}

renderHeader();
renderHome();

export { content, createHtmlElement };