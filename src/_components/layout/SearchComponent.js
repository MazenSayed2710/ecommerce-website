"use client";
import { useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { usePopupModal } from "@/_contexts/PopupModalProvider";
import Sidebar from "./Sidebar";
import SearchSidebar from "./SearchSidebar";

function SearchComponent({ collections, forMobile = false }) {
  const [openSearchMenu, setOpenSearchMenu] = useState(false);
  const searchButtonRef = useRef(null);
  const { setIsOpen } = usePopupModal();
  const handleClose = () => {
    setIsOpen(false);
    setOpenSearchMenu(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
    console.log("open");
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
          <FiSearch />
          <p className="text-sm font-semibold">Search</p>
        </div>
      ) : (
        <li
          className="text-2xl hover:text-blue-300 "
          ref={searchButtonRef}
          onClick={handleOpen}
        >
          <button className="duration-[0.5s] hover:scale-[1.2]">
            <FiSearch />
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
