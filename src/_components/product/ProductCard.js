"use client";
import Image from "next/image";
import ProductHoverDetails from "./ProductHoverDetails";
import Link from "next/link";
import { formatNumberWithCommas } from "../../_utils/helpers";
import { useState } from "react";
import ProductHoverButtons from "./ProductHoverButtons";
import ColorOptions from "./ColorOptions";
import ProductStatus from "./ProductStatus";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import DisplayPopups from "../popups/DisplayPopups";
import { usePathname } from "next/navigation";
import { AiOutlineDelete } from "react-icons/ai";
import { ImSpinner2 } from "react-icons/im";
import { useManageWishlist } from "@/_hooks/useManageWishlist";
function ProductCard({ data, ids }) {
  const [openViewModal, setOpenViewModal] = useState(false);
  const [openQuickShopModal, setOpenQuickShopModal] = useState(false);
  const [activeImg, setActiveImg] = useState(data.images[0]);
  const [currentColor, setCurrentColor] = useState(data.colors?.[0].colorName);
  const { handleDeletefromWishlist, isLoading } = useManageWishlist();
  const pathName = usePathname();
  const imagevariant = {
    initial: { opacity: 1 },
    hover: { opacity: 0, transition: { duration: 0.3 } },
  };
  const productHoverVariant = {
    initial: { opacity: 0 },
    hover: { opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <div className="relative">
      <motion.div
        className="relative overflow-hidden aspect-[2/3]"
        whileHover="hover"
        initial="initial"
      >
        <ProductStatus data={data} />
        <motion.div
          className="relative aspect-[2/3] animate-zoom-out"
          variants={imagevariant}
        >
          <Image
            src={activeImg}
            alt={`${data.name} - ${currentColor}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          variants={productHoverVariant}
          className="absolute top-0 left-0 w-full h-full"
        >
          <ProductHoverDetails
            data={data}
            setOpenViewModal={setOpenViewModal}
            setOpenQuickShopModal={setOpenQuickShopModal}
            ids={ids}
          />
        </motion.div>
        <div className="absolute left-3 top-3 grid gap-1">
          {ids.includes(data.id) && pathName !== "/wishlist" ? (
            <Link className="font-thin text-lg" href="/wishlist">
              <FaHeart className="text-red-700" />
            </Link>
          ) : pathName === "/wishlist" ? (
            <button
              className="font-thin text-xl w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-custom-black hover:text-gray-100 z-50"
              onClick={() => {
                handleDeletefromWishlist(data.id);
              }}
            >
              {isLoading ? (
                <ImSpinner2 className="animate-spin text-xl" />
              ) : (
                <AiOutlineDelete />
              )}
            </button>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col gap-2 absolute right-1 bottom-1 sm:hidden items-end">
          <ProductHoverButtons
            data={data}
            setOpenViewModal={setOpenViewModal}
            setOpenQuickShopModal={setOpenQuickShopModal}
          />
        </div>
      </motion.div>
      <Link
        href={`/collections/${data.mainCategorie}/${data.id}-${data.name
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "")}`}
        className="text-gray-800 font-semibold mt-2 hover:text-blue-400 duration-500"
      >
        {data.name}
      </Link>
      <p className="text-gray-custom">${formatNumberWithCommas(data.price)}</p>
      <div className="flex gap-3 mb-4">
        <ColorOptions
          data={data}
          setActiveImg={setActiveImg}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          displayText={false}
          circleSize="small"
        />
      </div>
      <DisplayPopups
        data={data}
        setOpenViewModal={setOpenViewModal}
        setOpenQuickShopModal={setOpenQuickShopModal}
        openViewModal={openViewModal}
        openQuickShopModal={openQuickShopModal}
      />
    </div>
  );
}

export default ProductCard;
