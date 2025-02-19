import Skeleton from "react-loading-skeleton";

function FilterSectionSkeleton() {
  return (
    <div className="max-w-[1200px] m-auto py-5 flex justify-between items-center text-custom-white relative">
      <button className="flex items-center gap-1 hover:text-blue-400 duration-500 font-semibold">
          <Skeleton width={150} height={20} />
      </button>
      <form>
          <Skeleton width={150} height={20} />
      </form>
    </div>
  );
}

export default FilterSectionSkeleton;
