function Sidebar({ children, openSidebar, position = "right" }) {
  return (
    <div
      className={`bg-black/50 fixed w-screen h-screen z-50 left-0 top-0 flex ${
        position === "left" ? "justify-start" : "justify-end"
      } justify-start ${!openSidebar && "bg-transparent pointer-events-none"}`}
    >
      {children}
    </div>
  );
}

export default Sidebar;
