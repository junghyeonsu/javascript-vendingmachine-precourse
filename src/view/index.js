import { createTitle } from './templates/index.js';
import { SELECTOR } from '../constants.js';
import { $ } from '../utils/dom.js';

class VendingMachineView {
  constructor() {
    this.initializeView();
  }

  initializeView() {
    $(`#${SELECTOR.app}`).innerHTML = createTitle();
  }
}

export default VendingMachineView;
