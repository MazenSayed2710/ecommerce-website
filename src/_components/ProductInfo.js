import { formatNumberWithCommas } from "./helpers";

function ProductInfo({ data }) {
  const { name, price, description } = data;
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-1">{name}</h1>
      <p className="text-gray-600 text-lg">${formatNumberWithCommas(price)}</p>
      <p className="text-base text-custom-white mt-5">{description}</p>
    </div>
  );
}

export default ProductInfo;
