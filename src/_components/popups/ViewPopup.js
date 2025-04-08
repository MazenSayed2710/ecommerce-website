"use client";
import { useClickOutside } from "../../_hooks/useClickOutside";
import ProductCardDetails from "../product/ProductCardDetails";

function ViewPopup({ product: data, handleClose }) {
  const ref = useClickOutside(handleClose);
  return (
    <div
      className="sm:w-[950px] w-[90vw] h-[80%] sm:h-[60%] bg-white flex flex-col gap-3  text-custom-black relative "
      ref={ref}
    >
      <button
        className="absolute -top-5 -right-5 p-3 bg-black text-white w-10 h-10 flex items-center justify-center z-10"
        onClick={handleClose}
      >
        X
      </button>

      <ProductCardDetails
        data={data}
        isPopup={true}
        handleClose={handleClose}
      />
    </div>
  );
}

export default ViewPopup;
