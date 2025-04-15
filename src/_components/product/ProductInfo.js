import Link from "next/link";
import { formatNumberWithCommas } from "../../_utils/helpers";

function ProductInfo({ data, isPopup }) {
  const { name, price, description } = data;
  const finalPrice = data.discount
    ? price - price * (data.discount / 100)
    : price;
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
      <div className="flex items-center gap-2">
        <p
          className={`text-gray-600 text-2xl font-semibold ${
            data.discount && "line-through"
          }`}
        >
          ${formatNumberWithCommas(price)}
        </p>
        {data.discount && (
          <p className="text-2xl font-semibold text-red-500">
            ${formatNumberWithCommas(finalPrice)}
          </p>
        )}
      </div>
      <p className="text-base text-custom-white mt-5">{description}</p>
    </div>
  );
}

export default ProductInfo;
