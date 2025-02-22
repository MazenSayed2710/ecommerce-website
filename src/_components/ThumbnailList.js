import Image from "next/image";

function ThumbnailList({ data, activeImg, setActiveImg }) {
  const images = data.images;
  return (
    <div className="flex sm:flex-col gap-3 sm:row-start-auto row-start-2 overflow-x-scroll">
      {images.map((img) => (
        <button
          key={img}
          onClick={() => setActiveImg(img)}
          className="relative w-24 h-28"
        >
          <Image
            src={img}
            fill
            alt="Tovi Girl with Cat Printed"
            className={`object-cover duration-500 ${
              img === activeImg ? "opacity-100" : "opacity-55"
            }  `}
            sizes="25vw"
            priority
          />
        </button>
      ))}
    </div>
  );
}

export default ThumbnailList;
