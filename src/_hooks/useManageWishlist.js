import { useSession } from "next-auth/react";
import { useState } from "react";

import {
  getUserWishlistCardAction,
  setUserWishlistCardAction,
} from "@/lib/actions";
import { toast } from "react-hot-toast";
import {
  addWishlistItem,
  deleteWishlistItem,
  getAllWishlistItems,
} from "@/_utils/IndexedDb";

export function useManageWishlist(setWishlistProducts) {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState();

  const handleAddToWishlist = async (data) => {
    if (session?.user) {
      setIsLoading(true);
      const products = await getUserWishlistCardAction(session.user.email);
      const updatedProducts = [...products, data];
      await setUserWishlistCardAction(session.user.email, updatedProducts);
      setIsLoading(false);
      toast.success("Successfully added in wishlist cart");
    } else {
      await addWishlistItem(data);
      const products = await getAllWishlistItems();
      setWishlistProducts(products);
      toast.success("Successfully added in wishlist cart");
    }
  };

  const handleDeletefromWishlist = async (id) => {
    if (session?.user) {
      setIsLoading(true);
      const products = await getUserWishlistCardAction(session.user.email);
      const productsAfterDelete = products.filter((p) => p.id !== id);
      await setUserWishlistCardAction(session.user.email, productsAfterDelete);
      toast.success("Successfully Deleted");
      setIsLoading(false);
    } else {
      await deleteWishlistItem(id);
      const products = await getAllWishlistItems();
      setWishlistProducts(products);
      toast.success("Successfully Deleted");
    }
  };

  return {
    handleAddToWishlist,
    isLoading,
    handleDeletefromWishlist,
  };
}
