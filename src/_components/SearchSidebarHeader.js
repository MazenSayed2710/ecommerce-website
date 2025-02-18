function SearchSidebarHeader({ handleClose }) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="uppercase font-semibold">search our site</h2>
      <button onClick={handleClose}>X</button>
    </div>
  );
}

export default SearchSidebarHeader;
