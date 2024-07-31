import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  selectors: {
    selectCartItems: (state) => {
      return Object.keys(state).reduce((acc, id) => {
        acc.push({ itemId: id, amount: state[id] });
        return acc;
      }, []);
    },
    selectCartItemById: (state, id) => {
      return state[id] || 0;
    },
  },
  reducers: {
    addCartItem: (state, action) => {
      state[action.payload] = (state[action.payload] || 0) + 1;
    },
    removeCartItem: (state, action) => {
      if (!state[action.payload]) return state;
      state[action.payload] = state[action.payload] - 1;
      if (state[action.payload] <= 0) {
        delete state[action.payload];
      }
    },
  },
});

export const { selectCartItems, selectCartItemById } = cartSlice.selectors;
export const { addCartItem, removeCartItem } = cartSlice.actions;
