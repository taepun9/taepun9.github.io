import React, { useRef } from "react";
import "./App.scss";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProjectsRenewal from "./components/Projects";

function App() {
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const moveToMenu = (elementRef) => {
    if (elementRef.current !== null && elementRef.current !== undefined) {
      let offset = elementRef.current.offsetTop - 70;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="App">
      <NavBar
        moveToAboutMe={() => {
          moveToMenu(aboutMeRef);
        }}
        moveToSkills={() => moveToMenu(skillsRef)}
        moveToProjects={() => moveToMenu(projectsRef)}
      />
      <Header />
      <AboutMe aboutMeRef={aboutMeRef} />
      <Skills skillsRef={skillsRef} />
      <ProjectsRenewal projectsRef={projectsRef} />
    </div>
  );
}

export default App;
