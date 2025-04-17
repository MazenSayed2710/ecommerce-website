"use client";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Link from "next/link";
import { useWishlist } from "@/_contexts/WishlistProvider";
import { useShoppingCart } from "@/_contexts/ShoppingCartProvider";
import ButtonControlledQuantity from "../common/QuantityButtonControlled";
import AddToCartButton from "../common/AddToCartButton";
function ProductButtons({
  data,
  currentColor,
  currentSize,
  activeImg,
  handleClose,
}) {
  const [quantity, setQuantity] = useState(1);
  const { wishlistProductsIds, handleAddToWishlist } = useWishlist();
  const { handleAddToShoppingCart } = useShoppingCart();

  const newproduct = {
    ...data,
    quantity,
    color: currentColor,
    size: currentSize,
    img: activeImg,
    id: `${data.id}-${currentColor}-${currentSize}`,
    total: Number(data.price) * quantity,
  };
  const handleAddToCard = async () => {
    await handleAddToShoppingCart(newproduct, quantity);
    handleClose?.();
  };
  const handleSubmit = async () => {
    try {
      const req = await fetch("/api/checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ products: [newproduct] }),
      });
      if (req.ok) {
        const { url } = await req.json();
        window.location.href = url;
      } else {
        console.error("Failed to create checkout session:", req.statusText);
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return (
    <div className="w-full px-3">
      <div
        // className="flex"
        className={`${
          data.isAvailable ? "grid" : "flex"
        } sm:grid-cols-[40%_40%_10%] grid-cols-[60%_40%] grid-rows-3 sm:grid-rows-2 mb-3 gap-5`}
      >
        {data.isAvailable ? (
          <>
            <ButtonControlledQuantity
              value={quantity}
              setValue={setQuantity}
              inputWidth="w-20"
            />

            <AddToCartButton handleAddToCard={handleAddToCard} />
          </>
        ) : (
          <button
            className="bg-blue-300 text-white px-6 py-2 w-full rounded-full font-semibold sm:col-span-1 col-span-2"
            disabled
          >
            Out of Stock
          </button>
        )}

        <div className="flex items-center gap-3 col-start-2 row-start-1 sm:row-start-auto sm:col-start-auto">
          {wishlistProductsIds.includes(data.id) ? (
            <Link
              className="w-10 h-10 rounded-full border text-2xl flex items-center justify-center font-thin border-red-700"
              href="/wishlist"
            >
              <FaHeart className="text-red-700" />
            </Link>
          ) : (
            <button
              className="w-10 h-10 rounded-full border text-2xl flex items-center justify-center font-thin  border-gray-700 hover:text-blue-400 hover:border-blue-400 "
              onClick={() => handleAddToWishlist(data)}
            >
              <FaRegHeart />
            </button>
          )}
        </div>
        {data.isAvailable && (
          <button
            className="uppercase bg-black text-white px-6 py-2 rounded-full font-semibold w-full  sm:col-span-3 row-start-3 col-span-2 sm:row-start-auto"
            onClick={handleSubmit}
          >
            Buy it now
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductButtons;
