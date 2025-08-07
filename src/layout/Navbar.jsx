import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiPhoneCall, FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      {/* Desktop View */}
      <div className="max-w-7xl mx-auto items-center justify-between hidden md:flex py-4 px-6">
        {/* Desktop Logo */}
        <img
          src="https://ik.imagekit.io/iufkpclvp/HItam%20Newgen/Digital%20Copy1%20(1).png?updatedAt=1753858388322"
          alt="Hitam Digital"
          className="h-10 w-auto shadow-2xl hidden md:block"
        />

        {/* Desktop Navigation */}
        <nav className="flex items-center space-x-6 text-sm font-medium text-gray-800">
          <div className="group relative">
            <button className="hover:text-green-600 flex items-center gap-1">
              Services <IoIosArrowDown className="text-sm mt-[1px]" />
            </button>
          </div>
          <div className="group relative">
            <button className="hover:text-green-600 flex items-center gap-1">
              Testimonial <IoIosArrowDown className="text-sm mt-[1px]" />
            </button>
          </div>
          <div className="group relative">
            <button className="hover:text-green-600 flex items-center gap-1">
              About <IoIosArrowDown className="text-sm mt-[1px]" />
            </button>
          </div>
          <a href="#blog" className="hover:text-green-600">Blog</a>
          <a href="#contact" className="hover:text-green-600">Contact</a>
        </nav>

        {/* Right Side: Phone & Search */}
        <div className="flex items-center space-x-4 text-sm text-gray-800">
          <div className="flex items-center gap-1">
            <FiPhoneCall className="text-gray-600" size={16} />
            <span>000-000-0000</span>
          </div>
          <button className="hover:text-green-600">
            <FiSearch size={16} />
          </button>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white rounded-b-xl shadow-sm">
        {/* Mobile Logo */}
        <div className="flex-1 flex justify-start">
          <img
            src="https://ik.imagekit.io/iufkpclvp/HItam%20Newgen/HD.png?updatedAt=1753959530388"
            alt="Hitam Mobile Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <FiPhoneCall size={20} className="text-black" />
          </button>
          <button
            onClick={toggleMenu}
            className="w-8 h-8 border border-black rounded-full flex items-center justify-center hover:bg-gray-100"
          >
            <span className="text-xl font-bold leading-none">...</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-1 px-4 pb-4 pt-3 space-y-3 text-base font-medium text-gray-800 bg-white shadow rounded-b-xl">
          <button className="flex items-center justify-between w-full hover:text-green-600">
            Services <IoIosArrowDown className="text-sm" />
          </button>
          <button className="flex items-center justify-between w-full hover:text-green-600">
            Testimonial <IoIosArrowDown className="text-sm" />
          </button>
          <button className="flex items-center justify-between w-full hover:text-green-600">
            About <IoIosArrowDown className="text-sm" />
          </button>
          <a href="#blog" className="block hover:text-green-600">Blog</a>
          <a href="#contact" className="block hover:text-green-600">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
