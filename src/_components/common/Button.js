import Link from "next/link";

function Button({ children, href = "", className }) {
  return (
    <Link
      href={href}
      className={`absolute hover:text-gray-100 hover:bg-black duration-500 bottom-5 left-1/2 
      transform -translate-x-1/2 w-fit bg-gray-100 font-semibold px-8 py-3 z-10 cursor-pointer ${className}`}
    >
      {children}
    </Link>
  );
}

export default Button;
