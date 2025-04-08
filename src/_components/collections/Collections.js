import { getCollections } from "@/lib/data-service";
import Collection from "./collections/Collection";
async function Collections() {
  const collections = await getCollections();
  return (
    <div className="max-w-[1200px] m-auto grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-10 py-10 px-5">
      {collections.map((collection) => (
        <Collection collection={collection} key={collection.id} />
      ))}
    </div>
  );
}

export default Collections;
