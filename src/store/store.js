import { combineReducers } from "redux";
import addToCart from "../store/addetCart";
import addToCartBtn from "./addToCartBtn";
import addToHeart from "./addToHeart";

const reducer = combineReducers({
  addToCart,
  addToCartBtn,
  addToHeart,
});

export default reducer;
