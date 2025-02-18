"use client";
import { useSelector } from "react-redux";
import ShoppingCardProduct from "./ShoppingCardProduct";
import { formatNumberWithCommas } from "./helpers";
import { useState } from "react";

function ShoppingCardContent() {
  const products = useSelector((state) => state.shoppingCard.products);
  const suptotal = products.reduce((acc, cur) => acc + cur.total, 0);
  const [isChecked, setIsChecked] = useState(false);
  const handleSubmit = async () => {
    try {
      const req = await fetch("/api/checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ products }),
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

  if (!products) return;
  return (
    <div className="max-w-[1200px] m-auto py-16">
      <div className="grid grid-cols-[40%_20%_20%_20%] font-semibold uppercase text-custom-black py-5 ">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>
      <div className="py-5">
        {products.map((product) => (
          <ShoppingCardProduct data={product} key={product.id} />
        ))}
      </div>

      <div className="flex flex-col items-end text-custom-white gap-3">
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
          className="bg-blue-400 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-500"
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
