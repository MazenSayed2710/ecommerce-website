import Image from "next/image";
import { capitalize } from "../../_utils/helpers";
import Link from "next/link";
function Collection({ collection }) {
  return (
    <Link
      href={`/collections/${collection.text.toLowerCase()}`}
      className="relative aspect-[2.5/3] grid items-end justify-center overflow-hidden group"
    >
      <Image
        src={collection.img}
        alt=""
        className="object-cover group-hover:scale-110 duration-500"
        fill
        quality={100}
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
      />

      <button
        className="absolute hover:text-gray-100 hover:bg-black duration-500 bottom-2 sm:bottom-5 left-1/2 
          transform -translate-x-1/2 w-fit bg-gray-100 font-semibold md:px-8 md:py-3 px-4 py-2 text-sm md:text-lg z-10 cursor-pointer"
      >
        {capitalize(collection.text)}
      </button>
    </Link>
  );
}

export default Collection;
