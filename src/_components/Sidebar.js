function Sidebar({ children, openSidebar }) {
  return (
    <div
      className={`bg-black/50 fixed w-screen h-screen z-50 left-0 top-0 ${
        !openSidebar && "bg-transparent pointer-events-none"
      }`}
    >
      {children}
    </div>
  );
}

export default Sidebar;
