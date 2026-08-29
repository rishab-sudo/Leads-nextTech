import React from "react";
import "./StrategicPartnership.css";

const StrategicPartnership = () => {
  const capabilities = [
    {
      icon: "◈",
      title: "INDIGENOUS DESIGN",
      subtitle: "& DEVELOPMENT",
    },
    {
      icon: "⛓",
      title: "SYSTEM INTEGRATION",
      subtitle: "EXPERTISE",
    },
    {
      icon: "◉",
      title: "QUALITY ASSURANCE",
      subtitle: "ISO 9001:2015",
    },
    {
      icon: "◇",
      title: "MISSION CRITICAL",
      subtitle: "SUPPORT",
    },
  ];

  return (
    <section className="strategic-section container g-0">
      <div className="strategic-wrapper">

        {/* =========================================
            LEFT CONTENT
        ========================================= */}

        <div className="strategic-content">

          <div className="strategic-eyebrow eyebrow-text">
            <span>✦</span>
            CRAFTED BY
          </div>

          <h2 className="section-heading">
            STRATEGIC PARTNERSHIP &amp; CAPABILITIES
          </h2>

          <div className="capabilities-list">

            {capabilities.map((item, index) => (
              <div
                className="capability-item"
                key={index}
              >

                <div className="capability-icon">
                  {item.icon}
                </div>

                <div className="capability-text">
                  <span>{item.title}</span>
                  <span>{item.subtitle}</span>
                </div>

              </div>
            ))}

          </div>

        </div>


        {/* =========================================
            RIGHT CTA
        ========================================= */}

        <div className="strategic-cta">

          <div className="cta-overlay"></div>

          <div className="cta-content">

            <h3>
              LET'S BUILD THE FUTURE OF DEFENCE
            </h3>

            <p>
              Partner with LeadNext to engineer advanced,
              reliable and future-ready defence solutions.
            </p>

            <button className="cta-button">
              <span>TALK TO OUR EXPERTS</span>
              <strong>→</strong>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default StrategicPartnership;