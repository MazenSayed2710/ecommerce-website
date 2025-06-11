import { createUrlName } from "@/_utils/helpers";
import ProductCardDetails from "@/_components/product/ProductCardDetails";
import { getProductById } from "@/lib/data-service";
import RelatedProducts from "@/_components/product/RelatedProducts";
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
      <RelatedProducts product={product} />
    </div>
  );
}

export default page;
