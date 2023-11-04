import { content, createHtmlElement } from './index.js';

function renderHome() {
  const main = createHtmlElement('main', ['home']);
  const container = document.createElement('div');
  const title = createHtmlElement('h1', [], 'Taste of Japan');
  const paragraph = createHtmlElement('p', [], 
  'Enjoy a good dinner with the best dishes in the restourant and improve your day.');
  const img = document.createElement('img');
  img.src = 'images/sushi-rolls-1.png';
  const orderBtn = createHtmlElement('button', ['order-btn'], 'Order'); // добавить обработчик

  container.append(title, paragraph, orderBtn);
  main.append(container, img);
  content.append(main);
}

export default renderHome;