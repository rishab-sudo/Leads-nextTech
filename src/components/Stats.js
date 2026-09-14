import React from "react";
import "./Stats.css";

const statsData = [
  {
    value: "XX",
    label: "YEARS OF EXCELLENCE",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 5l7 8 10 1 1 10 8 7-8 7-1 10-10 1-7 8-7-8-10-1-1-10-8-7 8-7 1-10 10-1z" />
        <circle cx="32" cy="28" r="7" />
        <path d="M25 39l-3 14 10-6 10 6-3-14" />
      </svg>
    ),
  },
  {
    value: "XX",
    label: "SQ. M. INTEGRATED FACILITY",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M10 52V20l22-12 22 12v32" />
        <path d="M18 52V30h28v22" />
        <path d="M25 38h4M35 38h4M25 45h4M35 45h4" />
        <path d="M29 30v22M39 30v22" />
      </svg>
    ),
  },
  {
    value: "XX",
    label: "ENGINEERS & SCIENTISTS",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="14" r="6" />
        <circle cx="16" cy="28" r="6" />
        <circle cx="48" cy="28" r="6" />
        <circle cx="24" cy="47" r="6" />
        <circle cx="40" cy="47" r="6" />

        <path d="M28 19l-8 5M36 19l8 5M20 33l1 8M44 33l-1 8M29 47h6" />
        <circle cx="32" cy="31" r="5" />
      </svg>
    ),
  },
  {
    value: "XX",
    label: "MISSION CRITICAL SUPPORT",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="22" />
        <path d="M32 10v7M32 47v7M10 32h7M47 32h7" />
        <path d="M32 22v11l8 5" />
        <circle cx="32" cy="32" r="2" />
      </svg>
    ),
  },
];

const Stats = () => {
  return (
    <section className="stats-section container">
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <div className="stat-item" key={stat.label}>
            <div className="stat-icon">{stat.icon}</div>

            <div className="stat-content">
              <div className="stat-value cards-title">{stat.value}</div>
              <div className="stat-label cards-descp">{stat.label}</div>
            </div>

            {index !== statsData.length - 1 && (
              <div className="stat-divider" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;