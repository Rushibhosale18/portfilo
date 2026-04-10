import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content glass">
        <div className="about-text">
          <h3>Summary</h3>
          <p>
            Aspiring Full Stack Developer and final-year BE Electronics & Telecommunication Engineering student (2026) with hands-on experience building full stack web applications using React, Node.js, Express.js, and MongoDB.
          </p>
          <p>
            Developed multiple projects implementing secure authentication, REST APIs, real-time features using Socket.io, and payment integration with Razorpay. Strong understanding of Data Structures & Algorithms, OOPs, and clean software architecture.
          </p>
          <p>
            Looking to leverage technical skills to build high quality software in an innovative team. Open to relocation.
          </p>
          
          <div className="about-info">
            <div className="info-box">
              <span className="info-title">Degree</span>
              <span className="info-desc">B.E. E&TC (8.36 CGPA)</span>
            </div>
            <div className="info-box">
              <span className="info-title">Location</span>
              <span className="info-desc">Pune, Maharashtra</span>
            </div>
            <div className="info-box">
              <span className="info-title">Email</span>
              <span className="info-desc">rushibhosale1818@gmail.com</span>
            </div>
          </div>
          
          <a href="https://drive.google.com/file/d/1lk9Q6Ux0pDw7ieLl07FwZUBG7Wfd6Z_n/view?usp=sharing" className="btn" target="_blank" rel="noopener noreferrer">View Resume</a>
        </div>
      </div>
    </section>
  );
};

export default About;
