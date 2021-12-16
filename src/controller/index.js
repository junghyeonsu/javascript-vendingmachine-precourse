import VendingMachineView from '../view/index.js';
import VendingMachineModel from '../model/index.js';

class VendingMachineController {
  constructor() {
    this.$view = new VendingMachineView();
    this.$model = new VendingMachineModel();
  }
}

export default VendingMachineController;
