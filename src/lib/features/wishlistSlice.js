import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [
    {
      id: 7,
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
    },
    {
      id: 2,
      created_at: "2025-01-25T21:30:16.390103+00:00",
      name: "Men pants",
      images: [
        "https://srjkjjkcdhzrihqwtrzw.supabase.co/storage/v1/object/public/products-images/citiz41130172ef_m1_2-0_4ab86cba-d4f7-485d-9980-7b4e6287f7bc.webp?t=2025-01-25T21%3A29%3A39.290Z",
        "https://srjkjjkcdhzrihqwtrzw.supabase.co/storage/v1/object/public/products-images/citiz41130172ef_m3_2-0_36d9f1c2-f8d8-431b-9ee8-ac8d3f1d774c.webp?t=2025-01-25T21%3A29%3A46.361Z",
        "https://srjkjjkcdhzrihqwtrzw.supabase.co/storage/v1/object/public/products-images/citiz41130172ef_m5_2-0_9313410b-d7c3-4913-aee8-c58202a432e1.jpg?t=2025-01-25T21%3A30%3A01.629Z",
      ],
      price: 56,
      description:
        "Go kalles this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish kalles vibe.",
      colors: null,
      sizes: null,
      isAvailable: true,
      categories: ["Fashion", "Men", "New Arrival"],
      discount: null,
      isNew: false,
      popularity: 50,
      numOfSales: 95,
      mainCategorie: "men",
    },
    {
      id: 1,
      created_at: "2025-01-25T21:24:30.368251+00:00",
      name: "Magnhild Organic Cotton\n",
      images: [
        "https://srjkjjkcdhzrihqwtrzw.supabase.co/storage/v1/object/public/products-images/20045689-1-white.webp?t=2025-01-25T21%3A23%3A05.671Z",
        "https://srjkjjkcdhzrihqwtrzw.supabase.co/storage/v1/object/public/products-images/20045689-2.webp?t=2025-01-25T21%3A23%3A14.533Z",
        "https://srjkjjkcdhzrihqwtrzw.supabase.co/storage/v1/object/public/products-images/20045689-3.webp?t=2025-01-25T21%3A23%3A26.848Z",
        "https://srjkjjkcdhzrihqwtrzw.supabase.co/storage/v1/object/public/products-images/20045689-4.webp?t=2025-01-25T21%3A23%3A41.124Z",
      ],
      price: 18,
      description:
        "Go kalles this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish kalles vibe.",
      colors: null,
      sizes: null,
      isAvailable: true,
      categories: ["Dress", "Women"],
      discount: null,
      isNew: null,
      popularity: 85,
      numOfSales: 540,
      mainCategorie: "women",
    },
    {
      id: 6,
      created_at: "2025-01-26T16:03:58.927628+00:00",
      name: "Tovi Girl With Cat Printed",
      images: [
        "https://srjkjjkcdhzrihqwtrzw.supabase.co/storage/v1/object/public/products-images/20046729-3.webp?t=2025-01-26T16%3A01%3A55.083Z",
        "https://srjkjjkcdhzrihqwtrzw.supabase.co/storage/v1/object/public/products-images/20046729-4.webp?t=2025-01-26T16%3A02%3A05.597Z",
        "https://srjkjjkcdhzrihqwtrzw.supabase.co/storage/v1/object/public/products-images/20046729-1-offwhite.webp?t=2025-01-26T16%3A02%3A14.398Z",
      ],
      price: 15,
      description:
        "Go kalles this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish kalles vibe.",
      colors: null,
      sizes: null,
      isAvailable: true,
      categories: ["Women"],
      discount: null,
      isNew: false,
      popularity: 80,
      numOfSales: 400,
      mainCategorie: "women",
    },
  ],
};
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    setWishlistProducts: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    deleteProductFromWishlist: (state, action) => {
      console.log("delete");
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export default wishlistSlice.reducer;
export const { setWishlistProducts, deleteProductFromWishlist } =
  wishlistSlice.actions;
