import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div id="gh-cv-container">
            <a
                href="https://github.com/JonasAlexanderS/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src="https://github.com/Jonas-Kodehode/Jonas-Portfolio/blob/main/bilder/github-mark.png?raw=true"
                    alt="GitHub Logo"
                    id="gh-logo"
                />
            </a>
            <a href="src\assets\CV\CV-Jonas Alexander Støbakk.pdf" download>
                <img
                    src="https://github.com/JonasAlexanderS/Jonas-Portfolio/blob/main/bilder/cv%20icon.png?raw=true"
                    alt="Download CV icon"
                    id="cv"
                />
            </a>
        </div>
    );
};

export default Sidebar;
