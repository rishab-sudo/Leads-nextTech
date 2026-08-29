import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container ">

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
            <a href="/contact" aria-label="LinkedIn">
              in
            </a>

            <a href="/contact" aria-label="YouTube">
              ▶
            </a>

            <a href="/contact" aria-label="X">
              X
            </a>
          </div>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h4>COMPANY</h4>

          <ul>
            <li><a href="/contact">About Us</a></li>
            <li><a href="/contact">Careers</a></li>
            <li><a href="/contact">News &amp; Media</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Capabilities */}
        <div className="footer-column">
          <h4>CAPABILITIES</h4>

          <ul>
            <li><a href="/contact">Air</a></li>
            <li><a href="/contact">Land</a></li>
            <li><a href="/contact">Naval</a></li>
            <li><a href="/contact">Underwater</a></li>
            <li><a href="/contact">AI &amp; Autonomy</a></li>
          </ul>
        </div>

        {/* Solutions */}
        <div className="footer-column">
          <h4>SOLUTIONS</h4>

          <ul>
            <li><a href="/contact">Gun Systems</a></li>
            <li><a href="/contact">Sonar Systems</a></li>
            <li><a href="/contact">UAV Systems</a></li>
            <li><a href="/contact">Surveillance</a></li>
            <li><a href="/contact">Communication</a></li>
          </ul>
        </div>

        {/* Technologies */}
        <div className="footer-column">
          <h4>TECHNOLOGIES</h4>

          <ul>
            <li><a href="/contact">Fire Control</a></li>
            <li><a href="/contact">Acoustic Warfare</a></li>
            <li><a href="/contact">Sensor Fusion</a></li>
            <li><a href="/contact">Autonomous Systems</a></li>
            <li><a href="/contact">AI/ML</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-column">
          <h4>SUPPORT</h4>

          <ul>
            <li><a href="/contact">24/7 On-cycle Support</a></li>
            <li><a href="/contact">Training</a></li>
            <li><a href="/contact">Documentation</a></li>
            <li><a href="/contact">Customer Portal</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>
          © 2024 LeadNXT Defence &amp; Underwater Technologies. All Rights Reserved.
        </p>

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