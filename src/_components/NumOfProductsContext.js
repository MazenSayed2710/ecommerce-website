"use client";

import { getAllData } from "@/_utils/shoppingCardIndexedDb";
import { getUserShoppingCardAction } from "@/lib/actions";
import { useSession } from "next-auth/react";

import { createContext, useState, useEffect } from "react";

export const NumOfProducts = createContext(null);
export function NumOfProductsProvider({ children }) {
  const [shoppingCard, setShoppingCard] = useState(0);
  const { data: session } = useSession();
  useEffect(
    function () {
      async function countNumOfProducts() {
        if (session?.user) {
          const products = await getUserShoppingCardAction(session.user.email);
          setShoppingCard(products.length);
        } else {
          const products = await getAllData();
          setShoppingCard(products.length);
        }
      }
      countNumOfProducts();
    },
    [session?.user]
  );
  return (
    <NumOfProducts.Provider value={{ shoppingCard, setShoppingCard }}>
      {children}
    </NumOfProducts.Provider>
  );
}
