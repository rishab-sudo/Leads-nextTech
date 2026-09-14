import React from "react";
import commitmentBannerImage from "../assets/team_banner.png";
import "./Team.css";
import Expertise from "./ExpertiesCards";
import SectionLabel from "./SectionLabel";

const Team = () => {
  return (
    <div className="container g-0" id="Team">

      {/* =========================================================
          MISSION & VISION
      ========================================================= */}
      <section className="mission vision">

        {/* EYEBROW */}
        <SectionLabel title=" team & leadership" />

        {/* SECTION HEADING */}
        <div className="mission-header ">
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

        {/* =========================================================
            MISSION & VISION CARDS
        ========================================================= */}
        <div className="mission-cards">

          {/* =========================
              MISSION CARD
          ========================== */}
          <article className="mission-card mission-card-primary">

            <div className="mission-card-inner">

              {/* QUOTE + HEADING */}
              <div className="mission-card-title-row">

                <div className="quote-mark">
                  “
                </div>

                <div className="mission-card-label">
                  <h2 className="mission-heading vision-heading">
                    Core Mission Statement
                  </h2>
                </div>

              </div>

              {/* MISSION TEXT */}
              <p className="mission-card-text">
                To bridge the gap between emerging operational challenges and
                field-ready capabilities by delivering intelligent, sovereign,
                and resilient defence systems - engineered from first
                principles and proven in production.
              </p>

            </div>

          </article>


          {/* =========================
              VISION CARD
          ========================== */}
          <article className="mission-card vision-card">

            <div className="vision-card-inner">

              {/* QUOTE + HEADING */}
              <div className="vision-card-title-row">

                <div className="vision-quote-mark">
                  “
                </div>

                <div className="vision-heading-wrapper">
                  <h2 className="vision-heading">
                    The Leadership Vision
                  </h2>
                </div>

              </div>

              {/* VISION TEXT */}
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



    {/* =========================================================
    CORE COMMITMENTS
========================================================= */}
<section className="commitment">

  {/* SECTION HEADING */}
  <div className="commitment-heading">
    <h2 className="section-heading">
      Our Core Commitments
    </h2>
  </div>


  {/* =========================================================
      COMMITMENT GRID
  ========================================================= */}
  <div className="commitment-grid">

    {/* =========================
        BOX 01
    ========================== */}
    <article className="commitment-box commitment-box-active">

      <div className="commitment-box-content">

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

      </div>

    

    </article>


    {/* =========================
        BOX 02
    ========================== */}
    <article className="commitment-box">

      <div className="commitment-box-content">

        <span className="commitment-number">
          02
        </span>

        <h3>
          Sovereign Technological Depth
        </h3>

        <p>
          In-house research, design, and integration - from AI-driven
          EO/IR fire control to autonomous towed-array acoustic
          classification.
        </p>

      </div>

     

    </article>


    {/* =========================
        BOX 03
    ========================== */}
    <article className="commitment-box">

      <div className="commitment-box-content">

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


    {/* =========================
        BOX 04
    ========================== */}
    <article className="commitment-box">

      <div className="commitment-box-content">

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

</section>


      {/* =========================================================
          COMMITMENT BANNER
      ========================================================= */}
      <section
        className="commitment-banner"
        style={{
          backgroundImage: `url(${commitmentBannerImage})`,
        }}
      >

        {/* BACKGROUND OVERLAY */}
        <div className="commitment-banner-overlay"></div>

        {/* CONTENT */}
        <div className="commitment-banner-content">

          {/* EYEBROW */}
          <span className="commitment-banner-eyebrow">
            OUR COMMITMENT
          </span>

          {/* MAIN STATEMENT */}
          <h2 className="commitment-banner-title">
            Our mandate at LNXТ is straightforward: we do not just
            adapt to the future of multi-domain defence - 
            <em>
               we build the platforms that define it.
            </em>{" "}
            From modernizing firepower on land to mastering acoustic
            intelligence underwater, our team is united by purpose,
            precision, and production excellence.
          </h2>

          {/* ATTRIBUTION */}
          <div className="commitment-banner-attribution">

            <span className="commitment-banner-dash">
              —
            </span>

            <span>
              Executive Leadership, LNXТ
            </span>

          </div>

        </div>

      </section>


      {/* EXPERTISE */}
      <Expertise />

    </div>
  );
};

export default Team;