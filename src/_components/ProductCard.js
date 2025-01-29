import Image from "next/image";
import ProductHoverDetails from "./ProductHoverDetails";
import Link from "next/link";
function ProductCard({ data }) {
  return (
    <div className="relative">
      <div className="relative  overflow-hidden group aspect-[2/3]">
        <Image
          src={data.images[0]}
          alt="Product Image"
          fill
          className="object-cover h-full w-full animate-zoom-out group-hover:hidden"
        />
        <div className="hidden group-hover:block">
          <ProductHoverDetails data={data} />
        </div>
      </div>

      <Link
        href={`${data.mainCategorie}/${data.id}-${data.name
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "")}`}
        className="text-gray-800 font-semibold mt-2 hover:text-blue-400 duration-500"
      >
        {data.name}
      </Link>
      <p className="text-gray-custom">$30.00</p>
    </div>
  );
}

export default ProductCard;
