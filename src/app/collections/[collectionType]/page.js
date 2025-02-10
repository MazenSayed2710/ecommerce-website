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

async function page({ params, searchParams }) {
  const collectionType = (await params).collectionType;
  const collectionName = capitalize(collectionType);
  const sort = searchParams.sort;
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

  const sortAndfilter = {
    sort: sort || "all",
  };
  const products = await getSpecificProducts(collectionType, sortAndfilter);
  console.log(sortAndfilter);
  return (
    <div className="py-10">
      <CollectionHeader
        collectionName={collectionName}
        img="/woman-heading.jpg"
      />
      <FilterSection sortOptions={sortOptions} />
      <Products data={products} />
    </div>
  );
}

export default page;
