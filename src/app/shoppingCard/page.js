import HeaderWithImg from "@/_components/common/HeaderWithImg";
import ShoppingCardContent from "@/_components/shoppingCard/ShoppingCardContent";
import { auth } from "@/lib/auth";

export const metadata = {
  title: "Shopping Card | Kalles",
};
async function page() {
  const session = await auth();
  return (
    <div>
      <HeaderWithImg img="/shopping-cart-head.jpg">
        <span className="uppercase font-semibold">shopping card</span>
      </HeaderWithImg>
      <ShoppingCardContent session={session} />
    </div>
  );
}

export default page;
