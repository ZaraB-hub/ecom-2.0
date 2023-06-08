import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bag: [ ],
  quantity: 1,
};


const bagSlice = createSlice({
  name: 'bag',
  initialState,
  reducers: {
    addToBag: (state, action) => {
      const { name, price } = action.payload;
      const existingItem = state.bag.find(item => item.name === name && item.price === price);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.bag.push({ name, price, quantity: 1 });
      }
      state.quantity += 1;
    },
    removeFromBag: (state, action) => {
      const { name, price } = action.payload;
      const index = state.bag.findIndex(item => item.name === name && item.price === price);
      if (index !== -1) {
        const item = state.bag[index];
        state.quantity -= item.quantity;
        state.bag.splice(index, 1);
      }
    },
    decreaseQuantity: (state, action) => {
      const { name, price } = action.payload;
      const item = state.bag.find(item => item.name === name && item.price === price);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          state.quantity -= 1;
        }
      }
    },
  },
});

// Actions
export const { addToBag, removeFromBag, decreaseQuantity } = bagSlice.actions;

// Reducer
export default bagSlice.reducer;
