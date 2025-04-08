import Skeleton from "react-loading-skeleton";

function FilterSectionSkeleton() {
  return (
    <div className="max-w-[1200px] m-auto p-5 flex justify-between items-center text-custom-white relative">
      <Skeleton width={150} height={20} />

      <Skeleton width={150} height={20} />
    </div>
  );
}

export default FilterSectionSkeleton;
