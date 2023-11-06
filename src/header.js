import { content, createHtmlElement, handleButtonClick } from './index';

function renderHeader() {
  const header = createHtmlElement('header', ['header']);
  const logo = createHtmlElement('h3', ['logo'], 'SUSHI');
  const nav = document.createElement('nav');
  const [homeBtn, menuBtn, contactBtn] = createNavButtons();

  nav.append(homeBtn, menuBtn, contactBtn);
  header.append(logo, nav);
  content.append(header);

  return header;
}

function createNavButtons() {
  const homeBtn = createButton('Home');
  const menuBtn = createButton('Menu');
  const contactBtn = createButton('Contact');
  return [homeBtn, menuBtn, contactBtn];
}

function createButton(text) {
  const button = createHtmlElement('button', ['nav-btn']);
  const buttonText = createHtmlElement('span', [], text);
  button.append(buttonText);
  
  button.addEventListener('click', () => {
    handleButtonClick(button, text);
  });
  
  return button;
}

export { renderHeader };