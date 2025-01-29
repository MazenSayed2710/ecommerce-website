"use client";
import ThumbnailList from "./ThumbnailList";
import MainImage from "./MainImage";
import ProductInfo from "./ProductInfo";
import ColorOptions from "./ColorOptions";
import SizeOptions from "./SizeOptions";
import ProductMeta from "./ProductMeta";
import SocialMediaIcons from "./SocialMediaIcons";
import ProductButtons from "./ProductButtons";
import { useState } from "react";
export default function ProductCardDetails({ data }) {
  const [activeImg, setActiveImg] = useState(data.images[0]);
  return (
    <div className="py-4">
      <div className="flex flex-col sm:flex-row gap-5">
        <ThumbnailList
          data={data}
          activeImg={activeImg}
          setActiveImg={setActiveImg}
        />
        <MainImage
          data={data}
          activeImg={activeImg}
          setActiveImg={setActiveImg}
        />
        <div className="sm:w-1/2 flex flex-col gap-5">
          <ProductInfo data={data} />

          <ColorOptions data={data} setActiveImg={setActiveImg} />

          <SizeOptions data={data} />

          <ProductButtons id={data.id} />

          <ProductMeta data={data} />

          <SocialMediaIcons />
        </div>
      </div>
    </div>
  );
}
