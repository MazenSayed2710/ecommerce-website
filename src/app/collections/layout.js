import CollectionsSkeleton from "@/_components/CollectionsSkeleton";
import HeaderWithImg from "@/_components/HeaderWithImg";
import { Suspense } from "react";
function layout({ children }) {
  return (
    <div>
      <HeaderWithImg img="/bg-heading.jpg">Collections</HeaderWithImg>
      <Suspense fallback={<CollectionsSkeleton />}>{children}</Suspense>
    </div>
  );
}

export default layout;
