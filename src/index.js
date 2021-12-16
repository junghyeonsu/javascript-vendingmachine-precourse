import VendingMachineController from './controller/index.js';

class VendingMachine {
  constructor() {
    this.$controller = new VendingMachineController();
  }
}

new VendingMachine();
