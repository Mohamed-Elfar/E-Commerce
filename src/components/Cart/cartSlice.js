import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let headers = {
  token: localStorage.getItem(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NTMwZjFmOTAzYWU2OGQ0ZGE0MDE3NyIsIm5hbWUiOiJNb2hhbWVkIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3NDAxNzQ2MjgsImV4cCI6MTc0Nzk1MDYyOH0.HDCd-I18dzPmQvZGWT7M6I32qU0rH1PwWxB1wtWR7vg"
  ),
};

const initialState = {
  cartItems: [],
  numOfCartItems: 0,
  totalPrice: 0,
};

export const getCart = createAsyncThunk(
  "cart/getCart",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/cart",
        { headers }
      );
      return response.data.data; // Ensure it returns the correct data
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Error fetching cart"
      );
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price;
      } else {
        state.cartItems.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
      state.numOfCartItems += 1;
      state.totalPrice += newItem.price;
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.cartItems.find((item) => item === itemId);
      if (existingItem) {
        state.numOfCartItems -= itemId.quantity;
        state.totalPrice -= itemId.totalPrice;
        state.cartItems.filter((item) => item.id !== itemId);
      }
    },
    updateCount: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);
      if (existingItem) {
        existingItem.quantity -= 1;
        existingItem.totalPrice -= existingItem.price;
        state.totalQuantity -= 1;
        state.totalPrice -= existingItem.price;
      } else {
        state.totalQuantity -= 1;
        state.totalPrice -= existingItem.price;
        state.items = state.items.filter((item) => item.id !== itemId);
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.numOfCartItems = 0;
      state.totalPrice = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.cartItems = action.payload.cartItems || [];
        state.numOfCartItems = state.cartItems.length;
        state.totalPrice = state.cartItems.reduce(
          (sum, item) => sum + item.totalPrice,
          0
        );
      })
      .addCase(getCart.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { addToCart, removeFromCart, updateCount, clearCart } =
  cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
