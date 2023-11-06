import { main, createHtmlElement } from './index';

function renderMenu() {
  main.innerHTML = '';
  main.className = '';
  main.classList.add('menu');
  
  const p = createHtmlElement('p', [], 
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic quo architecto ipsum magnam eum adipisci dicta blanditiis nam! Voluptate doloribus qui aliquid ut minima fugit distinctio neque beatae numquam recusandae.');

  main.append(p);
}

export { renderMenu };