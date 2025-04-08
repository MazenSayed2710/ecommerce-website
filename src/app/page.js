import TrendngCollections from "@/_components/layout/TrendngCollections";
import ServiceSection from "@/_components/layout/ServiceSection";
import HighlightSection from "@/_components/layout/HighlightSection";
import Slider from "@/_components/layout/Slider";
import TrindingProducts from "@/_components/layout/TrindingProducts";
import BestSellingProducts from "@/_components/layout/BestSellingProducts";

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
  Hamburger menu
  handle errors
  `);
