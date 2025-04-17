"use client";

import {
  addShoppingItem,
  getAllShoppingItems,
  updateShoppingItem,
  deleteShoppingItem,
} from "@/_utils/IndexedDb";
import {
  getUserShoppingCardAction,
  setUserShoppingCardAction,
} from "@/lib/actions";
import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const ShoppingContext = createContext(null);

function ShoppingCartProvider({ children }) {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [shoppingCartProducts, setShoppingCartProducts] = useState([]);

  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    async function storeData() {
      if (hasLoaded) return;
      setIsLoading(true);
      const data = session?.user
        ? await getUserShoppingCardAction(session.user.email)
        : await getAllShoppingItems();
      setShoppingCartProducts(data);
      setIsLoading(false);
      setHasLoaded(true);
    }

    status !== "loading" && storeData();
  }, [session?.user, status, hasLoaded]);

  const handleAddToShoppingCart = async (newproduct, quantity) => {
    const allData = session?.user
      ? await getUserShoppingCardAction(session.user.email)
      : await getAllShoppingItems();
    const duplicatedProduct = allData.find((p) => p.id === newproduct.id);

    if (duplicatedProduct) {
      const updatedProduct = {
        ...duplicatedProduct,
        quantity: duplicatedProduct.quantity + quantity,
        total:
          (duplicatedProduct.quantity + quantity) * duplicatedProduct.price,
      };

      // Add duplicated product to the cart

      const dataAfterEdit = allData.map((product) =>
        product.name === newproduct.name ? updatedProduct : product
      );
      if (session?.user) {
        await setUserShoppingCardAction(session.user.email, dataAfterEdit);
        setShoppingCartProducts(dataAfterEdit);
      } else {
        await updateShoppingItem(newproduct.id, updatedProduct);
        setShoppingCartProducts([...allData, updatedProduct]);
      }
    } else {
      // Add the product to the cart (in case of it unique)
      if (session?.user) {
        await setUserShoppingCardAction(session.user.email, [
          ...allData,
          newproduct,
        ]);
      } else {
        await addShoppingItem(newproduct);
      }
      setShoppingCartProducts([...allData, newproduct]);
    }
    toast.success("Successfully added to card");
  };

  const handleDeleteFromShoppingCart = async (productId) => {
    setIsUpdating(productId);
    const allData = session?.user
      ? await getUserShoppingCardAction(session.user.email)
      : await getAllShoppingItems();
    const dataAfterDelete = allData.filter((p) => p.id !== productId);
    if (session?.user) {
      await setUserShoppingCardAction(session.user.email, dataAfterDelete);
    } else {
      await deleteShoppingItem(productId);
    }
    setShoppingCartProducts(dataAfterDelete);
    toast.success("Successfully deleted");
    setIsUpdating("");
  };

  const handleUpdateShoppingCart = async (
    productId,
    updatedProduct,
    editOrUpdate = "update"
  ) => {
    editOrUpdate === "update" && setIsUpdating(productId);
    const allData = session?.user
      ? await getUserShoppingCardAction(session.user.email)
      : await getAllShoppingItems();
    const dataAfterUpdate = allData.map((p) =>
      p.id === productId ? updatedProduct : p
    );
    if (session?.user) {
      await setUserShoppingCardAction(session.user.email, dataAfterUpdate);
    } else {
      await updateShoppingItem(productId, updatedProduct);
    }
    setShoppingCartProducts(dataAfterUpdate);
    editOrUpdate === "update" && setIsUpdating("");
  };

  return (
    <ShoppingContext.Provider
      value={{
        isLoading,
        shoppingCartProducts,
        handleAddToShoppingCart,
        handleDeleteFromShoppingCart,
        handleUpdateShoppingCart,
        isUpdating,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
}
export const useShoppingCart = () => useContext(ShoppingContext);
export default ShoppingCartProvider;
