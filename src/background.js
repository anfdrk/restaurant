import { createHtmlElement } from './index';

function addBackground() {
  const branch1 = createHtmlElement('div', ['branch', 'branch-left']);
  const branch2 = createHtmlElement('div', ['branch', 'branch-right']);
  const branch3 = createHtmlElement('div', ['branch', 'branch-right']);
  document.body.append(branch1, branch2, branch3);
}

export { addBackground };