import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom"; // <-- Added
import ServicePopup from "./Servicepopup";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const wrapRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleServices = () => setServicesOpen((s) => !s);
  const closeAll = () => {
    setServicesOpen(false);
    setMenuOpen(false);
  };

  // Close on click outside / Esc
  useEffect(() => {
    const onDown = (e) => {
      if (e.key === "Escape") closeAll();
    };
    const onClick = (e) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target)) closeAll();
    };
    document.addEventListener("keydown", onDown);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onDown);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div ref={wrapRef} className="relative">
        {/* Desktop */}
        <div className="max-w-7xl mx-auto items-center justify-between hidden md:flex py-4 px-6">
          <img
            src="https://ik.imagekit.io/iufkpclvp/HItam%20Newgen/Digital%20Copy1%20(1).png?updatedAt=1753858388322"
            alt="Hitam Digital"
            className="h-10 w-auto shadow-2xl hidden md:block"
          />

          <nav className="flex items-center space-x-6 text-sm font-medium text-gray-800">
            <a href="#home" className="hover:text-green-600">Home</a>

            <button
              onClick={toggleServices}
              className="hover:text-green-600 flex items-center gap-1"
            >
              Services
              <IoIosArrowDown
                className={`text-sm mt-[1px] transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Updated to Link */}
            <Link to="/testimonial" className="hover:text-green-600">
              Testimonial
            </Link>

            <button className="hover:text-green-600">About us</button>
            <a href="#blog" className="hover:text-green-600">Blog</a>
            <a href="#contact" className="hover:text-green-600">Contact</a>
          </nav>

          <div className="flex items-center space-x-5 text-sm text-gray-800">
            <div className="flex items-center gap-1">
              <FiPhoneCall className="text-gray-600" size={16} />
              <span>000-000-0000</span>
            </div>
            <a
              href="mailto:info@example.com"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <FiMail size={18} className="text-gray-700" />
            </a>
          </div>
        </div>

        {/* Desktop Services Dropdown */}
        {servicesOpen && (
          <div className="hidden md:block absolute left-0 right-0 top-full bg-white border-t shadow-xl">
            <ServicePopup />
          </div>
        )}

        {/* Mobile header */}
        <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white rounded-b-xl shadow-sm">
          <div className="flex-1 flex justify-start">
            <img
              src="https://ik.imagekit.io/iufkpclvp/HItam%20Newgen/HD.png?updatedAt=1753959530388"
              alt="Hitam Mobile Logo"
              className="h-12 w-auto"
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <FiPhoneCall size={20} className="text-black" />
            </button>
            <a href="mailto:info@example.com" className="p-2 rounded-full hover:bg-gray-100">
              <FiMail size={20} className="text-black" />
            </a>
            <button
              onClick={toggleMenu}
              className="w-8 h-8 border border-black rounded-full flex items-center justify-center hover:bg-gray-100"
            >
              <span className="text-xl font-bold leading-none">...</span>
            </button>
          </div>
        </div>

        {/* Mobile menu & Services */}
        {menuOpen && (
          <div className="md:hidden mt-1 px-4 pb-4 pt-3 space-y-3 text-base font-medium text-gray-800 bg-white shadow rounded-b-xl">
            <a href="#home" className="block hover:text-green-600">Home</a>

            <button
              onClick={toggleServices}
              className="flex items-center justify-between w-full hover:text-green-600"
            >
              Services
              <IoIosArrowDown
                className={`text-sm transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {servicesOpen && (
              <div className="mt-3 -mx-4 border-t">
                <ServicePopup />
              </div>
            )}

            {/* Updated to Link */}
            <Link to="/testimonial" className="block hover:text-green-600">
              Testimonial
            </Link>

            <button className="w-full text-left hover:text-green-600">About</button>
            <a href="#blog" className="block hover:text-green-600">Blog</a>
            <a href="#contact" className="block hover:text-green-600">Contact</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
