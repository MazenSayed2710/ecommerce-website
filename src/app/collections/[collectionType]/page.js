import CollectionHeader from "@/_components/CollectionHeader";
import FilterSection from "@/_components/FilterSection";
import { capitalize } from "@/_components/helpers";
import Products from "@/_components/Products";
import { getSpecificProducts } from "@/app/_lib/data-service";

export async function generateMetadata({ params }) {
  const collectionName = (await params).collectionType;
  return {
    title: `${capitalize(collectionName)} | Kalles Shopify`,
  };
}

async function page({ params }) {
  const collectionType = (await params).collectionType;
  const collectionName = capitalize(collectionType);
  const products = await getSpecificProducts(collectionType);
  return (
    <div className="py-10">
      <CollectionHeader collectionName={collectionName} />
      <FilterSection />
      <Products data={products} />
    </div>
  );
}

export default page;
