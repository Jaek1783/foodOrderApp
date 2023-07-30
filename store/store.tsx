import { configureStore } from "@reduxjs/toolkit";
import  CartSlide  from "../components/Redux/slise";
import { CartType } from "../components/Redux/slise";
export interface RootState {
    cart: CartType;
  }

export const store = configureStore({
    reducer:{ cart : CartSlide}
});