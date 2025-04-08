import Link from "next/link";
import HeaderWithImg from "./HeaderWithImg";

function CollectionHeader({ collectionName, img }) {
  return (
    <HeaderWithImg img={img}>
      <div className="grid items-center justify-center">
        <h1 className="text-center font-semibold">{collectionName}</h1>
        <div className=" text-base">
          <Link href="/" className="hover:text-gray-200 duration-500">
            Home
          </Link>{" "}
          &gt; {collectionName}
        </div>
      </div>
    </HeaderWithImg>
  );
}

export default CollectionHeader;
