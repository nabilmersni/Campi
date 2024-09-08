import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authentication/AuthSlice';
import shopReducer from './features/shop/ShopSlice';
import eventReducer from './features/events/EventSlice';
import cartReducer from './features/cart/CartSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const cartPersistConfig = {
  key: 'cart',
  storage,
  blacklist: ['stage', 'addressFormData'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  shop: shopReducer,
  event: eventReducer,
  cart: persistReducer(cartPersistConfig, cartReducer), // Persist only cart slice
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
