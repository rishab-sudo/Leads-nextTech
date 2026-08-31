import React from "react";
import "./Infrastructure.css";

const Infrastructure = () => {
  return (
    <section
      className="infrastructure-section container"
      id="Infrastructure"
    >
      {/* ================= SECTION HEADING ================= */}
      <div className="infrastructure-header">
        <span className="infrastructure-eyebrow eyebrow-text OUR STRENGTH">
          OUR INFRASTRUCTURE
        </span>

        <h2 className="section-heading">
          BUILT FOR INNOVATION.
          <br />
          READY FOR SCALE.
        </h2>

        <p className="section-subHeading">
          Advanced infrastructure and intelligent capabilities
          <br />
          engineered to accelerate innovation.
        </p>
      </div>

      {/* ================= FACILITY CARD ================= */}
      <div className="infrastructure-grid">

        <div className="infrastructure-card facility-card">

          {/* CARD LABEL */}
          <p className="card-top-label">
            OUR INFRASTRUCTURE
          </p>

          {/* CARD HEADING */}
          <h3>
            5000+ SQ. M INTEGRATED FACILITY
          </h3>

          <div className="facility-content">

            {/* ================= IMAGE ================= */}
            <div className="facility-image-wrap">

              <img
                src={require("../assets/lab.png")}
                alt="Integrated Facility"
                className="facility-image"
              />

              <button className="infrastructure-btn facility-btn">
                EXPLORE FACILITY
                <span>→</span>
              </button>

            </div>

            {/* ================= FEATURE LIST ================= */}
            <div className="facility-features">

              {/* FEATURE 01 */}
              <div className="facility-feature">

                <div className="feature-icon">
                  ◈
                </div>

                <div className="feature-content">
                  <h4>PRO LABS</h4>

                  <p>
                    Advanced research
                    <br />
                    &amp; system design
                  </p>
                </div>

                <span className="feature-arrow">
                  →
                </span>

              </div>

              {/* FEATURE 02 */}
              <div className="facility-feature">

                <div className="feature-icon">
                  ◫
                </div>

                <div className="feature-content">
                  <h4>TEST &amp; VALIDATION</h4>

                  <p>
                    Development, testing
                    <br />
                    &amp; system testing
                  </p>
                </div>

                <span className="feature-arrow">
                  →
                </span>

              </div>

              {/* FEATURE 03 */}
              <div className="facility-feature">

                <div className="feature-icon">
                  ◉
                </div>

                <div className="feature-content">
                  <h4>MANUFACTURING</h4>

                  <p>
                    Pilot, fabrication &amp;
                    <br />
                    precision assembly
                  </p>
                </div>

                <span className="feature-arrow">
                  →
                </span>

              </div>

              {/* FEATURE 04 */}
              <div className="facility-feature">

                <div className="feature-icon">
                  ◌
                </div>

                <div className="feature-content">
                  <h4>INTEGRATION</h4>

                  <p>
                    System integration
                    <br />
                    &amp; certification
                  </p>
                </div>

                <span className="feature-arrow">
                  →
                </span>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Infrastructure;