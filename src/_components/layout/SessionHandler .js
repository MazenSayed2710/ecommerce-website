"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { checkEmailExistingAction, setUserAction } from "@/lib/actions";
import {
  clearShoppingCart,
  clearWishlist,
  getAllShoppingItems,
  getAllWishlistItems,
} from "@/_utils/IndexedDb";

export default function SessionHandler() {
  const { data: session, status } = useSession();
  useEffect(() => {
    const setupUserWishlist = async () => {
      if (session?.user?.email) {
        const isExist = await checkEmailExistingAction(session.user.email);
        if (!isExist) {
          const shoppingCartProducts = await getAllShoppingItems();
          const wishlistProducts = await getAllWishlistItems();
          await setUserAction(
            session.user.email,
            shoppingCartProducts,
            wishlistProducts
          );
          await clearShoppingCart();
          await clearWishlist();
        }
      }
    };

    if (status === "authenticated") {
      setupUserWishlist();
    }
  }, [session, status]);

  return null;
}
