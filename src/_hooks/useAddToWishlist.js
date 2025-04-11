import {
  getUserWishlistCardAction,
  setUserWishlistCardAction,
} from "@/lib/actions";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

export function useAddToWishlist(data, setWishlistProductsIds) {
  const { data: session } = useSession();
  const handleAddToWishlist = async () => {
    if (session?.user) {
      const products = await getUserWishlistCardAction(session.user.email);
      const updatedProducts = [...products, data];
      await setUserWishlistCardAction(session.user.email, updatedProducts);
      const ids = updatedProducts.map((p) => p.id);
      setWishlistProductsIds(ids);
      toast.success("Successfully added in wishlist cart");
    }
  };

  return handleAddToWishlist;
}
