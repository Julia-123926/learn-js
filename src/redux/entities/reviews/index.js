import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../normalized-mock";
const initialState = {
  entities: normalizedReviews.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {}),
};
export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
});

export const selectReviewById = (state, id) => state.reviews.entities[id];

export default reviewsSlice.reducer;
