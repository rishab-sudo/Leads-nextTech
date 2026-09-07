import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Process.css";

gsap.registerPlugin(ScrollTrigger);

const processData = [
  {
    number: "01",
    title: "DISCOVERY & DEFINITION",
    tagline: "Turning Ambiguity into Clear Engineering Objectives",
    description:
      "We collaborate closely with your stakeholders to deconstruct business challenges, evaluate user pain points, analyse data requirements, and define clear success metrics before laying the first line of architecture.",
    focus: [
      "Feasibility analysis",
      "Technical requirements gathering",
      "Risk assessment & ROI alignment",
    ],
    icon: "⌘",
  },
  {
    number: "02",
    title: "ARCHITECTURE & PROOF OF CONCEPT",
    tagline: "De-Risking Innovation Through Rapid Validation",
    description:
      "Before committing to full-scale development, we architect scalable technical foundations and build focused prototypes, ensuring proposed algorithms, data models, and integrations work under real-world conditions.",
    focus: [
      "System design & microservices topology",
      "Technology stack selection",
      "Benchmark prototyping",
    ],
    icon: "♧",
  },
  {
    number: "03",
    title: "AGILE ENGINEERING",
    tagline: "Delivering Clean, Modular, and Maintainable Software",
    description:
      "Our engineering teams build using modern development standards, modular design patterns, and continuous integration pipelines, delivering incremental, testable milestones across every sprint.",
    focus: [
      "Full-stack development",
      "API engineering",
      "Automated unit & integration testing",
    ],
    icon: "⚙",
  },
  {
    number: "04",
    title: "HARDENING & SYSTEM TESTING",
    tagline: "Ensuring Resilience Under High Concurrency and Real-World Load",
    description:
      "A solution is only ready when it is secure, compliant, and robust. We conduct rigorous performance stress testing, penetration audits, and edge-case simulation to guarantee stability when traffic spikes.",
    focus: [
      "End-to-end QA & performance tuning",
      "Vulnerability assessment",
      "Data security compliance & DR planning",
    ],
    icon: "▥",
  },
  {
    number: "05",
    title: "DEPLOYMENT & SCALING",
    tagline: "Seamless Launch with Continuous Observability",
    description:
      "Going live is not the finish line — it is where real-world performance begins. We orchestrate zero-downtime deployments, configure intelligent monitoring alerts, and set up automated scaling policies for long-term growth.",
    focus: [
      "Telemetry & observability dashboards",
      "Uptime SLA maintenance",
      "Progressive scaling",
    ],
    icon: "⌁",
  },
];

const Process = () => {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const progressFillRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // Desktop / tablet: pinned horizontal scroll-jack
        "(min-width: 768px)": function () {
          const track = trackRef.current;
          const viewport = viewportRef.current;
          const items = itemRefs.current;

          const getScrollAmount = () =>
            track.scrollWidth - viewport.clientWidth;

          gsap.set(progressFillRef.current, { scaleX: 0 });

          const st = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${getScrollAmount()}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              gsap.set(track, { x: -self.progress * getScrollAmount() });
              gsap.set(progressFillRef.current, { scaleX: self.progress });

              const activeIndex = Math.round(
                self.progress * (items.length - 1)
              );
              items.forEach((item, i) => {
                if (item) item.classList.toggle("is-active", i === activeIndex);
              });
            },
          });

          return () => st.kill();
        },

        // Mobile: native horizontal swipe, no scroll-jacking
        "(max-width: 767px)": function () {
          gsap.set(trackRef.current, { x: 0, clearProps: "transform" });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="process-section container g-0" id="Process" ref={sectionRef}>
      <div className="process-heading">
        <div className="process-eyebrow eyebrow-text eyebrow">
          <span className="eyebrow-dot"></span>
          OUR PROCESS
        </div>

        <h2 className="section-heading">FROM CONCEPT TO PRODUCTION</h2>

        <p className="process-subheading">
          We bridge the gap between business challenges and scalable
          technology — partnering with you at every stage, from raw
          concepts to high-performing, market-ready deployments.
        </p>
      </div>

      <div className="process-progress-bar">
        <div className="process-progress-fill" ref={progressFillRef}></div>
      </div>

      <div className="process-track-viewport" ref={viewportRef}>
        <div className="process-track" ref={trackRef}>
          <div className="process-connector"></div>

          {processData.map((item, index) => (
            <div
              className="process-item"
              key={item.number}
              ref={(el) => (itemRefs.current[index] = el)}
            >
              <div className="process-icon-wrapper">
                <div className="process-icon">
                  <span>{item.icon}</span>
                </div>
                <div className="process-number">{item.number}</div>
              </div>

              <div className="process-info">
                <h3 className="cards-title">{item.title}</h3>
                <p className="cards-tagline">{item.tagline}</p>
                <p className="cards-descp">{item.description}</p>

                <ul className="cards-focus">
                  {item.focus.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;