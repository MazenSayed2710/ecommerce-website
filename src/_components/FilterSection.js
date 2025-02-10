"use client";
import { useParams, useRouter } from "next/navigation";
import { IoFilterOutline } from "react-icons/io5";

function FilterSection({ sortOptions }) {
  const roter = useRouter();
  const params = useParams();
  // console.log(params);

  return (
    <div className="max-w-[1200px] m-auto py-5 flex justify-between items-center text-custom-white">
      <button className="flex items-center gap-1 hover:text-blue-400 duration-500 font-semibold">
        <IoFilterOutline />
        <p>Filter</p>
      </button>
      <form>
        <select
          className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5"
          defaultValue="featured"
          onChange={(e) => {
            roter.push(
              `/collections/${params.collectionType}?sort=${e.target.value}`
            );
            console.log(e.target.value);
          }}
        >
          {sortOptions.map((option) => (
            <option value={option.value} key={option.value} className="p-2">
              {option.text}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}

export default FilterSection;
