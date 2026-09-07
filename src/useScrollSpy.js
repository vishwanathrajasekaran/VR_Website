import { useEffect, useState } from "react";

// Tracks which section is currently in view, and which ones have been
// scrolled past already — used to drive the rail's pass/running/pending states.
export function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);
  const [passedIndex, setPassedIndex] = useState(0);

  useEffect(() => {
    const handler = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.3;
      let currentIndex = 0;

      for (let i = 0; i < ids.length; i++) {
        const el = document.getElementById(ids[i]);
        if (el && el.offsetTop <= scrollPos) {
          currentIndex = i;
        }
      }
      setActive(ids[currentIndex]);
      setPassedIndex(currentIndex);
    };

    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, [ids]);

  return { active, passedIndex };
}
