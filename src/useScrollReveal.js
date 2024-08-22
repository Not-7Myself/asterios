import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export const useScrollReveal = (selector, delay = 200) => {
  useEffect(() => {
    ScrollReveal().reveal(selector, {
      origin: "bottom",
      distance: "50px",
      duration: 800,
      delay: delay,
      easing: "ease-in-out",
      opacity: 0,
      reset: true,
    });
  }, [selector, delay]);
};
