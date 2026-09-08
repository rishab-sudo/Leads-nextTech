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
      "Our underwater warfare portfolio covers active and passive sonar systems engineered for high acoustic noise underwater environments.",
    points: [
      "AI-driven acoustic signal processing for multi-target classification in littoral waters",
      "Modular hydrophone arrays with low-noise digital pre-amplifiers",
      "Integrated combat suite interface supporting NATO and Indian Navy data standards",
      "Autonomous underwater vehicle (AUV) payload packages for mine countermeasures",
    ],
    outro: "",
    ctaLabel: "View Underwater Systems",
    ctaHref: "/underwater-technologies",
  },
];

function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [options]);

  return [ref, inView];
}

function DualFocusBox({ section, onNavigate }) {
  const [ref, inView] = useInView({ threshold: 0.15 });
  const isWater = section.variant === "water";

  const handleCta = () => {
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
    <section className="df-container-fluid" id="DualFocusSection">
      <div className="df-inner container g-0">
        
        <div className="df-header">
          <div className="eyebrow-text eyebrow df-eyebrow-wrapper">
            <span className="eyebrow-dot"></span>
            <span>OUR FOCUS</span>
          </div>
          <h2 className="section-heading">
            Engineering Superior Systems
            <br />
            Above and Below the Surface
          </h2>
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
