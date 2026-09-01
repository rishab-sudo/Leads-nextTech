
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ContactPopup from "./ContactPopup";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);

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
      target: "DualFocusSection",
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
     OPEN CONTACT POPUP
  ----------------------------------------- */
  const openContactPopup = () => {
    closeMenu();
    setShowContactPopup(true);
  };

  /* -----------------------------------------
     CLOSE CONTACT POPUP
  ----------------------------------------- */
  const closeContactPopup = () => {
    setShowContactPopup(false);
  };

  /* -----------------------------------------
     SMOOTH SCROLL
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
     LOGO CLICK
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

  return (
    <>
      {/* =========================================
          NAVBAR
      ========================================= */}
      <header className="navbar">
        <div className="navbar-container">

          {/* LOGO */}
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

          {/* DESKTOP NAVIGATION */}
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

          {/* DESKTOP ACTION */}
          <div className="navbar-actions">
            <button
              type="button"
              className="get-touch-btn"
              onClick={openContactPopup}
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight size={15} />
            </button>
          </div>

          {/* MOBILE MENU */}
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
          MOBILE DRAWER
      ========================================= */}
      <aside
        className={`mobile-drawer ${
          menuOpen ? "open" : ""
        }`}
        aria-hidden={!menuOpen}
      >

        {/* DRAWER HEADER */}
        <div className="drawer-header">

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


        {/* MOBILE NAVIGATION */}
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
              <span className="mobile-link-number">
                0{index + 1}
              </span>

              <span className="mobile-link-label">
                {link.name}
              </span>

              <ArrowUpRight
                className="mobile-link-arrow"
                size={18}
              />
            </button>
          ))}
        </nav>


        {/* DRAWER FOOTER */}
        <div className="drawer-footer">

          <button
            type="button"
            className="drawer-contact-btn"
            onClick={openContactPopup}
          >
            <span>GET IN TOUCH</span>

            <ArrowUpRight size={17} />
          </button>

          <p>
            SCIENCE • INNOVATION • TECHNOLOGY
          </p>
        </div>
      </aside>


      {/* =========================================
          CONTACT POPUP COMPONENT
      ========================================= */}
      <ContactPopup
        isOpen={showContactPopup}
        onClose={closeContactPopup}
      />
    </>
  );
};

export default Navbar;

