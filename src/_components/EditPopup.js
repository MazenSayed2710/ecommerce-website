"use client";
import Image from "next/image";
import { capitalize, formatNumberWithCommas } from "./helpers";
import Quantity from "./Quantity";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CiHeart } from "react-icons/ci";
import { GoGitCompare } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { closePopup } from "@/lib/features/popupModalSlice";
import { useClickOutside } from "./useClickOutside";
import { getAllData, updateData } from "@/_utils/shoppingCardIndexedDb";
import {
  getUserShoppingCardAction,
  setUserShoppingCardAction,
} from "@/lib/actions";
import toast from "react-hot-toast";
import SizeOptions from "./SizeOptions";

function EditPopup({
  data,
  setOpenEditComponent,
  OpenModalBtnref,
  setDisplayedProducts,
  session,
}) {
  const [quantityValue, setQuantityValue] = useState(data.quantity);
  const [currentColor, setCurrentColor] = useState(data.color);
  const [currentImage, setCurrentImage] = useState(data.img);
  const [currentSize, setCurrentSize] = useState(data.size);
  const dispatch = useDispatch();

  const handleClosePopup = () => {
    dispatch(closePopup());
    setOpenEditComponent(false);
  };
  const handleReplace = async () => {
    if (session.user) {
      const products = await getUserShoppingCardAction(session.user.email);
      const productsAfterUpdate = products.map((product) =>
        product.id === data.id
          ? {
              ...data,
              quantity: quantityValue,
              color: currentColor,
              size: currentSize,
              total: data.price * quantityValue,
              img: currentImage,
            }
          : product
      );
      await setUserShoppingCardAction(session.user.email, productsAfterUpdate);
      setDisplayedProducts(productsAfterUpdate);
    } else {
      await updateData(data.id, {
        ...data,
        quantity: quantityValue,
        color: currentColor,
        size: currentSize,
        total: data.price * quantityValue,
        img: currentImage,
      });
      const dataAfterEdit = await getAllData();
      setDisplayedProducts(dataAfterEdit);
    }
    handleClosePopup();
    toast.success("Successfully editing");
  };

  const ref = useClickOutside(handleClosePopup, OpenModalBtnref);
  return (
    <div
      className="w-[400px] bg-white p-5 flex flex-col gap-3 font-bold text-custom-black relative"
      ref={ref}
    >
      <h2>{data.name}</h2>

      <p className="text-lg text-custom-white">
        ${formatNumberWithCommas(data.price * quantityValue)}
      </p>

      {data.color && (
        <>
          <p>
            Color:
            <span className=" ml-1 ">{capitalize(currentColor)}</span>
          </p>
          <div className="flex items-center gap-3">
            {data.colors.map((color) => (
              <button
                key={color.color}
                onClick={() => {
                  setCurrentColor(color.colorName);
                  setCurrentImage(color.img);
                }}
              >
                <Image
                  src={color.img || data.images[0]}
                  width={50}
                  height={50}
                  alt="product-img"
                  className={`${
                    currentColor === color.colorName &&
                    "border-2 border-gray-700 "
                  } p-[2px]`}
                />
              </button>
            ))}
          </div>
          <SizeOptions
            data={data}
            currentSize={currentSize}
            setCurrentSize={setCurrentSize}
          />
        </>
      )}
      <div className="flex items-center gap-5">
        <Quantity
          value={quantityValue}
          inputWidth="w-16"
          setValue={setQuantityValue}
        />
        <button className="w-10 h-10 rounded-full border border-gray-700  text-2xl flex items-center justify-center font-thin hover:text-blue-400 hover:border-blue-400">
          <CiHeart />
        </button>
        <button className="w-10 h-10 rounded-full border border-gray-700  text-2xl flex items-center justify-center font-thin hover:text-blue-400 hover:border-blue-400">
          <GoGitCompare />
        </button>
      </div>
      <div className="w-full">
        <button
          className="bg-blue-400 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-500 uppercase w-full mb-3"
          onClick={handleReplace}
        >
          replace item
        </button>
        <button className="bg-gray-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 uppercase w-full">
          buy it now
        </button>
      </div>
      <button
        className="text-2xl absolute right-2 top-2"
        onClick={handleClosePopup}
      >
        <IoMdClose />
      </button>
    </div>
  );
}

export default EditPopup;
