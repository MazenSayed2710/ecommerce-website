import { IoFilterOutline } from "react-icons/io5";

function FilterSection() {
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
        >
          <option value="featured" className="p-2">
            Featured
          </option>
          <option value="best-selling">Best selling</option>
          <option value="a-z">Alphabetically,A-Z</option>
          <option value="z-a">Alphabetically,Z-A</option>
        </select>
      </form>
    </div>
  );
}

export default FilterSection;
