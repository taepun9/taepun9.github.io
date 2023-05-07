import React from "react";
import styles from "../styles/Projects.module.scss";
import ProjectBox from "./ProjectBox";

import Init from "../images/location/init.png";
import SetLocation from "../images/location/setLocation.png";
import Result1 from "../images/location/result1.png";
import Result4 from "../images/location/result4.jpg";
import Python3 from "../images/logo/python.png";
import JS from "../images/location/JS.png";
import Qt from "../images/location/Qt.png";
import Folium from "../images/location/Folium.png";

import ExcutionScreen from "../images/peopleCounter/excutionScreen.png";
import WebPage from "../images/peopleCounter/webPage.png";
import HTMLandCSS from "../images/logo/HTMLandCSS.png";
import Flask from "../images/logo/Flask.png";
import MariaDB from "../images/logo/mariaDB2.png";
import OpenCV from "../images/logo/openCV.png";
import YOLO from "../images/logo/YOLO.png";
const Projects = ({ projectsRef }) => {
  const resList1 = {
    project: [
      {
        photo1: Init,
        photo2: SetLocation,
        label1: "실행초기 화면",
        label2: "기준위치지정 화면",
      },
      {
        photo1: Result1,
        label1: "실행완료 화면",
        photo2: Result4,
        label2: "분류결과",
      },
    ],
    techStack: [
      { logo: Python3 },
      { logo: JS },
      { logo: Qt },
      { logo: Folium, option: "test" },
    ],
  };
  const resList2 = {
    project: [
      {
        photo1: WebPage,
        label1: "웹페이지",
        photo2: ExcutionScreen,
        label2: "실행화면",
      },
    ],
    techStack: [
      { logo: HTMLandCSS },
      { logo: Flask },
      { logo: Python3 },
      { logo: MariaDB },
      { logo: OpenCV },
      { logo: YOLO },
    ],
  };

  return (
    <div className={styles.container} ref={projectsRef}>
      <h1 className={styles.title}>Projects</h1>
      <ProjectBox
        projectName={"위치기반 사진분류"}
        description1={
          "  사진의 GPS 정보를 통해 지정한 범위 안에 포함되는 사진을 분류하는 프로그램"
        }
        resList={resList1}
      />
      <ProjectBox
        projectName={"피플카운터"}
        description1={
          "출입구 통과 인원을 카메라로 인식하여 카운트 현재 인원 수와 밀집도 등 웹페이지에서 확인 가능하도록 구현한 프로젝트"
        }
        resList={resList2}
        description2={
          "대학교 재학 당시, 캡스톤디자인 과제로 수행한 프로젝트로 백엔드 작업과 딥러닝 학습 진행을 담당"
        }
      />
    </div>
  );
};

export default Projects;
