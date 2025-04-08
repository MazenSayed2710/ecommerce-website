import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useAddToCard } from "@/_hooks/useAddToCard";
function QuickAddButtons({ data }) {
  const [quantity, setQuantity] = useState(1);
  const addProduct = useAddToCard({ data, quantity });
  const handleAddToCard = async () => {
    addProduct();
  };
  return (
    <div className="flex rounded-full overflow-hidden w-fit mb-1">
      <div className="flex items-center text-lg font-semibold bg-gray-200 text-black w-fit py-2 px-3 h-[40px] ">
        <button
          className="hover:text-blue-400 "
          onClick={() => {
            setQuantity(Number(quantity) - 1);
          }}
          disabled={quantity === 1}
        >
          -
        </button>
        <input
          type="number"
          className={`px-3 w-10 text-center text-gray-800 bg-gray-200`}
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
        />

        <button
          className="hover:text-blue-400"
          onClick={() => {
            setQuantity(Number(quantity) + 1);
          }}
        >
          +
        </button>
      </div>
      <div
        className="group/shop relative overflow-hidden sm:w-[120px] h-[40px]  bg-blue-400 cursor-pointer flex items-center justify-center"
        onClick={handleAddToCard}
      >
        <button
          className="sm:absolute left-0 -bottom-full sm:px-5 px-2 py-2 sm:rounded-full text-gray-100 text-lg sm:w-[140px] h-[40px]
           flex justify-center items-center sm:group-hover/shop:translate-y-[-40px] duration-200"
        >
          <FaCartShopping />
        </button>
        <button className="px-3 py-2 rounded-full  w-[140px] h-[40px] text-gray-100 group-hover/shop:translate-y-[-40px] duration-200 hidden sm:block">
          Add to card
        </button>
      </div>
    </div>
  );
}

export default QuickAddButtons;
