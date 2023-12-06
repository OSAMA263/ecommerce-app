import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/ProductsSlice";
import cartSlice from "./slices/CartSlice";

export const store = configureStore({
  reducer: { products: productsSlice ,myCart:cartSlice},
});
