import Logo from "./Logo";
import Bottom from "./Bottom";
import PersonalInfo from "./PersonalInfo";
import BackgroundSlideshow from "./BackgroundSlideshow";
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Top from "./Top";

const Home = () => {
  return (
    <div className="home-container">
      <BackgroundSlideshow />
      <Top />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">TIANXIAO LOU</h1>
          <p className="hero-subtitle">Computer Engineering Student & Developer</p>
          <p className="hero-description">
            Passionate about hardware engineering, game development, and creating innovative solutions
          </p>
        </div>
      </section>

      {/* Personal Information Section */}
      <PersonalInfo />
      
      {/* Navigation Cards */}
      <section className="navigation-cards">
        <div className="nav-card projects-card">
          <div className="nav-card-content">
            <h2>PROJECTS</h2>
            <p>DRIVEN BY ENTHUSIASM</p>
            <Link to="/Projects" className="nav-link">
              Explore My Work →
            </Link>
          </div>
        </div>
        
        <div className="nav-card experience-card">
          <div className="nav-card-content">
            <h2>EXPERIENCE</h2>
            <p>SHAPING THE FUTURE</p>
            <Link to="/Experience" className="nav-link">
              View Experience →
            </Link>
          </div>
        </div>
        
        <div className="nav-card future-card">
          <div className="nav-card-content">
            <h2>FUTURE PLANS</h2>
            <p>BUILDING TOMORROW</p>
            <Link to="/Ongoing" className="nav-link">
              See Vision →
            </Link>
          </div>
        </div>
      </section>

      <Bottom />
    </div>
  );
};

export default Home;
