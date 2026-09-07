import React from 'react';
import './Team.css';
import teamBanner from '../assets/team_banner.png';

const commitments = [
  {
    title: 'Mission-First Engineering',
    text: 'Every line of code, circuit board, and composite shield is designed with the warfighter in mind. We build systems that perform reliably when failure is not an option.',
    size: 'lg',
  },
  {
    title: 'Sovereign Technological Depth',
    text: 'In-house research, design, and integration — from AI-driven EO/IR fire control to autonomous towed-array acoustic classification.',
    size: 'sm',
  },
  {
    title: 'Agility, Problem to Deployment',
    text: 'We reject bureaucratic development cycles. Agile teams move from prototype to qualified production fast.',
    size: 'sm',
  },
  {
    title: 'Unwavering Defence Qualification',
    text: 'Strict adherence to MIL-STD, rigorous environmental qualification, zero-compromise QA on every build.',
    size: 'sm',
  },
  {
    title: 'Operational Integration & Mission Readiness',
    text: 'We engineer beyond the prototype — ensuring every system is interoperable, maintainable, and ready for deployment in real-world operational environments. From platform integration and field validation to lifecycle support, we deliver mission-ready capabilities that create measurable advantage for the warfighter.',
    size: 'wide',
  },
];

const expertise = [
  {
    domain: 'Optronics & Sensor Systems',
    text: 'Multi-spectral EO/IR payloads, laser range finding, and optical stabilization.',
  },
  {
    domain: 'AI & Algorithm Engineering',
    text: 'Real-time neural network inferencing, computer vision, and acoustic classification.',
  },
  {
    domain: 'Precision Mechatronics & Ballistics',
    text: 'High-torque digital servo controls, kinematic weapon drives, automated loading.',
  },
  {
    domain: 'Hydroacoustics & Marine Robotics',
    text: 'Passive/active towed arrays, hydrodynamic hull forms, autonomous UUV navigation.',
  },
  {
    domain: 'Materials & Survivability',
    text: 'Radar-absorbent and infrared-suppressing structural composites.',
  },
];

// Duplicated once so the horizontal marquee can loop seamlessly (translateX -50%)
const loopedExpertise = [...expertise, ...expertise];

const Team = () => {
  return (
    <section className="team-section">
      <div className="container">
        {/* Hero — split: vertical rail + big type */}
        <div className="team-hero">
          <div className="team-rail">
            <span className="team-rail-num">01</span>
            <span className="team-rail-line" aria-hidden="true" />
            <span className="team-eyebrow">
              <span className="team-eyebrow-icon" aria-hidden="true">+</span>
              <span className="eyebrow eyebrow-text">Team &amp; Leadership</span>
            </span>
          </div>
          <div className="team-hero-copy">
            <h2 className="section-heading team-heading">
              Driven by Mission.
              <br />
              Engineered for Dominance.
            </h2>
            <p className="section-subHeading">
              Behind LNXT is a dedicated cadre of defence innovators, system architects, AI
              researchers, and precision engineers committed to delivering uncompromised
              technological superiority across Land and Underwater domains.
            </p>
          </div>
        </div>

        {/* Leadership mission — offset two-column */}
        <div className="team-mission">
          <div className="team-mission-quote">
            <span className="team-mark" aria-hidden="true">&ldquo;</span>
            <p className="team-quote-text">
              To bridge the gap between emerging operational challenges and field-ready
              capabilities by delivering intelligent, sovereign, and resilient defence
              systems — engineered from first principles and proven in production.
            </p>
            <span className="team-quote-label">Core Mission Statement</span>
          </div>

          <div className="team-mission-vision">
            <h3 className="cards-title">The Leadership Vision</h3>
            <p className="cards-descp">
              Modern warfare demands speed, intelligence, and survivability. Our leadership
              has established a singular focus: transform complex operational requirements
              into deployable, next-generation platforms without the friction of legacy
              development cycles.
            </p>
            <p className="cards-descp">
              By combining cutting-edge artificial intelligence with robust electromechanical
              engineering, advanced composite materials, and acoustic sensor design, we
              empower armed forces with systems that act faster, detect farther, and
              withstand the harshest environments.
            </p>
          </div>
        </div>

        {/* Core commitments — asymmetric bento grid */}
        <div className="team-block-head">
          <span className="team-rail-num">02</span>
          <h3 className="cards-title">Our Core Commitments</h3>
        </div>

        <div className="team-bento">
          {commitments.map((item, idx) => (
            <div
              className={`team-bento-card team-bento-${item.size} team-bento-pos-${idx + 1}`}
              key={item.title}
            >
              <h4 className="cards-title">{item.title}</h4>
              <p className="cards-descp">{item.text}</p>
              <span className="team-bento-arrow" aria-hidden="true">&rarr;</span>
            </div>
          ))}
        </div>

        {/* Quote banner — background image, cinematic centered copy */}
        <div
          className="team-banner"
          style={{ backgroundImage: `url(${teamBanner})` }}
        >
          <div className="team-banner-content">
            <span className="team-banner-kicker">Our Commitment</span>
            <p className="team-banner-text">
              Our mandate at LNXT is straightforward: we do not just adapt to the future of
              multi-domain defence —{' '}
              <em className="team-banner-accent">we build the platforms that define it</em>.
              From modernizing firepower on land to mastering acoustic intelligence
              underwater, our team is united by purpose, precision, and production
              excellence.
            </p>
            <span className="team-banner-attr">— Executive Leadership, LNXT</span>
          </div>
        </div>

        {/* Multidisciplinary expertise — auto-scrolling fanned cards */}
        <div className="team-block-head">
          <span className="team-rail-num">03</span>
          <h3 className="cards-title">Multidisciplinary Expertise</h3>
        </div>

        <div className="team-expertise-scroll">
          <div className="team-expertise-track">
            {loopedExpertise.map((item, i) => (
              <div
                className="team-expertise-card"
                style={{ '--tilt': `${i % 2 === 0 ? '-2deg' : '2deg'}` }}
                key={`${item.domain}-${i}`}
              >
                <span className="team-expertise-card-num">
                  {String((i % expertise.length) + 1).padStart(2, '0')}
                </span>
                <h4 className="cards-title team-expertise-card-domain">{item.domain}</h4>
                <p className="cards-descp">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="team-cta">
          <h3 className="section-heading team-cta-heading">
            Partner with an engineering team built for defence innovation.
          </h3>
          <div className="team-cta-actions">
            <a href="#contact" className="btn btn-primary">Connect with Our Leadership</a>
            <a href="#capabilities" className="btn btn-outline">Explore Our Capabilities</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;