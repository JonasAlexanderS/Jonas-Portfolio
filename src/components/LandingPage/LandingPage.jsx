import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
    return (
        <section id="landing-page">
            <div id="full-name">
                <h1 id="first-name">Jonas</h1>
                <h1 id="middle-name">Alexander</h1>
                <h1 id="last-name">Støbakk</h1>
            </div>
            <div id="pic-and-name">
                <img
                    src="https://github.com/JonasAlexanderS/Jonas-Portfolio/blob/main/bilder/Jonas%20forsidebilde.png?raw=true"
                    alt="Jonas"
                    id="jonas-bilde"
                />
            </div>
            <div id="info-text">
                <p id="top-text">Webutvikler,</p>
                <p>Katteelsker</p>
            </div>
            <a href="#about-me-page">
                <img
                    src="https://img.icons8.com/material-rounded/48/give-way.png"
                    alt="Icon to scroll down"
                    id="triangle-icon"
                />
            </a>
        </section>
    );
};

export default LandingPage;
