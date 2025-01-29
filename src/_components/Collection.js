import Image from "next/image";
import Button from "./Button";
import { capitalize } from "./helpers";
function Collection({ collection }) {
  return (
    <div className="relative aspect-[2.5/3] grid items-end justify-center overflow-hidden group">
      <Image
        src={collection.img}
        alt=""
        className="object-cover group-hover:scale-110 duration-500"
        fill
        quality={100}
      />
      <div className=" absolute left-1/2 bottom-5 -translate-x-1/2">
        <Button href={`/collections/${collection.text.toLowerCase()}`}>
          {capitalize(collection.text)}
        </Button>
      </div>
    </div>
  );
}

export default Collection;
