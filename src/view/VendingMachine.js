import { $ } from '../utils/dom.js';
import { createTitle, createMenuButtons, createMenuContentContainer } from './templates/index.js';

import { SELECTOR } from '../constants.js';

class VendingMachineView {
  constructor() {
    this.render();
  }

  render() {
    $(`#${SELECTOR.app}`).innerHTML =
      createTitle() + createMenuButtons() + createMenuContentContainer();
  }
}

export default VendingMachineView;
