"use client";
import { FaShoppingCart } from "react-icons/fa";
function ShoppingCartIcon() {
  return (
    <div className="relative">
      <FaShoppingCart />
      <span className="absolute top-[-8px] right-[-10px] text-xs bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
        {0}
      </span>
    </div>
  );
}

export default ShoppingCartIcon;
