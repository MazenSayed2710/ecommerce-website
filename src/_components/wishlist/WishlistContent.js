"use client";
import ProductCard from "../product/ProductCard";
import { useManageWishlist } from "@/_hooks/useManageWishlist";

function WishlistContent() {
  const { wishlistItems, WishlistProductsIds } = useManageWishlist();
  return (
    <div className="max-w-[1200px] m-auto grid grid-cols-2 sm:grid-cols-3 gap-5 justify-center py-10 p-5">
      {wishlistItems?.map((product) => (
        <ProductCard
          data={product}
          key={product.id}
          ids={WishlistProductsIds}
        />
      ))}
    </div>
  );
}

export default WishlistContent;
