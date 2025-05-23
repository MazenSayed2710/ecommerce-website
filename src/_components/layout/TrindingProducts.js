import { getTrindingProducts } from "@/lib/data-service";
import TrendingAndBestSeller from "./TrendingAndBestSeller";
async function TrindingProducts() {
  const triningProducts = await getTrindingProducts();
  return (
    <>
      <TrendingAndBestSeller
        description="Top view in this week"
        title="trending"
        products={triningProducts}
      />
    </>
  );
}

export default TrindingProducts;
