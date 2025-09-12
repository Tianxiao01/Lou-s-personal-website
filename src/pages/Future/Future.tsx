import React from 'react';
import './Future.css';

const Future = () => {
    return (
        <div className="future-container">
            <div className="future-header">
                <h1>Future Plans & Goals</h1>
                <p>Building tomorrow through continuous learning and innovation</p>
            </div>

            <div className="future-content">
                {/* Career Goals */}
                <section className="career-goals">
                    <h2>Career Aspirations</h2>
                    <div className="goals-grid">
                        <div className="goal-card">
                            <div className="goal-icon">🔧</div>
                            <h3>Hardware Engineering</h3>
                            <p>
                                Pursue a career in hardware engineering, focusing on embedded systems, 
                                circuit design, and FPGA development. I'm passionate about creating 
                                innovative hardware solutions that bridge the gap between software and physical systems.
                            </p>
                        </div>
                        <div className="goal-card">
                            <div className="goal-icon">🎮</div>
                            <h3>Game Development</h3>
                            <p>
                                Continue developing games as both a hobby and potential career path. 
                                I'm passionate about creating immersive experiences and exploring 
                                innovative gameplay mechanics that challenge players' minds.
                            </p>
                        </div>
                        <div className="goal-card">
                            <div className="goal-icon">🤖</div>
                            <h3>AI & Machine Learning</h3>
                            <p>
                                Explore artificial intelligence and machine learning applications, 
                                particularly in game development and automation. I'm interested in 
                                how AI can enhance user experiences and solve complex problems.
                            </p>
                        </div>
                        <div className="goal-card">
                            <div className="goal-icon">💻</div>
                            <h3>Software Engineering</h3>
                            <p>
                                Pursue software engineering opportunities, focusing on full-stack development 
                                and system architecture. I aim to work on impactful projects that solve 
                                real-world problems and contribute to technological advancement.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Personal Development */}
                <section className="personal-development">
                    <h2>Personal Development Goals</h2>
                    <div className="personal-goals">
                        <div className="personal-goal">
                            <div className="goal-icon">🌍</div>
                            <h3>Global Impact</h3>
                            <p>
                                Contribute to projects that have a positive global impact, 
                                whether through technology education, environmental solutions, 
                                or accessibility improvements.
                            </p>
                        </div>
                        <div className="personal-goal">
                            <div className="goal-icon">🤝</div>
                            <h3>Community Building</h3>
                            <p>
                                Build and nurture communities of developers, gamers, and 
                                technology enthusiasts. I want to create spaces where people 
                                can learn, collaborate, and grow together.
                            </p>
                        </div>
                        <div className="personal-goal">
                            <div className="goal-icon">📚</div>
                            <h3>Knowledge Sharing</h3>
                            <p>
                                Share my knowledge and experiences through teaching, mentoring, 
                                and content creation. I believe in the power of knowledge sharing 
                                to accelerate collective growth.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Future;
