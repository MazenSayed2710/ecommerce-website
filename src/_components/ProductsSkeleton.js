import Skeleton from "react-loading-skeleton";

function ProductsSkeleton() {
  return (
    <div className="max-w-[1200px] m-auto grid grid-cols-4 gap-5 justify-center">
      {Array.from({ length: 8 }, (_, i) => i + 1).map((i) => (
        <div className="relative" key={i}>
          <div className="relative overflow-hidden aspect-[2/3]">
            <Skeleton height="100%" width="100%" className="!rounded-lg" />
          </div>
          <div className="mt-2">
            <Skeleton width="80%" height={20} />
          </div>
          <Skeleton width="50%" height={20} />
          <div className="flex gap-3 mt-2">
            {[...Array(3)].map((_, index) => (
              <Skeleton key={index} circle width={24} height={24} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductsSkeleton;
