import actionType from "./action_type";
export const addNewProductAction = (newProduct) => {
  return {
    type: actionType.SAVE_NEW_PRODUCT,
    payload: newProduct,
  };
};

export const removeProductAction = (p_id) => {
  return {
    type: actionType.REMOVE_PRODUCT,
    payload: p_id,
  };
};

export const addProductListAction = (newProductList) => {
  return {
    type: actionType.SAVE_NEW_PRODUCT_LIST,
    payload: newProductList,
  };
};
