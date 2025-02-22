import { FaRegEye } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import QuickAddButtons from "./QuickAddButtons";

function ProductHoverButtons({
  data,
  setOpenQuickShopModal,
  setOpenViewModal,
}) {
  const handleOpenViewModal = () => {
    document.body.classList.add("open");
    setOpenViewModal(true);
  };
  const handleOpenQuickShopModal = () => {
    document.body.classList.add("open");
    setOpenQuickShopModal(true);
  };
  return (
    <div>
      <div className="flex justify-center sm:items-center items-end flex-col gap-3">
        <div
          className="group/view relative overflow-hidden sm:w-[140px] sm:h-[40px] rounded-full cursor-pointer"
          onClick={handleOpenViewModal}
        >
          <button
            className="sm:absolute left-0 -bottom-full sm:px-5 sm:py-2 p-3 sm:text-gray-100 text-gray-800 text-lg sm:bg-gray-900 bg-gray-100 sm:w-[140px] sm:h-[40px]
           flex justify-center items-center sm:group-hover/view:translate-y-[-40px] duration-200"
          >
            <FaRegEye />
          </button>

          <button className="px-5 py-2 bg-gray-100 w-[140px] h-[40px] group-hover/view:translate-y-[-40px] duration-200 hidden sm:block">
            Quick view
          </button>
        </div>
        {data.sizes && data.colors ? (
          <div
            className="group/shop relative overflow-hidden sm:w-[140px] sm:h-[40px] rounded-full bg-blue-400 cursor-pointer"
            onClick={handleOpenQuickShopModal}
          >
            <button
              className="sm:absolute left-0 -bottom-full sm:px-5 sm:py-2 p-3 rounded-full text-gray-100 text-lg sm:w-[140px] sm:h-[40px]
           flex justify-center items-center sm:group-hover/shop:translate-y-[-40px] duration-200"
            >
              <FaCartShopping />
            </button>
            <button className="px-5 py-2 rounded-full  w-[140px] h-[40px] text-gray-100 group-hover/shop:translate-y-[-40px] duration-200 hidden sm:block">
              Quick shop
            </button>
          </div>
        ) : (
          <QuickAddButtons data={data} />
        )}
      </div>
    </div>
  );
}

export default ProductHoverButtons;
