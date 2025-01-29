"use client";
import Link from "next/link";
import { useState } from "react";

function SliderCleint({ sliderData }) {
  const [active, setActive] = useState(0);

  // if (!sliderData) return <div></div>;
  return (
    <div
      className={`h-[700px] bg-cover w-full`}
      style={{ backgroundImage: `url(${sliderData[active].imgUrl})` }}
    >
      <div
        className={`flex relative justify-center gap-3 ${
          sliderData[active].imgPosition === "right" && "items-end"
        } flex-col max-w-[1200px] m-auto h-full`}
      >
        <span className="text-gray-700 font-semibold relative  bottom-[-15px] uppercase">
          {sliderData[active].supHeadline}
        </span>
        <p className="font-bold text-5xl">{sliderData[active].headline}</p>
        <div
          className="w-[150px] bg-black px-4 py-3 text-gray-100 relative overflow-hidden flex justify-center items-center cursor-pointer
         before:w-[150px] before:h-full before:bg-blue-400 before:absolute before:left-0
          before:-bottom-0 before:translate-y-full  before:duration-500 hover:before:-translate-y-0 hover:z-0 hover:before:-z-10"
        >
          <Link href="/collections" className="z-10">
            Explore Now
          </Link>
        </div>
        <div className=" absolute flex gap-4 justify-center w-full bottom-3">
          {sliderData.map((image) => (
            <button
              className={`w-4 h-4 rounded-full  block hover:bg-black  duration-500 ${
                active === image.id - 1 ? "bg-black" : "bg-slate-400"
              }`}
              key={image.id}
              onClick={() => {
                setActive(image.id - 1);
              }}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SliderCleint;
