import Collections from "@/_components/collections/Collections";
import HeaderWithImg from "@/_components/common/HeaderWithImg";
import CollectionsSkeleton from "@/_components/collections/CollectionsSkeleton";
import { Suspense } from "react";
export const metadata = {
  title: "Collections",
  description:
    "Organize and showcase products into curated collections for easy browsing.",
};

export function page() {
  return (
    <div>
      <HeaderWithImg img="/bg-heading.jpg">Collections</HeaderWithImg>
      <Suspense fallback={<CollectionsSkeleton />}>
        <Collections />
      </Suspense>
      ;
    </div>
  );
}

export default page;
