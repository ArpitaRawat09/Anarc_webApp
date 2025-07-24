// src/components/ScrollContainer.jsx
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const ScrollContainer = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      lerp: 0.08, // lower = smoother
      multiplier: 1,
      class: "is-reveal",
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <main
      data-scroll-container
      ref={containerRef}
      className="overflow-hidden"
    >
      {children}
    </main>
  );
};

export default ScrollContainer;
