function ProductMeta({ data }) {
  const { isAvailable, categories } = data;
  return (
    <>
      <button className="font-semibold  w-fit hover:text-blue-400">
        Delivery & Return
      </button>
      <div>
        <p className="text-gray-500">
          Availability:
          <span className="text-gray-800 font-semibold ml-1">
            {isAvailable ? "In Stock" : "Out of stock"}
          </span>
        </p>
        <p className="text-gray-500">
          Categories:{" "}
          <span className="text-gray-800 font-semibold">
            {categories.join(",")}
          </span>
        </p>
        {/* <p className="text-gray-500">
        Tags:{" "}
        <span className="text-gray-800 font-semibold">
        {categories.join(",")}
        </span>
        </p> */}
      </div>
    </>
  );
}

export default ProductMeta;
