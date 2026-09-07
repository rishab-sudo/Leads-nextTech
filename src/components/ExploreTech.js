import React, { useState, useEffect } from "react";
import "./ExploreTech.css";

/* =====================================================================
   CONTENT — rewritten from the supplied technology document
   ===================================================================== */

const DOMAINS = [
  {
    id: "land",
    label: "Land Systems",
    intro:
      "Fire control, drive, and handling technologies for gun platforms — new-build and modernized.",
    items: [
      {
        code: "L-01",
        name: "EO/IR Fire Control",
        full: "AI-Enabled EO/IR Fire Control System",
        summary:
          "Multi-spectral imaging fused with embedded AI for target detection and tracking.",
        detail:
          "Combines electro-optical and infrared sensors with onboard AI detection and tracking algorithms. Handles automatic target acquisition, ballistic computation, and engagement sequencing across day, night, and degraded-visibility conditions.",
        diagram: "eoir",
      },
      {
        code: "L-02",
        name: "Digital Servo Drive",
        full: "Digital Servo Drive Systems",
        summary: "Closed-loop position and velocity control for gun platforms.",
        detail:
          "High-precision digital servo mechanisms provide closed-loop position and velocity control. The architecture holds pointing accuracy through high-rate firing sequences under varying load and environmental conditions.",
        diagram: "servo",
      },
      {
        code: "L-03",
        name: "Magazine Loading",
        full: "Automatic Magazine Loading System",
        summary: "Automated ammunition feed with interlocked safety logic.",
        detail:
          "An automated ammunition-handling system pairs electromechanical feed mechanisms with safety interlocks and fault detection, reducing crew workload during sustained fire.",
        diagram: "loader",
      },
      {
        code: "L-04",
        name: "Stealth Shield",
        full: "Composite-Based Stealth Shield",
        summary: "Layered composites tuned for reduced radar and IR signature.",
        detail:
          "Advanced composite shields are built from multi-layer material layups optimized to reduce radar cross-section and infrared signature, without adding unnecessary mass to the platform.",
        diagram: "shield",
      },
      {
        code: "L-05",
        name: "Legacy Modernization",
        full: "Legacy Gun Modernization",
        summary: "Retrofit path for existing gun platforms.",
        detail:
          "Modernization programs integrate new fire control electronics, digital servo drives, and automated loading mechanisms into existing gun platforms, extending service life without a full replacement.",
        diagram: "retrofit",
      },
    ],
  },
  {
    id: "water",
    label: "Underwater Systems",
    intro:
      "Acoustic sensing, classification, and low-signature platforms for littoral and deep-water operations.",
    items: [
      {
        code: "W-01",
        name: "Towed Array Sonar",
        full: "Towed Array Sonar Systems (Active & Passive)",
        summary: "Combined active/passive arrays for long-range detection.",
        detail:
          "Towed array systems combine active and passive acoustic sensors optimized for long-range detection in littoral and deep-water environments, with flexible frequency operation and real-time beamforming.",
        diagram: "sonar",
      },
      {
        code: "W-02",
        name: "Acoustic Classification",
        full: "AI-Based Acoustic Classification",
        summary: "Machine learning models classify underwater contacts in real time.",
        detail:
          "Models trained on acoustic signature databases classify underwater contacts in real time, weighing spectral, temporal, and spatial features and returning confidence metrics to decision-support systems.",
        diagram: "classify",
      },
      {
        code: "W-03",
        name: "Autonomous UUV",
        full: "Autonomous Unmanned Underwater Vehicles",
        summary: "Self-navigating platforms for towed-array deployment.",
        detail:
          "UUV platforms carry autonomous navigation, mission management, and onboard data processing, with deployment and retrieval mechanisms optimized for towed-array integration.",
        diagram: "uuv",
      },
      {
        code: "W-04",
        name: "Low-Signature Design",
        full: "Low-Signature Platform Design",
        summary: "Acoustic, electromagnetic, and hydrodynamic quieting.",
        detail:
          "Platforms incorporate acoustic quieting, electromagnetic shielding, and hydrodynamic shaping to minimize detectability during covert surveillance and reconnaissance missions.",
        diagram: "quiet",
      },
    ],
  },
];

const ENABLING = [
  {
    name: "AI & Embedded Processing",
    detail: "Onboard inference for real-time detection, tracking, and classification, with support for model updates.",
  },
  {
    name: "Sensor Fusion",
    detail: "Multi-domain data integration across EO/IR, acoustic, and inertial sensors with synchronized time-stamping.",
  },
  {
    name: "Modular Open Architecture",
    detail: "Hardware and software interfaces built to open standards for third-party integration and future upgrades.",
  },
  {
    name: "Environmental Qualification",
    detail: "Engineered and tested against temperature extremes, shock, vibration, and pressure requirements.",
  },
];

const ADVANTAGES = [
  "End-to-end development spanning sensor hardware, AI algorithms, control systems, and composite structures.",
  "Proven record upgrading legacy platforms while preserving operational interfaces and minimizing integration risk.",
  "Every system engineered for manufacturability, maintainability, and long-term sustainment in defense environments.",
];

/* =====================================================================
   DIAGRAMS — abstract schematic line-art, one per technology
   ===================================================================== */

function Diagram({ kind }) {
  const stroke = "var(--teal)";
  const dim = "var(--line)";
  switch (kind) {
    case "eoir":
      return (
        <g>
          <circle cx="100" cy="100" r="54" fill="none" stroke={dim} strokeWidth="1" />
          <circle cx="100" cy="100" r="34" fill="none" stroke={stroke} strokeWidth="1.4" />
          <circle cx="100" cy="100" r="6" fill="var(--teal)" />
          <line x1="100" y1="26" x2="100" y2="46" stroke={stroke} strokeWidth="1.4" />
          <line x1="100" y1="154" x2="100" y2="174" stroke={stroke} strokeWidth="1.4" />
          <line x1="26" y1="100" x2="46" y2="100" stroke={stroke} strokeWidth="1.4" />
          <line x1="154" y1="100" x2="174" y2="100" stroke={stroke} strokeWidth="1.4" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => {
            const r1 = 60, r2 = 66;
            const rad = (a * Math.PI) / 180;
            return (
              <line
                key={i}
                x1={100 + r1 * Math.cos(rad)}
                y1={100 + r1 * Math.sin(rad)}
                x2={100 + r2 * Math.cos(rad)}
                y2={100 + r2 * Math.sin(rad)}
                stroke={dim}
                strokeWidth="1"
              />
            );
          })}
        </g>
      );
    case "servo":
      return (
        <g>
          <circle cx="100" cy="100" r="42" fill="none" stroke={stroke} strokeWidth="1.4" />
          <circle cx="100" cy="100" r="42" fill="none" stroke={dim} strokeWidth="10" strokeDasharray="2 10" />
          <circle cx="100" cy="100" r="10" fill="none" stroke={stroke} strokeWidth="1.4" />
          <line x1="100" y1="58" x2="100" y2="30" stroke={stroke} strokeWidth="1.4" />
          <path d="M100 30 l-6 12 h12 z" fill="var(--teal)" />
          <line x1="100" y1="100" x2="138" y2="124" stroke={dim} strokeWidth="1" />
        </g>
      );
    case "loader":
      return (
        <g>
          <path d="M40 130 Q100 60 160 130" fill="none" stroke={dim} strokeWidth="1" />
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const t = i / 5;
            const x = 40 + (160 - 40) * t;
            const y = 130 - Math.sin(Math.PI * t) * 70;
            return <rect key={i} x={x - 9} y={y - 6} width="18" height="12" rx="2" fill="none" stroke={stroke} strokeWidth="1.3" />;
          })}
          <line x1="40" y1="150" x2="160" y2="150" stroke={dim} strokeWidth="1" />
        </g>
      );
    case "shield":
      return (
        <g>
          {[0, 1, 2, 3].map((i) => (
            <polygon
              key={i}
              points="100,40 150,66 150,120 100,150 50,120 50,66"
              transform={`translate(${i * 5 - 7.5} ${i * -5 + 7.5}) scale(${1 - i * 0.12})`}
              transform-origin="100 100"
              fill="none"
              stroke={i === 0 ? stroke : dim}
              strokeWidth={i === 0 ? 1.6 : 1}
            />
          ))}
        </g>
      );
    case "retrofit":
      return (
        <g>
          <rect x="46" y="60" width="108" height="80" fill="none" stroke={dim} strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="80" cy="90" r="5" fill="none" stroke={stroke} strokeWidth="1.4" />
          <circle cx="128" cy="90" r="5" fill="none" stroke={stroke} strokeWidth="1.4" />
          <circle cx="104" cy="122" r="5" fill="none" stroke={stroke} strokeWidth="1.4" />
          <line x1="80" y1="90" x2="128" y2="90" stroke={stroke} strokeWidth="1" />
          <line x1="80" y1="90" x2="104" y2="122" stroke={stroke} strokeWidth="1" />
          <line x1="128" y1="90" x2="104" y2="122" stroke={stroke} strokeWidth="1" />
        </g>
      );
    case "sonar":
      return (
        <g>
          <line x1="46" y1="100" x2="90" y2="100" stroke={stroke} strokeWidth="1.6" />
          {[24, 40, 56, 72].map((r, i) => (
            <path
              key={i}
              d={`M ${90} ${100 - r} A ${r} ${r} 0 0 1 ${90} ${100 + r}`}
              fill="none"
              stroke={i % 2 === 0 ? stroke : dim}
              strokeWidth="1.1"
            />
          ))}
        </g>
      );
    case "classify":
      return (
        <g>
          <polyline
            points="30,110 55,110 65,80 75,130 85,95 95,110 170,110"
            fill="none"
            stroke={dim}
            strokeWidth="1.2"
          />
          <rect x="95" y="90" width="34" height="40" fill="none" stroke={stroke} strokeWidth="1.4" />
          <line x1="129" y1="98" x2="150" y2="86" stroke={stroke} strokeWidth="1" />
          <line x1="129" y1="110" x2="150" y2="110" stroke={stroke} strokeWidth="1" />
          <line x1="129" y1="122" x2="150" y2="134" stroke={stroke} strokeWidth="1" />
          <circle cx="150" cy="86" r="3" fill="var(--teal)" />
          <circle cx="150" cy="110" r="3" fill="var(--teal)" />
          <circle cx="150" cy="134" r="3" fill="var(--teal)" />
        </g>
      );
    case "uuv":
      return (
        <g>
          <path
            d="M40 100 C40 82 60 76 100 76 C140 76 165 84 172 100 C165 116 140 124 100 124 C60 124 40 118 40 100 Z"
            fill="none"
            stroke={stroke}
            strokeWidth="1.5"
          />
          <line x1="172" y1="100" x2="188" y2="90" stroke={dim} strokeWidth="1" />
          <line x1="172" y1="100" x2="188" y2="110" stroke={dim} strokeWidth="1" />
          <line x1="70" y1="76" x2="70" y2="60" stroke={dim} strokeWidth="1" />
          <line x1="70" y1="124" x2="70" y2="140" stroke={dim} strokeWidth="1" />
        </g>
      );
    case "quiet":
      return (
        <g>
          <ellipse cx="100" cy="100" rx="46" ry="26" fill="none" stroke={stroke} strokeWidth="1.5" />
          <ellipse cx="100" cy="100" rx="66" ry="40" fill="none" stroke={dim} strokeWidth="1" strokeDasharray="3 5" />
          <ellipse cx="100" cy="100" rx="84" ry="52" fill="none" stroke={dim} strokeWidth="1" strokeDasharray="1 6" />
        </g>
      );
    default:
      return null;
  }
}

/* =====================================================================
   COMPONENT
   ===================================================================== */

export default function TechnologyExplorer() {
  const [domainIdx, setDomainIdx] = useState(0);
  const [itemIdx, setItemIdx] = useState(0);
  const domain = DOMAINS[domainIdx];
  const item = domain.items[itemIdx];

  useEffect(() => {
    setItemIdx(0);
  }, [domainIdx]);

  return (
    <section className="tx-root">

      <div className="tx-inner">
        <div className="tx-head">
          <h2>Core technologies and engineering capabilities</h2>
          <p>
            Advanced sensor, control, automation, and materials technologies for land and
            underwater defense systems — engineered for reliability, environmental resilience,
            and integration into existing or new platforms.
          </p>
        </div>

        <div className="tx-domains">
          {DOMAINS.map((d, i) => (
            <button
              key={d.id}
              className={i === domainIdx ? "active" : ""}
              onClick={() => setDomainIdx(i)}
            >
              {d.label}
            </button>
          ))}
          <span className="tx-domain-note">{domain.intro}</span>
        </div>

        <div className="tx-ticker">
          {domain.items.map((it, i) => (
            <button
              key={it.code}
              className={i === itemIdx ? "active" : ""}
              onClick={() => setItemIdx(i)}
            >
              <span className="code">{it.code}</span>
              <span className="name">{it.name}</span>
            </button>
          ))}
        </div>

        <div className="tx-view">
          <div className="tx-schematic">
            <span className="corner tl" />
            <span className="corner tr" />
            <span className="corner bl" />
            <span className="corner br" />
            <svg className="diagram" viewBox="0 0 200 200" key={item.code}>
              <g className="diagram-anim">
                <Diagram kind={item.diagram} />
              </g>
            </svg>
            <span className="designation">{item.code} · {domain.label}</span>
          </div>

          <div className="tx-detail" key={item.code + "-text"}>
            <h3 className="full-name">{item.full}</h3>
            <p className="summary">{item.summary}</p>
            <p className="body-text">{item.detail}</p>
          </div>
        </div>

        <div className="tx-bottom">
          <div className="tx-enabling">
            <h3>Core enabling technologies</h3>
            {ENABLING.map((e) => (
              <div className="enabling-row" key={e.name}>
                <span className="tag">{e.name}</span>
                <span className="tag-detail">{e.detail}</span>
              </div>
            ))}
          </div>
          <div className="tx-advantage">
            <h3>Technology advantage</h3>
            <ul>
              {ADVANTAGES.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}