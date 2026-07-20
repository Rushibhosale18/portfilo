import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content glass">
        <div className="about-text">
          <h3>Professional Summary</h3>
          <p>
            Full-stack developer with experience in building Gen AI features using LLM API. Hands-on experience building production style web applications using React, Node.js, Express.js, and MongoDB. 
          </p>
          <p>
            Proficient in Python, SQL, and Data Structures & Algorithms (DSA), with a strong foundation in OOP and clean software architecture, plus working exposure to PyTorch fundamentals and Generative AI through LLM API integration.
          </p>
          <p>
            Delivered projects covering secure authentication, REST API design, real-time features with Socket.io, and payment integration with Razorpay. Seeking to apply strong programming fundamentals and full-stack skills on an innovative engineering team. Open to relocation.
          </p>
          
          <div className="about-info">
            <div className="info-box glass-panel">
              <span className="info-title">ROLE</span>
              <span className="info-desc">Software Engineer</span>
            </div>
            <div className="info-box glass-panel">
              <span className="info-title">LOCATION</span>
              <span className="info-desc">Pune, Maharashtra</span>
            </div>
            <div className="info-box glass-panel">
              <span className="info-title">EMAIL</span>
              <span className="info-desc">rushibhosale1818@gmail.com</span>
            </div>
          </div>
          
          <a href="/resume.pdf" download="Rushikesh_Bhosale_Resume.pdf" className="btn" target="_blank" rel="noopener noreferrer">DOWNLOAD RESUME</a>
        </div>
      </div>
    </section>
  );
};

export default About;
