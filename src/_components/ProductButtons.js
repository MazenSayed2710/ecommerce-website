"use client";
import { setProduct } from "@/lib/features/shoppingCardSlice";
import { setWishlistProducts } from "@/lib/features/wishlistSlice";
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { GoGitCompare } from "react-icons/go";
import { useDispatch } from "react-redux";
import Quantity from "./Quantity";
function ProductButtons({ data, currentColor, currentSize, activeImg }) {
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();
  const newproduct = {
    ...data,
    quantity: value,
    color: currentColor,
    size: currentSize,
    img: activeImg,
    id: `${data.id}-${currentColor}-${currentSize}`,
    total: Number(data.price) * value,
  };
  return (
    <div className="flex items-center gap-5">
      <Quantity value={value} setValue={setValue} inputWidth="w-16" />

      <button
        className="bg-blue-400 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-500"
        onClick={() => {
          dispatch(setProduct(newproduct));
        }}
      >
        Add to Cart
      </button>
      <button
        className="w-10 h-10 rounded-full border border-gray-700  text-2xl flex items-center justify-center font-thin hover:text-blue-400 hover:border-blue-400"
        // onClick={() => dispatch(setWishlistProducts(id))}
      >
        <CiHeart />
      </button>
      <button className="w-10 h-10 rounded-full border border-gray-700  text-2xl flex items-center justify-center font-thin hover:text-blue-400 hover:border-blue-400">
        <GoGitCompare />
      </button>
    </div>
  );
}

export default ProductButtons;
