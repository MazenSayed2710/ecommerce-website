function ServiceBox({ children, title, text }) {
  return (
    <div className="flex gap-3">
      <div className="text-[50px] text-custom-white">{children}</div>

      <div className="flex flex-col">
        <h2 className="text-custom-black font-semibold uppercase">{title}</h2>
        <p className="text-custom-white">{text}</p>
      </div>
    </div>
  );
}

export default ServiceBox;
