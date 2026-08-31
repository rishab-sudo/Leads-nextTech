import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  /* -----------------------------------------
     NAVIGATION LINKS
  ----------------------------------------- */
  const navLinks = [
    {
      name: "MAKE IN INDIA",
      target: "MakeinIndia",
    },
    {
      name: "PROCESS",
      target: "Process",
    },
    {
      name: "TECHNOLOGY",
      target: "Technology",
    },
    {
      name: "INFRASTRUCTURE",
      target: "Infrastructure",
    },
  ];

  /* -----------------------------------------
     CLOSE MOBILE MENU
  ----------------------------------------- */
  const closeMenu = () => {
    setMenuOpen(false);
  };

  /* -----------------------------------------
     SMOOTH SCROLL TO SECTION
  ----------------------------------------- */
  const scrollToSection = (targetId) => {
    closeMenu();

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const section = document.getElementById(targetId);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    } else {
      const section = document.getElementById(targetId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  /* -----------------------------------------
     HANDLE LOGO CLICK
  ----------------------------------------- */
  const handleLogoClick = () => {
    closeMenu();

    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  /* -----------------------------------------
     CONTACT PAGE
  ----------------------------------------- */
  const handleContactClick = () => {
    closeMenu();
    navigate("/contact");
  };

  return (
    <>
      {/* =========================================
          NAVBAR
      ========================================= */}
      <header className="navbar">
        <div className="navbar-container">

          {/* =====================================
              DESKTOP / MAIN LOGO
          ===================================== */}
          <Link
            to="/"
            className="navbar-logo"
            onClick={handleLogoClick}
          >
            <div className="logo-main">
              <img
                src={require("../assets/leadNext-logo.png")}
                alt="LeadNXT"
              />
            </div>
          </Link>

          {/* =====================================
              DESKTOP NAVIGATION
          ===================================== */}
          <nav
            className="desktop-nav"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <button
                key={link.target}
                type="button"
                className={`nav-link ${
                  location.hash === `#${link.target}`
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  scrollToSection(link.target)
                }
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* =====================================
              DESKTOP RIGHT ACTIONS
          ===================================== */}
          <div className="navbar-actions">
            <button
              type="button"
              className="get-touch-btn"
              onClick={handleContactClick}
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight size={15} />
            </button>
          </div>

          {/* =====================================
              MOBILE HAMBURGER
          ===================================== */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            type="button"
          >
            <Menu
              size={25}
              strokeWidth={1.5}
            />
          </button>
        </div>
      </header>

      {/* =========================================
          MOBILE OVERLAY
      ========================================= */}
      <div
        className={`menu-overlay ${
          menuOpen ? "show" : ""
        }`}
        onClick={closeMenu}
      ></div>

      {/* =========================================
          MOBILE SIDE DRAWER
      ========================================= */}
      <aside
        className={`mobile-drawer ${
          menuOpen ? "open" : ""
        }`}
        aria-hidden={!menuOpen}
      >

        {/* =====================================
            DRAWER TOP
        ===================================== */}
        <div className="drawer-header">

          {/* Same Logo As Desktop */}
          <Link
            to="/"
            className="drawer-logo"
            onClick={handleLogoClick}
          >
            <div className="drawer-logo-main">
              <img
                src={require("../assets/leadNext-logo.png")}
                alt="LeadNXT"
              />
            </div>
          </Link>

          {/* Close Button */}
          <button
            className="drawer-close"
            onClick={closeMenu}
            aria-label="Close menu"
            type="button"
          >
            <X
              size={25}
              strokeWidth={1.5}
            />
          </button>
        </div>

        {/* =====================================
            MOBILE NAVIGATION
        ===================================== */}
        <nav
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link, index) => (
            <button
              key={link.target}
              type="button"
              onClick={() =>
                scrollToSection(link.target)
              }
              className="mobile-nav-link"
              style={{
                transitionDelay: menuOpen
                  ? `${index * 0.05}s`
                  : "0s",
              }}
            >
              {/* Number */}
              <span className="mobile-link-number">
                0{index + 1}
              </span>

              {/* Label */}
              <span className="mobile-link-label">
                {link.name}
              </span>

              {/* Arrow */}
              <ArrowUpRight
                className="mobile-link-arrow"
                size={18}
              />
            </button>
          ))}
        </nav>

        {/* =====================================
            DRAWER FOOTER
        ===================================== */}
        <div className="drawer-footer">

          <button
            type="button"
            className="drawer-contact-btn"
            onClick={handleContactClick}
          >
            <span>GET IN TOUCH</span>

            <ArrowUpRight size={17} />
          </button>

          <p>
            SCIENCE • INNOVATION • TECHNOLOGY
          </p>
        </div>
      </aside>
    </>
  );
};

export default Navbar;