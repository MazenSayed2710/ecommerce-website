"use client";
import { capitalize } from "../../_utils/helpers";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IoMdCheckmark } from "react-icons/io";

function Color({ products, handleClose }) {
  const searchParams = useSearchParams();
  const urlSearchParams = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const router = useRouter();

  const colors = products
    .filter((p) => p.colors)
    .flatMap((p) =>
      p.colors.map((c) => ({
        colorName: c.colorName.toLowerCase(),
        color: c.color,
      }))
    );

  const uniqueColors = Array.from(
    new Map(colors.map((item) => [JSON.stringify(item), item])).values()
  );

  const handleClick = (colorName) => {
    searchParams.getAll("color").includes(colorName)
      ? urlSearchParams.delete("color", colorName)
      : urlSearchParams.append("color", colorName);
    router.push(`${pathname}?${urlSearchParams.toString()}`);
    handleClose();
  };
  return (
    <div>
      <h2 className="font-semibold w-fit py-1 mb-3 relative before:absolute before:w-16 before:h-[2px] before:bg-black before:left-0 before:bottom-0">
        Color
      </h2>

      <div className="flex flex-col gap-3 font-semibold">
        {uniqueColors.map((color) => {
          const isSelected = searchParams
            .getAll("color")
            .includes(color.colorName);
          return (
            <button
              className="flex items-center gap-2 group"
              key={color.color}
              onClick={() => handleClick(color.colorName)}
            >
              <span
                className="w-6 h-6 rounded-full flex items-center justify-center text-white"
                style={{ backgroundColor: color.color }}
              >
                {isSelected && <IoMdCheckmark />}
              </span>
              <span
                className={`group-hover:text-blue-400 ${
                  isSelected && "text-blue-400"
                }`}
              >
                {capitalize(color.colorName)} (
                {colors.filter((c) => c.colorName === color.colorName).length})
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Color;
