import { ShoppingCardCountContext } from "@/_contexts/NumOfProductsContext";
import {
  addShoppingItem,
  getAllShoppingItems,
  updateShoppingItem,
} from "@/_utils/IndexedDb";

import {
  getUserShoppingCardAction,
  setUserShoppingCardAction,
} from "@/lib/actions";
import { useSession } from "next-auth/react";
import { useContext } from "react";
import toast from "react-hot-toast";

export function useAddToCard({
  data,
  quantity,
  currentColor,
  currentSize,
  activeImg,
  handleClose,
}) {
  const { data: session } = useSession();
  const { setShoppingCardCount } = useContext(ShoppingCardCountContext);
  const newproduct = {
    ...data,
    quantity,
    color: currentColor || null,
    size: currentSize || null,
    img: activeImg || data.images[0],
    id: `${data.id}-${currentColor}-${currentSize}`,
    total: Number(data.price) * quantity,
  };
  const addProduct = async () => {
    const allData = session?.user
      ? await getUserShoppingCardAction(session.user.email)
      : await getAllShoppingItems();
    const duplicatedProduct = allData.find((p) => p.id === newproduct.id);

    if (duplicatedProduct) {
      const updatedProduct = {
        ...duplicatedProduct,
        quantity: duplicatedProduct.quantity + quantity,
        total: (duplicatedProduct.quantity + quantity) * data.price,
      };
      if (session?.user) {
        const dataAfterEdit = allData.map((product) =>
          product.name === newproduct.name ? updatedProduct : product
        );
        await setUserShoppingCardAction(session.user.email, dataAfterEdit);
      } else {
        await updateShoppingItem(newproduct.id, updatedProduct);
      }
    } else {
      if (session?.user) {
        await setUserShoppingCardAction(session.user.email, [
          ...allData,
          newproduct,
        ]);
      } else {
        await addShoppingItem(newproduct);
      }
      setShoppingCardCount(allData.length + 1);
    }
    toast.success("Successfully added to card");
    handleClose?.();
  };
  return addProduct;
}
