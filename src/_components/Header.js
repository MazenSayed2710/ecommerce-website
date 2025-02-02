import { VscAccount } from "react-icons/vsc";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";

function Header() {
  return (
    <div className="flex gap-5 h-14 w-full justify-between items-center p-5 ">
      <Link href="/" className="font-bold text-4xl">
        Kalles
      </Link>
      <ul className="flex gap-5">
        <li className=" hover:text-blue-400">
          <Link href="/collections">collections</Link>
        </li>
        <li className=" hover:text-blue-400">sales</li>
        <li className=" hover:text-blue-400">trinding</li>
        <li className=" hover:text-blue-400">Shopping cart</li>
      </ul>
      <ul className=" flex gap-5 items-center">
        <li className="text-2xl hover:text-blue-300 ">
          <button className="duration-[0.5s] hover:scale-[1.2]">
            <IoIosSearch />
          </button>
        </li>
        <li className="text-xl  hover:text-blue-300">
          <button className="duration-[0.5s] hover:scale-[1.2]">
            <VscAccount />
          </button>
        </li>
        <li className="text-xl  hover:text-blue-300">
          <Link href="/wishlist" className="duration-[0.5s] hover:scale-[1.2]">
            <FaRegHeart />
          </Link>
        </li>
        <li className="text-xl  hover:text-blue-300">
          <Link
            href="/shoppingCart"
            className="duration-[0.5s] hover:scale-[1.2]"
          >
            <FaShoppingCart />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
