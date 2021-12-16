import VendingMachineView from '../view/VendingMachine.js';
import AddMenuView from '../view/AddMenuView.js';
import ManageMenuView from '../view/ManageMenuView.js';
import PurchaseMenuView from '../view/PurchaseMenuView.js';

import MenuModel from '../model/Menu.js';

import { SELECTOR } from '../constants.js';
import { $ } from '../utils/dom.js';

class VendingMachineController {
  constructor() {
    this.$vendingMachineView = new VendingMachineView();
    this.$menuModel = new MenuModel();
    this.$addMenuView = new AddMenuView(this.$menuModel.getCurrentMenu());
    this.$manageMenuView = new ManageMenuView();
    this.$purchaseMenuView = new PurchaseMenuView();

    this.initEventListners();
  }

  initEventListners() {
    $(`#${SELECTOR.menuButtonContainerId}`).addEventListener(
      'click',
      this.handleMenuButtonContainer.bind(this),
    );
  }

  handleMenuButtonContainer(event) {
    const { id } = event.target;

    switch (id) {
      case SELECTOR.productAddMenuButtonId:
        this.$menuModel.setCurrentMenu(SELECTOR.productAddMenuButtonId);
        this.$addMenuView.renderWithMenuName(this.$menuModel.getCurrentMenu());
        break;
      case SELECTOR.vendingMachineManageMenuButtonId:
        this.$menuModel.setCurrentMenu(SELECTOR.vendingMachineManageMenuButtonId);
        this.$manageMenuView.renderWithMenuName(this.$menuModel.getCurrentMenu());
        break;
      case SELECTOR.productPurchaseMenuButtonId:
        this.$menuModel.setCurrentMenu(SELECTOR.productPurchaseMenuButtonId);
        this.$purchaseMenuView.renderWithMenuName(this.$menuModel.getCurrentMenu());
        break;
      default:
        break;
    }
  }
}

export default VendingMachineController;
