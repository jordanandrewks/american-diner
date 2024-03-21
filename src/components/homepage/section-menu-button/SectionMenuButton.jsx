import React from "react";
import styles from "./SectionMenuButton.module.css";

const SectionMenuButton = ({ placeHolderTextLine1, placeHolderTextLine2, placeHolderTextLine3 }) => {
  return (
    <div className={styles.container}>
      <div className={styles.buttonTextContainer}>
        <p className={styles.buttonText}>{placeHolderTextLine1}</p>
        <p className={styles.buttonText}>{placeHolderTextLine2}</p>
        <p className={styles.buttonText}>{placeHolderTextLine3}</p>
      </div>
    </div>
  );
};

export default SectionMenuButton;
