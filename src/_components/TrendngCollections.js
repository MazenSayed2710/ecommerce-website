import TrendCollection from "./TrendCollection";
import wom from "../../public/woman-section-img.webp";
import bag from "../../public/bag.avif";
import whatch from "../../public/whatch.webp";
import shose from "../../public/shose.jpg";
import Image from "next/image";

function TrendngCollections() {
  return (
    <div className="max-w-[1200px] m-auto grid grid-cols-custom grid-rows-custom justify-center gap-5 py-5">
      <TrendCollection
        collectionName="Woman"
        className=" col-span-2 row-span-2"
      >
        <Image
          src={wom}
          alt=""
          height={630}
          className="group-hover:scale-110 duration-500"
        />
      </TrendCollection>
      <TrendCollection collectionName="Accessories">
        <Image
          src={bag}
          width={270}
          height={300}
          alt=""
          className="group-hover:scale-110 duration-500"
        />
      </TrendCollection>
      <TrendCollection collectionName="shose">
        <Image
          src={shose}
          alt=""
          width={270}
          height={300}
          className="object-cover h-[300px] col group-hover:scale-110 duration-500"
        />
      </TrendCollection>
      <TrendCollection
        collectionName="whatch"
        className="row-start-1 row-end-3 col-start-4"
      >
        <Image
          src={whatch}
          alt=""
          width={270}
          className="object-cover h-[630px] group-hover:scale-110 duration-500"
        />
      </TrendCollection>
    </div>
  );
}

export default TrendngCollections;
