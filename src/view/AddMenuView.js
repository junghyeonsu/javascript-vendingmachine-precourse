import { createMenuView } from './templates/index.js';

import { SELECTOR } from '../constants.js';
import { $ } from '../utils/dom.js';

class AddMenuView {
  constructor(menuName) {
    this.renderWithMenuName(menuName);
  }

  renderWithMenuName(menuName) {
    $(`#${SELECTOR.menuContentContainerId}`).innerHTML = createMenuView(menuName);
  }
}

export default AddMenuView;
