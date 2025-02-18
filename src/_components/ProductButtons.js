"use client";
import { setProduct } from "@/lib/features/shoppingCardSlice";
import { useState } from "react";
import { GoGitCompare } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import Quantity from "./Quantity";
import { setWishlistProducts } from "@/lib/features/wishlistSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Link from "next/link";
import toast from "react-hot-toast";

function ProductButtons({
  data,
  currentColor,
  currentSize,
  activeImg,
  handleClose,
}) {
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.wishlist.products);
  const ids = products?.map((product) => product.id);
  const newproduct = {
    ...data,
    quantity: value,
    color: currentColor,
    size: currentSize,
    img: activeImg,
    id: `${data.id}-${currentColor}-${currentSize}`,
    total: Number(data.price) * value,
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
    <div className="w-fit">
      <div className="flex items-center gap-5 mb-3">
        <Quantity value={value} setValue={setValue} inputWidth="w-16" />

        <button
          className="bg-blue-400 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-500"
          onClick={() => {
            dispatch(setProduct(newproduct));
            toast.success("Successfully added to card");
            handleClose && handleClose();
          }}
        >
          Add to Cart
        </button>

        {ids.includes(data.id) ? (
          <Link
            className="w-10 h-10 rounded-full border   text-2xl flex items-center justify-center font-thin  border-red-700"
            href="/wishlist"
          >
            <FaHeart className="text-red-700" />
          </Link>
        ) : (
          <button
            className="w-10 h-10 rounded-full border   text-2xl flex items-center justify-center font-thin  border-gray-700 hover:text-blue-400 hover:border-blue-400"
            onClick={() => dispatch(setWishlistProducts(data))}
          >
            <FaRegHeart />
          </button>
        )}

        <button className="w-10 h-10 rounded-full border border-gray-700  text-2xl flex items-center justify-center font-thin hover:text-blue-400 hover:border-blue-400">
          <GoGitCompare />
        </button>
      </div>
      <div className="w-full">
        <button
          className="uppercase bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-500 w-full"
          onClick={handleSubmit}
        >
          Buy it now
        </button>
      </div>
    </div>
  );
}

export default ProductButtons;
