import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CollectionsSkeleton() {
  return (
    <>
      <div className="m-auto grid max-w-[1200px] grid-cols-2 gap-2 px-5 py-10 sm:grid-cols-3 sm:gap-10">
        {Array.from({ length: 6 }, (_, i) => (
          <div className="relative aspect-[2.5/3]" key={i}>
            <Skeleton height="100%" width="100%" className="!rounded-lg" />
          </div>
        ))}
      </div>
    </>
  );
}

export default CollectionsSkeleton;
