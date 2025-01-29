import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
};

export const shoppingCardSlice = createSlice({
  name: "shoppingCard",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.ids = [...state.ids, action.payload];
    },
  },
});

export const { setProduct } = shoppingCardSlice.actions;

export default shoppingCardSlice.reducer;
