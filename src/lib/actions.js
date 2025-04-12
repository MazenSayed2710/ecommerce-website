"use server";
import { signIn } from "@/lib/auth";
import {
  checkEmailExisting,
  getUserShoppingCard,
  getUserWishlistCard,
  searchProducts,
  setUser,
  setUserShoppingCard,
  setUserWishlistCard,
  signInwithSupabase,
  signUp,
} from "./data-service";
import { revalidatePath } from "next/cache";

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
export async function searchApi(search, collection) {
  const products = await searchProducts(search, collection);
  return products;
}

export async function checkEmailExistingAction(email) {
  const isExist = await checkEmailExisting(email);
  return isExist;
}
export async function setUserAction(
  email,
  shoppingCartProducts,
  wishlistProductsCart
) {
  await setUser(email, shoppingCartProducts, wishlistProductsCart);
}
export async function setUserShoppingCardAction(email, products) {
  await setUserShoppingCard(email, products);
}
export async function getUserShoppingCardAction(email) {
  const data = await getUserShoppingCard(email);
  return data;
}
export async function setUserWishlistCardAction(email, products) {
  await setUserWishlistCard(email, products);
  revalidatePath("/", "layout");
}
export async function getUserWishlistCardAction(email) {
  const data = await getUserWishlistCard(email);
  return data;
}
