"use client";
import { capitalize } from "./helpers";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IoMdCheckmark } from "react-icons/io";

function Color({ products, handleClose }) {
  const searchParams = useSearchParams();
  const urlSearchParams = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const router = useRouter();
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
          <button
            className="flex items-center gap-2 group"
            key={color.color}
            onClick={() => {
              urlSearchParams.delete("color", color.colorName);
              !searchParams.getAll("color").includes(color.colorName) &&
                urlSearchParams.append("color", color.colorName);
              router.push(`${pathname}?${urlSearchParams.toString()}`);
              handleClose();
            }}
          >
            <span
              className="w-6 h-6 rounded-full flex items-center justify-center text-white"
              style={{ backgroundColor: color.color }}
            >
              {searchParams.getAll("color").includes(color.colorName) && (
                <IoMdCheckmark />
              )}
            </span>
            <span
              className={`group-hover:text-blue-400 ${
                searchParams.getAll("color").includes(color.colorName) &&
                "text-blue-400"
              }`}
            >
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
