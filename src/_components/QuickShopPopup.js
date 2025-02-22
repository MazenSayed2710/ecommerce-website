import { useState } from "react";
import ColorOptions from "./ColorOptions";
import ProductButtons from "./ProductButtons";
import SizeOptions from "./SizeOptions";
import { useClickOutside } from "./useClickOutside";
import { formatNumberWithCommas } from "./helpers";
import Link from "next/link";

function QuickShopPopup({ product: data, handleClose }) {
  const [currentColor, setCurrentColor] = useState(data.colors?.[0].colorName);
  const [currentSize, setCurrentSize] = useState(data.sizes?.[0]);
  const [activeImg, setActiveImg] = useState(data.images[0]);
  const ref = useClickOutside(handleClose);
  const { id, name, price, mainCategorie } = data;
  return (
    <div
      className="h-fit bg-white flex flex-col gap-3 text-custom-black relative p-5"
      ref={ref}
    >
      <button
        className="absolute -top-5 -right-5 p-3 bg-black text-white w-10 h-10 flex items-center justify-center"
        onClick={handleClose}
      >
        X
      </button>
      <div className="flex h-full">
        <div>
          <div className="flex flex-col gap-5 h-full">
            <div className="flex flex-col gap-5 py-4 overflow-y-scroll">
              <div>
                <Link
                  href={`/collections/${mainCategorie}/${id}-${name
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/^-|-$/g, "")}`}
                  className="text-gray-800 font-semibold mt-2 hover:text-blue-400 duration-500"
                >
                  {data.name}
                </Link>
                <p className="text-gray-600 text-lg">
                  ${formatNumberWithCommas(price)}
                </p>
              </div>

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickShopPopup;
