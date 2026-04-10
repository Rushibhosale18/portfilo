import React from 'react';
import './Projects.css';

const projectData = [
  {
    title: "Fusion Electronics",
    category: "Full Stack E-Commerce",
    tech: "React.js, Node.js, Express.js, MongoDB, JWT",
    desc: "Built a complete full-stack e-commerce platform with product listing, cart management, and order placement. Implemented secure user authentication using JWT and bcrypt.",
    liveUrl: "https://fusion-electronics-2.onrender.com"
  },
  {
    title: "Symptomsync",
    category: "Health Symptom Tracker",
    tech: "React.js, Node.js, Express.js, MongoDB",
    desc: "Developed a health-tech web app enabling users to log and track daily symptoms with a personalised dashboard. Built secure user login and RESTful APIs.",
    liveUrl: "https://upchaarinfo.vercel.app"
  },
  {
    title: "ChatPay",
    category: "Real-Time Chat & Payment App",
    tech: "React.js, Node.js, Socket.io, Razorpay",
    desc: "Implemented live user presence tracking and real-time message delivery. Integrated Razorpay payment gateway for in-app money transfers.",
    liveUrl: "https://chatpay-final.vercel.app"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card glass">
            <div className="project-content">
              <span className="project-category">{project.category}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-tech"><strong>Tech:</strong> {project.tech}</p>
              <p className="project-desc">{project.desc}</p>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{marginTop: 'auto'}}>
                View Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
