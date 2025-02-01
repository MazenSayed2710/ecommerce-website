function Quantity({ value, setValue, inputWidth, handleChange = null }) {
  return (
    <div className="flex items-center rounded-full border-2 text-xl font-semibold border-gray-800 w-fit">
      <button
        className="px-4 py-1  hover:text-blue-400 "
        onClick={() => {
          setValue(Number(value) - 1);
          handleChange && handleChange(Number(value) - 1);
        }}
        disabled={value === 1}
      >
        -
      </button>
      <input
        type="number"
        value={value}
        className={`px-4 py-1 border-t border-b ${inputWidth} text-center`}
        onChange={(e) => {
          console.log("ll");
          handleChange && handleChange(e.target.value);
          setValue(e.target.value);
        }}
      />

      <button
        className="px-4 py-1 hover:text-blue-400 "
        onClick={() => {
          setValue(Number(value) + 1);
          handleChange && handleChange(Number(value) + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default Quantity;
