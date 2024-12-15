import React from "react";
import heroImage from "../assets/heroimage.jpeg";
import "../css/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* Darker Overlay */}
      <div className="hero-overlay"></div>

      {/* Join Group Button */}
      <button className="hero-join-btn">Join Group</button>

      {/* Text Content */}
      <div className="hero-text">
        <h2>Computer Engineering</h2>
        <p>142,765 Computer Engineers follow this</p>
      </div>
    </div>
  );
};

export default HeroSection;
