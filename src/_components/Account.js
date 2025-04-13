"use client";
import { MdOutlineLogout } from "react-icons/md";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useShoppingCart } from "@/_contexts/ShoppingCartProvider";
import { useWishlist } from "@/_contexts/WishlistContext";

function Account({ session }) {
  const { shoppingCartProducts, isLoading: shoppingCartLoading } =
    useShoppingCart();
  const { wishlistProductsIds, isLoading: wishlistLoading } = useWishlist();

  const wishlistCount = wishlistProductsIds?.length || 0;
  const cartCount = shoppingCartProducts?.length || 0;

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row gap-10">
      {session ? (
        <>
          {/* Sidebar */}
          <div className="w-full md:w-1/3 bg-gray-100 rounded-xl p-6 flex flex-col items-center text-center shadow">
            <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center text-2xl font-bold text-white mb-4">
              {session.user.email[0].toUpperCase()}
            </div>
            <h2 className="text-xl font-semibold mb-1">Hello!</h2>
            <p className="text-gray-600 text-sm">{session.user.email}</p>
          </div>

          {/* Main Section */}
          <div className="w-full md:w-2/3 grid gap-4">
            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="relative flex items-center justify-between px-6 py-4 bg-white hover:bg-blue-50 border rounded-xl shadow transition"
            >
              <div className="flex items-center gap-3 text-blue-700">
                <FaRegHeart className="text-xl" />
                <span className="font-medium">Wishlist</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">View saved items</span>
                {!wishlistLoading && wishlistCount > 0 && (
                  <span className="ml-2 text-xs bg-blue-100 text-blue-800 font-semibold px-2 py-1 rounded-full">
                    {wishlistCount}
                  </span>
                )}
              </div>
            </Link>

            {/* Shopping Cart */}
            <Link
              href="/shoppingCard"
              className="relative flex items-center justify-between px-6 py-4 bg-white hover:bg-green-50 border rounded-xl shadow transition"
            >
              <div className="flex items-center gap-3 text-green-700">
                <FaShoppingCart className="text-xl" />
                <span className="font-medium">Shopping Cart</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">
                  Items in your cart
                </span>
                {!shoppingCartLoading && cartCount > 0 && (
                  <span className="ml-2 text-xs bg-green-100 text-green-800 font-semibold px-2 py-1 rounded-full">
                    {cartCount}
                  </span>
                )}
              </div>
            </Link>

            {/* Logout */}
            <button
              onClick={() => signOut({ redirectTo: "/" })}
              className="flex items-center justify-between px-6 py-4 bg-white hover:bg-red-50 border rounded-xl shadow transition text-red-700"
            >
              <div className="flex items-center gap-3">
                <MdOutlineLogout className="text-xl" />
                <span className="font-medium">Logout</span>
              </div>
              <span className="text-sm text-gray-500">End session</span>
            </button>
          </div>
        </>
      ) : (
        <p className="text-center text-red-500 text-lg w-full">
          You are not logged in.
        </p>
      )}
    </div>
  );
}

export default Account;
