import { openDB } from "idb";

const DB_NAME = "storeDatabase";
const STORE_NAME = "shoppingCard";

const initDB = async () => {
  return openDB(DB_NAME, 3, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    },
  });
};

export const addData = async (data) => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, "readwrite");
  await tx.store.add(data);
  await tx.done;
};

export const getData = async (id) => {
  const db = await initDB();
  return db.get(STORE_NAME, id);
};

export const getAllData = async () => {
  const db = await initDB();
  return db.getAll(STORE_NAME);
};

export const updateData = async (id, newData) => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, "readwrite");
  await tx.store.put({ id, ...newData });
  await tx.done;
};

export const deleteData = async (id) => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, "readwrite");
  await tx.store.delete(id);
  await tx.done;
};
export const resetData = async () => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, "readwrite");
  await tx.store.clear(); // This removes all data from the object store
  await tx.done;
};
