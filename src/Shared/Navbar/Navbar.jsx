import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GiDesert, GiSwamp } from "react-icons/gi";
import { MdForest, MdOutlineLandslide } from "react-icons/md";
import { PiMountainsFill } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";

import ring from "../../assets/ring.webp";
import avater from "../../assets/avater.webp";
import { AuthContext } from "../../Provider/Provider";


const colors = [
  "text-red-500",
  "text-blue-500",
  "text-green-500",
  "text-yellow-500",
  "text-purple-500",
];

const Navbar = () => {
  const [colorIndex, setColorIndex] = useState(0);

  const {user, logOut} = useContext(AuthContext);

  // console.log("user", user);

  const handleLogOut = () =>{
    logOut()
  }


  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 4000); // Change color every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const navbar = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <details>
          <summary>Royal City</summary>
          <ul className="p-2 w-[160%] -left-[30%]">
            <li>
              <NavLink to={"/city/lymhurst"}>
                <MdForest /> Lymhurst
              </NavLink>
            </li>
            <li>
              <NavLink to={"/city/bridgewatch"}>
                <GiDesert /> Bridgewatch
              </NavLink>
            </li>
            <li>
              <NavLink to={"/city/fortSterling"}>
                <PiMountainsFill /> Fort Sterling
              </NavLink>
            </li>
            <li>
              <NavLink to={"/city/martlock"}>
                <MdOutlineLandslide /> Martlock
              </NavLink>
            </li>
            <li>
              <NavLink to={"/city/thetford"}>
                <GiSwamp /> Thetford
              </NavLink>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <NavLink to={"/MarketPrices"}>MarketPrices</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        {/* Left Side */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
            >
              {navbar}
            </ul>
          </div>

          {/* Logo with Animated Color */}
          <Link to={"/"} className="font-bold text-xl">
            <motion.span
              animate={{ opacity: [0.6, 1], scale: [0.9, 1] }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={`${colors[colorIndex]} transition-colors duration-1000`}
            >
              My AlbionOnline
            </motion.span>
          </Link>
        </div>

        {/* Center Nav Items (Desktop) */}
        <div className="navbar-center hidden lg:flex  ">
          <ul className="menu menu-horizontal px-1 gap-5 z-50">{navbar}</ul>
        </div>

        {/* Right Side - Profile Dropdown */}
        <div className="navbar-end">
          {
            !user 
            ? <Link to={'/signup'}><p className="px-2 py-1 bg-sky-500 rounded-md font-semibold  ">Create Account</p></Link>  
            :<div className="dropdown dropdown-end mr-3">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar relative">
              {/* User Avatar */}
              <div className="w-10 h-10 relative overflow-hidden object-contain">
                <img
                  alt="User Avatar"
                  src={user.photoURL}
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Ring Overlay */}
              <div className="w-20 h-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img src={ring} alt="Ring Overlay" className="w-full h-full object-contain" />
              </div>
            </div>
            {/* Dropdown Menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
            >
              <li>
              <Link to={'/Profile'} className="justify-between">
                  Profile <span className="badge text-red-600">Lock</span>
                </Link>
              </li>
              <li>
                <Link to={'/AdminBoard'} className="justify-between">
                  Admin 
                </Link>
              </li>
              <li>
                <Link to={'/ProfileSetting'} className="justify-between">
                  Setting 
                </Link>
              </li>
              <li>
                <p onClick={handleLogOut}>Logout</p>
              </li>
            </ul>
          </div>
          

          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
