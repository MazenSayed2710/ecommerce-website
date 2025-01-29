import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import Link from "next/link";
import SocialMediaIcons from "./SocialMediaIcons";

function Footer() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="flex  p-5 gap-20 justify-between max-w-[1200px] m-auto ">
          <div className="flex flex-col gap-3 text-gray-700">
            <span className="font-bold text-2xl text-gray-900">kalles</span>
            <div className="flex items-center gap-3">
              <span>
                <CiLocationOn />
              </span>
              <p className="w-48">
                184 Main Rd E, St Albans VIC 3021, Australia
              </p>
            </div>
            <div className="flex flex-col text-gray-700">
              <div className="flex items-center gap-3">
                <span>
                  <MdOutlineMail />
                </span>
                <p>contact@company.com</p>
              </div>
            </div>
            <div className="flex flex-col text-gray-700">
              <div className="flex items-center gap-3">
                <span>
                  <BsTelephone />
                </span>
                <p>+001 2233 456</p>
              </div>
            </div>
            <SocialMediaIcons />
          </div>

          <div className="flex flex-col gap-3 text-gray-700">
            <span className="font-bold text-2xl text-gray-900">Categories</span>
            <ul className="flex flex-col gap-1">
              <li>
                <Link href="">Men</Link>
              </li>
              <li>
                <Link href="">Women</Link>
              </li>
              <li>
                <Link href="">Accessories</Link>
              </li>
              <li>
                <Link href="">Shoes</Link>
              </li>
              <li>
                <Link href="">Watch</Link>
              </li>
              <li>
                <Link href="">Dress</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 text-gray-700">
            <span className="font-bold text-2xl text-gray-900">
              Information
            </span>
            <ul className="flex flex-col gap-1">
              <li>
                <Link href="">About us</Link>
              </li>
              <li>
                <Link href="">Contact us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white text-gray-700 py-2">
        <div className="max-w-[1200px] m-auto bg-white">
          <p>All Rights Reserved © 2025 Kalles - Developed by Mazen</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
