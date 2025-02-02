import React from "react";
import { Typewriter } from "react-simple-typewriter";
import hero from "../../assets/hero.webp";

const HomeHero = () => {
  return (
    <div
      className="relative w-full h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.1)), url(${hero})`,
      }}
    >
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          Welcome to{" "}
          <span className="text-red-500">
            <Typewriter
              words={["GamerVerse", "The Battle Arena", "Your Gaming Hub"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-xl mx-auto">
          Your ultimate hub for gaming news, reviews, and live tournaments. Join the battle today!
        </p>
        <button className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 transition-all duration-300 text-white font-bold text-lg rounded-lg shadow-md">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default HomeHero;
