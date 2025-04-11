import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import {
  getUserWishlistCardAction,
  setUserWishlistCardAction,
} from "@/lib/actions";
import { toast } from "react-hot-toast";

export function useManageWishlist() {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState();
  const [wishlistItems, setWishlistItems] = useState([]);

  const handleAddToWishlist = async (data) => {
    setIsLoading(true);
    const products = await getUserWishlistCardAction(session.user.email);
    const updatedProducts = [...products, data];
    await setUserWishlistCardAction(session.user.email, updatedProducts);
    toast.success("Successfully added in wishlist cart");
    setWishlistItems(updatedProducts);
    setIsLoading(false);
  };

  const handleDeletefromWishlist = async (id) => {
    setIsLoading(true);
    const products = await getUserWishlistCardAction(session.user.email);
    const productsAfterDelete = products.filter((p) => p.id !== id);
    await setUserWishlistCardAction(session.user.email, productsAfterDelete);
    toast.success("Successfully Deleted");
    setWishlistItems(productsAfterDelete);
    setIsLoading(false);
  };
  useEffect(() => {
    const getWishlistProducts = async () => {
      if (session?.user?.email) {
        const products = await getUserWishlistCardAction(session.user.email);
        setWishlistItems(products);
      }
    };
    getWishlistProducts();
  }, [session?.user?.email]);

  return {
    handleAddToWishlist,
    isLoading,
    handleDeletefromWishlist,
    wishlistItems,
    WishlistProductsIds: wishlistItems.map((p) => p.id),
  };
}
