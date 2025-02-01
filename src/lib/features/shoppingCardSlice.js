import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const shoppingCardSlice = createSlice({
  name: "shoppingCard",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      const repeatedProduct = state.products.find(
        (product) =>
          product.name === action.payload.name &&
          product.color === action.payload.color &&
          product.size === action.payload.size
      );

      if (repeatedProduct) {
        state.products = state.products.map((product) =>
          product.name === action.payload.name &&
          product.color === action.payload.color &&
          product.size === action.payload.size
            ? {
                ...product,
                quantity:
                  Number(product.quantity) + Number(action.payload.quantity),
              }
            : product
        );
      } else {
        state.products = [...state.products, action.payload];
      }
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },
    updateQuantity: (state, action) => {
      console.log("123");
      state.products = state.products.map((product) =>
        product.id === action.payload.id
          ? {
              ...product,
              quantity: action.payload.quantity,
              total: Number(product.price) * action.payload.quantity,
            }
          : product
      );
      console.log(state.products);
    },
  },
});

export const { setProduct, deleteProduct, updateQuantity } =
  shoppingCardSlice.actions;

export default shoppingCardSlice.reducer;
