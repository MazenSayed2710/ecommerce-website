"use client";
import MainImage from "../common/MainImage";
import ProductInfo from "./ProductInfo";
import ColorOptions from "./ColorOptions";
import SizeOptions from "../common/SizeOptions";
import ProductMeta from "./ProductMeta";
import SocialMediaIcons from "../common/SocialMediaIcons";
import ProductButtons from "./ProductButtons";
import { useState } from "react";
import ThumbnailList from "./ThumbnailList";
export default function ProductCardDetails({
  data,
  isPopup = false,
  handleClose = null,
}) {
  const [activeImg, setActiveImg] = useState(data.images[0]);
  const [currentColor, setCurrentColor] = useState(data.colors?.[0].colorName);
  const [currentSize, setCurrentSize] = useState(data.sizes?.[0]);

  return (
    <div
      className={`sm:overflow-y-auto overflow-y-scroll px-3 sm:px-0 sm:flex gap-3 ${
        isPopup ? "" : "py-4"
      }`}
    >
      <div
        className={`sm:w-1/2 w-full grid overflow-hidden gap-3 ${
          isPopup ? "grid-cols-1" : "sm:grid-cols-[15%_85%]"
        } `}
      >
        {!isPopup && (
          <ThumbnailList
            data={data}
            activeImg={activeImg}
            setActiveImg={setActiveImg}
          />
        )}
        <MainImage
          data={data}
          activeImg={activeImg}
          setActiveImg={setActiveImg}
        />
      </div>
      <div
        className={`sm:w-1/2 flex flex-col gap-5 ${
          isPopup && "py-4 sm:overflow-y-scroll"
        }`}
      >
        <ProductInfo data={data} isPopup={isPopup} />

        <ColorOptions
          data={data}
          setActiveImg={setActiveImg}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
        />

        <SizeOptions
          data={data}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
        />

        <ProductButtons
          data={data}
          currentColor={currentColor}
          currentSize={currentSize}
          activeImg={activeImg}
          handleClose={handleClose}
        />

        <ProductMeta data={data} />

        <SocialMediaIcons />
      </div>
    </div>
  );
}
