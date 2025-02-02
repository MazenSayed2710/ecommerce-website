import WishlistContent from "@/_components/WishlistContent";
import WishlistHeader from "@/_components/WishlistHeader";

export const metadata = {
  title: "Shopping Card | Kalles",
};
function page() {
  return (
    <div>
      <WishlistHeader />
      <WishlistContent />
    </div>
  );
}

export default page;
