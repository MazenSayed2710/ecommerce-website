import SearchComponent from "./SearchComponent";
import Link from "next/link";
import { VscAccount } from "react-icons/vsc";
import ShoppingCartIcon from "./ShoppingCartIcon";
import WishListIcon from "./WishListIcon";
import { useWishlistIds } from "@/_hooks/useGetWishlistIds";
function MobileFooterMenu({ collections }) {
  const { WishlistProductsIds } = useWishlistIds();
  return (
    <div className="w-full fixed bottom-0 left-0 bg-white z-50 shadow-md flex items-center justify-between px-5 py-3 sm:hidden">
      <Link
        href="/shoppingCart"
        className="flex flex-col items-center justify-center"
      >
        <ShoppingCartIcon />
        <p className="text-sm font-semibold">Cart</p>
      </Link>
      <Link
        href="/wishlist"
        className="flex flex-col items-center justify-center"
      >
        <WishListIcon ids={WishlistProductsIds} />
        <p className="text-sm font-semibold">Wishlist</p>
      </Link>
      <Link
        href="/account"
        className="flex flex-col items-center justify-center"
      >
        <VscAccount />
        <p className="text-sm font-semibold">Account</p>
      </Link>
      <SearchComponent forMobile="true" collections={collections} />
    </div>
  );
}

export default MobileFooterMenu;
