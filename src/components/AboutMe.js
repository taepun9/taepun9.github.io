import React from "react";
import styles from "../styles/AboutMe.module.scss";
import InfoItem from "./InfoItem";
import {
  FaUser,
  FaCalendarDay,
  FaPhoneAlt,
  FaMailBulk,
  FaSchool,
  FaLocationArrow,
} from "react-icons/fa";

const AboutMe = ({ aboutMeRef }) => {
  return (
    <div className={styles.container} ref={aboutMeRef}>
      <h1 className={styles.title}>About Me</h1>
      <div className={styles.infoWrapper}>
        <InfoItem icon={<FaUser />} infoName={"이름"} content={"정재훈"} />
        <InfoItem
          icon={<FaCalendarDay />}
          infoName={"생년월일"}
          content={"97.05.15"}
        />
        <InfoItem
          icon={<FaLocationArrow />}
          infoName={"주소지"}
          content={"경북 칠곡군"}
        />
        <InfoItem
          icon={<FaPhoneAlt />}
          infoName={"연락처"}
          content={"010-5129-2239"}
        />
        <InfoItem
          icon={<FaMailBulk />}
          infoName={"이메일"}
          content={"jaehoon975@gmail.com"}
        />
        <InfoItem
          icon={<FaSchool />}
          infoName={"학력"}
          content={"경운대학교"}
          bracketContent={"항공소프트웨어공학과"}
        />
      </div>
    </div>
  );
};

export default AboutMe;
