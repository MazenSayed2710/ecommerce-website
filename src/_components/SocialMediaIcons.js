import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function SocialMediaIcons() {
  return (
    <div className="flex text-gray-700 gap-4 text-lg">
      <button className="hover:text-blue-400">
        <FaFacebook />
      </button>
      <button className="hover:text-blue-400">
        <FaInstagram />
      </button>
      <button className="hover:text-blue-400">
        <FaXTwitter />
      </button>
      <button className="hover:text-blue-400">
        <FaLinkedin />
      </button>
    </div>
  );
}

export default SocialMediaIcons;
