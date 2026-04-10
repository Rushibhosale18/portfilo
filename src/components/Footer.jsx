import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h1 className="footer-title">Rushikesh Bhosale</h1>
        
        <ul className="footer-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
        </ul>
        
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/rushikesh-bhosale18/" target="_blank" rel="noopener noreferrer">
             LinkedIn
          </a>
          <a href="https://github.com/Rushibhosale18" target="_blank" rel="noopener noreferrer">
             GitHub
          </a>
        </div>
        
        <span className="footer-copy">
          &#169; 2026 Rushikesh Bhosale. All rights reserved. Built with React & Vite.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
