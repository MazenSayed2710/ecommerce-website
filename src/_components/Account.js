import { signOutAccount } from "@/lib/actions";
import Image from "next/image";
import { MdOutlineLogout } from "react-icons/md";

function Account({ name, img }) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={img}
        width={40}
        height={40}
        alt="account image"
        className="rounded-full"
      />
      <p className="text-gray-700 text-sm">{name}</p>
      <button className="ml-5" onClick={signOutAccount}>
        <MdOutlineLogout />
      </button>
    </div>
  );
}

export default Account;
