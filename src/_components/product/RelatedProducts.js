import { getRelatedProducts } from "@/lib/data-service";
import Products from "./Products";

async function RelatedProducts({ product }) {
  const products = await getRelatedProducts(product.categories, product.id);
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center">
        You may also like
      </h2>
      <Products data={products} />
    </div>
  );
}

export default RelatedProducts;
