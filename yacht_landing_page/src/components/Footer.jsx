import React from "react";
import Logo from "./Logo";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="p-4 py-10 flex flex-col md:flex-row gap-10 justify-between items-center">
      <Logo />
      <nav>
        <ul className="flex flex-col md:flex-row text-center gap-4 text-gray-100">
          <li>
            <a href="#none" className="hover:text-[#FFD585]">Home</a>
          </li>
          <li>
            <a href="#none" className="hover:text-[#FFD585]">Yacht charter</a>
          </li>
          <li>
            <a href="#none" className="hover:text-[#FFD585]">Luxury tour</a>
          </li>
          <li>
            <a href="#none" className="hover:text-[#FFD585]">Events</a>
          </li>
          <li>
            <a href="#none" className="hover:text-[#FFD585]">Contact</a>
          </li>
        </ul>
      </nav>
      <div>
        <ul className="text-gray-100 flex   gap-6">
          <li >
            <a href="#none" className="w-10 h-10 border-gray-400 border-[0.5px] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-[#FFD585] hover:text-[#FFD585] ">
              <FaFacebook />
            </a>
          </li>
          <li >
            <a href="#none" className="w-10 h-10 border-gray-400 border-[0.5px] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-[#FFD585] hover:text-[#FFD585] "> 
              <FaInstagram />
            </a>
          </li>
          <li >
            <a href="#none" className="w-10 h-10 border-gray-400 border-[0.5px] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-[#FFD585] hover:text-[#FFD585] " >
              <FaTwitter />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
