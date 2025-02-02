import Header from "@/_components/Header";
import "./globals.css";
import Footer from "@/_components/Footer";
import StoreProvider from "@/_components/StoreProvider";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className="open">
          <Header />
          <main className="">{children}</main>
          <Footer />
        </body>
      </StoreProvider>
    </html>
  );
}
