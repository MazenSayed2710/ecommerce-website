"use client";
import { searchApi } from "@/lib/actions";
import { useState } from "react";

function SearchSidebarInputs({ collections, setResults }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [collectionQuery, setCollectionQuery] = useState("all categories");
  const inputCollections = [
    "All Categories",
    ...collections.map((c) => c.text),
  ];
  const handleChange = async (searchQuery, collectionQuery) => {
    const products =
      !searchQuery || !searchQuery.trim().length
        ? ""
        : await searchApi(searchQuery, collectionQuery);

    setResults(products);
  };
  return (
    <div>
      <select
        className="bg-gray-50 border border-gray-300  text-sm rounded-full focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5 mb-5"
        onChange={(e) => {
          handleChange(searchQuery, e.target.value);
          setCollectionQuery(e.target.value);
        }}
      >
        {inputCollections.map((collection) => (
          <option
            key={collection}
            value={collection.toLowerCase()}
            className="p-2"
          >
            {collection}
          </option>
        ))}
      </select>
      <input
        className="bg-gray-50 border border-gray-300  text-sm rounded-full focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5"
        type="text"
        id="search"
        name="search"
        onChange={(e) => {
          handleChange(e.target.value, collectionQuery);
          setSearchQuery(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchSidebarInputs;
