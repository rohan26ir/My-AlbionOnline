import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import mapImage from '../../assets/newsMap.webp';

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter a valid email!", {
        position: "top-center",
      });
      return;
    }

    toast.success(`Subscribed with: ${email}`, {
      position: "top-center",
    });

    setEmail(""); // Clear input after submission
  };

  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div
        className="relative p-8 rounded-2xl text-center w-[65%] shadow-lg bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${mapImage})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-white text-2xl font-bold mb-3">🚀 Join Our Newsletter</h2>
          <p className="text-gray-200 text-sm mb-5">
            Get the latest gaming news, updates, and exclusive content!
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <motion.input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg hover:bg-white/40	 text-black outline-none border-2 border-black focus:border-white transition-all"
              // whileFocus={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)" }}
              required
            />
            <motion.button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all"
              whileHover={{ scale: 1.05, backgroundColor: "#222" }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
