class VendingMachineModel {
  constructor() {
    this.$productItems = [];
  }

  getProductItems() {
    return this.$productItems;
  }

  setProductItems(productItems) {
    this.$productItems = productItems;
  }
}

export default VendingMachineModel;
