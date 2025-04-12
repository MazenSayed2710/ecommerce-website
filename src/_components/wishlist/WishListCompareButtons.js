"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineDelete } from "react-icons/ai";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { GoGitCompare } from "react-icons/go";
import { motion } from "framer-motion";
import { useWishlist } from "@/_contexts/WishlistContext";
function WishListCompareButtons({ data }) {
  const pathName = usePathname();
  const { wishlistProductsIds, handleAddToWishlist } = useWishlist();
  const wishListButtonVariant = {
    initial: {
      x: "-50px",
      opacity: 1,
    },
    hover: {
      x: 0,
      transition: { duration: 0.3 },
      opacity: 1,
    },
  };
  return (
    <motion.div
      variants={wishListButtonVariant}
      className="absolute left-3 top-3 grid items-center text-gray-700 z-40"
    >
      {pathName === "/wishlist" ? (
        <div className="grid gap-1">
          <button className="opacity-0 font-thin text-xl w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-custom-black hover:text-gray-100">
            <AiOutlineDelete />
          </button>
          <button className="font-thin text-xl w-8 h-8 flex items-center justify-center hover:text-gray-700">
            <GoGitCompare />
          </button>
        </div>
      ) : (
        <div className="grid gap-1">
          {wishlistProductsIds.includes(data.id) ? (
            <Link className="font-thin text-lg opacity-0" href="/wishlist">
              <FaHeart className="text-red-700" />
            </Link>
          ) : (
            <button
              className="font-thin hover:text-blue-400 text-lg text-white"
              onClick={() => handleAddToWishlist(data)}
            >
              <FaRegHeart />
            </button>
          )}
          <GoGitCompare className="text-white" />
        </div>
      )}
    </motion.div>
  );
}

export default WishListCompareButtons;
