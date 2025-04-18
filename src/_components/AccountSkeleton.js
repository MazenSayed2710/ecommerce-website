"use client";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import Skeleton from "react-loading-skeleton";

function AccountSkeleton() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row gap-10">
      {/* Sidebar Skeleton */}
      <div className="w-full md:w-1/3 bg-gray-100 rounded-xl p-6 flex flex-col items-center text-center shadow">
        <Skeleton circle width={80} height={80} className="mb-4" />
        <Skeleton width={96} height={24} className="mb-1" />
        <Skeleton width={128} height={16} />
      </div>

      {/* Main Section Skeleton */}
      <div className="w-full md:w-2/3 grid gap-4">
        {/* Wishlist Skeleton */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border rounded-xl shadow">
          <div className="flex items-center gap-3">
            <FaRegHeart className="text-xl text-gray-200" />
            <Skeleton width={80} height={20} />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton width={96} height={16} />
            <Skeleton circle width={20} height={20} />
          </div>
        </div>

        {/* Shopping Cart Skeleton */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border rounded-xl shadow">
          <div className="flex items-center gap-3">
            <FaShoppingCart className="text-xl text-gray-200" />
            <Skeleton width={128} height={20} />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton width={112} height={16} />
            <Skeleton circle width={20} height={20} />
          </div>
        </div>

        {/* Logout Skeleton */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border rounded-xl shadow">
          <div className="flex items-center gap-3">
            <MdOutlineLogout className="text-xl text-gray-200" />
            <Skeleton width={64} height={20} />
          </div>
          <Skeleton width={80} height={16} />
        </div>
      </div>
    </div>
  );
}

export default AccountSkeleton;
