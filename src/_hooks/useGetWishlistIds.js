import { getUserWishlistCardAction } from "@/lib/actions";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export function useWishlistIds(setIds) {
  const { data: session } = useSession();
  useEffect(
    function () {
      const getWishListProductsIds = async () => {
        if (session?.user) {
          const ids = (await getUserWishlistCardAction(session.user.email)).map(
            (p) => p.id
          );
          setIds(ids);
        }
      };
      getWishListProductsIds();
      return () => getWishListProductsIds();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [session?.user.email, setIds]
  );
}
