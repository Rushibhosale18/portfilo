import React from 'react';
import './Projects.css';

const projectData = [
  {
    title: "Fusion Electronics",
    category: "Full-Stack E-Commerce Platform",
    tech: "React.js, Node.js, Express.js, MongoDB, JWT, REST APIs, Render",
    desc: "Built a full-stack e-commerce platform with product listings, cart management, and order placement. Implemented secure authentication using JWT tokens and bcrypt password hashing; deployed on Render with MongoDB Atlas.",
    liveUrl: "https://fusion-electronics-2.onrender.com",
    githubUrl: "https://github.com/Rushibhosale18/fusion-electronics"
  },
  {
    title: "ChatPay",
    category: "Real-Time Chat & Payment App",
    tech: "React.js, Node.js, Express.js, MongoDB, Socket.io, Razorpay, REST APIs, Vercel",
    desc: "Implemented live user presence tracking and real-time message delivery using Socket.io. Integrated Razorpay payment gateway for in-app money transfers with full transaction history; secured with JWT-based auth.",
    liveUrl: "https://chatpay-final.vercel.app",
    githubUrl: "https://github.com/Rushibhosale18/Real-Time-Chat-App-with-Payments"
  },
  {
    title: "Symptomsync",
    category: "Health Symptom Tracker",
    tech: "React.js, Node.js, Express.js, MongoDB, REST APIs, Vercel",
    desc: "Developed a health-tech web app enabling users to log and track daily symptoms via a personalized dashboard. Designed RESTful backend APIs to store, retrieve, and update user health data in MongoDB; built a responsive React UI.",
    liveUrl: "https://upchaarinfo.vercel.app",
    githubUrl: null
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
              <span className="project-category">[{project.category}]</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-tech"><strong>Tech Stack:</strong> {project.tech}</p>
              <p className="project-desc">{project.desc}</p>
              <div className="project-actions">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  Launch App
                </a>
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    View Source
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
