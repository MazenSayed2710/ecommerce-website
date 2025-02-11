"use client";

import Availability from "./Availability";
import Color from "./Color";
import Price from "./Price";
import Sizes from "./Sizes";
import { useClickOutside } from "./useClickOutside";

function FilterSidebar({ setOpenSidebar, products }) {
  const ref = useClickOutside(() => {
    setOpenSidebar(false);
    document.body.classList.remove("open");
  });
  return (
    <div
      className="bg-white h-full w-[300px] duration-200 animate-left-to-right *:border-b *:border-gray-300 *:p-5 text-custom-black"
      ref={ref}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-custom-black uppercase">Filter</h3>
        <button>X</button>
      </div>
      <Availability products={products} />
      <Price products={products} />
      <Color products={products} />
      <Sizes products={products} />
    </div>
  );
}

export default FilterSidebar;
