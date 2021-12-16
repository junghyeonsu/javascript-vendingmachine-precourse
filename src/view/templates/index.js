import { SELECTOR, STYLE } from '../../constants.js';

export const createTitle = () => `
	<h1>자판기</h1>
`;

export const createAddProductForm = () => `
  <h2>상품 추가</h2>
  <div>
    <input placeholder="상품명" id="${SELECTOR.productNameInputId}" />
    <input placeholder="가격" id="${SELECTOR.productPriceInputId}" type="number" />
    <input placeholder="수량" id="${SELECTOR.productQuantityInputId}" type="number" />
    <button id="${SELECTOR.productAddButtonId}">추가하기</button>
  </div>
`;

export const createPrductItemTable = () => `
  <h2>상품 현황</h2>
  <table style="${STYLE.table}">
    <thead>
      <tr>
        <td style="${STYLE.tableHeadData}">
          상품명
        </td>
        <td style="${STYLE.tableHeadData}">
          가격
        </td>
        <td style="${STYLE.tableHeadData}">
          수량
        </td>
      </tr>
    </thead>
    <tbody id="${SELECTOR.productManageTableBodyId}">
    </tbody>
  </table>
`;

export const createProductItemTableBody = productItems => `
  ${productItems
    .map(
      item => `
      <tr>
        <td style="${STYLE.tableBodyData}">${item.name}</td>
        <td style="${STYLE.tableBodyData}">${item.price}</td>
        <td style="${STYLE.tableBodyData}">${item.quantity}</td>
      </tr>
    `,
    )
    .join('')}
`;
