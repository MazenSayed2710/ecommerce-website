function Availability({ products }) {
  const numOfAvailable = products.filter(
    (product) => product.isAvailable === true
  ).length;
  const numOfOutOfStock = products.filter(
    (product) => product.isAvailable === false
  ).length;

  return (
    <div>
      <h2 className="font-semibold w-fit py-1 mb-3 relative before:absolute before:w-16 before:h-[2px] before:bg-black before:left-0 before:bottom-0">
        Availability
      </h2>
      <div>
        <div>
          <input
            type="checkbox"
            name="in-stock"
            id="in-stock"
            className="mr-2"
          />
          <label htmlFor="in-stock">In Stock ({numOfAvailable})</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="out-stock"
            id="out-stock"
            className="mr-2"
          />
          <label htmlFor="out-stock">Out Of Stock ({numOfOutOfStock})</label>
        </div>
      </div>
    </div>
  );
}

export default Availability;
