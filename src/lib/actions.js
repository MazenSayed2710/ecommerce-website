"use server";
import { auth, signIn, signOut } from "@/lib/auth";
import {
  getUserShoppingCard,
  searchProducts,
  setUserShoppingCard,
  signInwithSupabase,
  signUp,
} from "./data-service";
import { addData, getAllData, resetData } from "@/_utils/shoppingCardIndexedDb";

export async function signUpwithSupabase(formData) {
  console.log(formData.get("email"));
  console.log(formData.get("password"));
  await signUp({
    email: formData.get("email"),
    password: formData.get("password"),
  });
}

export async function handleSignIn(formData) {
  const data = await signInwithSupabase(formData);

  if (!data?.user) {
    return { error: "Invalide password or email" };
  }

  await signIn("credentials", {
    ...formData,
    redirect: false,
  });

  return { success: "Successfully sign In" };
}
export async function googleSignIn() {
  await signIn("google", { redirectTo: "/" });
}
export async function facebookSignIn() {
  await signIn("facebook", { redirectTo: "/" });
}
export async function signOutAccount() {
  await signOut();
}
export async function searchApi(search, collection) {
  const products = await searchProducts(search, collection);
  return products;
}
export async function addToCard(data) {
  await addData(data);
}

export async function setUserShoppingCardAction(email, products) {
  await setUserShoppingCard(email, products);
}
export async function getUserShoppingCardAction(email) {
  const data = await getUserShoppingCard(email);
  return data;
}
