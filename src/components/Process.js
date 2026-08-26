import React from "react";
import "./Process.css";

const processData = [
  {
    number: "01",
    title: "DISCOVER",
    description: (
      <>
        Mission & Analysis
        <br />
        Need Identification
      </>
    ),
    icon: "⌘",
  },
  {
    number: "02",
    title: "DESIGN",
    description: (
      <>
        System Architecture
        <br />
        & Detailed Design
      </>
    ),
    icon: "♧",
  },
  {
    number: "03",
    title: "SIMULATE",
    description: (
      <>
        Advanced Modeling
        <br />
        & Simulation
      </>
    ),
    icon: "♙",
  },
  {
    number: "04",
    title: "MANUFACTURE",
    description: (
      <>
        Precision Manufacturing
        <br />
        & Integration
      </>
    ),
    icon: "⚙",
  },
  {
    number: "05",
    title: "TEST",
    description: (
      <>
        Rigorous Testing &
        <br />
        Validation
      </>
    ),
    icon: "▥",
  },
  {
    number: "06",
    title: "DEPLOY",
    description: (
      <>
        Fielding, Training &
        <br />
        Life-Cycle Support
      </>
    ),
    icon: "⌁",
  },
];

const Process = () => {
  return (
    <section className="process-section container">

      {/* =========================
          HEADING - OUTSIDE BOX
      ========================== */}
      <div className="process-heading">
        <div className="process-eyebrow eyebrow-text">
          <span className="eyebrow-dot"></span>
          OUR PROCESS
        </div>

        <h2 className="section-heading">FROM CONCEPT TO MISSION</h2>
      </div>

      {/* =========================
          PROCESS RECTANGLE
      ========================== */}
      <div className="process-box ">

        {/* =========================
            TIMELINE
        ========================== */}
        <div className="process-timeline">

          {/* Connecting Line */}
          <div className="process-connector"></div>

          {processData.map((item) => (
            <div
              className="process-item"
              key={item.number}
            >

              {/* ICON */}
              <div className="process-icon-wrapper">
                <div className="process-icon">
                  <span>{item.icon}</span>
                </div>
              </div>

              {/* NUMBER */}
              <div className="process-number">
                {item.number}
              </div>

              {/* TITLE + DESCRIPTION */}
              <div className="process-info">
                <h3 className="cards-title">{item.title}</h3>

                <p className="cards-descp ">{item.description}</p>
              </div>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default Process;