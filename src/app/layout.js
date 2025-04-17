import Header from "@/_components/layout/Header";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import "react-loading-skeleton/dist/skeleton.css";
import { getCollections } from "../lib/data-service";
import { Suspense } from "react";
import Spinner from "@/_components/common/Spinner";
import { SessionProvider } from "next-auth/react";
import { WishlistProvider } from "@/_contexts/WishlistProvider";
import { auth } from "@/lib/auth";
import ShoppingCartProvider from "@/_contexts/ShoppingCartProvider";
import Footer from "@/_components/layout/Footer";
import PopupModalProvider from "@/_contexts/PopupModalProvider";
export default async function RootLayout({ children }) {
  const collections = await getCollections();
  const session = await auth();
  return (
    <html lang="en">
      <SessionProvider>
        <WishlistProvider>
          <ShoppingCartProvider>
            <PopupModalProvider>
              <body className="min-h-screen flex flex-col">
                <Toaster position="top-center" reverseOrder={false} />
                <Header collections={collections} session={session} />
                <main className="flex-grow">
                  <Suspense fallback={<Spinner />}> {children}</Suspense>
                </main>
                <Footer collections={collections} />
              </body>
            </PopupModalProvider>
          </ShoppingCartProvider>
        </WishlistProvider>
      </SessionProvider>
    </html>
  );
}
