import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface CartType {
    cartItems: StateType[];
    totalValSum: number; // Assuming you have a CartItem interface defined
}

export interface StateType {
    val : number,
    size: string,
    title:  string,
    index:number,
    price:number
}
const initialState:CartType = {
    cartItems : [],
    totalValSum: 0,
}
export const CartSlide = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addCart: (state, action: PayloadAction<StateType>) => {
            // Use the spread operator to create a new array
            state.cartItems = [...state.cartItems, action.payload];
            state.totalValSum = state.cartItems.reduce((acc, item) => acc + (item.price* item.val), 0);
        }
    }
});

export const { addCart } = CartSlide.actions;
export default CartSlide.reducer;