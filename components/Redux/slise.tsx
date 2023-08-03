import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import CartItem from "../UI/cart/cart-items";

export interface CartType {
    cartItems: StateType[];
    totalPriceSum: number;
    totalValSum: number;
}

export interface StateType {
    val : number,
    size: string,
    title:  string,
    index:number,
    price:number,
    id ? : number
}
const initialState:CartType = {
    cartItems : [],
    totalPriceSum: 0,
    totalValSum: 0,
}
export const CartSlide = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addCart: (state, action: PayloadAction<StateType>) => {
            // Use the spread operator to create a new array
            state.cartItems = [...state.cartItems, action.payload];
            state.totalPriceSum = state.cartItems.reduce((acc, item) => acc + (item.price* item.val), 0);
            state.totalValSum = state.cartItems.reduce((acc, item) => acc + (item.val), 0);
        },
        plusVal: (state, action: PayloadAction<StateType>) => {
            const { val,id} = action.payload;
            // // cartItems 배열 내 해당 아이템의 속성을 업데이트
            state.cartItems[id].val = val+1;
            // // 업데이트 후 totalValSum 재계산
            state.totalPriceSum = state.cartItems.reduce((acc, item) => acc + (item.price * item.val), 0);
            state.totalValSum = state.cartItems.reduce((acc, item) => acc + (item.val), 0);
        },
        minusVal: (state, action: PayloadAction<StateType>) => {
            const { val,id } = action.payload;
            // // cartItems 배열 내 해당 아이템의 속성을 업데이트
            state.cartItems[id].val = val-1;
            // // 업데이트 후 totalValSum 재계산
            state.totalPriceSum = state.cartItems.reduce((acc, item) => acc + (item.price * item.val), 0);
            state.totalValSum = state.cartItems.reduce((acc, item) => acc + (item.val), 0);
        },
        deleteItem: (state, action: PayloadAction<StateType>) => {
            const {size,title} = action.payload;
            state.cartItems = [...state.cartItems.filter((item)=>item.size !== size), ...state.cartItems.filter((item)=>item.size===size).filter((item)=>item.title !==title)];
            console.log(state.cartItems)
            state.totalPriceSum = state.cartItems.reduce((acc, item) => acc + (item.price * item.val), 0);
            state.totalValSum = state.cartItems.reduce((acc, item) => acc + (item.val), 0);
          },
    }
});

export const { addCart,plusVal,minusVal, deleteItem } = CartSlide.actions;
export default CartSlide.reducer;