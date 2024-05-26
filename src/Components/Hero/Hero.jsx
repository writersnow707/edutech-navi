import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>나비 툴킷에 어서오세요!</h1>
        <p>Welcome to NAVI-TOOLKIT!</p>
        <button className="btn">
          <a href="http://localhost:5174" target="_blank">
            나비 툴킷 시작
          </a>
          <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
