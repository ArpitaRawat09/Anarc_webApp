import { motion } from "framer-motion";
import ThreeDViewer from "../components/sections/ThreeDViewer";
import BlurText from "../components/layout/BlurText";

const Home = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div className="text-white bg-black px-4 sm:px-6 md:px-12">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto min-h-screen gap-8 sm:gap-10 md:gap-12">

        {/* Left Side Text with Animation */}
        <motion.div
          className="flex-1 text-center md:text-left w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <BlurText
            text="STYLE THAT MOVES WITH YOU"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-zinc-400"
          />

          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-300  px-2 sm:px-0 text-start font-thin"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            Introducing the <span className="text-white font-semibold">Anarc Smartwatch</span>:<br />
            Where style meets technology — premium features, health tracking,
            and seamless connectivity in one elegant device.
          </motion.p>
        </motion.div>

        {/* Right Side 3D Watch Model */}
        <motion.div
          className="flex-1 w-full flex justify-center max-w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        >
          <div className="w-full max-w-[360px] sm:max-w-[480px] md:max-w-none">
            <ThreeDViewer />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
