import React from 'react';
import { GiDesert, GiSwamp } from 'react-icons/gi';
import { MdForest, MdOutlineLandslide } from 'react-icons/md';
import { PiMountainsFill } from 'react-icons/pi';
import { Link, NavLink } from 'react-router-dom';

import ring from '../../assets/ring.webp';
import avater from '../../assets/avater.webp';

const Navbar = () => {
  const navbar = (
    <>
      <li><NavLink to={'/'}>Home</NavLink></li>
      <li>
        <details>
          <summary>Royal City</summary>
          <ul className="p-2 w-[160%] -left-[30%]">
            <li><NavLink to={'/city/lymhurst'}><MdForest />Lymhurst</NavLink></li>
            <li><NavLink to={'/city/bridgewatch'}><GiDesert />Bridgewatch</NavLink></li>
            <li><NavLink to={'/city/fortSterling'}><PiMountainsFill />Fort Sterling</NavLink></li>
            <li><NavLink to={'/city/martlock'}><MdOutlineLandslide />Martlock</NavLink></li>
            <li><NavLink to={'/city/thetford'}><GiSwamp />Thetford</NavLink></li>
          </ul>
        </details>
      </li>
      <li><NavLink to={'/MarketPrices'}>MarketPrices</NavLink></li>
      <li><NavLink to={'/contact'}>Contact</NavLink></li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
              {navbar}
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost text-xl">My AlbionOnline</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal z-50 px-1 gap-5">
            {navbar}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end mr-3">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar relative">
              <div className="w-20 h-20 rounded-full relative z-10 overflow-hidden">
                <img
                  alt="User Avatar"
                  src={avater}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-20 h-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
                <img src={ring} alt="Ring Overlay" className="w-full h-full object-contain" />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
