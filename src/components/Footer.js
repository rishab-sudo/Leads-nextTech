import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const quickLinks = [
    { name: "Team", target: "Team" },
    { name: "Process", target: "Process" },
    { name: "Technology", target: "ExploreTech" },
    { name: "Infrastructure", target: "Infrastructure" },
    { name: "Make In India", target: "MakeinIndia" },
  ];

  const solutions = [
    { name: "Land Systems", target: "DualFocusSection" },
    { name: "UnderWater Systems", target: "DualFocusSection" },
  ];

  const scrollToSection = (targetId) => {
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

  return (
    <footer className="footer">
      {/* =========================
          MAIN FOOTER SECTION
      ========================= */}
      <div className="footer-main">
        <div className="footer-container">

          {/* =========================
              BRAND
          ========================= */}
          <div className="footer-column footer-brand">
            <Link to="/" className="footer-logo-link">
              <div className="logo-main">
                <img
                  src={require("../assets/leadNext-logo.png")}
                  alt="LeadNXT"
                />
              </div>
            </Link>

            <div className="footer-brand-info">
              <p className="footer-tagline">
                Engineering the future of defense with
                <br />
                innovative solutions, advanced systems
                <br />
                and unmatched commitment.
              </p>
            </div>
          </div>

          {/* =========================
              QUICK LINKS
          ========================= */}
          <div className="footer-column footer-links-column">
            <h4>QUICK LINKS</h4>

            <ul>
              {quickLinks.map((link) => (
                <li key={link.target}>
                  <button
                    type="button"
                    className="footer-link-btn"
                    onClick={() => scrollToSection(link.target)}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================
              SOLUTIONS
          ========================= */}
          <div className="footer-column footer-links-column">
            <h4>SOLUTIONS</h4>

            <ul>
              {solutions.map((link, index) => (
                <li key={`${link.target}-${index}`}>
                  <button
                    type="button"
                    className="footer-link-btn"
                    onClick={() => scrollToSection(link.target)}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================
              SOCIAL LINKS
          ========================= */}
          <div className="footer-column footer-social-column">
            <h4>SOCIAL LINKS</h4>

            <div className="footer-socials">
              <a
                href="https://www.linkedin.com/company/leadsnextech/"
                aria-label="LinkedIn"
                className="linkedin-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>LinkedIn</span>

                <span className="linkedin-icon">
                  in
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* =========================
          BOTTOM FOOTER
      ========================= */}
      <div className="footer-bottom">
        <p>
          © 2026 LeadsnexTech. All Rights
          Reserved.
        </p>

        {/* =========================
            LEGAL LINKS
        ========================= */}
        {/* 
        <div className="footer-legal">
          <a href="/contact">Privacy Policy</a>

          <span>|</span>

          <a href="/contact">Terms of Use</a>
        </div>
        */}
      </div>
    </footer>
  );
};

export default Footer;