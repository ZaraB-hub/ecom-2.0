import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishlist: [   ],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const { name } = action.payload;
      const itemExists = state.wishlist.find(item => item.name === name);
      if (!itemExists) {
        state.wishlist.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      const { name } = action.payload;
      state.wishlist = state.wishlist.filter(item => item.name !== name);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
