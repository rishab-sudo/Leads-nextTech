import React from "react";
import commitmentBannerImage from "../assets/team_banner.png"
import "./Team.css";
import Expertise from "./ExpertiesCards";

const Team = () => {
  return (
    <div className="container">
      <section className="mission vision">

        {/* =========================
            EYEBROW
        ========================== */}
        <div className="eyebrow-text eyebrow">
          TEAM &amp; LEADERSHIP
        </div>

        {/* =========================
            SECTION HEADING
        ========================== */}
        <div className="mission-header section-heading">
          <h1 className="section-heading">
            Driven by Mission.
            <br />
            Engineered for Dominance.
          </h1>

          <p className="mission-subheading section-subHeading">
            Behind LNXТ is a dedicated cadre of defence innovators, system
            architects, AI researchers, and precision engineers committed to
            delivering uncompromised technological superiority across Land and
            Underwater domains.
          </p>
        </div>

        {/* =========================
            CARDS
        ========================== */}
        <div className="mission-cards">

          {/* =========================
              MISSION CARD
          ========================== */}
          <article className="mission-card mission-card-primary">
            <div className="mission-card-inner">

              <div className="quote-mark">
                “
              </div>

              <div className="mission-card-label">
                Core Mission Statement
              </div>

              <p className="mission-card-text">
                To bridge the gap between emerging operational challenges and
                field-ready capabilities by delivering intelligent, sovereign,
                and resilient defence systems — engineered from first
                principles and proven in production.
              </p>

            </div>
          </article>


          {/* =========================
              VISION CARD
          ========================== */}
          <article className="mission-card vision-card">
            <div className="vision-card-inner">

              <h2>
                The Leadership Vision
              </h2>

              <p>
                Modern warfare demands speed, intelligence, and survivability.
                Our leadership has established a singular focus: transform
                complex operational requirements into deployable,
                next-generation platforms without the friction of legacy
                development cycles.
              </p>

              <p>
                By combining cutting-edge artificial intelligence with robust
                electromechanical engineering, advanced composite materials,
                and acoustic sensor design, we empower armed forces with
                systems that act faster, detect farther, and withstand the
                harshest environments.
              </p>

            </div>
          </article>

        </div>
      </section>

      <section className="commitment">

        {/* =========================
            SECTION HEADING
        ========================== */}
        <div className="commitment-heading">
          <span className="commitment-section-number">02</span>
          <h2>Our Core Commitments</h2>
        </div>


        {/* =========================
            COMMITMENT GRID
        ========================== */}
        <div className="commitment-grid">

          {/* =================================================
              LEFT LARGE CARD - 50%
          ================================================= */}
          <div className="commitment-feature">

            <div className="commitment-feature-content">

              {/* POINT 01 */}
              <article className="commitment-feature-point">

                <span className="commitment-number">
                  01
                </span>

                <h3>
                  Mission-First Engineering
                </h3>

                <p>
                  Every line of code, circuit board, and composite shield is
                  designed with the warfighter in mind. We build systems that
                  perform reliably when failure is not an option.
                </p>

              </article>


              {/* POINT 02 */}
              <article className="commitment-feature-point">

                <span className="commitment-number">
                  02
                </span>

                <h3>
                  Sovereign Technological Depth
                </h3>

                <p>
                  In-house research, design, and integration — from AI-driven
                  EO/IR fire control to autonomous towed-array acoustic
                  classification.
                </p>

              </article>

            </div>


            {/* ARROW */}
            <span className="commitment-arrow">
              →
            </span>

          </div>


          {/* =================================================
              RIGHT SIDE - 50%
          ================================================= */}
          <div className="commitment-side">

            {/* POINT 03 */}
            <article className="commitment-side-card">

              <div className="commitment-side-content">

                <span className="commitment-number">
                  03
                </span>

                <h3>
                  Agility, Problem to Deployment
                </h3>

                <p>
                  We reject bureaucratic development cycles. Agile teams move
                  from prototype to qualified production fast.
                </p>

              </div>

            </article>


            {/* POINT 04 */}
            <article className="commitment-side-card">

              <div className="commitment-side-content">

                <span className="commitment-number">
                  04
                </span>

                <h3>
                  Unwavering Defence Qualification
                </h3>

                <p>
                  Strict adherence to MIL-STD, rigorous environmental
                  qualification, zero-compromise QA on every build.
                </p>

              </div>

            </article>

          </div>

        </div>
      </section>
      {/*  */}

          <section
      className="commitment-banner "
      style={{
        backgroundImage: `url(${commitmentBannerImage})`,
      }}
    >
      {/* Background Overlay */}
      <div className="commitment-banner-overlay"></div>

      {/* Content */}
      <div className="commitment-banner-content">

        {/* Eyebrow */}
        <span className="commitment-banner-eyebrow">
          OUR COMMITMENT
        </span>

        {/* Main Statement */}
        <h2 className="commitment-banner-title">
          Our mandate at LNXТ is straightforward: we do not just
          adapt to the future of multi-domain defence - 
          <em>we build the platforms that define it.</em>{" "}
          From modernizing firepower on land to mastering acoustic
          intelligence underwater, our team is united by purpose,
          precision, and production excellence.
        </h2>

        {/* Attribution */}
        <div className="commitment-banner-attribution">
          <span className="commitment-banner-dash">—</span>
          <span>Executive Leadership, LNXТ</span>
        </div>

      </div>
    </section>

    <Expertise/>
    </div>
  );
};

export default Team;