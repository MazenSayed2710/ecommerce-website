import HeaderWithImg from "@/_components/HeaderWithImg";
import ShoppingCardContent from "@/_components/ShoppingCardContent";

export const metadata = {
  title: "Shopping Card | Kalles",
};
function page() {
  return (
    <div>
      <HeaderWithImg img="/shopping-cart-head.jpg">
        <span className="uppercase font-semibold">shopping card</span>
      </HeaderWithImg>
      <ShoppingCardContent />
    </div>
  );
}

export default page;
/*
-metadata =>done
-editButton => done
-confirm quantity=>done
-responsive
-check out button => done
*/
