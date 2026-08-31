import React from "react";
import navlGun from "../assets/naval gun.png";
import sonar from "../assets/sonar.png";
import "./DualFocusSection.css";

const technologyData = [
  {
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

  {
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
];

export default function DualFocusSection({ onNavigate }) {
  const handleCta = (href) => {
    if (onNavigate) {
      onNavigate(href);
    } else {
      window.location.href = href;
    }
  };

  return (
    <section
      className="df-container-fluid"
      id="Technology"
      aria-labelledby="technology-heading"
    >
      <div className="df-inner container g-0">

        {/* Header */}
        <div className="df-header">
          <div className="df-eyebrow-block">
            <p className="df-eyebrow">
              Our Dual Focus
            </p>

            <h2
              id="technology-heading"
              className="cards-title section-heading"
            >
              Engineering Superior Systems
              <br />
              Above and Below the Surface
            </h2>
          </div>
        </div>

        {/* Technology Cards */}
        <div className="df-cards">

          {technologyData.map((item, index) => (
            <div
              className={`df-panel ${
                index % 2 === 0
                  ? "df-panel-image-left"
                  : "df-panel-image-right"
              }`}
              key={item.heading}
            >

              {/* Image */}
              <div className="df-panel-image">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="df-panel-body">

                <h3 className="df-panel-heading">
                  {item.heading}
                </h3>

                <ul className="df-panel-list">
                  {item.points.map((point) => (
                    <li key={point}>
                      <span
                        className="df-tick"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  type="button"
                  className="df-cta"
                  onClick={() =>
                    handleCta(item.ctaHref)
                  }
                >
                  {item.ctaLabel}

                  <span aria-hidden="true">
                    →
                  </span>
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}