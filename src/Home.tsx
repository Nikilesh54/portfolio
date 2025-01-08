import * as React from 'react';
import './Home.css';
import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import GLOBE from 'vanta/dist/vanta.globe.min.js';
import './index.css';
import {Experience} from "./Experience";
import ProjectsSection from "./ProjectsSection";

const AboutSection: React.FC = () => {
    const [vantaEffect, setVantaEffect] = useState<any>(null);
    const vantaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                GLOBE({
                    el: vantaRef.current!,
                    THREE, // Ensure THREE is provided
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    color: 0x9f9f9f,
                    color2: 0x9f9f9f,
                    size: 0.50,
                    backgroundColor: 0x0f172a
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <section id="about" ref={vantaRef}>
            <div className="Polygon-Style">
            <div className="container">
                <h2 className="section-title load-hidden">About me</h2>
                <div className="about-wrapper">
                        <div className="about-wrapper__info load-hidden">
                            <p className="about-info-text">
                                👋 Hi, I'm Nikilesh – a tech enthusiast, full-stack developer, and master's student at Virginia
                                Tech <img src="public/VT.png " alt="VT Logo" className="about-inline-logo"/>, passionate about coding, cloud, and solving problems with a dash of humor! <img src="public/Semicolon.png" alt="Semicolon Logo" className="about-inline-logo"/>🚀
                            </p>
                        {/* Skills */}
                        <div className="skills-card">
                            <p>
                                <span className="Skill ">Technologies</span>
                                <span className="extra-info skill-logo-wrapper">
                                    <img src="/Images/LogosFinal/AWS1.png" alt="AWS" title="AWS" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/Microsoft Azure.png" alt="Azure" title="Azure" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/Powerbi.png" alt="Powerbi" title="Powerbi" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/Snowflake.png" alt="Snowflake" title="Snowflake" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/Figma.png" alt="Figma" title="Figma" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/Git.png" alt="Git" title="Git" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/GitHub.png" alt="GitHub" title="GitHub" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/BitBucket.png" alt="BitBucket" title="BitBucket" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/Postman.png" alt="Postman" title="Postman" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/Docker.png" alt="Docker" title="Docker" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/Kubernetes.png" alt="Kubernetes" title="Kubernetes" className="skill-logo"/>
                                </span>
                            </p>
                            <p>
                                <span className="Skill">Languages</span>
                                <span className="extra-info">
                                    <img src="/Images/LogosFinal/Python.png" alt="Python" title="Python" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/Java.png" alt="Java" title="Java" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/JavaScript.png" alt="JavaScript" title="JavaScript" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/C++.png" alt="C++" title="C++" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/Typescript.png" alt="Typescript" title="Typescript" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/SQL.png" alt="SQL" title="SQL" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/Linux.png" alt="Linux" title="Linux" className="skill-logo"/>
                                </span>
                            </p>
                            <p>
                                <span className="Skill">Databases</span>
                                <span className="extra-info">
                                    <img src="/Images/LogosFinal/MySQL.png" alt="MySQL" title="MySQL" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/PostgreSQL.png" alt="PostgreSQL" title="PostgreSQL" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/mongoDB.png" alt="MongoDB" title="MongoDB" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/SQLServer.png" alt="SQLServer" title="SQLServer" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/OracleDB.png" alt="Oracle" title="Oracle" className="skill-logo"/>
                                </span>
                            </p>
                            <p>
                                <span className="Skill">Frameworks</span>
                                <span className="extra-info">
                                    <img src="/Images/LogosFinal/React.png" alt="React" title="React" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/NodeJS.png" alt="Nodejs" title="Nodejs" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/express.png" alt="Express" title="Express" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/Redux.png" alt="Redux" title="Redux" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/jQuery.png" alt="jQuery" title="jQuery" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/Bootstrap.png" alt="Bootstrap" title="Bootstrap" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/HTML.png" alt="HTML" title="HTML" className="skill-logo"/>
                                    <img src="/Images/LogosFinal/CSS.png" alt="CSS" title="CSS" className="skill-logo"/>
                                </span>
                            </p>
                        </div>
                    </div>
                    <a
                        rel="noreferrer"
                        target="_blank"
                        className="cta-btn cta-btn--resume"
                        href="/resume.pdf"
                    >
                        View Resume
                    </a>
                </div>
            </div>
            </div>
        </section>
    );
};

const CursorEffect: React.FC = () => {
    useEffect(() => {
        const cursor = document.createElement('div');
        cursor.classList.add('cursor');
        document.body.appendChild(cursor);

        const moveCursor = (e: MouseEvent) => {
            requestAnimationFrame(() => {
                cursor.style.left = `${e.clientX + window.scrollX}px`;
                cursor.style.top = `${e.clientY + window.scrollY}px`;
            });
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.body.removeChild(cursor);
        };
    }, []);

    return null;
};

const Home: React.FC = () => {
    return (
        <>
            <head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="shortcut icon" type="image/png" href="assets/favicon.png"/>

                <title>Nikilesh Madala</title>
                <meta name="keywords" content="[username], [name], skill"/>
                <meta name="description" content="Nikilesh Madala"/>

                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
                <link rel="stylesheet" href="Home.css"/>
                <script
                    defer
                    src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"
                ></script>
                <script async defer src="https://buttons.github.io/buttons.js"></script>
            </head>

            <body>
            <div id="top"></div>

            <section id="hero" className="jumbotron">
                <div className="hero-container">
                    <h1 className="hero-title load-hidden">
                        Hi, my name is <span className="text-color-main">Nikilesh Madala</span>
                        <br/>
                    </h1>
                    <p className="hero-cta load-hidden">
                        <a rel="noreferrer" className="cta-btn cta-btn--hero" href="#about">
                            Know more
                        </a>
                    </p>
                </div>
            </section>

            <CursorEffect/> {/* Add the CursorEffect component */}
            <AboutSection/>


            {/*Experience*/}

            <Experience />


            {/*Projects*/}
            <ProjectsSection/>

            {/*Footer*/}
            <section id="contact">
                <div className="container">
                    <a rel="noreferrer" href="#top" className="back-to-top">
                        <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
                    </a>
                    <div className="contact-wrapper load-hidden">
                        <a
                            rel="noreferrer"
                            target="_blank"
                            className="cta-btn cta-btn--contact-me"
                            href="mailto:nikileshm@vt.edu"
                        >
                            Contact me
                        </a>
                    </div>
                    <div className="container">
                        <div className="social-links">
                            <a rel="noreferrer" href="https://x.com/MN040601" target="_blank">
                                <i className="fa fa-twitter fa-inverse"></i>
                            </a>
                            <a rel="noreferrer" href="https://www.linkedin.com/in/nikileshmadala/" target="_blank">
                                <i className="fa fa-linkedin fa-inverse"></i>
                            </a>
                            <a rel="noreferrer" href="https://github.com/Nikilesh54" target="_blank">
                                <i className="fa fa-github fa-inverse"></i>
                            </a>
                        </div>
                        <p className="footer__text">© 2024 Nikilesh Madala</p>
                        <p className="footer__text"> Design and Intellectual property (IP) of Nikilesh Madala. Reusing
                            without permission in any level is not allowed.</p>
                    </div>
                </div>
            </section>
            <script defer type="module" src="index.js"></script>
            </body>
        </>
    );
};

export default Home;