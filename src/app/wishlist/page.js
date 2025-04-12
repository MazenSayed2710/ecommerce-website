import WishlistContent from "@/_components/wishlist/WishlistContent";
import WishlistHeader from "@/_components/wishlist/WishlistHeader";
import { auth } from "@/lib/auth";
import { getUserWishlistCard } from "@/lib/data-service";

export const metadata = {
  title: "Wishlist | Kalles",
};
async function page() {
  return (
    <div>
      <WishlistHeader />
      <WishlistContent />
    </div>
  );
}

export default page;
