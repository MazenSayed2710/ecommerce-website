import Products from "../product/Products";
import SectionName from "../common/SectionName";

async function TrendingAndBestSeller({ title, description, products }) {
  return (
    <div className="p-5">
      <SectionName description={description}>{title}</SectionName>
      <Products data={products} />
    </div>
  );
}

export default TrendingAndBestSeller;
