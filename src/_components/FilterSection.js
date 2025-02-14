"use client";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { IoFilterOutline } from "react-icons/io5";
import Sidebar from "./Sidebar";
import { useRef, useState } from "react";
import FilterSidebar from "./FilterSidebar";

function FilterSection({ sortOptions, products }) {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const filterButtonRef = useRef(null);
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className="max-w-[1200px] m-auto py-5 flex justify-between items-center text-custom-white relative">
      <button
        className="flex items-center gap-1 hover:text-blue-400 duration-500 font-semibold"
        onClick={() => {
          setOpenSidebar(true);
          document.body.classList.add("open");
        }}
        ref={filterButtonRef}
      >
        <IoFilterOutline />
        <p>Filter</p>
      </button>
      <form>
        <select
          className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5"
          defaultValue={searchParams.get("sort") || "popularity"}
          onChange={(e) => {
            router.push(
              `/collections/${params.collectionType}?sort=${e.target.value}`
            );
          }}
        >
          {sortOptions.map((option) => (
            <option value={option.value} key={option.value} className="p-2">
              {option.text}
            </option>
          ))}
        </select>
      </form>
      <Sidebar openSidebar={openSidebar}>
        <FilterSidebar
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
          products={products}
          filterButtonRef={filterButtonRef}
        />
      </Sidebar>
    </div>
  );
}

export default FilterSection;
