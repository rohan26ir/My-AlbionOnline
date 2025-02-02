import { motion } from "framer-motion";

const WaveTitles = ({text}) => {
  // const text = "Join the Adventure!";

  return (
    <h2 className="px-6 pt-3 -mb-3 tracking-tighter text-3xl font-mono font-bold flex">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 1, y: 1 }}
          animate={{
            opacity: 1,
            y: [-3, 3, -3], // Softer wave motion
          }}
          transition={{
            delay: index * 0.1, // Letters appear one by one
            duration: 1.5, // Slower wave movement
            repeat: Infinity, // Infinite loop
            ease: "easeInOut",
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char} {/* Preserve Spaces */}
        </motion.span>
      ))}
    </h2>
  );
};

export default WaveTitles;
