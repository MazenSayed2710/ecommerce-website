"use client";

import { getAllData } from "@/_utils/shoppingCardIndexedDb";
import { getUserShoppingCardAction } from "@/lib/actions";
import { useSession } from "next-auth/react";

import { createContext, useState, useEffect } from "react";

export const ShoppingCardCountContext = createContext(null);
export function NumOfProductsProvider({ children }) {
  const [shoppingCardCount, setShoppingCardCount] = useState(0);
  const { data: session } = useSession();
  useEffect(
    function () {
      async function countNumOfProducts() {
        if (session?.user) {
          const products = await getUserShoppingCardAction(session.user.email);
          setShoppingCardCount(products.length);
        } else {
          const products = await getAllData();
          setShoppingCardCount(products.length);
        }
      }
      countNumOfProducts();
    },
    [session?.user]
  );
  return (
    <ShoppingCardCountContext.Provider
      value={{ shoppingCardCount, setShoppingCardCount }}
    >
      {children}
    </ShoppingCardCountContext.Provider>
  );
}
