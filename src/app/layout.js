import Header from "@/_components/Header";
import "./globals.css";
import Footer from "@/_components/Footer";
import StoreProvider from "@/_components/StoreProvider";
import { Toaster } from "react-hot-toast";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StoreProvider>
        <body>
          <Toaster position="top-center" reverseOrder={false} />
          <Header />
          <main className="">{children}</main>
          <Footer />
        </body>
      </StoreProvider>
    </html>
  );
}
