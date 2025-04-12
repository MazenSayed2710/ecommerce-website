"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import {
  checkEmailExistingAction,
  getUserWishlistCardAction,
  setUserAction,
  setUserWishlistCardAction,
} from "@/lib/actions";
import {
  clearShoppingCart,
  clearWishlist,
  getAllShoppingItems,
  getAllWishlistItems,
} from "@/_utils/IndexedDb";
import { mergeUniqeProducts } from "@/_utils/helpers";

export default function SessionHandler() {
  const { data: session, status } = useSession();
  useEffect(() => {
    const setupUserWishlist = async () => {
      if (session?.user?.email) {
        const isExist = await checkEmailExistingAction(session.user.email);
        console.log(isExist);
        if (!isExist) {
          const shoppingCartProducts = await getAllShoppingItems();
          const wishlistProducts = await getAllWishlistItems();
          await setUserAction(
            session.user.email,
            shoppingCartProducts,
            wishlistProducts
          );
        } else {
          const guestWishlistProducts = await getAllWishlistItems();
          const userWishlistProducts = await getUserWishlistCardAction(
            session?.user.email
          );

          const mergedProducts = mergeUniqeProducts(
            guestWishlistProducts,
            userWishlistProducts
          );
          await setUserWishlistCardAction(session.user.email, mergedProducts);
        }
        await clearShoppingCart();
        await clearWishlist();
      }
    };

    if (status !== "loading") {
      setupUserWishlist();
    }
  }, [session?.user.email, status]);

  return null;
}
