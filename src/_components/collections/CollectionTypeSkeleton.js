import CollectionHeaderSkeleton from "@/_components/collections/CollectionHeaderSkeleton";
import FilterSectionSkeleton from "@/_components/common/FilterSectionSkeleton";
import ProductsSkeleton from "@/_components/product/ProductsSkeleton";
import "react-loading-skeleton/dist/skeleton.css";
function CollectionTypeSkeleton() {
  return (
    <div className="py-10">
      <CollectionHeaderSkeleton />
      <FilterSectionSkeleton />
      <ProductsSkeleton />
    </div>
  );
}

export default CollectionTypeSkeleton;
