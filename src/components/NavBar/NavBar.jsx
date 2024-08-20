import React, { useEffect, useState } from "react";
import "./NavBar.css";

const NavBar = () => {
    const [activeSection, setActiveSection] = useState("landing-page");

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".nav-links");

        const handleScroll = () => {
            let current = "";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (window.scrollY >= sectionTop - sectionHeight / 3) {
                    current = section.getAttribute("id");
                }
            });

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header>
            <ul id="nav-bar">
                <li className="nav-items">
                    <a
                        href="#landing-page"
                        className={`nav-links ${
                            activeSection === "landing-page" ? "active" : ""
                        }`}
                    >
                        //Hjem
                    </a>
                </li>
                <li className="nav-items">
                    <a
                        href="#about-me-page"
                        className={`nav-links ${
                            activeSection === "about-me-page" ? "active" : ""
                        }`}
                    >
                        /*Om meg*/
                    </a>
                </li>
                <li className="nav-items">
                    <a
                        href="#projects-page"
                        className={`nav-links ${
                            activeSection === "projects-page" ? "active" : ""
                        }`}
                    >
                        //Prosjekter
                    </a>
                </li>
                <li className="nav-items">
                    <a
                        href="#contact-form"
                        className={`nav-links ${
                            activeSection === "contact-form" ? "active" : ""
                        }`}
                    >
                        /*Kontakt*/
                    </a>
                </li>
            </ul>
        </header>
    );
};

export default NavBar;
