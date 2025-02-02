"use client";
import Image from "next/image";
import ProductHoverDetails from "./ProductHoverDetails";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { AiOutlineDelete } from "react-icons/ai";
import { deleteProductFromWishlist } from "@/lib/features/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";

function ProductCard({ data }) {
  const pathName = usePathname();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.wishlist.products);
  const ids = products?.map((product) => product.id);
  return (
    <div className="relative">
      <div className="relative  overflow-hidden group aspect-[2/3]">
        <Image
          src={data.images[0]}
          alt="Product Image"
          fill
          className="object-cover h-full w-full animate-zoom-out group-hover:hidden"
        />
        <div className="hidden group-hover:block">
          <ProductHoverDetails data={data} />
        </div>
        {pathName === "/wishlist" ? (
          <button
            className="absolute top-3 left-3 font-thin text-xl w-8 h-8 rounded-full border bg-white flex items-center justify-center hover:bg-custom-black hover:text-gray-100"
            onClick={() => dispatch(deleteProductFromWishlist(data.id))}
          >
            <AiOutlineDelete />
          </button>
        ) : (
          ids.includes(data.id) && (
            <Link
              className="absolute top-3 left-3 font-thin text-xl"
              href="/wishlist"
            >
              <FaHeart className="text-red-700" />
            </Link>
          )
        )}
      </div>

      <Link
        href={`/collections/${data.mainCategorie}/${data.id}-${data.name
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "")}`}
        className="text-gray-800 font-semibold mt-2 hover:text-blue-400 duration-500"
      >
        {data.name}
      </Link>
      <p className="text-gray-custom">$30.00</p>
    </div>
  );
}

export default ProductCard;
