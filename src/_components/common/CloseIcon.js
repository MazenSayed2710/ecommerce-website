function CloseIcon({ handleClose }) {
  return (
    <button
      className="absolute -top-4 -right-4 p-1 bg-black text-white w-8 h-8 flex items-center justify-center"
      onClick={handleClose}
    >
      X
    </button>
  );
}

export default CloseIcon;
