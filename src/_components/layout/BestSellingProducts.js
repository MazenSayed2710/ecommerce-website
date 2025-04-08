import TrendingAndBestSeller from "./TrendingAndBestSeller";

const { getbestsellingProducts } = require("@/lib/data-service");

async function BestSellingProducts() {
  const bestsellingProducts = await getbestsellingProducts();
  return (
    <TrendingAndBestSeller
      description="Top view in this week"
      title="trending"
      products={bestsellingProducts}
    />
  );
}
export default BestSellingProducts;
