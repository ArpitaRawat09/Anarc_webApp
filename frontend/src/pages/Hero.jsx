import { useEffect, useRef } from "react";
import RollingGallery from "../components/layout/RollingGallery";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current && videoRef.current.paused) {
        videoRef.current.play().catch((err) => {
          // console.log("Autoplay blocked:", err);
        });
      }
    };

    setTimeout(() => {
      window.addEventListener("scroll", handleScroll);
    }, 1000);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      data-scroll-section
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* Background Video (Optional) */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0"
        src="/assets/your-video.mp4"
        muted
        playsInline
      />

      {/* RollingGallery Component */}
      <div className="relative z-10">
        <RollingGallery autoplay={true} pauseOnHover={true} />
      </div>

      {/* Scroll Message (Only on small screens) */}
      <div
        data-scroll
        data-scroll-speed="2"
        className="sm:block md:hidden absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm text-center px-4 z-20"
      >
        {/* Scroll to watch video */}
      </div>
    </section>
  );
};

export default Hero;
