import "@google/model-viewer";
import { motion } from "framer-motion";

const ThreeDViewer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex justify-center items-center my-8"
    >
      <model-viewer
        src="/assets/3DWATCH.glb"
        alt="3D Watch Model"
        auto-rotate
        auto-rotate-delay="0"
        interaction-prompt="none"
        disable-zoom
        disable-pan
        disable-tap
        className="rounded-lg shadow-lg w-[640px] h-[480px]"
      />
    </motion.div>
  );
};

export default ThreeDViewer;
