"use client";
import { useState } from "react";

function SizeOptions({ data }) {
  const { sizes } = data;
  const [currentSize, setCurrentSize] = useState(sizes?.[0]);

  if (!sizes) return;

  return (
    <div>
      <p className="font-bold uppercase mb-4 text-custom-black">
        size:
        <span className="ml-1">{currentSize}</span>
      </p>
      <div className="flex gap-3 mb-4">
        {sizes.map((size) => (
          <button
            className={`w-8 h-8 rounded-full  border border-gray-300 flex justify-center items-center text-base   ${
              size === currentSize && "bg-gray-700 text-gray-100"
            } font-semibold  uppercase hover:border-gray-500 `}
            key={size}
            onClick={() => setCurrentSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SizeOptions;
