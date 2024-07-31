import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../normalized-mock";
const initialState = {
  entities: normalizedDishes.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {}),
};
export const dishesSlice = createSlice({
  name: "dishes",
  initialState,
  reducers: {},
});

export const selectDishById = (state, id) => state.dishes.entities[id];

export default dishesSlice.reducer;
