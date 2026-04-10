import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="section hero">
      <div className="hero-content">
        <h3 className="hero-subtitle">Hi there 👋, I'm</h3>
        <h1 className="hero-title">Rushikesh Bhosale</h1>
        <h2 className="hero-role">Full Stack Developer & Software Engineer</h2>
        <p className="hero-desc">
          Final-year Electronics & Telecommunication Engineering student passionate about turning complex problems into simple, scalable, and intuitive digital solutions using modern web technologies.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn">Let's Connect!</a>
          <a href="#projects" className="btn btn-outline">Explore My Work</a>
        </div>
      </div>
      <div className="hero-image glass">
        <img src="/rushi_avatar.png" alt="Rushikesh Bhosale" className="profile-img" />
      </div>
    </section>
  );
};

export default Hero;
