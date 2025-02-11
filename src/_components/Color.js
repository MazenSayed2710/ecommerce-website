import { capitalize } from "./helpers";

function Color({ products }) {
  const colors = products
    .filter((product) => product.colors)
    .map((product) =>
      product.colors.map((color) => ({
        colorName: color.colorName.toLowerCase(),
        color: color.color,
      }))
    )
    .reduce((acc, curr) => [...acc, ...curr], []);

  const uniqueColors = Array.from(
    new Map(colors.map((item) => [JSON.stringify(item), item])).values()
  );
  return (
    <div>
      <h2 className="font-semibold w-fit py-1 mb-3 relative before:absolute before:w-16 before:h-[2px] before:bg-black before:left-0 before:bottom-0">
        Color
      </h2>

      <div className="flex flex-col gap-3 font-semibold">
        {uniqueColors.map((color) => (
          <button className="flex items-center gap-2 group" key={color.color}>
            <span
              className="w-4 h-4 rounded-full "
              style={{ backgroundColor: color.color }}
            ></span>
            <span className="group-hover:text-blue-400">
              {capitalize(color.colorName)} (
              {colors.filter((c) => c.colorName === color.colorName).length})
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Color;
