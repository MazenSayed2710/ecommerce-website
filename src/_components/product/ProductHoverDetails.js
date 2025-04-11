"use client";
import Image from "next/image";
import ProductHoverButtons from "./ProductHoverButtons";
import WishListCompareButtons from "../wishlist/WishListCompareButtons";
import { motion } from "framer-motion";
function ProductHoverDetails({
  data,
  setOpenViewModal,
  setOpenQuickShopModal,
  ids,
}) {
  const buttonsVariant = {
    initial: {
      opacity: 0,
      y: "-50px",
    },
    hover: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="relative overflow-hidden">
      <div className="relative aspect-[2/3]">
        <Image
          src={data.images[1]}
          alt="product"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover animate-zoom-in scale-110"
        />
      </div>

      <WishListCompareButtons data={data} ids={ids} />

      <div
        className="hidden absolute left-0 top-0 w-full h-full sm:flex justify-center items-center flex-col gap-3"
        style={{ backgroundColor: "rgb(0 0 0 / 21%)" }}
      >
        <div>
          <p className=" uppercase text-gray-100 absolute bottom-3 left-1/2 -translate-x-1/2">
            {data.sizes?.join(",")}
          </p>
        </div>
        <motion.div variants={buttonsVariant}>
          <ProductHoverButtons
            data={data}
            setOpenViewModal={setOpenViewModal}
            setOpenQuickShopModal={setOpenQuickShopModal}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default ProductHoverDetails;
