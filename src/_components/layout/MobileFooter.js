import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import SocialMediaIcons from "../common/SocialMediaIcons";
import { capitalize } from "@/_utils/helpers";
function MobileFooter({ collections }) {
  const [openFirstAccordion, setOpenFirstAccordion] = useState(false);
  const [openSecondAccordion, setOpenSecondAccordion] = useState(false);
  const [openThirdAccordion, setOpenThirdAccordion] = useState(false);
  return (
    <>
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
          <p className="text-lg font-semibold text-custom-black">Categories</p>
          <span className="text-custom-white">
            {openSecondAccordion ? <FaMinus /> : <FaPlus />}
          </span>
        </button>
        {openSecondAccordion && (
          <div className="flex flex-col gap-3 mt-5">
            <ul className="flex flex-col gap-3 sm:gap-1">
              {collections.map((collection) => (
                <li key={collection.id}>
                  <Link href={`/collections/${collection.text.toLowerCase()}`}>
                    {capitalize(collection.text)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="block sm:hidden py-3">
        <button
          className="flex justify-between items-center w-full"
          onClick={() => setOpenThirdAccordion(!openThirdAccordion)}
        >
          <p className="text-lg font-semibold text-custom-black">Information</p>
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
    </>
  );
}

export default MobileFooter;
