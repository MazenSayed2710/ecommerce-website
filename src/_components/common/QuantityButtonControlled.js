function QuantityButtonControlled({ value, setValue, inputWidth }) {
  return (
    <div className="flex items-center rounded-full border text-xl font-semibold border-gray-800 w-fit">
      <button
        className="px-4 py-1  hover:text-blue-400 "
        onClick={() => {
          setValue(Number(value) - 1);
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
          setValue(e.target.value);
        }}
      />

      <button
        className="px-4 py-1 hover:text-blue-400 "
        onClick={() => {
          setValue(Number(value) + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default QuantityButtonControlled;
