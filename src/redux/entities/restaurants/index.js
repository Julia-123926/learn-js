import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../normalized-mock";
const initialState = {
  entities: normalizedRestaurants.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {}),
  ids: normalizedRestaurants.map((item) => item.id),
};
export const restaurantSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {},
});

export const selectRestaurantById = (state, id) =>
  state.restaurants.entities[id];
export const selectRestaurantsById = (state) => state.restaurants.ids;

export default restaurantSlice.reducer;
