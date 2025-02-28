import HeaderWithImg from "@/_components/HeaderWithImg";
import Collections from "@/_components/Collections";

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
