"use client";
import Image from "next/image";
import ProductHoverDetails from "./ProductHoverDetails";
import Link from "next/link";
import { formatNumberWithCommas } from "./helpers";
import { useState } from "react";
import WishListCompareButtons from "./WishListCompareButtons";
import ProductHoverButtons from "./ProductHoverButtons";
import ColorOptions from "./ColorOptions";
import DisplayPopups from "./DisplayPopups";

function ProductCard({ data }) {
  const [openViewModal, setOpenViewModal] = useState(false);
  const [openQuickShopModal, setOpenQuickShopModal] = useState(false);
  const [activeImg, setActiveImg] = useState(data.images[0]);
  const [currentColor, setCurrentColor] = useState(data.colors?.[0].colorName);

  return (
    <div className="relative">
      <div className="relative  overflow-hidden group aspect-[2/3]">
        <Image
          src={activeImg}
          alt="Product Image"
          fill
          className="object-cover h-full w-full animate-zoom-out group-hover:hidden"
        />
        <div className="hidden group-hover:block">
          <ProductHoverDetails
            data={data}
            setOpenViewModal={setOpenViewModal}
            setOpenQuickShopModal={setOpenQuickShopModal}
          />
        </div>
        <WishListCompareButtons data={data} />
        <div className="flex flex-col gap-2 absolute right-1 bottom-1 sm:hidden items-end">
          <ProductHoverButtons
            data={data}
            setOpenViewModal={setOpenViewModal}
            setOpenQuickShopModal={setOpenQuickShopModal}
          />
        </div>
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
