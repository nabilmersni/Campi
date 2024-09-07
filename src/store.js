import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authentication/AuthSlice';
import shopReducer from './features/shop/ShopSlice';
import eventReducer from './features/events/EventSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    shop: shopReducer,
    event: eventReducer,
  },
});

export default store;
