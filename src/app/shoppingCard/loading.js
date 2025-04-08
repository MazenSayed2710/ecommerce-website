import CollectionHeaderSkeleton from "@/_components/collections/CollectionHeaderSkeleton";
import ShoppingCardProductSkeleton from "@/_components/shoppingCard/ShoppingCardProductSkeleton";
import Skeleton from "react-loading-skeleton";

function loading() {
  return (
    <div>
      <CollectionHeaderSkeleton />
      <div className="max-w-[1200px] m-auto py-16 px-5">
        <div className="hidden sm:grid grid-cols-[40%_20%_20%_20%] font-semibold uppercase text-custom-black py-5 ">
          <Skeleton width={100} h={25} />
          <Skeleton width={100} h={25} />
          <Skeleton width={100} h={25} />
          <Skeleton width={100} h={25} />
        </div>
        <ShoppingCardProductSkeleton />

        <div className="flex flex-col items-center sm:items-end gap-3">
          <Skeleton width={100} h={25} />
          <Skeleton width={150} h={25} />
          <div className="flex items-center gap-3">
            <Skeleton width={200} h={25} />
          </div>
          <div className="sm:w-auto w-full h-12">
            <Skeleton width="100%" h="100%" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default loading;
