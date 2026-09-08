import React, { useState } from "react";
import ContactPopup from "./ContactPopup";
import "./StrategicPartnership.css";

const StrategicPartnership = () => {
  const [showContactPopup, setShowContactPopup] = useState(false);

  const capabilities = [
    { icon: "◈", title: "INDIGENOUS DESIGN", subtitle: "& DEVELOPMENT" },
    { icon: "⛓", title: "SYSTEM INTEGRATION", subtitle: "EXPERTISE" },
    { icon: "◉", title: "QUALITY ASSURANCE", subtitle: "ISO 9001:2015" },
    { icon: "◇", title: "MISSION CRITICAL", subtitle: "SUPPORT" },
  ];

  const scrollToExploreTech = () => {
    const section = document.getElementById("ExploreTech");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <section className="strategic-section container g-0">
        <div className="strategic-wrapper">

          <div className="strategic-content">

            <div className="strategic-eyebrow eyebrow-text eyebrow">
              <span>✦</span>
              CRAFTED BY
            </div>

            <h2 className="section-heading">
              STRATEGIC PARTNERSHIP &amp; CAPABILITIES
            </h2>

            <div className="capabilities-list">
              {capabilities.map((item, index) => (
                <div className="capability-item" key={index}>
                  <div className="capability-icon">{item.icon}</div>
                  <div className="capability-text">
                    <span>{item.title}</span>
                    <span>{item.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          <div className="strategic-cta">

            <div className="cta-overlay"></div>

            <div className="cta-content">

              <h3 className="section-heading">
                Partner with an engineering<br />
                team built for defence innovation.
              </h3>

              <div className="cta-buttons">
                <button
                  className="cta-button cta-button-primary"
                  type="button"
                  onClick={() => setShowContactPopup(true)}
                >
                  <span>CONNECT WITH OUR LEADERSHIP</span>
                  <strong>→</strong>
                </button>

                <button
                  className="cta-button cta-button-secondary"
                  type="button"
                  onClick={scrollToExploreTech}
                >
                  <span>EXPLORE OUR CAPABILITIES</span>
                  <strong>→</strong>
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      <ContactPopup
        isOpen={showContactPopup}
        onClose={() => setShowContactPopup(false)}
      />
    </>
  );
};

export default StrategicPartnership;