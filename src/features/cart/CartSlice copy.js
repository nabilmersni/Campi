import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  itemsCount: 0,
  totalPrice: 0,
};

export const resetCart = createAsyncThunk('cart/resetCart', async () => {
  localStorage.removeItem('cart');
});

export const addCartItem = createAsyncThunk('cart/resetCart', async () => {
  localStorage.removeItem('cart');
});

const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    resetCart: (state) => {
      state.cartItems = [];
      state.itemsCount = 0;
      state.totalPrice = 0;
    },

    addCartItem: (state, action) => {
      state.cartItems.push(action.payload);
      state.itemsCount++;
    },
  },

  extraReducers: (builder) =>
    builder.addCase(resetCart.fulfilled, (state) => {
      state.cartItems = [];
      state.itemsCount = 0;
      state.totalPrice = 0;
    }),
});

// export const { resetCart, addCartItem } = cartSlice.actions;
export default cartSlice.reducer;
