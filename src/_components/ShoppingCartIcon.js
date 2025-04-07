"use client";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { ShoppingCardCountContext } from "../_contexts/NumOfProductsContext";
function ShoppingCartIcon() {
  const { shoppingCardCount } = useContext(ShoppingCardCountContext);

  return (
    <div className="relative">
      <FaShoppingCart />
      <span className="absolute top-[-8px] right-[-10px] text-xs bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
        {shoppingCardCount}
      </span>
    </div>
  );
}

export default ShoppingCartIcon;
