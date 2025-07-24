import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        videoRef.current.play();
      }
      window.removeEventListener("scroll", handleScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <video
        ref={videoRef}
        muted
        playsInline
        loop
        className="absolute inset-0 w-full h-full object-cover sm:object-center"
      >
        <source src="/assets/watchvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Mobile fallback text (optional) */}
      <div className="sm:hidden absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm text-center px-4">
        Scroll to watch video
      </div>
    </div>
  );
};

export default Hero;
