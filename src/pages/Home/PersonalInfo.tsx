import React from 'react';
import './PersonalInfo.css';
import csmcMedal from '../../assets/csmc medal.jpg';
import myselfPhoto from '../../assets/myself.jpg';

const PersonalInfo = () => {
  return (
    <div className="personal-info-container">
      {/* Social Links */}
      <section className="social-links-section">
        <div className="social-links">
          <a href="https://github.com/Tianxiao01" target="_blank" rel="noopener noreferrer" className="social-link github">
            <span>📁</span> GitHub
          </a>
          <a href="https://www.linkedin.com/in/tianxiao-lou-29a882357/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
            <span>💼</span> LinkedIn
          </a>
        </div>
      </section>

      {/* Personal Introduction */}
      <section className="personal-section">
        <h2>About Me</h2>
        <div className="intro-content">
          <div className="intro-text">
            <p>
              Hi, I'm Tianxiao Lou, a passionate Computer Engineering student at the University of Waterloo. 
              I'm driven by my love for technology, gaming, and continuous learning. When I'm passionate about something, 
              I can work tirelessly until I achieve excellence.
            </p>
            <p>
              I have a deep passion for gaming, especially strategic games that challenge my mind - both real-time 
              and turn-based strategy games. Basketball is another love of mine, and I'm always eager to learn new 
              technologies and expand my knowledge base.
            </p>
          </div>
          {/* Personal photo */}
          <div className="personal-photo">
            <img src={myselfPhoto} alt="Tianxiao Lou" />
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="education-section">
        <h2>Education</h2>
        <div className="education-card">
          <div className="education-header">
            <h3>University of Waterloo</h3>
            <span className="education-period">Sept 2024 – Present</span>
          </div>
          <div className="education-details">
            <p><strong>Computer Engineering (BASc)</strong></p>
            <div className="achievement-badges">
              <span className="badge distinction">Distinction: 95+% Science Average</span>
              <span className="badge distinction">90% Cumulative Average</span>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="achievements-section">
        <h2>Achievements</h2>
        <div className="achievements-grid">
          <div className="achievement-card">
            <div className="achievement-icon">💰</div>
            <h3>$12,000 Entrance Scholarship</h3>
            <p>Merit-based scholarship for academic excellence</p>
          </div>
          <div className="achievement-card">
            <div className="achievement-icon">🏆</div>
            <h3>CSMC 2022 Honor Roll</h3>
            <p>Top 200 (2%) in Canadian Senior Mathematics Contest</p>
            <img src={csmcMedal} alt="CSMC Medal" className="achievement-image" />
          </div>
          <div className="achievement-card">
            <div className="achievement-icon">📊</div>
            <h3>Euclid Mathematics Competition 2024</h3>
            <p>Distinction Award</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="skills-section">
        <h2>Skills & Certifications</h2>
        
        <div className="skills-categories">
          <div className="skill-category">
            <h3>Hardware & Electrical Engineering</h3>
            <div className="skill-tags">
              <span className="skill-tag">ARM (STM32)</span>
              <span className="skill-tag">FPGA (DE10-lite)</span>
              <span className="skill-tag">KiCad</span>
              <span className="skill-tag">Intel Quartus</span>
              <span className="skill-tag">COSMAL</span>
              <span className="skill-tag">Circuit Design</span>
              <span className="skill-tag">Embedded Systems</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Programming Languages</h3>
            <div className="skill-tags">
              <span className="skill-tag">C++</span>
              <span className="skill-tag">C</span>
              <span className="skill-tag">C#</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">HTML/CSS</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Software Development</h3>
            <div className="skill-tags">
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">Next.js</span>
              <span className="skill-tag">Unity</span>
              <span className="skill-tag">Unreal Engine</span>
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Vite</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Sciences</h3>
            <div className="skill-tags">
              <span className="skill-tag">Physics</span>
              <span className="skill-tag">Biology</span>
              <span className="skill-tag">Chemistry</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Languages</h3>
            <div className="skill-tags">
              <span className="skill-tag">English</span>
              <span className="skill-tag">Chinese</span>
            </div>
          </div>
        </div>

        <div className="certifications">
          <h3>Certifications</h3>
          <div className="cert-grid">
            <div className="cert-card">
              <h4>Microsoft Certified: Azure AI Fundamentals</h4>
              <p>Issued: June 24, 2025</p>
            </div>
            <div className="cert-card">
              <h4>Microsoft Certified: Azure Fundamentals</h4>
              <p>Issued: June 12, 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Personality & Interests */}
      <section className="personality-section">
        <h2>Personality & Interests</h2>
        <div className="personality-content">
          <div className="personality-traits">
            <div className="trait-card">
              <div className="trait-icon">🎯</div>
              <h3>Passionate & Dedicated</h3>
              <p>When I'm passionate about something, I can work tirelessly until I achieve excellence</p>
            </div>
            <div className="trait-card">
              <div className="trait-icon">🎮</div>
              <h3>Gaming Enthusiast</h3>
              <p>Love strategic games - both real-time and turn-based strategy games that challenge my mind</p>
            </div>
            <div className="trait-card">
              <div className="trait-icon">🏀</div>
              <h3>Basketball Player</h3>
              <p>Active basketball player who enjoys the sport and teamwork</p>
            </div>
            <div className="trait-card">
              <div className="trait-icon">📚</div>
              <h3>Continuous Learner</h3>
              <p>Always eager to learn new technologies and expand my knowledge base</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalInfo;