import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
let headers = {
  token: localStorage.getItem("token"),
};
const initialState = {
  cartItems: [],
  numOfCartItems: 0,
  totalPrice: 0,
  status: "idle",
  loaderStatus: "idle",
  error: null,
};

export const getCart = createAsyncThunk(
  "cart/getCart",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/cart",
        { headers }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Error fetching cart"
      );
    }
  }
);

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/cart",
        { productId: id },
        { headers }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Error adding to cart"
      );
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        { headers }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Error removing from cart"
      );
    }
  }
);

export const updateProductQuantity = createAsyncThunk(
  "cart/updateProductQuantity",
  async ({ id, count }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        { productId: id, count },
        { headers }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Error updating quantity"
      );
    }
  }
);
export const onlinePayment = createAsyncThunk(
  "cart/onlinePayment",
  async ({ cartId, shippingAddress }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:5173`,
        { shippingAddress },
        { headers }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Error processing payment"
      );
    }
  }
);
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.numOfCartItems = 0;
      state.totalPrice = 0;
    },

    resetStatus: (state) => {
      state.status = "idle";
      state.loaderStatus = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.status = "succeeded";

        localStorage.setItem("cartId", action.payload?.data?._id || "");

        state.cartItems = action.payload?.data?.products || [];
        state.numOfCartItems = state.cartItems.reduce(
          (sum, item) => sum + item.count,
          0
        );
        state.totalPrice = state.cartItems.reduce(
          (sum, item) => sum + item.count * item.price,
          0
        );
      })
      .addCase(getCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.cartItems = action.payload?.data?.products || [];
        state.numOfCartItems = state.cartItems.reduce(
          (sum, item) => sum + item.count,
          0
        );
        state.totalPrice = state.cartItems.reduce(
          (sum, item) => sum + item.count * item.price,
          0
        );
        state.status = "succeeded";
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cartItems = action.payload?.data?.products || [];
        state.numOfCartItems = state.cartItems.reduce(
          (sum, item) => sum + item.count,
          0
        );
        state.totalPrice = state.cartItems.reduce(
          (sum, item) => sum + item.count * item.price,
          0
        );
      })
      .addCase(updateProductQuantity.pending, (state) => {
        state.loaderStatus = "loading";
      })
      .addCase(updateProductQuantity.fulfilled, (state, action) => {
        state.loaderStatus = "succeeded";
        state.cartItems = action.payload?.data?.products || [];
        state.numOfCartItems = state.cartItems.reduce(
          (sum, item) => sum + item.count,
          0
        );
        state.totalPrice = state.cartItems.reduce(
          (sum, item) => sum + item.count * item.price,
          0
        );
      })
      .addCase(updateProductQuantity.rejected, (state) => {
        state.loaderStatus = "failed";
      })
      .addCase(onlinePayment.pending, (state) => {
        state.status = "loading";
      })
      .addCase(onlinePayment.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(onlinePayment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { clearCart, resetStatus } = cartSlice.actions;
export default cartSlice.reducer;
