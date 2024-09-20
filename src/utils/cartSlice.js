import { createSlice } from "@reduxjs/toolkit"; //*from lesson 12

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], //*initial state of the cart items is empty array,because at first the cart items will be 0.
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },

    removeItem: (state, action) => {
      state.items.pop();
    },

    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});
