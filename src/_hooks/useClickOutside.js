import { useEffect, useRef } from "react";

export function useClickOutside(handleClickOutside, openBtnRef) {
  const ref = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (!openBtnRef) {
        if (ref.current && !ref.current.contains(e.target)) {
          handleClickOutside();
        }
      } else if (
        ref.current &&
        !ref.current.contains(e.target) &&
        openBtnRef.current &&
        !openBtnRef.current.contains(e.target)
      ) {
        handleClickOutside();
      }
    };
    document.addEventListener("click", (e) => handler(e));

    return () => {
      document.removeEventListener("click", (e) => handler(e));
    };
  }, [handleClickOutside, openBtnRef]);

  return ref;
}
