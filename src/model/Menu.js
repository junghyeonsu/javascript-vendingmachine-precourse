import { SELECTOR } from '../constants.js';

class MenuModel {
  constructor() {
    this.$currentMenu = SELECTOR.productAddMenuButtonId;
  }

  getCurrentMenu() {
    return this.$currentMenu;
  }

  setCurrentMenu(menu) {
    this.$currentMenu = menu;
  }
}

export default MenuModel;
