import { VscAccount } from "react-icons/vsc";
import Link from "next/link";
import { auth } from "@/lib/auth";
import Account from "./Account";
import SearchComponent from "./SearchComponent";
import { getCollections } from "@/app/_lib/data-service";
import ShoppingCartIcon from "./ShoppingCartIcon";
import WishListIcon from "./WishListIcon";
async function Header() {
  const session = await auth();
  const collections = await getCollections();
  return (
    <div className="flex gap-5 h-14 w-full justify-between items-center p-5 ">
      {/* <button className="sm:hidden block">
        <RxHamburgerMenu />
      </button> */}
      <Link href="/" className="font-bold text-4xl">
        Kalles
      </Link>
      <ul className="gap-5 hidden sm:flex">
        <li className=" hover:text-blue-400">
          <Link href="/collections">Collections</Link>
        </li>
        <li className=" hover:text-blue-400">Sales</li>
        <li className=" hover:text-blue-400">Trinding</li>
        <li className=" hover:text-blue-400">Shopping cart</li>
      </ul>
      <ul className=" flex gap-3 items-center">
        <SearchComponent collections={collections} />
        {/* <li className="text-xl  hover:text-blue-300">
          {session?.user ? (
            <Account name={session.user.name} img={session.user.image} />
          ) : (
            <Link href="/signIn" className="duration-[0.5s] hover:scale-[1.2]">
              <VscAccount />
            </Link>
          )}
        </li> */}
        <li className="text-xl hover:text-blue-300 hidden sm:block">
          <Link href="/wishlist" className="duration-[0.5s] hover:scale-[1.2]">
            <WishListIcon />
          </Link>
        </li>
        <li className="text-xl  hover:text-blue-300">
          <Link
            href="/shoppingCart"
            className="duration-[0.5s] hover:scale-[1.2]"
          >
            <ShoppingCartIcon />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
