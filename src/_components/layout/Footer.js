"use client";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import Link from "next/link";
import SocialMediaIcons from "../common/SocialMediaIcons";
import { useState } from "react";
import MobileFooterMenu from "./MobileFooterMenu";

function Footer({ collections }) {
  const [openFirstAccordion, setOpenFirstAccordion] = useState(false);
  const [openSecondAccordion, setOpenSecondAccordion] = useState(false);
  const [openThirdAccordion, setOpenThirdAccordion] = useState(false);
  return (
    <>
      <div className="bg-gray-100 p-5 h-fit text-gray-500">
        <div className="sm:flex gap-20 sm:justify-between max-w-[1200px] m-auto sm:flex-row flex-col justify-center items-center hidden">
          <div className="flex flex-col gap-3 ">
            <span className="font-bold text-2xl text-gray-900">kalles</span>
            <div className="flex items-center gap-3">
              <span>
                <CiLocationOn />
              </span>
              <p className="w-48">
                184 Main Rd E, St Albans VIC 3021, Australia
              </p>
            </div>
            <div className="flex flex-col ">
              <div className="flex items-center gap-3">
                <span>
                  <MdOutlineMail />
                </span>
                <p>contact@company.com</p>
              </div>
            </div>
            <div className="flex flex-col ">
              <div className="flex items-center gap-3">
                <span>
                  <BsTelephone />
                </span>
                <p>+001 2233 456</p>
              </div>
            </div>
            <SocialMediaIcons />
          </div>

          <div className="flex flex-col gap-3 ">
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

          <div className="flex flex-col gap-3 ">
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
        <div className="block sm:hidden py-3">
          <button
            className="flex justify-between items-center w-full"
            onClick={() => setOpenFirstAccordion(!openFirstAccordion)}
          >
            <p className="text-lg font-semibold text-custom-black">
              Get in touch
            </p>
            <span className="text-custom-white">
              {openFirstAccordion ? <FaMinus /> : <FaPlus />}
            </span>
          </button>
          {openFirstAccordion && (
            <div className="flex flex-col gap-3 mt-5">
              <span className="font-bold text-4xl text-gray-900">kalles</span>
              <div className="flex items-center gap-3">
                <span>
                  <CiLocationOn />
                </span>
                <p className="sm:w-48">
                  184 Main Rd E, St Albans VIC 3021, Australia
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <span>
                    <MdOutlineMail />
                  </span>
                  <p>contact@company.com</p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <span>
                    <BsTelephone />
                  </span>
                  <p>+001 2233 456</p>
                </div>
              </div>
              <SocialMediaIcons />
            </div>
          )}
        </div>

        <div className="block sm:hidden py-3">
          <button
            className="flex justify-between items-center w-full"
            onClick={() => setOpenSecondAccordion(!openSecondAccordion)}
          >
            <p className="text-lg font-semibold text-custom-black">
              Categories
            </p>
            <span className="text-custom-white">
              {openSecondAccordion ? <FaMinus /> : <FaPlus />}
            </span>
          </button>
          {openSecondAccordion && (
            <div className="flex flex-col gap-3 mt-5">
              <ul className="flex flex-col gap-3 sm:gap-1">
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
          )}
        </div>

        <div className="block sm:hidden py-3">
          <button
            className="flex justify-between items-center w-full"
            onClick={() => setOpenThirdAccordion(!openThirdAccordion)}
          >
            <p className="text-lg font-semibold text-custom-black">
              Information
            </p>
            <span className="text-custom-white">
              {openThirdAccordion ? <FaMinus /> : <FaPlus />}
            </span>
          </button>
          {openThirdAccordion && (
            <div className="flex flex-col gap-3 mt-5">
              <ul className="flex flex-col gap-3 sm:gap-1">
                <li>
                  <Link href="">About us</Link>
                </li>
                <li>
                  <Link href="">Contact us</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
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
      <MobileFooterMenu collections={collections} />
    </>
  );
}

export default Footer;
