import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { ProductType, ProductsState } from "../types";

const initialState: ProductsState = {
  products: [],
  liked: [],
  isLoading: false,
  currentPage: 1,
};

export const getProducts = createAsyncThunk<ProductType[], string>(
  "products/getProducts",
  async (url) => {
    const { data } = await axios(url);
    return data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addInLiked(state, action) {
      const findItem = state.liked.find(
        (element) => element.id == action.payload.id
      );
      if (findItem) {
        state.liked = state.liked.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.liked.push({
          ...action.payload,
        });
      }
    },
    addProduct(state, action) {
      state.products.push({
        id: Math.random(),
        title: action.payload.title,
        category: { name: action.payload.name },
        images: [action.payload.img],
        description: "",
        price: 0,
      });
    },
    removeProduct(state, action) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      state.liked = state.liked.filter(
        (product) => product.id !== action.payload
      );
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { removeProduct, addInLiked, addProduct, setCurrentPage } =
  productsSlice.actions;

export default productsSlice.reducer;
