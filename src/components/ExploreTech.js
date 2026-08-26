import React, { useEffect, useState } from "react";
import "./ExploreTech.css";

const ExploreTech = () => {
  const [activeTab, setActiveTab] = useState("gun");
  const [activeProduct, setActiveProduct] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState(0);

  /* =====================================================
     PRODUCT DATA
  ===================================================== */

  const products = [
    {
      name: "REMOTE WEAPON STATION",
      model: "RWS-30",
      image: require("../assets/soldier-img.jpg"),
    },
    {
      name: "SMALL CALIBER SYSTEMS",
      model: "5.56mm – 30mm",
      image: require("../assets/soldier-img.jpg"),
    },
    {
      name: "FIRE CONTROL SYSTEMS",
      model: "Intelligent FCS",
      image: require("../assets/soldier-img.jpg"),
    },
    {
      name: "AMMUNITION HANDLING",
      model: "Smart Loaders",
      image: require("../assets/soldier-img.jpg"),
    },
  ];

  /* =====================================================
     HOTSPOT DATA
  ===================================================== */

  const hotspots = [
    {
      icon: "✦",
      title: "Sensors & Optics",
      description:
        "EO/IR sensors with laser rangefinder for all-weather targeting.",
    },
    {
      icon: "◉",
      title: "Advanced Fire Control",
      description:
        "Intelligent fire control system providing accurate target tracking.",
    },
    {
      icon: "◇",
      title: "Stabilized Platform",
      description:
        "Advanced stabilization technology for precise operation in motion.",
    },
  ];

  /* =====================================================
     PRODUCT NAVIGATION
  ===================================================== */

  const nextProduct = () => {
    setActiveProduct((current) =>
      current === products.length - 1 ? 0 : current + 1
    );

    setActiveHotspot(0);
  };

  const previousProduct = () => {
    setActiveProduct((current) =>
      current === 0 ? products.length - 1 : current - 1
    );

    setActiveHotspot(0);
  };

  /* =====================================================
     AUTO PRODUCT SLIDER
  ===================================================== */

  useEffect(() => {
    if (activeTab !== "gun") return;

    const autoSlide = setInterval(() => {
      setActiveProduct((current) =>
        current === products.length - 1 ? 0 : current + 1
      );

      setActiveHotspot(0);
    }, 4000);

    return () => clearInterval(autoSlide);
  }, [activeTab, products.length]);

  /* =====================================================
     HOTSPOT NAVIGATION
  ===================================================== */

  const nextHotspot = () => {
    setActiveHotspot((current) =>
      current === hotspots.length - 1 ? 0 : current + 1
    );
  };

  const previousHotspot = () => {
    setActiveHotspot((current) =>
      current === 0 ? hotspots.length - 1 : current - 1
    );
  };

  const currentHotspot = hotspots[activeHotspot];

  return (
    <section className="explore-tech container">

      {/* =================================================
          HEADING
      ================================================= */}

      <div className="explore-tech-heading">

        <div className="explore-tech-brand">
          <span className="brand-dot">✦</span>

          <span className="eyebrow-text">
            EXPLORE TECHNOLOGY
          </span>
        </div>

        <h2 className="section-heading">
          INTERACTIVE PRODUCT EXPLORER
        </h2>

      </div>


      {/* =================================================
          BORDERED CONTENT BOX
      ================================================= */}

      <div className="explore-tech-inner">

        <div className="explore-tech-grid">


          {/* =================================================
              LEFT PANEL
          ================================================= */}

          <div className="explore-left">

            {/* TABS */}

            <div className="explore-tabs">

              <button
                type="button"
                className={
                  activeTab === "gun"
                    ? "active"
                    : ""
                }
                onClick={() => setActiveTab("gun")}
              >
                <span>✦</span>
                GUN SYSTEMS
              </button>


              <button
                type="button"
                className={
                  activeTab === "sonar"
                    ? "active"
                    : ""
                }
                onClick={() => setActiveTab("sonar")}
              >
                SONAR SYSTEMS
              </button>

            </div>


            {/* PRODUCT LIST */}

            <div className="product-list">

              {activeTab === "gun" &&
                products.map((product, index) => (

                  <button
                    type="button"
                    className={`product-item ${
                      activeProduct === index
                        ? "selected"
                        : ""
                    }`}
                    key={index}
                    onClick={() => {
                      setActiveProduct(index);
                      setActiveHotspot(0);
                    }}
                  >

                    <div className="product-thumb">

                      <img
                        src={product.image}
                        alt={product.name}
                      />

                    </div>


                    <div className="product-info">

                      <span className="product-name">
                        {product.name}
                      </span>

                      <span className="product-model">
                        {product.model}
                      </span>

                    </div>

                  </button>

                ))}


              {activeTab === "sonar" && (

                <div className="sonar-message">

                  <span>
                    SONAR SYSTEMS
                  </span>

                  <p>
                    Advanced sonar technologies
                  </p>

                </div>

              )}

            </div>

          </div>


          {/* =================================================
              CENTER IMAGE VIEWER
          ================================================= */}

          <div className="explore-center">

            {/* CENTER CONTROLS */}

      


            {/* PRODUCT VIEWER */}

            <div className="product-viewer">

              {/* RINGS */}

              <div className="viewer-ring ring-one"></div>

              <div className="viewer-ring ring-two"></div>


              {/* LEFT ARROW */}

              <button
                type="button"
                className="ring-arrow left-arrow"
                onClick={previousProduct}
                aria-label="Previous product"
              >
                ‹
              </button>


              {/* RIGHT ARROW */}

              <button
                type="button"
                className="ring-arrow right-arrow"
                onClick={nextProduct}
                aria-label="Next product"
              >
                ›
              </button>


              {/* =================================================
                  IMAGE SLIDER
              ================================================= */}

              <div className="product-image-slider">

                <div
                  className="product-image-track"
                  style={{
                    transform: `translateX(-${
                      activeProduct * 100
                    }%)`,
                  }}
                >

                  {products.map((product, index) => (

                    <div
                      className="product-image-slide"
                      key={index}
                    >

                      <img
                        className="main-product-image"
                        src={product.image}
                        alt={product.name}
                      />

                    </div>

                  ))}

                </div>

              </div>


              {/* VIEWER BASE */}

              <div className="viewer-base">
                <span></span>
              </div>

            </div>


            {/* INSTRUCTION */}

            <div className="viewer-instruction">

              <span>
                Drag to rotate
              </span>

              <b>•</b>

              <span>
                Scroll to zoom
              </span>

              <b>•</b>

              <span>
                Click on hotspots
              </span>

            </div>

          </div>


          {/* =================================================
              RIGHT PANEL
          ================================================= */}

          <div className="explore-right">


            {/* =================================================
                KEY SPECIFICATIONS
            ================================================= */}

            <div className="specification-box">

              <div className="panel-heading">
                KEY SPECIFICATIONS
              </div>


              <div className="spec-list">


                <div className="spec-row">

                  <span className="spec-label">
                    Caliber
                  </span>

                  <span className="spec-value">
                    7.62mm – 30mm
                  </span>

                </div>


                <div className="spec-row">

                  <span className="spec-label">
                    Stabilization
                  </span>

                  <span className="spec-value">
                    2-Axis / 3-Axis
                  </span>

                </div>


                <div className="spec-row">

                  <span className="spec-label">
                    Targeting
                  </span>

                  <span className="spec-value">
                    Day / Night / Thermal
                  </span>

                </div>


                <div className="spec-row">

                  <span className="spec-label">
                    Range
                  </span>

                  <span className="spec-value">
                    Up to 2500 m
                  </span>

                </div>


                <div className="spec-row">

                  <span className="spec-label">
                    Communication
                  </span>

                  <span className="spec-value">
                    Digital / IP Based
                  </span>

                </div>


              </div>

            </div>


            {/* =================================================
                HOTSPOT VIEW
            ================================================= */}

            <div className="hotspot-box">

              <div className="panel-heading">
                HOTSPOT VIEW
              </div>


              <div
                className="hotspot-content"
                key={activeHotspot}
              >

                <div className="hotspot-icon">
                  {currentHotspot.icon}
                </div>


                <div className="hotspot-text">

                  <strong>
                    {currentHotspot.title}
                  </strong>

                  <p>
                    {currentHotspot.description}
                  </p>

                </div>


                <button
                  type="button"
                  className="hotspot-single-arrow"
                  onClick={nextHotspot}
                  aria-label="Next hotspot"
                >
                  ›
                </button>

              </div>


              {/* HOTSPOT BOTTOM */}

              <div className="hotspot-bottom">

                <span>
                  {String(
                    activeHotspot + 1
                  ).padStart(2, "0")}

                  {" / "}

                  {String(
                    hotspots.length
                  ).padStart(2, "0")}
                </span>


                <div className="hotspot-navigation">

                  <button
                    type="button"
                    onClick={previousHotspot}
                    aria-label="Previous hotspot"
                  >
                    ‹
                  </button>


                  <button
                    type="button"
                    onClick={nextHotspot}
                    aria-label="Next hotspot"
                  >
                    ›
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ExploreTech;