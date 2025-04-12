"use client";
import { useState } from "react";
import { GoGitCompare } from "react-icons/go";
import { useSelector } from "react-redux";
import Quantity from "../common/Quantity";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAddToCard } from "@/_hooks/useAddToCard";
import { useWishlist } from "@/_contexts/WishlistContext";
function ProductButtons({
  data,
  currentColor,
  currentSize,
  activeImg,
  handleClose,
}) {
  const [quantity, setQuantity] = useState(1);
  const { wishlistProductsIds, handleAddToWishlist } = useWishlist();
  // const addProduct = useAddToCard({
  //   data,
  //   quantity,
  //   currentColor,
  //   currentSize,
  //   activeImg,
  //   handleClose,
  // });
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
    // await addProduct();
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
      <div className="grid sm:grid-cols-[1fr_1fr_auto] grid-cols-2 grid-rows-3 sm:grid-rows-2 mb-3 gap-5 justify-items-center">
        <Quantity value={quantity} setValue={setQuantity} inputWidth="w-16" />

        <motion.button
          className="bg-blue-400 text-white px-6 py-2 w-full rounded-full font-semibold hover:bg-blue-500 sm:col-span-1 col-span-2"
          onClick={handleAddToCard}
          animate={{
            x: [
              "5px",
              "-5px",
              "5px",
              "-5px",
              "5px",
              "-5px",
              "5px",
              "-5px",
              "5px",
              "-5px",
              0,
            ],
          }}
          initial={{ x: "-10px" }}
          transition={{
            repeat: Infinity,
            repeatDelay: 10,
            duration: 1.5,
            ease: "linear",
          }}
        >
          Add to Cart
        </motion.button>

        <div className="flex items-center gap-3 col-start-2 row-start-1 sm:row-start-auto sm:col-start-auto">
          {wishlistProductsIds.includes(data.id) ? (
            <Link
              className="w-10 h-10 rounded-full border text-2xl flex items-center justify-center font-thin  border-red-700"
              href="/wishlist"
            >
              <FaHeart className="text-red-700" />
            </Link>
          ) : (
            <button
              className="w-10 h-10 rounded-full border   text-2xl flex items-center justify-center font-thin  border-gray-700 hover:text-blue-400 hover:border-blue-400"
              onClick={() => handleAddToWishlist(data)}
            >
              <FaRegHeart />
            </button>
          )}

          <button className="w-10 h-10 rounded-full border border-gray-700  text-2xl flex items-center justify-center font-thin hover:text-blue-400 hover:border-blue-400">
            <GoGitCompare />
          </button>
        </div>
        <button
          className="uppercase bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-500 w-full  sm:col-span-3 row-start-3 col-span-2 sm:row-start-auto"
          onClick={handleSubmit}
        >
          Buy it now
        </button>
      </div>
    </div>
  );
}

export default ProductButtons;
