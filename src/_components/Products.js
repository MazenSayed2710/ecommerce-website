import ProductCard from "./ProductCard";
function Products({ data }) {
  if (!data) return;
  return (
    <div className="max-w-[1200px] m-auto grid grid-cols-4 gap-5 justify-center">
      {data.map((product) => (
        <ProductCard data={product} key={product.id} />
      ))}
    </div>
  );
}

export default Products;
