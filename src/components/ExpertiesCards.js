import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./ExpertiseCards.css";

const expertiseData = [
  {
    number: "01",
    title: "Optronics & Sensor Systems",
    description:
      "Specialists in multi-spectral EO/IR payloads, laser range finding, and optical stabilization.",
  },
  {
    number: "02",
    title: "AI & Algorithm Engineering",
    description:
      "Researchers pioneering real-time neural network inferencing, computer vision, and acoustic classification.",
  },
  {
    number: "03",
    title: "Precision Mechatronics & Ballistics",
    description:
      "Experts in high-torque digital servo controls, kinematic weapon drives, and automated loading mechanisms.",
  },
  {
    number: "04",
    title: "Hydroacoustics & Marine Robotics",
    description:
      "Engineers designing passive/active towed arrays, hydrodynamic hull forms, and autonomous UUV navigation.",
  },
  {
    number: "05",
    title: "Materials & Survivability",
    description:
      "Specialists in advanced radar-absorbent and infrared-suppressing structural composites.",
  },
];

const CYCLE_DELAY = 3000;

const Expertise = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  return (
    <section className="expertise-section  g-0" id="Expertise">

      {/* ==============================
          TOP CONTENT — CONTAINER WIDTH
      ============================== */}
      <div className=" expertise-content-container">
        <div className="expertise-top-row">

          <div className="expertise-heading-group">
            <span className="expertise-index">03</span>

            <h2 className="expertise-heading">
              Multidisciplinary Expertise
            </h2>
          </div>

          <div className="expertise-nav-row">
            <button
              type="button"
              className="expertise-nav-btn expertise-nav-prev"
              ref={prevRef}
              aria-label="Previous"
            >
              ‹
            </button>

            <button
              type="button"
              className="expertise-nav-btn expertise-nav-next"
              ref={nextRef}
              aria-label="Next"
            >
              ›
            </button>
          </div>

        </div>
      </div>

      {/* ==============================
          SLIDER — FULL WIDTH
      ============================== */}
      <div className="expertise-track-viewport">

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={4}
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
            0: {
              slidesPerView: 1,
              spaceBetween: 16,
              centeredSlides: false,
            },

            560: {
              slidesPerView: 1.5,
              spaceBetween: 18,
              centeredSlides: false,
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: false,
            },

            1024: {
              slidesPerView: 3,
              spaceBetween: 22,
              centeredSlides: false,
            },

            1280: {
              slidesPerView: 4,
              spaceBetween: 24,
              centeredSlides: false,
            },
          }}

          className="expertise-swiper"
        >
          {expertiseData.map((item) => (
            <SwiperSlide
              className="expertise-card"
              key={item.number}
            >
              <span className="expertise-card-number">
                {item.number}
              </span>

              <h3 className="expertise-card-title">
                {item.title}
              </h3>

              <p className="expertise-card-desc">
                {item.description}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Expertise;