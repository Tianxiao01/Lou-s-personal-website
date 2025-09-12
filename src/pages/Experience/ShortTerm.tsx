import React from 'react'
import './ShortTerm.css';

const ShortTerm = () => {
    return (
        <div className="experience-container">
            <div className="experience-header">
                <h1>Professional Experience</h1>
                <p>Building expertise through hands-on experience and collaboration</p>
            </div>

            <div className="experience-timeline">
                {/* Story City Inc Experience */}
                <div className="experience-card">
                    <div className="experience-date">
                        <span className="date-period">Jun 2025 – Jul 2025</span>
                        <span className="date-duration">2 months</span>
                    </div>
                    <div className="experience-content">
                        <div className="experience-header-card">
                            <h2>Research Intern</h2>
                            <div className="company-location">
                                <span className="company">Story City Inc</span>
                                <span className="location">Remote</span>
                            </div>
                        </div>
                        
                        <div className="experience-description">
                            <p>
                                Conducted research on AI integration in education, storytelling, tourism, and urbanism, 
                                with a focus on enhancing Story City's interactive storytelling app.
                            </p>
                            <p>
                                Analyzed AI's role in K-12 and higher education, identifying opportunities to use 
                                AI-driven narrative summaries and virtual historical storytelling for improved learning outcomes.
                            </p>
                            <p>
                                Developed initial insights and draft report for industry client, providing strategic 
                                recommendations on efficient AI adoption without replacing creators.
                            </p>
                        </div>

                        <div className="experience-skills">
                            <h3>Key Skills Developed:</h3>
                            <div className="skills-list">
                                <span className="skill-item">AI Research & Analysis</span>
                                <span className="skill-item">Educational Technology</span>
                                <span className="skill-item">Strategic Planning</span>
                                <span className="skill-item">Technical Writing</span>
                                <span className="skill-item">Client Communication</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* VEX Robotics Experience */}
                <div className="experience-card">
                    <div className="experience-date">
                        <span className="date-period">Nov 2023 – Feb 2024</span>
                        <span className="date-duration">4 months</span>
                    </div>
                    <div className="experience-content">
                        <div className="experience-header-card">
                            <h2>VEX Robotics Team Mentor & Technical Assistant</h2>
                            <div className="company-location">
                                <span className="company">VEX Robotics Team</span>
                                <span className="location">2215 Reeve St, Port Coquitlam, BC V3C 6K8</span>
                            </div>
                        </div>
                        
                        <div className="experience-description">
                            <p>
                                Spearheaded the design, optimization, and testing of competition-grade VEX robots, 
                                enhancing mechanical efficiency, strategic performance, and collaboration within the 
                                team for improved outcomes in competitions.
                            </p>
                            <p>
                                Collaborated with a multidisciplinary team to refine robot architecture and implement 
                                innovative solutions, driving competitive success.
                            </p>
                        </div>

                        <div className="experience-skills">
                            <h3>Key Skills Developed:</h3>
                            <div className="skills-list">
                                <span className="skill-item">Robot Design & Optimization</span>
                                <span className="skill-item">Team Leadership</span>
                                <span className="skill-item">Mechanical Engineering</span>
                                <span className="skill-item">Competition Strategy</span>
                                <span className="skill-item">Cross-functional Collaboration</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* GOOD LAND Experience */}
                <div className="experience-card">
                    <div className="experience-date">
                        <span className="date-period">Nov 2024 – Feb 2025</span>
                        <span className="date-duration">4 months</span>
                    </div>
                    <div className="experience-content">
                        <div className="experience-header-card">
                            <h2>Web Developer</h2>
                            <div className="company-location">
                                <span className="company">GOOD LAND Home and Essentials LTD</span>
                                <span className="location">Remote</span>
                            </div>
                        </div>
                        
                        <div className="experience-description">
                            <p>
                                Architected and engineered a high-performance, scalable company website using React, 
                                Vite, and TypeScript, optimizing speed, responsiveness, user engagement, and overall 
                                functionality for a seamless user experience.
                            </p>
                            <p>
                                Led a cross-functional team to drive continuous innovation, implementing cutting-edge 
                                web technologies and design strategies to enhance UX/UI, improving user engagement 
                                and overall functionality across platforms.
                            </p>
                            <p>
                                Spearheaded strategic website evolution, aligning digital infrastructure with business 
                                objectives while proactively identifying and resolving technical challenges.
                            </p>
                        </div>

                        <div className="experience-skills">
                            <h3>Technologies Used:</h3>
                            <div className="skills-list">
                                <span className="skill-item">React.js</span>
                                <span className="skill-item">TypeScript</span>
                                <span className="skill-item">Vite</span>
                                <span className="skill-item">Web Performance Optimization</span>
                                <span className="skill-item">UX/UI Design</span>
                                <span className="skill-item">Team Leadership</span>
                                <span className="skill-item">Project Management</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Experience Section */}
            <div className="additional-experience">
                <h2>Additional Experience & Leadership</h2>
                <div className="leadership-grid">
                    <div className="leadership-card">
                        <div className="leadership-icon">🎓</div>
                        <h3>Academic Excellence</h3>
                        <p>Maintained 95+% science average and 90% cumulative average while pursuing Computer Engineering at University of Waterloo</p>
                    </div>
                    <div className="leadership-card">
                        <div className="leadership-icon">🏆</div>
                        <h3>Competition Success</h3>
                        <p>Top 2% in CSMC 2022, Distinction in Euclid Mathematics Competition 2024, demonstrating strong analytical and problem-solving skills</p>
                    </div>
                    <div className="leadership-card">
                        <div className="leadership-icon">💡</div>
                        <h3>Innovation & Learning</h3>
                        <p>Continuously learning new technologies and applying them in real-world projects, from game development to web applications</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShortTerm