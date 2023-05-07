import React from "react";
import styles from "../styles/InfoItem.module.scss";
const InfoItem = ({
  icon,
  infoName = "항목명",
  content = "내용",
  bracketContent = "",
}) => {
  return (
    <div className={styles.container}>
      <span>{icon}</span>
      <div className={styles.textWrapper}>
        <span>{infoName}</span>
        <span>{content}</span>
        {bracketContent != "" ? (
          <>
            <span>({bracketContent})</span>
          </>
        ) : (
          false
        )}
      </div>
    </div>
  );
};

export default InfoItem;
