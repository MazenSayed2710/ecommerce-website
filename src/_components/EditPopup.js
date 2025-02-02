"use client";
import Image from "next/image";
import { capitalize, formatNumberWithCommas } from "./helpers";
import Quantity from "./Quantity";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "@/lib/features/shoppingCardSlice";
import { CiHeart } from "react-icons/ci";
import { GoGitCompare } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { closePopup } from "@/lib/features/popupModalSlice";
import { useClickOutside } from "./useClickOutside";

function EditPopup({ data, setOpenEditComponent }) {
  const [quantityValue, setQuantityValue] = useState(data.quantity);
  const [curentColor, setCurentColor] = useState(data.color);
  const dispatch = useDispatch();

  const handleClosePopup = () => {
    dispatch(closePopup());
    setOpenEditComponent(false);
  };
  const ref = useClickOutside(handleClosePopup);
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
            <span className=" ml-1 ">{capitalize(curentColor)}</span>
          </p>
          <div className="flex items-center gap-3">
            {data.colors.map((color) => (
              <button
                key={color.color}
                onClick={() => setCurentColor(color.colorName)}
              >
                <Image
                  src={color.img}
                  width={50}
                  height={50}
                  alt="product-img"
                  className={`${
                    curentColor === color.colorName &&
                    "border-2 border-gray-700 "
                  } p-[2px]`}
                />
              </button>
            ))}
          </div>
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
          onClick={() => {
            dispatch(
              updateProduct({
                ...data,
                quantity: quantityValue,
                color: curentColor,
                total: data.price * quantityValue,
              })
            );
            handleClosePopup();
          }}
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
