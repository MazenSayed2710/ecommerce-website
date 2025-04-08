import Image from "next/image";

function HighlightSection() {
  return (
    <div className="max-w-[1200px]  p-5 m-auto flex sm:flex-row flex-col text-white gap-5">
      <div className="flex flex-col justify-center w-full sm:w-1/2 h-[250px] items-center relative group overflow-hidden">
        <Image
          src="/highlight-1.jpg"
          alt=""
          fill
          className=" absolute left-0 top-0 group-hover:scale-150 group-hover:rotate-12  duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
        <h2 className="font-semibold text-2xl uppercase z-10">Lookbook 2025</h2>
        <h3 className="font-semibold text-xl uppercase z-10">
          make love this look
        </h3>
      </div>
      <div className=" group flex flex-col sm:w-1/2 w-full h-[250px] justify-center items-center relative overflow-hidden">
        <Image
          src="/highlight-2.jpg"
          alt=""
          fill
          className="absolute left-0 top-0 object-cover group-hover:object-bottom duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
        <h2 className="font-semibold text-2xl uppercase z-10">summer sale</h2>
        <h3 className="font-bold text-4xl sm:text-6xl uppercase z-10">
          up to 70%
        </h3>
      </div>
    </div>
  );
}

export default HighlightSection;
