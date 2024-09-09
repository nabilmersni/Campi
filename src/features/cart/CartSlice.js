import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  itemsCount: 0,
  totalPrice: 0,
  stage: 'cart',
  addressFormData: null,
};

const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    resetCart: (state) => {
      state.cartItems = [];
      state.itemsCount = 0;
      state.totalPrice = 0;
      state.stage = 'cart';
      state.addressFormData = null;
    },

    refreshCart: (state, action) => {
      state.totalPrice = 0;
      state.cartItems = state.cartItems.map((item) => {
        const refreshedItem = action.payload.find((i) => i.id === item.id);
        const updatedItem = {
          ...item,
          ...refreshedItem,
          total: item.quantity * refreshedItem.price,
        };

        state.totalPrice += updatedItem.total;

        return updatedItem;
      });
    },

    addCartItem: (state, action) => {
      state.cartItems.push(action.payload);
      state.itemsCount++;
      state.totalPrice += action.payload.price;
    },

    incCartItemQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );
      if (item) {
        item.quantity += 1;
        item.total = item.price * item.quantity;
        state.totalPrice += action.payload.price;
      }
    },

    decCartItemQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.total = item.price * item.quantity;
        state.totalPrice -= action.payload.price;
      }
    },

    deleteCartItem: (state, action) => {
      state.itemsCount--;
      state.totalPrice -= action.payload.total;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id,
      );
    },

    setStage: (state, action) => {
      state.stage = action.payload;
    },

    setAddressFormData: (state, action) => {
      state.addressFormData = action.payload;
      state.stage = 'payment';
    },
  },
});

export const {
  resetCart,
  refreshCart,
  addCartItem,
  incCartItemQuantity,
  decCartItemQuantity,
  deleteCartItem,
  setStage,
  setAddressFormData,
} = cartSlice.actions;
export default cartSlice.reducer;
