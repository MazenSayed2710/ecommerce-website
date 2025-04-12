import { getAllWishlistItems } from "@/_utils/IndexedDb";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export function useWishlistIds(WishlistProducts, setWishlistProducts) {
  const { data: session } = useSession();

  useEffect(() => {
    const getWishlistProducts = async () => {
      if (!session?.user?.email) {
        console.log("here");
        const allData = await getAllWishlistItems();
        setWishlistProducts(allData);
      }
    };
    getWishlistProducts();
  }, [session?.user?.email, setWishlistProducts]);

  // return {  WishlistProducts };
}
