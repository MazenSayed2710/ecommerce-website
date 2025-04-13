import WishlistContent from "@/_components/wishlist/WishlistContent";
import WishlistHeader from "@/_components/wishlist/WishlistHeader";

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
