import React, { useState } from 'react';
import './Qualifications.css';

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section id="qualifications" className="section qualifications">
      <h2 className="section-title">Qualifications</h2>
      <div className="qualification-container">
        <div className="qualification-tabs">
          <div 
            className={`qualification-button ${toggleState === 1 ? 'qualification-active' : ''}`}
            onClick={() => toggleTab(1)}
          >
            Education
          </div>
          <div 
            className={`qualification-button ${toggleState === 2 ? 'qualification-active' : ''}`}
            onClick={() => toggleTab(2)}
          >
            Experience
          </div>
        </div>

        <div className="qualification-sections glass">
          <div className={`qualification-content ${toggleState === 1 ? 'qualification-content-active' : ''}`}>
            {/* Education 1 */}
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">BE Electronics & Telecommunication</h3>
                <span className="qualification-subtitle">Jaihind College of Engineering, Junnar (8.36 CGPA)</span>
                <div className="qualification-calendar">
                  🗓️ 2022 - 2026
                </div>
              </div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            {/* Education 2 */}
            <div className="qualification-data">
              <div></div>
              <div>
                <span className="qualification-rounder"></span>
              </div>
              <div className="qualification-right">
                <h3 className="qualification-title">Full-Stack Development Certification</h3>
                <span className="qualification-subtitle">Nxtwave Disruptive Technologies</span>
                <div className="qualification-calendar">
                  🗓️ Nov 2024 - Present
                </div>
                <p className="qualification-desc">
                  Coursework includes building a Generative AI feature using an LLM API.
                </p>
              </div>
            </div>
          </div>

          <div className={`qualification-content ${toggleState === 2 ? 'qualification-content-active' : ''}`}>
            {/* Experience 1 */}
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">Java Developer Intern</h3>
                <span className="qualification-subtitle">Snayu Info Tech Pvt Ltd, Pune</span>
                <p className="qualification-desc">
                  Developed backend features and RESTful Java modules following production coding standards. Improved debugging skills and collaborated on assigned modules.
                </p>
                <div className="qualification-calendar">
                  🗓️ Dec 2024 - Feb 2025
                </div>
              </div>
              <div>
                <span className="qualification-rounder"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
