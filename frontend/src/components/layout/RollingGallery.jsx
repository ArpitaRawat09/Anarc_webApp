import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
  useScroll,
  useSpring,
} from "framer-motion";

const IMGS = [
  "/assets/card1.webp",
  "/assets/card2.webp",
  "/assets/card3.webp",
  "/assets/card4.webp",
  "/assets/card5.webp",
];

const RollingGallery = ({
  autoplay = false,
  pauseOnHover = false,
  images = [],
}) => {
  images = images.length > 0 ? images : IMGS;

  const [isScreenSizeSm, setIsScreenSizeSm] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 640 : false
  );

  useEffect(() => {
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cylinderWidth = isScreenSizeSm ? 1100 : 1800;
  const faceCount = images.length;
  const faceWidth = (cylinderWidth / faceCount) * 1.5;
  const radius = cylinderWidth / (2 * Math.PI);

  const dragFactor = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const transform = useTransform(
    rotation,
    (val) => `rotate3d(0,1,0,${val}deg)`
  );

  const startInfiniteSpin = (startAngle) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  const handleUpdate = (latest) => {
    if (typeof latest.rotateY === "number") {
      rotation.set(latest.rotateY);
    }
  };

  const handleDrag = (_, info) => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);
    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };

  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  // Scroll animation for overlay text
  const { scrollYProgress } = useScroll();
  const y = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    mass: 1,
  });

  const overlayVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    show: { opacity: 0.75, y: 0, scale: 1, transition: { duration: 2 } },
  };

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {/* Overlay Texts */}
      <motion.div
        className="absolute top-6 left-6 text-white text-xl font-thin uppercase tracking-wider"
        style={{ scale: y }}
        variants={overlayVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        octagonal stainless steel dial
        <br />
        Diamond-cutCrown with haptics
        <br />
        Breathable Liquid silicon strap
      </motion.div>

      <motion.div
        className="absolute bottom-6 right-6 text-white "
        style={{ scale: y }}
        variants={overlayVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className=" text-3xl font-semibold ">Powered By HiSilicon.</h2>
        <div className="font-thin uppercase text-xl tracking-wider">
          <p>Lag-Free Navigation</p>
          <p>Reliable Tracking</p>
          <p>Power-Efficient speed</p>
        </div>
      </motion.div>

      {/* Gradient Fades */}
      <div
        className="absolute top-0 left-0 h-full w-[48px] z-10"
        style={{
          background:
            "linear-gradient(to left, rgba(0,0,0,0) 0%, #060010 100%)",
        }}
      />
      <div
        className="absolute top-0 right-0 h-full w-[48px] z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0) 0%, #060010 100%)",
        }}
      />

      {/* Gallery */}
      <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          className="flex min-h-[200px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
        >
          {images.map((url, i) => (
            <div
              key={i}
              className="group absolute flex h-full items-center justify-center md:p-[6%]"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${
                  (360 / faceCount) * i
                }deg) translateZ(${radius}px)`,
              }}
            >
              <img
                src={url}
                alt="gallery"
                className="pointer-events-none h-[220px] w-[250px] md:h-[250px] md:w-[300px] rounded-[20px] border-[3px] border-white object-cover
                       transition-transform duration-300 ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
