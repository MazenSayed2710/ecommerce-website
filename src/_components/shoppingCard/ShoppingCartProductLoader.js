function ShoppingCartProductLoader({ isUpdating, id }) {
  return (
    <div
      className={`absolute inset-0 bg-black/10 w-full h-full z-50 flex items-center justify-start px-5 ${
        isUpdating === id ? "block" : "hidden"
      }`}
    >
      <div className={`w-40 h-40 flex items-center justify-center`}>
        <div className="h-10 w-10 animate-spin border-t-4 border-r-4 border-blue-400 rounded-full z-50"></div>
      </div>
    </div>
  );
}

export default ShoppingCartProductLoader;
