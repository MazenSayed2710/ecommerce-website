"use cleint";
import Image from "next/image";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { capitalize, createPathName, formatNumberWithCommas } from "./helpers";
import Quantity from "./Quantity";
import { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import {
  deleteProduct,
  updateQuantity,
} from "@/lib/features/shoppingCardSlice";

function ShoppingCardProduct({ data }) {
  const [value, setValue] = useState(data.quantity);
  const total = Number(data.price) * value;
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-[40%_20%_20%_20%] items-center border-y-[1px] border-gray-300 py-5">
      <div className="flex gap-3 items-center">
        <Image src={data.img} alt="product image" width={150} height={200} />
        <div className="text-custom-white grid gap-2">
          <Link
            href={`/collections/${data.mainCategorie}/${createPathName(
              data.name,
              data.id
            )}`}
            className="font-bold text-custom-black hover:text-blue-400"
          >
            {data.name}
          </Link>
          {data.color && (
            <p>
              Color:
              <span className="font-semibold ml-1">
                {capitalize(data.color)}
              </span>
            </p>
          )}
          {data.size && (
            <p>
              Size:
              <span className="font-semibold ml-1 uppercase">{data.size}</span>
            </p>
          )}
          <div className="flex text-2xl gap-2">
            {(data.size || data.color) && <FaEdit />}
            <button
              onClick={() => {
                dispatch(deleteProduct(data));
              }}
            >
              <MdDeleteOutline />
            </button>
          </div>
        </div>
      </div>
      <p className="text-custom-white font-semibold">
        ${formatNumberWithCommas(data.price)}
      </p>
      <Quantity
        value={value}
        setValue={setValue}
        inputWidth="w-16"
        handleChange={(value) => {
          dispatch(updateQuantity({ ...data, quantity: value }));
        }}
      />
      <p className="text-custom-black font-semibold">
        ${formatNumberWithCommas(total)}
      </p>
    </div>
  );
}

export default ShoppingCardProduct;
