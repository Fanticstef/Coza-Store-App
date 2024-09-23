import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let newItem = action.payload;
      let itemIndex = state.products.find(
        (item) => item.id === action.payload.id
      );

      if (itemIndex) {
        itemIndex.quantity++;
        itemIndex.totalPrice += newItem.price;
      } else {
        state.products.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          pic: newItem.pic,
          quantity: newItem.quantity || 1,
          totalPrice: newItem.totalPrice || newItem.price,
        });
      }
      state.totalPrice += newItem.totalPrice || newItem.price;
      state.totalQuantity++;
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const findItem = state.products.find((product) => product.id === id);

      if (findItem) {
        state.totalPrice -= findItem.totalPrice;
        state.totalQuantity -= findItem.quantity;
        state.products = state.products.filter((item) => item.id !== id);
      }
    },
    increaseQty: (state, action) => {
      const id = action.payload;
      const findItem = state.products.find((product) => product.id === id);

      if (findItem) {
        findItem.quantity++;
        findItem.totalPrice += findItem.price;
        state.totalQuantity++;
        state.totalPrice += findItem.price;
      }
    },
    decreaseQty: (state, action) => {
      const id = action.payload;
      const findItem = state.products.find((product) => product.id === id);

      if (findItem.quantity > 1) {
        if (findItem) {
          findItem.quantity--;
          findItem.totalPrice -= findItem.price;
          state.totalQuantity--;
          state.totalPrice -= findItem.price;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQty, decreaseQty } =
  cartSlice.actions;

export default cartSlice.reducer;
