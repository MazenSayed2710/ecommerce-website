"use client";
import {
  addWishlistItem,
  deleteWishlistItem,
  getAllWishlistItems,
} from "@/_utils/IndexedDb";
import {
  getUserWishlistCardAction,
  setUserWishlistCardAction,
} from "@/lib/actions";
import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { data: session, status } = useSession();

  useEffect(
    function () {
      const loadAllWishlistItems = async () => {
        if (session?.user.email) {
          const products = await getUserWishlistCardAction(session?.user.email);
          setWishlistProducts(products);
        } else {
          const products = await getAllWishlistItems();
          setWishlistProducts(products);
        }
      };
      if (status !== "loading") {
        loadAllWishlistItems();
      }
    },
    [session, status]
  );

  const handleAddToWishlist = async (data) => {
    if (session?.user) {
      setIsLoading(true);
      const products = await getUserWishlistCardAction(session.user.email);
      const updatedProducts = [...products, data];
      await setUserWishlistCardAction(session.user.email, updatedProducts);
      setWishlistProducts(updatedProducts);
      toast.success("Successfully added in wishlist cart");
      setIsLoading(false);
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
      setWishlistProducts(productsAfterDelete);
      toast.success("Successfully Deleted");
      setIsLoading(false);
    } else {
      await deleteWishlistItem(id);
      const products = await getAllWishlistItems();
      setWishlistProducts(products);
      toast.success("Successfully Deleted");
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistProducts,
        wishlistProductsIds: wishlistProducts.map((p) => p.id),
        handleAddToWishlist,
        handleDeletefromWishlist,
        isLoading,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
export const useWishlist = () => useContext(WishlistContext);
