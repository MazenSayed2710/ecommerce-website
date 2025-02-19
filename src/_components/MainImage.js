import Image from "next/image";

function MainImage({ activeImg }) {
  return (
    <div className="relative   h-full">
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
