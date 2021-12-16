export const SELECTOR = Object.freeze({
  app: 'app',

  // 상품 추가 input 관련 selector
  productNameInputId: 'product-name-input',
  productPriceInputId: 'product-price-input',
  productQuantityInputId: 'product-quantity-input',
  productAddButtonId: 'product-add-button',

  // 추가된 상품 관련 selector
  productManageTableBodyId: 'product-manage-table-body-container',
  productManageItemClass: 'product-manage-item',
  productManageNameClass: 'product-manage-name',
  productManagePriceClass: 'product-manage-price',
  productManageQuantityClass: 'product-manage-quantity',
});

export const STYLE = Object.freeze({
  tableBodyData: 'border: 1px solid black;padding: 10px 50px;text-align: center;',
  tableHeadData: 'border: 1px solid black;padding: 10px 50px;font-weight: bold;text-align: center;',
  table: 'border: 1px solid black;border-collapse: collapse;',
});
