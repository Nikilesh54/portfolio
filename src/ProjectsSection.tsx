import { useState } from 'react';
import { ExternalLink, Github, Monitor } from 'lucide-react';
import './ProjectsSection.css';  // We'll create this CSS file next

interface Project {
    title: string;
    description: string;
    techStack: string[];
    icon: keyof typeof icons;
}

const projects: Project[] = [
    {
        title: "Banking Management System",
        description: "Developed an Online Banking System with React and TypeScript, enhancing UI/UX and achieving 99.9% uptime on Azure.",
        techStack: ["React", "TypeScript", "Azure", "Node.js"],
        icon: "Monitor"
    },
    {
        title: "Encrypting Image",
        description: "Built an AES-256-based image encryption platform ensuring secure and tamper-proof image transmission over untrusted networks.",
        techStack: ["Python", "AES-256", "Cryptography", "REST API"],
        icon: "Github"
    },
    {
        title: "Full-Stack LMS with Django & React",
        description: "Created a feature-rich LMS using Django and React, integrating quiz modules, secure uploads, and improved content accessibility.",
        techStack: ["Django", "React", "PostgreSQL", "AWS"],
        icon: "Monitor"
    },
    {
        title: "UniNav - Campus Navigation Platform",
        description: "Designed a web-based navigation and event discovery system using React and the What3Words API, enhancing campus navigation and engagement.",
        techStack: ["React", "What3Words API", "MapBox", "Node.js"],
        icon: "ExternalLink"
    }
];

const icons = {
    ExternalLink,
    Github,
    Monitor
};

const ProjectsSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="projects-container">
            <h2 className="section-title dark-blue-text">Projects</h2>
            <div className="projects-grid">
            {projects.map((project, index) => {
                    const Icon = icons[project.icon];
                    return (
                        <div
                            key={index}
                            className={`project-card ${hoveredIndex === index ? 'hovered' : ''}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="project-header">
                                <div className="project-icon-title">
                                    <div className="icon-container">
                                        <Icon />
                                    </div>
                                    <h3 className="project-title">{project.title}</h3>
                                </div>
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
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectsSection;