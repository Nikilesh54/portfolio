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
            period: "Nov 2022 - Jul 2023",
            description: [
                "Created and maintained robust APIs using Java to manage insurance portfolios, enhancing data retrieval efficiency by 30% and reducing error rates by 20%.",
                "Implemented cross-functional agile methodologies across 15+ developers for collaborative and risk management, throughout the software development life cycle.",
                "Modeled and improved user-friendly front-end interfaces with React functional components, creating 6 reusable components that reduced development time, addressing customer needs and business objectives.",
                "Built and optimized serverless backend solutions using AWS Lambda, integrating with AWS VPCs to ensure secure and scalable handling of policy data, which led to a 25% reduction in operational costs.",
                "Developed AWS infrastructure initiatives including EMR solutions for policy management, achieving 99.9% system uptime while reducing sprint cycle time by 40% through automated deployments."
            ],
            techStack: [
                { name: "React", logo: "/Images/LogosFinal/React.png" },
                { name: "Java", logo: "/Images/LogosFinal/Java.png" },
                { name: "AWS", logo: "/Images/LogosFinal/AWS.png" }
            ]
        },
        {
            company: "Cognizant",
            role: "Software Development Intern",
            period: "Feb 2022 - Jun 2022",
            description: [
                "Designed customer profile using React and deployed corresponding APIs for profile updates, improving user experience and maintaining a 99.9% satisfaction rate with only 1 in 10,000 users experiencing issues.",
                "Performed troubleshooting on 20+ client-reported bugs, enhancing application reliability and customer service satisfaction while ensuring data integrity.",
                "Documented 12+ sprint processes and 8 development workflows in Confluence within the Atlassian Suite, facilitating seamless knowledge transfer across agile teams and reducing KT time."
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