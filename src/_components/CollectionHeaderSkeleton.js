import Skeleton from "react-loading-skeleton";

function CollectionHeaderSkeleton() {
  return (
    <div className=" relative flex items-center justify-center h-56">
      <div className="absolute left-0 top-0 w-full h-full z-10">
        <Skeleton width={"100%"} height="100%" duration={1} />
      </div>
    </div>
  );
}

export default CollectionHeaderSkeleton;
