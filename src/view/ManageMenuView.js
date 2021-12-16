import { createMenuView } from './templates/index.js';

import { SELECTOR } from '../constants.js';
import { $ } from '../utils/dom.js';

class ManageMenuView {
  renderWithMenuName(menuName) {
    $(`#${SELECTOR.menuContentContainerId}`).innerHTML = createMenuView(menuName);
  }
}

export default ManageMenuView;
