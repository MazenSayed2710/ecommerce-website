"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import {
  checkEmailExistingAction,
  getUserShoppingCardAction,
  getUserWishlistCardAction,
  setUserAction,
  setUserShoppingCardAction,
  setUserWishlistCardAction,
} from "@/lib/actions";
import {
  clearShoppingCart,
  clearWishlist,
  getAllShoppingItems,
  getAllWishlistItems,
} from "@/_utils/IndexedDb";
import { mergeProductQuantities, mergeUniqeProducts } from "@/_utils/helpers";
import { useWishlist } from "@/_contexts/WishlistProvider";

export default function SessionHandler() {
  const { data: session, status } = useSession();
  const { setWishlistProducts } = useWishlist();
  useEffect(() => {
    const setupUserWishlist = async () => {
      if (session?.user?.email) {
        const isExist = await checkEmailExistingAction(session.user.email);
        if (!isExist) {
          const [shoppingCartProducts, wishlistProducts] = await Promise.all([
            getAllShoppingItems(),
            getAllWishlistItems(),
          ]);
          await setUserAction(
            session.user.email,
            shoppingCartProducts,
            wishlistProducts
          );
        } else {
          // Wishlist Cart
          const [guestWishlistProducts, userWishlistProducts] =
            await Promise.all([
              getAllWishlistItems(),
              getUserWishlistCardAction(session?.user.email),
            ]);
          const mergedProducts = mergeUniqeProducts(
            guestWishlistProducts,
            userWishlistProducts
          );
          await setUserWishlistCardAction(session.user.email, mergedProducts);
          setWishlistProducts(mergedProducts);

          // Shopping Cart
          const storedProducts = await getAllShoppingItems();
          const data = await getUserShoppingCardAction(session.user.email);
          const uniqeData = mergeProductQuantities(storedProducts, data);
          await setUserShoppingCardAction(session.user.email, uniqeData);
        }
        await Promise.all([clearShoppingCart(), clearWishlist()]);
      }
    };

    if (status === "authenticated") {
      setupUserWishlist();
    }
  }, [session?.user.email, status, setWishlistProducts]);

  return null;
}
