
import React from "react";
import india from "../assets/india.png";
import lab from "../assets/lab.png";
import "./MakeinIndia.css";

export default function MakeinIndia({
  bgSrc = lab,
  logoSrc = india,
}) {
  return (
    <section className="mii-hero" id="MakeinIndia">

      {/* Background Image */}
      <img
        className="mii-hero__bg"
        src={bgSrc}
        alt=""
        aria-hidden="true"
      />

      {/* Dark Overlay */}
      <div className="mii-hero__scrim"></div>

      {/* Make in India Logo */}
      <img
        className="mii-hero__mark"
        src={logoSrc}
        alt="Make in India"
      />

      {/* Content */}
      <div className="mii-hero__content">

        <span className="mii-hero__rule"></span>

        <h2 className="mii-hero__title">
          Make in India
        </h2>

        <p className="mii-hero__body">
          Proudly Aatmanirbhar. From Bareilly to the battlefront and
          the deep seas, LeadNXT is advancing India&rsquo;s self-reliance
          in defence technology through indigenous design, engineering,
          and manufacturing.
        </p>

        <div className="mii-hero__trail">
          <span>Bareilly</span>

          <i></i>

          <span>Battlefront</span>

          <i></i>

          <span>Deep Seas</span>
        </div>

      </div>
    </section>
  );
}

