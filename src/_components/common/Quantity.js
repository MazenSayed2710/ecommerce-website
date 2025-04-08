function Quantity({ value, setValue = null, inputWidth, handleChange = null }) {
  return (
    <div className="flex items-center rounded-full border text-xl font-semibold border-gray-800 w-fit">
      <button
        className="px-4 py-1  hover:text-blue-400 "
        onClick={() => {
          setValue && setValue(Number(value) - 1);
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
          handleChange && handleChange(e.target.value);
          setValue && setValue(e.target.value);
        }}
      />

      <button
        className="px-4 py-1 hover:text-blue-400 "
        onClick={() => {
          setValue && setValue(Number(value) + 1);
          handleChange && handleChange(Number(value) + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default Quantity;
