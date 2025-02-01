import CollectionHeader from "@/_components/CollectionHeader";
import ShoppingCardContent from "@/_components/ShoppingCardContent";

export const metadata = {
  title: "Shopping Card | Kalles",
};
function page() {
  return (
    <div>
      <CollectionHeader collectionName="shopping card" />
      <ShoppingCardContent />
    </div>
  );
}

export default page;
/*
-metadata =>done
-editButton 
-confirm quantity=>done
-responsive
-check out button => done
*/
