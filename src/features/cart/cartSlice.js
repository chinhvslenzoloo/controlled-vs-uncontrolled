import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: [],
  },

  reducers: {
    // Add to cart
    addToCart: (state, action) => {
      // payload = product object
      state.items.push(action.payload);
    },

    // Remove from cart
    removeFromCart: (state, action) => {
      // payload = product id
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
