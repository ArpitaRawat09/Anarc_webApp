import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import { motion } from "framer-motion";
import { useState } from "react";

const mediaItems = [
  {
    type: "video",
    videoSrc: "/assets/video1.mp4",
    poster: "/assets/video-thumb.jpg",
    title: "Flagship chipset that’s high on performance.",
    description:
      "For a seamless experience as you transition from work to play and everything in between.",
  },
  {
    type: "video",
    videoSrc: "/assets/video2.mp4",
    poster: "/assets/video-thumb.jpg",
    title: "Illuminate every detail",
    description:
      "A 350 mAh battery that lets you chase chaos without running out of power.",
  },
  {
    type: "video",
    videoSrc: "/assets/video3.mp4",
    poster: "/assets/video-thumb.jpg",
    title: "Forged in stainless steel.",
    description:
      "Unmatched design and a functional crown with haptics that keeps up with you.",
  },
  {
    type: "video",
    videoSrc: "/assets/video4.mp4",
    poster: "/assets/video-thumb.jpg",
    title: "Fitness, on point.",
    description:
      "A 6 axis motion sensor tracks all your movements to give you accurate data at all times.",
  },
  {
    type: "video",
    videoSrc: "/assets/video5.webm",
    poster: "/assets/video-thumb.jpg",
    title: "Mix, Match, and Make It Yours",
    description:
      "From boardrooms to marathons, you’ll never go out of style with our premium range of Arcs.",
  },
  {
    type: "video",
    videoSrc: "/assets/video6.webm",
    poster: "/assets/video-thumb.jpg",
    title: "A 350 mAh battery",
    description:
      "Beauty and geometry come together to create Anarc’s unique octagonal dial.",
  },
];

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
  const itemsToRender = isMobile ? mediaItems.slice(0, 3) : mediaItems;

  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    // ✅ Scroll wrapper for this section
    <div className="w-full min-h-screen overflow-hidden bg-black" data-scroll-section>
      <motion.h1
        className="text-6xl text-white uppercase font-bold text-center mt-8 mb-3"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        data-scroll
        data-scroll-speed="2"
      >
        Design to be Different
      </motion.h1>

      <div className="bg-black p-10 mt-6">
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {itemsToRender.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg"
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              data-scroll
              data-scroll-speed="1"
            >
              <video
                src={item.videoSrc}
                poster={item.poster}
                controls={false}
                autoPlay
                loop
                muted
                className="w-full h-80 object-cover"
              />

              {/* Overlay Info */}
              <div
                className={`absolute inset-0 bg-[#8888884d] bg-opacity-50 backdrop-blur-md flex flex-col justify-center text-start text-white transition-all duration-300 transform ${
                  activeIndex === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } group-hover:opacity-100 group-hover:translate-y-0`}
              >
                <h1 className="text-2xl font-bold m-3">{item.title}</h1>
                <p className="text-md m-3">{item.description}</p>
              </div>
            </div>
          ))}
        </LightGallery>
      </div>
    </div>
  );
}

export default Gallery;
