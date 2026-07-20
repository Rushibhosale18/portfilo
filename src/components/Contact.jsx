import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="contact-banner glass">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-desc">
          Looking for an enthusiastic Full Stack Developer to join your team? I'm currently open to new opportunities and ready to relocate if necessary.
        </p>
        
        <div className="contact-layout" style={{ justifyContent: 'center' }}>
          <div className="contact-links" style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="mailto:rushibhosale1818@gmail.com" className="contact-item">
              <span className="contact-icon">✉️</span>
              <div>
                <h3>Email Me</h3>
                <p>rushibhosale1818@gmail.com</p>
              </div>
            </a>
            
            <a href="https://www.linkedin.com/in/rushikesh-bhosale18/" target="_blank" rel="noopener noreferrer" className="contact-item">
              <span className="contact-icon">💼</span>
              <div>
                <h3>LinkedIn</h3>
                <p>rushikesh-bhosale18</p>
              </div>
            </a>
            
            <a href="https://github.com/Rushibhosale18" target="_blank" rel="noopener noreferrer" className="contact-item">
              <span className="contact-icon">💻</span>
              <div>
                <h3>GitHub</h3>
                <p>Rushibhosale18</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
