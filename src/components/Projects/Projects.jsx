import React, { useState } from "react";
import "./Projects.css";

const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        {
            img: "https://github.com/JonasAlexanderS/Jonas-Portfolio/blob/main/bilder/Skjermbilde%202024-03-04%20131615.png?raw=true",
            text: "Dette er et prosjekt der vi lærte om event listeners",
            link: "https://github.com/Kodehode-Stavanger/javascript-advanced-project-drum-machine-Jonas-Kodehode",
        },
        {
            img: "https://github.com/JonasAlexanderS/Jonas-Portfolio/blob/main/bilder/Skjermbilde%202024-03-05%20103910.png?raw=true",
            text: "Dette er et prosjekt der vi lærte og ta inn brukerdata og appende det til nettsiden",
            link: "https://github.com/Kodehode-Stavanger/user-data-assignment-Jonas-Kodehode",
        },
        {
            img: "https://github.com/JonasAlexanderS/Jonas-Portfolio/blob/main/bilder/Skjermbilde%202024-03-04%20132010.png?raw=true",
            text: "Dette er et prosjekt der vi lærte om å hente data fra api-er",
            link: "https://github.com/Kodehode-Stavanger/javascript-advanced-project-api-Jonas-Kodehode",
        },
        {
            img: "https://github.com/JonasAlexanderS/Jonas-Portfolio/blob/main/bilder/Skjermbilde%202024-03-07%20145859.png?raw=true",
            text: "Dette er et prosjekt hvor jeg lærte meg om event listener, og endre data på siden",
            link: "https://github.com/Kodehode-Stavanger/javascript-basic-mini-project-Jonas-Kodehode",
        },
        {
            img: "https://github.com/JonasAlexanderS/Jonas-Portfolio/blob/main/bilder/catbreedpic.png?raw=true",
            text: "Dette er et prosjekt der vi lærte om å hente data fra api-er",
            link: "https://github.com/JonasAlexanderS/Cat-breed-search",
        },
    ];

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setActiveIndex(
            (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
        );
    };

    return (
        <section id="projects-page">
            <div id="carousel" data-carousel>
                <button
                    className="carousel-button"
                    id="prev-button"
                    onClick={prevSlide}
                >
                    &#8656;
                </button>
                <button
                    className="carousel-button"
                    id="next-button"
                    onClick={nextSlide}
                >
                    &#8658;
                </button>

                <ul id="carousel-container" data-slides>
                    {slides.map((slide, index) => (
                        <li
                            key={index}
                            className={`slide ${
                                index === activeIndex ? "active" : ""
                            }`}
                            style={{ opacity: index === activeIndex ? 1 : 0 }}
                        >
                            <img src={slide.img} alt={`Slide ${index + 1}`} />
                            <h2 className="carousel-text">{slide.text}</h2>
                            <div className="project-link">
                                <a
                                    href={slide.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <p>Link til prosjektet</p>
                                    <img
                                        src="https://github.com/JonasAlexanderS/Jonas-Portfolio/blob/main/bilder/github-mark-white%20(Custom).png?raw=true"
                                        alt="GitHub logo"
                                        className="github-logo"
                                    />
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Projects;
