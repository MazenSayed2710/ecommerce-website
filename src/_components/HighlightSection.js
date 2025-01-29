import Image from "next/image";

function HighlightSection() {
  return (
    <div className="max-w-[1200px] py-5 m-auto flex  text-white justify-between gap-5">
      <div className="flex flex-col justify-center w-[700px] h-[250px] items-center relative group overflow-hidden">
        <Image
          src="/highlight-1.jpg"
          alt=""
          fill
          className=" absolute left-0 top-0 group-hover:scale-150 group-hover:rotate-12  duration-500"
        />
        <h2 className="font-semibold text-2xl uppercase z-10">Lookbook 2025</h2>
        <h3 className="font-semibold text-xl uppercase z-10">
          make love this look
        </h3>
      </div>
      <div className=" group flex flex-col w-[700px] h-[250px] justify-center items-center relative overflow-hidden">
        <Image
          src="/highlight-2.jpg"
          alt=""
          fill
          className="absolute left-0 top-0 object-cover group-hover:object-bottom duration-500"
        />
        <h2 className="font-semibold text-2xl uppercase z-10">summer sale</h2>
        <h3 className="font-bold text-6xl uppercase z-10">up to 70%</h3>
      </div>
    </div>
  );
}

export default HighlightSection;
