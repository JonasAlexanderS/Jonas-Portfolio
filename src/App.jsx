import React from "react";
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./components/LandingPage/LandingPage";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import ContactForm from "./components/ContactForm/ContactForm";
import Sidebar from "./components/SideBar/SideBar";
import "./index.css";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Sidebar />
            <main>
                <LandingPage />
                <AboutMe />
                <Projects />
                <ContactForm />
            </main>
        </div>
    );
}

export default App;
