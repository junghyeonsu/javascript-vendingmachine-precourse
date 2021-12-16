import { SELECTOR } from '../../constants.js';

export const createTitle = () => `
  <h1>자판기</h1>
`;

export const createMenuButtons = () => `
  <div id="${SELECTOR.menuButtonContainerId}">
    <button id="${SELECTOR.productAddMenuButtonId}">상품 관리</button>
    <button id="${SELECTOR.vendingMachineManageMenuButtonId}">잔돈 충전</button>
    <button id="${SELECTOR.productPurchaseMenuButtonId}">상품 구매</button>
  </div>
`;

export const createMenuContentContainer = () => `
  <div id="${SELECTOR.menuContentContainerId}"></div>
`;

export const createMenuView = menuName => `
  <div>
    <p>안녕하세요 저는 메뉴에요</p>
    <p>메뉴 이름은 ${menuName} 입니다.</p>
  </div>
`;
