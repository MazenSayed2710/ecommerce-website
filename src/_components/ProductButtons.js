"use client";
import { setProduct } from "@/lib/features/shoppingCardSlice";
import { setWishlistProducts } from "@/lib/features/wishlistSlice";
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { GoGitCompare } from "react-icons/go";
import { useDispatch } from "react-redux";
function ProductButtons({ id }) {
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center rounded-full border-2 text-xl font-semibold border-gray-800">
        <button
          className="px-4 py-1  hover:text-blue-400 "
          onClick={() => setValue(Number(value) - 1)}
          disabled={value === 1}
        >
          -
        </button>
        <input
          type="number"
          value={value}
          className="px-4 py-1 border-t border-b w-16 text-center"
          onChange={(e) => setValue(e.target.value)}
        />

        <button
          className="px-4 py-1 hover:text-blue-400 "
          onClick={() => setValue(Number(value) + 1)}
        >
          +
        </button>
      </div>
      <button
        className="bg-blue-400 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-500"
        onClick={() => dispatch(setProduct(id))}
      >
        Add to Cart
      </button>
      <button
        className="w-10 h-10 rounded-full border border-gray-700  text-2xl flex items-center justify-center font-thin hover:text-blue-400 hover:border-blue-400"
        onClick={() => dispatch(setWishlistProducts(id))}
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
