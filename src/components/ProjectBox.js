import React from "react";
import styles from "../styles/ProjectBox.module.scss";
import Line from "./Line";

const ProjectBox = ({
  projectName,
  description1,
  resList,
  description2 = "",
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleBox}>
        <h1 className={styles.title}>{projectName}</h1>
      </div>
      <div className={styles.content}>
        <p className={styles.description}>{description1}</p>
        {resList.project.map(({ photo1, photo2, label1, label2 }, idx) => {
          return (
            <div className={styles.photoSet} key={`${label1}_${idx}`}>
              <div className={styles.photoBox}>
                <img className={styles.photo} src={photo1} />
                <p className={styles.label}>{label1}</p>
              </div>
              <div className={styles.photoBox}>
                <img className={styles.photo} src={photo2} />
                <p className={styles.label}>{label2}</p>
              </div>
            </div>
          );
        })}
        <Line>사용기술</Line>
        <div className={styles.techStackWrapper}>
          <div className={styles.techStack}>
            {resList.techStack.map(({ logo, option }, idx) => {
              return (
                <img
                  className={styles.logo}
                  src={logo}
                  key={idx}
                  option={option}
                />
              );
            })}
          </div>
        </div>
        {description2 != "" ? (
          <>
            <Line>담당파트</Line>
            <p className={styles.description}>{description2}</p>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectBox;
