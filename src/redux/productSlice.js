import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  searchTerm: "",
  filteredData: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.products = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredData = state.products.filter((product) =>
        product.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    },
  },
});

export const { setProduct, setSearchTerm } = productSlice.actions;

export default productSlice.reducer;
