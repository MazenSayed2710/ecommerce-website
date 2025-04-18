"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Sizes({ products, handleClose }) {
  const searchParams = useSearchParams();
  const urlSearchParams = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const router = useRouter();
  const sizes = products
    .filter((product) => product.sizes)
    .flatMap((product) => product.sizes);

  const uniqueSizes = Array.from(new Set(sizes));

  const handleSizeChange = (e) => {
    e.target.checked
      ? urlSearchParams.append("size", e.target.name)
      : urlSearchParams.delete("size", e.target.name);
    router.push(`${pathname}?${urlSearchParams.toString()}`);
    handleClose();
  };
  return (
    <div>
      <h2 className="font-semibold w-fit py-1 mb-3 relative before:absolute before:w-16 before:h-[2px] before:bg-black before:left-0 before:bottom-0">
        Size
      </h2>
      <div>
        {uniqueSizes.map((size) => (
          <div key={size}>
            <input
              type="checkbox"
              name={size}
              id={size}
              className="mr-2"
              onChange={handleSizeChange}
              checked={
                Array.isArray(searchParams.getAll("size"))
                  ? searchParams.getAll("size")?.includes(size)
                  : [searchParams.getAll("size")].includes(size)
              }
            />
            <label htmlFor={size} className="uppercase">
              {size} ({sizes.filter((s) => s === size).length})
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sizes;
