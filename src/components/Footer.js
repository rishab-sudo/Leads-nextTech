import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const quickLinks = [
    { name: "Make In India", target: "MakeinIndia" },
    { name: "Process", target: "Process" },
    { name: "Technology", target: "DualFocusSection" },
    { name: "Infrastructure", target: "Infrastructure" },
  ];

  const solutions = [
    { name: "Gun Systems", target: "DualFocusSection" },
    { name: "Sonar Systems", target: "DualFocusSection" },
    { name: "UAV Systems", target: "DualFocusSection" },
    { name: "Surveillance", target: "DualFocusSection" },
    { name: "Communication", target: "DualFocusSection" },
  ];

  const support = [

  ];

  const scrollToSection = (targetId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(targetId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section — logo on top, tagline below (3 lines) */}
        <div className="footer-brand">
          <Link to="/" className="navbar-logo footer-logo-link">
            <div className="logo-main">
              <img src={require("../assets/leadNext-logo.png")} alt="LeadNXT" />
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

        {/* Quick Links — mirrors navbar links, scrolls to section */}
        <div className="footer-column">
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

        {/* Solutions — all route into the DualFocusSection */}
        <div className="footer-column">
          <h4>SOLUTIONS</h4>
          <ul>
            {solutions.map((link, i) => (
              <li key={`${link.target}-${i}`}>
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

        {/* Support — first 2 points + social links */}
        <div className="footer-column">
          <h4>Social Links</h4>
          <ul>
            {support.map((item) => (
              <li key={item.name}>
                <a href="/contact">{item.name}</a>
              </li>
            ))}
          </ul>

          <div className="footer-socials">
            <a href="/contact" aria-label="LinkedIn">in</a>
            <a href="/contact" aria-label="YouTube">▶</a>
            <a href="/contact" aria-label="X">X</a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>© 2026 LeadNXT Defence &amp; Underwater Technologies. All Rights Reserved.</p>

        <div className="footer-legal">
          <a href="/contact">Privacy Policy</a>
          <span>|</span>
          <a href="/contact">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;