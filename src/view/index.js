import { $ } from '../utils/dom.js';
import {
  createTitle,
  createAddProductForm,
  createPrductItemTable,
  createProductItemTableBody,
} from './templates/index.js';

import { SELECTOR } from '../constants.js';

class VendingMachineView {
  constructor() {
    this.initializeView();
  }

  initializeView() {
    $(`#${SELECTOR.app}`).innerHTML =
      createTitle() + createAddProductForm() + createPrductItemTable();
  }

  renderTableBody(productItems) {
    $(`#${SELECTOR.productManageTableBodyId}`).innerHTML = createProductItemTableBody(productItems);
  }
}

export default VendingMachineView;
