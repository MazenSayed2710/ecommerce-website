import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import Credentials from "next-auth/providers/credentials";
import { signInwithSupabase } from "@/lib/data-service";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    Facebook,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let data = await signInwithSupabase({
          email: credentials.email,
          password: credentials.password,
        });

        if (!data?.user) {
          throw new Error("Invalid email or password");
        }
        return data.user;
      },
    }),
  ],
  pages: {
    signIn: "/signIn",
  },
});
