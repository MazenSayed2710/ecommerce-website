import CollectionHeaderSkeleton from "@/_components/CollectionHeaderSkeleton";
import FilterSectionSkeleton from "@/_components/FilterSectionSkeleton";
import ProductsSkeleton from "@/_components/ProductsSkeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  return (
    <div className="py-10">
      <CollectionHeaderSkeleton />
      <FilterSectionSkeleton />
      <ProductsSkeleton />
    </div>
  );
}
