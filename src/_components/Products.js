import ProductCard from "./ProductCard";
function Products({ data }) {
  if (!data)
    return (
      <div className="text-center text-gray-500 py-10">
        No products available.
      </div>
    );
  return (
    <div className="max-w-[1200px] m-auto grid sm:grid-cols-3 md:grid-cols-4 grid-cols-2 gap-5 justify-center px-5">
      {data.map((product) => (
        <ProductCard data={product} key={product.id} />
      ))}
    </div>
  );
}

export default Products;
