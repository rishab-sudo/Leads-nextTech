import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">
          <div className="footer-logo">
            Lead<span>NXT</span>
          </div>

          <p className="footer-tagline">
            Engineering the future of defense with
            <br />
            innovative solutions, advanced systems
            <br />
            and unmatched commitment.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="LinkedIn">
              in
            </a>

            <a href="#" aria-label="YouTube">
              ▶
            </a>

            <a href="#" aria-label="X">
              X
            </a>
          </div>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h4>COMPANY</h4>

          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">News &amp; Media</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Capabilities */}
        <div className="footer-column">
          <h4>CAPABILITIES</h4>

          <ul>
            <li><a href="#">Air</a></li>
            <li><a href="#">Land</a></li>
            <li><a href="#">Naval</a></li>
            <li><a href="#">Underwater</a></li>
            <li><a href="#">AI &amp; Autonomy</a></li>
          </ul>
        </div>

        {/* Solutions */}
        <div className="footer-column">
          <h4>SOLUTIONS</h4>

          <ul>
            <li><a href="#">Gun Systems</a></li>
            <li><a href="#">Sonar Systems</a></li>
            <li><a href="#">UAV Systems</a></li>
            <li><a href="#">Surveillance</a></li>
            <li><a href="#">Communication</a></li>
          </ul>
        </div>

        {/* Technologies */}
        <div className="footer-column">
          <h4>TECHNOLOGIES</h4>

          <ul>
            <li><a href="#">Fire Control</a></li>
            <li><a href="#">Acoustic Warfare</a></li>
            <li><a href="#">Sensor Fusion</a></li>
            <li><a href="#">Autonomous Systems</a></li>
            <li><a href="#">AI/ML</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-column">
          <h4>SUPPORT</h4>

          <ul>
            <li><a href="#">24/7 On-cycle Support</a></li>
            <li><a href="#">Training</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Customer Portal</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>
          © 2024 LeadNXT Defence &amp; Underwater Technologies. All Rights Reserved.
        </p>

        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;