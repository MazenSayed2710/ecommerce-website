"use client";
import { FaShoppingCart } from "react-icons/fa";
function ShoppingCartIcon({ shoppingCartProducts, isLoading }) {
  return (
    <div className="relative">
      <FaShoppingCart />
      {!isLoading && (
        <span className="absolute top-[-8px] right-[-10px] text-xs bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
          {shoppingCartProducts.length}
        </span>
      )}
    </div>
  );
}

export default ShoppingCartIcon;
