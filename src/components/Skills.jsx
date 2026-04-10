import React, { useState } from 'react';
import './Skills.css';

const skillsData = [
  {
    category: "Languages & Concepts",
    skills: ["Python", "C++", "Java", "JavaScript", "Data Structures & Algorithms", "OOPs", "REST APIs"]
  },
  {
    category: "Frontend Development",
    skills: ["HTML", "CSS", "React.js", "Bootstrap", "JavaScript"]
  },
  {
    category: "Backend Development",
    skills: ["Node.js", "Express.js", "Socket.io", "JWT Authentication"]
  },
  {
    category: "Database & Tools",
    skills: ["MongoDB", "MySQL", "SQL", "Git", "GitHub", "Postman", "Razorpay"]
  }
];

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="skills" className="section skills">
      <h2 className="section-title">My Technical Skills</h2>
      <div className="skills-container">
        {skillsData.map((data, index) => (
          <div 
            key={index} 
            className={`skills-accordion glass ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="skills-header">
              <h3>{data.category}</h3>
              <span className="icon">{activeIndex === index ? '-' : '+'}</span>
            </div>
            <div className={`skills-content ${activeIndex === index ? 'show' : ''}`}>
              <ul className="skills-list">
                {data.skills.map((skill, sIndex) => (
                  <li key={sIndex}>
                    <span className="skill-dot"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
