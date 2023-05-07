import React from "react";
import styles from "../styles/Line.module.scss";

const Line = ({ children }) => {
  return <div className={styles.line}>{children}</div>;
};

export default Line;
