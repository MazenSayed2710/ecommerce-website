import HeaderWithImg from "@/_components/common/HeaderWithImg";
import { auth } from "@/lib/auth";
import Account from "@/_components/Account";
export const metadata = {
  title: "Account | Kalles",
  description: "Account page",
};
async function page() {
  const session = await auth();

  return (
    <div>
      <HeaderWithImg img="/shopping-cart-head.jpg">
        <span className="uppercase font-semibold">Your account</span>
      </HeaderWithImg>
      <Account session={session} />
    </div>
  );
}

export default page;
// {
//   session.user.image ? (
//     <img
//       src={session.user.image}
//       alt="user"
//       className="w-full h-full object-cover rounded-full"
//     />
//   ) : (
//     session.user.email[0].toUpperCase()
//   );
// }
