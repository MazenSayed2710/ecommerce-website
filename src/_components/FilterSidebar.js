"use client";

import Availability from "./Availability";
import Color from "./Color";
import Price from "./Price";
import Sizes from "./Sizes";
import { useClickOutside } from "./useClickOutside";

function FilterSidebar({
  openSidebar,
  setOpenSidebar,
  products,
  filterButtonRef,
}) {
  const handleClose = () => {
    setOpenSidebar(false);
    document.body.classList.remove("open");
  };
  const ref = useClickOutside(() => {
    handleClose();
  }, filterButtonRef);
  return (
    <div
      className={`bg-white h-full w-[300px] duration-500  -translate-x-[300px] *:border-b *:border-gray-300 *:p-5 text-custom-black ${
        openSidebar ? "translate-x-[0]" : "-translate-x-[300px]"
      }`}
      ref={ref}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-custom-black uppercase">Filter</h3>
        <button onClick={() => handleClose()}>X</button>
      </div>
      <Availability products={products} handleClose={handleClose} />
      <Price products={products} handleClose={handleClose} />
      <Color products={products} handleClose={handleClose} />
      <Sizes products={products} handleClose={handleClose} />
    </div>
  );
}

export default FilterSidebar;
