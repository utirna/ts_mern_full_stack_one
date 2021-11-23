import { combineReducers } from "redux";
import { ProductReducer } from "./productReducer";
let reducer = combineReducers({
  allProduct: ProductReducer,
});
export default reducer;
