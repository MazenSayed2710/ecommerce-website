"use client";
import { useEffect, useState } from "react";

function QuantityInputOnBlur({ value, inputWidth, handleChange }) {
  const [inputValue, setInputValue] = useState(value);
  useEffect(() => {
    setInputValue(value);
  }, [value]);
  return (
    <div className="flex items-center rounded-full border text-xl font-semibold border-gray-800 w-fit">
      <button
        className="px-4 py-1  hover:text-blue-400 "
        onClick={() => {
          setInputValue(Number(value) - 1);
          handleChange(Number(value) - 1);
        }}
        disabled={value === 1}
      >
        -
      </button>
      <input
        type="number"
        value={inputValue}
        className={`px-4 py-1 border-t border-b ${inputWidth} text-center`}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onBlur={(e) => {
          handleChange(e.target.value);
        }}
      />

      <button
        className="px-4 py-1 hover:text-blue-400 "
        onClick={() => {
          setInputValue(Number(value) + 1);
          handleChange(Number(value) + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default QuantityInputOnBlur;
