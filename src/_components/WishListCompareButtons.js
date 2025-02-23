"use client";
import {
  deleteProductFromWishlist,
  setWishlistProducts,
} from "@/lib/features/wishlistSlice";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineDelete } from "react-icons/ai";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { GoGitCompare } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";

function WishListCompareButtons({ data }) {
  const pathName = usePathname();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.wishlist.products);
  const ids = products?.map((product) => product.id);
  return (
    <div>
      {pathName === "/wishlist" ? (
        <div className="absolute left-3 top-3 grid items-center text-gray-700">
          <button
            className="font-thin text-xl w-8 h-8 rounded-full  bg-white flex items-center justify-center hover:bg-custom-black hover:text-gray-100"
            onClick={() => dispatch(deleteProductFromWishlist(data.id))}
          >
            <AiOutlineDelete />
          </button>
          <button className=" font-thin text-xl w-8 h-8  flex items-center justify-center hover:text-gray-700">
            <GoGitCompare />
          </button>
        </div>
      ) : (
        <div className=" absolute left-3 top-3 grid gap-2 items-center text-gray-100">
          {ids.includes(data.id) ? (
            <Link className=" font-thin text-lg" href="/wishlist">
              <FaHeart className="text-red-700" />
            </Link>
          ) : (
            <button
              className="font-thin hover:text-blue-400 text-lg"
              onClick={() => dispatch(setWishlistProducts(data))}
            >
              <FaRegHeart />
            </button>
          )}
          <GoGitCompare />
        </div>
      )}
    </div>
  );
}

export default WishListCompareButtons;
