import React from 'react';
import { GiDesert, GiSwamp } from 'react-icons/gi';
import { MdForest, MdOutlineLandslide } from 'react-icons/md';
import { PiMountainsFill } from 'react-icons/pi';
import { Link, NavLink } from 'react-router-dom';

import ring from '../../assets/ring.webp';

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
            <li><NavLink to={'/city/fortSterling'}><PiMountainsFill />Fort Sterling </NavLink></li>
            <li><NavLink to={'/city/martlock'}><MdOutlineLandslide />Martlock</NavLink></li>
            <li><NavLink to={'/city/thetford'}><GiSwamp />Thetford</NavLink></li>
          </ul>
        </details>
      </li>
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
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {navbar}
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost text-xl">My AlbionOnline</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            {navbar}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar relative">
              {/* Ring Image as Border */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={ring} alt="ring border" className="w-14 h-14 object-contain" />
              </div>
              {/* Avatar Image */}
              <div className="w-10 h-10 rounded-full overflow-hidden relative z-10">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  className="w-full h-full"
                />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
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
