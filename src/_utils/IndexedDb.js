import { openDB } from "idb";

const DB_NAME = "storeDatabase";
const DB_VERSION = 2;
const SHOPPING_STORE = "shoppingCard";
const WISHLIST_STORE = "wishList";

const initDB = async () => {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(SHOPPING_STORE)) {
        db.createObjectStore(SHOPPING_STORE, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
      if (!db.objectStoreNames.contains(WISHLIST_STORE)) {
        db.createObjectStore(WISHLIST_STORE, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    },
  });
};
export const addShoppingItem = async (item) => {
  const db = await initDB();
  const tx = db.transaction(SHOPPING_STORE, "readwrite");
  await tx.store.add(item);
  await tx.done;
};

export const getShoppingItem = async (id) => {
  const db = await initDB();
  return db.get(SHOPPING_STORE, id);
};

export const getAllShoppingItems = async () => {
  const db = await initDB();
  return db.getAll(SHOPPING_STORE);
};

export const updateShoppingItem = async (id, updatedItem) => {
  const db = await initDB();
  const tx = db.transaction(SHOPPING_STORE, "readwrite");
  await tx.store.put({ id, ...updatedItem });
  await tx.done;
};

export const deleteShoppingItem = async (id) => {
  const db = await initDB();
  const tx = db.transaction(SHOPPING_STORE, "readwrite");
  await tx.store.delete(id);
  await tx.done;
};

export const clearShoppingCart = async () => {
  const db = await initDB();
  const tx = db.transaction(SHOPPING_STORE, "readwrite");
  await tx.store.clear();
  await tx.done;
};
export const addWishlistItem = async (item) => {
  const db = await initDB();
  const tx = db.transaction(WISHLIST_STORE, "readwrite");
  await tx.store.add(item);
  await tx.done;
};

export const getWishlistItem = async (id) => {
  const db = await initDB();
  return db.get(WISHLIST_STORE, id);
};

export const getAllWishlistItems = async () => {
  const db = await initDB();
  return db.getAll(WISHLIST_STORE);
};

export const updateWishlistItem = async (id, updatedItem) => {
  const db = await initDB();
  const tx = db.transaction(WISHLIST_STORE, "readwrite");
  await tx.store.put({ id, ...updatedItem });
  await tx.done;
};

export const deleteWishlistItem = async (id) => {
  const db = await initDB();
  const tx = db.transaction(WISHLIST_STORE, "readwrite");
  await tx.store.delete(id);
  await tx.done;
};

export const clearWishlist = async () => {
  const db = await initDB();
  const tx = db.transaction(WISHLIST_STORE, "readwrite");
  await tx.store.clear();
  await tx.done;
};
