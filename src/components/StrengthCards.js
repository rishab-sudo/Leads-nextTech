import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "./StrengthCards.css";

const strengthCards = [
  {
    title: "AIR",
    description: (
      <>
        Aerial Surveillance,
        <br />
        Targeting &amp;
        <br />
        Situational Awareness
      </>
    ),
    icon: (
      <svg viewBox="0 0 64 64">
        <path d="M32 10L39 29L55 35L39 37L32 54L25 37L9 35L25 29Z" />
        <path d="M32 10V54" />
        <path d="M25 29L17 22" />
        <path d="M39 29L47 22" />
      </svg>
    ),
  },

  {
    title: "LAND",
    description: (
      <>
        Remote Weapon
        <br />
        Stations, Fire Control
        <br />
        &amp; Mobility Systems
      </>
    ),
    icon: (
      <svg viewBox="0 0 64 64">
        <path d="M10 34H54L48 44H16Z" />
        <path d="M20 34V27H43V34" />
        <path d="M27 27V21H39V27" />
        <path d="M12 46H20" />
        <path d="M44 46H52" />
        <circle cx="20" cy="45" r="4" />
        <circle cx="44" cy="45" r="4" />
      </svg>
    ),
  },

  {
    title: "NAVAL",
    description: (
      <>
        Sonar Systems,
        <br />
        Underwater Vehicles &amp;
        <br />
        Naval Electronics
      </>
    ),
    icon: (
      <svg viewBox="0 0 64 64">
        <path d="M8 40H56L48 48H16Z" />
        <path d="M19 40V31H45V40" />
        <path d="M25 31L32 23L39 31" />
        <path d="M32 16V23" />
        <path d="M10 53C15 49 20 57 25 53C30 49 35 57 40 53C45 49 50 57 55 53" />
      </svg>
    ),
  },

  {
    title: "UNDERWATER",
    description: (
      <>
        Acoustic Warfare, UUVs
        <br />
        &amp; Underwater
        <br />
        Communications
      </>
    ),
    icon: (
      <svg viewBox="0 0 64 64">
        <path d="M8 37H56L48 44H16Z" />
        <path d="M18 37V31H46V37" />
        <path d="M25 31L32 24L39 31" />
        <path d="M13 51C19 47 25 55 31 51C37 47 43 55 51 51" />
      </svg>
    ),
  },

  {
    title: "AI & AUTONOMY",
    description: (
      <>
        AI/ML, Sensor Fusion,
        <br />
        Edge Computing &amp;
        <br />
        Autonomy
      </>
    ),
    icon: (
      <svg viewBox="0 0 64 64">
        <rect x="15" y="15" width="34" height="34" rx="5" />
        <rect x="23" y="23" width="18" height="18" rx="2" />
        <path d="M10 24H15M10 32H15M10 40H15" />
        <path d="M49 24H54M49 32H54M49 40H54" />
        <path d="M24 10V15M32 10V15M40 10V15" />
        <path d="M24 49V54M32 49V54M40 49V54" />
      </svg>
    ),
  },
];

const StrengthCards = () => {
  return (
    <section className="strength-section">
      <div className="strength-container">

        {/* Header */}
        <div className="strength-header">

          <div className="strength-heading">
            <div className="strength-eyebrow">
              <span className="eyebrow-dot"></span>
              OUR STRENGTH
            </div>

            <h2>
              A MULTI-DOMAIN
              <br />
              DEFENCE ECOSYSTEM
            </h2>
          </div>

          <div className="strength-intro">
            <p>
              LeadNXT develops mission-critical systems across air, land,
              <br className="desktop-break" />
              surface and underwater domains using advanced engineering,
              <br className="desktop-break" />
              AI and deep domain expertise.
            </p>

            <button className="strength-button">
              EXPLORE CAPABILITIES
              <span>→</span>
            </button>
          </div>

        </div>

        {/* Cards */}
        <Swiper
          className="strength-swiper"
          modules={[Autoplay]}
          slidesPerView={5}
          spaceBetween={7}
          speed={900}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 2800,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 14,
              centeredSlides: true,
            },

            500: {
              slidesPerView: 1.35,
              spaceBetween: 14,
              centeredSlides: true,
            },

            650: {
              slidesPerView: 2,
              spaceBetween: 12,
              centeredSlides: false,
            },

            900: {
              slidesPerView: 3,
              spaceBetween: 10,
              centeredSlides: false,
            },

            1150: {
              slidesPerView: 4,
              spaceBetween: 8,
              centeredSlides: false,
            },

            1350: {
              slidesPerView: 5,
              spaceBetween: 7,
              centeredSlides: false,
            },
          }}
        >
          {strengthCards.map((card) => (
            <SwiperSlide key={card.title}>
              <div className="strength-card">

                <div className="strength-card-icon">
                  {card.icon}
                </div>

                <h3>{card.title}</h3>

                <p>{card.description}</p>

                
<Link to="/contact" className="strength-card-link">
                  VIEW SOLUTIONS
                  <span>→</span>
                </Link>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default StrengthCards;