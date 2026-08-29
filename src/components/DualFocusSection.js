import { useState } from "react";
import navlGun from "../assets/naval gun.png";
import sonar from "../assets/sonar.png";
import "./DualFocusSection.css";

const TABS = {
  gun: {
    label: "Gun Technologies",
    image: navlGun,
    imageAlt: "Remote weapon station gun mount",
    heading: "Remote Weapon Stations",
    points: [
      "High Precision Stabilization",
      "Day / Night Operation",
      "AI Assisted Targeting",
      "Modular & Scalable Design",
    ],
    ctaLabel: "View All Gun Systems",
    ctaHref: "/gun-technologies",
  },
  navy: {
    label: "Navy & Sonar Technologies",
    image: sonar,
    imageAlt: "Sonar and acoustic underwater system",
    heading: "Sonar & Acoustic Systems",
    points: [
      "Active & Passive Sonar",
      "Towed Array Systems",
      "Underwater Surveillance",
      "Acoustic Signal Processing",
    ],
    ctaLabel: "View All Navy Systems",
    ctaHref: "/navy-sonar-technologies",
  },
};

export default function DualFocusSection({ onNavigate }) {
  const [activeTab, setActiveTab] = useState("gun");

  const handleCta = (href) => {
    if (onNavigate) {
      onNavigate(href);
    } else {
      window.location.href = href;
    }
  };

  const renderPanel = (key) => {
    const panel = TABS[key];
    const isActive = activeTab === key;
    return (
      <div
        key={key}
        className={`df-panel ${isActive ? "df-panel-active" : "df-panel-dim"}`}
        onClick={() => setActiveTab(key)}
      >
        <div className="df-panel-image">
          <img src={panel.image} alt={panel.imageAlt} loading="lazy" />
        </div>

        <div className="df-panel-body">
          <h3 className="df-panel-heading">{panel.heading}</h3>
          <ul className="df-panel-list">
            {panel.points.map((point) => (
              <li key={point}>
                <span className="df-tick" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="df-cta"
            onClick={(e) => {
              e.stopPropagation();
              handleCta(panel.ctaHref);
            }}
          >
            {panel.ctaLabel}
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="df-container-fluid ">
      <div className="df-inner container g-0">
        <div className="df-header">
          <div className="df-eyebrow-block">
            <p className="df-eyebrow">Our Dual Focus</p>
            <h2 className="cards-title section heading">
              Engineering Superior Systems
              <br />
              Above and Below the Surface
            </h2>
          </div>

          <div className="df-tabs" role="tablist" aria-label="Technology focus">
            {Object.entries(TABS).map(([key, panel]) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={activeTab === key}
                className={`df-tab ${activeTab === key ? "df-tab-active" : ""}`}
                onClick={() => setActiveTab(key)}
              >
                {panel.label}
              </button>
            ))}
          </div>
        </div>

        <div className="df-split">
          {renderPanel("gun")}
          <div className="df-vs">VS</div>
          {renderPanel("navy")}
        </div>
      </div>
    </section>
  );
}