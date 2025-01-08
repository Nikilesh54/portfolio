import React, { useEffect, useRef } from 'react';
import './Experience.css';

interface TechStack {
    name: string;
    logo: string;
}

interface ExperienceItem {
    company: string;
    role: string;
    period: string;
    description: string[];
    techStack: TechStack[];
}

export const Experience: React.FC = () => {
    const timelineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const timeline = timelineRef.current;
            if (timeline) {
                const timelineTop = timeline.getBoundingClientRect().top;
                const timelineBottom = timeline.getBoundingClientRect().bottom;
                const windowHeight = window.innerHeight;

                if (timelineTop < windowHeight && timelineBottom > 0) {
                    const scrollPercent = (windowHeight - timelineTop) / (windowHeight + timeline.offsetHeight);
                    const fillHeight = Math.min(Math.max(scrollPercent * 100, 0), 100);
                    timeline.style.setProperty('--timeline-progress', `${fillHeight}%`);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const experiences: ExperienceItem[] = [
        {
            company: "Cognizant",
            role: "Software Engineer",
            period: "2022 - 2023",
            description: [
                "Developed and maintained robust APIs using Python to manage insurance portfolios, client policies, and policy creation processes, enhancing data retrieval efficiency by 30% and reducing error rates by 20%.",
                "Modeled and implemented user-friendly front-end interfaces with React functional components for seamless policy management and portfolio tracking, which improved user interaction and satisfaction scores by 35%.",
                "Built and optimized serverless backend solutions using AWS Lambda, integrating with AWS VPCs to ensure secure and scalable handling of policy data, which led to a 25% reduction in operational costs.",
                "Architected and administered AWS infrastructure to support high-volume policy management and client interactions, achieving 99.9% system uptime and improving overall system reliability.",
                "Collaborated closely with insurance specialists to implement new features and enhancements tailored to policy management needs, consistently delivering projects on time and increasing feature adoption by 40%."
            ],
            techStack: [
                { name: "React", logo: "/Images/LogosFinal/React.png" },
                { name: "Python", logo: "/Images/LogosFinal/Python.png" },
                { name: "AWS", logo: "/Images/LogosFinal/AWS.png" },
                { name: "TypeScript", logo: "/Images/LogosFinal/Typescript.png" }
            ]
        },
        {
            company: "Cognizant",
            role: "Software Development Intern",
            period: "2021 - 2022",
            description: [
                "Designed customer profile using React, successfully improving user experience and streamlining the profile management process, resulting in 99 out of 100 users reporting a smoother experience.",
                "Created and deployed corresponding APIs for profile updates, ensuring data integrity and reducing update processing time by 20%.",
                "Resolved 20+ client-reported bugs, enhancing application reliability and user satisfaction.",
                "Documented processes, tasks, and development workflows comprehensively, creating clear and accessible documentation on Confluence to support team collaboration and knowledge sharing."
            ],
            techStack: [
                { name: "React", logo: "/Images/LogosFinal/React.png" },
                { name: "JavaScript", logo: "/Images/LogosFinal/JavaScript.png" },
                { name: "Node.js", logo: "/Images/LogosFinal/NodeJS.png" }
            ]
        }
    ];

    return (
        <section id="experience">
            <div className="project-wrapper">
                <h2 className="section-title dark-blue-text">Experience</h2>
                <div className="timeline-container" ref={timelineRef}>
                    <div className="timeline-bar">
                        <div className="timeline-progress"></div>
                    </div>
                    <div className="row">
                        {experiences.map((exp, index) => (
                            <div key={index} className="col-lg-4 col-sm-12">
                                <div className="project-wrapper__text load-hidden">
                                        <div className="experience-header">
                                            <h3 className="project-wrapper__text-title">{exp.company}</h3>
                                            <div className="role-period">
                                                <h4 className="Experience-Role">{exp.role}</h4>
                                                <span className="period">{exp.period}</span>
                                            </div>
                                        </div>
                                        <div className="experience-details">
                                            {exp.description.map((desc, i) => (
                                                <p key={i} className="mb-4">{desc}</p>
                                            ))}
                                        </div>
                                        <div className="tech-stack">
                                            <h5>Tech Stack</h5>
                                            <div className="tech-icons">
                                                {exp.techStack.map((tech, i) => (
                                                    <img
                                                        key={i}
                                                        src={tech.logo}
                                                        alt={tech.name}
                                                        title={tech.name}
                                                        className="tech-logo"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};