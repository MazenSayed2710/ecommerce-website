"use client";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

function WishlistContent() {
  const products = useSelector((state) => state.wishlist.products);

  return (
    <div className="max-w-[1200px] m-auto grid grid-cols-3 gap-5 justify-center py-10">
      {products?.map((product) => (
        <ProductCard data={product} key={product.id} />
      ))}
    </div>
  );
}

export default WishlistContent;
