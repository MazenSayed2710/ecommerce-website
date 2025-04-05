import Skeleton from "react-loading-skeleton";

function ShoppingCardProductSkeleton() {
  return (
    <div className="py-5">
      <div>
        <div className="grid px-5 grid-cols-[auto_1fr] sm:grid-rows-1 grid-rows-[1fr_auto_auto_auto] gap-3 sm:grid-cols-[40%_20%_20%_20%] sm:items-center items-start py-5">
          <div className="flex gap-3 items-center sm:row-span-1 row-span-4 !border-0">
            <div className="relative w-40 h-48">
              <Skeleton width="100%" height="100%" />
            </div>
            <div className="sm:block hidden">
              <div className="grid gap-2">
                <Skeleton width={150} height={25} />
                <Skeleton width={150} height={25} />
                <Skeleton width={150} height={25} />
              </div>
            </div>
          </div>
          <div className="block sm:hidden">
            <div className="grid gap-2">
              <Skeleton width={150} height={25} />
              <Skeleton width={125} height={15} />
              <Skeleton width={125} height={15} />
            </div>
          </div>
          <Skeleton width={80} height={15} />
          <div className="pb-1">
            <Skeleton width={150} height={25} />
          </div>
          <Skeleton width={80} height={15} />
        </div>
      </div>
    </div>
  );
}

export default ShoppingCardProductSkeleton;
