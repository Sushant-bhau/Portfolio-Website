import React, { useState } from "react";
import Logo from "../assets/logo.jpg";
import { FaChevronRight } from "react-icons/fa";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="bg-gray-950 -mb-7 z-50 w-full py-3 fixed">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 md:px-0">
        {/* logo section */}
        <div>
          <a href="/">
            <img
              src={Logo}
              alt=""
              className="w-20 h-30 hover:scale-105 transition-all"
            />
          </a>
        </div>
        {/* Menu section  */}
        <nav className="hidden md:block">
          <ul className="flex gap-7 text-xl items-center font-semibold text-white">
            <a href="/">
              <li className="cursor-pointer">Home</li>
            </a>
            <a href="#about">
              <li className="cursor-pointer">About</li>
            </a>
            <a href="#education">
              <li className="cursor-pointer">Education </li>
            </a>
            <a href="#skills">
              <li className="cursor-pointer">Skills </li>
            </a>
            <a href="#project">
              <li className="cursor-pointer">Projects</li>
            </a>
            <a href="#contact">
              <li className="cursor-pointer">Contact</li>
            </a>
          </ul>
        </nav>
        <div className="md:hidden text-white text-4xl">
          {showMenu ? (
            <HiMenuAlt3 onClick={toggleMenu} />
          ) : (
            <HiMenuAlt1 onClick={toggleMenu} />
          )}
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

export default Navbar;
