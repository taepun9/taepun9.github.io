import React from "react";
import styles from "../styles/Header.module.scss";
import background from "../images/background.jpeg";

const Header = () => {
  return (
    <div className={styles.container}>
      <img src={background} className={styles.background} />
    </div>
  );
};

export default Header;
