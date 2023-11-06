import { main, createHtmlElement } from './index';
import { renderMenu } from './menu';

function renderHome() {
  main.innerHTML = '';
  main.className = '';
  main.classList.add('home');

  const container = document.createElement('div');
  const title = createHtmlElement('h1', [], 'Taste of Japan');
  const paragraph = createHtmlElement('p', [], 
  'Enjoy a good dinner with the best dishes in the restourant and improve your day.');
  const img = document.createElement('img');
  img.src = 'images/sushi-rolls-home.png';
  const orderBtn = createHtmlElement('button', ['order-btn'], 'Order');

  orderBtn.addEventListener('click', () => {
    const navButtons = document.querySelectorAll('.nav-btn span');
    navButtons.forEach(button => {
      if (button.textContent !== 'Menu') {
        button.classList.remove('active');
      } else {
        button.classList.add('active');
      }
    });
    renderMenu();
  })

  container.append(title, paragraph, orderBtn);
  main.append(container, img);
}

export { renderHome };