import Image from "next/image";

function ThumbnailList({ data, activeImg, setActiveImg }) {
  const images = data.images;
  return (
    <div className="flex flex-col gap-3">
      {images.map((img) => (
        <button key={img} onClick={() => setActiveImg(img)}>
          <Image
            src={img}
            width={80}
            height={80}
            alt="Tovi Girl with Cat Printed"
            className={`object-cover duration-500 ${
              img === activeImg ? "opacity-100" : "opacity-55"
            }  `}
          />
        </button>
      ))}
    </div>
  );
}

export default ThumbnailList;
