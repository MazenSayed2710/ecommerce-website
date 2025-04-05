import HeaderWithImg from "@/_components/HeaderWithImg";
import ShoppingCardContent from "@/_components/ShoppingCardContent";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Shopping Card | Kalles",
};
async function page() {
  const session = await auth();
  // console.log(session);
  // if (!session) redirect("/api/auth/signin");
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
