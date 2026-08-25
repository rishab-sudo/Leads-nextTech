import React, { useState } from "react";
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
    <section className="explore-tech">

      {/* =================================================
          HEADING OUTSIDE THE BOX
      ================================================= */}

      <div className="explore-tech-heading">

        <div className="explore-tech-brand">
          <span className="brand-dot">✦</span>
          EXPLORE TECHNOLOGY
        </div>

        <h2>INTERACTIVE PRODUCT EXPLORER</h2>

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

            <div className="explore-tabs">

              <button
                className={activeTab === "gun" ? "active" : ""}
                onClick={() => setActiveTab("gun")}
              >
                <span>✦</span>
                GUN SYSTEMS
              </button>

              <button
                className={activeTab === "sonar" ? "active" : ""}
                onClick={() => setActiveTab("sonar")}
              >
                SONAR SYSTEMS
              </button>

            </div>


            <div className="product-list">

              {activeTab === "gun" &&
                products.map((product, index) => (
                  <button
                    className={`product-item ${
                      activeProduct === index ? "selected" : ""
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

                  <span>SONAR SYSTEMS</span>

                  <p>
                    Advanced sonar technologies
                  </p>

                </div>
              )}

            </div>

          </div>


          {/* =================================================
              CENTER IMAGE / VIEWER
          ================================================= */}

          <div className="explore-center">

            <div className="center-controls">

              <button>
                ◉ &nbsp; 360° VIEW
              </button>

              <button>
                ◉ &nbsp; EXPLODED VIEW
              </button>

            </div>


            <div className="product-viewer">

              <div className="viewer-ring ring-one"></div>

              <div className="viewer-ring ring-two"></div>


              <div className="ring-arrow left-arrow">
                ‹
              </div>

              <div className="ring-arrow right-arrow">
                ›
              </div>


              {/* YOUR PRODUCT IMAGE */}

              <img
                className="main-product-image"
                src={products[activeProduct].image}
                alt={products[activeProduct].name}
              />


              <div className="viewer-base">
                <span></span>
              </div>

            </div>


            <div className="viewer-instruction">

              <span>Drag to rotate</span>

              <b>•</b>

              <span>Scroll to zoom</span>

              <b>•</b>

              <span>Click on hotspots</span>

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


                {/* RIGHT ARROW */}

                <button
                  className="hotspot-single-arrow"
                  onClick={nextHotspot}
                  aria-label="Next hotspot"
                >
                  ›
                </button>

              </div>


              {/* BOTTOM NAVIGATION */}

              <div className="hotspot-bottom">

                <span>
                  {String(activeHotspot + 1).padStart(2, "0")}
                  {" / "}
                  {String(hotspots.length).padStart(2, "0")}
                </span>


                <div className="hotspot-navigation">

                  <button
                    onClick={previousHotspot}
                    aria-label="Previous hotspot"
                  >
                    ‹
                  </button>

                  <button
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