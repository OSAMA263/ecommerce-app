import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "ProductsSlice/fetchProducts",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
  }
);

const ProductsSlice = createSlice({
  initialState: [],
  name: "ProductsSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => action.payload);
  },
});
// eslint-disable-next-line no-empty-pattern
export const {} = ProductsSlice.actions;
export default ProductsSlice.reducer;
