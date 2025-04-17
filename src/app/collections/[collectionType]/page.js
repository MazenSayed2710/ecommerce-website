import CollectionHeader from "@/_components/collections/CollectionHeader";
import FilterSection from "@/_components/common/FilterSection";
import Products from "@/_components/product/Products";
import { capitalize } from "@/_utils/helpers";
import { getSpecificProducts, getCollectionImg } from "@/lib/data-service";

export async function generateMetadata({ params }) {
  const collectionName = (await params).collectionType;
  return {
    title: `${capitalize(collectionName)} | Kalles Shopify`,
  };
}

async function page({ params, searchParams }) {
  const collectionType = (await params).collectionType;
  const collectionName = capitalize(collectionType);

  const searchParamsValues = await searchParams;
  const sortAndfilter = {
    outStock: "false",
    inStock: "false",
    sort: "all",
    size: "",
    price: "",
    ...searchParamsValues,
  };
  const products = await getSpecificProducts([collectionType], sortAndfilter);
  const productForFilterData = await getSpecificProducts([collectionType]);
  const collectionImg = await getCollectionImg(collectionName);
  console.log(productForFilterData);

  if (!products) return;

  return (
    <div className="py-10">
      <CollectionHeader collectionName={collectionName} img={collectionImg} />
      <FilterSection products={productForFilterData} />
      <Products data={products} />
    </div>
  );
}

export default page;
