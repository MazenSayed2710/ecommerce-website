"use client";

import { useState } from "react";
import SearchSidebarHeader from "./SearchSidebarHeader";
import SearchSidebarInputs from "./SearchSidebarInputs";
import SearchSidebarResults from "./SearchSidebarResults";
import { useClickOutside } from "../../_hooks/useClickOutside";

function SearchSidebar({
  openSidebar,
  handleClose,
  searchButtonRef,
  collections,
}) {
  const [results, setResults] = useState();
  const ref = useClickOutside(() => {
    handleClose();
  }, searchButtonRef);
  return (
    <div
      className={`bg-white h-screen w-[300px] sm:w-[400px] duration-500 *:border-b *:border-gray-300 *:p-5 text-custom-black grid grid-rows-[5%_15%_5%_1fr] ${
        openSidebar ? "translate-x-[0]" : "translate-x-[400px]"
      }`}
      ref={ref}
    >
      <SearchSidebarHeader handleClose={handleClose} />
      <SearchSidebarInputs collections={collections} setResults={setResults} />
      <SearchSidebarResults results={results} handleClose={handleClose} />
    </div>
  );
}

export default SearchSidebar;
