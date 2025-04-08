import CollectionTypeSkeleton from "@/_components/collections/CollectionTypeSkeleton";
import { Suspense } from "react";

function layout({ children }) {
  return <Suspense fallback={<CollectionTypeSkeleton />}>{children}</Suspense>;
}

export default layout;
