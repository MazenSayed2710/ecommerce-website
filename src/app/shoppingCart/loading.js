import CollectionHeaderSkeleton from "@/_components/CollectionHeaderSkeleton";
import Skeleton from "react-loading-skeleton";

function loading() {
  return (
    <div>
      <CollectionHeaderSkeleton />
      <div className="max-w-[1200px] m-auto py-16">
        <div className="grid grid-cols-[40%_20%_20%_20%] font-semibold uppercase text-custom-black py-5 ">
          <Skeleton width={100} h={25} />
          <Skeleton width={100} h={25} />
          <Skeleton width={100} h={25} />
          <Skeleton width={100} h={25} />
        </div>
        <div className="py-5">
          {Array.from({ length: 1 }, (_, i) => i + 1).map((i) => (
            <div
              className="grid grid-cols-[40%_20%_20%_20%] items-center border-y-[1px] border-gray-300 py-5"
              key={i}
            >
              <div className="flex gap-3 items-center">
                <Skeleton width={150} height={150} />
                <div className="text-custom-white grid gap-2">
                  <Skeleton width={100} h={25} />
                  <Skeleton width={100} h={25} />
                  <Skeleton width={100} h={25} />
                </div>
              </div>
              <Skeleton width={100} h={25} />
              <Skeleton width={150} h={25} />

              <Skeleton width={100} h={25} />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-end text-custom-white gap-3">
          <Skeleton width={100} h={25} />
          <Skeleton width={150} h={25} />
          <div className="flex items-center gap-3">
            <Skeleton width={200} h={25} />
          </div>
          <Skeleton width={100} h={25} />
        </div>
      </div>
    </div>
  );
}

export default loading;
