import Header from "@/_components/Header";
import "./globals.css";
import Footer from "@/_components/Footer";
import StoreProvider from "@/_components/StoreProvider";
import { Toaster } from "react-hot-toast";
import "react-loading-skeleton/dist/skeleton.css";
import { getCollections } from "./_lib/data-service";
import { Suspense } from "react";
import Spinner from "@/_components/Spinner";

export default async function RootLayout({ children }) {
  const collections = await getCollections();
  return (
    <html lang="en">
      <StoreProvider>
        <body>
          <Toaster position="top-center" reverseOrder={false} />
          <Header />
          <main>
            <Suspense fallback={<Spinner />}> {children}</Suspense>
          </main>
          <Footer collections={collections} />
        </body>
      </StoreProvider>
    </html>
  );
}
