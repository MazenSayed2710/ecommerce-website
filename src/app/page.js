import TrendngCollections from "@/_components/TrendngCollections";
import ServiceSection from "@/_components/ServiceSection";
import HighlightSection from "@/_components/HighlightSection";
import Slider from "@/_components/Slider";
import TrindingProducts from "@/_components/TrindingProducts";
import BestSellingProducts from "@/_components/BestSellingProducts";
import { auth } from "@/lib/auth";
import { getAllData } from "@/_utils/shoppingCardIndexedDb";

export const metadata = {
  title: "Kalles Shopify",
  description:
    "A sleek and powerful e-commerce app for creating and managing online stores effortlessly.",
};

export default async function Home() {
  const session = await auth();
  // console.log(session);
  // if (session.user) {
  //   const shoppingCardProducts = await getAllData();
  //   console.log(shoppingCardProducts);
  // }
  return (
    <>
      <Slider />
      <TrendngCollections />
      <TrindingProducts />
      <HighlightSection />
      <BestSellingProducts />
      <ServiceSection />
    </>
  );
}
console.log(`
  Hamburger menu
  handle errors
  `);
