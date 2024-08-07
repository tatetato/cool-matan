import { useRef, useCallback } from "react";

function useScrollTo() {
  const elementRef = useRef<HTMLElement>(null);

  const scrollToElement = useCallback(() => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, []);

  return [elementRef, scrollToElement];
}

export default useScrollTo;
