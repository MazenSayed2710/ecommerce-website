import Link from "next/link";
import { formatNumberWithCommas } from "./helpers";

function ProductInfo({ data, isPopup }) {
  const { name, price, description } = data;
  return (
    <div>
      {isPopup ? (
        <Link
          href={`/collections/${data.mainCategorie}/${data.id}-${data.name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "")}`}
          className="text-2xl font-semibold mb-1 hover:text-blue-400 duration-500"
        >
          {data.name}
        </Link>
      ) : (
        <h1 className="text-2xl font-semibold mb-1">{name}</h1>
      )}
      <p className="text-gray-600 text-lg">${formatNumberWithCommas(price)}</p>
      <p className="text-base text-custom-white mt-5">{description}</p>
    </div>
  );
}

export default ProductInfo;
