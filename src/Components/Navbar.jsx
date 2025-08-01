import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../assets/logo.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="  sticky top-0 z-50 bg-gradient-to-r from-white to-blue-100">
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">

     <div className="flex items-center space-x-3">
  <img src={logo} alt="United Pharma Logo" className="h-[70px] w-auto" />
  <div className="flex flex-col mt-5 leading-tight">
    <span className="text-[15px] font-bold text-blue-900">UNITED</span>
    <span className="text-[15px] font-bold text-blue-900 tracking-wider">PHARMA</span>
  </div>
</div>


  
        <div className="hidden md:flex space-x-6 items-center">
        <a
  href="#home"
  className="text-white bg-blue-700 font-medium w-[90px] h-[35px] rounded-full flex items-center justify-center hover:bg-blue-900 transition duration-300">
  Home
  </a>
 
<a
  href="#about"
  className="text-white bg-blue-700 font-medium w-[110px] h-[35px] rounded-full flex items-center justify-center hover:bg-blue-900 transition duration-300"
>
  About us
</a>



          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-white bg-blue-700 font-medium w-[190px] h-[35px] rounded-full flex items-center justify-center hover:bg-blue-900 transition duration-300"
            >
              Connect with us ▾
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg py-2 z-10">
                <a href="#contact" className="block px-4 py-2 text-sm hover:bg-blue-100">Contact</a>
                <a href="#team" className="block px-4 py-2 text-sm hover:bg-blue-100">Team</a>
                <a href="#partners" className="block px-4 py-2 text-sm hover:bg-blue-100">Partners</a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-blue-900 text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white">
          <a href="#home" className="block text-blue-900 font-medium">Home</a>
          <a href="#about" className="block text-blue-900 font-medium">About us</a>
          <div>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full text-left text-blue-900 font-medium"
            >
              Connect with us ▾
            </button>
            {dropdownOpen && (
              <div className="ml-4 mt-1 space-y-1">
                <a href="#contact" className="block text-sm text-blue-800">Contact</a>
                <a href="#team" className="block text-sm text-blue-800">Team</a>
                <a href="#partners" className="block text-sm text-blue-800">Partners</a>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
