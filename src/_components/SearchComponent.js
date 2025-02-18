"use client";
import { useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import Sidebar from "./Sidebar";
import SearchSidebar from "./SearchSidebar";

function SearchComponent({ collections }) {
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
      <li
        className="text-2xl hover:text-blue-300 "
        ref={searchButtonRef}
        onClick={handleOpen}
      >
        <button className="duration-[0.5s] hover:scale-[1.2]">
          <IoIosSearch />
        </button>
      </li>
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
