"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

function SliderCleint({ sliderData }) {
  const [active, setActive] = useState(0);
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: "200px" },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };
  return (
    <div
      className="sm:h-[700px] h-[250px] bg-cover bg-center w-full px-5 relative"
      style={{ backgroundImage: `url(${sliderData[active].imgUrl})` }}
    >
      <motion.div
        className={`flex relative justify-center gap-3 ${
          sliderData[active].imgPosition === "right" && "items-end"
        } flex-col max-w-[1200px] m-auto h-full`}
        variants={container}
        initial="hidden"
        animate="show"
        key={active}
      >
        <motion.span
          className="text-gray-700 font-semibold relative bottom-[-15px] uppercase"
          variants={item}
        >
          {sliderData[active].supHeadline}
        </motion.span>
        <motion.p className="font-bold text-2xl sm:text-5xl" variants={item}>
          {sliderData[active].headline}
        </motion.p>
        <motion.div
          className="w-[150px] text-base bg-black px-3 py-2 sm:px-4 sm:py-3 text-gray-100 relative overflow-hidden flex justify-center items-center cursor-pointer
         before:w-[150px] before:h-full before:bg-blue-400 before:absolute before:left-0
          before:-bottom-0 before:translate-y-full  before:duration-500 hover:before:-translate-y-0 hover:z-0 hover:before:-z-10"
          variants={item}
        >
          <Link href="/collections" className="z-10">
            Explore Now
          </Link>
        </motion.div>
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
      </motion.div>
    </div>
  );
}

export default SliderCleint;
