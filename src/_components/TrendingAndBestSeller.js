import Products from "./Products";
import SectionName from "./SectionName";

async function TrendingAndBestSeller({ title, description, products }) {
  return (
    <div className="p-5">
      <SectionName description={description}>{title}</SectionName>
      <Products data={products} />
    </div>
  );
}

export default TrendingAndBestSeller;
