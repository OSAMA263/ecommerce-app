import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  initialState: localStorage.cart ? JSON.parse(localStorage.cart) : [],
  name: "CartSlice",
  reducers: {
    AddToCart: (state, action) => {
      const findedPro = state.find((pro) => pro.id === action.payload.id);
      const clonePro = { ...action.payload };
      findedPro ? (findedPro.qty += 1) : state.push({ ...clonePro, qty: 1 });
    },
    MinusQTY: (state, action) => {
      const findedPro = state.find((pro) => pro.id === action.payload.id);
      findedPro && findedPro.qty > 1 && (findedPro.qty -= 1);
    },
    RemoveFromCart: (state, action) =>
      state.filter((pro) => pro.id !== action.payload.id),
    Clear: () => [],
  },
});

export const { AddToCart, RemoveFromCart, Clear, MinusQTY } = CartSlice.actions;
export default CartSlice.reducer;
