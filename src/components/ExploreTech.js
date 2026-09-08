
import React, { useState } from "react";
import "./ExploreTech.css";

import lFire from "../assets/technology/l-fire.png";
import lChip from "../assets/technology/l-chip.png";
import lMag from "../assets/technology/l-mag.png";
import lShield from "../assets/technology/l-shield.png";
import lModernization from "../assets/technology/l-modernization.png";

import wToned from "../assets/technology/w-toned.png";
import wAi from "../assets/technology/w-ai.png";
import wAuto from "../assets/technology/w-auto.png";
import wLow from "../assets/technology/w-low.png";

const DOMAINS = [
  {
    id: "land",
    label: "Land Systems",
    items: [
      {
        code: "L-01",
        name: "EO/IR Fire Control",
        full: "AI-Enabled EO/IR Fire Control System",
        summary:
          "Multi-spectral imaging fused with embedded AI for target detection and tracking.",
        detail:
          "Combines electro-optical and infrared sensors with onboard AI detection and tracking algorithms. Handles automatic target acquisition, ballistic computation, and engagement sequencing across day, night, and degraded-visibility conditions.",
        image: lFire,
      },
      {
        code: "L-02",
        name: "Digital Servo Drive",
        full: "Digital Servo Drive Systems",
        summary: "Closed-loop position and velocity control for gun platforms.",
        detail:
          "High-precision digital servo mechanisms provide closed-loop position and velocity control. The architecture holds pointing accuracy through high-rate firing sequences under varying load and environmental conditions.",
        image: lChip,
      },
      {
        code: "L-03",
        name: "Magazine Loading",
        full: "Automatic Magazine Loading System",
        summary: "Automated ammunition feed with interlocked safety logic.",
        detail:
          "An automated ammunition-handling system pairs electromechanical feed mechanisms with safety interlocks and fault detection, reducing crew workload during sustained fire.",
        image: lMag,
      },
      {
        code: "L-04",
        name: "Stealth Shield",
        full: "Composite-Based Stealth Shield",
        summary: "Layered composites tuned for reduced radar and IR signature.",
        detail:
          "Advanced composite shields are built from multi-layer material layups optimized to reduce radar cross-section and infrared signature, without adding unnecessary mass to the platform.",
        image: lShield,
      },
      {
        code: "L-05",
        name: "Legacy Modernization",
        full: "Legacy Gun Modernization",
        summary: "Retrofit path for existing gun platforms.",
        detail:
          "Modernization programs integrate new fire control electronics, digital servo drives, and automated loading mechanisms into existing gun platforms, extending service life without a full replacement.",
        image: lModernization,
      },
    ],
  },
  {
    id: "water",
    label: "Underwater Systems",
    items: [
      {
        code: "W-01",
        name: "Towed Array Sonar",
        full: "Towed Array Sonar Systems (Active & Passive)",
        summary: "Combined active/passive arrays for long-range detection.",
        detail:
          "Towed array systems combine active and passive acoustic sensors optimized for long-range detection in littoral and deep-water environments, with flexible frequency operation and real-time beamforming.",
        image: wToned,
      },
      {
        code: "W-02",
        name: "Acoustic Classification",
        full: "AI-Based Acoustic Classification",
        summary: "Machine learning models classify underwater contacts in real time.",
        detail:
          "Models trained on acoustic signature databases classify underwater contacts in real time, weighing spectral, temporal, and spatial features and returning confidence metrics to decision-support systems.",
        image: wAi,
      },
      {
        code: "W-03",
        name: "Autonomous UUV",
        full: "Autonomous Unmanned Underwater Vehicles",
        summary: "Self-navigating platforms for towed-array deployment.",
        detail:
          "UUV platforms carry autonomous navigation, mission management, and onboard data processing, with deployment and retrieval mechanisms optimized for towed-array integration.",
        image: wAuto,
      },
      {
        code: "W-04",
        name: "Low-Signature Design",
        full: "Low-Signature Platform Design",
        summary: "Acoustic, electromagnetic, and hydrodynamic quieting.",
        detail:
          "Platforms incorporate acoustic quieting, electromagnetic shielding, and hydrodynamic shaping to minimize detectability during covert surveillance and reconnaissance missions.",
        image: wLow,
      },
    ],
  },
];

const ENABLING = [
  {
    name: "AI & Embedded Processing",
    detail:
      "Onboard inference for real-time detection, tracking, and classification, with support for model updates.",
  },
  {
    name: "Sensor Fusion",
    detail:
      "Multi-domain data integration across EO/IR, acoustic, and inertial sensors with synchronized time-stamping.",
  },
  {
    name: "Modular Open Architecture",
    detail:
      "Hardware and software interfaces built to open standards for third-party integration and future upgrades.",
  },
  {
    name: "Environmental Qualification",
    detail:
      "Engineered and tested against temperature extremes, shock, vibration, and pressure requirements.",
  },
];

const ADVANTAGES = [
  "End-to-end development spanning sensor hardware, AI algorithms, control systems, and composite structures.",
  "Proven record upgrading legacy platforms while preserving operational interfaces and minimizing integration risk.",
  "Every system engineered for manufacturability, maintainability, and long-term sustainment in defense environments.",
];

export default function TechnologyExplorer() {
  const [domainIdx, setDomainIdx] = useState(0);
  const [itemIdx, setItemIdx] = useState(0);

  const domain = DOMAINS[domainIdx];
  const item = domain.items[itemIdx] || domain.items[0];

  const selectDomain = (index) => {
    setDomainIdx(index);
    setItemIdx(0);
  };

  return (
    <section className="tx-root" id="ExploreTech">
      <div className="container">
        {/* Header */}
        <div className="tech-header">
          <div className="tech-header-left">
            <span className="eyebrow-text">Our Technology</span>

            <h2 className="section-heading">
              Core technology
              <br />
              and engineering capabilities
            </h2>
          </div>

          <div className="tech-header-right">
            <p>
              Advanced sensor, control, automation, and materials
              technologies for land and underwater defense systems —
              engineered for reliability and seamless integration.
            </p>
          </div>
        </div>

        {/* Domain Switch */}
        <div className="tech-domains">
          {DOMAINS.map((domainItem, index) => (
            <button
              key={domainItem.id}
              className={index === domainIdx ? "active" : ""}
              onClick={() => selectDomain(index)}
            >
              {domainItem.label}
            </button>
          ))}
        </div>

        {/* Technology Points */}
        <div className="tech-points">
          {domain.items.map((technology, index) => (
            <button
              key={technology.code}
              className={index === itemIdx ? "active" : ""}
              onClick={() => setItemIdx(index)}
            >
              <span>{technology.code}</span>
              <strong>{technology.name}</strong>
            </button>
          ))}
        </div>

        {/* Main Technology Content */}
        <div className="tech-main">
          <div className="tech-image">
            <img
              key={item.code}
              src={item.image}
              alt={item.full}
            />
          </div>

          <div className="tech-content" key={`${item.code}-content`}>
            <h3>{item.full}</h3>

            <p className="tech-summary">{item.summary}</p>

            <p className="tech-description">{item.detail}</p>
          </div>
        </div>

        {/* Bottom Information */}
        <div className="tech-bottom">
          <div className="enabling-technologies">
            <h3>Core enabling technologies</h3>

            {ENABLING.map((technology) => (
              <div className="enabling-item" key={technology.name}>
                <h4>{technology.name}</h4>
                <p>{technology.detail}</p>
              </div>
            ))}
          </div>

          <div className="technology-advantage">
            <h3>Technology advantage</h3>

            <ul>
              {ADVANTAGES.map((advantage, index) => (
                <li key={index}>{advantage}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

