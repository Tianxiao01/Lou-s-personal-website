import React from 'react'
import ProjectCard from './ProjectCard';
import './LongTerm.css';
import aquaticDisplay from '../../assets/Aquatic life matter project display.jpg';
import aquaticVideo from '../../assets/Aquatic life matter video diaplay.mp4';
import csmcMedal from '../../assets/csmc medal.jpg';
import louLineImage from '../../assets/Lou\'s Line.png';
import louLineVideo from '../../assets/Lou\'s line gameplay and brief collision logic explanation.mp4';
import louworldImage from '../../assets/Louworld_1.png';
import gravitiventureVideo from '../../assets/gravitiventure gameplay.mp4';

const LongTerm = () => {
    return (
        <div className="projects-container">
            <div className="projects-header">
                <h1>My Projects</h1>
                <p>Exploring technology through diverse projects and innovative solutions</p>
            </div>

            <div className="projects-grid">
                {/* Aquatic Environment Matters */}
                <ProjectCard
                    title="Aquatic Environment Matters"
                    description="An aquatic environment detection and control system designed to monitor and maintain optimal conditions for aquatic life. This project combines hardware engineering with software development to create a comprehensive monitoring solution."
                    technologies={['STM32F401RE', 'DS18B20 Sensors', 'C/C++', 'LED Matrix Display', 'Data Storage', 'Unit Conversion']}
                    features={[
                        'Temperature monitoring with dual STM32F401RE microcontrollers',
                        'DS18B20 sensor integration for accurate readings',
                        'LED matrix display with optimized refresh rate',
                        'Weekly and yearly trend storage capabilities',
                        'Automatic unit conversion functionality',
                        'Real-time data collection and analysis'
                    ]}
                    category="hardware"
                    status="completed"
                    imageUrl={aquaticDisplay}
                    videoUrl={aquaticVideo}
                />

                {/* Lou's Line */}
                <ProjectCard
                    title="Lou's Line"
                    description="A Unity-based recreation of the mobile game 'The Line', featuring optimized collision detection and dynamic path generation. This project demonstrates advanced game development techniques and performance optimization."
                    technologies={['Unity', 'C#', 'Game Development', 'Collision Detection', 'Path Generation', 'Random Level Generation']}
                    features={[
                        'Unity-based mobile game recreation',
                        'Optimized collision detection system',
                        'Dynamic path generation using random level generation logic',
                        'Enhanced performance and scalability',
                        'Improved user experience and gameplay quality',
                        'Smooth navigation system implementation'
                    ]}
                    category="game"
                    status="completed"
                    imageUrl={louLineImage}
                    videoUrl={louLineVideo}
                />

                {/* Louworld */}
                <ProjectCard
                    title="Louworld"
                    description="A 2D turn-based strategy game created entirely in C++ from scratch. This ambitious project showcases custom framework development, advanced algorithms, and independent game development skills."
                    technologies={['C++', 'Custom Framework', 'A* Pathfinding', 'Game Engine', 'Graphics Programming', 'Algorithm Design']}
                    features={[
                        '40+ hours of dedicated development time',
                        '2000+ lines of custom C++ code',
                        'Custom-optimized A* pathfinding algorithm',
                        'Independent framework development from scratch',
                        'Advanced system intelligence implementation',
                        'Unparalleled control and efficiency without game engine dependency'
                    ]}
                    category="game"
                    status="completed"
                    imageUrl={louworldImage}
                    placeholderIcon="🎥"
                    placeholderText="No Video Available"
                />

                {/* Red Rising Website */}
                <ProjectCard
                    title="Red Rising Book Introduction Website"
                    description="An interactive website dedicated to the 'Red Rising' series, featuring dynamic content and responsive design. This project showcases web development skills and creative storytelling through digital media."
                    technologies={['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Interactive Elements', 'Web Development']}
                    features={[
                        'Interactive website for the Red Rising book series',
                        'Dynamic content management system',
                        'Responsive design for all devices',
                        'Enhanced user experience through engaging visuals',
                        'Interactive elements to support storytelling',
                        'User immersion optimization'
                    ]}
                    category="web"
                    status="completed"
                    placeholderIcon="📚"
                    placeholderText="Website Screenshots & Live Demo"
                />

                {/* Gravitiventure */}
                <ProjectCard
                    title="Gravitiventure"
                    description="A pseudo-2D Unity game featuring unlimited obstacle dodging gameplay with custom 3D space obstacle generation and neutral change logic. This project explores advanced game mechanics, procedural generation, and player data persistence."
                    technologies={['Unity', 'C#', '3D Graphics', 'Procedural Generation', 'Game Mechanics', 'Physics Engine', 'MySQL', 'Navicat']}
                    features={[
                        'Pseudo-2D Unity game with 3D elements',
                        'Unlimited obstacle dodging gameplay',
                        'Custom 3D space obstacle generation',
                        'Neutral change logic implementation',
                        'Advanced physics and collision systems',
                        'Procedural level generation',
                        'MySQL database integration for player data storage',
                        'Navicat database management for data persistence'
                    ]}
                    category="game"
                    status="completed"
                    videoUrl="No Video Available"
                    placeholderIcon="📸"
                    placeholderText="No Images Available"
                />

                 {/*Home Temperature Central Control (FPGA, VHDL, Intel Quartus, DE10-Lite)*/}
                 <ProjectCard
                    title="Home Temperature Central Control"
                    description="Designed and implemented control logic for a simplified home HVAC system using VHDL on FPGA."
                    technologies={['FPGA', 'VHDL', 'Intel Quartus', 'DE10-Lite']}
                    features={[
                        'Developed an FPGA-based control system for a centralized home HVAC model, integrating sensor-driven inputs with actuator outputs for automated environmental regulation.',
                        'Executed end-to-end design flow including VHDL coding, simulation, synthesis, and on-board implementation, achieving reliable and efficient system performance.',
                    ]}
                    category="hardware"
                    status="completed"
                    placeholderIcon="📚"
                    placeholderText="Website Screenshots & Live Demo"
                />

                {/*Traffic Light Control System*/}
                <ProjectCard
                    title="Traffic Light Control System"
                    description="Implemented a finite state machine in VHDL to control traffic light timing and behavior at a crossroad."
                    technologies={['FPGA', 'VHDL', 'Intel Quartus', 'DE10-Lite']}
                    features={[
                        'Engineered a finite state machine in VHDL to orchestrate multi-phase traffic light operations at an intersection, ensuring precise state transitions and timing synchronization.',
                        'Conducted functional verification through simulation and deployed the design on DE10-Lite FPGA hardware for real-time validation',
                    ]}
                    category="hardware"
                    status="completed"
                    placeholderIcon="📚"
                    placeholderText="Website Screenshots & Live Demo"
                />
            </div>
        </div>
    )
}

export default LongTerm