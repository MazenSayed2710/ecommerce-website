import TrendCollection from "./TrendCollection";
import wom from "../../../public/woman-section-img.webp";
import bag from "../../../public/bag.avif";
import whatch from "../../../public/whatch.webp";
import shose from "../../../public/shose.jpg";
import Image from "next/image";

function TrendngCollections() {
  return (
    <div className="max-w-[1200px] m-auto grid sm:grid-cols-4 sm:grid-rows-2 justify-center gap-5 py-5 grid-cols-2 grid-rows-4 px-5">
      <TrendCollection collectionName="Women" className="col-span-2 row-span-2">
        <div className="relative aspect-[1/1]">
          <Image
            src={wom}
            alt=""
            fill
            className="group-hover:scale-110 duration-500 object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </TrendCollection>
      <TrendCollection collectionName="Accessories">
        <div className="relative aspect-[1/1]">
          <Image
            src={bag}
            fill
            alt=""
            className="group-hover:scale-110 duration-500 object-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
          />
        </div>
      </TrendCollection>
      <TrendCollection collectionName="shose">
        <div className="relative aspect-[1/1]">
          <Image
            src={shose}
            alt=""
            fill
            className="object-cover group-hover:scale-110 duration-500"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
          />
        </div>
      </TrendCollection>
      <TrendCollection
        collectionName="whatch"
        className="sm:row-start-1 sm:row-end-3 sm:col-start-4 h-full col-start-2  row-start-3 row-span-2"
      >
        <div className="relative h-full aspect-[1/2]">
          <Image
            src={whatch}
            alt=""
            fill
            className="object-cover group-hover:scale-110 duration-500"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
          />
        </div>
      </TrendCollection>
    </div>
  );
}

export default TrendngCollections;
