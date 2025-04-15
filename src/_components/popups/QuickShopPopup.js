import { useState } from "react";
import { formatNumberWithCommas } from "../../_utils/helpers";
import Link from "next/link";
import ColorOptions from "../product/ColorOptions";
import ProductButtons from "../product/ProductButtons";
import SizeOptions from "../common/SizeOptions";
import { useClickOutside } from "@/_hooks/useClickOutside";
import CloseIcon from "../common/CloseIcon";
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
      <CloseIcon handleClose={handleClose} />
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
