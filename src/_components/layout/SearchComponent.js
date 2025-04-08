"use client";
import { useRef, useState } from "react";
import { GoSearch } from "react-icons/go";

import Sidebar from "./Sidebar";
import SearchSidebar from "./SearchSidebar";

function SearchComponent({ collections, forMobile = false }) {
  const [openSearchMenu, setOpenSearchMenu] = useState(false);
  const searchButtonRef = useRef(null);
  const handleClose = () => {
    document.body.classList.remove("open");
    setOpenSearchMenu(false);
  };
  const handleOpen = () => {
    document.body.classList.add("open");
    setOpenSearchMenu(true);
  };

  return (
    <>
      {forMobile ? (
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          ref={searchButtonRef}
          onClick={handleOpen}
        >
          <GoSearch />
          <p className="text-sm font-semibold">Search</p>
        </div>
      ) : (
        <li
          className="text-2xl hover:text-blue-300 "
          ref={searchButtonRef}
          onClick={handleOpen}
        >
          <button className="duration-[0.5s] hover:scale-[1.2]">
            <GoSearch />
          </button>
        </li>
      )}
      <Sidebar openSidebar={openSearchMenu}>
        <SearchSidebar
          openSidebar={openSearchMenu}
          handleClose={handleClose}
          searchButtonRef={searchButtonRef}
          collections={collections}
        />
      </Sidebar>
    </>
  );
}

export default SearchComponent;
