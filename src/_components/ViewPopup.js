"use client";
import { useClickOutside } from "./useClickOutside";
import ProductCardDetails from "./ProductCardDetails";

function ViewPopup({ product: data, handleClose }) {
  const ref = useClickOutside(handleClose);
  return (
    <div
      className="w-[950px] h-[60%] bg-white flex flex-col gap-3  text-custom-black relative"
      ref={ref}
    >
      <button
        className="absolute -top-5 -right-5 p-3 bg-black text-white w-10 h-10 flex items-center justify-center"
        onClick={handleClose}
      >
        X
      </button>
      <div className="flex h-full">
        <ProductCardDetails
          data={data}
          isPopup={true}
          handleClose={handleClose}
        />
      </div>
    </div>
  );
}

export default ViewPopup;
