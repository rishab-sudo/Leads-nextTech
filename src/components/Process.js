import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./Process.css";

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

const CARDS_VISIBLE = 3;
const CYCLE_DELAY = 3000;

const Process = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  return (
    <section className="process-section container g-0" id="Process">
      {/* =====================================================
          HEADING
      ===================================================== */}

      <div className="process-heading">
        <div className="process-eyebrow eyebrow-text eyebrow">
          <span className="eyebrow-dot"></span>
          OUR PROCESS
        </div>

        <h2 className="section-heading">
          FROM CONCEPT TO PRODUCTION
        </h2>
      </div>

      {/* =====================================================
          TOP ROW
      ===================================================== */}

      <div className="process-top-row">
        <p className="process-subheading section-subHeading">
          We bridge the gap between business challenges and scalable
          technology - partnering with you at every stage, from raw
          concepts to high-performing, market-ready deployments.
        </p>

        <div className="process-nav-row">
          <button
            type="button"
            className="process-nav-btn process-nav-prev"
            ref={prevRef}
            aria-label="Previous step"
          >
            ‹
          </button>

          <button
            type="button"
            className="process-nav-btn process-nav-next"
            ref={nextRef}
            aria-label="Next step"
          >
            ›
          </button>
        </div>
      </div>

      {/* =====================================================
          PROCESS SLIDER
      ===================================================== */}

      <div className="process-track-viewport">
        <div className="process-connector"></div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={46}
          slidesPerView={CARDS_VISIBLE}
          centeredSlides={false}
          speed={600}
          loop={true}
          autoplay={{
            delay: CYCLE_DELAY,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;

            swiperRef.current = swiper;
          }}
          breakpoints={{
            /*
             * MOBILE
             * Each slide = 90% of viewport
             * Active slide stays horizontally centered
             */
            0: {
              slidesPerView: 0.9,
              centeredSlides: true,
              spaceBetween: 18,
            },

            /*
             * TABLET
             */
            600: {
              slidesPerView: 2,
              centeredSlides: false,
              spaceBetween: 30,
            },

            /*
             * DESKTOP
             */
            1024: {
              slidesPerView: CARDS_VISIBLE,
              centeredSlides: false,
              spaceBetween: 46,
            },
          }}
          className="process-swiper"
        >
          {processData.map((item) => (
            <SwiperSlide
              className="process-item"
              key={item.number}
            >
              {/* =====================================================
                  ICON + NUMBER
              ===================================================== */}

              <div className="process-icon-wrapper">
                <div className="process-icon">
                  <span>{item.icon}</span>
                </div>

                <div className="process-number">
                  {item.number}
                </div>
              </div>

              {/* =====================================================
                  CONTENT
              ===================================================== */}

              <div className="process-info">
                <h3 className="cards-title">
                  {item.title}
                </h3>

                <p className="cards-tagline">
                  {item.tagline}
                </p>

                <p className="cards-descp">
                  {item.description}
                </p>

                <ul className="cards-focus">
                  {item.focus.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Process;