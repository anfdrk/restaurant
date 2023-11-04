import { content, createHtmlElement } from './index';

const homeBtn = createHtmlElement('button', ['nav-btn']);
const homeBtnText = createHtmlElement('span', [], 'Home');
homeBtn.append(homeBtnText);

const menuBtn = createHtmlElement('button', ['nav-btn']);
const menuBtnText = createHtmlElement('span', [], 'Menu');
menuBtn.append(menuBtnText);

const contactBtn = createHtmlElement('button', ['nav-btn']);
const contactBtnText = createHtmlElement('span', [], 'Contact');
contactBtn.append(contactBtnText);

function createNav() {
  const nav = document.createElement('nav');
  nav.append(homeBtn, menuBtn, contactBtn);
  return nav;
}

function renderHeader() {
  const header = createHtmlElement('header', ['header'], null);
  const logo = createHtmlElement('h3', ['logo'], 'SUSHI');
  
  header.append(logo, createNav());
  content.append(header);

  return header;
}

export { homeBtn, menuBtn, contactBtn, renderHeader };