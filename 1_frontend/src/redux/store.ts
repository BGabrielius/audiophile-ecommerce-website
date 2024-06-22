import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './Products/productsSlice';
import cartSlice from './Cart/cartSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
