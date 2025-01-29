import Image from "next/image";

function MainImage({ data, activeImg, setActiveImg }) {
  const image = data.images[0];
  return (
    <button
      className="relative w-[40%] aspect-[2.5/3]"
      onClick={() => setActiveImg(image)}
    >
      <Image
        src={activeImg}
        fill
        alt="Tovi Girl with Cat Printed"
        className="object-cover duration-500"
        sizes=""
      />
    </button>
  );
}

export default MainImage;
