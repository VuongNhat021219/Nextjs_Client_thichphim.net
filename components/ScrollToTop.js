import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

import ScrollToTopCSS from "@/styles/_scrolltop.module.scss";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={ScrollToTopCSS.top__to__btm}>
      {" "}
      {showTopBtn && (
        <FaAngleUp
          className={`${ScrollToTopCSS.icon__position} ${ScrollToTopCSS.icon__style}`}
          onClick={goToTop}
        />
      )}{" "}
    </div>
  );
};
export default ScrollToTop;
