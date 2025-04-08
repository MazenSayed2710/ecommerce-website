import CollectionHeaderSkeleton from "@/_components/collections/CollectionHeaderSkeleton";
import Skeleton from "react-loading-skeleton";

function Loading() {
  return (
    <div>
      <CollectionHeaderSkeleton />
      <div className="max-w-[1200px] m-auto grid px-5 grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-10 py-10">
        {Array.from({ length: 6 }, (_, i) => i + 1).map((i) => (
          <div key={i} className="overflow-hidden grid gap-1">
            <div className="relative aspect-[2.5/3]">
              <Skeleton height="100%" width="100%" className="!rounded-lg" />
            </div>
            <Skeleton height={15} width={100} />
            <Skeleton height={15} width={50} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Loading;
