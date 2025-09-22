import React, { useEffect, useRef } from 'react';
import './Experience.css';

interface TechStack {
  name: string;
  logo?: string; // optional: hide if missing
}

interface ExperienceItem {
  company: string;
  role: string;
  period: string; // e.g., "Aug 2024 – May 2025"
  location?: string;
  type: 'work' | 'education';
  description: string;
  techStack?: TechStack[];
}

export const Experience: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const timeline = timelineRef.current;
      if (timeline) {
        const rect = timeline.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight && rect.bottom > 0) {
          const scrollPercent = (windowHeight - rect.top) / (windowHeight + timeline.offsetHeight);
          const fillHeight = Math.min(Math.max(scrollPercent * 100, 0), 100);
          timeline.style.setProperty('--timeline-progress', `${fillHeight}%`);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences: ExperienceItem[] = [
    {
      company: 'Virginia Tech',
      role: 'Software Engineer',
      period: 'Aug 2024 – May 2025',
      location: 'Blacksburg, VA, USA',
      type: 'work',
      description: 'Developing full-stack web applications for portfolio tracking with React.js, PostgreSQL, and Spring Boot. Implementing CI/CD pipelines and collaborating in Agile environments.',
      techStack: [
        { name: 'React', logo: '/Images/LogosFinal/React.png' },
        { name: 'CSS', logo: '/Images/LogosFinal/CSS.png' },
        { name: 'PostgreSQL', logo: '/Images/LogosFinal/PostgreSQL.png' },
        { name: 'Spring Boot', logo: '/Images/LogosFinal/SpringBoot.png' },
        { name: 'Postman', logo: '/Images/LogosFinal/Postman.png' },
        { name: 'Jenkins', logo: '/Images/LogosFinal/Jenkins.png' }
      ]
    },
    {
      company: 'Virginia Tech',
      role: 'Master of Science in Computer Science',
      period: 'Aug 2023 – May 2025',
      location: 'Blacksburg, VA, USA',
      type: 'education',
      description: 'Advanced coursework in algorithms, system design, software engineering, database systems, and computer networks. Focus on modern software development practices and distributed systems.'
    },
    {
      company: 'Cognizant',
      role: 'Software Engineer',
      period: 'Feb 2022 – Jul 2023',
      location: 'India',
      type: 'work',
      description: 'Built and maintained web applications for insurance portfolio management using Java Spring Boot and React.js. Implemented cloud solutions on AWS and contributed to team documentation and best practices.',
      techStack: [
        { name: 'Java', logo: '/Images/LogosFinal/Java.png' },
        { name: 'Spring Boot', logo: '/Images/LogosFinal/SpringBoot.png' },
        { name: 'React', logo: '/Images/LogosFinal/React.png' },
        { name: 'AWS', logo: '/Images/LogosFinal/AWS.png' },
        { name: 'Lambda', logo: '/Images/LogosFinal/Lambda.png' },
        { name: 'S3', logo: '/Images/LogosFinal/S3.png' },
        { name: 'NixOS', logo: '/Images/LogosFinal/NixOS.png' }
      ]
    },
    {
      company: 'LTIMindtree',
      role: 'Associate Software Engineer',
      period: 'Feb 2021 – Dec 2021',
      location: 'India',
      type: 'work',
      description: 'Developed web interfaces for e-commerce product catalogs using HTML, CSS, JavaScript, and Python. Built data sync features with REST APIs and contributed to microservices architecture.',
      techStack: [
        { name: 'HTML', logo: '/Images/LogosFinal/HTML.png' },
        { name: 'CSS', logo: '/Images/LogosFinal/CSS.png' },
        { name: 'JavaScript', logo: '/Images/LogosFinal/JavaScript.png' },
        { name: 'Python', logo: '/Images/LogosFinal/Python.png' },
        { name: 'Redis', logo: '/Images/LogosFinal/Redis.png' },
        { name: 'Microservices', logo: '/Images/LogosFinal/Microservices.png' }
      ]
    }
  ];

  // Sort experiences by year (most recent first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    const yearA = parseInt(a.period.split(' ')[1] || a.period.split(' ')[0]);
    const yearB = parseInt(b.period.split(' ')[1] || b.period.split(' ')[0]);
    return yearB - yearA;
  });

  return (
    <section id="experience">
      <div className="project-wrapper">
        <h2 className="section-title dark-blue-text">Experience</h2>
        <div className="timeline-container" ref={timelineRef}>
          <div className="timeline-bar">
            <div className="timeline-progress"></div>
          </div>

          <div className="timeline-content">
            {sortedExperiences.map((exp, index) => (
              <div 
                key={index} 
                className={`timeline-item ${exp.type === 'education' ? 'education' : 'work'}`}
                style={{ 
                  '--item-index': index,
                  '--total-items': sortedExperiences.length
                } as React.CSSProperties}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <div className="card-header">
                    <h3 className="company-name">{exp.company}</h3>
                    <h4 className="role-title">{exp.role}</h4>
                    <div className="period-location">
                      <span className="period">{exp.period}</span>
                      {exp.location && <span className="location">{exp.location}</span>}
                    </div>
                  </div>

                  <div className="card-content">
                    <p className="experience-description">{exp.description}</p>
                    
                    {exp.techStack && exp.techStack.length > 0 && (
                      <div className="tech-stack">
                        <div className="tech-icons">
                          {exp.techStack.map((tech, i) => (
                            tech.logo ? (
                              <img
                                key={i}
                                src={tech.logo}
                                alt={tech.name}
                                title={tech.name}
                                className="tech-logo"
                                onError={(e) => {
                                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                                }}
                              />
                            ) : (
                              <span key={i} className="tech-pill">{tech.name}</span>
                            )
                          ))}
                        </div>
                      </div>
                    )}
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
