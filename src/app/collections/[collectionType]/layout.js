import CollectionHeaderSkeleton from "@/_components/CollectionHeaderSkeleton";
import FilterSectionSkeleton from "@/_components/FilterSectionSkeleton";
import ProductsSkeleton from "@/_components/ProductsSkeleton";
import { Suspense } from "react";

function layout({ children }) {
  return (
    <Suspense
      fallback={
        <>
          <CollectionHeaderSkeleton />
          <FilterSectionSkeleton />
          <ProductsSkeleton />
        </>
      }
    >
      {children}
    </Suspense>
  );
}

export default layout;
