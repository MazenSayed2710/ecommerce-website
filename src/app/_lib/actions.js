"use server";
export const handleCheckout = async () => {
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
