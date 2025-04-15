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
  const sortOptions = [
    {
      text: "Featured",
      value: "popularity",
    },

    {
      text: "Best Selling",
      value: "numOfSales",
    },
    {
      text: "Alphabetically, A-Z",
      value: "name-ascending",
    },

    {
      text: "Alphabetically, Z-A",
      value: "name-descending",
    },
    {
      text: "Price, low to high",
      value: "price-ascending",
    },
    {
      text: "Price, high to low",
      value: "price-descending",
    },
    {
      text: "Date, new to old",
      value: "created_at-descending",
    },

    {
      text: "Date, old to new",
      value: "created_at-ascending",
    },
  ];
  const searchParamsValues = await searchParams;
  const sortAndfilter = {
    outStock: "false",
    inStock: "false",
    sort: "all",
    size: "",
    price: "",
    ...searchParamsValues,
  };
  const products = await getSpecificProducts(collectionType, sortAndfilter);
  const productForFilterData = await getSpecificProducts(collectionType);
  const collectionImg = await getCollectionImg(collectionName);
  console.log(collectionName);

  if (!products) return;

  return (
    <div className="py-10">
      <CollectionHeader collectionName={collectionName} img={collectionImg} />
      <FilterSection
        sortOptions={sortOptions}
        products={productForFilterData}
      />
      <Products data={products} />
    </div>
  );
}

export default page;
