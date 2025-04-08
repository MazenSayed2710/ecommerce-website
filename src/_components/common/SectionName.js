function SectionName({ description, children }) {
  return (
    <div className="flex flex-col items-center relative w-fit m-auto mb-5">
      <h2 className="text-2xl  font-bold uppercase">{children}</h2>
      <p className="text-gray-500 italic">{description}</p>
      <div className="w-16 h-[2px]  transition translate-y-1/2 bg-black absolute top-1/2 -right-[80px]"></div>
      <div className="w-16 h-[2px] transition translate-y-1/2 bg-black absolute top-1/2 -left-[80px]"></div>
    </div>
  );
}

export default SectionName;
