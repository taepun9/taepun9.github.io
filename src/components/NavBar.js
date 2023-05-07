import React from "react";
import styles from "../styles/NavBar.module.scss";

const NavBar = ({ moveToAboutMe, moveToSkills, moveToProjects }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>JH's Portfolio</div>
      <div className={styles.menuSet}>
        <div className={styles.menuWrapper}>
          <div className={styles.pointer} onClick={moveToAboutMe}>
            About me
          </div>
          <div className={styles.pointer} onClick={moveToSkills}>
            Skills
          </div>
          <div className={styles.pointer} onClick={moveToProjects}>
            Projects
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
