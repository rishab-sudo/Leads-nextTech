
import React, { useEffect, useRef } from "react";
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
  const processBoxRef = useRef(null);
  const currentSlide = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      // Auto slide only on mobile
      if (window.innerWidth > 767) {
        currentSlide.current = 0;
      }
    };

    const autoSlide = setInterval(() => {
      // Only run auto slide on mobile
      if (window.innerWidth > 767 || !processBoxRef.current) {
        return;
      }

      const box = processBoxRef.current;
      const timeline = box.querySelector(".process-timeline");

      if (!timeline) return;

      const items = timeline.querySelectorAll(".process-item");

      if (!items.length) return;

      currentSlide.current =
        (currentSlide.current + 1) % items.length;

      const targetItem = items[currentSlide.current];

      box.scrollTo({
        left: targetItem.offsetLeft - 30,
        behavior: "smooth",
      });
    }, 2500);

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(autoSlide);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className="process-section container g-0"
      id="Process"
    >
      {/* =========================
          HEADING
      ========================== */}
      <div className="process-heading">
        <div className="process-eyebrow eyebrow-text eyebrow">
          <span className="eyebrow-dot"></span>
          OUR PROCESS
        </div>

        <h2 className="section-heading">
          FROM CONCEPT TO MISSION
        </h2>
      </div>

      {/* =========================
          PROCESS RECTANGLE
      ========================== */}
      <div
        className="process-box"
        ref={processBoxRef}
      >
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
                <h3 className="cards-title">
                  {item.title}
                </h3>

                <p className="cards-descp">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

