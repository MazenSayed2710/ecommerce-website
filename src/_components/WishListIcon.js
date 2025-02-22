"use client";
import { FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
function WishListIcon() {
  const products = useSelector((state) => state.wishlist.products);
  return (
    <div className="relative">
      <FaRegHeart />
      <span className="absolute top-[-8px] right-[-10px] text-xs bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
        {products.length}
      </span>
    </div>
  );
}

export default WishListIcon;
