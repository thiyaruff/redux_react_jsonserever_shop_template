import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../slicers/cartSlice';
import shopReducer from '../slicers/shopSlice';

export const store = configureStore({
  reducer: {
    cart:cartReducer,
    shop:shopReducer
  },
});
