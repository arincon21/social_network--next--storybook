"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-[90px] z-[1000]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-[#ff5e3a] border-none rounded-full w-[50px] h-[50px] flex items-center justify-center cursor-pointer shadow-[0_0_10px_0_rgba(63,66,87,0.4)] transition-all duration-300 ease-in-out"
        >
          <Image
            src="/assets/svg-icons/back-to-top.svg"
            alt="Back to top"
            width={15}
            height={15}
          />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;