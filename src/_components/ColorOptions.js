"use client";
import { useState } from "react";

function ColorOptions({ data, setActiveImg }) {
  const { colors } = data;
  const [currentColor, setCurrentColor] = useState(colors?.[0].colorName);
  const handleClick = (color) => {
    setCurrentColor(color.colorName);
    setActiveImg(color.img);
  };
  if (!colors) return;
  return (
    <div>
      <p className="font-bold uppercase mb-4 text-custom-black">
        color:<span className="ml-1">{currentColor}</span>
      </p>
      <div className="flex gap-3 mb-4">
        {colors.map((color) => (
          <button
            onClick={() => handleClick(color)}
            className={`w-8 h-8 rounded-full  border-2  ${
              currentColor === color.colorName
                ? "border-gray-700"
                : "border-gray-300"
            }`}
            style={{
              boxShadow: "inset 0px 0px 0 2px #ffffff",
              backgroundColor: color.color,
            }}
            key={color.color}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default ColorOptions;
