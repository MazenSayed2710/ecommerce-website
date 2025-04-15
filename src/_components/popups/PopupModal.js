function PopupModal({ children }) {
  return (
    <div className="w-screen h-screen fixed overflow-hidden left-0 top-0 bg-black/50 z-20 flex items-center justify-center px-8">
      {children}
    </div>
  );
}

export default PopupModal;
