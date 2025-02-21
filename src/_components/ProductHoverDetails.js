"use client";
import Image from "next/image";
import { FaHeart, FaRegEye } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { GoGitCompare } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductFromWishlist,
  setWishlistProducts,
} from "@/lib/features/wishlistSlice";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { AiOutlineDelete } from "react-icons/ai";

function ProductHoverDetails({
  data,
  setOpenViewModal,
  setOpenQuickShopModal,
}) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.wishlist.products);
  const ids = products?.map((product) => product.id);
  const pathName = usePathname();

  return (
    <div className=" relative  overflow-hidden">
      <div className="relative aspect-[2/3]">
        <Image
          src={data.images[1]}
          alt="product"
          fill
          className="object-cover animate-zoom-in scale-110"
        />
      </div>
      <div
        className="hidden absolute left-0 top-0 w-full h-full sm:flex justify-center items-center flex-col gap-3"
        style={{ backgroundColor: "rgb(0 0 0 / 21%)" }}
      >
        {pathName === "/wishlist" ? (
          <div className="absolute left-3 top-3 grid items-center text-gray-100">
            <button
              className="font-thin text-xl w-8 h-8 rounded-full  bg-white flex items-center justify-center hover:bg-custom-black hover:text-gray-100"
              onClick={() => dispatch(deleteProductFromWishlist(data.id))}
            >
              <AiOutlineDelete />
            </button>
            <button className=" font-thin text-xl w-8 h-8  flex items-center justify-center  hover:text-gray-700">
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

        <div>
          <p className=" uppercase text-gray-100 absolute bottom-3 left-1/2 -translate-x-1/2">
            {data.sizes?.join(",")}
          </p>
        </div>
        <div
          className="group/view relative overflow-hidden w-[140px] h-[40px] rounded-full cursor-pointer"
          onClick={() => setOpenViewModal(true)}
        >
          <button
            className="absolute left-0 -bottom-full px-5 py-2  text-gray-100 text-lg bg-gray-900 w-[140px] h-[40px]
           flex justify-center items-center group-hover/view:translate-y-[-40px] duration-200"
          >
            <FaRegEye />
          </button>

          <button className="px-5 py-2  bg-gray-100 w-[140px] h-[40px] group-hover/view:translate-y-[-40px] duration-200">
            Quick view
          </button>
        </div>
        <div
          className="group/shop relative overflow-hidden w-[140px] h-[40px]  rounded-full bg-blue-400 cursor-pointer"
          onClick={() => setOpenQuickShopModal(true)}
        >
          <button
            className="absolute left-0 -bottom-full px-5 py-2 rounded-full text-gray-100 text-lg w-[140px] h-[40px]
           flex justify-center items-center group-hover/shop:translate-y-[-40px] duration-200"
          >
            <FaCartShopping />
          </button>
          <button className="px-5 py-2 rounded-full  w-[140px] h-[40px] text-gray-100 group-hover/shop:translate-y-[-40px] duration-200">
            Quick shop
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductHoverDetails;
