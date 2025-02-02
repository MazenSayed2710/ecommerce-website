import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: "7-red-s",
      created_at: "2025-01-26T16:13:58.725684+00:00",
      name: "Combat Hoodie",
      images: [
        "https://srjkjjkcdhzrihqwtrzw.supabase.co/storage/v1/object/public/products-images/prch20_1.webp?t=2025-01-26T16%3A05%3A58.930Z",
        "https://srjkjjkcdhzrihqwtrzw.supabase.co/storage/v1/object/public/products-images/prch20_5.webp",
        "https://srjkjjkcdhzrihqwtrzw.supabase.co/storage/v1/object/public/products-images/prch20_11.webp",
      ],
      price: 28,
      description:
        "Go kalles this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish kalles vibe.",
      colors: [
        {
          img: "https://srjkjjkcdhzrihqwtrzw.supabase.co/storage/v1/object/public/products-images/prch20_1.webp?t=2025-01-26T16%3A05%3A58.930Z",
          color: "#f63400",
          colorName: "red",
        },
        {
          img: "https://srjkjjkcdhzrihqwtrzw.supabase.co/storage/v1/object/public/products-images/prch20_5.webp",
          color: "#000",
          colorName: "black",
        },
        {
          img: "https://srjkjjkcdhzrihqwtrzw.supabase.co/storage/v1/object/public/products-images/prch20_11.webp",
          color: "#ccc",
          colorName: "grey",
        },
      ],
      sizes: ["s", "m", "l", "xl"],
      isAvailable: true,
      categories: [" Fashion", "Men"],
      discount: null,
      isNew: false,
      popularity: 65,
      numOfSales: 100,
      mainCategorie: "men",
      quantity: 1,
      color: "red",
      size: "s",
      img: "https://srjkjjkcdhzrihqwtrzw.supabase.co/storage/v1/object/public/products-images/prch20_1.webp?t=2025-01-26T16%3A05%3A58.930Z",
      total: 28,
    },
  ],
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
      state.products = state.products.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
    },
  },
});

export const { setProduct, deleteProduct, updateQuantity } =
  shoppingCardSlice.actions;

export default shoppingCardSlice.reducer;
