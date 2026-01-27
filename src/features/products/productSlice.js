import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../api/axiosClient";

// ================================
// API CALL (ASYNC)
// ================================

// createAsyncThunk = async action creator
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",

  async () => {
    // axios GET request
    const response = await axiosClient.get("/products");

    // response.data = backend-ээс ирсэн data
    return response.data;
  },
);

// ================================
// SLICE
// ================================

const productSlice = createSlice({
  name: "products",

  initialState: {
    items: [], // product list
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      // request эхлэх үед
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })

      // амжилттай response ирэх үед
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;

        // DummyJSON => data.products
        state.items = action.payload.products;
      })

      // error гарвал
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
