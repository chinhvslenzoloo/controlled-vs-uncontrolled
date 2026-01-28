// state oorchloh dvrem slice hiih

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light", // "light" | "dark"
};

const themeSlcie = createSlice({
  name: "theme",
  initialState,
  reducers: {
    ToggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { ToggleTheme } = themeSlcie.actions;
export default themeSlcie.reducer;
