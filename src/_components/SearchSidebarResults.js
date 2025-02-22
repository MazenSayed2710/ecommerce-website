"use client";

import Image from "next/image";
import { formatNumberWithCommas } from "./helpers";
import Link from "next/link";

function SearchSidebarResults({ results, handleClose }) {
  if (!results) return;
  return (
    <>
      <div className="shadow-md !border-b-0 !py-3 font-semibold">
        Search results
      </div>
      <div className="flex flex-col gap-3 mt-3 overflow-y-scroll">
        {!results.length ? (
          <p className="text-custom-white">
            No products were found matching your selection.
          </p>
        ) : (
          results.map((product) => (
            <div key={product.id} className="flex gap-5">
              <Link
                href={`/collections/${product.mainCategorie}/${
                  product.id
                }-${product.name
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/^-|-$/g, "")}`}
                onClick={handleClose}
              >
                <div className="relative h-28 w-24">
                  <Image
                    alt="product-image"
                    src={product.images[0]}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <div>
                <Link
                  href={`/collections/${product.mainCategorie}/${
                    product.id
                  }-${product.name
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/^-|-$/g, "")}`}
                  className="font-semibold hover:text-blue-400"
                  onClick={handleClose}
                >
                  {product.name}
                </Link>
                <p className="text-custom-white">
                  ${formatNumberWithCommas(product.price)}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default SearchSidebarResults;
