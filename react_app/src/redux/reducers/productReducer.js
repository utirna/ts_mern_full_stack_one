import actionType from "../actions/action_type";

let initData = {
  products: [],
  isDefaultLoaded: 0,
};

export const ProductReducer = (state = initData, action) => {
  let { type, payload } = action;
  switch (type) {
    case actionType.SAVE_NEW_PRODUCT:
      let newProducts = [...state.products];
      newProducts.push(payload);
      return { ...state, products: newProducts };
    case actionType.REMOVE_PRODUCT:
      let removeProduct = [...state.products];
      removeProduct.splice(payload, 1);
      return { ...state, products: removeProduct };
    case actionType.SAVE_NEW_PRODUCT_LIST:
      return { ...state, ...payload };
    default:
      return state;
  }
};
