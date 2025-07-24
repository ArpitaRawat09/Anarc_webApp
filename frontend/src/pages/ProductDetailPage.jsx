import { motion } from "framer-motion";

const ProductDetailPage = () => {
  return (
    <div className="relative bg-black py-10 px-4 sm:py-16 sm:px-6 text-center text-white min-h-screen">
      <motion.h2
        className="text-3xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        Anarc Smartwatch
      </motion.h2>

      <motion.p
        className="text-sm sm:text-lg text-gray-300 max-w-xl mx-auto mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      >
        A perfect blend of beauty and technology — featuring a stainless steel
        octagonal dial, flagship performance, and week-long battery life.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto text-left">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 sm:p-8 border border-gray-500 rounded-lg bg-transparent bg-opacity-10 shadow-md backdrop-blur-sm transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl text-zinc-500 font-semibold mb-2">
              {feature.title}
            </h3>
            <p className="text-zinc-400 text-sm sm:text-base">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-around items-center gap-6 sm:gap-0 mt-12 sm:mt-20 mb-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl font-bold">700 nits</h2>
          <p className="text-zinc-400 text-lg sm:text-2xl">Peak brightness</p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl font-bold">60Hz</h2>
          <p className="text-zinc-400 text-lg sm:text-2xl">Refresh Rate</p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl font-bold">1.85'' AMOLED</h2>
          <p className="text-zinc-400 text-lg sm:text-2xl">Always-On-Display</p>
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    title: "Unique Octagonal Dial",
    description:
      "A design that blends beauty with geometry, crafted from durable stainless steel for a premium finish.",
  },
  {
    title: "Brilliant Display",
    description:
      "700 nits brightness & 60Hz refresh rate deliver vibrant visuals even in direct sunlight.",
  },
  {
    title: "7-Day Battery",
    description:
      "Power through the week with a 350 mAh battery designed to last 7 days on a single charge.",
  },
  {
    title: "Fitness-Grade Sensors",
    description:
      "Equipped with a 6-axis motion sensor and heart rate monitor for precise activity tracking.",
  },
  {
    title: "Functional Haptic Crown",
    description:
      "Stainless steel crown with haptics enhances control and user interaction.",
  },
  {
    title: "Designed for India",
    description:
      "Designed in London, made to cater to the dynamic lifestyle of India.",
  },
];

export default ProductDetailPage;
