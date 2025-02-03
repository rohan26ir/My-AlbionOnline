import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaDiscord, FaReddit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      className="bg-gray-900 text-white py-8 pt-10"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Left Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h2 className="text-2xl font-bold">Albion Online Market Analysis</h2>
          <p className="text-sm text-gray-400 mt-1">Tracking the latest trends and prices in Albion's economy.</p>



        </motion.div>

        <div className='mt-4'>
          <div className="grid grid-cols-3 gap-2 text-gray-400 text-sm mt-1">
            <Link to="/bridgewatch" className="bg-rose-700 hover:bg-rose-600 px-2 py-1 rounded-sm hover:text-white transition duration-300">Bridgewatch</Link>
            <Link to="/martlock" className="bg-rose-700 hover:bg-rose-600 px-2 py-1 rounded-sm hover:text-white transition duration-300">Martlock</Link>
            <Link to="/thetford" className="bg-rose-700 hover:bg-rose-600 px-2 py-1 rounded-sm hover:text-white transition duration-300">Thetford</Link>
            <Link to="/fort-sterling" className="bg-rose-700 hover:bg-rose-600 px-2 py-1 rounded-sm hover:text-white transition duration-300">Fort Sterling</Link>
            <Link to="/lymhurst" className="bg-rose-700 hover:bg-rose-600 px-2 py-1 rounded-sm hover:text-white transition duration-300">Lymhurst</Link>
            <Link to="/caerleon" className="bg-rose-700 hover:bg-rose-600 px-2 py-1 rounded-sm hover:text-white transition duration-300">Caerleon</Link>
          
          </div>
        </div>

        {/* Navigation Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center md:justify-end space-x-6 mt-4 md:mt-0"
        >
          <Link to="/about" className="text-gray-300 hover:text-white transition duration-300">About</Link>
          <Link to="/market" className="text-gray-300 hover:text-white transition duration-300">Market</Link>
          <Link to="/guides" className="text-gray-300 hover:text-white transition duration-300">Guides</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white transition duration-300">Contact</Link>
        </motion.div>

        {/* Social Media Links */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex space-x-4 mt-4 md:mt-0"
        >
          <a href="#" className="text-gray-300 hover:text-white transition duration-300"><FaFacebook size={24} /></a>
          <a href="#" className="text-gray-300 hover:text-white transition duration-300"><FaTwitter size={24} /></a>
          <a href="#" className="text-gray-300 hover:text-white transition duration-300"><FaDiscord size={24} /></a>
          <a href="#" className="text-gray-300 hover:text-white transition duration-300"><FaReddit size={24} /></a>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 0.8 }}
        className="text-center text-gray-500 text-sm mt-6"
      >
        <p>&copy; {new Date().getFullYear()} Albion Market Analysis. All rights reserved.</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
