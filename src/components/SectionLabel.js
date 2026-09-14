import React from "react";
import "./SectionLabel.css";

const SectionLabel = ({ title }) => {
  return (
    <div className="section-label">
      <div className="section-label-dot">
        <span className="label-ring ring-1"></span>
        <span className="label-ring ring-2"></span>
        <span className="label-ring ring-3"></span>
        <span className="label-ring ring-4"></span>

        <span className="label-dot"></span>
      </div>

      <h6 className="section-label-title">{title}</h6>
    </div>
  );
};

export default SectionLabel;