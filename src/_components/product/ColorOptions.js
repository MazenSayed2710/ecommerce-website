function ColorOptions({
  data,
  setActiveImg,
  currentColor = null,
  setCurrentColor,
  displayText = true,
  circleSize = "large",
}) {
  const { colors } = data;
  const handleClick = (color) => {
    setCurrentColor(color.colorName);
    color.img && setActiveImg?.(color.img);
  };
  if (!colors) return;
  return (
    <div>
      {displayText && (
        <p className="font-bold uppercase mb-4 text-custom-black">
          color:<span className="ml-1">{currentColor}</span>
        </p>
      )}
      <div className="flex gap-3 mb-4">
        {colors.map((color) => (
          <button
            onClick={() => handleClick(color)}
            className={`${
              circleSize === "small"
                ? "sm:w-6 sm:h-6 w-5 h-5 border"
                : "w-8 h-8 border-2"
            }  rounded-full    ${
              currentColor === color.colorName
                ? "border-gray-700"
                : "border-gray-300"
            }`}
            style={{
              boxShadow: "inset 0px 0px 0 2px #ffffff",
              backgroundColor: color.color,
            }}
            key={color.color}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default ColorOptions;
