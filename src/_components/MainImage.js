import Image from "next/image";

function MainImage({ activeImg }) {
  return (
    <div className="relative w-full aspect-[2.5/3]">
      <Image
        src={activeImg}
        fill
        alt="Tovi Girl with Cat Printed"
        className="object-cover duration-500"
        sizes=""
      />
    </div>
  );
}

export default MainImage;
