import React from "react";
import styles from "../styles/SkillBox.module.scss";

const SkillBox = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  );
};

export default SkillBox;
