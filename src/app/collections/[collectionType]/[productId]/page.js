import { createUrlName } from "@/_components/helpers";
import ProductCardDetails from "@/_components/ProductCardDetails";
import { getProductById } from "@/lib/data-service";
export const generateMetadata = async ({ params }) => {
  const productId = (await params).productId.split("-")[0];
  const product = await getProductById(productId);
  return {
    title: `${createUrlName(product.name)} | Kalles Shopify`,
  };
};
async function page({ params }) {
  const productId = (await params).productId.split("-")[0];
  const product = await getProductById(productId);
  return (
    <div className="max-w-[1200px] m-auto p-5">
      <ProductCardDetails data={product} />
    </div>
  );
}

export default page;
