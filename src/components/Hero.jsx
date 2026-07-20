import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="section hero">
      <div className="hero-content">
        <h3 className="hero-subtitle glitch-text" data-text="FULL STACK DEVELOPER">FULL STACK DEVELOPER</h3>
        <h1 className="hero-title">Rushikesh <span>Bhosale</span></h1>
        <p className="hero-desc">
          MERN Stack Developer | Hands-on Experience in Generative AI
        </p>
        <div className="hero-btn-group">
          <a href="#projects" className="btn">View My Work</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </div>
      <div className="hero-image-container glass">
        <img src="/profile.png" alt="Rushikesh Bhosale" className="profile-img" />
        <div className="hologram-effect"></div>
      </div>
    </section>
  );
};

export default Hero;
