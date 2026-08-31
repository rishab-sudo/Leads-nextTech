import React from "react";
import "./Infrastructure.css";

const Infrastructure = () => {
  return (
    <section className="infrastructure-section container" id="Infrastructure">
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
      {/* ================= CARDS ================= */}
      <div className="infrastructure-grid">

        {/* ================= FACILITY CARD ================= */}
        <div className="infrastructure-card facility-card">

          <div className="card-top-label">
            OUR INFRASTRUCTURE
          </div>

          <h3>
            5000+ SQ. M INTEGRATED FACILITY
          </h3>

          <div className="facility-content">

            {/* IMAGE */}
            <div className="facility-image-wrap">
              <img
                src={require("../assets/soldier-img.jpg")}
                alt="Integrated Facility"
                className="facility-image"
              />

              <button className="infrastructure-btn facility-btn">
                EXPLORE FACILITY
                <span>→</span>
              </button>
            </div>

            {/* FEATURE LIST */}
            <div className="facility-features">

              <div className="facility-feature">
                <div className="feature-icon">◈</div>

                <div className="feature-content">
                  <h4>PRO LABS</h4>
                  <p>
                    Advanced research
                    <br />
                    & system design
                  </p>
                </div>

                <span className="feature-arrow">→</span>
              </div>

              <div className="facility-feature">
                <div className="feature-icon">◫</div>

                <div className="feature-content">
                  <h4>TEST & VALIDATION</h4>
                  <p>
                    Development, testing
                    <br />
                    & system testing
                  </p>
                </div>

                <span className="feature-arrow">→</span>
              </div>

              <div className="facility-feature">
                <div className="feature-icon">◉</div>

                <div className="feature-content">
                  <h4>MANUFACTURING</h4>
                  <p>
                    Pilot, fabrication &
                    <br />
                    precision assembly
                  </p>
                </div>

                <span className="feature-arrow">→</span>
              </div>

              <div className="facility-feature">
                <div className="feature-icon">◌</div>

                <div className="feature-content">
                  <h4>INTEGRATION</h4>
                  <p>
                    System integration
                    <br />
                    & certification
                  </p>
                </div>

                <span className="feature-arrow">→</span>
              </div>

            </div>
          </div>
        </div>

        {/* ================= AI CENTRE CARD ================= */}
        <div className="infrastructure-card ai-card">

          <div className="card-top-label">
            AI CENTRE OF EXCELLENCE
          </div>

          <h3>
            AI CENTRE OF EXCELLENCE
          </h3>

          <div className="ai-image-wrap">

            <img
              src={require("../assets/soldier-img.jpg")}
              alt="AI Centre of Excellence"
              className="ai-image"
            />

            <button className="infrastructure-btn ai-btn">
              EXPLORE AI CAPABILITIES
              <span>→</span>
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Infrastructure;