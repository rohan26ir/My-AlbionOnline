import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaArrowLeft } from "react-icons/fa"; // Import icons from react-icons
import { Link } from "react-router-dom";

const Error = () => {
  // Function to generate shooting stars
  const generateShootingStars = (count) => {
    return Array.from({ length: count }).map((_, index) => {
      const starSize = Math.random() * 3 + 2; // Random size between 2px and 5px
      const starDuration = Math.random() * 2 + 1; // Random duration between 1s and 3s
      const starDelay = Math.random() * 5; // Random delay between 0s and 5s

      return (
        <motion.div
          key={index}
          className="absolute bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${starSize}px`,
            height: `${starSize}px`,
          }}
          initial={{ opacity: 0, x: -100, y: -100 }}
          animate={{
            opacity: [0, 1, 0],
            x: [0, window.innerWidth],
            y: [0, window.innerHeight],
          }}
          transition={{
            duration: starDuration,
            repeat: Infinity,
            delay: starDelay,
            ease: "linear",
          }}
        />
      );
    });
  };

  // Function to generate a single "main shooting star" (larger and more dramatic)
  const generateMainShootingStar = () => {
    return (
      <motion.div
        className="absolute bg-yellow-300 rounded-full"
        style={{
          top: "10%",
          left: "10%",
          width: "8px",
          height: "8px",
        }}
        initial={{ opacity: 0, x: -100, y: -100 }}
        animate={{
          opacity: [0, 1, 0],
          x: [0, window.innerWidth],
          y: [0, window.innerHeight],
        }}
        transition={{
          duration: 3, 
          repeat: Infinity,
          delay: 2,
          ease: "linear",
        }}
      />
    );
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Shooting Stars Animation */}
      <div className="absolute inset-0 z-0">
        {generateShootingStars(10)} {/* Generate 10 small shooting stars */}
        {generateMainShootingStar()} {/* Generate 1 main shooting star */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
        <motion.h1
          className="text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          404
        </motion.h1>
        <motion.p
          className="text-xl mb-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Oops! The page you're looking for doesn't exist.
        </motion.p>
        <div className="flex flex-row space-x-4">
       <Link to={'/'}>
         <div className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
         <FaHome></FaHome>
         <h2>Go to Home</h2>
         </div>
       </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Error;