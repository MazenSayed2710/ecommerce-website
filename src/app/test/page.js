import CollectionHeaderSkeleton from "@/_components/CollectionHeaderSkeleton";
import Skeleton from "react-loading-skeleton";

function page() {
  return (
    <div>
      <CollectionHeaderSkeleton />
      <div className="max-w-[1200px] m-auto grid grid-cols-3 gap-10 py-10">
        {Array.from({ length: 6 }, (_, i) => i + 1).map((i) => (
          <div className="relative aspect-[2.5/3]  h-full" key={i}>
            <Skeleton height="100%" width="100%" className="!rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
