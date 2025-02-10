"use client";

import { useClickOutside } from "./useClickOutside";

function FilterSidebar({ setOpenSidebar }) {
  const ref = useClickOutside(() => {
    setOpenSidebar(false);
    document.body.classList.remove("open");
  });
  return (
    <div className="bg-black/50 fixed w-screen h-screen z-50 left-0 top-0">
      <div
        className="bg-white h-full w-[300px]  duration-200 animate-left-to-right"
        ref={ref}
      ></div>
    </div>
  );
}

export default FilterSidebar;
