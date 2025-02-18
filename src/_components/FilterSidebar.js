"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Availability from "./Availability";
import Color from "./Color";
import Price from "./Price";
import Sizes from "./Sizes";
import { useClickOutside } from "./useClickOutside";
import { useMemo, useState } from "react";

function FilterSidebar({
  openSidebar,
  setOpenSidebar,
  products,
  filterButtonRef,
}) {
  const searchParams = useSearchParams();
  const maxProductPrice = Math.max(...products.map((p) => p.price));
  const priceParams = searchParams.getAll("price");
  const initialPriceRange = useMemo(
    () => (priceParams.length ? priceParams.map(Number) : [0, maxProductPrice]),
    [priceParams, maxProductPrice]
  );
  const [priceRange, setPriceRange] = useState(initialPriceRange);
  const router = useRouter();
  const pathname = usePathname();
  const handleClose = () => {
    setOpenSidebar(false);
    document.body.classList.remove("open");
  };
  const handleClearAll = () => {
    router.push(pathname);
    setPriceRange([0, maxProductPrice]);
    handleClose();
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
        <button onClick={handleClose}>X</button>
      </div>
      <Availability products={products} handleClose={handleClose} />
      <Price
        products={products}
        handleClose={handleClose}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />
      <Color products={products} handleClose={handleClose} />
      <Sizes products={products} handleClose={handleClose} />
      <div className="w-full flex justify-start !py-3 !border-b-0">
        <button
          className="rounded-full px-6 py-2 border border-custom-black mt-3 font-semibold duration-200 hover:bg-blue-400 hover:text-gray-100 hover:border-blue-400"
          onClick={handleClearAll}
        >
          Clear All
        </button>
      </div>
    </div>
  );
}

export default FilterSidebar;
