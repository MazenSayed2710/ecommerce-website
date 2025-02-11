function Sidebar({ children }) {
  return (
    <div className="bg-black/50 fixed w-screen h-screen z-50 left-0 top-0">
      {children}
    </div>
  );
}

export default Sidebar;
