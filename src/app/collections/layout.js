import CollectionsSkeleton from "@/_components/collections/CollectionsSkeleton";
import { Suspense } from "react";
function layout({ children }) {
  return <Suspense fallback={<CollectionsSkeleton />}>{children}</Suspense>;
}

export default layout;
