import React from 'react';
import { Link } from 'react-scroll';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs';
import Logo from '../assets/logo.svg'; // 👈 Apni SVG ka path sahi kar lena

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* === Logo + Brand Name === */}
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="w-50 h-10" />
            {/* <span className="text-xl font-semibold text-white tracking-wide">
              MyPortfolio
            </span> */}
          </div>

          {/* === Navigation Links === */}
          <div className="hidden md:flex space-x-8 text-gray-300 text-lg font-medium">
            <Link to="home" smooth={true} spy={true} offset={-70} activeClass="text-blue-400"
              className="cursor-pointer hover:text-blue-400 transition duration-300">
              Home
            </Link>
            <Link to="about" smooth={true} spy={true} offset={-70} activeClass="text-blue-400"
              className="cursor-pointer hover:text-blue-400 transition duration-300">
              About
            </Link>
            <Link to="services" smooth={true} spy={true} offset={-70} activeClass="text-blue-400"
              className="cursor-pointer hover:text-blue-400 transition duration-300">
              Services
            </Link>
            <Link to="work" smooth={true} spy={true} offset={-70} activeClass="text-blue-400"
              className="cursor-pointer hover:text-blue-400 transition duration-300">
              Work
            </Link>
            <Link to="contact" smooth={true} spy={true} offset={-70} activeClass="text-blue-400"
              className="cursor-pointer hover:text-blue-400 transition duration-300">
              Contact
            </Link>
          </div>

          {/* === Mobile Icons === */}
          <div className="md:hidden flex items-center space-x-4 text-2xl text-gray-300">
            <Link to="home" smooth={true} spy={true}><BiHomeAlt /></Link>
            <Link to="about" smooth={true} spy={true}><BiUser /></Link>
            <Link to="services" smooth={true} spy={true}><BsClipboardData /></Link>
            <Link to="work" smooth={true} spy={true}><BsBriefcase /></Link>
            <Link to="contact" smooth={true} spy={true}><BsChatSquareText /></Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
