import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { Link, NavLink, useLocation } from "react-router-dom";
import ServicePopup from "./Servicepopup";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const wrapRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen((v) => !v);
  const toggleServices = () => setServicesOpen((s) => !s);
  const closeAll = () => {
    setServicesOpen(false);
    setMenuOpen(false);
  };

  // Close on click outside / Esc
  useEffect(() => {
    const onDown = (e) => e.key === "Escape" && closeAll();
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

  // Close menus when route changes
  useEffect(() => {
    closeAll();
  }, [location.pathname]);

  const navLinkClass = ({ isActive }) =>
    `hover:text-green-600 ${isActive ? "text-green-700" : "text-gray-800"}`;

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div ref={wrapRef} className="relative">
        {/* Desktop */}
        <div className="max-w-7xl mx-auto items-center justify-between hidden md:flex py-4 px-6">
          <Link to="/" className="shrink-0">
            <img
              src={Logo}
              alt="Hitam Digital"
              className="h-10 w-auto shadow-2xl hidden md:block"
            />
          </Link>

          <nav className="flex items-center space-x-6 text-sm font-medium">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>

            {/* Services: dropdown toggle + page link */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="hover:text-green-600 flex items-center gap-1 text-gray-800"
                aria-expanded={servicesOpen}
                aria-haspopup="menu"
              >
                Services
                <IoIosArrowDown
                  className={`text-sm mt-[1px] transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            <NavLink to="/testimonial" className={navLinkClass}>
              Testimonial
            </NavLink>

            <NavLink to="/projects" className={navLinkClass}>
              Projects
            </NavLink>

            <NavLink to="/about_us" className={navLinkClass}>
              About us
            </NavLink>

            <NavLink to="/career" className={navLinkClass}>
              Careers
            </NavLink>
          </nav>

          <div className="flex items-center space-x-5 text-sm text-gray-800">
            <a href="tel:0000000000" className="flex items-center gap-1 hover:text-green-600">
              <FiPhoneCall className="text-gray-600" size={16} />
              <span>000-000-0000</span>
            </a>
            <a
              href="/contactus"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Email us"
            >
              <FiMail size={18} className="text-gray-700" />
            </a>
          </div>
        </div>

        {/* Desktop Services Dropdown */}
        {servicesOpen && (
          <div className="hidden md:block absolute left-0 right-0 top-full bg-white border-t shadow-xl">
            {/* Optional: include a 'View all services' link at top of popup */}
            <div className="max-w-7xl mx-auto px-6 py-3">
              <NavLink
                to="/service"
                className="inline-block text-sm font-medium text-green-700 hover:underline"
              >
                View all services →
              </NavLink>
            </div>
            <ServicePopup
              // If your ServicePopup renders links, have them call this to close menus:
              // onNavigate={closeAll}
            />
          </div>
        )}

        {/* Mobile header */}
        <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white rounded-b-xl shadow-sm">
          <div className="flex-1 flex justify-start">
            <Link to="/" onClick={closeAll}>
              <img
                src="https://ik.imagekit.io/iufkpclvp/HItam%20Newgen/HD.png?updatedAt=1753959530388"
                alt="Hitam Mobile Logo"
                className="h-12 w-auto"
              />
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <a className="p-2 rounded-full hover:bg-gray-100" href="tel:0000000000">
              <FiPhoneCall size={20} className="text-black" />
            </a>
            <a href="mailto:info@example.com" className="p-2 rounded-full hover:bg-gray-100">
              <FiMail size={20} className="text-black" />
            </a>
            <button
              onClick={toggleMenu}
              className="w-8 h-8 border border-black rounded-full flex items-center justify-center hover:bg-gray-100"
              aria-expanded={menuOpen}
            >
              <span className="text-xl font-bold leading-none">...</span>
            </button>
          </div>
        </div>

        {/* Mobile menu & Services */}
        {/* Mobile menu & Services */}
{menuOpen && (
  <div className="md:hidden mt-1 px-4 pb-4 pt-3 flex flex-col gap-3 text-base font-medium text-gray-800 bg-white shadow rounded-b-xl">
    <NavLink to="/" end className={navLinkClass} onClick={closeAll}>
      Home
    </NavLink>

    <button
      onClick={toggleServices}
      className="flex items-center justify-between w-full py-2 hover:text-green-600"
      aria-expanded={servicesOpen}
      aria-controls="mobile-services"
    >
      Services
      <IoIosArrowDown
        className={`text-sm transition-transform ${servicesOpen ? "rotate-180" : ""}`}
      />
    </button>

    {servicesOpen && (
      <div id="mobile-services" className="mt-1 -mx-4 border-t">
        <div className="px-4 py-3">
          <NavLink
            to="/service"
            className="text-green-700 font-medium block"
            onClick={closeAll}
          >
            View all services →
          </NavLink>
        </div>
        <div className="px-2">
          <ServicePopup />
        </div>
      </div>
    )}

    <NavLink to="/testimonial" className={navLinkClass} onClick={closeAll}>
      Testimonial
    </NavLink>

    <NavLink to="/about_us" className={navLinkClass} onClick={closeAll}>
      About
    </NavLink>

    <NavLink to="/blogs" className={navLinkClass} onClick={closeAll}>
      Blog
    </NavLink>

    <NavLink to="/contactus" className={navLinkClass} onClick={closeAll}>
      Contact
    </NavLink>
  </div>
)}

      </div>
    </header>
  );
};

export default Navbar;
