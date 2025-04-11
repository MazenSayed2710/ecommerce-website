import { auth } from "@/lib/auth";
import ProductCard from "./ProductCard";
import { getUserWishlistCard } from "@/lib/data-service";
async function Products({ data }) {
  const session = await auth();
  const products = await getUserWishlistCard(session?.user.email);
  const ids = products.map((p) => p.id);
  if (!data)
    return (
      <div className="text-center text-gray-500 py-10">
        No products available.
      </div>
    );
  return (
    <div className="max-w-[1200px] m-auto grid sm:grid-cols-3 md:grid-cols-4 grid-cols-2 gap-5 justify-center px-5">
      {data.map((product) => (
        <ProductCard data={product} key={product.id} ids={ids} />
      ))}
    </div>
  );
}

export default Products;
