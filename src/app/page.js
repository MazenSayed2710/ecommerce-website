import TrendngCollections from "@/_components/layout/TrendngCollections";
import ServiceSection from "@/_components/layout/ServiceSection";
import HighlightSection from "@/_components/layout/HighlightSection";
import Slider from "@/_components/layout/Slider";
import TrindingProducts from "@/_components/layout/TrindingProducts";
import BestSellingProducts from "@/_components/layout/BestSellingProducts";
import SessionHandler from "@/_components/layout/SessionHandler ";

export const metadata = {
  title: "Kalles Shopify",
  description:
    "A sleek and powerful e-commerce app for creating and managing online stores effortlessly.",
};

export default async function Home() {
  console.log(
    "Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-elemen"
  );
  return (
    <>
      <SessionHandler />
      <Slider />
      <TrendngCollections />
      <TrindingProducts />
      <HighlightSection />
      <BestSellingProducts />
      <ServiceSection />
    </>
  );
}
