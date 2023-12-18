import { createStore } from "redux";
import { cartReducer } from "./cart/cartReducer";

export const store = createStore(cartReducer);
