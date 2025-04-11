import Collections from "@/_components/collections/Collections";
import HeaderWithImg from "@/_components/common/HeaderWithImg";

export const metadata = {
  title: "Collections",
  description:
    "Organize and showcase products into curated collections for easy browsing.",
};

export function page() {
  return (
    <div>
      <HeaderWithImg img="/bg-heading.jpg">Collections</HeaderWithImg>
      <Collections />
    </div>
  );
}

export default page;
