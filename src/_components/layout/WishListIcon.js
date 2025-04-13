import { FaRegHeart } from "react-icons/fa";
function WishListIcon({ ids, isLoading }) {
  return (
    <div className="relative">
      <FaRegHeart />
      {!isLoading && (
        <span className="absolute top-[-8px] right-[-10px] text-xs bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
          {ids?.length}
        </span>
      )}
    </div>
  );
}

export default WishListIcon;
