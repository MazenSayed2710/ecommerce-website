"use client";
import { useWishlist } from "@/_contexts/WishlistContext";
import ProductCard from "../product/ProductCard";
import WishlistSkeleton from "./WishlistSkeleton";

function WishlistContent() {
  const { wishlistProducts, isLoading } = useWishlist();

  if (isLoading) return <WishlistSkeleton />;

  return (
    <div className="max-w-[1200px] m-auto grid grid-cols-2 sm:grid-cols-3 gap-5 justify-center py-10 p-5">
      {wishlistProducts?.map((product) => (
        <ProductCard data={product} key={product.id} />
      ))}
    </div>
  );
}

export default WishlistContent;
