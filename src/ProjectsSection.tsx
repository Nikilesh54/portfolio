import { useState } from 'react';
import { Github } from 'lucide-react';
import './ProjectsSection.css';

interface Project {
    title: string;
    description: string;
    techStack: string[];
    githubUrl: string;  // Added this field
}

const projects: Project[] = [
    {
        title: "Encrypting Image",
        description: "Built an AES-256-based image encryption platform ensuring secure and tamper-proof image transmission over untrusted networks.",
        techStack: ["Python", "AES-256", "Cryptography", "REST API"],
        githubUrl: "#"
    },
    {
        title: "Full-Stack LMS with Django & React",
        description: "Created a feature-rich LMS using Django and React, integrating quiz modules, secure uploads, and improved content accessibility.",
        techStack: ["Django", "React", "PostgreSQL", "AWS"],
        githubUrl: "#"
    },
    {
        title: "UniNav - Campus Navigation Platform",
        description: "Designed a web-based navigation and event discovery system using React and the What3Words API, enhancing campus navigation and engagement.",
        techStack: ["React", "What3Words API", "MapBox", "Node.js"],
        githubUrl: "#"
    },
    {
        title: "Airbnb Data Analytics Platform",
        description: "Built a scalable ETL and sentiment analysis pipeline integrating structured and unstructured data, cutting model training time by 30%.",
        techStack: ["SQL", "ETL Pipelines", "Data Warehousing"],
        githubUrl: "#"
    },
    {
        title: "Real-time Call Fraud Detection Platform",
        description: "Developed a fault-tolerant streaming ML system for telecom fraud detection, improving precision from 0.82 to 0.91 with real-time alerts.",
        techStack: ["Azure", "Delta Lake", "PySpark", "Scikit-learn"],
        githubUrl: "#"
    }
];

const ProjectsSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="projects-container">
            <h2 className="section-title dark-blue-text">Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`project-card ${hoveredIndex === index ? 'hovered' : ''}`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="project-header">
                            <h3 className="project-title">{project.title}</h3>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="github-link">
                                <Github className="github-icon" />
                            </a>
                        </div>

                        <p className="project-description">
                            {project.description}
                        </p>

                        <div className="tech-stack">
                            {project.techStack.map((tech, techIndex) => (
                                <span key={techIndex} className="tech-tag">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="hover-line" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsSection;