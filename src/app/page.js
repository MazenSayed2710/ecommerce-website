import TrendngCollections from "@/_components/TrendngCollections";
import ServiceSection from "@/_components/ServiceSection";
import HighlightSection from "@/_components/HighlightSection";
import Slider from "@/_components/Slider";
import TrindingProducts from "@/_components/TrindingProducts";
import BestSellingProducts from "@/_components/BestSellingProducts";

export const metadata = {
  title: "Kalles Shopify",
  description:
    "A sleek and powerful e-commerce app for creating and managing online stores effortlessly.",
};

export default async function Home() {
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
  Product buttons
  Hamburger menu
  bg-IMAGE
  handle errors
  `);
