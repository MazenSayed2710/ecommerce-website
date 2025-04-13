"use cleint";
import Image from "next/image";
import { useRef, useState } from "react";
import ShoppingProductInfo from "./ShoppingProductInfo";
import PopupModal from "../popups/PopupModal";
import Quantity from "../common/QuantityInputOnBlur";
import { formatNumberWithCommas } from "../../_utils/helpers";
import EditPopup from "../popups/EditPopup";
import { useShoppingCart } from "@/_contexts/ShoppingCartProvider";
import ShoppingCartProductLoader from "./ShoppingCartProductLoader";
function ShoppingCardProduct({ data }) {
  const [openEditComponent, setOpenEditComponent] = useState(false);
  const OpenModalBtnref = useRef(null);
  const { handleUpdateShoppingCart, isUpdating } = useShoppingCart();
  // console.log(data);
  const handleQuantityChange = async (value) => {
    const updatedProduct = {
      ...data,
      quantity: value,
      total: data.price * value,
    };
    await handleUpdateShoppingCart(data.id, updatedProduct);
  };
  return (
    <div className="relative">
      <ShoppingCartProductLoader isUpdating={isUpdating} id={data.id} />
      <div className="grid  grid-cols-[auto_1fr] sm:grid-rows-1 grid-rows-[1fr_auto_auto_auto] gap-3 sm:*:border-0 *:border-b *:pb-1 *:border-gray-200 sm:grid-cols-[40%_20%_20%_20%] sm:items-center items-start border-b-[1px] border-gray-300 py-5">
        <div className="flex gap-3 items-center sm:row-span-1 row-span-4 !border-0">
          <div className="relative w-40 h-48">
            <Image src={data.img} alt="product image" fill sizes="25vw" />
          </div>
          <div className="sm:block hidden">
            <ShoppingProductInfo
              data={data}
              OpenModalBtnref={OpenModalBtnref}
              setOpenEditComponent={setOpenEditComponent}
            />
          </div>
        </div>
        <div className="block sm:hidden">
          <ShoppingProductInfo
            data={data}
            OpenModalBtnref={OpenModalBtnref}
            setOpenEditComponent={setOpenEditComponent}
          />
        </div>
        <p className="text-custom-white font-semibold">
          ${formatNumberWithCommas(data.price)}
        </p>
        <div className="!pb-2">
          <Quantity
            value={data.quantity}
            inputWidth="w-16"
            handleChange={handleQuantityChange}
          />
        </div>
        <p className="text-custom-black font-semibold !border-0">
          ${formatNumberWithCommas(data.total)}
        </p>
      </div>
      {openEditComponent && (
        <PopupModal>
          <EditPopup
            data={data}
            setOpenEditComponent={setOpenEditComponent}
            OpenModalBtnref={OpenModalBtnref}
          />
        </PopupModal>
      )}
    </div>
  );
}

export default ShoppingCardProduct;
