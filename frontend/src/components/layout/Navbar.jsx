import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for hamburger menu

const Navbar = () => {
  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "PRODUCTS", path: "/products" },
    { name: "ABOUT", path: "/about" },
    { name: "LOGIN", path: "/login" },
    { name: "SIGN UP", path: "/signup" },
  ];

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu toggle

  // Handle scroll to hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-black backdrop-blur-md bg-opacity text-white py-4 px-6 md:px-12 flex justify-between items-center transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo */}
      <NavLink to="/" className="text-3xl font-bold tracking-wider">
        LAYERS
      </NavLink>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex gap-10 px-2 py-2">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className="text-white tracking-wider transition-all hover:scale-110 hover:font-bold"
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* Hamburger Icon for Mobile */}
      <div
        className="md:hidden text-3xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center gap-6 py-6 md:hidden transition-all duration-300">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)} // Close menu on link click
              className="text-white text-lg tracking-wider hover:text-teal-400 transition-all"
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
