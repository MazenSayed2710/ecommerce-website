function ProductStatus({ data }) {
  return (
    <>
      {(data.discount || data.isNew || !data.isAvailable) && (
        <div className=" absolute right-2 top-2 z-10 flex flex-col gap-2">
          {data.discount && (
            <span className="w-16 h-16 text-gray-100  rounded-full flex items-center justify-center bg-orange-500">
              -{data.discount}%
            </span>
          )}
          {data.isNew && (
            <span className="w-16 h-16 text-gray-100  rounded-full flex items-center justify-center bg-green-500">
              New
            </span>
          )}
          {!data.isAvailable && (
            <span className="w-16 h-16 text-gray-100  rounded-full flex items-center justify-center bg-gray-400 text-sm">
              Sold out
            </span>
          )}
        </div>
      )}
    </>
  );
}

export default ProductStatus;
