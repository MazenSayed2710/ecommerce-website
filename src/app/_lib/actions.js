"use server";
import { signIn, signOut } from "@/lib/auth";
import { signInwithSupabase, signUp } from "./data-service";

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
