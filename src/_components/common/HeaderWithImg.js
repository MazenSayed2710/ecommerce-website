import Image from "next/image";

function HeaderWithImg({ img, children }) {
  return (
    <div className=" relative flex items-center justify-center h-32 sm:h-56">
      <div
        className="absolute left-0 top-0 w-full h-full z-10"
        style={{ backgroundColor: "rgb(0 0 0 / 21%)" }}
      ></div>
      {img && (
        <Image
          src={img}
          alt="background Heading"
          fill
          className="absolute object-cover left-0 top-0"
          sizes="100vw"
          priority
        />
      )}
      <div className=" text-xl text-white z-20">{children}</div>
    </div>
  );
}

export default HeaderWithImg;
