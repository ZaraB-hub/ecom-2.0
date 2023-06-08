import { configureStore } from '@reduxjs/toolkit';
import bagReducer from './bagSlice';
import wishlistReducer from './wishlistSlice';

export const store = configureStore({
  reducer: {
    bag: bagReducer,
    wishlist: wishlistReducer,
  },
});
