import React, { useState } from 'react';
import './Skills.css';

const skillsData = [
  {
    category: "Programming Languages",
    skills: ["Python", "Java", "C", "C++", "JavaScript"]
  },
  {
    category: "Core CS Concepts",
    skills: ["Data Structures & Algorithms (DSA)", "OOP", "REST APIs", "JWT Authentication"]
  },
  {
    category: "Databases",
    skills: ["SQL", "MySQL", "MongoDB"]
  },
  {
    category: "Frontend",
    skills: ["React.js", "HTML", "CSS", "Bootstrap", "JavaScript"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "Socket.io"]
  },
  {
    category: "AI / ML & GenAI",
    skills: ["PyTorch (fundamentals)", "Generative AI (LLM API integration)"]
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Render", "Netlify", "Vercel", "Razorpay"]
  }
];

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="skills" className="section skills">
      <h2 className="section-title">Player Stats</h2>
      <div className="skills-container">
        {skillsData.map((data, index) => (
          <div 
            key={index} 
            className={`skills-accordion glass ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="skills-header">
              <h3>{data.category}</h3>
              <span className="icon">{activeIndex === index ? '[ - ]' : '[ + ]'}</span>
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
