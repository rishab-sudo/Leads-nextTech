import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "CAPABILITIES", path: "/capabilities" },
    { name: "SOLUTIONS", path: "/solutions" },
    { name: "TECHNOLOGIES", path: "/technologies" },
    { name: "FACILITY", path: "/facility" },
    { name: "ABOUT US", path: "/about-us" },
    { name: "CAREERS", path: "/careers" },
    { name: "CONTACT", path: "/contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">

          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <div className="logo-main">
          <img src={require("../assets/leadNext-logo.png")}alt=""/>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link ${
                  link.name === "HOME" ? "active" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="navbar-actions">

            <Link to="/contact" className="get-touch-btn">
              <span>GET IN TOUCH</span>
              <ArrowUpRight size={15} />
            </Link>

            <button
              className="desktop-menu-btn"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <span></span>
              <span></span>
            </button>

          </div>

          {/* Mobile Hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={25} strokeWidth={1.5} />
          </button>

        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`menu-overlay ${menuOpen ? "show" : ""}`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Side Drawer */}
      <aside className={`mobile-drawer ${menuOpen ? "open" : ""}`}>

        <div className="drawer-header">

          <Link
            to="/"
            className="navbar-logo drawer-logo"
            onClick={closeMenu}
          >
            <span className="logo-main">
              Lead<span>NXT</span>
            </span>

            <span className="logo-tagline">
              SCIENCE • INNOVATION • TECHNOLOGY
            </span>
          </Link>

          <button
            className="drawer-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X size={25} strokeWidth={1.5} />
          </button>

        </div>

        <nav className="mobile-nav">

          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              className="mobile-nav-link"
              style={{
                transitionDelay: menuOpen
                  ? `${index * 0.05}s`
                  : "0s",
              }}
            >
              <span className="mobile-link-number">
                0{index + 1}
              </span>

              <span>{link.name}</span>

              <ArrowUpRight
                className="mobile-link-arrow"
                size={18}
              />
            </Link>
          ))}

        </nav>

        <div className="drawer-footer">

          <Link
            to="/contact"
            className="drawer-contact-btn"
            onClick={closeMenu}
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight size={17} />
          </Link>

          <p>
            SCIENCE • INNOVATION • TECHNOLOGY
          </p>

        </div>

      </aside>
    </>
  );
};

export default Navbar;