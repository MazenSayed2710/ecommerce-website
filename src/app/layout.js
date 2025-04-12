import Header from "@/_components/layout/Header";
import "./globals.css";
import Footer from "@/_components/layout/Footer";
import StoreProvider from "@/_components/StoreProvider";
import { Toaster } from "react-hot-toast";
import "react-loading-skeleton/dist/skeleton.css";
import { getCollections } from "../lib/data-service";
import { Suspense } from "react";
import Spinner from "@/_components/common/Spinner";
import { SessionProvider } from "next-auth/react";
import { WishlistProvider } from "@/_contexts/WishlistContext";
import { auth } from "@/lib/auth";
export default async function RootLayout({ children }) {
  const collections = await getCollections();
  const session = await auth();
  return (
    <html lang="en">
      <SessionProvider>
        <StoreProvider>
          <WishlistProvider>
            <body>
              <Toaster position="top-center" reverseOrder={false} />
              <Header collections={collections} session={session} />
              <main>
                <Suspense fallback={<Spinner />}> {children}</Suspense>
              </main>
              {/* <Footer collections={collections} /> */}
            </body>
          </WishlistProvider>
        </StoreProvider>
      </SessionProvider>
    </html>
  );
}
