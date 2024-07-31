import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./entities/restaurants";
import { reviewsSlice } from "./entities/reviews";
import { dishesSlice } from "./entities/dishes";
import { cartSlice } from "./ui/cart";

export const store = configureStore({
  reducer: {
    [restaurantSlice.name]: restaurantSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
  },
});
