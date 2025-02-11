"use client";
import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { formatNumberWithCommas } from "./helpers";

function Price({ products }) {
  const maxProductPrice = Math.max(...products.map((product) => product.price));
  const [priceRange, setPriceRange] = useState([0, maxProductPrice]);

  return (
    <div>
      <h2 className="font-semibold w-fit py-1 mb-3 relative before:absolute before:w-16 before:h-[2px] before:bg-black before:left-0 before:bottom-0">
        Price
      </h2>
      <Slider
        range
        min={0}
        max={maxProductPrice}
        value={priceRange}
        onChange={(range) => setPriceRange(range)}
      />
      <div>
        <p>
          Price Range: ${formatNumberWithCommas(priceRange[0])} — $
          {formatNumberWithCommas(priceRange[1])}
        </p>
        <button className="rounded-full px-6 py-2 border border-custom-black mt-3 font-semibold duration-200 hover:bg-blue-400 hover:text-gray-100 hover:border-blue-400">
          Filter
        </button>
      </div>
    </div>
  );
}

export default Price;
