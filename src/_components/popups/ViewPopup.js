"use client";
import { useClickOutside } from "../../_hooks/useClickOutside";
import ProductCardDetails from "../product/ProductCardDetails";
import CloseIcon from "../common/CloseIcon";
function ViewPopup({ product: data, handleClose }) {
  const ref = useClickOutside(handleClose);
  return (
    <div
      className="sm:w-[950px] w-[90vw] h-[80%] sm:h-[60%] bg-white flex flex-col gap-3  text-custom-black relative "
      ref={ref}
    >
      <CloseIcon handleClose={handleClose} />

      <ProductCardDetails
        data={data}
        isPopup={true}
        handleClose={handleClose}
      />
    </div>
  );
}

export default ViewPopup;
