import { useEffect, useRef, useState } from "react";
import navlGun from "../assets/naval gun.png";
import sonarMain from "../assets/sonar.png";
import sonarRadar from "../assets/sonar_work.png";
import gunBg from "../assets/gun_bg.png";
import waterBg from "../assets/water_bg.png";
import "./DualFocusSection.css";

const SECTIONS = [
  {
    key: "gun",
    variant: "gun",
    label: "Gun Technologies",
    image: navlGun,
    bg: gunBg,
    imageAlt: "Remote weapon station gun mount",
    heading: "Next-Generation Gun Mounts & Fire Control Systems",
    intro:
      "LeadNXT is focused on indigenous small- and medium-calibre gun mount systems engineered for the modern battlespace.",
    points: [
      "Multi-axis stabilized (up to 6 DOF) EO/IR sight with AI-enabled target classification and decision support",
      "Next-generation Fire Control Systems for precision engagement",
      "Indigenously developed digital servo-based gun mounts",
      "Auto-loading magazines with stealth shields for enhanced survivability and reduced signature",
    ],
    outro: "",
    ctaLabel: "View All Gun Systems",
    ctaHref: "/gun-technologies",
  },
  {
    key: "water",
    variant: "water",
    label: "Underwater Technologies",
    image: sonarMain,
    bg: waterBg,
    imageAlt: "Sonar acoustic array system",
    radarImage: sonarRadar,
    radarAlt: "Live sonar radar scope sweeping for underwater contacts",
    heading: "AI-Powered Underwater Sensing for the Modern Navy",
    intro:
      "LeadNXT's core underwater capability is the indigenous manufacture of thin line arrays (Passive and Active) with AI-based acoustic classification, designed for deployment across multiple maritime platforms.",
    points: [
      "Ships",
      "Submarines",
      "Unmanned Underwater Vehicles (UUVs)",
      "Unmanned Surface Vessels (USVs)",
    ],
    outro:
      "Built to detect, classify, and support informed decisions in complex underwater environments.",
    ctaLabel: "View All Underwater Systems",
    ctaHref: "/navy-sonar-technologies",
  },
];

function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options ?? { threshold: 0.25 });

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

function DualFocusBox({ section, onNavigate }) {
  const [ref, inView] = useInView();
  const isWater = section.variant === "water";

  const handleCta = (e) => {
    e.stopPropagation();
    if (onNavigate) {
      onNavigate(section.ctaHref);
    } else {
      window.location.href = section.ctaHref;
    }
  };

  return (
    <div
      ref={ref}
      className={`df-box df-box-${section.variant} ${inView ? "df-box-inview" : ""}`}
      style={{ "--df-box-bg": `url(${section.bg})` }}
    >
      <div className="df-box-media">
        {isWater ? (
          <div className="df-water-media">
            <img
              src={section.image}
              alt={section.imageAlt}
              loading="lazy"
              className="df-water-image"
            />
            <div className="df-radar-badge">
              <img
                src={section.radarImage}
                alt={section.radarAlt}
                loading="lazy"
                className="df-radar-scope"
              />
              <div className="df-radar-sweep" aria-hidden="true" />
              <div className="df-radar-glow" aria-hidden="true" />
            </div>
          </div>
        ) : (
          <img
            src={section.image}
            alt={section.imageAlt}
            loading="lazy"
            className="df-gun-image"
          />
        )}
      </div>

      <div className="df-box-body">
        <p className="df-box-label eyebrow">{section.label}</p>
        <h3 className="df-box-heading">{section.heading}</h3>
        {section.intro && <p className="df-box-intro">{section.intro}</p>}
        <ul className="df-box-list">
          {section.points.map((point) => (
            <li key={point}>
              <span className="df-tick" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
        {section.outro && <p className="df-box-outro">{section.outro}</p>}
        <button type="button" className="df-cta" onClick={handleCta}>
          {section.ctaLabel}
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}

export default function DualFocusSection({ onNavigate }) {
  return (
    <section className="df-container-fluid">
      <div className="df-inner container g-0">
        <div className="df-header">
          <div className="df-eyebrow-block">
               
            <div className="process-eyebrow eyebrow-text eyebrow">
          <span className="eyebrow-dot "></span>
          OUR Focus
        </div>
            <h2 className="section-heading">
              Engineering Superior Systems
              <br />
              Above and Below the Surface
            </h2>
          </div>
        </div>

        <div className="df-stack">
          {SECTIONS.map((section) => (
            <DualFocusBox key={section.key} section={section} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
    </section>
  );
}