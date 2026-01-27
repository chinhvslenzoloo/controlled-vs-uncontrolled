import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../features/products/productSlice";
import cartReducer from "../features/cart/cartSlice";

// Redux global store үүсгэж байна
export const store = configureStore({
  reducer: {
    // products reducer
    products: productReducer,

    // cart reducer
    cart: cartReducer,
  },
});
