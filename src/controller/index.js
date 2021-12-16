import VendingMachineView from '../view/index.js';
import VendingMachineModel from '../model/index.js';
import { validateProductName } from './validators/index.js';
import { $ } from '../utils/dom.js';

import { SELECTOR } from '../constants.js';

class VendingMachineController {
  constructor() {
    this.$view = new VendingMachineView();
    this.$model = new VendingMachineModel();

    this.initEventListeners();
  }

  initEventListeners() {
    $(`#${SELECTOR.productAddButtonId}`).addEventListener(
      'click',
      this.onClickAddButton.bind(this),
    );
  }

  onClickAddButton() {
    const name = $(`#${SELECTOR.productNameInputId}`).value;
    const price = $(`#${SELECTOR.productPriceInputId}`).value;
    const quantity = $(`#${SELECTOR.productQuantityInputId}`).value;

    if (!validateProductName(name)) return;

    const addedItem = { name, price, quantity };
    const newProductItems = [...this.$model.getProductItems(), addedItem];
    this.$model.setProductItems(newProductItems);
    this.$view.renderTableBody(this.$model.getProductItems());
  }
}

export default VendingMachineController;
