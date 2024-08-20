import React, { useEffect, useState } from "react";
import "./AboutMe.css";

const AboutMe = () => {
    const [age, setAge] = useState(null);

    useEffect(() => {
        const calculateAge = (birthDate) => {
            const currentDate = new Date();
            const birth = new Date(birthDate);
            let age = currentDate.getFullYear() - birth.getFullYear();
            const monthDiff = currentDate.getMonth() - birth.getMonth();
            if (
                monthDiff < 0 ||
                (monthDiff === 0 && currentDate.getDate() < birth.getDate())
            ) {
                age--;
            }
            return age;
        };

        setAge(calculateAge("1999-02-13"));
    }, []);

    return (
        <section id="about-me-page">
            {/* Part One */}
            <div id="part-one">
                <img
                    src="https://github.com/JonasAlexanderS/Jonas-Portfolio/blob/main/bilder/71-_D705508.jpg?raw=true"
                    alt="Jonas"
                    id="jonas-about-photo"
                />
                <p className="about-me-text">
                    Mitt navn er Jonas Alexander Støbakk, jeg er{" "}
                    <span id="age">{age}</span> år og jeg brenner for å holde på
                    med webutvikling.
                </p>
            </div>

            {/* Part Two */}
            <div id="part-two">
                <p className="about-me-text">
                    Jeg bruker fritiden min på gaming, spesielt CO-OP spill, og
                    story spill. Er også veldig interessert i teknologi, har for
                    øyeblikket lært meg Html, Css, JavaScript og React, ønsker å
                    lære mer!
                </p>
                <img
                    src="https://github.com/JonasAlexanderS/Jonas-Portfolio/blob/main/bilder/gaming.jpg?raw=true"
                    alt="Gaming setup"
                    id="second-about-photo"
                />
            </div>

            {/* Part Three */}
            <div id="part-three">
                <img
                    src="https://github.com/JonasAlexanderS/Jonas-Portfolio/blob/main/bilder/Akira&Lucy.jpg?raw=true"
                    alt="Akira and Lucy"
                    id="third-about-photo"
                />
                <p className="about-me-text">
                    Jeg er også veldig glad i dyr, spesielt katter. Her kan du
                    se mine katter, Akira og Lucy.
                </p>
            </div>
        </section>
    );
};

export default AboutMe;
