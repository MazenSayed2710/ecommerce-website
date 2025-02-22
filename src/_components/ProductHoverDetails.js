"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import ProductHoverButtons from "./ProductHoverButtons";
import WishListCompareButtons from "./WishListCompareButtons";
function ProductHoverDetails({
  data,
  setOpenViewModal,
  setOpenQuickShopModal,
}) {
  return (
    <motion.div
      className="relative overflow-hidden"
      initial={{ y: "-200px", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative aspect-[2/3]">
        <Image
          src={data.images[1]}
          alt="product"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover animate-zoom-in scale-110"
        />
      </div>
      <div
        className="hidden absolute left-0 top-0 w-full h-full sm:flex justify-center items-center flex-col gap-3"
        style={{ backgroundColor: "rgb(0 0 0 / 21%)" }}
      >
        <WishListCompareButtons data={data} />
        <div>
          <p className=" uppercase text-gray-100 absolute bottom-3 left-1/2 -translate-x-1/2">
            {data.sizes?.join(",")}
          </p>
        </div>
        <ProductHoverButtons
          data={data}
          setOpenViewModal={setOpenViewModal}
          setOpenQuickShopModal={setOpenQuickShopModal}
        />
      </div>
    </motion.div>
  );
}

export default ProductHoverDetails;
