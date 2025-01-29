import { configureStore } from "@reduxjs/toolkit";
import shoppingCardSlice from "./features/shoppingCardSlice";
import wishListSlice from "./features/wishlistSlice";
const makeStore = () =>
  configureStore({
    reducer: {
      shoppingCard: shoppingCardSlice,
      wishlist: wishListSlice,
    },
  });

export default makeStore;
