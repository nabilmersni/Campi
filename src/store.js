import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authentication/AuthSlice';
import shopReducer from './features/shop/ShopSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    shop: shopReducer,
  },
});

export default store;
