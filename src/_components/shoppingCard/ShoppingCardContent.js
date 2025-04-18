"use client";
import ShoppingCardProduct from "./ShoppingCardProduct";
import { formatNumberWithCommas } from "../../_utils/helpers";
import { useState } from "react";
import ShoppingCardProductSkeleton from "./ShoppingCardProductSkeleton";
import { useShoppingCart } from "@/_contexts/ShoppingCartProvider";

function ShoppingCardContent() {
  const { shoppingCartProducts, isLoading } = useShoppingCart();
  const suptotal = shoppingCartProducts.reduce(
    (acc, cur) => acc + cur.total,
    0
  );
  const [isChecked, setIsChecked] = useState(false);
  console.log(shoppingCartProducts);
  const handleSubmit = async () => {
    try {
      const req = await fetch("/api/checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ products: shoppingCartProducts }),
      });
      if (req.ok) {
        const { url } = await req.json();
        window.location.href = url;
      } else {
        console.error("Failed to create checkout session:", req.statusText);
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return (
    <div className="max-w-[1200px] m-auto py-16">
      <div className="grid-cols-[40%_20%_20%_20%] font-semibold uppercase text-custom-black py-5 hidden sm:grid border-b-[1px] border-gray-300">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>
      <div className="py-5">
        {isLoading ? (
          <ShoppingCardProductSkeleton />
        ) : shoppingCartProducts?.length ? (
          shoppingCartProducts.map((product) => (
            <ShoppingCardProduct data={product} key={product.id} />
          ))
        ) : (
          <p>No products in your shopping cart.</p>
        )}
      </div>

      <div className="flex flex-col items-center sm:items-end text-custom-white gap-3 px-5">
        <p className="uppercase font-semibold text-black text-xl">
          suptotal:
          <span className="ml-3">${formatNumberWithCommas(suptotal)}</span>
        </p>
        <p>Taxes and shipping calculated at checkout</p>
        <div className="flex items-center  gap-3">
          <input
            type="checkbox"
            value="terms"
            id="terms"
            name="terms"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <label htmlFor="terms">I agree with the terms and conditions.</label>
        </div>
        <button
          className="bg-blue-400 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-500 sm:w-auto w-full"
          disabled={!isChecked}
          onClick={handleSubmit}
        >
          Check Out
        </button>
      </div>
    </div>
  );
}

export default ShoppingCardContent;
