"use client";
import { VscAccount } from "react-icons/vsc";
import Link from "next/link";
// import Account from "../Account";
import SearchComponent from "./SearchComponent";
import ShoppingCartIcon from "./ShoppingCartIcon";
import WishListIcon from "./WishListIcon";
import { MdOutlineLogout } from "react-icons/md";
import { useWishlist } from "@/_contexts/WishlistContext";
import { signOut } from "next-auth/react";
import { useShoppingCart } from "@/_contexts/ShoppingCartProvider";
function Header({ collections, session }) {
  const { wishlistProductsIds, isLoading: wishlistLoading } = useWishlist();
  const { shoppingCartProducts, isLoading: shoppingCartLoading } =
    useShoppingCart();
  return (
    <div className="flex gap-5 h-14 w-full justify-between items-center p-5 ">
      <Link href="/" className="font-bold text-4xl">
        Kalles
      </Link>
      <ul className="gap-5 hidden sm:flex">
        <li className=" hover:text-blue-400">
          <Link href="/collections">Collections</Link>
        </li>
        <li className=" hover:text-blue-400">Sales</li>
        <li className=" hover:text-blue-400">Trinding</li>
        <li className=" hover:text-blue-400">
          <Link href="shoppingCard">Shopping cart</Link>
        </li>
      </ul>
      <ul className=" flex gap-3 items-center">
        <SearchComponent collections={collections} />
        <li className="text-xl  hover:text-blue-300">
          {session?.user ? (
            <button
              className="ml-5"
              onClick={() => signOut({ redirectTo: "/" })}
            >
              <MdOutlineLogout />
            </button>
          ) : (
            <Link href="/signIn" className="duration-[0.5s] hover:scale-[1.2]">
              <VscAccount />
            </Link>
          )}
        </li>
        <li className="text-xl hover:text-blue-300 hidden sm:block">
          <Link href="/wishlist" className="duration-[0.5s] hover:scale-[1.2]">
            <WishListIcon
              ids={wishlistProductsIds}
              isLoading={wishlistLoading}
            />
          </Link>
        </li>
        <li className="text-xl  hover:text-blue-300">
          <Link
            href="/shoppingCard"
            className="duration-[0.5s] hover:scale-[1.2]"
          >
            <ShoppingCartIcon
              shoppingCartProducts={shoppingCartProducts}
              isLoading={shoppingCartLoading}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
