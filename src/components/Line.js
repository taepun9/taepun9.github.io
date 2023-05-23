import React from "react";
import styles from "../styles/Line.module.scss";
import "../global.scss";

const Line = ({ children }) => {
  return <div className={`${styles.line} lineTitle`}>{children}</div>;
};

export default Line;
