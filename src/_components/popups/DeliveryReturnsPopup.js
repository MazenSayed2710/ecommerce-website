"use client";

import { useClickOutside } from "../../_hooks/useClickOutside";
import CloseIcon from "../common/CloseIcon";
function DeliveryReturnsPopup({ handleClose }) {
  const ref = useClickOutside(handleClose);
  return (
    <div
      className="relative bg-white shadow-md flex flex-col gap-5 text-custom-white h-[70%]"
      ref={ref}
    >
      <CloseIcon handleClose={handleClose} />
      <div className="overflow-y-scroll p-6">
        <h2 className="text-xl font-bold text-custom-black">Delivery</h2>
        <p>All orders shipped with UPS Express.</p>
        <p>Always free shipping for orders over US $250.</p>
        <p>All orders are shipped with a UPS tracking number.</p>

        <h2 className="text-xl font-bold mt-6 text-custom-black">Returns</h2>
        <p>
          Items returned within 14 days of their original shipment date in same
          as new condition will be eligible for a full refund or store credit.
        </p>
        <p>
          Refunds will be charged back to the original form of payment used for
          purchase.
        </p>
        <p>
          Customer is responsible for shipping charges when making returns and
          shipping/handling fees of original purchase is non-refundable.
        </p>
        <p>All sale items are final purchases.</p>

        <h2 className="text-xl font-bold mt-6 text-custom-black">Help</h2>
        <p>Give us a shout if you have any other questions and/or concerns.</p>
        <p>
          Email:{" "}
          <a
            href="mailto:contact@domain.com"
            className="text-blue-600 hover:underline"
          >
            contact@domain.com
          </a>
        </p>
        <p>Phone: +1 (23) 456 789</p>
      </div>
    </div>
  );
}

export default DeliveryReturnsPopup;
