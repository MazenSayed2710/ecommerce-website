"use client";
import { useSelector } from "react-redux";

function ShoppingCard() {
  const ids = useSelector((state) => state.shoppingCard.ids);
  const idss = useSelector((state) => state.wishlist.ids);
  console.log("ShoppingCard", ids);
  console.log("wishlist", idss);
  return <div></div>;
}

export default ShoppingCard;
