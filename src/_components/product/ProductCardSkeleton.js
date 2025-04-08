"use client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ProductCardSkeleton() {
  return (
    <div className="relative">
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
  );
}

export default ProductCardSkeleton;
