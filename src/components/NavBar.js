import React from "react";
import "../global.scss";
import styles from "../styles/NavBar.module.scss";

const NavBar = ({ moveToAboutMe, moveToSkills, moveToProjects }) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.title} navTypo`}>JH's Portfolio</div>
      <div className={styles.menuSet}>
        <div className={styles.menuWrapper}>
          <div className={`${styles.pointer} navTypo`} onClick={moveToAboutMe}>
            About me
          </div>
          <div className={`${styles.pointer} navTypo`} onClick={moveToSkills}>
            Skills
          </div>
          <div className={`${styles.pointer} navTypo`} onClick={moveToProjects}>
            Projects
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
