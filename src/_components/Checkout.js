"use client";

import { handleCheckout } from "@/app/_lib/actions";
import { useEffect } from "react";

export default function Checkout() {
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }
    // console.log("STRIPE_SECRET_KEY:", process.env.STRIPE_SECRET_KEY);
    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const req = await fetch("/api/checkout-session", { method: "POST" });
      const res = await req.json();
      console.log(res.session.url);
      if (req.ok) {
        // const { url } = await req.json();
        window.location.href = res.session.url;
      } else {
        console.error("Failed to create checkout session:", req.statusText);
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return (
    <form action={handleCheckout}>
      <section>
        <button type="submit" role="link">
          Checkout
        </button>
      </section>
      <style jsx>{`
        section {
          background: #ffffff;
          display: flex;
          flex-direction: column;
          width: 400px;
          height: 112px;
          border-radius: 6px;
          justify-content: space-between;
        }
        button {
          height: 36px;
          background: #556cd6;
          border-radius: 4px;
          color: white;
          border: 0;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
        }
        button:hover {
          opacity: 0.8;
        }
      `}</style>
    </form>
  );
}
