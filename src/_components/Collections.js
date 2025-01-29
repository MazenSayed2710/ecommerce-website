import { getCollections } from "@/app/_lib/data-service";
import Collection from "./Collection";
async function Collections() {
  const collections = await getCollections();
  return (
    <div className="max-w-[1200px] m-auto grid grid-cols-3 gap-10 py-10">
      {collections.map((collection) => (
        <Collection collection={collection} key={collection.id} />
      ))}
    </div>
  );
}

export default Collections;
