import React from "react";
import styles from "../styles/Skills.module.scss";
import SkillBox from "./SkillBox";
import ReactLogo from "../images/logo/react.png";
import HTMLandCSSandJS from "../images/logo/HTMLandCSSandJS.jpeg";
import ExpressLogo from "../images/logo/express.png";
import MariadbLogo from "../images/logo/mariadb.png";
import JavascriptLogo from "../images/logo/javascript.png";
import PythonLogo from "../images/logo/python.png";

const Skills = ({ skillsRef }) => {
  return (
    <div className={styles.container} ref={skillsRef}>
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.skillsWrapper}>
        <SkillBox title={"Frontend"}>
          <img src={ReactLogo} className={styles.logo} />
          <img src={HTMLandCSSandJS} className={styles.logo} />
        </SkillBox>
        <SkillBox title={"Backend"}>
          <img src={ExpressLogo} className={styles.logo}></img>
          <img src={MariadbLogo} className={styles.logo}></img>
        </SkillBox>
        <SkillBox title={"Language"}>
          <img src={JavascriptLogo} className={styles.logo}></img>
          <img src={PythonLogo} className={styles.logo}></img>
        </SkillBox>
      </div>
    </div>
  );
};

export default Skills;
