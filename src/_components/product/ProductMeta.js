"use client";
import { useState } from "react";
import PopupModal from "../popups/PopupModal";
import DeliveryReturnsPopup from "../popups/DeliveryReturnsPopup";

function ProductMeta({ data }) {
  const { isAvailable, categories } = data;
  const [deliveryReturns, setDeliveryReturns] = useState(false);
  const handleClose = () => {
    document.body.classList.remove("open");
    setDeliveryReturns(false);
  };
  const handleOpen = () => {
    document.body.classList.add("open");
    setDeliveryReturns(true);
  };
  return (
    <>
      <button
        className="font-semibold  w-fit hover:text-blue-400"
        onClick={handleOpen}
      >
        Delivery & Return
      </button>
      {deliveryReturns && (
        <PopupModal>
          <DeliveryReturnsPopup handleClose={handleClose} />
        </PopupModal>
      )}
      <div>
        <p className="text-gray-500">
          Availability:
          <span className="text-gray-800 font-semibold ml-1">
            {isAvailable ? "In Stock" : "Out of stock"}
          </span>
        </p>
        <p className="text-gray-500">
          Categories:{" "}
          <span className="text-gray-800 font-semibold">
            {categories.join(",")}
          </span>
        </p>
        {/* <p className="text-gray-500">
        Tags:{" "}
        <span className="text-gray-800 font-semibold">
        {categories.join(",")}
        </span>
        </p> */}
      </div>
    </>
  );
}

export default ProductMeta;
