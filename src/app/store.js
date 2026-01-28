// global state vvsgej baigaa ym

import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
