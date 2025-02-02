import { useEffect, useRef } from "react";

export function useClickOutside(handleClickOutside) {
  const ref = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handleClickOutside();
      }
    };
    document.addEventListener("click", (e) => handler(e));

    return document.removeEventListener("click", (e) => handler(e));
  }, [handleClickOutside]);

  return ref;
}
