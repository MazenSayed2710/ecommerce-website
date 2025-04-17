"use client";
import { createContext, useContext, useEffect, useState } from "react";

const PopupModalContext = createContext(null);

function PopupModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(
    function () {
      if (isOpen) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
      return () => {
        document.body.classList.remove("overflow-hidden");
      };
    },

    [isOpen]
  );

  return (
    <PopupModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </PopupModalContext.Provider>
  );
}

export default PopupModalProvider;
export const usePopupModal = () => useContext(PopupModalContext);
