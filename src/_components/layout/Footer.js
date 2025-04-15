"use client";
import Link from "next/link";
import MobileFooterMenu from "./MobileFooterMenu";
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";

function Footer({ collections }) {
  return (
    <>
      <div className="bg-gray-100 p-5 h-fit text-gray-500">
        <DesktopFooter collections={collections} />

        <MobileFooter collections={collections} />
      </div>
      <div className="bg-white py-2 px-5 text-center">
        <div className="max-w-[1200px] m-auto bg-white">
          <p>
            All Rights Reserved © 2025{" "}
            <Link href="/" className="text-blue-400">
              Kalles
            </Link>{" "}
            - Developed by Mazen
          </p>
        </div>
      </div>
      <div className="h-[60px] sm:hidden" />

      <MobileFooterMenu collections={collections} />
    </>
  );
}

export default Footer;
