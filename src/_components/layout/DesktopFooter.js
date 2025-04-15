import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import SocialMediaIcons from "../common/SocialMediaIcons";
import { capitalize } from "@/_utils/helpers";
import Link from "next/link";
function DesktopFooter({ collections }) {
  return (
    <div className="sm:flex gap-20 sm:justify-between max-w-[1200px] m-auto sm:flex-row flex-col justify-center items-center hidden">
      <div className="flex flex-col gap-3 ">
        <span className="font-bold text-2xl text-gray-900">kalles</span>
        <div className="flex items-center gap-3">
          <span>
            <CiLocationOn />
          </span>
          <p className="w-48">184 Main Rd E, St Albans VIC 3021, Australia</p>
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
          {collections.map((collection) => (
            <li key={collection.id}>
              <Link href={`/collections/${collection.text.toLowerCase()}`}>
                {capitalize(collection.text)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-3 ">
        <span className="font-bold text-2xl text-gray-900">Information</span>
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
  );
}

export default DesktopFooter;
