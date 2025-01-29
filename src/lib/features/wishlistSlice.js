import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  ids: [],
};
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    setWishlistProducts: (state, action) => {
      state.ids = [...state.ids, action.payload];
    },
  },
});

export default wishlistSlice.reducer;
export const { setWishlistProducts } = wishlistSlice.actions;
